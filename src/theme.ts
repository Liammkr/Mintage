import { useSyncExternalStore } from "react";

export type ThemeChoice = "light" | "dark" | "system";

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const listeners = new Set<() => void>();

function getThemeChoice(): ThemeChoice {
  const saved = localStorage.getItem("theme");
  return saved === "dark" || saved === "system" ? saved : "light";
}

function getResolvedTheme(): "light" | "dark" {
  const choice = getThemeChoice();
  if (choice !== "system") return choice;
  return darkQuery.matches ? "dark" : "light";
}

function applyTheme() {
  const theme = getResolvedTheme();
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#111116" : "#ffffff");
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setThemeChoice(choice: ThemeChoice) {
  localStorage.setItem("theme", choice);
  applyTheme();
}

export function useThemeChoice() {
  return useSyncExternalStore(subscribe, getThemeChoice);
}

export function useResolvedTheme() {
  return useSyncExternalStore(subscribe, getResolvedTheme);
}

darkQuery.addEventListener("change", applyTheme);
applyTheme();
