


    const button = document.querySelector(".dropbtn");
    const navbarLinks = document.querySelector(".dropdown-content");
    const Abutton = document.querySelector(".Idyll");
    const idyll = document.querySelector(".popupIdyll");
    const closePopup = document.querySelector(".close-popup");

    const tpButton = document.querySelector(".tpButton");
    const typiskNorsk = document.querySelector(".typiskNorsk");

    const ccButton = document.querySelector(".CCbutton");
    const kanskje = document.querySelector(".kanskje");

    const pizzaButton = document.querySelector(".pizza");
    const stektPizza = document.querySelector(".stektPizza");

    const wigButton = document.querySelector(".wigButton");
    const dreams = document.querySelector(".dreams")

    button.addEventListener("click", () =>{
        navbarLinks.classList.toggle("active");
    })

    Abutton?.addEventListener("click", () =>{
        idyll.classList.toggle("active");
    })

    closePopup?.addEventListener("click", () =>{
        idyll.classList.remove("active");
    })

    tpButton.addEventListener("click", () =>{
        typiskNorsk.classList.toggle("active");
    })

    ccButton.addEventListener("click", () =>{
        kanskje.classList.toggle("active");
    })

    pizzaButton.addEventListener("click", () =>{
        stektPizza.classList.toggle("active");
    })

    wigButton.addEventListener("click", () =>{
        dreams.classList.toggle("active");
    })