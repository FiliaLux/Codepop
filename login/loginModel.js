export const loginUser = async(email, password) => {
    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify({
            username: email,
            password
        }), 
        headers: {
            "Content-Type" : "application/json",

        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Invalid credentials");
    }

    const {accessToken} = await response.json();
    
    return accessToken;
}   