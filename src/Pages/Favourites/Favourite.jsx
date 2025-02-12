import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Index";
import RecipeItem from '../../Components/Recipe_Item/RecipeItem'


function Favourite() {
  const {favouriteList} = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
    {favouriteList && favouriteList.length > 0 ? (
      favouriteList.map((item) => <RecipeItem data={item} />)
    ) : (
      <div>
        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing is added in favorites.
        </p>
      </div>
    )}
  </div>
  );
}

export default Favourite;
