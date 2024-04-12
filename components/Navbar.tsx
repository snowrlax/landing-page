import Link from "next/link"
import { Button } from "@/components/ui/button"


export const Navbar = () => {
    return (
        <header className="flex h-20 w-full shrink-0 items-center justify-center px-4 md:px-6">
            <Link className="mr-auto" href="#">
                <span className="text-xl font-bold">Name</span>
            </Link>
            <div className="flex gap-4">
                <Link className="flex items-center" href="/auth/signup">
                    Login
                </Link>
                <Button variant="outline">Search</Button>
            </div>
        </header>
    )
}