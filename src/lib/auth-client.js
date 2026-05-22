import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({

    baseURL: process.env.NEXT_CLIENT_LINK,

    plugins: [
        jwtClient()
    ]
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()