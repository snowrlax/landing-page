
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { CardContent, Card } from "@/components/ui/card"


export const Testemonials = () => {

    return (
        <section key="1" className="w-full py-12">
            <div className="container px-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">What our Students say</h2>
                        <p className="text-gray-500 dark:text-gray-400">See the amazing feedback from our students</p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-3xl items-stretch w-full gap-6 mt-4">
                    <Carousel className="w-full max-w-sm mx-auto">
                        <CarouselContent className="grid items-start">
                            <CarouselItem className="w-auto" />
                            <CarouselItem className="w-auto" />
                            <CarouselItem className="w-auto">
                                <div className="p-2">
                                    <Card>
                                        <CardContent className="flex items-center gap-4 p-6">
                                            <img
                                                alt="Image"
                                                className="rounded-full"
                                                height="80"
                                                src="/placeholder.svg"
                                                style={{
                                                    aspectRatio: "80/80",
                                                    objectFit: "cover",
                                                }}
                                                width="80"
                                            />
                                            <div className="grid gap-2 text-sm sm:gap-1">
                                                <p className="font-semibold">Eva Williams</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    The course was engaging and the support from the staff was excellent. I would recommend this
                                                    platform to anyone looking to learn new skills.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
