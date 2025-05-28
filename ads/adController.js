import { adModel } from "./adModel.js";
import { buildAd, buildNoAdAdvice } from "./adView.js";

export const adController = async(adContainer) => {

    try {
        const products = await adModel();
        drawAds(products, adContainer);

    } catch (error) {
        alert(error.message);
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
        adHtml.innerHTML = buildAd(product);

        container.appendChild(adHtml);
    });
};