import ProjectModel from "@/model/ProjectModel";

export default class Portfolio {
  target: HTMLElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  projects: ProjectModel[] = [];
  width: number;
  height: number;

  constructor(width?: number, height?: number) {
    width && (this.width = width);
    height && (this.height = height);
    console.log("created");
  }

  setup() {
    window.addEventListener("resize", this.handleResizeCanvas.bind(this));
  }

  handleResizeCanvas() {
    if (this.width) {
      this.canvas.width = this.width - 17;
    } else {
      this.canvas.width = innerWidth - 17;
    }
    if (this.height) {
      this.canvas.height = this.height;
    } else {
      this.canvas.height = innerHeight;
    }
  }

  setTarget(target: HTMLElement) {
    const canvas = target.querySelector(
      "canvas#layer-sub-app"
    ) as HTMLCanvasElement;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.target = target;
    this.handleResizeCanvas();
    this.setup();
  }

  addProject(...projects: ProjectModel[]) {
    this.projects.push(...projects.filter((p) => p));
  }

  renderWall(x: number, y: number) {
    const allSize = 100;
    const sizeX = 200 + allSize;
    const sizeY = 100 + allSize / 2;
    // Clear the canvas

    // Translate the origin to the (x, y) position
    this.ctx.save();
    this.ctx.translate(this.canvas.width / 2, sizeY * 2 + 25);

    // Set the transformation matrix for isometric projection
    // this.ctx.setTransform(1, 0.5, -1, 0.5, 0, 0);

    // Draw the floor
    this.ctx.fillStyle = "#88C0D0";
    this.ctx.beginPath();
    this.ctx.moveTo(-sizeX, 0);
    this.ctx.lineTo(0, sizeY);
    this.ctx.lineTo(sizeX, 0);
    this.ctx.lineTo(0, -sizeY);
    this.ctx.closePath();
    this.ctx.fill();

    // // Draw a bed
    // this.ctx.fillStyle = "#3B4252";
    // this.ctx.fillRect(-150, -20, sizeY, 50); // Top surface
    // this.ctx.fillStyle = "#2E3440";
    // this.ctx.fillRect(-150, 30, sizeY, 10); // Front surface

    // // Draw a wardrobe
    // this.ctx.fillStyle = "#D08770";
    // this.ctx.fillRect(-50, -60, 50, 80); // Top surface
    // this.ctx.fillStyle = "#BF616A";
    // this.ctx.fillRect(-50, 20, 50, 10); // Front surface

    // Draw walls
    // Left wall
    this.ctx.fillStyle = "#81A1C1";
    this.ctx.beginPath();
    this.ctx.moveTo(-sizeX, 0);
    this.ctx.lineTo(-sizeX, -sizeY);
    this.ctx.lineTo(0, -sizeX);
    this.ctx.lineTo(0, -sizeY);
    this.ctx.closePath();
    this.ctx.fill();

    // Right wall
    this.ctx.fillStyle = "#5E81AC";
    this.ctx.beginPath();
    this.ctx.moveTo(sizeX, 0);
    this.ctx.lineTo(sizeX, -sizeY);
    this.ctx.lineTo(0, -sizeX);
    this.ctx.lineTo(0, -sizeY);
    this.ctx.closePath();
    this.ctx.fill();

    // Restore the origin
    this.ctx.restore();
  }

  renderProject(project: ProjectModel, index: number) {
    const size = 50;
    const limit = 5;
    const gap = size * 1.5;
    const topOffset = this.canvas.height / 2 + 50;
    const leftOffset = this.canvas.width / 2 - 200;

    const fixedX = (index % limit) * gap + leftOffset + index * 10;
    const fixedY = Math.floor(index / limit) * gap + topOffset + index * -10;
    const x = fixedX;
    const y = fixedY;
    const height = 50;

    // Top surface
    this.ctx.beginPath();
    this.ctx.moveTo(x - size / 2, y - size / 4);
    this.ctx.lineTo(x, y - height / 2);
    this.ctx.lineTo(x + size / 2, y - size / 4);
    this.ctx.lineTo(x, y);
    this.ctx.closePath();
    this.ctx.fillStyle = "#95a5a6"; // Light grey
    this.ctx.fill();

    // Left surface
    this.ctx.beginPath();
    this.ctx.moveTo(x - size / 2, y - size / 4);
    this.ctx.lineTo(x, y);
    this.ctx.lineTo(x, y + height / 2);
    this.ctx.lineTo(x - size / 2, y + size / 4);
    this.ctx.closePath();
    this.ctx.fillStyle = "#bdc3c7"; // Lightest grey
    this.ctx.fill();

    // Right surface
    this.ctx.beginPath();
    this.ctx.moveTo(x + size / 2, y - size / 4);
    this.ctx.lineTo(x, y);
    this.ctx.lineTo(x, y + height / 2);
    this.ctx.lineTo(x + size / 2, y + size / 4);
    this.ctx.closePath();
    this.ctx.fillStyle = "#7f8c8d"; // Darker grey
    this.ctx.fill();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw(time: number) {
    time *= 0.001;

    this.clearCanvas.bind(this);
    // console.log(time);
    // console.log(this.projects);

    this.renderWall(5, this.canvas.height / 2);

    this.ctx.save();
    // this.ctx.transform(0, 0, 1, 1, 1, 0);
    // this.ctx.translate(this.ctx.canvas.width / 2, this.ctx.canvas.height / 4);

    // Set the transformation matrix for isometric projection
    // this.ctx.setTransform(1, 0.5, -1, 0.5, 0, 0);

    this.projects.forEach(this.renderProject.bind(this));
    this.ctx.restore();

    requestAnimationFrame(this.draw.bind(this));
  }

  render() {
    this.draw(0);
  }
}
