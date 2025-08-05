import HeroSection from '@/components/sections/HeroSection'
import ConsumerJusticeSection from '@/components/sections/ConsumerJusticeSection'
import ClaimsTableSection from '@/components/sections/ClaimsTableSection'
import TeamSection from '@/components/sections/TeamSection'
import ValuesSection from '@/components/sections/ValuesSection'
import TrackRecordSection from '@/components/sections/TrackRecordSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ConsumerJusticeSection />
      <ClaimsTableSection />
      <TeamSection />
      <ValuesSection />
      <TrackRecordSection />
      <ContactSection />
    </main>
  )
}