"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // Variables

  const burgerMenu = document.querySelector(".burger__menu"),
    nav = document.querySelector(".nav"),
    body = document.querySelector("body"),
    view = document.querySelector(".view");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    burgerMenu.classList.toggle("active");
  });
});
34;

("use strict");

window.addEventListener("DOMContentLoaded", () => {
  const customBtn = document.querySelector(".custom__bg-btn"),
    pageHeader = document.querySelector(".page__header"),
    viewBtn = document.querySelectorAll(".view__btn"),
    phoneIcon = document.querySelectorAll(".specialist__phone"),
    position = document.querySelectorAll(".position"),
    newsCardBtn = document.querySelector(".news__card-btn"),
    upBtn = document.querySelector(".up__btn"),
    priceBar = document.querySelectorAll(".price__bar"),
    cardTitle = document.querySelector(".card__title");
  customBtn.addEventListener("click", () => {
    let value = prompt("Enter your custom color");
    pageHeader.style.setProperty(`--header__bg`, `${value}`);
    viewBtn.forEach((item) => {
      item.style.setProperty(`--yellow`, `${value}`);
    });
    phoneIcon.forEach((item) => {
      item.style.setProperty(`--yellow`, `${value}`);
    });
    position.forEach((item) => {
      item.style.setProperty(`--yellow`, `${value}`);
    });
    newsCardBtn.style.setProperty(`--yellow`, `${value}`);
    upBtn.style.setProperty(`--yellow`, `${value}`);
    priceBar.forEach((item) => {
      item.style.setProperty(`--yellow`, `${value}`);
    });
    cardTitle.forEach((item) => {
      item.style.setProperty(`-yellow`, `${value}`);
    });
  });
});
33;

("use strict");

window.addEventListener("DOMContentLoaded", () => {
  const headerLinks = document.querySelectorAll(".nav__link"),
    category = document.querySelector(".category"),
    headerTop = document.querySelector(".header__top"),
    specialist = document.querySelector("#specialist"),
    footer = document.querySelector("#page__footer"),
    product = document.querySelector("#product");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      headerTop.style.background = "rgba(253, 251, 251, 0.814)";
    } else {
      headerTop.style.background = "transparent";
    }
    for (let i = 0; i < headerLinks.length; i++) {
      headerLinks[i].classList.remove("active");
      if (
        window.scrollY >= category.offsetTop &&
        window.scrollY <= product.offsetTop
      ) {
        headerLinks[0].classList.remove("active");
        headerLinks[1].classList.add("active");
      } else if (
        window.scrollY >= product.offsetTop + 100 &&
        window.scrollY <= specialist.offsetTop - footer.clientHeight / 2
      ) {
        headerLinks[0].classList.remove("active");
        headerLinks[1].classList.add("active");
      } else if (
        window.scrollY >= specialist.offsetTop &&
        window.scrollY <= footer.offsetTop - footer.clientHeight / 2
      ) {
        headerLinks[1].classList.remove("active");
        headerLinks[2].classList.add("active");
      } else if (window.scrollY > 3000) {
        headerLinks[3].classList.add("active");
      }
    }
  });
});
96;

("use strict");
window.addEventListener("DOMContentLoaded", () => {
  const upBtn = document.querySelector(".up__btn"),
    body = document.querySelector("body");

  //  Scroll-up functions
  window.addEventListener("scroll", () => {
    upBtn.classList.toggle("active", window.scrollY > 300);
  });
  upBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  //  Scroll-down animations

  const title = document.querySelector(".category__title"),
    category = document.querySelector(".category"),
    categoryCards = document.querySelectorAll(".category__card"),
    product = document.querySelector(".product"),
    productCards = document.querySelectorAll(".product__card"),
    productTitle = document.querySelector(".product__title"),
    proDesc = document.querySelector(".pro__desc"),
    specialPro = document.querySelector(".special__product"),
    specialProTitle = document.querySelector(".special__product-title"),
    specialProDesc = document.querySelector(".spec__pro-desc"),
    specialCards = document.querySelectorAll(".special__card"),
    specialistSection = document.querySelector(".specialist__section"),
    specTitle = document.querySelector(".spec__title"),
    specDesc = document.querySelector(".spec__desc"),
    specialistCards = document.querySelectorAll(".specialist__card"),
    newsSection = document.querySelector(".news__section"),
    newsCard = document.querySelector(".news__card"),
    newsBoxItems = document.querySelectorAll(".gallery__box-item"),
    pageFooter = document.querySelector(".page__footer"),
    footerContentItems = document.querySelectorAll(".footer__content-item"),
    zero = 0;

  window.addEventListener("scroll", () => {
    if (scrollY > category.offsetTop - category.clientHeight / 2) {
      title.style = "transform:scale(1)";
      categoryCards.forEach((item) => {
        item.style = `transform:translateX(${zero});
                                opacity:${1};
                                z-index:${1}`;
      });
    }
    if (window.scrollY > product.offsetTop - product.clientHeight / 2) {
      productTitle.style = `transform:translateY(${zero});
                            opacity: 1;
                            z-index: 1`;
      proDesc.style = `transform:translateY(${zero});
                       opacity: 1;
                       z-index: 1`;
      productCards.forEach((item) => {
        item.style = `transform:translateY(${zero});
                       opacity: 1;
                       z-index: 1;`;
      });
    }
    if (window.scrollY > specialPro.offsetTop - specialPro.clientHeight / 2) {
      specialProTitle.style = `transform:scale(1);
                               transform: rotateY(1080deg);
                              opacity: 1;,
                              z-index: 1;`;
      specialProDesc.style = `transform:scale(1);
                              opacity: 1;`;
      specialCards.forEach((item) => {
        item.style = `transform:translateX(${zero}) rotateY(360deg);
                      opacity: 1;
                      transition: 1.5s`;
      });
    }
    if (
      window.scrollY >
      specialistSection.offsetTop - specialistSection.clientHeight / 2
    ) {
      specTitle.style = `transform: translateY(${zero}) scale(1);
                        opacity: 1;`;
      specDesc.style = `transform: translateY(${zero}) scale(1);
                        opacity: 1;`;
      specialistCards.forEach((item) => {
        item.style = ` transform: translateY(${zero}) translateX(${zero});
                       opacity: 1;
                       transition: 1.5s`;
      });
    }
    if (scrollY > newsSection.offsetTop - newsSection.clientHeight / 2) {
      newsCard.style = `transform: scale(1); opacity: 1`;
      newsBoxItems.forEach((item) => {
        item.style = `transform:scale(1);
                      opacity: 1`;
      });
    }
    if (scrollY > pageFooter.offsetTop - pageFooter.clientHeight / 2) {
      footerContentItems.forEach((item) => {
        item.style = `transform:translateX(${zero}); opacity: 1`;
      });
    }
  });
});
99;

("use strict");

window.addEventListener("DOMContentLoaded", () => {
  class Slider {
    constructor(el) {
      this.slider = document.querySelector(el.slider);
      this.sliderLine = document.querySelector(el.sliderLine);
      this.next = document.querySelector(el.next);
      this.prev = document.querySelector(el.prev);
      this.slides = this.sliderLine.children;
      this.dir = el.direction.toUpperCase() == "Y" ? "Y" : "X";
      this.autoPlay = el.autoPlay;
      this.interval = el.autoPlayInterval;

      this.width = this.sliderLine.clientWidth;
      this.height = this.sliderLine.clientHeight;
      this.sliderLine.style = `position:relative;    
                                height:${this.height}px;
                                width:${this.width}px;
                                overflow:hidden`;

      this.active = 0;
      this.moveSize = this.dir == "X" ? this.width : this.height;
      for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides[i];
        slide.style = `position:absolute;
                          width:${this.width}px;
                          height:${this.height}px`;
        if (i != this.active) {
          slide.style.transform = `translate${this.dir}(${this.moveSize}px)`;
        }
        if (i == this.slides.length - 1) {
          slide.style.transform = `translate${this.dir}(${-this.moveSize}px)`;
        }
      }
      this.next.addEventListener("click", () => this.move(this.next));
      this.prev.addEventListener("click", () => this.move(this.prev));

      if (this.autoPlay) {
        this.play = setInterval(() => {
          this.move(this.next);
        }, this.interval);
        this.slider.onmouseover = () => clearInterval(this.play);
        this.slider.onmouseout = () =>
          (this.play = setInterval(() => {
            this.move(this.next);
          }, this.interval));
      }
    }
    disableBtn() {
      this.next.disabled = true;
      this.prev.disabled = true;
      setTimeout(() => {
        this.next.disabled = false;
        this.prev.disabled = false;
      }, 1200);
    }
    move(btn) {
      this.disableBtn();
      let leftOrRight = btn == this.next ? -this.moveSize : this.moveSize;
      for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides[i];
        if (i != this.active) {
          slide.style.transform = `translate${this.dir}(${-leftOrRight}px)`;
          slide.style.transition = `0s`;
        }
      }
      this.slides[
        this.active
      ].style.transform = `translate${this.dir}(${leftOrRight}px)`;
      this.slides[this.active].style.transition = `1s`;
      this.changeActive(btn);
      this.slides[this.active].style.transform = `translate${this.dir}(0px)`;
      this.slides[this.active].style.transition = `1s`;
    }
    changeActive(btn) {
      if (btn == this.next) {
        this.active++;
        if (this.active == this.slides.length) {
          this.active = 0;
        }
      } else if (btn == this.prev) {
        this.active--;
        if (this.active < 0) {
          this.active = this.slides.length - 1;
        }
      }
    }
  }
  new Slider({
    slider: ".slider",
    sliderLine: ".slider__line",
    direction: "X",
    next: ".slider__next",
    prev: ".slider__prev",
    autoPlay: true,
    autoPlayInterval: 8000,
  });
});
30;

("use strict");
window.addEventListener("DOMContentLoaded", () => {
  class Typing {
    constructor(el) {
      this.title = document.querySelector(el.title);
      this.interval = el.interval || 200;
      this.delay = el.delay == undefined ? 1000 : el.delay;

      this.text = this.title.innerHTML.trim();
      this.title.innerHTML = "";
      setTimeout(() => {
        this.write();
      }, this.delay);
    }
    write(i = 0) {
      this.title.innerHTML += this.text[i];
      i++;
      if (i < this.text.length) {
        setTimeout(() => {
          this.write(i);
        }, this.interval);
      }
    }
  }
  new Typing({
    title: ".info__desc",
    interval: 10,
    delay: 500,
  });
});
43;

("use strict");
window.addEventListener("DOMContentLoaded", () => {
  class Img {
    constructor(el) {
      this.cards = document.querySelectorAll(el.cards);
      this.view = document.querySelector(el.view);
      this.closeBtn = document.querySelector(el.closeBtn);
      this.viewImg = document.querySelector(el.viewImg);
      this.body = document.querySelector(el.body);

      const mainViewImg = this.viewImg;
      const viewArea = this.view;
      const closeViewBtn = this.closeBtn;

      closeViewBtn.addEventListener("click", () => {
        viewArea.classList.toggle("active");
      });
      for (let i = 0; i < this.cards.length; i++) {
        const element = this.cards[i];
        element.addEventListener("dblclick", function () {
          select(this);
          viewArea.classList.add("active");
        });
      }
      function select(img) {
        let parentDiv = img.closest(".card");
        let mainImg = parentDiv.querySelector("img");
        let imgAtt = mainImg.getAttribute("src");
        mainViewImg.setAttribute("src", `${imgAtt}`);
      }
    }
  }

  new Img({
    cards: ".card",
    view: ".view",
    viewImg: ".view__img",
    closeBtn: ".view__close",
    body: "body",
  });
});
