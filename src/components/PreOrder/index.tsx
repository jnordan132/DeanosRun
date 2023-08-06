import "./style.css";
import { loadStripe } from "@stripe/stripe-js";
import shirt from "./shirts.jpg";
import { useState } from "react";

interface CartItem {
  price: string;
  quantity: number;
}

const itemNames: { [key: string]: string } = {
  [import.meta.env.VITE_4XL_ID]: "4XL",
  [import.meta.env.VITE_3XL_ID]: "3XL",
  [import.meta.env.VITE_2XL_ID]: "2XL",
  [import.meta.env.VITE_XL_ID]: "XL",
  [import.meta.env.VITE_L_ID]: "L",
  [import.meta.env.VITE_M_ID]: "M",
  [import.meta.env.VITE_S_ID]: "S",
};

function PreOrder() {
  const [stripeError, setStripeError] = useState<null | string>(null);
  const [isLoading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];

  let stripePromise: any;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API);
    }

    return stripePromise;
  };

  const addToCart = (price: string) => {
    const totalQuantity = cartItems.reduce((total, item) => {
      return item.price === price ? total + item.quantity : total;
    }, 0);

    if (totalQuantity === 0) {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { price, quantity: 1 },
      ]);
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.price === price ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const removeFromCart = (price: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.price === price ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: cartItems,
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
    console.log("Stripe checkout error", error);
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  return (
    <section className="preOrder">
      <h1>Pre-Order</h1>
      <div className="flex">
        <div className="shirtPreorder">
          <img src={shirt} alt="T-Shirt" />
        </div>
        <div className="info">
          <h4>Deano's Run T-Shirt</h4>
          <b>
            <h5>$27.00</h5>
          </b>
          {sizes.map((size) => (
            <button
              key={size}
              className="itemButton"
              onClick={() => addToCart(import.meta.env[`VITE_${size}_ID`])}
            >
              {size}
            </button>
          ))}
          <div className="cart">
            <ul>
              {cartItems.map((item) => (
                <li key={item.price} className="cartItem">
                  {itemNames[item.price]} - {item.quantity}x
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(item.price)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="checkout">
            {cartItems.length > 0 ? (
              <button
                className="checkoutBtn"
                onClick={redirectToCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Checkout"}
              </button>
            ) : (
              <></>
            )}
          </div>
          {/* {`${window.location.pathname}` === "/success" ? (
          <div>
            <h4>Thank you for your purchase!</h4>
          </div>
        ) : `${window.location.pathname}` === "/cancel" ? (
          <div>
            <h4>Your payment was canceled.</h4>
          </div>
        ) : (
          <div>test</div>
        )} */}
        </div>
      </div>
      {stripeError && <div>{stripeError}</div>}
    </section>
  );
}

export default PreOrder;
