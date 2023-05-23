import { Camera, Scene, Vector, Color } from "../../modules/renderer.js";
import { Sphere } from "../../modules/shapes/sphere.js";
import { Box } from "../../modules/shapes/box.js";
import { Plane } from "../../modules/shapes/plane.js";
import { Light } from "../../modules/light.js";
import { Appearance } from "../../modules/appearance.js";
import { Finish } from "../../modules/finish.js";

export function Mixed10(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-10, 10, -20), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Sphere(new Vector(6, 2, 0), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-2, 0, -2),
      new Vector(2, 4, 2),
      new Appearance(Color.Red, shiny)
    ),
    new Sphere(new Vector(4, 5, 15), 5, new Appearance(Color.Green, shiny)),
    new Box(
      new Vector(12, 0, 15),
      new Vector(16, 4, 19),
      new Appearance(Color.Blue, shiny)
    ),
    new Sphere(new Vector(-4, 2, -8), 2, new Appearance(Color.Cyan, shiny)),
    new Box(
      new Vector(-5, 0, 6),
      new Vector(-11, 6, 0),
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(-8, 9, 3), 3, new Appearance(Color.Grey, shiny)),
    new Box(
      new Vector(0, 0, -8),
      new Vector(3, 3, -11),
      new Appearance(Color.Green, shiny)
    ),
    new Sphere(new Vector(-8, 2, -6), 2, new Appearance(Color.Red, shiny)),
    new Box(
      new Vector(-12, 0, 6),
      new Vector(-16, 5, 0),
      new Appearance(Color.Magenta, shiny)
    ),
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Mixed50(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-30, 40, -30), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Sphere(new Vector(6, 2, 0), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-2, 0, -2),
      new Vector(2, 4, 2),
      new Appearance(Color.Red, shiny)
    ),
    new Sphere(new Vector(4, 5, 15), 5, new Appearance(Color.Green, shiny)),
    new Box(
      new Vector(12, 0, 15),
      new Vector(16, 4, 19),
      new Appearance(Color.Blue, shiny)
    ),
    new Sphere(new Vector(-4, 2, -8), 2, new Appearance(Color.Cyan, shiny)),
    new Box(
      new Vector(-5, 0, 6),
      new Vector(-11, 6, 0),
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(-8, 9, 3), 3, new Appearance(Color.Grey, shiny)),
    new Box(
      new Vector(0, 0, -8),
      new Vector(3, 3, -11),
      new Appearance(Color.Green, shiny)
    ),
    new Sphere(new Vector(-8, 2, -6), 2, new Appearance(Color.Red, shiny)),
    new Box(
      new Vector(-12, 0, 6),
      new Vector(-16, 5, 0),
      new Appearance(Color.Magenta, shiny)
    ),
    // --- 10 ---
    new Sphere(new Vector(15, 3, 0), 3, new Appearance(Color.Red, shiny)),
    new Box(
      new Vector(-15, 0, -10),
      new Vector(-19, 4, -6),
      new Appearance(Color.Cyan, shiny)
    ),
    new Sphere(new Vector(18, 3, 9), 3, new Appearance(Color.Black, shiny)),
    new Box(
      new Vector(-20, 0, -14),
      new Vector(-24, 4, -10),
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(0, 2, -16), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-8, 0, -8),
      new Vector(-10, 2, -10),
      new Appearance(Color.Blue, shiny)
    ),
    new Sphere(new Vector(0, 2, -16), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-8, 0, 18),
      new Vector(-16, 8, 26),
      new Appearance(Color.Red, shiny)
    ),
    new Sphere(new Vector(-20, 2, 4), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(11, 0, 8),
      new Vector(15, 4, 12),
      new Appearance(Color.Green, shiny)
    ),
    // --- 20 ---
    new Sphere(new Vector(50, 10, 10), 10, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(30, 3, 8), 4, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(28, 3, 3), 3, new Appearance(Color.White, shiny)),
    new Sphere(new Vector(28, 4, -8), 4, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(28, 4, -8), 4, new Appearance(Color.Black, shiny)),
    new Box(
      new Vector(-10, 0, -3),
      new Vector(-11, 1, -4),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-20, 0, -5),
      new Vector(-21, 1, -6),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-20, 0, -2),
      new Vector(-21, 1, -3),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(-20, 0, 1),
      new Vector(-22, 2, -1),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-16, 0, -13),
      new Vector(-19, 3, -16),
      new Appearance(Color.Red, shiny)
    ),
    // --- 30 ---
    new Sphere(new Vector(0, 2, -5), 2, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(-2, 2, -20), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(5, 2, -7), 2, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-4, 2, -14), 2, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(6, 3, -12), 3, new Appearance(Color.Cyan, shiny)),
    new Box(
      new Vector(0, 0, -23),
      new Vector(2, 2, -25),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(4, 0, -22),
      new Vector(6, 2, -24),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(3, 0, -19),
      new Vector(5, 2, -21),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(3, 0, -19),
      new Vector(5, 2, -21),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-5, 0, -20),
      new Vector(-7, 2, -22),
      new Appearance(Color.Cyan, shiny)
    ),
    // --- 40 ---
    new Sphere(new Vector(-5, 3, 15), 3, new Appearance(Color.Cyan, shiny)),
    new Sphere(new Vector(-18, 2, 13), 2, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-22, 2, 10), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-28, 3, 12), 3, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-27, 2, 5), 2, new Appearance(Color.Grey, shiny)),
    new Box(
      new Vector(-26, 0, 1),
      new Vector(-29, 3, -2),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(-10, 0, -17),
      new Vector(-12, 2, -19),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(10, 0, -17),
      new Vector(12, 2, -19),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(20, 0, -17),
      new Vector(24, 4, -21),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(0, 0, 50),
      new Vector(16, 16, 66),
      new Appearance(Color.Blue, shiny)
    ),
    // --- 50 ---
  ];
  return new Scene(camera, background, shapes, lights);
}

export function Mixed100(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-30, 40, -30), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 25, -12), Color.White)];
  let shapes = [
    new Plane(Vector.Y, 0, new Appearance(Color.White)),
    new Sphere(new Vector(6, 2, 0), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-2, 0, -2),
      new Vector(2, 4, 2),
      new Appearance(Color.Red, shiny)
    ),
    new Sphere(new Vector(4, 5, 15), 5, new Appearance(Color.Green, shiny)),
    new Box(
      new Vector(12, 0, 15),
      new Vector(16, 4, 19),
      new Appearance(Color.Blue, shiny)
    ),
    new Sphere(new Vector(-4, 2, -8), 2, new Appearance(Color.Cyan, shiny)),
    new Box(
      new Vector(-5, 0, 6),
      new Vector(-11, 6, 0),
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(-8, 9, 3), 3, new Appearance(Color.Grey, shiny)),
    new Box(
      new Vector(0, 0, -8),
      new Vector(3, 3, -11),
      new Appearance(Color.Green, shiny)
    ),
    new Sphere(new Vector(-8, 2, -6), 2, new Appearance(Color.Red, shiny)),
    new Box(
      new Vector(-12, 0, 6),
      new Vector(-16, 5, 0),
      new Appearance(Color.Magenta, shiny)
    ),
    // --- 10 ---
    new Sphere(new Vector(15, 3, 0), 3, new Appearance(Color.Red, shiny)),
    new Box(
      new Vector(-15, 0, -10),
      new Vector(-19, 4, -6),
      new Appearance(Color.Cyan, shiny)
    ),
    new Sphere(new Vector(18, 3, 9), 3, new Appearance(Color.Black, shiny)),
    new Box(
      new Vector(-20, 0, -14),
      new Vector(-24, 4, -10),
      new Appearance(Color.Yellow, shiny)
    ),
    new Sphere(new Vector(0, 2, -16), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-8, 0, -8),
      new Vector(-10, 2, -10),
      new Appearance(Color.Blue, shiny)
    ),
    new Sphere(new Vector(0, 2, -16), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-8, 0, 18),
      new Vector(-16, 8, 26),
      new Appearance(Color.Red, shiny)
    ),
    new Sphere(new Vector(-20, 2, 4), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(11, 0, 8),
      new Vector(15, 4, 12),
      new Appearance(Color.Green, shiny)
    ),
    // --- 20 ---
    new Sphere(new Vector(50, 10, 10), 10, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(30, 3, 8), 4, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(28, 3, 3), 3, new Appearance(Color.White, shiny)),
    new Sphere(new Vector(28, 4, -8), 4, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(28, 4, -8), 4, new Appearance(Color.Black, shiny)),
    new Box(
      new Vector(-10, 0, -3),
      new Vector(-11, 1, -4),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-20, 0, -5),
      new Vector(-21, 1, -6),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-20, 0, -2),
      new Vector(-21, 1, -3),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(-20, 0, 1),
      new Vector(-22, 2, -1),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-16, 0, -13),
      new Vector(-19, 3, -16),
      new Appearance(Color.Red, shiny)
    ),
    // --- 30 ---
    new Sphere(new Vector(0, 2, -5), 2, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(-2, 2, -20), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(5, 2, -7), 2, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-4, 2, -14), 2, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(6, 3, -12), 3, new Appearance(Color.Cyan, shiny)),
    new Box(
      new Vector(0, 0, -23),
      new Vector(2, 2, -25),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(4, 0, -22),
      new Vector(6, 2, -24),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(3, 0, -19),
      new Vector(5, 2, -21),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(3, 0, -19),
      new Vector(5, 2, -21),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-5, 0, -20),
      new Vector(-7, 2, -22),
      new Appearance(Color.Cyan, shiny)
    ),
    // --- 40 ---
    new Sphere(new Vector(-5, 3, 15), 3, new Appearance(Color.Cyan, shiny)),
    new Sphere(new Vector(-18, 2, 13), 2, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-22, 2, 10), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-28, 3, 12), 3, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-27, 2, 5), 2, new Appearance(Color.Grey, shiny)),
    new Box(
      new Vector(-26, 0, 1),
      new Vector(-29, 3, -2),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(-10, 0, -17),
      new Vector(-12, 2, -19),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(10, 0, -17),
      new Vector(12, 2, -19),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(20, 0, -17),
      new Vector(24, 4, -21),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(0, 0, 50),
      new Vector(16, 16, 66),
      new Appearance(Color.Blue, shiny)
    ),
    // --- 50 ---
    new Sphere(new Vector(-30, 5, 40), 5, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-20, 2, 44), 2, new Appearance(Color.Cyan, shiny)),
    new Sphere(new Vector(-20, 3, 57), 3, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(-10, 2, 65), 2, new Appearance(Color.Magenta, shiny)),
    new Sphere(new Vector(-35, 3, 30), 3, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(50, 0, -30),
      new Vector(54, 4, -34),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(60, 0, -10),
      new Vector(72, 12, -22),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(50, 0, -10),
      new Vector(52, 2, -12),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(50, 0, -15),
      new Vector(52, 3, -17),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(49, 0, -23),
      new Vector(53, 4, -27),
      new Appearance(Color.Green, shiny)
    ),
    // --- 60 ---
    new Sphere(new Vector(40, 3, -10), 3, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(35, 2, -15), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(37, 1, -18), 1, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(39, 3, -24), 3, new Appearance(Color.Cyan, shiny)),
    new Sphere(new Vector(29, 2, -25), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-25, 0, 30),
      new Vector(-23, 2, 28),
      new Appearance(Color.Grey, shiny)
    ),
    new Box(
      new Vector(-21, 0, 26),
      new Vector(-19, 2, 24),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-26, 0, 20),
      new Vector(-23, 3, 17),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-36, 0, 16),
      new Vector(-32, 4, 12),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(-34, 0, 9),
      new Vector(-30, 4, 5),
      new Appearance(Color.Blue, shiny)
    ),
    // --- 70 ---
    new Sphere(new Vector(25, 3, -30), 3, new Appearance(Color.Yellow, shiny)),
    new Sphere(new Vector(17, 2, -24), 2, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(14, 2, -29), 2, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(5, 2, -30), 2, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(15, 3, -8), 3, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(24, 0, 30),
      new Vector(27, 3, 33),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(18, 0, 30),
      new Vector(22, 4, 34),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(11, 0, 32),
      new Vector(15, 4, 36),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(30, 0, 21),
      new Vector(34, 4, 25),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(3, 0, 30),
      new Vector(7, 4, 34),
      new Appearance(Color.Green, shiny)
    ),
    // --- 80 ---
    new Sphere(new Vector(-12, 3, -24), 3, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(50, 10, 60), 10, new Appearance(Color.Black, shiny)),
    new Sphere(new Vector(50, 2, 20), 2, new Appearance(Color.Blue, shiny)),
    new Sphere(new Vector(45, 3, 26), 3, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(38, 4, 30), 4, new Appearance(Color.White, shiny)),
    new Box(
      new Vector(-30, 0, 24),
      new Vector(-33, 3, 27),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(20, 0, -35),
      new Vector(23, 3, -38),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(14, 0, -35),
      new Vector(17, 3, -38),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(8, 0, -35),
      new Vector(11, 3, -38),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(0, 0, -27),
      new Vector(2, 2, -29),
      new Appearance(Color.Yellow, shiny)
    ),
    // --- 90 ---
    new Sphere(new Vector(-15, 3, 34), 3, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-27, 3, 54), 3, new Appearance(Color.Red, shiny)),
    new Sphere(new Vector(-11, 3, 54), 3, new Appearance(Color.Grey, shiny)),
    new Sphere(new Vector(-35, 3, 0), 3, new Appearance(Color.Green, shiny)),
    new Sphere(new Vector(-28, 2, -8), 2, new Appearance(Color.Blue, shiny)),
    new Box(
      new Vector(-27, 0, 70),
      new Vector(-17, 10, 80),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(35, 0, 55),
      new Vector(40, 5, 60),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(35, 0, 47),
      new Vector(40, 4, 51),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(28, 0, 47),
      new Vector(32, 4, 51),
      new Appearance(Color.Grey, shiny)
    ),
    new Box(
      new Vector(-11, 0, -15),
      new Vector(-13, 2, -13),
      new Appearance(Color.Magenta, shiny)
    ),
    // --- 100 ---
  ];
  return new Scene(camera, background, shapes, lights);
}
