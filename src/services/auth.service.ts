import instance from "@/lib/api";

export const AuthService = {
  async signIn({ email, password }: { email: string; password: string }) {
    const res = await instance.post("/auth/local", {
      identifier: email,
      password,
    });
    return res.data;
  },
};
