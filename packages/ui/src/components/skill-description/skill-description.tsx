import { Card, CardContent, CardDescription, CardHeader } from "../card"
import { RadialChartText } from '../radial-chart-text'
import { ScrollArea } from "../scroll-area"

interface SkillDescriptionProps {
    description: string
    level: number
    usage: number
    lBarColor: string
    lTextColor: string
    uBarColor: string
    uTextColor: string
}

export const SkillDescription = (
    {
        description,
        level,
        usage,
        lBarColor,
        lTextColor,
        uBarColor,
        uTextColor
    }: SkillDescriptionProps
) => {
    return (
        <Card>
            <CardHeader className="dark:bg-black rounded-lg bg-dot-neutral-700">
                <CardDescription className='text-center font-bold font-mono'>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className='pt-4 border-t flex justify-center'>
                <ScrollArea className="grid grid-cols-1 justify-center items-center gap-4 sm:grid-cols-2 h-44">
                    <RadialChartText text="Level" level={level} barColor={lBarColor} textColor={lTextColor} />
                    <RadialChartText text='Usage' level={usage} barColor={uBarColor} textColor={uTextColor} />
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
