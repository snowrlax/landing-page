'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"




export const Navbar = () => {
    const session = useSession()

    return (
        <header className="flex h-20 w-full shrink-0 items-center justify-center px-4 md:px-6">
            <Link className="mr-auto" href="#">
                <span className="text-xl font-bold">Name</span>
            </Link>
            <div className="flex gap-4">
                {session.status === "authenticated" || <Button className="flex items-center" onClick={() => {
                    signIn()
                }}>
                    Login
                </Button>}
                {session.status === "authenticated" || <Button variant="outline" >Search</Button>}
                {session.status === "authenticated" &&
                    <>
                        <Button variant="outline" onClick={() => {
                            // redirect('/user')
                        }}>Dashboard</Button>

                        <Button variant="outline" onClick={() => {
                            signOut()
                        }}>Log Out</Button>
                    </>
                }
            </div>
            {/* {JSON.stringify(session.status)} */}
        </header>
    )
}