import instance from "@/lib/api";

export const GetUserDetailsService = {
  async get() {
    const { data } = await instance.get("/users/me");
    return data;
  },
};
