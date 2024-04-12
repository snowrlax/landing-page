import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export const SignupComponent = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 bg-gray-50 dark:bg-gray-950 py-6">
                <div className="mx-auto px-4 flex flex-col gap-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
                    </div>
                    <div className="mx-auto max-w-lg">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="First name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Last name" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="m@example.com" required type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" required type="password" />
                            </div>
                            <Button className="w-full" type="submit">
                                Sign Up
                            </Button>
                            <Button className="w-full" variant="outline">
                                Sign up with Google
                            </Button>
                            <Button className="w-full" variant="outline">
                                Sign up with GitHub
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?
                            <Link className="underline" href="/auth/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const LoginComponent = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 bg-gray-50 dark:bg-gray-950 py-6">
                <div className="mx-auto px-4 flex flex-col gap-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        <p className="text-gray-500 dark:text-gray-400">Welcome back! Enter your credentials to continue.</p>
                    </div>
                    <div className="mx-auto max-w-lg">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="m@example.com" required type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" required type="password" />
                            </div>
                            <Button className="w-full" type="submit">
                                Login
                            </Button>
                            <Button className="w-full" variant="outline">
                                Sign In with Google
                            </Button>
                            <Button className="w-full" variant="outline">
                                Sign In with GitHub
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Dont have an account?
                            <Link className="underline" href="/auth/signup">
                                Signup
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}