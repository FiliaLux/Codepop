import { adModel } from "./adModel.js";
import { buildAd, buildNoAdAdvice } from "./adView.js";

export const adController = async(adContainer) => {

    try {
        const event = new CustomEvent("show-ads-started");
        adContainer.dispatchEvent(event);
        const products = await adModel();
        drawAds(products, adContainer);

    } catch (error) {
        const event = new CustomEvent("show-ads-failed", {
            detail: error.message
        });
        adContainer.dispatchEvent(event);
    } finally {
        const event = new CustomEvent("show-ads-finished");
        adContainer.dispatchEvent(event);
    }
};

const drawAds = (products, container) => {
    
    container.innerHTML = ""
    
    if (products === 0) {
        container.innerHTML = buildNoAdAdvice;
    } 

    products.forEach(product => {
        const adHtml = document.createElement("a");
        adHtml.setAttribute("href", `./ad-detail.html?id=${product.id}`);
        adHtml.appendChild(buildAd(product));

        container.appendChild(adHtml);
    });
};