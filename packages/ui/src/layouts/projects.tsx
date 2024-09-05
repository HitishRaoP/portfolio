import { Card, CardContent, CardHeader, CardTitle } from '../components/card'
import { IconButton } from '../components/button/icon-button'
import { ScrollArea } from '../components/scroll-area'

const projects = [
  {
    name: "Chartlo",
    description: "Chartlo is a web application that allows users to create interactive and customizable charts with ease. It offers a range of chart types and customization options, making it ideal for both developers and non-technical users. Built using modern web technologies, it ensures a seamless user experience.",
    src: "https://chartloapp-hitishs-projects-79b69705.vercel.app/",
    github: "https://github.com/HitishRaoP/chartlo.app",
    className: "bg-gradient-to-tr from-black via-[#20213B] to-black",
  },
  {
    name: "Scrapify",
    description: "Scrapify is a powerful tool designed to extract detailed product information from Amazon. It efficiently gathers data such as product names, prices, images, and more, making it invaluable for market analysis and competitive research. This project showcases my skills in web scraping and data processing.",
    src: "https://scrapify-frontend.vercel.app/",
    github: "https://github.com/HitishRaoP/scrapify",
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
                  <ScrollArea className='h-40 sm:h-32'>
                    <p className=' text-neutral-400 leading-relaxed text-sm md:text-base text-pretty'>{project.description}</p>
                  </ScrollArea>
                </CardContent>
              </Card>
              <div className='w-full flex justify-between p-10 md:p-12'>
                <IconButton logo="Globe" href={project.src} text="Visit" />
                <IconButton logo="Github" href={project.github} text="Code" />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
