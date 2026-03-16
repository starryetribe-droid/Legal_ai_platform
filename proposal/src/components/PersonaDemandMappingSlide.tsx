import React from 'react';
import MappingTable from './MappingTable';

const PersonaDemandMappingSlide: React.FC = () => {
    return (
        <section className="slide-section">
            <div className="slide-container">
                <div className="slide-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div>
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
                            marginBottom: '18px',
                            letterSpacing: '0.05em'
                        }}>
                            Deep Dive Supplement
                        </div>

                        <div style={{ marginBottom: '50px' }}>
                            <h1 className="hero-title" style={{ fontSize: '32px', marginBottom: '12px', color: '#1d1d1f' }}>페르소나별 핵심 수요 상세 매핑</h1>
                            <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--apple-secondary-text)', marginBottom: '0' }}>
                                — 문제 상황(Trigger)에 따른 서비스 기능의 정밀 기술 매칭 데이터
                            </h2>
                        </div>
                    </div>

                    <div style={{ marginTop: '0' }}>
                        <MappingTable />
                    </div>
                </div>

                <div className="slide-footer">
                    <p className="caption-text">기반: 5대 핵심 페르소나 인터뷰 및 행동 패턴 분석 데이터</p>
                    <p className="caption-text">분석 기준: 2025년 법적 분쟁 트렌드 및 수요 매핑</p>
                </div>
            </div>
        </section>
    );
};

export default PersonaDemandMappingSlide;
