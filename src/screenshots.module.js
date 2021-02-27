import html2canvas from "../node_modules/html2canvas/dist/html2canvas.esm.js";

document.getElementById("capture").onclick = function () {
  html2canvas(document.getElementById("ThreeJs"), {
    backgroundColor: "#000000",
  }).then(function (canvas) {
    saveAs(canvas.toDataURL("image/png"), "capture-test.png");
  });
};

function saveAs(uri, filename) {
  var link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
