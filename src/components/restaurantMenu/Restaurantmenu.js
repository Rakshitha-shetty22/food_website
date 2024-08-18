import Shimmer from "../../components/home/Shimmer";
import RestaurantMenucard from "./RestaurantMenucard";
import { useParams } from "react-router-dom";
import useFetchinfo from "../../hook/useFetchinfo";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {
  const { resId } = useParams();

  const resinfo = useFetchinfo(resId); //fetch

  //const [openAccordion, setOpenAccordion] = useState(null);

  const [showIndex, setShowIndex] = useState(null);
  if (!resinfo) {
    return <Shimmer />;
  }
  //everytime our ternary is not working becz here when this code run line by line from the line below of this text
  //in intial rendering it is not defined because data is not fetched yet so it will give the error
  //so we should catch that error using shimmer UI before the line below of this text

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = resinfo?.data?.cards[2]?.card?.card?.info || 0;
  //||0 is optional

  console.log("res", resinfo);

  const { minDeliveryTime, maxDeliveryTime } =
    resinfo?.data?.cards[2]?.card?.card?.info.sla || {};

  const category =
    resinfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (i) => i.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("cat", category);

  // const handleToggle = (id) => {
  //   setOpenAccordion(openAccordion === id ? null : id);
  // };

  return (
    <div className="">
      <div className="flex items-center flex-col">
        <h1 className="flex w-full justify-center font-bold text-4xl mb-4">
          {name}
        </h1>
        <div className="border-2 p-[20px] w-6/12 shadow-md rounded-md leading-6 mb-[25px]">
          <div className="flex justify-between w-1/2">
            <h3>
              ⭐️ {avgRatingString}({totalRatingsString})
            </h3>
            <h3>{costForTwoMessage}</h3>
          </div>
          <h3>{cuisines}</h3>
          <h3>
            {minDeliveryTime} - {maxDeliveryTime} mins
          </h3>
        </div>
        {/* <div className="flex flex-col items-center mx-10">
          {category.map((i) => (
            <div key={i.card.card.id}>
              <h1
                className="cursor-pointer"
                onClick={() => handleToggle(i.card.card.id)}
              >
                {i.card.card.title}({i.card.card.itemCards.length})
              </h1>
              {openAccordion === i.card.card.id && (
                <div>
                  {i.card.card.itemCards.map((itemCard) => (
                    <RestaurantMenucard
                      menu={itemCard}
                      key={itemCard.card.info.id}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
         </div> */}
        {/*one way is this to print the category in screen*/}
        <div className="flex flex-col w-full items-center mx-10">
          {category.map((i, index) => {
            return (
              <RestaurantCategory
                data={i}
                key={i?.card?.card?.title}
                showItem={index == showIndex ? true : false}
                setShowIndex={() =>
                  index == showIndex ? setShowIndex(null) : setShowIndex(index)
                }
              />
            );
            //so here we are passing showItem insided of RestaurantCategory because parent should handle the
            //child ... to achieve when we click on other acordian previous shd close.. so this is called controlled component
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;
