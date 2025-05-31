import { adDetailModel, removeAd, getLoggedUserInfo } from "./adDetailModel.js";
import { buildDetailView, buildRemoveAdButton } from "./adDetailView.js";

export const adDetailController = async(container, id) => {
    const showRemoveAdButton = (id) => {
        const removeAdButton = buildRemoveAdButton();
        const removeButtonContainer = container.querySelector(".remove-button");
        removeButtonContainer.appendChild(removeAdButton);
        removeAdButton.addEventListener("click", () => {
            if(confirm("Do you want to delete the ad permanently?")) {
                removeAd(id);
                window.location = "/";
            }
        });
    };

    try {
        const adDetail = await adDetailModel(id);
        container.innerHTML = buildDetailView(adDetail);

        const user = await getLoggedUserInfo();
        if (user.id === adDetail.userId) {
            showRemoveAdButton(id);
        }

    } catch (error) {
        throw new Error(error.message);
    }
    
};