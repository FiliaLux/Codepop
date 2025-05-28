import { signupController } from "./signup/signupController.js"
//import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form");
    /*const notifications = document.querySelector(".notifications");
    
    const { showNotifications } = notificationsController(notifications);

    registerForm.addEventListener("form-element-error", (event) => {
        const errorMessage = event.detail;
        showNotifications(errorMessage);
    });

    registerForm.addEventListener("create-user-successful", (event) => {
        const errorMessage = event.detail.message;
        const type = event.detail.type;
        showNotifications(errorMessage, type);
    })
    
    notificationsController(notifications);*/
    signupController(registerForm);
});