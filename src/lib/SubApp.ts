import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class SubApp {
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

  private width: number = innerWidth;
  private height: number = 500;

  private control: OrbitControls;

  private clock: THREE.Clock;

  walls: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshPhongMaterial,
    THREE.Object3DEventMap
  >[] = [];
  box: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >[] = [];

  planeSize = 15;

  private planeGeometry: {
    wallGeometry?: THREE.PlaneGeometry;
    geometry?: THREE.PlaneGeometry;
    material?: THREE.MeshPhongMaterial;
  } = {};
  private boxGeometry: {
    geometry?: THREE.BoxGeometry;
    material?: THREE.MeshBasicMaterial;
  } = {};

  constructor() {
    const clock = new THREE.Clock();

    this.clock = clock;

    this.fov = 35;
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
    camera.position.x = 5;
    camera.position.y = 15;
    camera.position.z = 5;

    camera.updateProjectionMatrix();

    this.camera = camera;
  }

  setupRay(target: HTMLElement) {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const { left, top } = target.getBoundingClientRect();
    pointer.x = -1;
    pointer.y = -1;
    function onPointerMove(this: SubApp, e) {
      let gapX = e.clientX - e.offsetX;
      let gapY = e.clientY - e.offsetY;

      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = ((e.clientX - gapX) / this.width) * 2 - 1;
      pointer.y = -((e.clientY - gapY) / this.height) * 2 + 1;
    }

    function onPointerClick(this: SubApp, e) {
      let gapX = e.clientX - e.offsetX;
      let gapY = e.clientY - e.offsetY;

      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      pointer.x = ((e.clientX - gapX) / this.width) * 2 - 1;
      pointer.y = -((e.clientY - gapY) / this.height) * 2 + 1;
      const intersect = raycaster.intersectObjects(this.scene.children);
      console.log(intersect[0].object);
    }
    // update the picking ray with the camera and pointer position

    this.raycaster = raycaster;
    this.pointer = pointer;

    target.addEventListener("pointermove", onPointerMove.bind(this));
    target.addEventListener("click", onPointerClick.bind(this));
  }

  setupRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(this.width, this.height);
    this.targetEL.appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;

    this.renderer = renderer;

    const control = new OrbitControls(this.camera, renderer.domElement);
    control.autoRotate = true;
    control.autoRotateSpeed = 0.5;

    this.control = control;
  }

  setupLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);

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
      this.planeSize / 4
    );
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });

    this.planeGeometry = {
      wallGeometry,
      geometry,
      material,
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

    const plane2 = new THREE.Mesh(
      this.planeGeometry.wallGeometry,
      this.planeGeometry.material
    );
    plane2.rotation.x = Math.PI * -0.0;
    plane2.position.y = this.planeGeometry.wallGeometry.parameters.height / 2;
    plane2.position.z = -this.planeSize / 2;
    plane2.receiveShadow = true;

    const plane3 = new THREE.Mesh(
      this.planeGeometry.wallGeometry,
      this.planeGeometry.material
    );
    plane3.position.x = this.planeSize / 2;
    plane3.position.y = this.planeGeometry.wallGeometry.parameters.height / 2;
    plane3.rotation.y = Math.PI * -0.5;
    plane3.receiveShadow = true;

    this.walls.push(plane, plane2, plane3);

    this.scene.add(plane);
    this.scene.add(plane2);
    this.scene.add(plane3);
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
    texture?: THREE.Texture
  ) {
    const { x: sX, y: sY, z: sZ } = size;
    const { x, y, z } = position;

    const geometry = new THREE.BoxGeometry(sX, sY, sZ);
    const material = new THREE.MeshPhongMaterial({
      color: 0xaaffcc,
      ...(texture && { map: texture }),
    });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(x, sY / 2, z);

    cube.castShadow = true;
    cube.receiveShadow = true;

    this.box.push(cube);
    this.scene.add(cube);
  }

  /* setup basic tools */
  setup(target: HTMLElement) {
    this.setupScene();
    this.setupCamera();
    this.setupRay(target);
    this.setupRenderer();
    this.setupLight();
    this.setupMeshGeometry();
    this.setupBoxGeometry();

    this.addMeshPlane();
    // this.addCube();

    const images = [
      "/images/blog/blog01.png",
      "/images/coffeecong/coffee.png",
      "/images/documentify/docu01.png",
    ];

    [...new Array(5)].map((a, i) =>
      new Array(5).fill(0).map((b, q) => {
        const image = images.shift();
        if (image) {
          const texture = new THREE.TextureLoader().load(image);
          texture.magFilter = THREE.LinearFilter; // 이미지의 원래 크기보다 화면에 더 크게 확대되어 랜더링
          texture.minFilter = THREE.NearestMipMapLinearFilter; // 이미지의 원래 크기보다 화면에 더 작게 확대되어 랜더링
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
            texture
          );
        } else {
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
            }
          );
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
    // this.camera.lookAt(new THREE.Vector3(0, -1, 0));
    const delta = this.clock.getDelta();

    this.control.update(delta);

    this.raycaster.setFromCamera(this.pointer, this.camera);

    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.scene.children);

    this.walls.forEach((b) => b.material.color.set(0xffffff));
    this.box.forEach((b) => b.material.color.set(0xaaffcc));

    //@ts-ignore
    intersects[0]?.object.material.color.set("#ffaa00");
    // intersects.forEach((item) => {
    //   //@ts-ignore
    //   item.object.material.color.set(0xff0000);
    // });

    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  render(target: HTMLElement) {
    // console.log(target);
    this.setTarget(target);
    this.setup(target);
    this.animate(0);
  }
}

export const subApp = new SubApp();
