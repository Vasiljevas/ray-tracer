import { Camera, Scene, Vector, Color } from "../../modules/renderer.js";
import { Sphere } from "../../modules/shapes/sphere.js";
import { Plane } from "../../modules/shapes/plane.js";
import { Light } from "../../modules/light.js";
import { Appearance } from "../../modules/appearance.js";
import { Finish } from "../../modules/finish.js";

export function Spheres(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-10, 10, -20), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Sphere(new Vector(6, 2, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(6, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-2, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-4, 4, 10), 4, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-3.2, 1, -1), 1, new Appearance(Color.Cyan, shiny)),
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Spheres10(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-10, 10, -20), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Sphere(new Vector(6, 2, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(6, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-2, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-4, 4, 10), 4, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-3.2, 1, -1), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(-6, 3, 1), 1, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(5, 2, 4), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(3, 4, 3), 1, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(1, 7, 2), 1, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(8, 3, 1), 1, new Appearance(Color.White, shiny)),
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Spheres50(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-10, 25, -30), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),

    new Sphere(new Vector(6, 2, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(6, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-2, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-4, 4, 30), 4, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-3.2, 1, -1), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(-6, 3, 1), 1, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(5, 2, 4), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(3, 4, 3), 1, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(1, 7, 2), 1, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(8, 3, 1), 1, new Appearance(Color.White, shiny)),

    new Sphere(
      new Vector(10, 1, 12),
      0.5,
      new Appearance(Color.Magenta, shiny)
    ),
    new Sphere(
      new Vector(12, 2, -12),
      0.5,
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(7, 5, -9), 1, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-8, 2, 40), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-32, 10, -5), 0.5, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(-15, 4, -20), 0.5, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(18, 2, 6), 0.5, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(14, 4, 3), 0.5, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(18, 7, 2), 0.5, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(19, 3, 1), 0.5, new Appearance(Color.White, shiny)),

    new Sphere(new Vector(10, 2, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(10, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-6, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-32, 2, 30), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-1.2, 1, -1), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(1, 1, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(2, 2, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-15, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-20, 4, 20), 4, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-11, 1, -11), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(11, 3, 11), 1, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(6, 2, 6), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-3, 4, -3), 1, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(6, 7, -2), 1, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(9, 3, -1), 1, new Appearance(Color.White, shiny)),

    new Sphere(
      new Vector(-10, 1, -12),
      0.5,
      new Appearance(Color.Magenta, shiny)
    ),
    new Sphere(
      new Vector(-12, 2, 12),
      0.5,
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(17, 5, -19), 1, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(40, 2, -28), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(
      new Vector(-20.5, 4, -15),
      0.5,
      new Appearance(Color.Cyan, shiny)
    ),

    new Sphere(
      new Vector(-10.9, 1, -10),
      0.5,
      new Appearance(Color.Grey, shiny)
    ),
    new Sphere(new Vector(-18, 1, 6), 0.5, new Appearance(Color.Red, shiny)),
    new Sphere(
      new Vector(-14, 1, 3),
      0.5,
      new Appearance(Color.Magenta, shiny)
    ),
    new Sphere(new Vector(-18, 1, 2), 0.5, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(-19, 1, 1), 0.5, new Appearance(Color.White, shiny)),

    new Sphere(new Vector(-10, 1, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(-10, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(6, 1, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(2, 2, 10), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(7.5, 1, -7.5), 1, new Appearance(Color.Cyan, shiny)),
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Spheres100(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-10, 25, -30), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),

    new Sphere(new Vector(6, 2, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(6, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-2, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-4, 4, 30), 4, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-3.2, 1, -1), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(-6, 3, 1), 1, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(5, 2, 4), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(3, 4, 3), 1, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(1, 7, 2), 1, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(8, 3, 1), 1, new Appearance(Color.White, shiny)),

    new Sphere(
      new Vector(10, 1, 12),
      0.5,
      new Appearance(Color.Magenta, shiny)
    ),
    new Sphere(
      new Vector(12, 2, -12),
      0.5,
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(7, 5, -9), 1, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-8, 2, 40), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-32, 10, -5), 0.5, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(-15, 4, -20), 0.5, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(18, 2, 6), 0.5, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(14, 4, 3), 0.5, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(18, 7, 2), 0.5, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(19, 3, 1), 0.5, new Appearance(Color.White, shiny)),

    new Sphere(new Vector(10, 2, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(10, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-6, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-32, 2, 30), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-1.2, 1, -1), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(1, 1, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(2, 2, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-15, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-20, 4, 20), 4, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-11, 1, -11), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(11, 3, 11), 1, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(6, 2, 6), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-3, 4, -3), 1, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(6, 7, -2), 1, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(9, 3, -1), 1, new Appearance(Color.White, shiny)),

    new Sphere(
      new Vector(-10, 1, -12),
      0.5,
      new Appearance(Color.Magenta, shiny)
    ),
    new Sphere(
      new Vector(-12, 2, 12),
      0.5,
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(17, 5, -19), 1, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(40, 2, -28), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(
      new Vector(-20.5, 4, -15),
      0.5,
      new Appearance(Color.Cyan, shiny)
    ),

    new Sphere(
      new Vector(-10.9, 1, -10),
      0.5,
      new Appearance(Color.Grey, shiny)
    ),
    new Sphere(new Vector(-18, 1, 6), 0.5, new Appearance(Color.Red, shiny)),
    new Sphere(
      new Vector(-14, 1, 3),
      0.5,
      new Appearance(Color.Magenta, shiny)
    ),
    new Sphere(new Vector(-18, 1, 2), 0.5, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(-19, 1, 1), 0.5, new Appearance(Color.White, shiny)),

    new Sphere(new Vector(-10, 1, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(-10, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(6, 1, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(2, 2, 10), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(7.5, 1, -7.5), 1, new Appearance(Color.Cyan, shiny)),
    // --- 50 ---
    new Sphere(new Vector(0, 2, -17), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(5, 1, -17), 1, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-30, 3, 17), 3, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(50, 10, 50), 10, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(-27, 2, -8), 2, new Appearance(Color.Yellow, shiny)),

    new Sphere(new Vector(-20, 2, -8), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(20, 2, -8), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(35, 2, 35), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(28, 2, 28), 2, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(28, 2, 36), 2, new Appearance(Color.Blue, shiny)),
    // --- 60 ---
    new Sphere(new Vector(36, 2, 28), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(30, 2, 22), 2, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(23, 2, 18), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(20, 2, 28), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(22, 2, 38), 2, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(15, 2, 17), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(15, 1, 24), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(15, 2, 31), 2, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(15, 2, 38), 2, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(15, 2, 45), 2, new Appearance(Color.Red, shiny)),
    // --- 70 ---
    new Sphere(new Vector(8, 1, 17), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(8, 2, 24), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(8, 1, 31), 1, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(8, 2, 38), 2, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(8, 1, 45), 1, new Appearance(Color.Black, shiny)),

    new Sphere(new Vector(15, 1, 15), 1, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(22, 1, 15), 1, new Appearance(Color.Cyan, shiny)),
    new Sphere(new Vector(29, 1, 15), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(36, 2, 15), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(43, 3, 15), 3, new Appearance(Color.Blue, shiny)),
    // --- 80 ---
    new Sphere(new Vector(0, 1, -10), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(2, 1, -8), 1, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(2, 1, -12), 1, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-2, 1, -8), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-2, 1, -12), 1, new Appearance(Color.Magenta, shiny)),

    new Sphere(new Vector(-25, 1, 4), 1, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(-23, 1, 6), 1, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-23, 1, 2), 1, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-27, 1, 6), 1, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-27, 1, 2), 1, new Appearance(Color.Black, shiny)),
    // --- 90 ---
    new Sphere(new Vector(-5, 2, 20), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-5, 1, 15), 1, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(0, 1, 15), 1, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-10, 1, 15), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-5, 1, 10), 1, new Appearance(Color.Magenta, shiny)),

    new Sphere(new Vector(-8, 2, -10), 2, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(-5, 1, -14), 1, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-15, 2, -2), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-12, 2, -8), 2, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(-15, 9, 54), 9, new Appearance(Color.Green, shiny)),
    // -- 100 --
  ];
  return new Scene(camera, background, shapes, lights);
}
