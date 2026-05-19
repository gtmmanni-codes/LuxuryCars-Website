
window.addEventListener("load", () => {

    console.log("Luxury Cars Website Loaded Successfully!");

});



//contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        

        alert("Your contact form has been sent successfully!");

        contactForm.reset();

    });

}
