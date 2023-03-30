import SignIn from "@/components/screens/signin/Signin";

const SignInPage = () => {
  // const router = useRouter();
  // const { data: session } = useSession();
  // const callbackUrl = (router.query?.callbackUrl as string) ?? "/";

  // useEffect(() => {
  //   if (session) {
  //     router.push(callbackUrl);
  //   }
  // }, [callbackUrl, router, session]);

  // console.log("session", session);

  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   signIn("credentials", {
  //     email: e.target?.email.value,
  //     password: e.target?.password.value,
  //     redirect: false,
  //   }).then(({ ok, error }) => {
  //     if (ok) {
  //       router.push(callbackUrl);
  //     } else {
  //       console.warn("error: ", error);
  //     }
  //   });
  // };

  // const [error, setError] = useState("");

  // const callbackUrl = (router.query?.callbackUrl as string) ?? "/";

  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<void> => {
  //   e.preventDefault();
  //   const _target = e.target as any;
  //   const email = _target.email.value;
  //   const password = _target.password.value;
  //   const result = await signIn("credentials", {
  //     email,
  //     password,
  //     redirect: false,
  //   });
  //   if (result?.error) {
  //     console.log("result", result);
  //     setError(result.error);
  //   } else {
  //     router.push(callbackUrl);
  //   }
  // };

  // return (
  //   <section className="py-8">
  //     <div className="container">
  //       <h1 className="mb-6">Login</h1>
  //       <form onSubmit={onSubmit} className="mb-6">
  //         <input id="email" name="email" type="text" />
  //         <input id="password" name="password" type="password" />
  //         <button>Sign In</button>
  //       </form>

  //       <div className="mx-auto max-w-[400px] space-y-5">
  //         <button
  //           onClick={() =>
  //             signIn("google", {
  //               redirect: false,
  //               callbackUrl: callbackUrl,
  //             })
  //           }
  //           className="flex items-center justify-center w-full gap-4 px-5 py-3 text-sm font-bold text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
  //         >
  //           Sign in with Google
  //         </button>
  //       </div>
  //     </div>
  //   </section>
  // );

  return <SignIn />;
};
export default SignInPage;
