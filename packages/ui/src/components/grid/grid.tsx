import { cn } from "@portfolio/lib";
import React from "react";

interface GridProps {
    children: React.ReactNode;
    className?: string;
}

export function Grid({ children, className }: GridProps) {
    return (
        <div className={cn("dark:bg-neutral-[#121212] dark:bg-grid-neutral-500/[0.2] flex items-center justify-center rounded-lg", className)}>
            {children}
        </div>
    );
}
