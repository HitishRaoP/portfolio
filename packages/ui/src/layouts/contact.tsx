import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/card'
import { Logo } from '../components/logo/logo'
import Link from 'next/link'
import { cn } from '@portfolio/lib'
import { Button } from '../components/button'

const contacts = [
  {
    name: "Instagram",
    icon: "/instagram.svg",
    src: "https://www.instagram.com/hitishraop/",
    style: "",
    description: "Follow my journey as a full-stack developer and freelancer. I share updates on projects, and insights into the tech world."
  },
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    src: "https://www.linkedin.com/in/hitish-rao-p/",
    style: "",
    description: "Connect with me on LinkedIn and to stay updated on my latest projects and achievements."
  },
  {
    name: "Github",
    icon: "/github.svg",
    src: "https://github.com/HitishRaoP",
    style: "",
    description: "Check out my GitHub to see my latest code, open-source contributions, and personal projects. I specialize in full-stack development."
  },
  {
    name: "Gmail",
    icon: "/gmail.svg",
    src: "mailto:hitishraop@gmail.com",
    style: "",
    description: "Reach out to me via email for inquiries about freelance projects, collaborations, or if you just want to discuss tech!"
  },
  {
    name: "X",
    icon: "/x.svg",
    src: "https://x.com/HitishRaoP",
    style: "",
    description: "Follow me on X for updates on my work, tech discussions, and to engage in conversations about my skills and freelancing."
  },
  {
    name: "Facebook",
    icon: "/facebook.svg",
    src: "https://www.facebook.com/profile.php?id=100094119826394",
    style: "",
    description: "Join me on Facebook where I share insights into my work as a developer and thoughts on the latest trends in technology."
  }
]


export const Contact = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {
        contacts.map((contact, index) => {
          return (
            <Card key={index} className={cn('rounded-none bg-black p-6', contact.style)}>
              <CardHeader>
                <CardTitle className='flex justify-center sm:justify-start'>
                  <Logo alt={contact.name} src={contact.icon} className='drop-shadow-none outline-none w-16 h-16' />
                </CardTitle>
              </CardHeader>
              <CardContent className='sm:h-36 md:h-32'>
                <p className='text-xs text-neutral-400 leading-relaxed text-center sm:text-start'>{contact.description}</p>
              </CardContent>
              <CardFooter>
                <Button className='border w-full sm:text-center p-4 font-bold rounded-full' variant={"outline"} asChild>
                  <Link href={contact.src} className='flex gap-1'><span className='flex'> Follow me</span><span className='hidden sm:flex'>on {contact.name}</span></Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })
      }
    </div >
  )
}
