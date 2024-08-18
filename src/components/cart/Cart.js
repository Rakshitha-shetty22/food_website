import { useDispatch, useSelector } from "react-redux";
import RestaurantMenucard from "../restaurantMenu/RestaurantMenucard";
import { clearItems, removeItems } from "../../common/redux/cartSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems",cartItems);
  
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItems()); //make sure that u rcalling function
  };

  const handleRemove = (menu) => {
    dispatch(removeItems(menu))
  }

  return (
    cartItems.length === 0 ?
      <h1 className="font-bold text-center text-2xl mt-16">Your cart is Empty... Please add the Item to cart  🛒</h1>
      : <div className="">
        <h1 className="font-bold text-center text-2xl mt-10 mb-6">Your Cart</h1>
        <div className="flex justify-end w-11/12">
          {cartItems.length > 0 && <button
            onClick={handleClear}
            className="px-8 py-2 rounded-md bg-black text-white font-bold border border-solid hover:shadow-xl"
          >
            Clear Cart
          </button>}
        </div>

        <div className="w-6/12 m-auto">
          {cartItems.map((i) => (
            <div className="flex flex-row items-center" key={i.card.info.id}>
              <RestaurantMenucard key={i.card.info.id} menu={i} />
              <FontAwesomeIcon onClick={() => handleRemove(i)} className="ml-10 text-2xl text-center cursor-pointer" icon={faTrash} />
              {/* note the syntax of function handleRemove.... if write handleRemove(i) like this then it will executed immediatly so it should execute only after the click */}
            </div>
          ))}
        </div>
      </div>
  );
};

export default Cart;
