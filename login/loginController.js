import { loginUser } from "./loginModel.js";
import { REGEXP } from "../utils/constants.js";

export const loginController = async(form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailElement = form.querySelector("#email");
        const email = emailElement.value;

        const passwordElement = form.querySelector("#password");
        const password = passwordElement.value;

        const emailRegexp = new RegExp(REGEXP.email);
        if (!emailRegexp.test(email)) {
            alert("Wrong email format");
        } else {
            handleLoginUser(email, password);
        }
    });

    const handleLoginUser = async(email, password) => {
        const token = await loginUser(email, password);
        localStorage.setItem("token", token);
        
        setTimeout(() => {
            window.location = "/";
        }, 2000);
    };
};