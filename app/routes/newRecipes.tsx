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
      <div className="bg-slate-300 w-fit">
        <h1 className="text-center">New Recipe!</h1>
        <Form method="POST">
          <label>
            Receip Name:
            <input type="text" name="receipName" required/>
          </label>
          <br/>
          <label>
            Ingredients and quantitys:
            <input type="text" name="ingredients" placeholder="Harina 50g, Huevos 3ud, Mantequilla 10g..." required/>
          </label>
          <br/>
          <label>
            Preparation:
            <input type="text" name="prep" required />
          </label>
          <br/>
          <button type="submit">Add recipe</button>
        </Form>
      </div>
    );
  }