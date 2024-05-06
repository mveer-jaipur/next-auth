import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH_CONFIG = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'username', placeholder: 'Enter username', type:'text'},
                password: {label: 'password', placeholder: 'Enter password', type:'password'}
            },
            async authorize(credentials: any) {
                return {
                    id: '1',
                    name: 'mahaveer',
                    email: 'mveer.berlin@gmail.coim'
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
              authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        })
    ],
    secret: 'my-secret',
    callbacks: {
        session: ({ session, token, user }: any) => {
            return session;
        }
    }
}
