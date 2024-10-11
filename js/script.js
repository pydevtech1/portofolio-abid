
console.log('hello sir')

function openFunction(){
document.getElementById("menu").style.width="360px";
document.getElementById("mainbox").style.marginLeft="360px";
document.getElementById("mainbox").innerHTML="Click on Cross Element and Close Menu";
}
function closeFunction(){
document.getElementById("menu").style.width="0px";
document.getElementById("mainbox").style.marginLeft="0px";
document.getElementById("mainbox").innerHTML="&#9776; Open";
}
function closeMenu(){
    document.getElementById("navbar").style.height = "0%";
}
function openMenu(){
    document.getElementById("navbar").style.height = "100%";
}

const dynamicText = document.querySelector("h2 span");
const words = ["Bidas", "Pydev",];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

const text = document.querySelector('h1'),
    char = text.querySelectorAll('span'),
    replaceChar = text.querySelectorAll('span:not([data-char="."])');

const tl = gsap.timeline();


tl.set(char, {
    yPercent: -110
})
tl.set(text, {
    autoAlpha:1
});
tl.to(char, {
    duration:1,
    yPercent:0,
    stagger:0.05,
    repeat: 0,
    ease: "expo.inOut"
}).to(replaceChar, {
    duration:1,
    yPercent:0,
    ease: "expo.inOut",
    repeat:0,
})