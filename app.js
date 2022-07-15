let mode=document.getElementsByClassName("mode")[0]

console.log(mode)

    mode.addEventListener("click",(eo) => {
        let element = document.body;
    element.classList.toggle("dark-mode");
    })
    


    let submit_form=document.getElementById("submit_form")

    submit_form.addEventListener("click",(eo) => {
        alert("Thank you!");
    })
/**
 * Define Global Variables
 *
 */
 const startingTime = performance.now();

 const navbar = document.getElementById("navbar__list");
 const sections = document.querySelectorAll("section");
 
 /**
  * End Global Variables
  */
 //to create section for the nav
 function create_section() {
     for (let i = 0; i < sections.length; i++) {
         const li = document.createElement("li"); // create li element.
         li.className = "menu__link";
         const sectionName = sections[i].getAttribute("data-nav"); // to display the value of the nav attribute of the section
         const sectionId = sections[i].getAttribute("id");
         //console.log(sectionId)
         li.innerHTML = `<a class ="menu__link"  class="your-active-class" data-id="${sectionId}">${sectionName}</a>`;
 
         //  console.log(    li.innerHTML )
         navbar.appendChild(li); // add list to the nav.
     }
 }
 
 function isInViewport(elem) {
     const bounding = elem.getBoundingClientRect();
     return bounding.top >= 0;
 }
 
 // Scroll to section on link click
 function scrollToElement(event) {
     if (event.target.nodeName === "A") {
         const sectionId = event.target.getAttribute("data-id");
         const section = document.getElementById(sectionId);
         section.scrollIntoView({ behavior: "smooth" });
     }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }
 
 // Build menu
 create_section();
 
 // set Active section
 document.addEventListener("scroll", function () {
     sections.forEach((active) => {
         let activeLink = navbar.querySelector(`[data-nav=${active.id}]`);
         if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) {
             active.classList.add("your-active-class");
 
             let selector = `[data-id=${active.id}]`;
             console.log(selector);
 
             document.querySelector(selector).classList.add("active");
         } else {
             active.classList.remove("your-active-class");
             let selector = `[data-id=${active.id}]`;
             console.log(selector);
 
             document.querySelector(selector).classList.remove("active");
         }
     });
 });
 
 // when user clicks access to the target
 navbar.addEventListener("click", function (event) {
     scrollToElement(event);
 });
 
 //scrollToClick();
 const endingTime = performance.now();
 console.log("This code took " + (endingTime - startingTime) + " milliseconds.");
 

