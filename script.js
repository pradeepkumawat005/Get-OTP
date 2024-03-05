// add slash
const date = document.getElementById('Inputdate');
date.addEventListener('keydown', () => {
    if (date.value.length === 2 || date.value.length === 5) {
        date.value += '/';
    }
});

// Input Bouncer
const inputs = document.querySelectorAll("#otp-input input");
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("input", function () {
        if (input.value.length == 1 && i + 1 < inputs.length) {
            inputs[i + 1].focus();
        }

    });
}


// GET OTP
function GetOtp() {
    let otp = '';
    for (let i = 0; i < 4; i++) {
        otp += (Math.floor(Math.random() * 10));
    }
    alert(`Your OTP IS :  ${otp}`);
}



