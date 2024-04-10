import { StudentFeed } from "@/components/CTA1";
import { Card } from "@/components/Card";
import { ExploreComponent } from "@/components/Explore";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
// import { Testimonials } from "@/components/Testimonials ";

export default function Landing() {

    return (
        <div className="">
            <Timeline />
            <StudentFeed />
        </div>
    )
}