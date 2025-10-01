import { useContext } from "react";
import RecipeItem from "../../Components/Recipe_Item/RecipeItem";
import { RecipeContext } from "../../Context/RecipeProvider";

function Home() {
  const { loading, filteredSearchData } = useContext(RecipeContext);

  return loading ? (
    <div>
      <p>Loading...Please wait</p>
    </div>
  ) : (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {filteredSearchData && filteredSearchData.length > 0 ? (
        filteredSearchData.map((item) => <RecipeItem key={item.id} data={item} />)
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
