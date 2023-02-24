const l_to_u = ["hello", "world", "this", "is", "my", "program"];
const u_to_l = ["HELLO", "WORLD", "THIS", "IS", "MY", "PROGRAM"];

const l_to_u_display = document.getElementById("l-to-u-display");
const u_to_l_display = document.getElementById("u-to-l-display");

const l_to_u_button = document.getElementById("l-to-u-button");
const u_to_l_button = document.getElementById("u-to-l-button");

l_to_u_display.textContent = l_to_u;
u_to_l_display.textContent = u_to_l;

l_to_u_button.addEventListener("click", ()=>{l_to_u_display.textContent = l_to_u.map(x => x.toUpperCase())})
u_to_l_button.addEventListener("click", ()=>{u_to_l_display.textContent = u_to_l.map(x => x.toLowerCase())})