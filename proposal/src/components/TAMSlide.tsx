import React from 'react';

const TAMSlide: React.FC = () => {
    return (
        <section className="slide-section" style={{ backgroundColor: '#fcfcfc', overflow: 'hidden' }}>
            <div className="slide-container" style={{ gap: '16px', padding: '30px 40px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                
                {/* Header Section */}
                <div style={{ flexShrink: 0 }}>
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
                        TOTAL ADDRESSABLE MARKET
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '28px', marginBottom: '12px' }}>
                        3개 도메인 합산 — 연간 64만 건 이상의 법적 분쟁
                    </h1>
                    <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--apple-secondary-text)', marginBottom: '50px' }}>
                        학교폭력·가정폭력·이혼, 동일한 3축 구조(진단→대응→회복)로 확장 가능한 시장
                    </h2>
                </div>

                {/* Hero Number Section */}
                <div style={{
                    backgroundColor: '#f5f5f0',
                    borderRadius: '16px',
                    padding: '20px 32px',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px',
                    marginBottom: '4px',
                    flexShrink: 0
                }}>
                    <span style={{ fontSize: '48px', fontWeight: 800, color: '#1d1d1f', lineHeight: 1 }}>64만+</span>
                    <span style={{ fontSize: '16px', color: '#48484a', fontWeight: 500 }}>건 / 연간 (추정 발생 + 접수 기준)</span>
                </div>

                {/* Domain Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '8px', flexShrink: 0 }}>
                    {/* MVP Card */}
                    <div className="apple-card" style={{ 
                        border: '2px solid #2A72E6', 
                        padding: '20px 24px', 
                        backgroundColor: '#ffffff',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            backgroundColor: '#eaf2ff',
                            color: '#2A72E6',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: 700,
                            width: 'fit-content',
                            marginBottom: '12px'
                        }}>
                            MVP — 1차 진입
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#2A72E6', marginBottom: '8px' }}>학교폭력</div>
                        <div style={{ fontSize: '36px', fontWeight: 800, color: '#1d1d1f', marginBottom: '6px', lineHeight: 1 }}>~13만</div>
                        <div style={{ fontSize: '14px', color: '#48484a', marginBottom: '14px', fontWeight: 500 }}>건 / 연 (추정 발생)</div>
                        <div style={{ height: '1px', backgroundColor: '#e5e5ea', marginBottom: '14px' }}></div>
                        <div style={{ fontSize: '12px', color: '#86868b', lineHeight: 1.4 }}>교육부 2024 · 심의 58,502건 · 신고율 45%</div>
                    </div>

                    {/* Domestic Violence Card */}
                    <div className="apple-card" style={{ 
                        border: '1px solid #e5e5ea', 
                        padding: '20px 24px', 
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#48484a', marginBottom: '8px', marginTop: '39px' }}>가정폭력</div>
                        <div style={{ fontSize: '36px', fontWeight: 800, color: '#1d1d1f', marginBottom: '6px', lineHeight: 1 }}>~24만</div>
                        <div style={{ fontSize: '14px', color: '#48484a', marginBottom: '14px', fontWeight: 500 }}>건 / 연 (112 신고)</div>
                        <div style={{ height: '1px', backgroundColor: '#e5e5ea', marginBottom: '14px' }}></div>
                        <div style={{ fontSize: '12px', color: '#86868b', lineHeight: 1.4 }}>경찰청 2024</div>
                    </div>

                    {/* Divorce Card */}
                    <div className="apple-card" style={{ 
                        border: '1px solid #e5e5ea', 
                        padding: '20px 24px', 
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#48484a', marginBottom: '8px', marginTop: '39px' }}>이혼 (재판상)</div>
                        <div style={{ fontSize: '36px', fontWeight: 800, color: '#1d1d1f', marginBottom: '6px', lineHeight: 1 }}>~27만</div>
                        <div style={{ fontSize: '14px', color: '#48484a', marginBottom: '14px', fontWeight: 500 }}>건 / 연 (법원 접수)</div>
                        <div style={{ height: '1px', backgroundColor: '#e5e5ea', marginBottom: '14px' }}></div>
                        <div style={{ fontSize: '12px', color: '#86868b', lineHeight: 1.4 }}>대법원 2024</div>
                    </div>
                </div>

                <div style={{ height: '1px', backgroundColor: '#e5e5ea', margin: '8px 0', flexShrink: 0 }}></div>

                {/* Why School Violence Section */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>왜 학교폭력부터 시작하는가</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                        
                        <div style={{ backgroundColor: '#e2eaff', borderRadius: '16px', padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <div style={{ fontSize: '16px', color: '#2A72E6', fontWeight: 600 }}>진단 — 첫 진입점</div>
                                <div style={{ fontSize: '32px', fontWeight: 800, color: '#2A72E6', lineHeight: 1 }}>55%</div>
                            </div>
                            <div style={{ fontSize: '15px', color: '#48484a', fontWeight: 600, marginBottom: '8px' }}>미신고 사각지대</div>
                            <div style={{ fontSize: '14px', color: '#48484a', lineHeight: 1.4 }}>
                                "확신이 없어서 멈춘" 피해자에게 익명 AI 진단이 첫 행동 유도
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#f5ead2', borderRadius: '16px', padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <div style={{ fontSize: '16px', color: '#9d7c39', fontWeight: 600 }}>대응 — 유료 전환</div>
                                <div style={{ fontSize: '32px', fontWeight: 800, color: '#9d7c39', lineHeight: 1 }}>21일</div>
                            </div>
                            <div style={{ fontSize: '15px', color: '#48484a', fontWeight: 600, marginBottom: '8px' }}>학폭위 처리 기한</div>
                            <div style={{ fontSize: '14px', color: '#48484a', lineHeight: 1.4 }}>
                                시간 압박 기반 증거 전략·진술서·변호사 빠른 전환 연결
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#f2f2f2', borderRadius: '16px', padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <div style={{ fontSize: '16px', color: '#48484a', fontWeight: 600 }}>확장 — 동일 엔진</div>
                                <div style={{ fontSize: '24px', fontWeight: 800, color: '#1d1d1f', lineHeight: 1 }}>진단→대응→회복</div>
                            </div>
                            <div style={{ fontSize: '14px', color: '#48484a', lineHeight: 1.4 }}>
                                3축 구조가 가정폭력·이혼에 적용되어 도메인 추가 시 한계비용 최소
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TAMSlide;
