import React from 'react';
import StatCard from './StatCard';
import InsightBanner from './InsightBanner';
import ChartSection from './ChartSection';
import PolicyCard from './PolicyCard';

const MarketOverviewSlide: React.FC = () => {
    return (
        <section className="slide-section">
            <div className="slide-container">
                {/* Top Badge */}
                <div style={{
                    backgroundColor: '#1d1d1f',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '16px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    width: 'fit-content',
                    marginBottom: '12px',
                    letterSpacing: '0.05em'
                }}>
                    Market Overview
                </div>

                <h1 className="hero-title" style={{ fontSize: '32px', marginBottom: '12px' }}>학교폭력 사안 5년간 2.3배 급증,<br />법적 분쟁 시장은 구조적 성장 국면 진입</h1>

                {/* Stats Grid */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '4px' }}>
                    <StatCard label="학폭 사안 접수 (2024)" value="58,502건" trend="2.3배 (2020년 대비)" />
                    <StatCard label="학폭위 회부 (2024)" value="27,835건" trend="3.3배 (2020년 대비)" />
                    <StatCard label="가해학생 행정소송 (2024)" value="444건" trend="2.2배 (2021년 대비)" />
                    <StatCard label="피해학생 행정소송 (2024)" value="96건" trend="1.8배 (2021년 대비)" />
                </div>

                <ChartSection />

                {/* Bottom Section */}
                <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                    <h2 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        📑 2026학년도 대입 학폭 반영 제도 변화 — 수요 확대 트리거
                    </h2>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <PolicyCard
                            title="전 대학·전 전형 의무 반영"
                            description={
                                <p>수시+정시 모든 전형에서 학폭 조치사항 <strong style={{ color: 'var(--apple-red)' }}>의무 반영</strong> (학생부 교과·종합·수능·논술·실기)</p>
                            }
                        />
                        <PolicyCard
                            title="조치 등급별 기재 기간"
                            description={
                                <div>
                                    <p>1~3호 초범: 생기부 기재 유보 가능</p>
                                    <p><strong style={{ color: 'var(--apple-red)' }}>4호 이상 즉시 기재</strong></p>
                                    <p>6~8호: 졸업 후 최대 2→<strong style={{ color: 'var(--apple-red)' }}>4년 연장</strong></p>
                                </div>
                            }
                        />
                        <PolicyCard
                            title="학폭위 조치 전 자퇴 불가"
                            description={
                                <p>기재 회피 목적의 자퇴 방지 조치<br />→ <strong style={{ color: 'var(--apple-blue)' }}> 법적 대응 수요 구조화</strong></p>
                            }
                        />
                    </div>
                </div>

                <InsightBanner />
                <div className="slide-footer">
                    <p className="caption-text">출처: 교육부 / 국회 진선미 의원실 (2025.09) · 교육부 2025년 1차 학폭 실태조사 (2025.09) · 교육부·대교협 '2026학년도 대입전형기본사항'</p>
                    <p className="caption-text">대상: 초4~고3 전체 1,128,706명 · 참여율 82.2%</p>
                </div>
            </div>
        </section>
    );
};

export default MarketOverviewSlide;
