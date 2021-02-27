let closebox = {
  Readme: true,
  open1: false,
  open2: false,
  open3: false,
  open4: false,
};
let { Readme, open1, open2, open3, open4 } = closebox;
let icon = document.getElementsByClassName("icon")[0];
const B1 = document.getElementsByClassName("B1")[0];
const B2 = document.getElementsByClassName("B2")[0];
const B3 = document.getElementsByClassName("B3")[0];
const B4 = document.getElementsByClassName("B4")[0];
const deskbox = document.getElementsByClassName("choice_model_desk")[0];
const windowbox = document.getElementsByClassName("choice_model_window")[0];
const chairbox = document.getElementsByClassName("choice_model_chair")[0];
const picturebox = document.getElementsByClassName("choice_model_picture")[0];
const checkbox = document.getElementsByClassName("checkbox")[0];
const controlbox = document.getElementsByClassName("controlbox")[0];
const closeLoadingPage = document.getElementsByClassName("closeLoadingPage")[0];
const loadingPage = document.getElementsByClassName("loadingPage")[0];

icon.addEventListener(
  "click",
  function () {
    if (!Readme) {
      Readme = true;
      open1 = false;
      open2 = false;
      open3 = false;
      open4 = false;
      deskbox.classList.remove("active");
      windowbox.classList.remove("active");
      chairbox.classList.remove("active");
      picturebox.classList.remove("active");
    }
  },
  false
);
B1.addEventListener(
  "click",
  function () {
    if (!open1) {
      Readme = false;
      open1 = true;
      open2 = false;
      open3 = false;
      open4 = false;
      deskbox.classList.add("active");
      windowbox.classList.remove("active");
      chairbox.classList.remove("active");
      picturebox.classList.remove("active");
    }
  },
  false
);
B2.addEventListener(
  "click",
  function () {
    if (!open2) {
      Readme = false;
      open1 = false;
      open2 = true;
      open3 = false;
      open4 = false;
      deskbox.classList.remove("active");
      windowbox.classList.add("active");
      chairbox.classList.remove("active");
      picturebox.classList.remove("active");
    }
  },
  false
);
B3.addEventListener(
  "click",
  function () {
    if (!open3) {
      Readme = false;
      open1 = false;
      open2 = false;
      open3 = true;
      open4 = false;
      deskbox.classList.remove("active");
      windowbox.classList.remove("active");
      chairbox.classList.add("active");
      picturebox.classList.remove("active");
    }
  },
  false
);
B4.addEventListener(
  "click",
  function () {
    if (!open4) {
      Readme = false;
      open1 = false;
      open2 = false;
      open3 = false;
      open4 = true;
      deskbox.classList.remove("active");
      windowbox.classList.remove("active");
      chairbox.classList.remove("active");
      picturebox.classList.add("active");
    }
  },
  false
);

checkbox.addEventListener(
  "click",
  function () {
    checkbox.classList.toggle("active");
    controlbox.classList.toggle("active");
  },
  false
);

setTimeout(function () {
  closeLoadingPage.disabled = false;
  closeLoadingPage.addEventListener(
    "click",
    function () {
      loadingPage.classList.add("remove");
      setTimeout(function () {
        loadingPage.classList.add("active");
      }, 1000);
    },
    false
  );
}, 1000);
