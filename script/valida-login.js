const form = document.getElementById("form");
const labels = document.querySelectorAll(".labels_required");
const inputs = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span_required");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    valid &= usernameValidate();
    valid &= passwordValidate();
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

function passwordValidate() {
    if (inputs[1].value.length < 8) {
        setError(1);
        return false;
    } else {
        removeError(1);
        return true;
    }
}
