import { MAX_DEPTH } from './settings.js';

export class Ray {
    /** Construct a new ray starting from the specified start 
     * point, and pointing in the specified direction */
    constructor(start, direction) {
        this.start = start;
        this.direction = direction.unit();
    }

    /** Trace this ray through the specified scene, and return the resulting color. */
    trace = (scene, depth = 0) => {
        if (depth > MAX_DEPTH) return scene.background;

        let nearestIntersection = scene.octree.findNearestIntersection(this);
        if(!nearestIntersection) return scene.background;
        return nearestIntersection.shape.getColorAt(nearestIntersection.point, this, scene, depth + 1);
    }

    reflect = normal => {
        let inverse = this.direction.invert();
        return inverse.add(normal.scale(normal.dot(inverse)).add(this.direction).scale(2));
    }
    
    toString = () => `${this.start.toString()} => ${this.direction.toString()}`;
}