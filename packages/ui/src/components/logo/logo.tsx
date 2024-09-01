import { cn } from '@portfolio/lib'
import Image from 'next/image'

interface LogoProps {
    className?: string
    alt: string
    src: string
}

export const Logo = (
    {
        alt, src, className
    }: LogoProps
) => {
    return (
        <div className={cn('flex drop-shadow-[0_0px_15px_rgba(0,215,60,0.8)] justify-center items-center w-12 h-12 border outline-[1.5px] outline-neutral-500 outline-dashed rounded-full', className)}>
            <Image
                className='p-2'
                height={120}
                width={120}
                alt={alt}
                src={src} />
        </div>
    )
}
