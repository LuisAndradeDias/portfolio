function scopoColor() {
    let colorAraay = [
        color1 = '#3182ce',
        color2 = '#9f7aea',
        color3 = '#48bb78',
        color4 = '#ed64a6'
    ]
  let numberColor = parseInt(Math.random() * colorAraay.length);

    document.querySelector(".head").style.borderBottom = `2px solid ${colorAraay[numberColor]}`;
    document.querySelector(".footer-page").style.borderTop = `2px solid ${colorAraay[numberColor]}`;
    document.querySelector(".theme").style.color = colorAraay[numberColor];
    document.querySelector(".button-hamburguer").style.backgroundColor = colorAraay[numberColor];
    document.querySelector(".a-home-hamburguer").style.borderBottom = `2px solid ${colorAraay[numberColor]}`;
    document.querySelector(".a-projects-hamburguer").style.borderBottom = `2px solid ${colorAraay[numberColor]}`;
    document.querySelector(".section-hamburguer").style.border = `2px solid ${colorAraay[numberColor]}`;
    document.querySelectorAll(".projects").forEach(e => { e.style.border = `2px solid ${colorAraay[numberColor]}` });
    document.querySelectorAll(".projects-text").forEach(e =>{ e.style.borderTop = `2px solid ${colorAraay[numberColor]}` });
    document.querySelectorAll(".button-projects").forEach(e => { e.style.border = `2px solid ${colorAraay[numberColor]}` });

}
scopoColor()



function scopoTheme() {
    function chargeIconDark() {
        document.querySelector('.button-theme').innerHTML = ` 
        <ion-icon class="moon-theme-icon theme" name="moon-outline"></ion-icon> `;
        document.querySelector('.moon-theme-icon').addEventListener('click', chargeThemeDark);
        document.querySelector('.moon-theme-icon').addEventListener('click', chargeIconSun);
    }
    function chargeIconSun() {
        document.querySelector('.button-theme').innerHTML = ` 
        <ion-icon class="sun-theme-icon theme" name="sunny-outline"></ion-icon> `;
        document.querySelector('.sun-theme-icon').addEventListener('click', chargeThemeWhite);
        document.querySelector('.sun-theme-icon').addEventListener('click', chargeIconDark);
    }
    function chargeThemeWhite() {
        document.body.classList.remove("theme-dark");
        document.body.classList.add("theme-white");
    }
    function chargeThemeDark() {
        document.body.classList.remove("theme-white");
        document.body.classList.add("theme-dark");
    }
    document.querySelector('.sun-theme-icon').addEventListener('click', chargeThemeWhite);
    document.querySelector('.sun-theme-icon').addEventListener('click', chargeIconDark);
}
scopoTheme()
function scopoHamburguer() {
    let buttonHamburguer = document.querySelector(".button-hamburguer");
    let inputHamburguer = document.querySelector("#input-hamburguer");

    buttonHamburguer.onclick = function Open() {
        if (inputHamburguer.checked === false) {
            inputHamburguer.checked = true;
            buttonHamburguer.innerHTML = `Close <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M2.165,19.551C2.351,19.831,2.664,20,3,20h15c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944 C21.649,11.169,21.336,11,21,11h-1V7c0-1.103-0.897-2-2-2h-6.1L9.616,3.213C9.44,3.075,9.224,3,9,3H4C2.897,3,2,3.897,2,5v14 h0.007C2.007,19.192,2.056,19.385,2.165,19.551z M17.341,18H4.517l2.143-5h12.824L17.341,18z M18,7v4H6 c-0.4,0-0.762,0.238-0.919,0.606L4,14.129V7h7.556H12H18z"></path></svg>`;
        }
        else if (inputHamburguer.checked === true) {
            inputHamburguer.checked = false;
            buttonHamburguer.innerHTML = `Open <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"> <path d="M20,5h-8.586L9.707,3.293C9.52,3.105,9.265,3,9,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V7 C22,5.897,21.103,5,20,5z M4,19V7h7h1h8l0.002,12H4z"> </path> </svg>`;
        }
    };
}
scopoHamburguer()