type recipeProps = {
  name: string;
  description: string;
  ingredients: string;
  date: string;
};

export default function recipe({
  name,
  description,
  ingredients,
  date,
}: recipeProps) {
  const ingredientList = ingredients.split(",").map((ing) => ing.trim());
  return (
    <div
      style={{
        position: "relative",
        margin: "10px 60px",
        backgroundColor: "",
        border: "1px solid #374151",
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-5xl">{name}</h1>
      <p style={{ color: "gray" }}>{date}</p>
      <h2 style={{ marginTop: "1rem", fontSize: "1.25rem" }}>Ingredientes:</h2>
      <ul>
        {ingredientList.map((ing, k) => (
          <li key={k}>{ing}</li>
        ))}
      </ul>
      <h2 style={{ marginTop: "1rem", fontSize: "1.25rem" }}>Preparación:</h2>
      <p>{description}</p>

      <button style={{ position: "absolute", top: "5px", right: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={"1.5rem"}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>

      <button style={{ position: "absolute", top: "5px", left: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={"1.5rem"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </button>
      <button className="" style={{ position: "absolute", bottom: "5px", right: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={"2rem"}
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 hover:stroke-red-500 transition-all duration-75 hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
