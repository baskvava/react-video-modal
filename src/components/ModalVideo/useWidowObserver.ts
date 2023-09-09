import { useLayoutEffect, useState } from "react";

export function useWindowObserver() {
  const [widowWidth, setWindowDim] = useState<number>(0);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWindowDim(event[0].contentRect.width ?? 0);
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { observerWidth: widowWidth };
}
