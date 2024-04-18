// *click function for top box to show and hide
let topbox = document.getElementById("topbox");

function topclickshow() {
  topbox.style.display = "block";
}

function topclickhide() {
  topbox.style.display = "none";
}

// *click function for bottom box to show and hide
let bottombox = document.getElementById("bottombox");

function bottomclickshow() {
  bottombox.style.display = "block";
}

function bottomclickhide() {
  bottombox.style.display = "none";
}

// *click function for bottom box to show and hide
let leftbox = document.getElementById("leftbox");

function leftclickshow() {
  leftbox.style.display = "block";
}

function leftclickhide() {
  leftbox.style.display = "none";
}

// *click function for bottom box to show and hide
let rightbox = document.getElementById("rightbox");

function rightclickshow() {
  rightbox.style.display = "block";
}

function rightclickhide() {
  rightbox.style.display = "none";
}


/* ==========================================================
container 2
========================================================== */

let items = [
  document.getElementById('item1'),
  document.getElementById('item2'),
  document.getElementById('item3'),
  document.getElementById('item4'),
  document.getElementById('item5')
];

let imgs = [
  document.getElementById('secton-4_img1'),
  document.getElementById('secton-4_img2'),
  document.getElementById('secton-4_img3'),
  document.getElementById('secton-4_img4'),
  document.getElementById('secton-4_img5')
];

let txts = [
  document.getElementById('txt1'),
  document.getElementById('txt2'),
  document.getElementById('txt3'),
  document.getElementById('txt4'),
  document.getElementById('txt5')
];

let peras = [
  document.getElementById('pera1'),
  document.getElementById('pera2'),
  document.getElementById('pera3'),
  document.getElementById('pera4'),
  document.getElementById('pera5')
];

function showContent(index){
    imgs.forEach((img,i) => {
        if(i === index){
            img.style.display = 'block';
        }
        else{
            img.style.display = 'none';
            
        }
    });

    txts.forEach((txt,i) => {
        if(i === index){
            txt.style.display = 'block';
        }
        else{
            txt.style.display = 'none';
            
        }
    });

    peras.forEach((pera,i) => {
        if(i === index){
            pera.style.display = 'block';
        }
        else{
            pera.style.display = 'none';
            
        }
    });
}

items.forEach((item,index) => {
    item.addEventListener('click', () =>{
        showContent(index);
    });
})


/* ==========================================================
Slider
========================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
});
