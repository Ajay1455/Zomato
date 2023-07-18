import "./CheckoutPage.css";

export default function CheckoutPage() {
  return (
    <div class="checkout-page">
      <header class="checkout-header">
        <h1 class="checkout-title">Checkout</h1>
      </header>

      <section class="checkout-section">
        <h2 class="checkout-section-title">Order Summary</h2>
        <div class="order-summary">
          <ul class="order-items">
            <li class="order-item">
              <div class="order-item-name">Pizza Margherita</div>
              <div class="order-item-price">$12.99</div>
            </li>
            <li class="order-item">
              <div class="order-item-name">Coke</div>
              <div class="order-item-price">$1.99</div>
            </li>
          </ul>
          <div class="order-total">
            <span class="order-total-label">Total:</span>
            <span class="order-total-price">$14.98</span>
          </div>
        </div>
      </section>

      <div class="checkout-section">
        <h2 class="checkout-section-title">Delivery Details</h2>

        <form class="delivery-form">
          <label for="delivery-name">Name:</label>
          <input type="text" id="delivery-name" name="delivery-name" required />

          <label for="delivery-address">Address:</label>
          <input
            type="text"
            id="delivery-address"
            name="delivery-address"
            required
          />

          <label for="delivery-phone">Phone:</label>
          <input
            type="tel"
            id="delivery-phone"
            name="delivery-phone"
            required
          />

          <label for="delivery-instructions">Delivery Instructions:</label>
          <textarea
            id="delivery-instructions"
            name="delivery-instructions"
          ></textarea>
        </form>
      </div>

      <section class="checkout-section">
        <h2 class="checkout-section-title">Payment Details</h2>

        <form class="payment-form">
          <label for="payment-card">Card Number:</label>
          <input type="text" id="payment-card" name="payment-card" required />

          <label for="payment-expiry">Expiry Date:</label>
          <input
            type="text"
            id="payment-expiry"
            name="payment-expiry"
            required
          />

          <label for="payment-cvc">CVC:</label>
          <input type="text" id="payment-cvc" name="payment-cvc" required />

          <label for="payment-name">Name on Card:</label>
          <input type="text" id="payment-name" name="payment-name" required />
        </form>
      </section>

      <button class="checkout-button">Place Order</button>
    </div>
  );
}
