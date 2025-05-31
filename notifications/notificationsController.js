import { buildNotification } from "./notificationsView.js";

export function notificationsController (notifications) {
    const showNotifications = (message, type="error") => {
        const container = document.createElement("div");
        container.classList.add("notificationWindow");
        container.classList.add(type);
        container.innerHTML = buildNotification(message);
        
        notifications.appendChild(container);

        const closeButton = container.querySelector("button");
        const removeNotification = () => {
            container.remove();
        };

        closeButton.addEventListener("click", removeNotification);
        setTimeout(removeNotification, 5000);
    }; 

    return {showNotifications};
}