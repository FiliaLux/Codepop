import { loginController } from "./login/loginController.js";
import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const notifications = document.querySelector(".notifications");

    const { showNotifications } = notificationsController(notifications);
    
    form.addEventListener("login-error", (event) => {
        const errorMessage = event.detail;
        showNotifications(errorMessage);
    });

    notificationsController(notifications);
    loginController(form);
})