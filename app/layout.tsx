"use client"
import Wrapper from "./components/Wrapper";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="scrollbar-thin scrollbar-track-Anas-400 scrollbar-thumb-blue-800">
          <ThemeProvider>
        <Wrapper>
            {children}
        </Wrapper>
          </ThemeProvider>
      </body>
    </html>
  );
}
