import React from 'react';

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    function handleChange(e: MediaQueryListEvent): void {
      setMatches(e.matches);
    }

    mql.onchange = handleChange;
    return () => {
      mql.onchange = null;
    };
  }, [query]);

  return matches;
}

export function useMobileViewport(): boolean {
  return useMediaQuery('(max-width: 767px)');
}
