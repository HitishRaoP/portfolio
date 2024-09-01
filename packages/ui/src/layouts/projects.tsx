import { Card, CardContent, CardHeader, CardTitle } from '../components/card'
import { IconButton } from '../components/button/icon-button'
import { ScrollArea } from '../components/scroll-area'

const projects = [
  {
    name: "chartlo.app",
    description: "Chartlo is a web application that allows users to create interactive and customizable charts with ease. It offers a range of chart types and customization options, making it ideal for both developers and non-technical users. Built using modern web technologies, it ensures a seamless user experience.",
    src: "", // If you have a demo or live link, you can add it here
    github: "https://github.com/HitishRaoP/chartlo",
    className: "bg-gradient-to-tr from-black via-[#20213B] to-black",
  },
  {
    name: "Amazon Scrapper",
    description: "The Amazon Scrapper is a powerful tool designed to extract detailed product information from Amazon. It efficiently gathers data such as product names, prices, images, and more, making it invaluable for market analysis and competitive research. This project showcases my skills in web scraping and data processing.",
    src: "", // If you have a demo or live link, you can add it here
    github: "https://github.com/HitishRaoP/chartlo",
    className: "bg-gradient-to-tr from-black via-[#3D1026] to-black"
  }
]

export const Projects = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {
        projects.map((project, index) => {
          return (
            <div className='border rounded-lg' key={index}>
              <Card key={index} className={`p-4 md:p-6 ${project.className} rounded-b-none`}>
                <CardHeader>
                  <CardTitle>
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className='h-40 lg:h-32'>
                  <p className=' text-neutral-400 leading-relaxed text-sm md:text-md font-mono text-pretty'>{project.description}</p>
                  </ScrollArea>
                </CardContent>
              </Card>
              <div className='w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between p-10 md:p-12'>
                <IconButton logo="Globe" href={project.src} text="Hosted Version" />
                <IconButton logo="Github" href={project.github} text="Source Code" />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
