export const buildNotification = (message) => {
    let notificationView = `
        <p class="message">${message}</p>
        <button class="closeButton">close</button>
        `
    return notificationView;
};