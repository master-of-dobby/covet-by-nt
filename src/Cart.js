const Cart = () => {
  return (
    <>
      <h1>Shopping cart</h1>
      {/* Display the shopping cart */}
      {/* <CartList /> */}
      {/* Checkout button and total cost of items in the cart */}

      <div className="flex justify-between">
        <button
          className="cart-btn"
          text="Check out"
          onClick={() => {
            alert("This functionality is not yet implemented.");
          }}
        >
          {" "}
          Shop
        </button>
        <p>Total: $999</p>
      </div>
    </>
  );
};

export default Cart;
