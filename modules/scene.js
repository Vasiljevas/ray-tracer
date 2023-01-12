import { Color } from './color.js';
import { Octree } from './octree.js';
import { Vector } from './vector.js';

export class Scene {
    octree;
    constructor(camera, background, shapes, lights, boundingBoxSize = 1) {
        this.camera = camera;
        this.background = background ?? Color.Black;
        this.octree = new Octree(new Vector(0, 0, 0), boundingBoxSize);
        this.shapes = shapes ?? [];
        for (let shape of shapes) {
            this.octree.add(shape);
        }
        this.lights = lights ?? [];
    }
    trace = (x, y) => this.camera.trace(this, x, y);
}
