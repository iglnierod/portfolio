"use client";

import { useLayoutEffect } from "react";

function applyThemePreference() {
  const theme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = theme === "dark" || (!theme && prefersDark);

  document.documentElement.classList.toggle("dark", shouldUseDark);
  window.dispatchEvent(new Event("theme-toggle"));
}

export function ThemeInit() {
  useLayoutEffect(() => {
    applyThemePreference();
  }, []);

  return (
    <template
      id="theme-init"
      data-purpose="Stores inert theme initialization marker for client hydration"
    />
  );
}
