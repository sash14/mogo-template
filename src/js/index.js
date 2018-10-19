var selector = document.querySelectorAll(".selector");
for (var i = 0; i < selector.length; i++) {
  selector[i].addEventListener("click", function() {
    if (!this.classList.contains("active")) {
      for (var i = 0; i < selector.length; i++) {
        selector[i].classList.remove("active");
        selector[i].children[1].classList.remove("rotate");
      }
      this.classList.add("active");
      this.children[1].classList.add("rotate");
    }
  });
}
