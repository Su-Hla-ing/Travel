/*===================================Show Mobile Menu==========================*/

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navCloseBtn = document.querySelector(".nav_btn_close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}
if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

/*===================================Remove Mobile Menu===========================*/
const navLink = document.querySelectorAll("#nav-link");
navLink.forEach((n) => {
  n.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
});

/*====================================CHANGE BACKGROUND HEDER=============================*/
const header = document.querySelector("#header");
window.addEventListener("scroll", () => {
  // When the scroll is greater than 100vh , add change_bg_header classlist to the header tag
  if (scrollY >= 100) {
    header.classList.add("change_bg_header");
  } else {
    header.classList.remove("change_bg_header");
  }
});

/*======================================SWIPPER DISCOVER====================================*/
var swiper = new Swiper(".discover_container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  
  },
 
});

/*=========================================VIDEO========================================*/ 
const videoTag = document.querySelector("#video-file");
const videoButton = document.querySelector("#video-button");
const videoIcon = document.querySelector("#video-icon");


// When videoButton click ,
videoButton.addEventListener("click" , () => {
  if(videoTag.paused){
    // Video play
    videoTag.play();

    // We change icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");

  }else{
     // Video pause
     videoTag.pause();

     // We change icon
     videoIcon.classList.add("ri-play-line");
     videoIcon.classList.remove("ri-pause-line");
  }
});
// When video end,
videoTag.addEventListener("ended" , () => {
    // We change icon
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
});

// ==================================SCROLL UP=====================================
const scrollUp = document.querySelector("#scroll-up");
window.addEventListener("scroll" , () => {
  // When scroll is higher than 200 vh , add show_scrollup classlist
  if(scrollY >= 200){
    scrollUp.classList.add("show_scrollup");
  }else{
    scrollUp.classList.remove("show_scrollup")
  }
});

// ===================================SCROLL REVEAL ANIMATION==========================
const sr = ScrollReveal({
  origin: "top" ,
  distance: "60px" ,
  duration: "2800" ,
  reset: "true"
})
sr.reveal( `.home_data , .home_social-link , .home_info , 
          .discover_container, .experience_data , .experience_img-overlay ,
          .place_container , .sponsor_content , .footer_rights , .footer_data ` ,{
   origin: "top",
   interval: "100",
  
   
})
sr.reveal( `.about_data , .about_img , .video_description , .subscribe_description` ,{
  origin: "left"
})
sr.reveal( ` .about_img , .video_content , .subscribe_form , .about_img-overlay ` ,{
  origin: "right",
  interval: "100",
 
})