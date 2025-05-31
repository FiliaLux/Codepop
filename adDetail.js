import { adDetailController } from "./ad-detail/adDetailController.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchParams = new URLSearchParams(window.location.search);
    const adId = searchParams.get("id");
    const adContainer = document.querySelector(".ad-detail-container");

    if (adId) {
        adDetailController(adContainer, adId);
    } else {
        window.location = "/";
    }
    
});