import React, { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

const PHONE = '919911449683';
const WA_BASE = `https://wa.me/${PHONE}?text=`;

const options = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    bg: 'linear-gradient(135deg, #25d366 0%, #128c5a 100%)',
    shadow: 'rgba(37,211,102,0.5)',
    href: WA_BASE + encodeURIComponent('नमस्ते! मुझे किडनी की पथरी के बारे में जानकारी चाहिए।'),
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: 'white', flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    id: 'chat',
    label: 'Chat with Doctor',
    bg: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    shadow: 'rgba(37,99,235,0.5)',
    href: WA_BASE + encodeURIComponent('नमस्ते डॉक्टर! मुझे किडनी की पथरी की समस्या है, कृपया मार्गदर्शन करें।'),
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', flexShrink: 0 }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 'meet',
    label: 'Meet with Doctor',
    bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    shadow: 'rgba(249,115,22,0.5)',
    href: null,         // internal — scroll to form
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: 'none', stroke: 'white', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', flexShrink: 0 }}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
  },
];

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest('#fab-container')) setOpen(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [open]);

  const handleOption = (opt) => {
    setOpen(false);
    if (opt.href && opt.external) {
      window.open(opt.href, '_blank', 'noopener,noreferrer');
    } else if (opt.id === 'meet') {
      document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="fab-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
    >
      {/* Option buttons — appear above main button */}
      {options.map((opt, i) => (
        <div
          key={opt.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.85)',
            pointerEvents: open ? 'auto' : 'none',
            transition: `all 0.25s cubic-bezier(0.34,1.56,0.64,1) ${open ? (options.length - 1 - i) * 0.07 : i * 0.05}s`,
          }}
        >
          {/* Label */}
          <div style={{
            background: 'rgba(15,23,42,0.88)',
            color: 'white',
            fontSize: '13px',
            fontWeight: 600,
            padding: '6px 14px',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
            letterSpacing: '0.01em',
          }}>
            {opt.label}
          </div>

          {/* Icon circle */}
          <button
            onClick={() => handleOption(opt)}
            aria-label={opt.label}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: '3px solid white',
              background: opt.bg,
              boxShadow: `0 4px 18px ${opt.shadow}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              outline: 'none',
              flexShrink: 0,
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {opt.icon}
          </button>
        </div>
      ))}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '3px solid white',
          background: open
            ? 'linear-gradient(135deg,#1f2937,#374151)'
            : 'linear-gradient(135deg,#15803d,#16a34a)',
          boxShadow: `0 6px 24px ${open ? 'rgba(0,0,0,0.4)' : 'rgba(22,163,74,0.55)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          transform: open ? 'rotate(360deg) scale(1.05)' : 'rotate(0deg) scale(1)',
        }}
      >
        {open
          ? <X style={{ width: 26, height: 26, color: 'white' }} />
          : <MessageCircle style={{ width: 26, height: 26, color: 'white', fill: 'rgba(255,255,255,0.2)' }} />
        }
      </button>
    </div>
  );
};

export default FloatingContact;
