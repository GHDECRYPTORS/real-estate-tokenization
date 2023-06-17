// replay.d.ts

interface Window {
  replay: (eventType: string) => void;
  setTheme: (eventType: "auto" | "dark" | "light") => void;
  getTheme: () => string;
}
