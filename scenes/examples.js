import { Camera, Scene, Vector, Color } from "../modules/renderer.js";
import { Sphere } from "../modules/shapes/sphere.js";
import { Plane } from "../modules/shapes/plane.js";
import { Box } from "../modules/shapes/box.js";
import { Light } from "../modules/light.js";
import { Appearance } from "../modules/appearance.js";
import { Finish } from "../modules/finish.js";

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
    new Sphere(new Vector(-4, 4, 10), 4, new Appearance(Color.Blue, shiny)),
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
    new Sphere(new Vector(-8, 8, 8), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-32, 10, -5), 0.5, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(-15, 4, -20), 0.5, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(18, 2, 6), 0.5, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(14, 4, 3), 0.5, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(18, 7, 2), 0.5, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(19, 3, 1), 0.5, new Appearance(Color.White, shiny)),

    new Sphere(new Vector(10, 2, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(10, 1, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-6, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-2, 4, 10), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(-1.2, 1, -1), 1, new Appearance(Color.Cyan, shiny)),

    new Sphere(new Vector(1, 1, 0), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(2, 2, -4), 1, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-15, 2, 4), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-4, 4, 4), 4, new Appearance(Color.Blue, shiny)),
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
    new Sphere(new Vector(8, 8, -8), 2, new Appearance(Color.Blue, shiny)),
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
    new Sphere(new Vector(2, 1, 10), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(7.5, 1, -7.5), 1, new Appearance(Color.Cyan, shiny)),
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Boxes(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-10, 20, -20), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Box(
      new Vector(-2, 0, -2),
      new Vector(2, 4, 2),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(4, 0, 4),
      new Vector(6, 4, 6),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(8, 0, 8),
      new Vector(10, 4, 10),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(-2, 2, -4),
      new Vector(4, 3, -8),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(0, 0, -2),
      new Vector(-1, 1, -3),
      new Appearance(Color.Blue, shiny)
    ),
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Boxes10(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-15, 20, -40), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Box(
      new Vector(-2, 0, -2),
      new Vector(2, 3, 2),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(4, 0, -6),
      new Vector(7, 4, -1),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-10, 0, 2),
      new Vector(-5, 2, 7),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(6, 0, 10),
      new Vector(11, 4, 12),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(-2, 0, -14),
      new Vector(1, 3, -8),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(12, 0, -2),
      new Vector(17, 5, 3),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(-14, 0, 8),
      new Vector(-8, 2, 14),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(8, 0, 16),
      new Vector(13, 4, 23),
      new Appearance(Color.White, shiny)
    ),
    new Box(
      new Vector(-6, 0, -8),
      new Vector(-3, 3, -4),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(18, 0, -6),
      new Vector(24, 5, -1),
      new Appearance(Color.Blue, shiny)
    ),
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Boxes50(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-20, 20, -50), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Box(
      new Vector(-2, 0, -2),
      new Vector(2, 4, 2),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(4, 0, 4),
      new Vector(6, 4, 6),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(8, 0, 8),
      new Vector(10, 4, 10),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(-2, 2, -4),
      new Vector(4, 3, -8),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(0, 0, -2),
      new Vector(-1, 1, -3),
      new Appearance(Color.Blue, shiny)
    ),

    new Box(
      new Vector(-5, 0, -5),
      new Vector(-9, 4, -9),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(2, 2, 7),
      new Vector(4, 6, 9),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(11, 3, 3),
      new Vector(13, 6, 5),
      new Appearance(Color.White, shiny)
    ),
    new Box(
      new Vector(-4, 3, -6),
      new Vector(2, 4, -4),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(10, 2, 10),
      new Vector(12, 4, 12),
      new Appearance(Color.Red, shiny)
    ),

    new Box(
      new Vector(-2, 0, -2),
      new Vector(2, 4, 2),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(4, 0, 4),
      new Vector(6, 4, 6),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(8, 0, 8),
      new Vector(10, 4, 10),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(-2, 2, -4),
      new Vector(4, 3, -8),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(0, 0, -2),
      new Vector(-1, 1, -3),
      new Appearance(Color.Blue, shiny)
    ),

    new Box(
      new Vector(-18, 0, -18),
      new Vector(-22, 4, -22),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(5, 0, -10),
      new Vector(7, 3, -12),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(-11, 0, -3),
      new Vector(-13, 4, -5),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(4, 2, 6),
      new Vector(-2, 4, 4),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(-10, 0, -10),
      new Vector(-12, 4, -12),
      new Appearance(Color.Cyan, shiny)
    ),

    new Box(
      new Vector(-10, 0, 10),
      new Vector(-14, 4, 14),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(-5, 2, 10),
      new Vector(-7, 6, 12),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(11, 0, 3),
      new Vector(13, 3, 5),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(4, 0, 6),
      new Vector(2, 4, 4),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-10, 2, 10),
      new Vector(-12, 4, 12),
      new Appearance(Color.Magenta, shiny)
    ),

    new Box(
      new Vector(-20, 0, 10),
      new Vector(-24, 4, 14),
      new Appearance(Color.Grey, shiny)
    ),
    new Box(
      new Vector(5, 2, -10),
      new Vector(7, 6, -12),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(11, 0, -3),
      new Vector(13, 3, -5),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(4, 0, -6),
      new Vector(2, 4, -4),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(10, 0, -10),
      new Vector(12, 4, -12),
      new Appearance(Color.Blue, shiny)
    ),

    new Box(
      new Vector(-20, 0, 10),
      new Vector(-24, 4, 14),
      new Appearance(Color.Grey, shiny)
    ),
    new Box(
      new Vector(5, 2, -10),
      new Vector(7, 6, -12),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(11, 0, -3),
      new Vector(13, 3, -5),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(4, 0, -6),
      new Vector(2, 4, -4),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(10, 0, -10),
      new Vector(12, 4, -12),
      new Appearance(Color.Blue, shiny)
    ),

    new Box(
      new Vector(20, 0, -10),
      new Vector(24, 4, -14),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-5, 2, -10),
      new Vector(-7, 6, -12),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(-11, 0, 3),
      new Vector(-13, 3, 5),
      new Appearance(Color.White, shiny)
    ),
    new Box(
      new Vector(-4, 0, -6),
      new Vector(-2, 4, -4),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-10, 0, 12),
      new Vector(-12, 4, 14),
      new Appearance(Color.Yellow, shiny)
    ),

    new Box(
      new Vector(-20, 0, 6),
      new Vector(-24, 4, 8),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-20, 2, 4),
      new Vector(-24, 6, 5),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-20, 0, 12),
      new Vector(-24, 3, 16),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-20, 0, 18),
      new Vector(-24, 4, 20),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-20, 0, 0),
      new Vector(-24, 4, 2),
      new Appearance(Color.Blue, shiny)
    ),

    new Box(
      new Vector(20, 0, 6),
      new Vector(24, 4, 8),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(20, 2, 4),
      new Vector(24, 6, 5),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(20, 0, 12),
      new Vector(24, 3, 16),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(20, 0, 18),
      new Vector(24, 4, 20),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(20, 0, 0),
      new Vector(24, 4, 2),
      new Appearance(Color.Red, shiny)
    ),
  ];
  return new Scene(camera, background, shapes, lights);
}
