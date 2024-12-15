import { PrismaClient } from "@prisma/client";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import Recipe from "~/components/recipe";
import { SearchIcon } from "~/components/svgCom";

const prisma = new PrismaClient();




export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchedRecipe = url.searchParams.get("searchedRecipe");
  const recipes = await prisma.receta.findMany({
    where:{
      name:{
        contains: searchedRecipe ?? "",
      },
    }
  });
   return { recipes };
};



export default function OurRecipes() {
  const { recipes } = useLoaderData<typeof loader>();
  const navigation = useNavigation()
  return (
    <>
      <header>
        <h1>Our Recipes</h1>
      </header>
      <div>
        <Form>
          <input
            type="text"
            name="searchedRecipe"
            placeholder="Search Recipes..."
            autoComplete="off"
          />
          <button>
            <SearchIcon />
          </button>
        </Form>
      </div>
      <div className="flex flex-row flex-wrap">
        {navigation.state === "loading" ? 
        <h1>Searching...</h1>:
        recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingedients}
            date={new Date(recipe.registerDate).toLocaleDateString()}
          />
        ))
        }
        
      </div>
    </>
  );
}
