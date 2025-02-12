import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Index";

function Detail() {
  const { id } = useParams();
  const {
    recipesDetail,
    setRecipesDetail,
    handleAddToFavouriteItem,
    favouriteList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchdetail() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const result = await response.json();
        if (result?.data) {
          setRecipesDetail(result?.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchdetail();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipesDetail?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipesDetail?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipesDetail?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavouriteItem(recipesDetail?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favouriteList && favouriteList.length > 0 && favouriteList.findIndex((item) => item.id === recipesDetail?.recipe?.id) !== -1
              ? "Remove from favorites"
              : "Add to favorites"
              }

          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipesDetail?.recipe?.ingredients.map((item) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {item.quantity} {item.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;
