import EventCard from "@/components/EventCard"
import ExploreBtn from "../components/ExploreBtn"
import { events } from "@/lib/constants"
const page = () => {

  return (
    <>
      <section>
        <h1 className='text-center mt-10' >
          A Hub for every Developer <br />Events you cant miss
        </h1>
        <p className='text-center mt-5 text-white text-xl'>
          Hackathons, Meetups and Conferences
        </p>
        <ExploreBtn />

        <div className="mt-20 space-y-7">
          <h3>
            Featured Events
          </h3>
          <ul className="list-none grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default page