let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");
let renderButton = document.getElementById("render-button");
let cancelButton = document.getElementById("cancel-button");

let sceneSelect = document.getElementById("scenes");
let countSelect = document.getElementById("count");

let threadSelect = document.getElementById("threads");

function paintPixel(x, y, color) {
  var rgb = `rgb(${color.r},${color.g},${color.b})`;
  ctx.fillStyle = rgb;
  ctx.fillRect(x, y, 1, 1);
}

function handleMessageFromWorker(message) {
  let data = message.data;
  switch (data.command) {
    case "putImageData":
      ctx.putImageData(data.imageData, data.x, data.y);
      break;
    case "fillRect":
      let color = { r: data.r, g: data.g, b: data.b };
      paintPixel(data.x, data.y, color);
      break;
    case "finished":
      console.log("finished!");
      runningWorkers--;
      updateStatus(runningWorkers > 0);
      break;
  }
}

function partition(width, height, rows, columns) {
  let blockWidth = Math.ceil(width / rows);
  let blockHeight = Math.ceil(height / columns);
  let x = 0;
  let y = 0;
  let blocks = [];
  while (x + blockWidth < width) {
    while (y + blockHeight < height) {
      blocks.push({ x: x, y: y, width: blockWidth, height: blockHeight });
      y += blockHeight;
    }
    blocks.push({ x: x, y: y, width: blockWidth, height: blockHeight });
    y = 0;
    x += blockWidth;
  }
  while (y + blockHeight < height) {
    blocks.push({ x: x, y: y, width: width - x, height: blockHeight });
    y += blockHeight;
  }
  blocks.push({ x: x, y: y, width: width - x, height: height - y });
  return blocks;
}

function getRows() {
  let val = threadSelect.value;
  switch (val) {
    case "1":
      return 1;
    case "2":
      return 1;
    case "3":
      return 1;
    case "4":
      return 2;
    case "5":
      return 1;
    case "6":
      return 2;
    case "7":
      return 1;
    case "8":
      return 2;
    case "9":
      return 3;
    case "10":
      return 2;
    case "11":
      return 1;
    case "12":
      return 3;
    case "13":
      return 1;
    case "14":
      return 2;
    case "15":
      return 3;
    case "16":
      return 4;
  }
}

function getColumns() {
  let val = threadSelect.value;
  switch (val) {
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 2;
    case "5":
      return 5;
    case "6":
      return 3;
    case "7":
      return 7;
    case "8":
      return 4;
    case "9":
      return 3;
    case "10":
      return 5;
    case "11":
      return 11;
    case "12":
      return 4;
    case "13":
      return 13;
    case "14":
      return 7;
    case "15":
      return 5;
    case "16":
      return 4;
  }
}

let runningWorkers = 0;
function render() {
  window.renderStarted = new Date().valueOf();
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  let rows = getRows();
  let columns = getColumns();
  let blocks = partition(ctx.canvas.width, ctx.canvas.height, rows, columns);
  ctx.strokeStyle = "#999";
  blocks.forEach((block) => {
    ctx.strokeRect(block.x, block.y, block.width, block.height);
    runWorkerForBlock(canvas, block);
    runningWorkers++;
  });
  updateStatus(true);
}

function getSceneNumber() {
  if (sceneSelect.value === "Spheres") {
    switch (countSelect.value) {
      case "10":
        return 1;
      case "50":
        return 2;
      case "100":
        return 3;
    }
  }
  if (sceneSelect.value === "Boxes") {
    switch (countSelect.value) {
      case "10":
        return 4;
      case "50":
        return 5;
      case "100":
        return 6;
    }
  }
  switch (countSelect.value) {
    case "10":
      return 7;
    case "50":
      return 8;
    case "100":
      return 9;
  }
  return 1;
}

function runWorkerForBlock(canvas, block) {
  console.log("new worker!");
  let sceneNumber = getSceneNumber();
  let worker = new Worker("worker.js", { type: "module" });
  worker.addEventListener("message", handleMessageFromWorker);
  cancelButton.addEventListener("click", function () {
    worker.terminate();
    document.getElementById("timer").innerHTML = "Render canceled";
    updateStatus(false);
  });
  worker.postMessage({
    command: "render",
    width: canvas.width,
    height: canvas.height,
    block: block,
    scene: sceneNumber,
  });
}

function updateStatus(running) {
  renderButton.disabled = running;
  cancelButton.disabled = !running;
  if (!running) {
    var elapsed = new Date().valueOf() - window.renderStarted;
    var output = `Rendered for ${elapsed / 1000} seconds`;
    console.log(output);
    document.getElementById("timer").innerHTML = output;
  }
}

renderButton.addEventListener("click", render);
render();
