import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
  persist(
    (set) => ({
      isCollapsed: false,
      setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
    }),
    {
      name: "global",
    }
  )
);

export default useGlobalStore;
