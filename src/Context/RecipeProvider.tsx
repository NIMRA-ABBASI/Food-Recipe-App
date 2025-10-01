import { createContext, useState, type FormEvent } from "react";
import { type Children, type Recipe , type RecipeContextType,type RecipeItemType} from "../models/recipe.model";
 
const initContextState: RecipeContextType = {
  search: "",
  setSearch: () => { throw new Error("setSearch function must be overridden by Provider"); },
  filteredSearchData: null,
  handleSubmit: async () => { throw new Error("handleSubmit must be overridden by Provider"); },
  loading: false,
  handleAddToFavouriteItem:()=> { throw new Error("handleAddToFavouriteItem must be overridden by Provider"); },
  favouriteList: []
};

export const RecipeContext = createContext<RecipeContextType>(initContextState);

const ContextProvider = ({ children }: Children) => {
  const [search, setSearch] = useState<string>("");
  const [filteredSearchData, setFilteredSearchData] = useState<Recipe[]>([]);
  const [favouriteList, setfavouriteList] = useState<RecipeItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
      }
      const result = await response.json();
      setFilteredSearchData(result?.data?.recipes);
      setLoading(false);
      setSearch("");
    } catch (err) {
      err instanceof Error
        ? console.log("Fetching Error", err)
        : console.log("Unknown Error", err);
      setLoading(false);
      setSearch("");
    }
  };

  const handleAddToFavouriteItem = (getCurrentItem: RecipeItemType) => {
      const exist = favouriteList.findIndex(
        (favItem) => favItem.id === getCurrentItem.id
      );
      if (exist === -1) {
        setfavouriteList((prev) => [...prev, getCurrentItem]);
      }
    };
  return (
    <RecipeContext.Provider
      value={{ search, setSearch, filteredSearchData, handleSubmit, loading ,handleAddToFavouriteItem ,favouriteList}}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default ContextProvider;
