import { loginUser } from "./loginModel.js";
import { REGEXP } from "../utils/constants.js";

export const loginController = async(form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailElement = form.querySelector("#email");
        const email = emailElement.value;

        const passwordElement = form.querySelector("#password");
        const password = passwordElement.value;

        const errors = [];

        const emailRegexp = new RegExp(REGEXP.mail);
        if (!emailRegexp.test(email)) {
            errors.push("Wrong email format");
        }
        if (errors.length === 0) {
            handleLoginUser(email, password);
        }
        else {
            errors.forEach(error => {
                const event = new CustomEvent("login-error", {
                    detail: error
                });
                form.dispatchEvent(event);
            });
        }
    });

    const handleLoginUser = async(email, password) => {
        try {
             const token = await loginUser(email, password);
            localStorage.setItem("token", token);
            
            setTimeout(() => {
                window.location = "/";
            }, 2000);
        
        } catch (error) {
            const event = new CustomEvent("login-error", {
                detail: error.message || "Login failed",
            });
            form.dispatchEvent(event);
        }
       
    };
};