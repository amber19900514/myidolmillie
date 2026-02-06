const slides = document.querySelectorAll('.slide');
let current = 1;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === current) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
}




// ===========================================================profile

window.addEventListener("load", () => {
  const frame = document.querySelector(".photo-frame");
  const images = frame.querySelectorAll("img");
  let currentIndex = 0;

  // 2 秒後出現
  setTimeout(() => {
    frame.classList.add("show");

    // バナー動き
    setInterval(() => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }, 3000);

  }, 1000);
});


window.addEventListener("load", () => {
  const img = document.querySelector(".fade-image");

  setTimeout(() => {
    img.style.opacity = "1";
  }, 1000); // 1 秒後出現
});


(() => {
  const items = document.querySelectorAll(".works-item");
  const title = document.getElementById("worksTitle");
  const desc = document.getElementById("worksDesc");
  let current = 0;

  function updateWorks() {
    items.forEach((item, index) => {
      item.classList.toggle("active", index === current);
    });
    title.textContent = items[current].dataset.title;
    desc.textContent = items[current].dataset.desc;
  }

  document.getElementById("worksNext").onclick = () => {
    current = (current + 1) % items.length;
    updateWorks();
  };

  document.getElementById("worksPrev").onclick = () => {
    current = (current - 1 + items.length) % items.length;
    updateWorks();
  };

  updateWorks();
})();




// ===============================================================
(() => {
  const items = document.querySelectorAll(".works-item");
  let current = 2;

  function updateWorks() {
    items.forEach((item, index) => {
      item.classList.toggle("active", index === current);
    });
  }

  document.getElementById("worksNext").onclick = () => {
    current = (current + 1) % items.length;
    updateWorks();
  };

  document.getElementById("worksPrev").onclick = () => {
    current = (current - 1 + items.length) % items.length;
    updateWorks();
  };

  updateWorks();
})();
