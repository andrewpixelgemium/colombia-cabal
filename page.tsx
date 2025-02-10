import CultureCarousel from "./culture-carousel"
import CultureContent from "./culture-content"

export default function ColombiaLandingPage() {
  return (
    <main className="min-h-screen bg-background">
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

