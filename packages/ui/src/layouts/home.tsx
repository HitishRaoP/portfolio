import { User, Building, Pencil } from "lucide-react"
import { InfoCard } from "../components/info-card"

export const Home = () => {
  return (
    <div className="border mt-[-8px] sm:mt-0">
      <div className="border-b px-8 md:px-0">
        <div className="text-3xl md:text-5xl text-center pt-24 font-bold leading-normal">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-600 to-red-500 text-transparent bg-clip-text">
            Hitish Rao P
          </span> <br /> Full stack web developer
        </div>
        <div className="text-center text-neutral-400 pt-6 pb-24 text-md md:text-xl">
          "Turning ideas into reality with code that connects the dots. <br />
          Your vision, my expertise—let's build something extraordinary."
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <InfoCard
          icon={<User />}
          boldText="Passionate"
          content="developer, building the future one line of code at a time." />
        <InfoCard
          icon={<Building />}
          boldText="Pursuing"
          content="Computer science and engineering in BMS College of Engineering.
          Batch of 2023-2027" />
        <InfoCard
          icon={<Pencil />}
          boldText="Beyond"
          content="code, I find creativity in drawing portraits and strategy in playing chess." />
      </div>
      <div className="h-6"></div>
    </div>
  )
}
