import CarouselAction from '@/components/Carousel'
import { Input } from '@/components/ui/input'
import { avatarCardData } from '@/utils/avatarData'
import { backgroundTexturedata } from '@/utils/backgroundTextures'
import { Label } from '@radix-ui/react-label'
import React from 'react'

function AvatarSelection() {
    return (
        <div className='flex flex-col gap-y-6'>
            <CarouselAction label="Select Avatar" loopDataValues={avatarCardData} />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Upload File</Label>
                <Input accept="audio/*" id="picture" type="file" />
            </div>
            <CarouselAction label="Select Background" loopDataValues={backgroundTexturedata} />
        </div>
    )
}

export default AvatarSelection