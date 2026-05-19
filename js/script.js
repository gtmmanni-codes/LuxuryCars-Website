
window.addEventListener("load", () => {

    console.log("Luxury Cars Website Loaded Successfully!");

});



//contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Your contact form has been sent successfully!");

        contactForm.reset();

    });

}

//button
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {

        button.style.transform = "scale(1.05)";
        button.style.transition = "0.3s";

    });

    button.addEventListener("mouseout", () => {

        button.style.transform = "scale(1)";

    });

});

