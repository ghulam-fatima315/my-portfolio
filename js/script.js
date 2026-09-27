/* ========================================
MOBILE NAVIGATION
======================================== */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

/* Open / Close Mobile Menu */

menuToggle.addEventListener("click", () => {

```
navMenu.classList.toggle("active");

const isOpen = navMenu.classList.contains("active");

menuToggle.setAttribute("aria-expanded", isOpen);

menuToggle.setAttribute(
    "aria-label",
    isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
);


/* Change hamburger icon */

const icon = menuToggle.querySelector("i");

if (isOpen) {

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

} else {

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

}
```

});

/* Close mobile menu after clicking a link */

navLinks.forEach((link) => {

```
link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );


    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

});
```

});

/* ========================================
ACTIVE NAVIGATION
======================================== */

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {


let currentSection = "";

sections.forEach((section) => {

    const sectionTop = section.offsetTop - 120;

    const sectionHeight = section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {
        currentSection = section.getAttribute("id");
    }

});


navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {

        link.classList.add("active");

    }

});
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
/* =========================================
   CONTACT FORM VALIDATION
   ========================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Stop form from refreshing the page
        event.preventDefault();

        // Get form fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        // Error message elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");

        // Success message
        const successMessage = document.getElementById("successMessage");


        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";

        successMessage.textContent = "";
        successMessage.style.display = "none";


        // Remove previous classes
        name.classList.remove("error", "valid");
        email.classList.remove("error", "valid");
        subject.classList.remove("error", "valid");
        message.classList.remove("error", "valid");


        let isValid = true;


        // =====================================
        // NAME VALIDATION
        // =====================================

        if (name.value.trim() === "") {

            nameError.textContent = "Please enter your full name.";

            name.classList.add("error");

            isValid = false;

        } else {

            name.classList.add("valid");
        }


        // =====================================
        // EMAIL VALIDATION
        // =====================================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            emailError.textContent = "Please enter your email address.";

            email.classList.add("error");

            isValid = false;

        } else if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            email.classList.add("error");

            isValid = false;

        } else {

            email.classList.add("valid");
        }


        // =====================================
        // SUBJECT VALIDATION
        // =====================================

        if (subject.value.trim() === "") {

            subjectError.textContent = "Please enter a subject.";

            subject.classList.add("error");

            isValid = false;

        } else {

            subject.classList.add("valid");
        }


        // =====================================
        // MESSAGE VALIDATION
        // =====================================

        if (message.value.trim() === "") {

            messageError.textContent = "Please enter your message.";

            message.classList.add("error");

            isValid = false;

        } else if (message.value.trim().length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            message.classList.add("error");

            isValid = false;

        } else {

            message.classList.add("valid");
        }


        // =====================================
        // SUCCESS
        // =====================================

        if (isValid) {

            successMessage.textContent =
                "Thank you! Your message has been submitted successfully.";

            successMessage.style.display = "block";


            // Clear form
            contactForm.reset();


            // Remove green borders after reset
            name.classList.remove("valid");
            email.classList.remove("valid");
            subject.classList.remove("valid");
            message.classList.remove("valid");
        }

    });

}

