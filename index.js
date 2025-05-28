import { adController } from "./ads/adController.js";
import { sessionController } from "./session/sessionController.js";

document.addEventListener("DOMContentLoaded", () => {
    const adContainer = document.querySelector(".ad-container");
    const session = document.querySelector(".session");
    
    sessionController(session);
    adController(adContainer);
})