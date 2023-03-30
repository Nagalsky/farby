import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // name: "Sign in with Email",
      // credentials: {
      //   email: { label: "Email", type: "text" },
      //   password: { label: "Password", type: "password" },
      // },
      // async authorize(credentials, req) {
      //   if (credentials == null) return null;

      //   try {
      //     const { user, jwt } = await AuthService.signIn({
      //       email: credentials.email,
      //       password: credentials.password,
      //     });

      //     return { ...user, jwt };
      //   } catch (error) {
      //     return null;
      //   }
      // },
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        var fetch_url = `${process.env.STRAPI_URL}/auth/local`;
        var params = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: credentials?.email,
            password: credentials?.password,
          }),
        };

        let response = await fetch(fetch_url, params);
        const data = await response.json();
        const user = { ...data.user, jwt: data.jwt };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },

  pages: {
    signIn: "/auth/signin", // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // callbacks: {
  //   // jwt: async ({ token, user }: { user: any; token: any }) => {
  //   //   if (user) {
  //   //     token.id = user.id;
  //   //     token.jwt = user.jwt;
  //   //     token.username = user.username; /* ### */
  //   //   }
  //   //   return Promise.resolve(token);
  //   // },
  //   session: async ({ session, token }: { session: any; token: any }) => {
  //     session.id = token.id;
  //     session.jwt = token.jwt;
  //     session.user.username = token.username; /* ### */
  //     return Promise.resolve(session);
  //   },
  // },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    //whatever value we return here will be the value of the next-auth session
    async session({ session, token, user }) {
      return {
        ...session,
        user: { ...session.user, ...user, ...token.user! }, // combine the session and db user
      };
    },
  },

  debug: true,
});
