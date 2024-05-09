import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginApi } from "@/api/user";
import { setToken } from "@/lib/session";
import { toast } from "sonner";

const useUserStore = create(
  persist(
    (set) => ({
      username: "",
      password: "",
      token: "",
      avatar: "",
      role: "",

      login: async (data) => {
        try {
          return await new Promise((resolve, reject) => {
            loginApi(data).then((res) => {
              setToken(res.data);
              set({ ...res });
              resolve(res);
            });
          });
        } catch (error) {
          toast.error(error.message);
        }
      },
    }),
    {
      name: "user",
    }
  )
);

export default useUserStore;
