'use client';
import Link from 'next/link';

export default function TelegramTeaser() {
  const features = [
    { icon: '🤖', label: 'AI Group Discovery' },
    { icon: '✍️', label: 'GPT-4o Content Engine' },
    { icon: '🎯', label: 'Lead Scoring AI' },
    { icon: '📩', label: '3-Step DM Sequences' },
    { icon: '📊', label: 'Live Analytics Dashboard' },
    { icon: '⚡', label: 'Instant Lead Alerts' },
  ];
  const stats = [
    { value: '47+', label: 'Groups Monitored' },
    { value: '1,284', label: 'Leads Scraped/Week' },
    { value: '612', label: 'DMs Sent' },
    { value: '£142k', label: 'Pipeline Value' },
  ];
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0d0d1a 0%, #0a0a1f 40%, #0d1a2e 100%)',
      borderTop: '1px solid rgba(99,102,241,0.3)',
      borderBottom: '1px solid rgba(99,102,241,0.3)',
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow */}
      <div style={{ position:'absolute', top:'-80px', left:'50%', transform:'translateX(-50%)', width:'600px', height:'300px', background:'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Badge */}
        <div style={{ textAlign:'center', marginBottom:'12px' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'linear-gradient(90deg,rgba(99,102,241,0.25),rgba(6,182,212,0.25))', border:'1px solid rgba(99,102,241,0.5)', borderRadius:'999px', padding:'6px 18px', fontSize:'0.78rem', fontWeight:700, color:'#a5b4fc', letterSpacing:'0.08em', textTransform:'uppercase' }}>
            <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#6366f1', display:'inline-block', animation:'pulse 2s infinite' }} />
            New Product · Live Now
          </span>
        </div>
        {/* Heading */}
        <h2 style={{ textAlign:'center', fontSize:'clamp(2rem,5vw,3.2rem)', fontWeight:800, color:'#fff', marginBottom:'16px', lineHeight:1.15 }}>
          Telegram <span style={{ background:'linear-gradient(90deg,#6366f1,#06b6d4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Growth Engine</span>
        </h2>
        <p style={{ textAlign:'center', fontSize:'1.15rem', color:'rgba(255,255,255,0.65)', maxWidth:'560px', margin:'0 auto 48px', lineHeight:1.7 }}>
          Fully automated Telegram lead generation — scrape groups, score leads, send DM sequences, and track your pipeline. All on autopilot.
        </p>
        {/* Stats bar */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px', marginBottom:'48px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:'16px', padding:'24px 16px', textAlign:'center', backdropFilter:'blur(12px)' }}>
              <div style={{ fontSize:'2rem', fontWeight:800, background:'linear-gradient(135deg,#a5b4fc,#67e8f9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1.1 }}>{s.value}</div>
              <div style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.5)', marginTop:'6px', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </div>
        {/* Features grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'12px', marginBottom:'48px' }}>
          {features.map((f, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:'12px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'14px 18px', backdropFilter:'blur(8px)' }}>
              <span style={{ fontSize:'1.3rem' }}>{f.icon}</span>
              <span style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.8)', fontWeight:500 }}>{f.label}</span>
            </div>
          ))}
        </div>
        {/* CTAs */}
        <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/telegram-growth" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'linear-gradient(135deg,#6366f1,#4f46e5)', color:'#fff', padding:'14px 32px', borderRadius:'12px', fontWeight:700, fontSize:'1rem', textDecoration:'none', boxShadow:'0 8px 32px rgba(99,102,241,0.4)' }}>
            🚀 See How It Works
          </Link>
          <Link href="/telegram-growth" style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.15)', color:'#fff', padding:'14px 32px', borderRadius:'12px', fontWeight:600, fontSize:'1rem', textDecoration:'none' }}>
            📊 View Live Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
