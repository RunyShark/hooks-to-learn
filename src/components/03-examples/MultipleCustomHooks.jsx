import { useFech } from "../hooks";

export const MultipleCustomHooks = () => {
  const url = "https://www.breakingbadapi.com/api/quotes/1";
  const { data, hasError, isLoading } = useFech(url);

  return (
    <>
      <h1>BreakingBad Qoutes</h1>
      <hr />
      {isLoading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {hasError && (
        <>
          <h1>{hasError.name}</h1>
          <p>{hasError.code}</p>
          <p className="mt-4" style={{ color: "red", fontSize: "20px" }}>
            Status 400, la id no puede ser letras o caracteres especiales y debe
            de ser un numero valido
          </p>
        </>
      )}
      {data?.map(({ quote, author, series }) => (
        <>
          <blockquote className="blockquote text-center">
            <p className="mb-1 ">{quote}</p>
            <footer className="blockquote-footer " style={{ marginTop: "5px" }}>
              {author}{" "}
              <span
                style={{
                  color: "black",
                  fontFamily: "-moz-initial",
                  fontSize: "20px",
                }}
              >
                {series}
              </span>
            </footer>
          </blockquote>
        </>
      ))}
    </>
  );
};
