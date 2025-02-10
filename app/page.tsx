import CultureCarousel from "../components/culture-carousel"
import CultureContent from "../components/culture-content"

export default function ColombiaLandingPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/1GsbMvJP/u9798762876-closeup-of-a-tiny-pile-of-blue-extremely-fine-pow-a4817f4e.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/5" />
      <div className="relative">
        <div className="absolute top-4 left-6 z-10">
          <h1 className="text-6xl font-bold tracking-tighter text-primary drop-shadow-md animate-wiggle font-sketch">
            CCC
          </h1>
        </div>
        <CultureCarousel />
      </div>
      <CultureContent />
    </main>
  )
}

