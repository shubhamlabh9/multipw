// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show")
  } else {
    scrollTopBtn.classList.remove("show")
  }
})

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Simple AOS (Animate On Scroll) implementation
// This is a lightweight alternative to the AOS library
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-aos]")

  const checkIfInView = () => {
    animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // If element is in viewport
      if (elementPosition.top < windowHeight * 0.9) {
        element.classList.add("aos-animate")
      }
    })
  }

  // Initial check
  checkIfInView()

  // Check on scroll
  window.addEventListener("scroll", checkIfInView)
})
