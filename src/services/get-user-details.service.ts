import { reqInstance } from "@/lib/api";

export const GetUserDetailsService = {
  async get() {
    const { data } = await reqInstance.get("/users/me");
    return data;
  },
};
