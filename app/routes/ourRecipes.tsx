import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import Recipe from "components/recipe";

const prisma = new PrismaClient();

export async function loader() {
  const recipes = await prisma.receta.findMany();
  return { recipes };
}

export default function OurRecipes() {
  const { recipes } = useLoaderData<typeof loader>();

  return (
    <>
      <header>
        <h1>Our Recipes</h1>
      </header>
      <div className="flex flex-row flex-wrap">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            name={recipe.name}
            description={recipe.description}
            ingredients={recipe.ingedients}
            date={new Date(recipe.registerDate).toLocaleDateString()}
          />
        ))}
      </div>
    </>
  );
}
