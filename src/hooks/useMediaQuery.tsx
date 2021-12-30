import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const mediaQuery = window.matchMedia(query);
  useEffect(() => {
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }
    const listener = () => {
      console.log(mediaQuery.matches);
      setMatches(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [mediaQuery, matches]);

  return matches;
};

export default useMediaQuery;
