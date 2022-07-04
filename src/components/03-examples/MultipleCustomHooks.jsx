import { useFech } from "../hooks";

export const MultipleCustomHooks = () => {
  const url = "https://www.breakingbadapi.com/api/quotes/1";
  const { data, hasError, isLoading } = useFech(url);

  return (
    <>
      <h1>BreakingBad Qoutes</h1>
      <hr />
      {isLoading && <h1>Cargando....</h1>}
      {hasError && (
        <>
          <h1>{hasError.name}</h1>
          <p>{hasError.code}</p>
          <p>
            Status 400, la id no puede ser letras o caracteres especiales y debe
            de ser un numero valido
          </p>
        </>
      )}
      {data?.map(({ quote, author, series }) => (
        <>
          <h3>{quote}</h3>
          <p>{author}</p>
          <span style={{ color: "Red" }}>{series}</span>
        </>
      ))}
    </>
  );
};
