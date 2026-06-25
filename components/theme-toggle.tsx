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
      className="rounded-full p-2 text-zinc-500 transition-colors duration-200 ease-out hover:cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
      suppressHydrationWarning
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
