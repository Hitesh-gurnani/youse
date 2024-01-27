"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { avatarCardData } from '@/utils/avatarData';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Label } from '@radix-ui/react-label';
interface CarouselActionProps {
    label?:string;
    loopDataValues:any;
}
function CarouselAction({label,loopDataValues}:CarouselActionProps) {
  return (
    <div>
        <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-[200px] flex flex-col gap-y-2 sm:w-full max-w-xl min-w-lg mt-3"
            >
                <Label htmlFor="picture">{label}</Label>
                <CarouselContent className='-ml-5'>
                    {loopDataValues.map((loopDataValue:any, index:number) => (
                        <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card className="cursor-pointer">
                                    <CardContent className="flex aspect-square items-center overflow-hidden justify-center p-6">
                                        <Avatar>
                                            <AvatarImage src={loopDataValue.src} />
                                            <AvatarFallback>{loopDataValue.fallback}</AvatarFallback>
                                        </Avatar>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
            </Carousel>
    </div>
  )
}

export default CarouselAction