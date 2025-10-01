
import {
  type ReactElement,
  type FormEvent,
} from "react";


export type Children = {
  children: ReactElement;
};


export type Recipe = {
  publisher: string;
  image_url: string;
  title: string;
  id: string,
};
type ingredientsType =
  {
    description: string
    quantity: number
    unit: string
  }

export type RecipeItemType = {
  cooking_time: number
  id: string
  image_url: string
  ingredients: ingredientsType[]
  publisher: string
  servings: number
  source_url: string
  title: string
};

export type RecipeContextType = {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  filteredSearchData: Recipe[] | null,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>,
  loading: boolean,
  handleAddToFavouriteItem:(getCurrentItem: RecipeItemType) => void,
  favouriteList: RecipeItemType[]
}

