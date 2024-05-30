const button = document.querySelector("button");
const modal = document.querySelector("dialog");

button.onclick = function () {
    modal.showModal();
    calculateInstallment();
}


const select = document.querySelector(".installment-select");
select.onchange = function () {
    calculateInstallment();
}

function calculateInstallment() {
    const totalPrice = parseFloat(document.querySelector('#price').innerText);
    const installments = parseInt(select.value);
    let installmentPrice = totalPrice / installments;
    document.getElementById("price_total").innerHTML = `Preço total <span>R$ ${totalPrice.toFixed(2)}</span>`;
    document.getElementById("price_parcel").innerHTML = `${installments}x sem juros de R$ <span>R$ ${installmentPrice.toFixed(2)}</span>`;
}