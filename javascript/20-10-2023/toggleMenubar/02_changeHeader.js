// target class / element = header  tag
// perform class / element = window

let topheader = document.querySelector("header");
window.addEventListener("scroll", function () {
    let currval = this.window.scrollY;
    if (currval > 0) {
        topheader.classList.add("topfixed")
    } else {
        topheader.classList.remove("topfixed")
    }
})