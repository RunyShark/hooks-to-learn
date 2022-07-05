import { useState, useEffect } from "react";

export const useFech = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getQuote = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      if (data.name === "error") {
        setState({
          data: null,
          isLoading: false,
          hasError: data,
        });
        return;
      }
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    getQuote();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
