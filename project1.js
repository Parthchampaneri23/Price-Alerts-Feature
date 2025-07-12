let currentPrice = 0;
let alertPrice = null;
const priceEl = document.getElementById("price");
const alertMsg = document.getElementById("alertMessage");

function generateRandomPrice() {
  currentPrice = (Math.random() * 200).toFixed(2);
  priceEl.textContent = `$${currentPrice}`;

  if (alertPrice !== null && parseFloat(currentPrice) >= alertPrice) {
    alertMsg.textContent = `🔔 Price reached $${currentPrice}!`;
    alertMsg.style.display = 'block';
    alertMsg.style.background = '#ff4d4d';
    alertPrice = null;
  }
}

function setAlert() {
  const inputValue = document.getElementById("alertPrice").value;
  if (!inputValue || parseFloat(inputValue) < 0) {
    alertMsg.textContent = "⚠️ Please enter a valid price.";
    alertMsg.style.display = 'block';
    alertMsg.style.background = '#e74c3c';
    return;
  }

  alertPrice = parseFloat(inputValue);
  alertMsg.textContent = `✅ Alert set for $${alertPrice.toFixed(2)}`;
  alertMsg.style.background = '#00b894';
  alertMsg.style.display = 'block';
}

setInterval(generateRandomPrice, 1000);
