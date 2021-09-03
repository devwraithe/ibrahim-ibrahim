/* === avoid errors in browsers that lack a console === */
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// ========== rellax plugin : open ========== //
var rellax = new Rellax(".rellax");
// ========== rellax plugin : close ========== //

// ========== preload animations : open ========== //
// track page from loading to completion
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    // log loading report
    console.log("loading in progress!");
    // show preloader during load
    document.querySelector(".preload__content").style.display = "flex";
    // anime preloader element
    anime
      .timeline({ loop: true })
      .add({
        targets: ".preload__content div",
        duration: "1000",
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: (el, i) => 800 + 200 * i,
      })
      .add({
        targets: ".preload__content div",
        duration: "1000",
        translateY: [0, 20],
        opacity: [1, 0],
        easing: "easeOutExpo",
        delay: (el, i) => 800 + 200 * i,
      });
  } else {
    // anime preloader element
    anime({
      targets: ".preload",
      opacity: 0,
      duration: "1500,",
      display: "none",
      delay: 8000,
    });
    // container and preloader timeout
    setTimeout(function () {
      // log loading report
      console.log("loading completed!");
      // hide preloader after load
      document.querySelector(".preload").style.display = "none";
      // show container after load
      document.querySelector(".container").style.display = "inline-block";
    }, 8600);
  }
};
// ========== preload animations : close ========== //

// ========== sal plugin : open ========== //
sal({ once: false });
// ========== sal plugin : close ========== //

// ========== pointer plugin : open ========== //
init_pointer({
  pointerColor: "#ffffff",
  pointerHoverColor: "#7baefa",
  ringSize: 22,
  ringClickSize: 20,
  ringHoverColor: "#7baefa",
});
// ========== pointer plugin : close ========== //
