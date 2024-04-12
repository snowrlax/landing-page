import { NEXT_AUTH } from "@/lib/auth"
import { getServerSession } from "next-auth"

import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { redirect } from 'next/navigation'


export default async function UserPage() {
    const session = await getServerSession(NEXT_AUTH)
    if(!session) {
        redirect("/auth/login")
    }
    return (
        <div className="flex flex-col w-full min-h-screen">
            {session && <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
                    <Card className="w-full max-w-sm rounded-lg shadow">
                        <CardContent className="flex items-center p-4">
                            <Avatar className="w-16 h-16 border">
                                <AvatarImage alt="user image" src={session.user.image} />
                                <AvatarFallback>{session.user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 text-center">
                                <h3 className="text-lg font-bold">Welcome back, {session.user.name}!</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Your last login was 2 days ago</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 max-w-6xl w-full mx-auto">
                    <Card className="rounded-xl shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <HomeIcon className="w-8 h-8" />
                            <div className="grid gap-1">
                                <CardTitle>www</CardTitle>
                                <CardDescription>example.com</CardDescription>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="ml-auto" size="icon" variant="ghost">
                                        <MoreHorizontalIcon className="w-4 h-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Project</DropdownMenuItem>
                                    <DropdownMenuItem>View Settings</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent className="grid gap-2">
                            <div className="text-sm font-semibold">feat: update color scheme</div>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <GithubIcon className="w-4 h-4" />
                                    <span className="text-gray-500 dark:text-gray-400">3h ago</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitBranchIcon className="w-4 h-4" />
                                    <span className="text-gray-500 dark:text-gray-400">main</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <BookOpenIcon className="w-8 h-8" />
                            <div className="grid gap-1">
                                <CardTitle>docs</CardTitle>
                                <CardDescription>docs.example.com</CardDescription>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="ml-auto" size="icon" variant="ghost">
                                        <MoreHorizontalIcon className="w-4 h-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Project</DropdownMenuItem>
                                    <DropdownMenuItem>View Settings</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent className="grid gap-2">
                            <div className="text-sm font-semibold">docs: add docs for memberships</div>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <GithubIcon className="w-4 h-4" />
                                    <span className="text-gray-500 dark:text-gray-400">1 day ago</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitBranchIcon className="w-4 h-4" />
                                    <span className="text-gray-500 dark:text-gray-400">main</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="rounded-xl shadow">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <LayoutPanelLeftIcon className="w-8 h-8" />
                            <div className="grid gap-1">
                                <CardTitle>app</CardTitle>
                                <CardDescription>app.example.com</CardDescription>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="ml-auto" size="icon" variant="ghost">
                                        <MoreHorizontalIcon className="w-4 h-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Project</DropdownMenuItem>
                                    <DropdownMenuItem>View Settings</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardHeader>
                        <CardContent className="grid gap-2">
                            <div className="text-sm font-semibold">fix: login issues</div>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <GithubIcon className="w-4 h-4" />
                                    <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitBranchIcon className="w-4 h-4" />
                                    <span className="text-gray-500 dark:text-gray-400">main</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            }
        </div>
    )
}


function BookOpenIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
}


function FrameIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="22" x2="2" y1="6" y2="6" />
            <line x1="22" x2="2" y1="18" y2="18" />
            <line x1="6" x2="6" y1="2" y2="22" />
            <line x1="18" x2="18" y1="2" y2="22" />
        </svg>
    )
}


function GitBranchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="6" x2="6" y1="3" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
    )
}


function GithubIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function HomeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LayoutPanelLeftIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="7" height="18" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
        </svg>
    )
}


function MoreHorizontalIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}

