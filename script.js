// الساعة الرقمية
function updateClock() {
    const clockElement = document.getElementById("digitalClock");
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const date = now.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    clockElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm} - ${date}`;
}

setInterval(updateClock, 1000);

// إدارة الفاتورة
const tableBody = document.querySelector("#invoiceTable tbody");

document.getElementById("addItem").addEventListener("click", () => {
    const itemName = document.getElementById("itemName").value;
    const itemType = document.getElementById("itemType").value;
    const itemCode = document.getElementById("itemCode").value;
    const itemQuantity = document.getElementById("itemQuantity").value;
    const unitType = document.getElementById("unitType").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const total = (itemQuantity * unitPrice).toFixed(2);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${itemName}</td>
        <td>${itemType}</td>
        <td>${itemCode}</td>
        <td>${itemQuantity}</td>
        <td>${unitType}</td>
        <td>${unitPrice}</td>
        <td>${total}</td>
        <td><button class="delete">حذف</button></td>
    `;
    tableBody.appendChild(row);

    row.querySelector(".delete").addEventListener("click", () => row.remove());
});

// طباعة الفاتورة
document.getElementById("printInvoice").addEventListener("click", () => {
    window.print();
});
