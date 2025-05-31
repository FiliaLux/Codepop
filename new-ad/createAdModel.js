export const createAdModel = async({name, price, img, description, type}) => {
    const token = localStorage.getItem("token");
    
    const response = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        body: JSON.stringify({
            name,
            price,
            img,
            description,
            type
        }),
        headers: {
            "Content-type" : "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Error creating ad");
    }
};