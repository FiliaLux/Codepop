export const buildAuthorizedSession = () => {
    return `
    <a href="./create-ad.html">New ad</a>
    <button class="logout">Log out</button>
    `
};

export const buildUnauthorizedSession = () => {
    return `
    <a href="./login.html">Log in</a>
    <a href="./signup.html">Sign up</a>
    `
};