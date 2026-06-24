"use client";

import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";

function getDark() {
  return document.documentElement.classList.contains("dark");
}

function subscribe(callback: () => void) {
  window.addEventListener("theme-toggle", callback);
  return () => window.removeEventListener("theme-toggle", callback);
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getDark, () => false);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("theme-toggle"));
  };

  return (
    <button
      onClick={toggle}
      className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-full p-2 transition-colors hover:cursor-pointer"
      suppressHydrationWarning
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
