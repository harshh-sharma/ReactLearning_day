import Card from "./Card";
import restaurantData from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [listOfRestaurants,setListOfRestaurants]  = useState(restaurantData);
    return (
        <div id='container'>
            <div className="filter-btn">
                <button onClick={() => {
                     listOfRestaurants = listOfRestaurants.filter((res) => res.data.avgRating > 4);
                     setListOfRestaurants(listOfRestaurants)
                }}>Top Rated Restaurants</button>
            </div>
            <div id='restaurant-container'>
                {
                  listOfRestaurants.map((restaurant) =>  <Card key = {restaurant.data.id} restaurantData = {restaurant} /> )
                }
            </div>
        </div>
    );
}

export default Body ;