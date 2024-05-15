import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

//childern are all the nested component that ur having in this particular application
function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipesDetail, setRecipesDetail] = useState(null);
  const [favouriteList, setfavouriteList] = useState([]);

  const navigate = useNavigate();


  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const result = await response.json();

      if (result && result.data && result.data.recipes) {
        setRecipes(result.data.recipes);
        setLoading(false);
        setSearch("");
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearch("");
      navigate('/')
    }
  }

  function handleAddToFavouriteItem(getCurrentItem) {
    const cpyfavouriteList = [...favouriteList];
    const index = cpyfavouriteList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyfavouriteList.push(getCurrentItem)
    } else {
      cpyfavouriteList.splice(index)
    }

   
    setfavouriteList(cpyfavouriteList);
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        loading,
        recipes,
        recipesDetail,
        setRecipesDetail,
        handleAddToFavouriteItem,
        favouriteList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
