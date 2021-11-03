// button first section
document.getElementById("button").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    document.getElementById("side-2").className = "flip flip-side-1";
    document.getElementById("side-1").className = "flip flip-side-2";
  },
  false
);
document.getElementById("side-2").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    document.getElementById("side-2").className = "flip";
    document.getElementById("side-1").className = "flip";
  },
  false
);
