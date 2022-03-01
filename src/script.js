function open_close() {
  let myBtn = document.getElementById("myBtn");
  let main = document.getElementById("main");
  if (main.style.display != "none") {
    main.style.display = "none";
  } else {
    main.style.display = "block";
  }
}
