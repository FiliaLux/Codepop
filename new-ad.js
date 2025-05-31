import { createAdController } from "./new-ad/createAdController.js";

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    const createAdForm = document.querySelector("form");
    
    if (!token) {
        window.location = "/login.html";
    } else {
        createAdController(createAdForm);
    }
    
})