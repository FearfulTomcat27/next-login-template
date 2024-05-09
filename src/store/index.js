import useUserStore from "./modules/user";
import { mountStoreDevtool } from "simple-zustand-devtools";
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("user", useUserStore);
}

export { default as useUserStore } from "./modules/user";
