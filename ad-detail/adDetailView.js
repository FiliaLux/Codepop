export const buildDetailView = (product) => {
    const detailHtml = `
    <div class="detail-wrapper">
    <div class="detail-container">
        <h3>${product.name}</h3>
        <img src=${product.img} width=300px></img>
        <p>${product.description}<p>
        <p>${product.type} - ${product.price} € </p>
        <p>By: ${product.user.username}<p>
        <div class="remove-button"></div>
    </div>
    </div>
    `
    return detailHtml;
};

export const buildRemoveAdButton = () => {
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    return removeButton;
};