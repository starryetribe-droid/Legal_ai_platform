import React from 'react';

interface PersonaCardProps {
    type: string;
    label: string;
    subLabel: string;
    color: string;
    quote: string;
    painPoints: string[];
    needs: string[];
}

const PersonaCard: React.FC<PersonaCardProps> = ({ type, label, subLabel, color, quote, painPoints, needs }) => {
    return (
        <div className="apple-card" style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '24px',
            backgroundColor: '#ffffff'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: `${color}20`,
                    color: color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '20px'
                }}>
                    {type}
                </div>
                <div>
                    <div style={{ fontSize: '19px', fontWeight: 800, color: '#1d1d1f' }}>{label}</div>
                    <div style={{ fontSize: '13px', color: 'var(--apple-secondary-text)', marginTop: '2px' }}>{subLabel}</div>
                </div>
            </div>

            <div style={{
                fontStyle: 'italic',
                fontSize: '14px',
                padding: '12px',
                backgroundColor: 'rgba(0,0,0,0.03)',
                borderRadius: '8px',
                lineHeight: '1.4',
                color: '#333',
                minHeight: '88px',
                display: 'flex',
                alignItems: 'center'
            }}>
                "{quote}"
            </div>

            <div style={{ marginTop: '24px', borderLeft: `3px solid ${color}`, paddingLeft: '12px' }}>
                <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '6px', color: color, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Painpoint</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {painPoints.map((point, idx) => (
                        <li key={idx} style={{ fontSize: '14px', marginBottom: '4px', display: 'flex', alignItems: 'flex-start', gap: '6px', lineHeight: '1.3' }}>
                            <span style={{ color: color, fontSize: '16px', lineHeight: '1' }}>•</span> <span style={{ color: '#333' }}>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ marginTop: '24px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: color, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Needs</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {needs.map((need, idx) => (
                        <div key={idx} style={{
                            fontSize: '16px',
                            padding: '8px 10px',
                            borderRadius: '8px',
                            backgroundColor: `${color}15`,
                            color: color,
                            fontWeight: 800,
                            textAlign: 'center'
                        }}>
                            {need}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PersonaCard;
