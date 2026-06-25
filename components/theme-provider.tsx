import { ThemeProvider as TeispaceThemeProvider } from "@teispace/next-themes";
import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <TeispaceThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      storage="hybrid"
    >
      {children}
    </TeispaceThemeProvider>
  );
}
