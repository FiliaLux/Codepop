import { createUser } from "./signupModel.js";
import { REGEXP } from "../utils/constants.js";

export const signupController= async(form) => {

    form.addEventListener("submit", () => {
        const nameElement = form.querySelector("#username");
        const name = nameElement.value;
        
        const emailElement = form.querySelector("#email");
        const email = emailElement.value;
        
        const passwordElement = form.querySelector("#password");
        const password = passwordElement.value;
        
        const confirmPasswordElement = form.querySelector("#confirm-password");
        const confirmPassword = confirmPasswordElement.value;
        
        const errors = [];

        const emailRegexp = new RegExp(REGEXP.mail);
        if (!emailRegexp.test(email)) {
            errors.push("Wrong email format");
        }
        if (password !== confirmPassword) {
            errors.push("Passwords do not match");
        }
        if (errors.length === 0) {
            handleCreateUser(name, email, password);
        } else {
            errors.forEach(error => {
                const event = new CustomEvent("form-element-error", {
                    detail: error
                });
                form.dispatchEvent(event);
            });
        }
    });
    
    const handleCreateUser = async(name, email, password) => {
        try {
            await createUser(name, email, password);
            
            const event = new CustomEvent("create-user-successful", {
                detail: {
                    message: "User created successfuly!", 
                    type: "success"
                }
            });
            form.dispatchEvent(event);
            
            setTimeout(() => {
                window.location = "/";
            }, 2000);

        } catch (error) {
            const event = new CustomEvent("form-element-error", {
                detail: error
            });
            form.dispatchEvent(event);
        }
    };
};


