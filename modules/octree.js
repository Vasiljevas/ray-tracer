import { Ray } from "./ray";
import { Vector } from "./vector";
import { MAX_SHAPES_PER_NODE } from "./settings";

export class Octree {
    position;
    size;
    objects;
    children;

    constructor(position, size) {
        this.position = position;
        this.size = size;
        this.shapes = [];
        this.children = [];
    }

    add(shape) {
        // If the node has children, add the object to the appropriate child node
        if (this.children.length) {
            this.addToChild(shape);
            return;
        }

        // If the node doesn't have children, add the object to the objects array
        this.shapes.push(shape);

        // If the node has reached the maximum capacity, subdivide the node
        if (this.shapes.length > MAX_SHAPES_PER_NODE) {
            this.subdivide();
        }
    }

    addToChild(shape) {
        // Determine which child node the object belongs in
        let childIndex = this.getChildIndex(shape.position);
        // Add the object to the child node
        this.children[childIndex].add(shape);
    }

    getChildIndex(position) {
        let x = position.x >= this.position.x + this.size / 2 ? 1 : 0;
        let y = position.y >= this.position.y + this.size / 2 ? 1 : 0;
        let z = position.z >= this.position.z + this.size / 2 ? 1 : 0;
        return x + (y * 2) + (z * 4);
    }

    subdivide() {
        let halfSize = this.size / 2;
        let x = this.position.x;
        let y = this.position.y;
        let z = this.position.z;

        this.children[0] = new Octree(new Vector(x, y, z), halfSize);
        this.children[1] = new Octree(new Vector(x + halfSize, y, z), halfSize);
        this.children[2] = new Octree(new Vector(x, y + halfSize, z), halfSize);
        this.children[3] = new Octree(new Vector(x + halfSize, y + halfSize, z), halfSize);
        this.children[4] = new Octree(new Vector(x, y, z + halfSize), halfSize);
        this.children[5] = new Octree(new Vector(x + halfSize, y, z + halfSize), halfSize);
        this.children[6] = new Octree(new Vector(x, y + halfSize, z + halfSize), halfSize);
        this.children[7] = new Octree(new Vector(x + halfSize, y + halfSize, z + halfSize), halfSize);

        // Reinsert the objects into the appropriate child nodes
        for (let i = 0; i < this.shapes.length; i++) {
            this.addToChild(this.shapes[i]);
        }

        // Clear the objects array
        this.shapes = [];
    }

    findNearestIntersection(ray) {
        let nearestIntersection = null;
        let nearestDistance = Infinity;
        for (let shape of this.shapes) {
            let distance = shape.closestDistanceAlongRay(ray);
            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIntersection = { shape: shape, point: ray.start.add(ray.direction.scale(distance))};
            }
        }

        for (let child of this.children) {
            if (child.isIntersecting(ray)) {
                let intersection = child.findNearestIntersection(ray);
                if (!intersection) {
                    continue;
                }
                let distance = intersection.point.distanceTo(ray.start);
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestIntersection = intersection;
                }
            }
        }
        return nearestIntersection;
    }

    isIntersecting(ray) {
        let tmin = (this.position.x - ray.start.x) / ray.direction.x;
        let tmax = (this.position.x + this.size - ray.start.x) / ray.direction.x;

        if (tmin > tmax) {
            [tmin, tmax] = [tmax, tmin];
        }

        let tymin = (this.position.y - ray.start.y) / ray.direction.y;
        let tymax = (this.position.y + this.size - ray.start.y) / ray.direction.y;

        if (tymin > tymax) {
            [tymin, tymax] = [tymax, tymin];
        }

        if ((tmin > tymax) || (tymin > tmax)) {
            return false;
        }

        if (tymin > tmin) {
            tmin = tymin;
        }

        if (tymax < tmax) {
            tmax = tymax;
        }

        let tzmin = (this.position.z - ray.start.z) / ray.direction.z;
        let tzmax = (this.position.z + this.size - ray.start.z) / ray.direction.z;

        if (tzmin > tzmax) {
            [tzmin, tzmax] = [tzmax, tzmin];
        }

        if ((tmin > tzmax) || (tzmin > tmax)) {
            return false;
        }

        return true;
    }

    isInShadow(point, vector) {
        let ray = new Ray(point, vector);
        let nearestIntersection = this.findNearestIntersection(ray);
        if (!nearestIntersection) {
            return false;
        }
        let distanceToLight = vector.length;
        return nearestIntersection.shape.closestDistanceAlongRay(ray) <= distanceToLight;
    }
}