import { useEffect, useReducer } from "react";

const initialState = () => ({
  width: undefined,
  height: undefined,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "changeScreenSize": {
      return {
        ...state,
        width: action.value.width,
        height: action.value.height,
      };
    }
    default:
      return state;
  }
};

export default function useScreenResizer() {
  const [state, dispatch] = useReducer(reducer, {}, initialState);

  useEffect(() => {
    const handleResize = () =>
      dispatch({
        type: "changeScreenSize",
        value: { width: window.innerWidth, height: window.innerHeight },
      });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [state];
}