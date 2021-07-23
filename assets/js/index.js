const label = document.getElementById("toggler-label");

document.getElementById("toggler").addEventListener("click", function () {
  this.checked ? label.classList.add("close") : label.classList.remove("close");
});

const btnTop = document.getElementById("top");
const rootElement = document.documentElement;

const options = {
  root: null,
  threshold: 0,
  rootMargin: "100px",
};

btnTop.addEventListener("click", () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const onScroll = new IntersectionObserver(function (entries, onScroll) {
  entries.forEach(entry => {
    !entry.isIntersecting
      ? (btnTop.style.opacity = 1)
      : (btnTop.style.opacity = 0);
  });
}, options);

onScroll.observe(document.getElementById("head-container"));
