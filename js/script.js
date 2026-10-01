document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });

    });


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".glass-card, .section-title, .hero-content, .hero-visual, .timeline-item"
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal-hidden");
        revealObserver.observe(element);
    });


    /* =========================================
       STATISTICS COUNTER
    ========================================= */

    const counters = document.querySelectorAll(".stat-number");

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = parseInt(counter.innerText);

                if (isNaN(target)) {
                    observer.unobserve(counter);
                    return;
                }

                let current = 0;
                const duration = 2000;
                const increment = target / (duration / 16);

                const updateCounter = () => {

                    current += increment;

                    if (current < target) {
                        counter.innerText = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }

                };

                updateCounter();

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.5
        }
    );

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =========================================
       GLASS CARD 3D EFFECT
    ========================================= */

    const cards = document.querySelectorAll(".glass-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

        });

    });


    /* =========================================
       ADVANCED FUTURISTIC CURSOR
    ========================================= */

    // Create cursor elements
    const cursor = document.createElement("div");
    const cursorDot = document.createElement("div");
    const cursorGlow = document.createElement("div");

    cursor.classList.add("custom-cursor");
    cursorDot.classList.add("cursor-dot");
    cursorGlow.classList.add("cursor-glow");

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorGlow);


    // Cursor position
    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    let glowX = 0;
    let glowY = 0;


    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });


    // Smooth cursor animation
    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;

        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;


        cursor.style.transform =
            `translate3d(${cursorX}px, ${cursorY}px, 0)`;

        cursorDot.style.transform =
            `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        cursorGlow.style.transform =
            `translate3d(${glowX}px, ${glowY}px, 0)`;


        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    /* =========================================
       CURSOR HOVER EFFECT
    ========================================= */

    const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, .glass-card"
    );

    interactiveElements.forEach(element => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover");
        });

    });


    /* =========================================
       CLICK EFFECT
    ========================================= */

    document.addEventListener("mousedown", () => {
        cursor.classList.add("cursor-click");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("cursor-click");
    });


    /* =========================================
       HIDE CURSOR ON MOBILE
    ========================================= */

    function checkDevice() {

        if (window.matchMedia("(pointer: coarse)").matches) {

            cursor.style.display = "none";
            cursorDot.style.display = "none";
            cursorGlow.style.display = "none";

        }

    }

    checkDevice();


    /* =========================================
       PAGE LOADED
    ========================================= */

    document.body.classList.add("page-loaded");

});
    /* =========================================
       FUTURISTIC CURSOR
    ========================================= */

    const cursor = document.createElement("div");
    const cursorDot = document.createElement("div");
    const cursorGlow = document.createElement("div");

    cursor.className = "custom-cursor";
    cursorDot.className = "cursor-dot";
    cursorGlow.className = "cursor-glow";

    document.body.appendChild(cursorGlow);
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    let glowX = 0;
    let glowY = 0;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function updateCursor() {

        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;

        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        requestAnimationFrame(updateCursor);
    }

    updateCursor();


    /* Cursor hover */

    document.querySelectorAll("a, button, .glass-card").forEach(element => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover");
        });

    });


    /* Cursor click */

    document.addEventListener("mousedown", () => {
        cursor.classList.add("cursor-click");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("cursor-click");
    });
     updateCursor();


console.log("CURSOR JAVASCRIPT IS WORKING");