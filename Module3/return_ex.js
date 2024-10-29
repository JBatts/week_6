
// Select all <p> (paragraph) elements on the page.
let objSet1 = document.querySelectorAll("p");

// Select all elements with the class "attn" (Regardless of the tag type.).
let objSet2 = document.querySelectorAll(".attn");

// Select all <p> (paragraph) elements that also have the class "attn" (ex. <p class="attn">).
let objSet3 = document.querySelectorAll("p.attn");

// Select all <img> (images) elements that have an "alt" attribute (Regardless of the attribute's value.).
let objSet4 = document.querySelectorAll("img[alt]");

// Select all <p> (paragraph) elements that are direct children of a <div> (ex. immmediate child <p> elements inside a <div>).
let objSet5 = document.querySelectorAll("div > p");

// Select all <div> and <span> elements on the page.
let objSet6 = document.querySelectorAll("div, span")