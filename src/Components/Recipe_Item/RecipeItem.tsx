
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import {type Recipe} from '../../models/recipe.model'

type RecipeItemProps = {
  data: Recipe;
};

function RecipeItem({ data }:RecipeItemProps) : ReactElement {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={data?.image_url} />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {data?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {data?.title}
        </h3>
      </div>
      
      <Link
        to={`/recipe-item/${data?.id}`}
        className="text-sm p-3 px-8 rounded-lg uppercase font-medium inline-block tracking-wider shadow-md bg-black text-white"
      >
        Recipe Details
      </Link>
    </div>
  );
}

export default RecipeItem;
