import BcfApiClient from "../../src/access/bcf-api-client.js"

const bcfApiClient = new BcfApiClient();

const loginForm = document.getElementById("login-form");
loginForm.submit.addEventListener("click", e => {
    bcfApiClient.login(loginForm.user.value, loginForm.password.value);
});