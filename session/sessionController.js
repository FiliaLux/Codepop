import { buildAuthorizedSession, buildUnauthorizedSession } from "./sessionView.js";

export const sessionController = container => {
    const loggedIn = !!localStorage.getItem("token");

    if (loggedIn) {
        container.innerHTML = buildAuthorizedSession();

        const logoutButton = container.querySelector("button");
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("token");
            sessionController(container);
        })
    } else {
        container.innerHTML = buildUnauthorizedSession();
    }
};