import React from 'react';

export function useFirstRenderEffect(
  func: React.EffectCallback,
  deps: React.DependencyList,
): void {
  const isRender = React.useRef(false);

  React.useEffect(() => {
    if (isRender.current) {
      func();
    } else {
      isRender.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
