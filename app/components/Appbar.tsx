'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
      const session = useSession();
    return (
        <div>
            <button onClick={() => signIn()}>SignIn</button>
            <button onClick={() => signOut()}>SignOut</button>
            <div>
                 {JSON.stringify(session)}
            </div>
        </div>
    )
}