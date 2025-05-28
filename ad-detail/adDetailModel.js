export const adDetailModel = async(productId) => {
    const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`);

    if (!response.ok) {
        throw new Error("Product not available");
    }

    const productDetail = response.json();

    return productDetail;
};

export const removeAd = async(productId) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error("Ad not available");
    }
};

export const getLoggedUserInfo = async() => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/auth/me", {
        headers: {
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    const user = await response.json();

    if (!response.ok) {
        throw new Error("User doesn't exist");
    }

    return user;
}