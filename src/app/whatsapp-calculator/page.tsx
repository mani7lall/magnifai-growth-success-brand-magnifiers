'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import AIROICalculator from '@/components/AIROICalculator';
import styles from './page.module.css';
import {
    MessageCircle,
    TrendingUp,
    DollarSign,
    Clock,
    Users,
    Zap,
    ArrowRight,
    CheckCircle,
    BarChart3,
    Sparkles,
    Building,
    ShoppingBag,
    Utensils,
    Briefcase,
    GraduationCap,
    Heart
} from 'lucide-react';

// Industry data for realistic calculations
const INDUSTRIES = [
    {
        id: 'ecommerce',
        label: 'E-Commerce / Retail',
        icon: ShoppingBag,
        conversionRate: 0.08,
        avgOrderMultiplier: 1.0,
        description: 'Online stores, D2C brands'
    },
    {
        id: 'restaurant',
        label: 'Restaurant / Food',
        icon: Utensils,
        conversionRate: 0.12,
        avgOrderMultiplier: 0.6,
        description: 'Cafes, restaurants, cloud kitchens'
    },
    {
        id: 'services',
        label: 'Professional Services',
        icon: Briefcase,
        conversionRate: 0.06,
        avgOrderMultiplier: 2.5,
        description: 'Consultants, agencies, freelancers'
    },
    {
        id: 'realestate',
        label: 'Real Estate',
        icon: Building,
        conversionRate: 0.03,
        avgOrderMultiplier: 50,
        description: 'Agents, builders, property managers'
    },
    {
        id: 'education',
        label: 'Education / Coaching',
        icon: GraduationCap,
        conversionRate: 0.07,
        avgOrderMultiplier: 1.5,
        description: 'Tutors, course creators, coaches'
    },
    {
        id: 'health',
        label: 'Health & Wellness',
        icon: Heart,
        conversionRate: 0.09,
        avgOrderMultiplier: 1.2,
        description: 'Clinics, gyms, wellness centers'
    }
];

// Benchmark data
const CHANNEL_BENCHMARKS = {
    whatsapp: { openRate: 98, responseRate: 45, conversionLift: 3.0 },
    email: { openRate: 20, responseRate: 2, conversionLift: 1.0 },
    sms: { openRate: 90, responseRate: 15, conversionLift: 1.8 }
};

export default function WhatsAppCalculatorPage() {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [monthlyContacts, setMonthlyContacts] = useState(500);
    const [avgOrderValue, setAvgOrderValue] = useState(2000);
    const [currentResponseTime, setCurrentResponseTime] = useState(4);
    const [showModal, setShowModal] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const industry = INDUSTRIES.find(i => i.id === selectedIndustry);

    const calculations = useMemo(() => {
        if (!industry) return null;

        const baseConversions = monthlyContacts * industry.conversionRate;
        const whatsappConversions = baseConversions * CHANNEL_BENCHMARKS.whatsapp.conversionLift;
        const additionalConversions = whatsappConversions - baseConversions;

        const additionalRevenue = additionalConversions * avgOrderValue;
        const yearlyRevenue = additionalRevenue * 12;

        // Time savings calculation
        const manualHoursPerLead = 0.25; // 15 min per lead
        const automatedHoursPerLead = 0.05; // 3 min per lead
        const hoursSaved = monthlyContacts * (manualHoursPerLead - automatedHoursPerLead);

        // Response time improvement
        const improvedResponseTime = Math.max(0.1, currentResponseTime * 0.1); // 90% faster

        return {
            currentConversions: Math.round(baseConversions),
            whatsappConversions: Math.round(whatsappConversions),
            additionalConversions: Math.round(additionalConversions),
            monthlyRevenue: Math.round(additionalRevenue),
            yearlyRevenue: Math.round(yearlyRevenue),
            hoursSaved: Math.round(hoursSaved),
            improvedResponseTime: improvedResponseTime.toFixed(1),
            roiMultiple: Math.round((yearlyRevenue / 40000) * 10) / 10 // Assuming ₹40K investment
        };
    }, [industry, monthlyContacts, avgOrderValue, currentResponseTime]);

    const handleCalculate = () => {
        if (!selectedIndustry) return;
        setShowModal(true);
    };

    const handleEmailSuccess = (email: string) => {
        setUserEmail(email);
        setShowModal(false);
        setShowResults(true);
    };

    const formatCurrency = (amount: number) => {
        if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
        if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
        if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
        return `₹${amount}`;
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                {!showResults ? (
                    <div className={styles.container}>
                        {/* Hero */}
                        <div className={styles.hero}>
                            <span className={styles.badge}>
                                <MessageCircle size={14} />
                                Free Calculator
                            </span>
                            <h1 className={styles.title}>
                                How Much Revenue is
                                <span className={styles.gradient}> WhatsApp </span>
                                Worth to Your Business?
                            </h1>
                            <p className={styles.subtitle}>
                                Calculate your potential ROI with WhatsApp marketing automation.
                                Get real numbers based on your industry and current performance.
                            </p>
                        </div>

                        {/* Calculator Card */}
                        <div className={styles.calculatorCard}>
                            {/* Industry Selection */}
                            <div className={styles.section}>
                                <label className={styles.label}>
                                    <Building size={18} />
                                    Select Your Industry
                                </label>
                                <div className={styles.industryGrid}>
                                    {INDUSTRIES.map((ind) => {
                                        const Icon = ind.icon;
                                        return (
                                            <button
                                                key={ind.id}
                                                className={`${styles.industryCard} ${selectedIndustry === ind.id ? styles.selected : ''}`}
                                                onClick={() => setSelectedIndustry(ind.id)}
                                            >
                                                <Icon size={24} />
                                                <span className={styles.industryLabel}>{ind.label}</span>
                                                <span className={styles.industryDesc}>{ind.description}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Inputs */}
                            {selectedIndustry && (
                                <>
                                    <div className={styles.inputsGrid}>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.inputLabel}>
                                                <Users size={16} />
                                                Monthly Customer Contacts
                                            </label>
                                            <input
                                                type="range"
                                                min="100"
                                                max="10000"
                                                step="100"
                                                value={monthlyContacts}
                                                onChange={(e) => setMonthlyContacts(Number(e.target.value))}
                                                className={styles.slider}
                                            />
                                            <div className={styles.sliderValue}>
                                                <span>{monthlyContacts.toLocaleString()}</span>
                                                <span className={styles.sliderUnit}>contacts/month</span>
                                            </div>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label className={styles.inputLabel}>
                                                <DollarSign size={16} />
                                                Average Order Value
                                            </label>
                                            <input
                                                type="range"
                                                min="500"
                                                max="50000"
                                                step="500"
                                                value={avgOrderValue}
                                                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                                                className={styles.slider}
                                            />
                                            <div className={styles.sliderValue}>
                                                <span>₹{avgOrderValue.toLocaleString()}</span>
                                                <span className={styles.sliderUnit}>per order</span>
                                            </div>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label className={styles.inputLabel}>
                                                <Clock size={16} />
                                                Current Response Time
                                            </label>
                                            <input
                                                type="range"
                                                min="1"
                                                max="24"
                                                step="1"
                                                value={currentResponseTime}
                                                onChange={(e) => setCurrentResponseTime(Number(e.target.value))}
                                                className={styles.slider}
                                            />
                                            <div className={styles.sliderValue}>
                                                <span>{currentResponseTime}</span>
                                                <span className={styles.sliderUnit}>hours avg</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Live Preview */}
                                    {calculations && (
                                        <div className={styles.previewBox}>
                                            <div className={styles.previewItem}>
                                                <TrendingUp size={20} />
                                                <span>Potential Monthly Revenue Boost:</span>
                                                <strong>{formatCurrency(calculations.monthlyRevenue)}</strong>
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA Button */}
                                    <button
                                        className={styles.calculateBtn}
                                        onClick={handleCalculate}
                                    >
                                        <Sparkles size={18} />
                                        Get Full ROI Analysis
                                        <ArrowRight size={18} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Comparison Section */}
                        <div className={styles.comparisonSection}>
                            <h3>Why WhatsApp?</h3>
                            <div className={styles.comparisonGrid}>
                                <div className={styles.comparisonCard}>
                                    <div className={styles.comparisonHeader}>
                                        <MessageCircle size={20} />
                                        <span>WhatsApp</span>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Open Rate</span>
                                        <strong className={styles.highlight}>98%</strong>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Response Rate</span>
                                        <strong className={styles.highlight}>45%</strong>
                                    </div>
                                </div>
                                <div className={styles.comparisonCard}>
                                    <div className={styles.comparisonHeader}>
                                        <span>📧</span>
                                        <span>Email</span>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Open Rate</span>
                                        <strong>20%</strong>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Response Rate</span>
                                        <strong>2%</strong>
                                    </div>
                                </div>
                                <div className={styles.comparisonCard}>
                                    <div className={styles.comparisonHeader}>
                                        <span>💬</span>
                                        <span>SMS</span>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Open Rate</span>
                                        <strong>90%</strong>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Response Rate</span>
                                        <strong>15%</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Results Section */
                    <div className={styles.resultsContainer}>
                        <div className={styles.resultsHeader}>
                            <h1>Your WhatsApp ROI Analysis</h1>
                            <p>Personalized projections for {industry?.label}</p>
                        </div>

                        {calculations && (
                            <>
                                {/* Main Metrics */}
                                <div className={styles.metricsGrid}>
                                    <div className={styles.metricCard + ' ' + styles.primary}>
                                        <DollarSign size={32} />
                                        <span className={styles.metricValue}>{formatCurrency(calculations.yearlyRevenue)}</span>
                                        <span className={styles.metricLabel}>Yearly Revenue Potential</span>
                                    </div>
                                    <div className={styles.metricCard}>
                                        <TrendingUp size={24} />
                                        <span className={styles.metricValue}>{calculations.roiMultiple}x</span>
                                        <span className={styles.metricLabel}>ROI Multiple</span>
                                    </div>
                                    <div className={styles.metricCard}>
                                        <Clock size={24} />
                                        <span className={styles.metricValue}>{calculations.hoursSaved}hrs</span>
                                        <span className={styles.metricLabel}>Saved Monthly</span>
                                    </div>
                                    <div className={styles.metricCard}>
                                        <Zap size={24} />
                                        <span className={styles.metricValue}>{calculations.improvedResponseTime}hr</span>
                                        <span className={styles.metricLabel}>New Response Time</span>
                                    </div>
                                </div>

                                {/* Conversion Comparison */}
                                <div className={styles.conversionSection}>
                                    <h3><BarChart3 size={20} /> Conversion Improvement</h3>
                                    <div className={styles.conversionBars}>
                                        <div className={styles.conversionRow}>
                                            <span className={styles.conversionLabel}>Current</span>
                                            <div className={styles.barWrapper}>
                                                <div
                                                    className={styles.bar + ' ' + styles.barCurrent}
                                                    style={{ width: `${(calculations.currentConversions / calculations.whatsappConversions) * 100}%` }}
                                                />
                                            </div>
                                            <span className={styles.conversionValue}>{calculations.currentConversions}/mo</span>
                                        </div>
                                        <div className={styles.conversionRow}>
                                            <span className={styles.conversionLabel}>With WhatsApp</span>
                                            <div className={styles.barWrapper}>
                                                <div
                                                    className={styles.bar + ' ' + styles.barWhatsapp}
                                                    style={{ width: '100%' }}
                                                />
                                            </div>
                                            <span className={styles.conversionValue}>{calculations.whatsappConversions}/mo</span>
                                        </div>
                                    </div>
                                    <p className={styles.conversionNote}>
                                        That&apos;s <strong>+{calculations.additionalConversions} additional conversions</strong> per month!
                                    </p>
                                </div>

                                {/* What's Included */}
                                <div className={styles.includedSection}>
                                    <h3>What You Get With WhatsApp Automation:</h3>
                                    <ul>
                                        <li><CheckCircle size={18} /> Automated welcome messages & FAQs</li>
                                        <li><CheckCircle size={18} /> Instant responses 24/7</li>
                                        <li><CheckCircle size={18} /> Broadcast campaigns to all contacts</li>
                                        <li><CheckCircle size={18} /> Cart abandonment recovery</li>
                                        <li><CheckCircle size={18} /> Order updates & tracking</li>
                                        <li><CheckCircle size={18} /> Lead qualification chatbot</li>
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className={styles.ctaSection}>
                                    <h3>Ready to Unlock This Revenue?</h3>
                                    <p>Let&apos;s build your WhatsApp automation system.</p>
                                    <a
                                        href="https://calendly.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.ctaButton}
                                    >
                                        <Sparkles size={18} />
                                        Book Free Strategy Call
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* AI ROI CALCULATOR */}
                <AIROICalculator />

                {/* Lead Capture Modal */}
                <LeadCaptureModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSuccess={handleEmailSuccess}
                    source="whatsapp-calculator"
                    title="Get Your Full ROI Report"
                    subtitle="See detailed projections and implementation roadmap"
                    ctaText="Get My Report"
                    benefits={[
                        `Yearly revenue projection for ${industry?.label || 'your industry'}`,
                        "ROI breakdown & payback period",
                        "Implementation timeline",
                        "Comparison with competitors"
                    ]}
                />
            </main>
            <Footer />
        </>
    );
}
