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
            padding: '16px',
            minHeight: '440px'
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
                    fontWeight: 700,
                    fontSize: '18px'
                }}>
                    {type}
                </div>
                <div>
                    <div style={{ fontSize: '16px', fontWeight: 700 }}>{label}</div>
                    <div style={{ fontSize: '13px', color: 'var(--apple-secondary-text)' }}>{subLabel}</div>
                </div>
            </div>

            <div style={{
                fontStyle: 'italic',
                fontSize: '15px',
                padding: '12px',
                backgroundColor: 'rgba(0,0,0,0.03)',
                borderRadius: '8px',
                lineHeight: '1.4',
                color: '#333'
            }}>
                "{quote}"
            </div>

            <div>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--apple-secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Painpoint</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {painPoints.map((point, idx) => (
                        <li key={idx} style={{ fontSize: '14px', marginBottom: '4px', display: 'flex', alignItems: 'flex-start', gap: '6px', lineHeight: '1.3' }}>
                            <span style={{ color: color, fontSize: '16px', lineHeight: '1' }}>•</span> {point}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ marginTop: 'auto' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--apple-secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Needs</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {needs.map((need, idx) => (
                        <div key={idx} style={{
                            fontSize: '14px',
                            padding: '6px 10px',
                            borderRadius: '8px',
                            backgroundColor: `${color}15`,
                            color: color,
                            fontWeight: 600,
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
