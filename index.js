import { adController } from "./ads/adController.js";
import { sessionController } from "./session/sessionController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { loaderController } from "./loader/loaderController.js";

document.addEventListener("DOMContentLoaded", () => {
    const adContainer = document.querySelector(".ad-container");
    const session = document.querySelector(".session");
    const notifications = document.querySelector(".notifications");
    const loader = document.querySelector(".loader");

    const {showNotifications} = notificationsController(notifications);
    const {show, hide} = loaderController(loader);

    adContainer.addEventListener("show-ads-started", () => {
        show();
    });

    adContainer.addEventListener("show-ads-finished", () => {
        hide();
    });
    adContainer.addEventListener("show-ads-failed", (event) => {
        const errorMessage = event.detail;
        showNotifications(errorMessage);
    });

    loaderController(loader);
    notificationsController(notifications);
    sessionController(session);
    adController(adContainer);
})