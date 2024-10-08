import { Button } from './button'
import Image from 'next/image'
import Link from 'next/link'

interface IconButtonProps {
    href: string
    text: string
    logo: "Github" | "Globe"
}

export const IconButton = (
    {
        href, text, logo
    }: IconButtonProps
) => {
    return (
        <Button variant={"outline"} asChild>
            <Link href={href} className='flex gap-4'>
                {
                    logo === "Github" ?
                        <Image alt="Github" src="/github.svg" width={20} height={20} /> :
                        <Image alt="Globe" src="/globe.svg" width={20} height={20} />
                }
                <div className='text-sm md:text-md hidden sm:flex' >
                    {text}
                </div>
            </Link>
        </Button>
    )
}
