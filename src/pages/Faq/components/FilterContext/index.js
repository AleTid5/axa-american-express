import React, { createContext, useState } from "react";

export const FilterContext = createContext({
  titleFilter: null,
  setTitleFilter: () => {},
});

const { Provider } = FilterContext;

export const FilterProvider = ({ children }) => {
  const [titleFilter, setTitleFilter] = useState("");

  return (
    <Provider value={{ titleFilter, setTitleFilter }}>{children}</Provider>
  );
};
