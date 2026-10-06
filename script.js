/* =========================
   CAFE FESTA JAVASCRIPT
========================= */


/* HEADER */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* MENU FILTER */

const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");

menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const category = tab.dataset.category;

        menuCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetID = this.getAttribute("href");

        if (targetID === "#") return;

        const target = document.querySelector(targetID);

        if (!target) return;

        event.preventDefault();

        const headerHeight =
            document.getElementById("header").offsetHeight;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

});


/* CURRENT YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* IMAGE FALLBACK */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.style.opacity = "0";

    });

});