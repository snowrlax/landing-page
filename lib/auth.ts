import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "email", type: "text", placeholder: "Email" },
                password: { label: "password", type: "text", placeholder: "Password" },
            },
            async authorize(credentials, req) {
                const username = credentials?.username
                const password = credentials?.password

                // validation
                if (!username || !password) {
                    return null
                }
                return {
                    id: "1",
                    name: "Test user",
                    email: "pranav@gmail.com"
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // jwt: ({token, user}) => {
        //     // console.log(token)

        //     token.userId = token.sub
        //     return token
        // },

        session: ({ session, token, user }: any) => {
            // console.log(session)
            if (session && session.user) {
                session.user.id = token.sub
            }
            // console.log(session)

            return session
        }
    }
}