import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  isUp?: boolean;
  showIcon?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, isUp = true, showIcon = true }) => {
  return (
    <div className="apple-card" style={{ flex: 1, padding: '16px 20px' }}>
      <p className="card-title" style={{ color: 'var(--apple-secondary-text)', fontSize: '17px', margin: '0 0 8px 0' }}>{label}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <p className="stat-value" style={{ margin: 0, lineHeight: '1' }}>{value}</p>
        <div className={isUp ? 'trend-up' : 'trend-down'} style={{ fontSize: '14px', margin: 0 }}>
          {showIcon && (isUp ? '▲' : '▼')} {trend}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
