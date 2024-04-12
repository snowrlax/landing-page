import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: {label: 'email', type: 'text', placeholder: 'Email'},
                password: {label: 'password', type: 'text', placeholder: 'Password'},
            },
            async authorize(credentials, req) {
                const username = credentials?.username
                const password = credentials?.password

                // validation
                if (!username || !password) {
                    return null
                }
                return {
                    id: 'user1s'
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler
export const POST = handler