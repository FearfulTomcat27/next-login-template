import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
  persist(
    (set) => ({
      theme: "light",
      isCollapsed: false,
      setTheme: (theme) => set({ theme }),
      setIsCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
    }),
    {
      name: "global",
    }
  )
);

export default useGlobalStore;
