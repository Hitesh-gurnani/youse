"use client"
import * as React from "react"
import PageTitle from "@/components/PageTitle"
import AvatarSelection from "./avatarSelection"
import AvatarSelected from "./avatarSelected"

export default function CarouselSize() {
    return (
        <div className="flex flex-col gap-y-8">
            <PageTitle title="Avatar Selection" />
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <AvatarSelection />
                <AvatarSelected />
            </div>
        </div>
    )
}
