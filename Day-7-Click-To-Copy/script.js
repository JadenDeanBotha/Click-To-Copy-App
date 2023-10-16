const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

//This is the function which will allow us to copy the text
const copyText = (e) => {
    //Stops form from refreshing the page
    e.preventDefault()

    //Using the clipboard api to copy the input fields value
    navigator.clipboard.writeText(coupon.value)
    .then(() => {
        //This changes the Copy button to Copied! for three seconds before changing it back to Copy
        btn.textContent = "Copied!";
        setTimeout(() => {
            btn.textContent = "Copy";
        }, 3000)
    })
}

btn.addEventListener("click", copyText);