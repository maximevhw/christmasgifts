"use strict";

document.addEventListener('DOMContentLoaded', init);


function init() {
    document.querySelector("form").addEventListener("submit", processSubmit);
    console.log('yeaaa buddy');
}

function processSubmit(e) {
    e.preventDefault();
    let code = "";
    document.querySelectorAll("input[type=text]").forEach(input => {
        code += input.value;
    })
    checkGift(code);
}

function checkGift(code) {
    const $giftArticle = document.querySelector("#gift");
    $giftArticle.innerHTML = "";

    const gift = _gifts.find(giftObject => giftObject.code === code);

    if (gift === undefined) {
        $giftArticle.insertAdjacentHTML("beforeend", `
        <h2>It seems like you entered an incorrect code.</h2>
        <img src="assets/media/gift.webp" ALT="gift not found">
        `);
    } else {
        $giftArticle.insertAdjacentHTML("beforeend", `
<h2>${gift.name}</h2>
<img src="${gift.img}" alt="${gift.name}">
<p>${gift.desc}</p>
`)
    }
    //6519 8240 2267 4013
}