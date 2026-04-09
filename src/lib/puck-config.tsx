/* eslint-disable react/display-name */
import type { Config } from '@measured/puck'
import HomeHero from '@/components/HomeHero'
import StatsCounter from '@/components/StatsCounter'
import TrustedBy from '@/components/TrustedBy'
import Testimonials from '@/components/Testimonials'
import ServicesGrid from '@/components/ServicesGrid'
import { BentoGrid, BentoItem } from '@/components/BentoGrid'
import { Bot, Zap, Globe, Database } from 'lucide-react'
import ProblemSection from '@/components/ProblemSection'
import ValueProp from '@/components/ValueProp'
import FAQ from '@/components/FAQ'
import MagazineGrid from '@/components/MagazineGrid'
import LeadMagnet from '@/components/LeadMagnet'
import LeadCapture from '@/components/LeadCapture'
import InlineCTA from '@/components/InlineCTA'
import ROICalculator from '@/components/ROICalculator'
import PromptCarousel from '@/components/PromptCarousel'
import Section from '@/components/Section'
import BookingWidget from '@/components/BookingWidget'
import IntelligenceBrief from '@/components/IntelligenceBrief'
import ResourceFeed from '@/components/ResourceFeed'
import AIQuiz from '@/components/AIQuiz'
import TelegramTeaser from '@/components/TelegramTeaser'

export type HeroProps = {
  badgeText: string
  title: string
  description: string
  primaryCtaText: string
  primaryCtaLink: string
  secondaryCtaText: string
  secondaryCtaLink: string
}
export type StatsProps = { items: Array<{ value: string; label: string }> }
export type BentoGridProps = {
  title: string
  subtitle: string
  items: Array<{ title: string; description: string; iconName: 'Bot' | 'Zap' | 'Globe' | 'Database'; span: 1 | 2 }>
}
export type TrustedByProps = { title: string; companies: Array<{ name: string }> }
export type ServicesProps = {
  eyebrow: string
  title: string
  subtitle: string
  items: Array<{ title: string; description: string; iconName: 'Palette' | 'Megaphone' | 'Bot' | 'Code'; link: string }>
}
export type TestimonialsProps = { title: string; reviews: Array<{ text: string; name: string; role: string }> }

export type Props = {
  Hero: HeroProps
  Stats: StatsProps
  BentoGrid: BentoGridProps
  TrustedBy: TrustedByProps
  Services: ServicesProps
  Testimonials: TestimonialsProps
  ProblemSection: {}
  ValueProp: {}
  FAQ: {}
  MagazineGrid: {}
  LeadMagnet: {}
  LeadCapture: {}
  InlineCTA: { variant: 'audit' | 'consultation' | 'newsletter' }
  ROICalculator: {}
  PromptCarousel: {}
  BookingWidget: {}
  IntelligenceBrief: {}
  ResourceFeed: {}
  AIQuiz: {}
  TelegramTeaser: {}
}

const IconMap: Record<string, any> = { Bot, Zap, Globe, Database }

export const config: Config<Props> = {
  components: {
    Hero: {
      fields: {
        badgeText: { type: 'text' },
        title: { type: 'textarea' },
        description: { type: 'textarea' },
        primaryCtaText: { type: 'text' },
        primaryCtaLink: { type: 'text' },
        secondaryCtaText: { type: 'text' },
        secondaryCtaLink: { type: 'text' },
      },
      defaultProps: {
        badgeText: 'v2.0.0 Now Live',
        title: 'The Growth Engine\nFor Scaling Agencies',
        description: 'Stop relying on luck.',
        primaryCtaText: 'Start Growth Engine',
        primaryCtaLink: '/book',
        secondaryCtaText: 'View System Architecture',
        secondaryCtaLink: '/case-studies',
      },
      render: (props) => <HomeHero {...props} />,
    },
    Stats: {
      fields: { items: { type: 'array', arrayFields: { value: { type: 'text' }, label: { type: 'text' } }, defaultItemProps: { value: '100+', label: 'Clients' } } },
      defaultProps: { items: [{ value: '4x', label: 'Faster Execution' }, { value: '98%', label: 'Open Rates' }, { value: '24/7', label: 'AI Operation' }, { value: '< 7 Days', label: 'To Launch' }] },
      render: ({ items }) => <StatsCounter items={items} />,
    },
    TrustedBy: {
      fields: { title: { type: 'text' }, companies: { type: 'array', arrayFields: { name: { type: 'text' } }, defaultItemProps: { name: 'Company' } } },
      defaultProps: { title: 'Trusted by teams automating the future', companies: [{ name: 'TechCorp' }] },
      render: (props) => <TrustedBy {...props} />,
    },
    TelegramTeaser: {
      render: () => <TelegramTeaser />,
    },
    BentoGrid: {
      fields: {
        title: { type: 'text' },
        subtitle: { type: 'textarea' },
        items: { type: 'array', arrayFields: { title: { type: 'text' }, description: { type: 'textarea' }, iconName: { type: 'select', options: [{ label: 'Bot', value: 'Bot' }, { label: 'Zap', value: 'Zap' }, { label: 'Globe', value: 'Globe' }, { label: 'Database', value: 'Database' }] }, span: { type: 'select', options: [{ label: '1 Column', value: 1 }, { label: '2 Columns', value: 2 }] } }, defaultItemProps: { title: 'Feature', description: 'Desc', iconName: 'Zap', span: 1 } },
      },
      defaultProps: { title: 'System Architecture', subtitle: 'Complete market dominance.', items: [] },
      render: ({ title, subtitle, items }) => (
        <div style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '8px' }}>{title}</h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '48px' }}>{subtitle}</p>
          <BentoGrid>{items.map((item, i) => { const Icon = IconMap[item.iconName] || Zap; return <BentoItem key={i} title={item.title} description={item.description} icon={<Icon />} span={item.span} /> })}</BentoGrid>
        </div>
      ),
    },
    Services: {
      fields: {
        eyebrow: { type: 'text' }, title: { type: 'text' }, subtitle: { type: 'textarea' },
        items: { type: 'array', arrayFields: { title: { type: 'text' }, description: { type: 'textarea' }, iconName: { type: 'select', options: [{ label: 'Palette', value: 'Palette' }, { label: 'Megaphone', value: 'Megaphone' }, { label: 'Bot', value: 'Bot' }, { label: 'Code', value: 'Code' }] }, link: { type: 'text' } }, defaultItemProps: { title: 'Service', description: 'Desc', iconName: 'Code', link: '#' } },
      },
      defaultProps: { eyebrow: 'WHAT WE DO', title: 'Services Built for Growth', subtitle: 'Full-stack creative and technical solutions.', items: [] },
      render: ({ eyebrow, title, subtitle, items }) => <ServicesGrid eyebrow={eyebrow} title={title} subtitle={subtitle} items={items.map((item) => ({ ...item, href: (item as any).href || item.link || '#' }))} />,
    },
    Testimonials: {
      fields: { title: { type: 'text' }, reviews: { type: 'array', arrayFields: { text: { type: 'textarea' }, name: { type: 'text' }, role: { type: 'text' } }, defaultItemProps: { text: 'Great!', name: 'Client', role: 'CEO' } } },
      defaultProps: { title: 'Success Stories', reviews: [] },
      render: (props) => <Testimonials {...props} />,
    },
    ProblemSection: { render: () => <ProblemSection /> },
    ValueProp: { render: () => <ValueProp /> },
    FAQ: { render: () => <FAQ /> },
    MagazineGrid: { render: () => <MagazineGrid /> },
    LeadMagnet: { render: () => <LeadMagnet /> },
    LeadCapture: { render: () => <LeadCapture /> },
    InlineCTA: {
      fields: { variant: { type: 'radio', options: [{ label: 'Audit', value: 'audit' }, { label: 'Consultation', value: 'consultation' }, { label: 'Newsletter', value: 'newsletter' }] } as any },
      defaultProps: { variant: 'audit' },
      render: ({ variant }) => <InlineCTA variant={variant} />,
    },
    ROICalculator: { render: () => <ROICalculator /> },
    PromptCarousel: { render: () => <PromptCarousel /> },
    BookingWidget: { render: () => <BookingWidget /> },
    IntelligenceBrief: { render: () => <IntelligenceBrief /> },
    ResourceFeed: { render: () => <ResourceFeed /> },
    AIQuiz: { render: () => <AIQuiz /> },
  },
}
