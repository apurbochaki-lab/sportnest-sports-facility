import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({

    baseURL: process.env.NEXT_CLIENT_LINK
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()