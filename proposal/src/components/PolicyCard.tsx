import React from 'react';

interface PolicyCardProps {
    title: string;
    description: React.ReactNode;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ title, description }) => {
    return (
        <div className="apple-card" style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #f2f2f7', padding: '16px' }}>
            <h4 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: '#1d1d1f' }}>{title}</h4>
            <div style={{ fontSize: '15px', color: '#86868b', lineHeight: 1.5 }}>{description}</div>
        </div>
    );
};

export default PolicyCard;
