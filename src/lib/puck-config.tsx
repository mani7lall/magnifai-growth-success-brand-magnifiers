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

// Define component types
export type HeroProps = {
    badgeText: string
    title: string
    description: string
    primaryCtaText: string
    primaryCtaLink: string
    secondaryCtaText: string
    secondaryCtaLink: string
}

export type StatsProps = {
    items: Array<{ value: string; label: string }>
}

export type BentoGridProps = {
    title: string
    subtitle: string
    items: Array<{
        title: string
        description: string
        iconName: 'Bot' | 'Zap' | 'Globe' | 'Database'
        span: 1 | 2
    }>
}

export type TrustedByProps = {
    title: string
    companies: Array<{ name: string }>
}

export type ServicesProps = {
    eyebrow: string
    title: string
    subtitle: string
    items: Array<{
        title: string
        description: string
        iconName: 'Palette' | 'Megaphone' | 'Bot' | 'Code'
        link: string
    }>
}

export type TestimonialsProps = {
    title: string
    reviews: Array<{
        text: string
        name: string
        role: string
    }>
}

// Puck configuration
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
    InlineCTA: {
        variant: 'audit' | 'consultation' | 'newsletter'
    }
    ROICalculator: {}
    PromptCarousel: {}
    BookingWidget: {}
    IntelligenceBrief: {}
    ResourceFeed: {}
    AIQuiz: {}
}

// Helper for icons
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
                description: 'Stop relying on luck. We build automated AI pipelines that target, nurture, and close your ideal clients.',
                primaryCtaText: 'Start Growth Engine',
                primaryCtaLink: '/book',
                secondaryCtaText: 'View System Architecture',
                secondaryCtaLink: '/case-studies',
            },
            render: (props) => <HomeHero {...props} />,
        },
        Stats: {
            fields: {
                items: {
                    type: 'array',
                    arrayFields: {
                        value: { type: 'text' },
                        label: { type: 'text' },
                    },
                    defaultItemProps: { value: '100+', label: 'Clients' }
                }
            },
            defaultProps: {
                items: [
                    { value: "4x", label: "Faster Execution" },
                    { value: "98%", label: "Open Rates" },
                    { value: "24/7", label: "AI Operation" },
                    { value: "< 7 Days", label: "To Launch" }
                ]
            },
            render: ({ items }) => <StatsCounter items={items} />
        },
        TrustedBy: {
            fields: {
                title: { type: 'text' },
                companies: {
                    type: 'array',
                    arrayFields: { name: { type: 'text' } },
                    defaultItemProps: { name: 'Company Name' }
                }
            },
            defaultProps: {
                title: 'Trusted by teams automating the future',
                companies: [{ name: 'TechCorp' }, { name: 'DataFlow' }, { name: 'AI Ventures' }, { name: 'Nebula Systems' }]
            },
            render: (props) => <TrustedBy {...props} />
        },
        BentoGrid: {
            fields: {
                title: { type: 'text' },
                subtitle: { type: 'textarea' },
                items: {
                    type: 'array',
                    arrayFields: {
                        title: { type: 'text' },
                        description: { type: 'textarea' },
                        iconName: { type: 'select', options: [{ label: 'Bot', value: 'Bot' }, { label: 'Zap', value: 'Zap' }, { label: 'Globe', value: 'Globe' }, { label: 'Database', value: 'Database' }] },
                        span: { type: 'select', options: [{ label: '1 Column', value: 1 }, { label: '2 Columns', value: 2 }] }
                    },
                    defaultItemProps: { title: 'Feature', description: 'Description', iconName: 'Zap', span: 1 }
                }
            },
            defaultProps: {
                title: 'System Architecture',
                subtitle: 'A modular, scalable ecosystem designed for complete market dominance.',
                items: [
                    { title: 'AI Agents Swarm', description: 'Autonomous agents that handle outreach 24/7.', iconName: 'Bot', span: 2 },
                    { title: 'Visual Intelligence', description: 'Generative UI adapting in real-time.', iconName: 'Zap', span: 1 },
                ]
            },
            render: ({ title, subtitle, items }) => (
                <section style={{ padding: '80px 20px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontFamily: 'var(--font-playfair)', color: '#fff' }}>{title}</h2>
                        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>{subtitle}</p>
                        <BentoGrid>
                            {items.map((item, i) => {
                                const Icon = IconMap[item.iconName] || Zap;
                                return (
                                    <BentoItem
                                        key={i}
                                        title={item.title}
                                        description={item.description}
                                        icon={<Icon size={32} />}
                                        span={item.span}
                                    />
                                )
                            })}
                        </BentoGrid>
                    </div>
                </section>
            )
        },
        Services: {
            fields: {
                eyebrow: { type: 'text' },
                title: { type: 'text' },
                subtitle: { type: 'textarea' },
                items: {
                    type: 'array',
                    arrayFields: {
                        title: { type: 'text' },
                        description: { type: 'textarea' },
                        iconName: { type: 'select', options: [{ label: 'Palette', value: 'Palette' }, { label: 'Megaphone', value: 'Megaphone' }, { label: 'Bot', value: 'Bot' }, { label: 'Code', value: 'Code' }] },
                        link: { type: 'text' }
                    },
                    defaultItemProps: { title: 'Service', description: 'Description', iconName: 'Code', link: '#' }
                }
            },
            defaultProps: {
                eyebrow: 'WHAT WE DO',
                title: 'Services Built for Growth',
                subtitle: 'Full-stack creative and technical solutions.',
                items: []
            },
            render: ({ eyebrow, title, subtitle, items }) => (
                <ServicesGrid
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    items={items?.map(item => ({
                        ...item,
                        href: (item as any).href || item.link || '#'
                    }))}
                />
            )
        },
        Testimonials: {
            fields: {
                title: { type: 'text' },
                reviews: {
                    type: 'array',
                    arrayFields: {
                        text: { type: 'textarea' },
                        name: { type: 'text' },
                        role: { type: 'text' }
                    },
                    defaultItemProps: { text: "Great result!", name: "Client Name", role: "CEO" }
                }
            },
            defaultProps: {
                title: 'Success Stories',
                reviews: [
                    { text: "The ROI calculator alone saved us 40 hours of implementation time.", name: "Sarah Jenkins", role: "CTO at TechFlow" },
                ]
            },
            render: (props) => <Testimonials {...props} />
        },
        ProblemSection: {
            render: () => <ProblemSection />
        },
        ValueProp: {
            render: () => <ValueProp />
        },
        FAQ: {
            render: () => <FAQ />
        },
        MagazineGrid: {
            render: () => <MagazineGrid />
        },
        LeadMagnet: {
            render: () => <LeadMagnet />
        },
        LeadCapture: {
            render: () => <LeadCapture />
        },
        InlineCTA: {
            fields: {
                variant: {
                    type: 'radio',
                    options: [
                        { label: 'Audit (Green)', value: 'audit' },
                        { label: 'Consultation (Calendar)', value: 'consultation' },
                        { label: 'Newsletter (Purple)', value: 'newsletter' }
                    ]
                } as any
            },
            defaultProps: {
                variant: 'audit'
            },
            render: ({ variant }) => <InlineCTA variant={variant} />
        },
        ROICalculator: {
            render: () => (
                <Section theme="light">
                    <h2 style={{ textAlign: 'center', fontSize: '3.5rem', fontFamily: 'var(--font-playfair)', color: '#000', marginBottom: '1rem', lineHeight: 1 }}>Calculate Your Upside</h2>
                    <p style={{ textAlign: 'center', color: '#475569', fontSize: '1.25rem', marginBottom: '3rem' }}>Don&apos;t guess. Use our proprietary models to project your automation ROI.</p>
                    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '3rem', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
                        <ROICalculator />
                    </div>
                </Section>
            )
        },
        PromptCarousel: {
            render: () => <PromptCarousel />
        },
        BookingWidget: {
            render: () => (
                <Section theme="dark">
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
                        <BookingWidget />
                    </div>
                </Section>
            )
        },
        IntelligenceBrief: {
            render: () => (
                <Section theme="dark">
                    <IntelligenceBrief />
                </Section>
            )
        },
        ResourceFeed: {
            render: () => (
                <Section theme="dark">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '0rem' }}>The Sovereign Archives</h2>
                    <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem' }}>
                        Specialized internal tooling, prompt libraries, and deployment frameworks.
                    </p>
                    <ResourceFeed />
                </Section>
            )
        },
        AIQuiz: {
            // AIQuiz handles its own section wrapper
            render: () => <AIQuiz />
        }
    },
}
