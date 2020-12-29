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
  const responsive = {
    isMiniMobile: state.width < 270,
    isMobile: state.width < 576,
    isTablet: state.width < 960,
    isBiggerThanTablet: state.width >= 960,
    isNotebook: state.width >= 960 && state.width < 1200,
    isScreen: state.width >= 1200 && state.width < 1680,
  };

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

  return [responsive];
}
