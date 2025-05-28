export const adModel = async() => {
    
    let products = [];
    
    try {
        const response = await fetch("http://localhost:8000/api/products");
        products = await response.json();

    } catch (error) {
        throw new Error("It's not possible to obtain products at the moment.")
    
    }
    
    return products;

};