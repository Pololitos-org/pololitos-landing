// src/app/page.tsx
import type { NextPage } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ValuePropositionSection from '@/components/ValuePropositionSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CategoriesSection from '@/components/CategoriesSection'
import CommunitySection from '@/components/CommunitySection'
import CTASection from '@/components/CTASection'
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
  ServiceSchema,
  MobileAppSchema
} from '@/components/StructuredData'

const Home: NextPage = () => {
  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <ServiceSchema />
      <MobileAppSchema />

      <main className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <ValuePropositionSection />
        <HowItWorksSection />
        <CategoriesSection />
        {/* <CommunitySection /> */}
        <CTASection />
        <Footer />
      </main>
    </>
  )
}

export default Home
