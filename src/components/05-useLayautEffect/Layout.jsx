import { useFech, useCounter } from "../hooks";
import { HasErrorCard, DataCard, LoadingQuote } from "../03-examples";

export const Layout = () => {
  const { incremet, decremente, counter } = useCounter();
  const url = `https://www.breakingbadapi.com/api/quotes/${
    counter === 0 ? 1 : counter
  }`;
  const { data, hasError, isLoading } = useFech(url);

  return (
    <div>
      <h1>BreakingBad Qoutes</h1>
      <button className="btn" onClick={() => incremet(1)}>
        Otra
      </button>
      <button className="btn" onClick={() => decremente(1)}>
        Anterio
      </button>
      <hr />
      {hasError && <HasErrorCard hasError={hasError} />}
      {isLoading ? (
        <LoadingQuote />
      ) : (
        data?.map((data) => <DataCard key={data.name} {...data} />)
      )}
    </div>
  );
};
