import { Camera, Scene, Vector, Color } from "../../modules/renderer.js";
import { Plane } from "../../modules/shapes/plane.js";
import { Light } from "../../modules/light.js";
import { Appearance } from "../../modules/appearance.js";
import { Box } from "../../modules/shapes/box.js";
import { Finish } from "../../modules/finish.js";

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

export function Boxes100(reflection = 0.5) {
  let shiny = new Finish({ shiny: 0.5, reflection: reflection });
  let camera = new Camera(new Vector(-20, 30, -50), new Vector(0, 4, 0));
  let background = new Color(0, 0, 0);
  let lights = [new Light(new Vector(-30, 50, -12), Color.White)];
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
    // --- 50 ---
    new Box(
      new Vector(4, 0, -19),
      new Vector(8, 4, -15),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(5, 0, -23),
      new Vector(7, 2, -21),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(-2, 0, -17),
      new Vector(0, 2, -15),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(-2, 0, -23),
      new Vector(0, 2, -21),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(13, 0, -18),
      new Vector(15, 2, -16),
      new Appearance(Color.Yellow, shiny)
    ),
    // --- 55 ---
    new Box(
      new Vector(-6, 0, -19),
      new Vector(-9, 3, -16),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(-6, 0, -24),
      new Vector(-8, 2, -22),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-12, 0, -19),
      new Vector(-14, 2, -17),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-12, 0, -24),
      new Vector(-14, 1, -22),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(5, 4, -18),
      new Vector(7, 6, -16),
      new Appearance(Color.Blue, shiny)
    ),
    // --- 60 ---
    new Box(
      new Vector(-18, 0, -15),
      new Vector(-22, 6, -11),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(40, 0, 40),
      new Vector(55, 15, 55),
      new Appearance(Color.Grey, shiny)
    ),
    new Box(
      new Vector(30, 0, 30),
      new Vector(34, 4, 34),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(40, 0, 30),
      new Vector(44, 4, 34),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(30, 0, 40),
      new Vector(34, 4, 44),
      new Appearance(Color.Blue, shiny)
    ),
    // --- 65 ---
    new Box(
      new Vector(22, 0, 40),
      new Vector(26, 4, 44),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(15, 0, 40),
      new Vector(17, 3, 43),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(15, 0, 32),
      new Vector(17, 3, 35),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(10, 0, 30),
      new Vector(5, 5, 35),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(9, 5, 31),
      new Vector(6, 8, 34),
      new Appearance(Color.Black, shiny)
    ),
    // --- 70 ---
    new Box(
      new Vector(9, 0, 21),
      new Vector(5, 4, 25),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(2, 0, 21),
      new Vector(-2, 4, 25),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(-6, 0, 21),
      new Vector(-10, 4, 25),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(-11, 0, 24),
      new Vector(-16, 2, 25),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(44, 0, 21),
      new Vector(51, 7, 28),
      new Appearance(Color.Red, shiny)
    ),
    // --- 75 ---
    new Box(
      new Vector(44, 0, 15),
      new Vector(47, 3, 18),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(49, 0, 15),
      new Vector(52, 3, 18),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(55, 0, 21),
      new Vector(62, 7, 28),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(35, 0, 15),
      new Vector(38, 3, 18),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(35, 0, 21),
      new Vector(38, 3, 24),
      new Appearance(Color.Grey, shiny)
    ),
    // --- 80 ---
    new Box(
      new Vector(44, 0, 12),
      new Vector(51, 7, 19),
      new Appearance(Color.Yellow, shiny)
    ),
    new Box(
      new Vector(44, 0, 6),
      new Vector(47, 3, 9),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(49, 0, 6),
      new Vector(52, 3, 9),
      new Appearance(Color.Grey, shiny)
    ),
    new Box(
      new Vector(55, 0, 12),
      new Vector(62, 7, 19),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(35, 0, 7),
      new Vector(38, 3, 10),
      new Appearance(Color.Red, shiny)
    ),
    // --- 85 ---
    new Box(
      new Vector(35, 0, 12),
      new Vector(38, 3, 15),
      new Appearance(Color.Black, shiny)
    ),
    new Box(
      new Vector(35, 0, -7),
      new Vector(38, 3, -10),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(47, 0, -18),
      new Vector(50, 3, -15),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(55, 0, -5),
      new Vector(62, 7, -12),
      new Appearance(Color.Grey, shiny)
    ),
    new Box(
      new Vector(35, 0, -17),
      new Vector(38, 3, -14),
      new Appearance(Color.Yellow, shiny)
    ),
    // --- 90 ---
    new Box(
      new Vector(30, 0, -3),
      new Vector(34, 4, 1),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(30, 0, -3),
      new Vector(34, 4, 1),
      new Appearance(Color.Blue, shiny)
    ),
    new Box(
      new Vector(25, 0, -18),
      new Vector(29, 4, -22),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(17, 0, -18),
      new Vector(21, 4, -22),
      new Appearance(Color.Magenta, shiny)
    ),
    new Box(
      new Vector(55, 0, 0),
      new Vector(58, 3, -3),
      new Appearance(Color.Magenta, shiny)
    ),
    // --- 95 ---
    new Box(
      new Vector(-5, 0, 50),
      new Vector(15, 20, 70),
      new Appearance(Color.Red, shiny)
    ),
    new Box(
      new Vector(-25, 0, 50),
      new Vector(-10, 15, 65),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-20, 0, 36),
      new Vector(-16, 4, 40),
      new Appearance(Color.Cyan, shiny)
    ),
    new Box(
      new Vector(-16, 0, 10),
      new Vector(-14, 2, 12),
      new Appearance(Color.Green, shiny)
    ),
    new Box(
      new Vector(-16, 0, -26),
      new Vector(-14, 2, -28),
      new Appearance(Color.Grey, shiny)
    ),
    // --- 100 ---
  ];
  return new Scene(camera, background, shapes, lights);
}
