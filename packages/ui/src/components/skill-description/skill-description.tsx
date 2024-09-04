import { Card, CardContent, CardDescription, CardHeader } from "../card"
import { Progress } from "../progress"

interface SkillDescriptionProps {
    description: string
    level: number
    usage: number
}

export const SkillDescription = (
    {
        description,
        level,
        usage,
    }: SkillDescriptionProps
) => {
    return (
        <Card>
            <CardHeader className="dark:bg-black rounded-lg bg-dot-neutral-700">
                <CardDescription className='text-center font-bold font-mono'>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className='pt-4 border-t'>
                <div className="flex flex-col pt-2 gap-10">
                    <div className="flex items-center">
                        <span className="w-1/6 text-right mr-4 font-mono">Level</span>
                        <div className="w-5/6">
                            <Progress className='[&>*]:bg-amber-500' value={level * 100} />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="w-1/6 text-right mr-4 font-mono">Usage</span>
                        <div className="w-5/6">
                            <Progress className='[&>*]:bg-lime-500 ' value={usage * 100} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
