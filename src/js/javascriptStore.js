let hamburger = document.getElementById("hamburger")
let mobileMenuClickSensor = document.getElementById("mobileMenuClickSensor")
let time = new TimelineMax({ paused: true, reversed: true })
let prevScrollpos = 0
let navShown = true

time
  .to(mobileMenu, 0, { top: 0, "z-index": 100 })
  .fromTo(
    mobileMenu,
    0.3,
    { opacity: 0, position: "absolute" },
    { opacity: 1, position: "fixed" }
  )
  .fromTo(menuTitle, 0.3, { opacity: 0, y: -15 }, { opacity: 1, y: 0 })
  .fromTo(mobileItems, 0.3, { opacity: 0, y: -15 }, { opacity: 1, y: 0 })
  .fromTo(body, 0, { overflow: "hidden" }, { overflow: "auto" })

mobileMenuClickSensor.addEventListener("click", () => {
  showMenu()
})
hamburger.addEventListener("click", () => {
  showMenu()
})

window.addEventListener("scroll", () => {
  handleScroll()
})

handleScroll = () => {
  let navigation = document.getElementById("navigation")
  const currentScrollPos = this.scrollY
  let hideNav = new TimelineMax({ paused: true })

  if (currentScrollPos < this.prevScrollpos || currentScrollPos <= 150) {
    !this.navShown ? hideNav.to(navigation, 0.5, { top: -1 }) : null
  } else {
    !this.navShown ? hideNav.to(navigation, 0.5, { top: "-25vh" }) : null
  }

  hideNav.play()
  this.prevScrollpos = currentScrollPos
}

showMenu = () => {
  hamburger.classList.toggle("is-active")
  menuTween()
}

scrollToElement = id => {
  showMenu()
  document.getElementById(id).scrollIntoView()
}

menuTween = () => {
  if (time.reversed()) {
    time.play()
    this.navShown = true
  } else {
    time.reverse()
    this.navShown = false
  }
}

showAll = () => {
  const tl = new TimelineMax()
  this.scrollToTop()
  tl.fromTo(spinner, 0.2, { opacity: "1" }, { opacity: "0" })
    .fromTo(loader, 0, { top: "0" }, { top: "-150vh" })
    .fromTo(jumbotronPoster, 0.6, { height: "0" }, { height: "70%" })
    .fromTo(jumbotronPoster, 0.4, { width: "100%" }, { width: "90%" })
    .fromTo(navigation, 0.4, { top: 10, opacity: 0 }, { top: 0, opacity: 1 })
    .fromTo(overlay, 0.4, { width: 0 }, { width: "100%", delay: "-0.5" })
    .fromTo(subtext, 0.4, { opacity: 0 }, { opacity: 1, delay: -0.5 })
}
scrollToTop = () => {
  document.getElementById("top").scrollIntoView()
}

viewMovieProject = () => {
  window.open("http://movies.njabulombuli.co.za", "_blank")
}

viewMovieCode = () => {
  window.open("https://github.com/Njabulo-Mbuli/Movies_Galore", "_blank")
}

viewXploraProject = () => {
  window.open("http://xplora.njabulombuli.co.za", "_blank")
}

viewXploraCode = () => {
  window.open("https://github.com/Njabulo-Mbuli/Xplora", "_blank")
}

viewTracksProject = () => {
  window.open("http://tracks.njabulombuli.co.za", "_blank")
}

viewTracksCode = () => {
  window.open("https://github.com/Njabulo-Mbuli/Tracks", "_blank")
}
viewShopProject = () => {
  window.open("http://shop.njabulombuli.co.za", "_blank")
}

viewShopCode = () => {
  window.open("https://github.com/Njabulo-Mbuli/shop", "_blank")
}

//Scroll Reveal section
let sectionContainer = document.getElementsByClassName('sectionContainer')

Array.prototype.forEach.call(sectionContainer, (element,index,array) => {
  let animateIn = new TimelineMax()
  let controller = new ScrollMagic.Controller()

  animateIn.from(element, 0.7, { y: 50, opacity: 0})
  
  //Scroll Magic scene
  let scene = new ScrollMagic.Scene({
    triggerElement: element,
    reverse:true
  })
    .addTo(controller)
    .setTween(animateIn)
})

//Add event listener to the project sections to show the github logo on mouse enter
let project = document.getElementsByClassName('projectSensor');

Array.prototype.forEach.call(project,(element,index,array)=>{
  let githubButton = element.childNodes[1];

  element.addEventListener('mouseenter',()=>{
    githubButton.classList.toggle("showGithubLink");
  });

  element.addEventListener('mouseleave',()=>{
    githubButton.classList.remove("showGithubLink");
  });
})