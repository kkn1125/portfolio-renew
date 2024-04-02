import ProjectModel from "@/model/ProjectModel";
import { pages } from "@/util/global";
import { responsiveImagePath } from "@/util/tool";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const animationStack: Function[] = [];

class SubApp {
  activate: number = 0;
  projects: {
    prj: ProjectModel;
  }[];
  images: { [k: string]: HTMLImageElement };
  private fov?: number;
  private aspect?: number;
  private near?: number;
  private far?: number;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private targetEL: HTMLElement;

  private raycaster: THREE.Raycaster;
  private pointer: THREE.Vector2;

  private width: number = 1024 - 17;
  private height: number = 500;

  private control: OrbitControls;

  private clock: THREE.Clock;

  walls: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshPhongMaterial | THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >[] = [];
  box: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshPhongMaterial,
    THREE.Object3DEventMap
  >[] = [];

  planeSize = 10;

  private planeGeometry: {
    wallGeometry?: THREE.PlaneGeometry;
    geometry?: THREE.PlaneGeometry;
    material?: THREE.MeshPhongMaterial;
    wallMaterial?: THREE.MeshPhongMaterial;
  } = {};
  private boxGeometry: {
    geometry?: THREE.BoxGeometry;
    material?: THREE.MeshPhongMaterial;
  } = {};

  // rotate: boolean = false;
  // rotateAmount: number = 0;

  constructor() {
    // const canvas1 = document.createElement("canvas");
    // const ctx1 = canvas1.getContext("2d");
    // const image = new Image();
    // image.src =
    //   "https://user-images.githubusercontent.com/71887242/188372976-f2f77d3a-2d17-4bea-8be7-e787b7edb30c.png";

    // // image.style.display = "none";
    // document.body.append(canvas1);
    // document.body.append(image);
    // image.crossOrigin = "anonymous";

    // image.onload = () => {
    //   setTimeout(() => {

    //     ctx1.drawImage(image, 0, 0);
    //     ctx1.save();

    //   }, 100);
    //   console.log('canvas',canvas1.toDataURL("image/png"));
    // };

    const clock = new THREE.Clock();

    this.clock = clock;

    this.fov = 10;
    this.aspect = this.width / this.height;
    this.near = 0.1;
    this.far = 1000;
  }

  setTarget(target: HTMLElement) {
    this.targetEL = target;
  }

  setupScene() {
    const scene = new THREE.Scene();
    this.scene = scene;
  }
  setupCamera() {
    const camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    camera.position.x = 20;
    camera.position.y = 30;
    camera.position.z = 40;
    camera.lookAt(0, 2.5, 0);

    camera.updateProjectionMatrix();

    this.camera = camera;
  }

  before: THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>;

  createText(text: string, project: ProjectModel) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024; // 캔버스의 너비 설정
    canvas.height = 512; // 캔버스의 높이 설정
    const ctx = canvas.getContext("2d");

    const img = this.images[project.name];

    // 캔버스 배경색 설정 (텍스처가 투명이 아니게)
    ctx.fillStyle = "#ffffff"; // 흰색 배경
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    img.width = canvas.width;
    img.height = canvas.height;
    // img.onload = () => {
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // 텍스트 설정
    ctx.font = "bold 64px sans-serif";
    ctx.fillStyle = "#000000"; // 검은색 텍스트
    ctx.textBaseline = "top"; // 텍스트 베이스라인 설정
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2); // y 좌표를 텍스트 높이로 조정
    return canvas.toDataURL("image/png");
  }

  setupRay(target: HTMLElement) {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const { left, top } = target.getBoundingClientRect();
    pointer.x = -1;
    pointer.y = -1;
    function onPointerMove(this: SubApp, e) {
      // this.rotate = true;

      const target = e.target as HTMLCanvasElement;
      let gapX = e.clientX - e.offsetX;
      let gapY = e.clientY - e.offsetY;

      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = ((e.clientX - gapX) / this.width) * 2 - 1;
      pointer.y = -((e.clientY - gapY) / this.height) * 2 + 1;

      const intersect = raycaster.intersectObjects(this.scene.children);
      const inter = intersect[0];
      if (
        (!inter ||
          inter.object.name === "floor" ||
          //@ts-ignore
          inter.object.project !== this.before?.object.project) &&
        this.walls[1].material.map
      ) {
        this.scene.children.forEach(
          (
            child: THREE.Mesh<
              THREE.BoxGeometry,
              THREE.MeshBasicMaterial,
              THREE.Object3DEventMap
            >
          ) => {
            if (child instanceof THREE.Mesh) {
              //@ts-ignore
              child.selected = false;
            }
          }
        );
        this.walls[1].material.map = null;
        this.walls[1].material.needsUpdate = true;
        target.style.cursor = "";
      }
      this.before = inter;

      if (
        inter &&
        inter.object &&
        this.walls[1].material.map === null &&
        inter.object.name !== "floor"
      ) {
        //@ts-ignore
        const project = intersect[0].object.project as ProjectModel;
        // console.log(intersect[0].object);

        const loader = new THREE.TextureLoader();

        const texture = loader.load(this.createText(project.title, project));

        this.walls[1].material.map = texture;
        this.walls[1].material.needsUpdate = true;
        this.walls[1].material.transparent = true;

        target.style.cursor = "pointer";

        //@ts-ignore
        intersect[0].object.selected = true;
      }
    }

    function onPointerClick(this: SubApp, e) {
      let gapX = e.clientX - e.offsetX;
      let gapY = e.clientY - e.offsetY;

      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = ((e.clientX - gapX) / this.width) * 2 - 1;
      pointer.y = -((e.clientY - gapY) / this.height) * 2 + 1;
      const intersect = raycaster.intersectObjects(this.scene.children);
      this.scene.children.forEach(
        (
          child: THREE.Mesh<
            THREE.BoxGeometry,
            THREE.MeshBasicMaterial,
            THREE.Object3DEventMap
          >
        ) => {
          if (child instanceof THREE.Mesh) {
            //@ts-ignore
            child.selected = false;
          }
        }
      );
      this.walls[1].material.map = null;
      this.walls[1].material.needsUpdate = true;

      if (intersect[0] && intersect[0].object.name !== "floor") {
        //@ts-ignore
        const project = intersect[0].object.project as ProjectModel;
        const inter = intersect[0];

        const createAnimate = (increment: number = 0.5) => {
          let num = 10;
          const limit = 1;
          const loop = setInterval(() => {
            // console.log(Number((num / 10).toFixed(2)));
            inter.object.scale.setY(Number((num / 10).toFixed(2)));
            num -= increment * 1.5;
            if (num <= limit) {
              clearInterval(loop);
              inter.object.scale.setY(1);
              // console.log(1);
            }
          }, 16);
        };

        animationStack.push(createAnimate);

        // const ktLoader = new KTX2Loader().detectSupport(this.renderer);
        const loader = new THREE.TextureLoader();

        const texture = loader.load(this.createText(project.title, project));

        this.walls[1].material.map = texture;
        this.walls[1].material.needsUpdate = true;
        this.walls[1].material.transparent = true;

        //@ts-ignore
        intersect[0].object.selected = true;

        const target = document.querySelector(
          `[data-title="${project.title}"]`
        ) as HTMLDivElement;
        if (target) {
          target.style.scrollMarginBlockStart = "3rem";
          setTimeout(() => {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
            // target.style.transition = "150ms ease-in-out";
            setTimeout(() => {
              // target.style.boxShadow = "0 0 1rem 0.5rem #ca15638f";
              target.style.scrollMarginBlockStart = "";
              // setTimeout(() => {
              //   target.style.boxShadow = "";
              // }, 3000);
            }, 1000);
          }, 500);
        }
      }
    }
    // update the picking ray with the camera and pointer position

    this.raycaster = raycaster;
    this.pointer = pointer;

    // target.addEventListener("mouseleave", () => {
    //   this.rotate = false;
    //   if (this.rotateAmount > 0) {
    //     this.scene.rotateY(-this.rotateAmount);
    //     this.rotateAmount = 0;
    //   }
    // });
    target.addEventListener("pointermove", onPointerMove.bind(this), false);
    target.addEventListener("click", onPointerClick.bind(this), false);
  }

  setupRenderer() {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(this.width, this.height);
    this.targetEL.appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;

    this.renderer = renderer;

    // const control = new OrbitControls(this.camera, renderer.domElement);
    // control.mouseButtons = { LEFT: THREE.MOUSE.RIGHT };
    // control.autoRotate = true;
    // control.autoRotateSpeed = 0.5;

    // this.control = control;
  }

  setupLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);

    ambientLight.position.set(-1, 1.2, 1.1);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    directionalLight.position.set(-1, 1.2, 1.1);
    const dlHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      0.2,
      0x0000ff
    );

    directionalLight.castShadow = true;

    // this.scene.add(dlHelper);
    this.scene.add(directionalLight);
    this.scene.add(ambientLight);
  }

  setupMeshGeometry() {
    const geometry = new THREE.PlaneGeometry(this.planeSize, this.planeSize);
    const wallGeometry = new THREE.PlaneGeometry(
      this.planeSize,
      this.planeSize / 2
    );
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    const wallMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });

    this.planeGeometry = {
      wallGeometry,
      geometry,
      material,
      wallMaterial,
    };
  }

  setupBoxGeometry() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

    this.boxGeometry = {
      geometry,
      material,
    };
  }

  addMeshPlane() {
    const plane = new THREE.Mesh(
      this.planeGeometry.geometry,
      this.planeGeometry.material
    );
    plane.rotation.x = Math.PI * -0.5;
    plane.receiveShadow = true;
    plane.name = "floor";

    const plane2 = new THREE.Mesh(
      this.planeGeometry.wallGeometry,
      this.planeGeometry.wallMaterial
    );
    plane2.rotation.x = Math.PI * -0.0;
    plane2.position.y = this.planeGeometry.wallGeometry.parameters.height / 2;
    plane2.position.z = -this.planeSize / 2;
    plane2.receiveShadow = true;
    plane2.name = "floor";

    const plane3 = new THREE.Mesh(
      this.planeGeometry.wallGeometry,
      this.planeGeometry.material
    );
    // plane3.position.x = this.planeSize / 2;
    // plane3.position.y = this.planeGeometry.wallGeometry.parameters.height / 2;
    // plane3.rotation.y = Math.PI * -0.5;
    plane3.rotation.x = Math.PI * -0.0;
    plane3.position.y = this.planeGeometry.wallGeometry.parameters.height / 2;
    plane3.position.z = -this.planeSize / 2;
    plane3.receiveShadow = true;
    plane3.name = "floor";

    const plane4 = new THREE.Mesh(
      this.planeGeometry.wallGeometry,
      this.planeGeometry.material
    );
    plane4.position.x = -this.planeSize / 2;
    plane4.position.y = this.planeGeometry.wallGeometry.parameters.height / 2;
    plane4.rotation.y = Math.PI * -0.5;
    plane4.receiveShadow = true;
    plane4.name = "floor";

    this.walls.push(plane, plane2, plane3, plane4);

    this.scene.add(plane);
    this.scene.add(plane2);
    this.scene.add(plane3);
    this.scene.add(plane4);
  }

  addCube() {
    const cube = new THREE.Mesh(
      this.boxGeometry.geometry,
      this.boxGeometry.material
    );

    cube.position.y = 0.5;
    cube.castShadow = true;
    cube.receiveShadow = true;

    this.box.push(cube);
    this.scene.add(cube);
  }

  addCustomBox(
    size: { x: number; y: number; z: number },
    position: { x: number; y: number; z: number },
    project: ProjectModel,
    texture?: THREE.Texture
  ) {
    const { x: sX, y: sY, z: sZ } = size;
    const { x, y, z } = position;

    const geometry = new THREE.BoxGeometry(sX, sY, sZ);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      ...(texture && { map: texture }),
    });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(x, sY / 2, z);

    cube.castShadow = true;
    cube.receiveShadow = true;

    cube.name = project.title;
    //@ts-ignore
    cube.project = project;

    this.box.push(cube);
    this.scene.add(cube);
  }

  /* setup basic tools */
  setup(target: HTMLElement) {
    this.projects = [...pages].filter((p) => p.prj instanceof ProjectModel);
    this.images = Object.fromEntries(
      this.projects.map((prj) => [
        prj.prj.name,
        (() => {
          const img = new Image();
          img.src = responsiveImagePath(prj.prj.name, prj.prj.cover);
          return img;
        })(),
      ])
    );
    this.setupScene();
    this.setupCamera();
    this.setupRay(target);
    this.setupRenderer();
    this.setupLight();
    this.setupMeshGeometry();
    this.setupBoxGeometry();

    this.addMeshPlane();
    // this.addCube();

    [...new Array(5)].map((a, i) =>
      new Array(5).fill(0).map((b, q) => {
        const project = this.projects.shift();
        if (project) {
          // console.log(responsiveImagePath(project.prj.name, project.prj.cover));
          const texture = new THREE.TextureLoader().load(
            responsiveImagePath(project.prj.name, project.prj.cover)
          );
          texture.magFilter = THREE.LinearFilter; // 이미지의 원래 크기보다 화면에 더 크게 확대되어 렌더링
          texture.minFilter = THREE.NearestMipMapLinearFilter; // 이미지의 원래 크기보다 화면에 더 작게 확대되어 렌더링
          this.addCustomBox(
            {
              x: 1.5,
              y: 0.3,
              z: 1.5,
            },
            {
              x: q - 5 / 2 + q * 0.8 - (5 * 1.5 + 4 * 0.8) / 10,
              z: i - 5 / 2 + i * 0.8 - (5 * 1.5 + 4 * 0.8) / 10,
              y: 0.5,
            },
            project.prj,
            texture
          );
        } else {
          // this.addCustomBox(
          //   {
          //     x: 1.5,
          //     y: 0.3,
          //     z: 1.5,
          //   },
          //   {
          //     x: q - 5 / 2 + q * 0.8 - (5 * 1.5 + 4 * 0.8) / 10,
          //     z: i - 5 / 2 + i * 0.8 - (5 * 1.5 + 4 * 0.8) / 10,
          //     y: 0.5,
          //   },
          //   project
          // );
        }
      })
    );

    // this.addCustomBox({ x: 1, y: 0.5, z: 1 }, { x: 1, y: 1, z: 1 });
    // this.addCustomBox({ x: 1, y: 0.5, z: 1 }, { x: 2 + 0.5, y: 1, z: 1 });
    // this.addCustomBox({ x: 1, y: 0.5, z: 1 }, { x: 3 + 1, y: 1, z: 1 });
  }

  cubeRotate() {
    this.scene.children.forEach((child) => {
      child.rotation.x += 0.01;
      child.rotation.y += 0.01;
    });
  }

  animate(time: number) {
    // time /= 1000;

    // this.camera.position.x = 0 + 15 * Math.sin(time * 0.05);
    // this.camera.position.z = 0 + 15 * Math.cos(time * 0.05);
    // this.camera.position.x = 0 + 30;
    // this.camera.position.y = 0 + 30;
    // this.camera.position.z = 0 + 30;
    // this.camera
    // this.camera.lookAt(new THREE.Vector3(20, 30, 40));

    const delta = this.clock.getDelta();

    // this.control.update(delta);

    this.raycaster.setFromCamera(this.pointer, this.camera);

    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.scene.children);

    this.walls.forEach((b) => b.material.color.set(0xffffff));
    this.box.forEach((b) => b.material.color.set(0xffffff));

    // if (!intersects[0]?.object.name.startsWith("floor")) {
    //   //@ts-ignore
    //   intersects[0]?.object.material.color.set("#ffaa00");
    // }

    // const angleValue = Math.PI * (0.3 / 180);

    // if (!this.rotate) {
    //   this.scene.rotateY(angleValue);
    //   this.rotateAmount += angleValue;
    //   const angle = Math.floor((this.rotateAmount / Math.PI) * 180);
    //   if (angle > 360) {
    //     this.rotateAmount = 0;
    //   }
    // } else {
    //   const angle = Math.floor((this.rotateAmount / Math.PI) * 180) % 360;
    //   if (angle >= 0) {
    //     const fixedSecond = parseFloat(this.rotateAmount.toFixed(1));
    //     this.rotateAmount -= Math.PI * (fixedSecond / 180);
    //     this.scene.rotateY(-Math.PI * (fixedSecond / 180));
    //   }
    // }

    this.scene.children.find(
      (
        child: THREE.Mesh<
          THREE.BoxGeometry,
          THREE.MeshBasicMaterial,
          THREE.Object3DEventMap
        >
      ) => {
        //@ts-ignore
        if (child instanceof THREE.Mesh && child.selected) {
          // console.log(child);
          child.material.color.set("#ffaa00");
        }
      }
    );
    // intersects.forEach((item) => {
    //   //@ts-ignore
    //   item.object.material.color.set(0xff0000);
    // });
    if (animationStack.length > 0) {
      animationStack.shift()();
    }
    this.activate = requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    cancelAnimationFrame(this.activate);
    this.activate = 0;
  }

  render(target: HTMLElement) {
    // console.log(target);
    this.setTarget(target);
    this.setup(target);
    this.animate(0);
  }
}

// export const subApp = new SubApp();
export default SubApp;
