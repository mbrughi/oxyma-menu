
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".oxyma-menu-wrapper");
  const menu = document.getElementById("oxyma-menu");
  const toggle = document.getElementById("oxyma-menu-toggle");
  const overlay = wrapper.querySelector(".oxyma-menu-overlay");

  let touchStartX = 0;
  const position = wrapper.dataset.position || "left";
  menu.classList.add("position-" + position);

  const openMenu = () => {
    wrapper.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    wrapper.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  };

  const toggleMenu = () => {
    wrapper.classList.contains("open") ? closeMenu() : openMenu();
  };

  toggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", e => {
    const li = link.parentElement;
    if (li.querySelector("ul")) {
      e.preventDefault();
      li.classList.toggle("open");
    } else {
      closeMenu();
    }
  }));

  wrapper.addEventListener("touchstart", e => {
    touchStartX = e.touches[0].clientX;
  });

  wrapper.addEventListener("touchend", e => {
    let diff = e.changedTouches[0].clientX - touchStartX;
    if (diff < -80) closeMenu();
  });
});
