import { create } from "zustand";

interface StoreState {
  headerText: string;
  footerText: string;
  setText: (text: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  headerText: "Default",
  footerText: "Default",
  setText: (text: string) =>
    set(() => ({
      headerText: text || "Default",
      footerText: text || "Default",
    })),
}));
