import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
  }
}

export function useGTM() {
  const location = useLocation();

  useEffect(() => {
    // Rastreia pageview quando a rota muda
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: location.pathname,
        pageTitle: document.title,
      });
    }
  }, [location.pathname]);
}
