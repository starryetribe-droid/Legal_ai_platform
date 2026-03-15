import React from 'react';

const ProblemDefinitionSlide: React.FC = () => {
    return (
        <section className="slide-section" style={{ backgroundColor: '#0a0a0b', color: 'white' }}>
            <div className="slide-container">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* Header Section */}
                    <div style={{ marginBottom: '40px' }}>
                        {/* Top Badge - Dark Mode Version */}
                        <div style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '16px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            width: 'fit-content',
                            marginBottom: '16px',
                            letterSpacing: '0.05em'
                        }}>
                            Problem Definition
                        </div>

                        <h1 className="hero-title" style={{
                            fontSize: '36px',
                            lineHeight: '1.2',
                            marginBottom: '12px',
                            color: 'white'
                        }}>
                            피해자는 <span style={{ color: '#ff6b35', backgroundColor: 'rgba(255,107,53,0.15)', padding: '0 8px', borderRadius: '4px' }}>'확신이 없거나 일이 커질까봐'</span> 멈추고,<br />
                            가해자는 <span style={{ color: '#00a6ff', backgroundColor: 'rgba(0,166,255,0.15)', padding: '0 8px', borderRadius: '4px' }}>'가해 인식이 없거나 일이 터지고 나서야'</span> 움직인다.
                        </h1>
                        <p style={{ fontSize: '20px', color: '#a1a1a6', fontWeight: 500 }}>
                            피해자는 '이게 폭력인지'조차 확신할 수 없거나, 부모님이 걱정하실까봐 멈추고 가해자는 문제가 생기기 전엔 찾아볼 이유가 없다.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px',
                        marginBottom: '40px'
                    }}>
                        {/* Left Card: Victim Side */}
                        <div className="apple-card" style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '18px',
                            padding: '48px 40px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minHeight: '320px'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                backgroundColor: '#ff6b35'
                            }} />

                            <p style={{ color: '#ff6b35', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>피해자 측</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div>
                                    <h2 style={{ fontSize: '72px', fontWeight: 800, marginBottom: '8px', color: '#ff6b35', letterSpacing: '-0.02em' }}>
                                        61% <span style={{ fontSize: '24px', fontWeight: 600, color: '#a1a1a6' }}>이상</span>
                                    </h2>
                                    <p style={{ fontSize: '20px', color: '#e5e5e7', lineHeight: '1.6' }}>
                                        언어폭력(39.1%) + 집단따돌림(16.4%) + 강요(5.8%)<br />
                                        전체 피해 유형의 절반 이상이<br />
                                        <span style={{ fontWeight: 700, color: '#ff6b35' }}>'확실한 증거가 남지 않는 유형'</span> — 판단 자체가 어려움
                                    </p>
                                </div>

                                <div style={{
                                    padding: '24px',
                                    backgroundColor: 'rgba(255,107,53,0.08)',
                                    borderRadius: '14px',
                                    border: '1px solid rgba(255,107,53,0.2)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '16px', color: '#ff6b35', fontWeight: 700 }}>신고율</span>
                                        <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#ff6b35' }}>45%</h3>
                                    </div>
                                    <p style={{ fontSize: '18px', color: '#ffffff', lineHeight: '1.5', fontWeight: 600 }}>
                                        절반 이상의 학생이 여전히 <span style={{ color: '#ff6b35' }}>침묵</span> 중
                                    </p>
                                    <p style={{ fontSize: '14px', color: '#a1a1a6', marginTop: '10px', lineHeight: '1.5' }}>
                                        "보복이 두려워서", "문제가 더 커질까봐",<br />
                                        "선생님도 해결해 주지 않을 것 같아서"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Perpetrator Side */}
                        <div className="apple-card" style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '18px',
                            padding: '48px 40px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minHeight: '320px'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                backgroundColor: '#00a6ff'
                            }} />

                            <p style={{ color: '#00a6ff', fontSize: '18px', fontWeight: 700, marginBottom: '24px' }}>가해자 측</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div>
                                    <h2 style={{ fontSize: '72px', fontWeight: 800, marginBottom: '8px', color: '#00a6ff', letterSpacing: '-0.02em' }}>
                                        장난이었다. 이유 없다.
                                    </h2>
                                    <p style={{ fontSize: '20px', color: '#e5e5e7', lineHeight: '1.6' }}>
                                        <span style={{ fontWeight: 700, color: '#00a6ff' }}>가해 이유 1위</span> '장난이었다' 또는 '이유 없다' 32% 응답<br />
                                        — 사안이 터지기 전까지 폭력 인식 자체가 적음
                                    </p>
                                </div>

                                <div style={{
                                    padding: '24px',
                                    backgroundColor: 'rgba(0,166,255,0.08)',
                                    borderRadius: '14px',
                                    border: '1px solid rgba(0,166,255,0.2)'
                                }}>
                                    <p style={{ fontSize: '20px', color: '#ffffff', lineHeight: '1.6', fontWeight: 600 }}>
                                        "폭력에 대한 교육적 성찰보다<br />
                                        <span style={{ color: '#00a6ff' }}>'법적 제재'</span>와 <span style={{ color: '#00a6ff' }}>'입시 영향'</span>으로만 인식"
                                    </p>
                                    <p style={{ fontSize: '16px', color: '#a1a1a6', marginTop: '12px', lineHeight: '1.5' }}>
                                        입시 제도 연계로 인해 학교폭력 여부를 오직<br /> 득실의 관점으로만 판단하는 구조적 문제 심화
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Sources */}
                <div className="slide-footer slide-footer-dark">
                    <p className="caption-text">출처: 교육부 2024년 1차 학교폭력 실태조사 (한국청소년정책연구원, 2024.9) · 푸른나무재단 학교폭력 실태조사 (2024)</p>
                    <p className="caption-text">분석: 교육부 학폭 제도 개선안 (2024.3) 연계 데이터</p>
                </div>
            </div>
        </section >
    );
};

export default ProblemDefinitionSlide;
