"use client"
import React from 'react'
import { Nav } from "@/components/ui/nav"
import {
    Home,
    Users,
    UserPlus,
    CircleUserRound,
    PersonStanding,
    BadgeIndianRupee,
    CreditCard
} from "lucide-react"
function SidebarNav() {
    return (
        <div className='min-w-[80px] flex flex-col justify-between h-[100vh] px-3 pb-10 pt-6 gap-x-10'>
            <div>
                <Nav
                    isCollapsed={false}
                    links={[
                        {
                            title: "Home",
                            href: '/',
                            icon: Home,
                            variant: "ghost",
                        },
                        {
                            title: "Create Agent",
                            href: '/create-agent',
                            icon: UserPlus,
                            variant: "ghost",
                        },
                        {
                            title: "Agents",
                            href: '/agent',
                            label: "",
                            icon: Users,
                            variant: "ghost",
                        },
                        {
                            title: "Avatar",
                            href: '/avatar',
                            icon: CircleUserRound,
                            variant: "ghost",
                        },
                        {
                            title: "Digital Human",
                            href: '/digital-human',
                            label: "",
                            icon: PersonStanding,
                            variant: "ghost",
                        },
                    ]}
                />
            </div>
            <div>
                <Nav
                    isCollapsed={false}
                    links={[
                        {
                            title: "Account",
                            href: '/account',
                            icon: BadgeIndianRupee,
                            variant: "ghost",
                        },
                        {
                            title: "Payments",
                            href: '/payments',
                            label: "",
                            icon: CreditCard,
                            variant: "ghost",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default SidebarNav