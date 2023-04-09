"use client"
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface typeOfChildren {
    children: ReactNode
}

export default function Wrapper({ children }: any) {
    return (
        <ThemeProvider>
            <div className="max-w-6xl  mx-auto">
                {children}
            </div>
        </ThemeProvider>
    )
}