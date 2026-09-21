import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesOverview from './components/ServicesOverview'
import WorkWithUs from './components/WorkWithUs'
import Faq from './components/Faq'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ScholarshipPage from './pages/ScholarshipPage'
import ServicePage from './pages/ServicePage'
import ApplyPage from './pages/ApplyPage'
import RequestPage from './pages/RequestPage'
import PartnerPage from './pages/PartnerPage'
import SponsorPage from './pages/SponsorPage'
import { useHashRoute, SERVICE_PAGES, type ServiceKey } from './lib/useHashRoute'

function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkWithUs />
      <Faq />
      <CtaBand />
    </>
  )
}

export default function App() {
  const page = useHashRoute()

  const isService = (SERVICE_PAGES as readonly string[]).includes(page)

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar page={page} />
      <main>
        {page === 'home' && <Home />}
        {page === 'about' && <AboutPage />}
        {page === 'scholarship' && <ScholarshipPage />}
        {isService && <ServicePage key={page} serviceKey={page as ServiceKey} />}
        {page === 'apply' && <ApplyPage />}
        {page === 'request' && <RequestPage />}
        {page === 'partner' && <PartnerPage />}
        {page === 'sponsor' && <SponsorPage />}
      </main>
      <Footer />
    </div>
  )
}
