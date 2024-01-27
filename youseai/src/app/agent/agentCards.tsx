import React from 'react'
import { agentsCardData } from '@/utils/agentData'
import Card from '@/components/Card'
import { AgentCardDialog } from '@/components/AlertDialogue'
function AgentCards() {
    return (
        <div className='mt-3'>
            <section className="grid  max-h-[80vh] scrollable-content overflow-y-auto w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                {agentsCardData.map((agentsCardVal, i) => (
                    <AgentCardDialog
                        component={
                        <Card
                            key={i}
                            discription={agentsCardVal.description.substring(0, 100)}
                            icon={agentsCardVal.image}
                            label={agentsCardVal.name}
                            className='cursor-pointer'
                        />}
                        title={agentsCardVal.name}
                        description={agentsCardVal.description}
                    >

                    </AgentCardDialog>
                ))}
            </section>
        </div>
    )
}

export default AgentCards