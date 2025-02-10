import "@/styles/globals.css"
import { Dosis, Cabin_Sketch } from "next/font/google"
import type React from "react"

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dosis",
})

const cabinSketch = Cabin_Sketch({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cabin-sketch",
})

export const metadata = {
  title: "Cabal Colombia Cocaine ",
  description: "Experience the vibrant culture of Colombia through CCC",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dosis.variable} ${cabinSketch.variable}`}>
      <body className={dosis.className}>{children}</body>
    </html>
  )
}



import './globals.css'