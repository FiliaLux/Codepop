export const buildDetailView = (product, user) => {
    const detailHtml = `
    <h3>${product.name}</h3>
    <img src=${product.img}></img>
    <p>${product.description}<p>
    <p>${product.type} - ${product.price} € </p>
    <p>By: ${user.name}<p>
    `
    return detailHtml;
};

export const buildRemoveAdButton = () => {
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    return removeButton;
}