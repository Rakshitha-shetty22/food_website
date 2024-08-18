import React from "react";
import { CDNURL } from "../../constants/const";
import { useDispatch } from "react-redux";
import { addItems } from "../../common/redux/cartSlice";

const RestaurantMenucard = (props) => {
  const { menu } = props;
  const { name, price, description, imageId} = menu?.card?.info || 0;
  const { rating, ratingCountV2 } =
    menu?.card?.info?.ratings?.aggregatedRating || 0;
  
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addItems(menu))
  }

    return (
    <div className="flex border border-solid mb-[14px] p-[15px] rounded-md shadow-md w-full justify-between hover:shadow-xl">
      <div className="flex flex-col w-9/12">
        
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="pb-3">₹{price / 100}</h4>
        {rating !== undefined && ratingCountV2 !== undefined && (
          <h4 className="text-yellow-500 pb-3 text-sm">
            ⭐️ {rating} ({ratingCountV2})
          </h4>
        )}
        {/* if rating is not undefined then it checks another cndtn if that also true then it goes last condition */}
        <p className="aboutText">{description}</p>
      </div>
      {imageId !== undefined && (

      <div className="relative w-3/12">
        <div className="absolute top-[120px] left-20 z-10">
          <button onClick={handleClick} className=" p-[10px] rounded-lg bg-black/55 text-white shadow-lg ">
            Add +
          </button>
        </div>
        <img src={CDNURL.RESMENUIMG + imageId} alt="food" />
      </div>
      )}
    </div>
  );
};

export default RestaurantMenucard;
