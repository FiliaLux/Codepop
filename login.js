import { loginController } from "./login/loginController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    loginController(form);
})