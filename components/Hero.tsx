import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Explore Study Abroad Opportunities
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Discover the best universities around the world. Search and find your dream study destination.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Input className="max-w-lg flex-1" placeholder="Search universities" type="text" />
                            <Button size="lg">Search</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}