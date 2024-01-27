import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
interface AgentCardProps {
    className?:string;
    src?: string;
    name: string;
    desc: string;
}
function AgentCard({className,src,name,desc}:AgentCardProps) {
  return (
    <div>
        <div className={cn('flex border border-solid border-white',className)}>
            <Image src={''} alt={''}/>
            <div className='flex flex-col'>
                <h2>{name}</h2>
                <h4>{desc}</h4>
            </div>
        </div>
    </div>
  )
}

export default AgentCard