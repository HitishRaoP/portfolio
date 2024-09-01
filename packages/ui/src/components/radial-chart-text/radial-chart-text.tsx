"use client"

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "../chart"

type RadialChartProps = {
    text: string
    level: number
    barColor: string
    textColor: string
}

export function RadialChartText({ text,level, barColor, textColor }: RadialChartProps) {
    const chartData = {
        level: level,
    }

    const chartConfig: ChartConfig = {
        level: {
            label: level,
        },
    }

    return (
        <ChartContainer
            config={chartConfig}
            className="aspect-square max-h-[190px]"
        >
            <RadialBarChart
                data={[chartData]}
                startAngle={0}
                endAngle={chartData.level * 360}
                innerRadius={80}
                outerRadius={110}
            >
                <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                    polarRadius={[86, 74]}
                />
                <RadialBar className={`${barColor} font-mono`} dataKey="level" background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className={`${textColor} text-xl font-bold font-mono`}
                                        >
                                            {text}
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </PolarRadiusAxis>
            </RadialBarChart>
        </ChartContainer>
    )
}

