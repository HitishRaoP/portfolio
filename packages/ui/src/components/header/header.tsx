"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "../sheet"
import { House, Contact, FolderGit, Braces } from "lucide-react"
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const navigation = [
    {
        name: "Home",
        icon: <House />,
    },
    {
        name: "Projects",
        icon: <FolderGit />,
    },
    {
        name: "Skills",
        icon: <Braces />,
    },
    {
        name: "Contact",
        icon: <Contact />,
    }
]
export const Header = () => {
    return (
        <header className='fixed z-10 w-full mx-auto pr-8 border-b py-4 flex justify-end sm:justify-center items-center bg-black'>
            <Sheet>
                <SheetTrigger className="sm:hidden">
                    <HiOutlineMenuAlt4 className="border w-6 h-6 p-1 text-neutral-300 rounded-full" />
                </SheetTrigger>
                <SheetContent className="pt-20" >
                    {
                        navigation.map((item, index) => {
                            return (
                                <Link key={index} href={`/${item.name.toLowerCase()}`}>
                                    <SheetClose className="w-full text-neutral-300 flex  justify-between items-center p-4">
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {item.icon}
                                        </div>
                                    </SheetClose>
                                </Link>
                            )
                        })
                    }
                </SheetContent>
            </Sheet>
            <NavigationMenu className="hidden sm:flex">
                <NavigationMenuList defaultValue={"Home"}>
                    {
                        navigation.map((item, index) => {
                            return (
                                <NavigationMenuItem className="px-2" key={index}>
                                    <Link href={`${item.name.toLowerCase()}`} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            {item.name}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                        })
                    }
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
