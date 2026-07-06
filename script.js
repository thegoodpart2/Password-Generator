const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|}{[]\\:;?><,./-=";

const genpass = () => {
    let getlength = document.getElementById("length").value;
    let getupper = document.getElementById("upper").checked;
    let getlower = document.getElementById("lower").checked;
    let getnumber = document.getElementById("number").checked;
    let getsymbol = document.getElementById("symbol").checked;

    let passwordPool = "";
    let password = "";

    // Check if the length is at least 8
    if (getlength < 8) {
        alert("Password length must be at least 8 characters");
        return;
    }

    // Build the character pool based on selected options
    if (getupper) passwordPool += upper;
    if (getlower) passwordPool += lower;
    if (getnumber) passwordPool += number;
    if (getsymbol) passwordPool += symbol;

    // Ensure at least one option is selected
    if (passwordPool === "") {
        alert("Please select at least one option");
        return;
    }

    // Generate the password
    for (let i = 0; i < getlength; i++) {
        password += passwordPool.charAt(Math.floor(Math.random() * passwordPool.length));
    }

    // Set the generated password to the input field
    document.getElementById("password").value = password;
}

document.getElementById("generateButton").addEventListener("click", genpass);
