import { useState } from "react";
import RestaurantMenucard from "./RestaurantMenucard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const RestaurantCategory = (props) => {
    const {data, showItem, setShowIndex} =props;

//     const [showItem,setShowitem] = useState(false);

//   const handleClick=() =>{
//     showItem ? setShowitem(false) : setShowitem(true)
//   }      //so if u have state here only then its uncontrolled component


    const handleClick=() =>{
     setShowIndex();
    }  
    return(
        <div className="w-6/12">
            <div onClick={handleClick} className="flex justify-between items-center cursor-pointer">
                <h1 className="font-bold text-lg pb-4 pt-10 ">{data?.card?.card?.title} ({data.card.card.itemCards.length})</h1>
           {showItem ?  <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon className="pb-4 pt-10" icon={faChevronDown} />}    
            </div>

           {showItem && <div className="items">
                {
                    data?.card?.card?.itemCards?.map((i)=> <RestaurantMenucard  menu={i} key={i.card.info.id} />)
                }
            </div>} 
        </div>
    )
}

export default RestaurantCategory;

