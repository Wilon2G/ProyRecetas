import {
  Link,
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import "./tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Recetas" },
    { name: "description", content: "Nuestras recetas" },
  ];
};

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-emerald-800 text-neutral-100">
        <App />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Barra de navegación lateral */}
      <nav className="w-1/6 bg-emerald-900 text-white ">
        <ul className="space-y-4 w-full mt-4">
        <Link to="/ourRecipes" className=" text-2xl">
          <li className="hover:text-emerald-300 hover:bg-emerald-950 p-4 text-center">
              Our Recipes
          </li>
          </Link>
          <Link to="/newRecipes" className=" text-2xl">
          <li className="hover:text-emerald-300 hover:bg-emerald-950 p-4 text-center">
              New Recipe
          </li>
          </Link>
        </ul>
      </nav>
      
      <main className="flex-1 p-6 bg-neutral-100 text-black">
        <Outlet />
      </main>
    </div>
  );
}


// import { PrismaClient } from "@prisma/client";
// import Recipe from "components/recipe";


// const prisma = new PrismaClient();

// export async function loader() {
//   const recipes = await prisma.receta.findMany();
//   return { recipes };
// }

// const { recipes } = useLoaderData<typeof loader>();


{/* <header className="p-6 text-center">
<h1 className="text-5xl">Nuestras recetas</h1>
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
 
</div> */}