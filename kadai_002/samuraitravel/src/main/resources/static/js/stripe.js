const stripe = Stripe('pk_test_51RrwyX4k5EmDk7U8O1kf7mSGUmbLloH0Cb4v4wXl2PxAav3bcmkO1VZNaDS1UvsT148Qaqp8rSaKnu5SBvEp427q001frTxrbt');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});