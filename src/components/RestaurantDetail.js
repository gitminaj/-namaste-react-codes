import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import RestaurantCategory from "./RestaurantCategory";
import React from "react";

import { useState } from "react";

const RestaurantDetail = () => {
  const [showIndex, setShowIndex] = useState(null);
  

  const { resId } = useParams();

  const resInfo = useRestaurantDetail(resId);

  if (resInfo?.length === 0) return <Shimmer />;
  const { name, cuisines, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const Menu =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (data) => {
        return (
          data?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div>
      <div className="flex flex-col  items-center m-8">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p>
          {cuisines?.join(", ")}
          <br />
          {avgRating} - {totalRatingsString}
        </p>
      </div>
      <div className="w-6/12 m-auto">
        {Menu?.map((menu, index) => {
          return (
            <RestaurantCategory
              key={menu?.card?.card?.title}
              Menu={menu?.card?.card}
              clickStatus={ index === showIndex ? true : false}
              setShowIndex={ () => setShowIndex(index)}

            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetail;
