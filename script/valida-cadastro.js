const form = document.getElementById("form");
const labels = document.querySelectorAll(".labels_required");
const inputs = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span_required");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    valid &= usernameValidate();
    valid &= emailValidate();
    valid &= passwordValidate();
    valid &= cPasswordValidate();
    if (valid) {
        form.submit();
    }
});

function setError(index) {
    inputs[index].style.border = '0.2rem solid #e63636';
    spans[index].style.display = 'block';
    labels[index].style.color = "#e63636";
}

function removeError(index) {
    inputs[index].style.border = '';
    spans[index].style.display = 'none';
    labels[index].style.color = "#f0f0f0";
}

function usernameValidate() {
    if (inputs[0].value.length < 3) {
        setError(0);
        return false;
    } else {
        removeError(0);
        return true;
    }
}

function emailValidate() {
    if (!emailRegex.test(inputs[1].value)) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}

function passwordValidate() {
    if (inputs[2].value.length < 8) {
        setError(2);
        return false;
    } else {
        removeError(2);
        return true;
    }
}

function cPasswordValidate() {
    if (inputs[2].value !== inputs[3].value || inputs[3].value.length < 8) {
        setError(3);
        return false;
    } else {
        removeError(3);
        return true;
    }
}
