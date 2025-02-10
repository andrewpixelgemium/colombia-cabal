import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CultureContent() {
  const teamMembers = [
    {
      name: "Pablo Escobar",
      role: "Founder & CEO",
      image: "https://i.ibb.co/ycp0fkcT/Pablo-Escobar-Pfp-HD.jpg",
      description: "Visionary leader with a passion for Colombian culture and blockchain technology.",
    },
    {
      name: "Griseda Blanco",
      role: "Head of Culture",
      image: "https://i.ibb.co/fz6M4nyK/71-Pp-Oa7nt-BL-UF894-1000-QL80.jpg",
      description: "Expert in Colombian traditions, ensuring our coin reflects our rich heritage.",
    },
    {
      name: "Gustavo Petro",
      role: "Head of Community",
      image:
        "https://d3i6fh83elv35t.cloudfront.net/static/2025/01/2025-01-26T203847Z_1843846355_RC2DFCACLRLN_RTRMADP_3_USA-TRUMP-COLOMBIA-1200x800.jpg",
      description: "Blockchain wizard making sure CCC is at the cutting edge of crypto innovation.",
    },
    {
      name: "Walter White",
      role: "Head of Product",
      image:
        "https://preview.redd.it/fbmk981sxr091.jpg?width=4063&format=pjpg&auto=webp&s=a2bd403aa355be8a1d0945b3419e217b8d7b91df",
      description: "Professional in cooking cocaine with 99% purity with years of experience as seen on Netflix",
    },
  ]

  return (
    <div
      className="container mx-auto px-4 py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/1GsbMvJP/u9798762876-closeup-of-a-tiny-pile-of-blue-extremely-fine-pow-a4817f4e.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-primary mb-4 animate-float">
            🌿 Colombia Cabal Cocaine (CCC) 🌿
          </h2>
          <p className="text-2xl text-text max-w-3xl mx-auto">
            What Wall Street absolutely loves, what every party desperately needs, powered by the beautiful nation of
            Colombia 🇨🇴
          </p>
        </div>

        <h3 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-4 border-secondary rounded-xl bg-white hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1 text-primary">{member.name}</h4>
                <p className="text-sm font-medium text-muted-foreground mb-2">{member.role}</p>
                <p className="text-sm text-text">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-6 animate-pulse">
            Join the CCC Revolution! 💎🙌
          </h2>
          <p className="text-xl text-text max-w-3xl mx-auto">
            HODL onto your sombreros! CCC isn't just a coin, it's a fiesta in your wallet. 1 CCC = 1 CCC, but also =
            infinite Colombian wealth. Not financial advice, just good times! 🎉
          </p>
        </div>
      </div>
    </div>
  )
}

