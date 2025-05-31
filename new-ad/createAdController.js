import { createAdModel } from "./createAdModel.js";

export const createAdController = (form) => {
    form.addEventListener("submit", async(event) => {
        event.preventDefault();

        const name = form.querySelector("#name").value;
        const price = form.querySelector("#price").value;
        //const img = form.querySelector("#img").value;
        const description = form.querySelector("#description").value;
        const type = form.querySelector("input[name='type']:checked")?.value;
        const fileInput = form.querySelector("#img");
        const fileName = fileInput.files[0]?.name; 
        const img = fileName ? `resources/${fileName}` : "resources/general-img-landscape.png";

        try {
            
            const product = { name, price, img, description, type };
            await createAdModel(product);
            setTimeout(() => 
                window.location = "/", 2000
            );
        
        } catch (error) {
            alert(error.message)
        }
    })
}