import React from 'react';

const InsightBanner: React.FC = () => {
    return (
        <div className="insight-banner" style={{
            background: '#fff9e6',
            borderRadius: '12px',
            padding: '8px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            margin: '8px 0',
            border: '1px solid #ffeeba'
        }}>
            <span style={{ fontSize: '20px' }}>💡</span>
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#856404' }}>
                <span style={{ fontWeight: 700 }}>시사점:</span> 제도 불신 심화로 행정·사법적 해결 의존 경향 확대 → 전문 법률·상담 서비스 수요 급증 구조
            </p>
        </div>
    );
};

export default InsightBanner;
