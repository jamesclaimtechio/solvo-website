import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ConsumerJusticeSection from '@/components/sections/ConsumerJusticeSection'
import ClaimsTableSection from '@/components/sections/ClaimsTableSection'
import TeamSection from '@/components/sections/TeamSection'
import ValuesSection from '@/components/sections/ValuesSection'
import TrackRecordSection from '@/components/sections/TrackRecordSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <section id="about">
          <ConsumerJusticeSection />
        </section>
        <section id="services">
          <ClaimsTableSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="values">
          <ValuesSection />
        </section>
        <TrackRecordSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}