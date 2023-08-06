import "./style.css";
import { loadStripe } from "@stripe/stripe-js";
import shirt from "./shirts.jpg";
import { useState } from "react";

function PreOrder() {
  console.log(import.meta.env.VITE_TEST);
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];

  let stripePromise: any;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API);
    }

    return stripePromise;
  };

  const items = {
    price: import.meta.env.VITE_4XL_ID,
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [items],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  // const handleMessage = () => {
  //   if (`${window.location.origin}/success`) {
  //     return (
  //       <div>
  //         <h3>Success</h3>
  //         <h4>Thank you for your purchase!</h4>
  //       </div>
  //     );
  //   } else if (`${window.location.origin}/cancel`) {
  //     return (
  //       <div>
  //         <h3>Cancel</h3>
  //         <h4>Your payment was canceled.</h4>
  //       </div>
  //     );
  //   } else {
  //     return <div>test</div>;
  //   }
  // };
  return (
    <section className="preOrder">
      <h1>Pre-Order</h1>
      <div className="flex">
        <div className="shirtPreorder">
          <img src={shirt} />
        </div>
        <div className="info">
          <h4>Deano's Run T-Shirt</h4>
          <b>
            <h5>$25.00</h5>
          </b>
          {sizes.map((size) => {
            return (
              <button
                className="checkout-button"
                onClick={redirectToCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : size}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PreOrder;
