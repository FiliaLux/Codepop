export const buildAd = product => {
    const productHtml = document.createElement('div');
    productHtml.className = 'ad-card';

    productHtml.innerHTML = `
    <div class="img-container">
        <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="ad-card-content">
      <h3 class="ad-title">${product.name}</h3>
      <p class="ad-price">${product.price} € - ${product.type}</p>
    </div>
  `;
    return productHtml;
};

export const buildNoAdAdvice = "There's no ads at the moment, try again later...";