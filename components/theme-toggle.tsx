"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@teispace/next-themes";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  const { resolvedTheme, setTheme } = useTheme();

  const dark = resolvedTheme === "dark";

  const toggle = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      disabled={!mounted}
      aria-label={
        mounted ? `Switch to ${dark ? "light" : "dark"} mode` : "Toggle theme"
      }
      className="rounded-full p-2 text-zinc-500 transition-colors duration-200 ease-out hover:cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
    >
      {mounted ? (
        dark ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )
      ) : (
        <span className="block size-[18px]" />
      )}
    </button>
  );
}
