import * as THREE from "../node_modules/three/build/three.module.js";
import { OBJLoader } from "../node_modules/three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "../node_modules/three/examples/jsm/loaders/MTLLoader.js";
import { FBXLoader } from "../node_modules/three/examples/jsm/loaders/FBXLoader.js";

let objLoader = new OBJLoader();
let mtlLoader = new MTLLoader();
let fbxLoader = new FBXLoader();

let Front = document.getElementsByClassName("Front")[0];
let Left = document.getElementsByClassName("Left")[0];
let Right = document.getElementsByClassName("Right")[0];
let Sky = document.getElementsByClassName("Sky")[0];
let Back = document.getElementsByClassName("Back")[0];
let Grid = document.getElementsByClassName("Grid")[0];
let threeJs = document.getElementById("ThreeJs");
let Value = document.getElementsByClassName("backColor")[0];
let cancel = document.getElementsByClassName("cancel")[0];
let desks = document.getElementsByClassName("desks")[0];
let pictures = document.getElementsByClassName("pictures")[0];
let windows = document.getElementsByClassName("windows")[0];
let chairs = document.getElementsByClassName("chairs")[0];
const right = new THREE.Euler(0, 0, 0, "XYZ");
const left = new THREE.Euler(
  -3.141592653589793,
  4.440892098500626e-16,
  -3.141592653589793,
  "XYZ"
);
const closeLoadingPage = document.getElementsByClassName("closeLoadingPage")[0];
let camera, scene, renderer;
let mouse,
  raycaster,
  isShiftDown = false,
  optionClick = false;
let rollOverMesh, rollOverMaterial;
let rotationNum = 1;
let changeR = false;
const objects = [];
let load_object;
let GridToggle = true;
const save_object = [];
const gridHelper = new THREE.GridHelper(1000, 20);
let window1s = [];
let window2s = [];
let window3s = [];
let desk1s = [];
let desk2s = [];
let desk3s = [];
let picture1s = [];
let picture2s = [];
let picture3s = [];
let chair1s = [];
let chair2s = [];
let chair3s = [];

init();
//loadingobject();

function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(-2000, 1000, 0);
  camera.lookAt(0, 100, 0);

  scene = new THREE.Scene();
  scene.background = new THREE.Color("rgb(243, 243, 253)");

  // roll-over helpers
  const rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
  rollOverMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    opacity: 0.5,
    transparent: true,
  });
  rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
  scene.add(rollOverMesh);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // 벽면
  wallMake();

  //grid

  scene.add(gridHelper);

  // lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); //자연광
  ambientLight.intensity = 1.34;
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 1000, 0).normalize();
  scene.add(directionalLight);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: threeJs,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // drag drop

  document.addEventListener("mousemove", onDocumentMouseMove);
  document.addEventListener("mousedown", onDocumentMouseDown);
  document.addEventListener("mouseup", onDocumentMouseUp);
  document.addEventListener("keydown", onDocumentKeyDown);
  document.addEventListener("keyup", onDocumentKeyUp);
  window.addEventListener("resize", onWindowResize);
}

// items

const desk1 = document.getElementsByClassName("desk1")[0];
desk1.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    desk1.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/desk/Desk_desk1/desk1.fbx",
      function (object) {
        object.scale.set(10, 10, 10);
        object.name = "desk";
        desk1s.push(object);
        console.log(object);
      }
    );
    load_object = desk1s.pop();
    if (!load_object) {
      desk1.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const desk2 = document.getElementsByClassName("desk2")[0];
desk2.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    desk2.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/desk/desk2/table2.fbx",
      function (object) {
        object.scale.set(10, 10, 10);
        object.name = "desk";
        desk2s.push(object);
      }
    );
    load_object = desk2s.pop();
    if (!load_object) {
      desk2.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const desk3 = document.getElementsByClassName("desk3")[0];
desk3.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    desk3.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/desk/desk_tabledesk/Table desk N210820/desk3.fbx",
      function (object) {
        object.scale.set(10, 10, 10);
        object.name = "desk";
        desk3s.push(object);
      }
    );
    load_object = desk3s.pop();
    if (!load_object) {
      desk3.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const window1 = document.getElementsByClassName("window1")[0];
window1.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    window1.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/window/VenetianBlind/VenetianBlind.fbx",
      function (object) {
        object.scale.set(5, 5, 5);
        object.name = "window";
        window1s.push(object);
      }
    );
    load_object = window1s.pop();

    if (!load_object) {
      window1.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const window2 = document.getElementsByClassName("window2")[0];
window2.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    window2.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/window/window2-1/window2.fbx",
      function (object) {
        object.scale.set(5, 5, 5);
        object.name = "window";
        window2s.push(object);
      }
    );
    load_object = window2s.pop();

    if (!load_object) {
      window2.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const window3 = document.getElementsByClassName("window3")[0];
window3.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    window3.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/window/window_mirror/Mirror/Mirror1.fbx",
      function (object) {
        object.scale.set(5, 5, 5);
        object.name = "window";
        window3s.push(object);
      }
    );
    load_object = window3s.pop();

    if (!load_object) {
      window3.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const picture1 = document.getElementsByClassName("picture1")[0];
picture1.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    picture1.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/frame/frame1/picture1.fbx",
      function (object) {
        object.scale.set(7, 7, 7);
        object.name = "picture";
        picture1s.push(object);
      }
    );
    load_object = picture1s.pop();

    if (!load_object) {
      picture1.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);

const picture2 = document.getElementsByClassName("picture2")[0];
picture2.addEventListener(
  "click",
  function (e) {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    picture2.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/frame/frame2/Arah Leaf Frame/Maps/frame2.fbx",
      function (object) {
        object.scale.set(5, 5, 5);
        object.name = "picture";
        picture2s.push(object);
      }
    );
    load_object = picture2s.pop();

    if (!load_object) {
      picture2.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const picture3 = document.getElementsByClassName("picture3")[0];
picture3.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    picture3.classList.add("disabled");
    cancel.classList.add("active");
    fbxLoader.load(
      "./component/object/frame/frame3/Maps/frame3.fbx",
      function (object) {
        object.scale.set(5, 5, 5);
        object.name = "picture";
        picture3s.push(object);
      }
    );
    load_object = picture3s.pop();

    if (!load_object) {
      picture3.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);

const chair1 = document.getElementsByClassName("chair1")[0];
chair1.addEventListener(
  "click",
  function () {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    chair1.classList.add("disabled");
    cancel.classList.add("active");
    mtlLoader.setPath("./component/object/chair/chair1/");
    mtlLoader.load(
      "Arm chair.mtl",
      function (materials) {
        materials.preload();

        objLoader.setMaterials(materials);

        objLoader.setPath("./component/object/chair/chair1/");
        objLoader.load(
          "Arm chair.obj",
          function (object) {
            object.scale.set(7, 7, 7);
            object.name = "chair";
            chair1s.push(object);
          },
          function (xhr) {
            console.log(
              "OBJLoader: ",
              (xhr.loaded / xhr.total) * 100,
              "% loaded"
            );
          },
          function (error) {
            alert("모델을 로드 중 오류가 발생하였습니다.");
          }
        );
      },
      function (xhr) {
        console.log("MTLLoader: ", (xhr.loaded / xhr.total) * 100, "% loaded");
      },
      function (error) {
        console.error("MTLLoader 로드 중 오류가 발생하였습니다.", error);
        alert("MTLLoader 로드 중 오류가 발생하였습니다.");
      }
    );
    load_object = chair1s.pop();

    if (!load_object) {
      chair1.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);

const chair2 = document.getElementsByClassName("chair2")[0];
chair2.addEventListener(
  "click",
  function (e) {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    chair2.classList.add("disabled");
    cancel.classList.add("active");
    mtlLoader.setPath("./component/object/chair/chair2-1/");
    mtlLoader.load(
      "de_sede_ds-414_swivel.mtl",
      function (materials) {
        materials.preload();

        objLoader.setMaterials(materials);

        objLoader.setPath("./component/object/chair/chair2-1/");
        objLoader.load(
          "de_sede_ds-414_swivel.obj",
          function (object) {
            object.scale.set(7, 7, 7);
            object.name = "chair";
            chair2s.push(object);
          },
          function (xhr) {
            console.log(
              "OBJLoader: ",
              (xhr.loaded / xhr.total) * 100,
              "% loaded"
            );
          },
          function (error) {
            alert("모델을 로드 중 오류가 발생하였습니다.");
          }
        );
      },
      function (xhr) {
        console.log("MTLLoader: ", (xhr.loaded / xhr.total) * 100, "% loaded");
      },
      function (error) {
        console.error("MTLLoader 로드 중 오류가 발생하였습니다.", error);
        alert("MTLLoader 로드 중 오류가 발생하였습니다.");
      }
    );
    load_object = chair2s.pop();

    if (!load_object) {
      chair2.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);
const chair3 = document.getElementsByClassName("chair3")[0];
chair3.addEventListener(
  "click",
  function (e) {
    if (load_object) {
      removed();
      scene.remove(load_object);
      load_object = null;
    }
    optionClick = true;
    chair3.classList.add("disabled");
    cancel.classList.add("active");
    mtlLoader.setPath("./component/object/chair/chair3/");
    mtlLoader.load(
      "Chaire.mtl",
      function (materials) {
        materials.preload();

        objLoader.setMaterials(materials);
        objLoader.setPath("./component/object/chair/chair3/");
        objLoader.load(
          "Chaire.obj",
          function (object) {
            object.scale.set(10, 10, 10);
            object.name = "chair";
            chair3s.push(object);
          },
          function (xhr) {
            console.log(
              "OBJLoader: ",
              (xhr.loaded / xhr.total) * 100,
              "% loaded"
            );
          },
          function (error) {
            alert("모델을 로드 중 오류가 발생하였습니다.");
          }
        );
      },
      function (xhr) {
        console.log("MTLLoader: ", (xhr.loaded / xhr.total) * 100, "% loaded");
      },
      function (error) {
        console.error("MTLLoader 로드 중 오류가 발생하였습니다.", error);
        alert("MTLLoader 로드 중 오류가 발생하였습니다.");
      }
    );
    load_object = chair3s.pop();

    if (!load_object) {
      chair3.classList.remove("disabled");
      cancel.classList.remove("active");
    }
  },
  false
);

function wallMake() {
  let geometry = [];
  let plane = [];
  for (let i = 0; i < 4; i++) {
    if (!i) {
      geometry[i] = new THREE.PlaneGeometry(1000, 1000);
      plane[0] = new THREE.Mesh(
        geometry[0],
        new THREE.MeshBasicMaterial({
          color: "white",
          map: new THREE.TextureLoader().load(
            "./component/object/wall/back2.jpg"
          ),
          transparent: true,
          opacity: 0.3,
        })
      );
    } else {
      geometry[i] = new THREE.PlaneGeometry(1000, 600);
      plane[i] = new THREE.Mesh(
        geometry[i],
        new THREE.MeshBasicMaterial({
          color: "rgb(236, 230, 236)",
        })
      );
    }
  }

  geometry[0].rotateX(-Math.PI / 2);
  geometry[1].rotateX(-Math.PI / 1);
  geometry[1].rotateY(Math.PI / 2);
  geometry[2].rotateX(-Math.PI / 1);
  geometry[3].rotateX(-Math.PI / 1);
  geometry[3].rotateY(Math.PI / 1);
  plane[1].position.set(500, 0, 0); // 북쪽
  plane[2].position.set(0, 0, 500); // 서쪽
  plane[3].position.set(0, 0, -500); // 동쪽
  plane[0].name = "Ground";
  plane[1].name = "N";
  plane[2].name = "W";
  plane[3].name = "E";

  for (let i = 0; i < plane.length; i++) {
    scene.add(plane[i]);
    if (!i) {
    } else {
      plane[i].position.y += 300;
    }
    objects.push(plane[i]);
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);
  let itemOne = load_object;

  if (intersects.length > 0) {
    const intersect = intersects[0];
    if (optionClick) {
      scene.remove(rollOverMesh);
      switch (intersect.object.name) {
        case "Ground":
          if (!itemOne) break;
          if (itemOne.name === "desk" || itemOne.name === "chair") {
            itemOne.position.copy(intersect.point).add(intersect.face.normal);

            switch (itemOne.name) {
              case "desk":
                if (
                  itemOne.rotation.equals(right) ||
                  itemOne.rotation.equals(left)
                ) {
                  if (itemOne.position.x > 350) {
                    itemOne.position.x = 350;
                  } else if (itemOne.position.x < -330) {
                    itemOne.position.x = -330;
                  }
                  if (itemOne.position.z > 410) {
                    itemOne.position.z = 410;
                  } else if (itemOne.position.z < -410) {
                    itemOne.position.z = -410;
                  }
                } else {
                  if (itemOne.position.x > 400) {
                    itemOne.position.x = 400;
                  } else if (itemOne.position.x < -400) {
                    itemOne.position.x = -400;
                  }
                  if (itemOne.position.z > 330) {
                    itemOne.position.z = 330;
                  } else if (itemOne.position.z < -335) {
                    itemOne.position.z = -335;
                  }
                }
                break;
              case "chair":
                if (itemOne.position.x > 410) {
                  itemOne.position.x = 410;
                } else if (itemOne.position.x < -410) {
                  itemOne.position.x = -410;
                }
                if (itemOne.position.z > 410) {
                  itemOne.position.z = 410;
                } else if (itemOne.position.z < -410) {
                  itemOne.position.z = -410;
                }
                break;
            }

            if (changeR) {
              if (rotationNum === 0) {
                itemOne.rotateY(Math.PI / 2);
                rotationNum = 1;
                changeR = false;
              } else if (rotationNum === 2) {
                itemOne.rotateY(-Math.PI / 2);
                rotationNum = 1;
                changeR = false;
              }
            }
            scene.add(itemOne);
          }
          break;
        case "N":
          if (!itemOne) break;
          if (itemOne.name === "window" || itemOne.name === "picture") {
            itemOne.rotation.y = Math.PI / 2;
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
            itemOne.position.y = 150;
            scene.add(itemOne);
          }
          break;
        case "E":
          if (!itemOne) break;
          if (itemOne.name === "window" || itemOne.name === "picture") {
            itemOne.rotation.y = Math.PI;
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
            itemOne.position.y = 150;
            scene.add(itemOne);
          }
          break;
        case "W":
          if (!itemOne) break;
          if (itemOne.name === "window" || itemOne.name === "picture") {
            itemOne.rotation.y = 0;
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
            itemOne.position.y = 150;
            scene.add(itemOne);
          }
          break;
        default:
          break;
      }
    } else {
      rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
      rollOverMesh.position
        .divideScalar(50)
        .floor()
        .multiplyScalar(50)
        .addScalar(25);
    }
  }

  render();
}

function onDocumentMouseDown(event) {
  event.preventDefault();

  mouse.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    const intersect = intersects[0];
    console.log(intersect);
    if (isShiftDown) {
    } else {
      let itemOne = load_object;
      switch (intersect.object.name) {
        case "Ground":
          if (itemOne.name === "desk" || itemOne.name === "chair") {
            addScene(itemOne);
          }
          break;
        case "N":
          if (itemOne.name === "window" || itemOne.name === "picture") {
            addScene(itemOne);
          }
          break;
        case "E":
          if (itemOne.name === "window" || itemOne.name === "picture") {
            addScene(itemOne);
          }
          break;
        case "W":
          if (itemOne.name === "window" || itemOne.name === "picture") {
            addScene(itemOne);
          }
          break;
        default:
          console.log("no thank");
          break;
      }
    }
    render();
  }
}

function addScene(itemOne) {
  scene.add(itemOne);
  objects.push(itemOne);
  save_object.push(load_object);
  load_object = null;
  optionClick = false;
}

function onDocumentMouseUp() {
  if (!load_object) {
    removed();
    cancel.classList.remove("active");
  }
}

function onDocumentKeyDown(event) {
  switch (event.keyCode) {
    case 16:
      if (!isShiftDown) isShiftDown = true;
      else {
        isShiftDown = false;
      }
      break;
    case 81: // q 왼쪽으로 회전
      if (rotationNum != 1) {
        rotationNum = 1;
      }
      rotationNum--;
      console.log(rotationNum);
      changeR = true;
      break;
    case 69: // e 오른쪽으로 회전
      if (rotationNum != 1) {
        rotationNum = 1;
      }
      rotationNum++;
      console.log(rotationNum);
      changeR = true;
      break;
    case 37: //옆
      console.log("left");
      camera.position.set(0, 1000, -2000);
      camera.lookAt(0, 100, 0);
      render();
      break;
    case 38: //위
      console.log("front");
      camera.position.set(-2000, 1000, 0);
      camera.lookAt(0, 100, 0);
      render();
      break;
    case 39: //오른쪽
      console.log("right");
      camera.position.set(0, 1000, 2000);
      camera.lookAt(0, 100, 0);
      render();
      break;
    case 40: //아래
      console.log("sky");
      camera.position.set(0, 3000, 0);
      camera.lookAt(1, 0, 0);
      render();
      break;
    case 68: // 물체 삭제
      console.log("delete");
      if (!save_object.length) {
        alert("배치된 사물이 없습니다");
        break;
      }
      console.log(save_object);
      scene.remove(save_object.pop());
      break;
    case 83: // 물체 취소
      console.log("cancel");
      if (!load_object) {
        alert("선택한 사물이 존재하지 않습니다");
        break;
      }
      scene.remove(load_object);

      load_object = null;

      if (!load_object) {
        cancel.classList.remove("active");
        removed();
      }
      break;
  }
}

function onDocumentKeyUp(event) {
  switch (event.keyCode) {
    case 65:
      console.log(save_object);
      break;
  }
}

Front.addEventListener(
  "click",
  function (e) {
    console.log("front");
    camera.position.set(-2000, 1000, 0);
    camera.lookAt(0, 100, 0);
  },
  false
);
Left.addEventListener(
  "click",
  function (e) {
    console.log("left");
    camera.position.set(0, 1000, -2000);
    camera.lookAt(0, 100, 0);
  },
  false
);
Right.addEventListener(
  "click",
  function (e) {
    console.log("right");
    camera.position.set(0, 1000, 2000);
    camera.lookAt(0, 100, 0);
  },
  false
);
Sky.addEventListener(
  "click",
  function (e) {
    console.log("sky");
    camera.position.set(0, 3000, 0);
    camera.lookAt(0, 100, 0);
  },
  false
);
Back.addEventListener(
  "click",
  function (e) {
    if (!save_object.length) return alert("배치된 사물이 없습니다");
    scene.remove(save_object.pop());
  },
  false
);

Grid.addEventListener(
  "click",
  function (e) {
    if (GridToggle) {
      scene.remove(gridHelper);
      GridToggle = false;
    } else {
      scene.add(gridHelper);
      GridToggle = true;
    }
    render();
  },
  false
);

Value.addEventListener("input", function (e) {
  console.log(Value.value);
  for (let i = 2; i < 5; i++) {
    scene.children[i].material.color.set(Value.value);
  }
});

cancel.addEventListener(
  "click",
  function () {
    if (!load_object) return alert("선택한 사물이 없습니다");
    scene.remove(load_object);
    load_object = null;
    cancel.classList.remove("active");
    removed();
  },
  false
);

function removed() {
  for (let i = 1; i < 6; i += 2) {
    desks.childNodes[i].classList.remove("disabled");
    windows.childNodes[i].classList.remove("disabled");
    pictures.childNodes[i].classList.remove("disabled");
    chairs.childNodes[i].classList.remove("disabled");
  }
}

closeLoadingPage.addEventListener(
  "click",
  function () {
    console.log(scene);
  },
  false
);

function render() {
  renderer.render(scene, camera);
}
