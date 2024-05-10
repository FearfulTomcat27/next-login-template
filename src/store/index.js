import useUserStore from "./modules/user";
import useGlobalStore from "./modules/global";
import { mountStoreDevtool } from "simple-zustand-devtools";
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("user", useUserStore);
  mountStoreDevtool("global", useGlobalStore);
}

export { default as useUserStore } from "./modules/user";
export { default as useGlobalStore } from "./modules/global";
