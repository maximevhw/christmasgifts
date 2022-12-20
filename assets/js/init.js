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
    console.log(code);
    checkGift(code);
}

function checkGift(code) {
    const result = _gifts.filter(gift => gift.code = code);
    console.log(result);
}