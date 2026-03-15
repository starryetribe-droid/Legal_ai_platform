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
    <div className="apple-card" style={{ flex: 1 }}>
      <p className="card-title" style={{ color: 'var(--apple-secondary-text)', fontSize: '16px' }}>{label}</p>
      <p className="stat-value">{value}</p>
      <div className={isUp ? 'trend-up' : 'trend-down'}>
        {showIcon && (isUp ? '▲' : '▼')} {trend}
      </div>
    </div>
  );
};

export default StatCard;
