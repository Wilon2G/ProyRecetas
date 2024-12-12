import {  PrismaClient } from "@prisma/client";
import { Form } from "@remix-run/react";


export const action = async ({request}) =>{
const formData= await request.formData();
const recipeName=formData.get("receipName");
const ingredients=formData.get("ingredients");
const prep= formData.get("prep");

const prisma = new PrismaClient();


if (typeof recipeName!="string" || typeof ingredients !=="string" || typeof prep !== "string" ) {
  return Response.json({error:"Error, you must fill all the form"},{status:400})
}

try {
  await prisma.receta.create({
    data:{
      name:recipeName,
      description:prep,
      ingedients:ingredients
    }
  })
  
} catch (error) {
  return Response.json({error:"Error al guardar la receta, contacta con guille :)"},{status:500})
}

return {success:true};

};

export default function NewRecipes() {
    return (
      <div className="text-white">
        <h1>New Recipes</h1>
        <Form method="POST">
          <label>
            Receip Name:
            <input type="text" name="receipName" required/>
          </label>
          <label>
            Ingredients and quantitys:
            <input type="text" name="ingredients" required/>
          </label>
          <label>
            Preparation:
            <input type="text" name="prep" required />
          </label>
          <button type="submit">Add recipe</button>
        </Form>
      </div>
    );
  }