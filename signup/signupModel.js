export const createUser = async(name, email, password) => {
    const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        body: JSON.stringify({
            name, 
            username: email,
            password
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
    }
};