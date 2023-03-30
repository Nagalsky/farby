import Meta from "@/components/seo/Meta";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";

type FormData = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const callbackUrl = (router.query?.callbackUrl as string) ?? "/";

  const schema: ZodType<FormData> = z.object({
    email: z.string().email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(5, {
        message: "String must contain at least 5 character(s)",
      })
      .max(20, { message: "String must contain at most 20 character(s)" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    if (session) {
      // @ts-ignore
      localStorage.setItem("jwt", session?.user?.jwt);

      router.push(callbackUrl);
    }
  }, [callbackUrl, router, session]);

  return (
    <>
      <Meta title="SignIn page" />

      <section className="py-8">
        <div className="container">
          <h1 className="mb-6">SignIn page</h1>

          <form onSubmit={handleSubmit(submitData)} className="mb-6 space-y-5">
            <div>
              <label className="label" htmlFor="field-email">
                <span className="label-text">Prihlasovací e-mail *</span>
              </label>

              <input
                className="input-bordered input w-full"
                placeholder="Email"
                id="field-email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="label" htmlFor="field-password">
                <span className="label-text">Heslo *</span>
              </label>

              <input
                className="input-bordered input w-full"
                placeholder="Password"
                id="field-password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-2 text-xs text-red-500">
                  {" "}
                  {errors.password.message}
                </p>
              )}
            </div>

            <button className="btn-primary btn" type="submit">
              Sign In
            </button>
          </form>

          <div className="mx-auto max-w-[400px] space-y-5">
            <button
              onClick={() =>
                signIn("google", {
                  redirect: false,
                  callbackUrl: callbackUrl,
                })
              }
              className="flex w-full items-center justify-center gap-4 rounded-lg bg-primary-500 px-5 py-3 text-sm font-bold text-white hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
