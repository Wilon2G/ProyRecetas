
type recipeProps={
name: string,
description:string,
ingredients:string,
date:string
}

export default function recipe({name,description,ingredients,date}:recipeProps){
    const ingredientList=ingredients.split(",").map((ing)=>ing.trim());
    return(
        <div  style={{margin:"10px 60px", backgroundColor:"#1f2937", border:"1px solid #374151", padding:"2rem", borderRadius:"10px"}}>
            <h1 className="text-5xl">{name}</h1>
            <p style={{color:"gray"}}>{date}</p>
            <h2 style={{marginTop:"1rem", fontSize:"1.25rem"}}>Ingredientes:</h2>
            <ul>
                {ingredientList.map((ing,k)=><li key={k}>{ing}</li>)}
            </ul>
            <h2 style={{marginTop:"1rem", fontSize:"1.25rem"}}>Preparación:</h2>
            <p>{description}</p>
        </div>
    );
}