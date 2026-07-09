import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

  return (
    <div className="w-6/12 mx-auto my-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

    <button className="p-2 m-2 bg-gray-400 rounded-sm cursor-pointer" onClick={handleClearCart}>
        Clear Cart
        </button>


      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-4"
          >
            <div className="w-9/12">
              <h2 className="font-semibold">{item.name}</h2>

              <p>₹{(item.price || item.defaultPrice) / 100}</p>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>

            <div className="w-3/12">
              {item.imageId && (
                <img
                  className="rounded-lg"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt={item.name}
                />
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;