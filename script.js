const faq=document.querySelectorAll(".faqs");
faq.forEach(faqs => {
    faqs.addEventListener("click", () => {
       faqs.classList.toggle("active");
    })
});

const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu on icon click
menuIcon.addEventListener("click", () => {
    if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "flex";
    }
  });
  
  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });