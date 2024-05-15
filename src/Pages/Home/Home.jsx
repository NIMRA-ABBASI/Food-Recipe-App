import React, { useContext } from "react";
import { GlobalContext } from "../../Context/Index";
import RecipeItem from "../../Components/Recipe_Item/RecipeItem";

function Home() {
  const { loading, recipes } = useContext(GlobalContext);
  if (loading) <div><p>Loading...Please wait</p></div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes && recipes.length > 0 ? (
        recipes.map((item) => <RecipeItem data={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show.Please search something
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
