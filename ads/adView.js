export const buildAd = product => {
    const productHtml = `
        <h3>${product.name}</h3>
        <img src=${product.img} width=150px></img>
        <p>${product.type} - ${product.price} € </p>
    `
    return productHtml;
};

export const buildNoAdAdvice = "There's no ads at the moment, try again later...";