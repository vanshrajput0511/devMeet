import Link from "next/link"
import Image from "next/image"

interface Props {
    title: string,
    image: string,
    slug: string;
    location: string;
    date: string;
    time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
    return (
        <div>
            <Link href={`events`} id="event-card">
               
                <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                        <Image
                            src={image}
                            alt={title}

                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>


                </div>
                 <p className="title">{title}</p>
                <div className="flex flex-row gap-2">
                    <Image
                        src='/icons/pin.svg'
                        alt="location"
                        width={14}
                        height={14}
                    />
                    <p>{location}</p>
                </div>
               
                <div className="flex flex-row gap-2">
                    <Image
                        src='/icons/calendar.svg'
                        alt="date"
                        width={14}
                        height={14}
                    />
                    <p>{date}</p>
                </div>
                
                <div className="flex flex-row gap-2">
                    <Image
                        src='/icons/clock.svg'
                        alt="time"
                        width={14}
                        height={14}
                    />
                    <p>{time}</p>
                </div>
                
               
            </Link>
        </div>
    )
}

export default EventCard 