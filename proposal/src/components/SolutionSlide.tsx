import React from 'react';

const SolutionSlide: React.FC = () => {
    return (
        <section className="slide-section" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="slide-container">
                {/* Top Badge */}
                <div style={{
                    backgroundColor: '#1d1d1f',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '24px',
                    fontSize: '16px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    width: 'fit-content',
                    marginBottom: '16px',
                    letterSpacing: '0.08em',
                    margin: '0 auto 18px auto'
                }}>
                    SOLUTION
                </div>

                {/* Main Header */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1 className="hero-title" style={{ fontSize: '32px', marginBottom: '12px' }}>
                        <span style={{ color: '#ff6b35' }}>진단</span> → <span style={{ color: '#5e5ce6' }}>대응</span> → <span style={{ color: '#00c7be' }}>회복</span>까지,<br />
                        모든 상황의 골든타임을 놓치지 않는 AI 법률 가이드
                    </h1>
                    <h2 style={{ fontSize: '18px', color: '#86868b', fontWeight: 500, marginBottom: '0' }}>
                        — 법률 정보 검색이 아닌, 지금 이 상황에서 필요한 것을 순서대로 제공
                    </h2>
                </div>

                {/* Target Summary Bar - Split into two pills */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    marginBottom: '20px',
                    fontSize: '15px'
                }}>
                    {/* Victim Box */}
                    <div style={{
                        flex: 1,
                        backgroundColor: '#0e0f12',
                        borderRadius: '16px',
                        padding: '16px 32px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '16px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            backgroundColor: '#ff6b35'
                        }} />
                        <span style={{ fontWeight: 700, color: '#ff6b35', fontSize: '16px', whiteSpace: 'nowrap' }}>피해자 측</span>
                        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>— '확신이 없거나 일이 커질까봐' 멈춘다</span>
                    </div>

                    {/* Perpetrator Box */}
                    <div style={{
                        flex: 1,
                        backgroundColor: '#0e0f12',
                        borderRadius: '16px',
                        padding: '16px 32px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '16px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            backgroundColor: '#00a6ff'
                        }} />
                        <span style={{ fontWeight: 700, color: '#00a6ff', fontSize: '16px', whiteSpace: 'nowrap' }}>가해자 측</span>
                        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>— '가해 인식이 없거나 일이 터지고 나서야' 움직인다</span>
                    </div>
                </div>

                {/* Steps Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    {/* STEP 01: Diagnosis */}
                    <div className="apple-card" style={{ backgroundColor: 'white', border: '1px solid #e5e5e7', borderRadius: '16px', padding: '20px', position: 'relative' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#ff6b35', marginBottom: '8px' }}>STEP 01 · 진단</div>
                        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', lineHeight: '1.2' }}>이게 맞아요,<br />혼자 고민하지 마세요</h2>
                        <div style={{ backgroundColor: 'rgba(255,107,53,0.08)', color: '#ff6b35', padding: '10px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>
                            막막한 첫 순간에 방향을 잡아주는 역할
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#ff6b35' }}>›</span> 상황 입력 시 <b>학교폭력 해당 여부, 행동 가이드</b> AI 진단 및 제공
                            </li>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#ff6b35' }}>›</span> 유사 판례 · 관련 법령 AI 분석 및 조회
                            </li>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#ff6b35' }}>›</span> 심각도 수준 안내
                            </li>
                        </ul>
                    </div>

                    {/* STEP 02: Response */}
                    <div className="apple-card" style={{ backgroundColor: 'white', border: '1px solid #e5e5e7', borderRadius: '16px', padding: '20px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#5e5ce6', marginBottom: '8px' }}>STEP 02 · 대응</div>
                        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', lineHeight: '1.2' }}>전문가 없이 하면<br />불리해지는 것, 도와드려요</h2>
                        <div style={{ backgroundColor: 'rgba(94,92,230,0.08)', color: '#5e5ce6', padding: '10px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>
                            혼자서는 놓치기 쉬운 법적 대응을 단계별로 커버
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#5e5ce6' }}>›</span> <b>증거 수집 가이드</b>· 템플릿 제공
                            </li>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#5e5ce6' }}>›</span> 진술서 · 의견서 <b>초안 자동 생성</b>
                            </li>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#5e5ce6' }}>›</span> 절차별 타임라인 안내
                            </li>
                        </ul>
                    </div>

                    {/* STEP 03: Recovery */}
                    <div className="apple-card" style={{ backgroundColor: 'white', border: '1px solid #e5e5e7', borderRadius: '16px', padding: '20px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#00c7be', marginBottom: '8px' }}>STEP 03 · 회복</div>
                        <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', lineHeight: '1.2' }}>끝났다고<br />끝이 아니에요</h2>
                        <div style={{ backgroundColor: 'rgba(0,199,190,0.08)', color: '#00c7be', padding: '10px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', marginBottom: '16px' }}>
                            법적 해결 이후에도 일상으로 돌아올 수 있도록
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#00c7be' }}>›</span> 다봄 연계 <b>심리 케어 AI</b> 서비스
                            </li>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#00c7be' }}>›</span> 우울 · 불안 감소 프로그램
                            </li>
                            <li style={{ fontSize: '15px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <span style={{ color: '#00c7be' }}>›</span> 일상 회복과 재발 방지 지원
                            </li>
                        </ul>
                    </div>
                </div>

                {/* NOT vs IS Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.3fr)', gap: '20px', marginBottom: '20px', alignItems: 'stretch' }}>
                    {/* Problem Box */}
                    <div style={{
                        backgroundColor: '#f5f5f7',
                        borderRadius: '16px',
                        padding: '24px',
                        border: '1px solid #e5e5e7',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#ff3b30', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Problem</div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li style={{ fontSize: '15px', color: '#86868b', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.5 }}>
                                <span style={{ color: '#ff3b30', marginTop: '1px' }}>✕</span> 확신 없는 피해자가 찾아오기 어려운 구조
                            </li>
                            <li style={{ fontSize: '15px', color: '#86868b', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.5 }}>
                                <span style={{ color: '#ff3b30', marginTop: '1px' }}>✕</span> 사건 전에는 아무도 들어오지 않는 플랫폼
                            </li>
                            <li style={{ fontSize: '15px', color: '#86868b', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.5 }}>
                                <span style={{ color: '#ff3b30', marginTop: '1px' }}>✕</span> 법적 해결에서 끝나는 단발성 플랫폼
                            </li>
                        </ul>
                    </div>

                    {/* Solution Box */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        padding: '28px 36px',
                        border: '2px solid #5e5ce6',
                        boxShadow: '0 8px 30px rgba(94,92,230,0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#5e5ce6', marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Solution</div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <li style={{ fontSize: '17px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '12px', fontWeight: 600, lineHeight: 1.5 }}>
                                <span style={{ color: '#5e5ce6', fontSize: '18px', fontWeight: 800, marginTop: '2px' }}>✓</span> 
                                <span>우리는 "이게 폭력 맞나요?"부터 받아주는 <span style={{ color: '#5e5ce6' }}>AI 첫 대화 상대</span>입니다.</span>
                            </li>
                            <li style={{ fontSize: '17px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '12px', fontWeight: 600, lineHeight: 1.5 }}>
                                <span style={{ color: '#5e5ce6', fontSize: '18px', fontWeight: 800, marginTop: '2px' }}>✓</span> 
                                <span>우리는 사건 전·중·후 어느 시점에 와도 <span style={{ color: '#5e5ce6' }}>길을 잡아주는 서비스</span>입니다.</span>
                            </li>
                            <li style={{ fontSize: '17px', color: '#1d1d1f', display: 'flex', alignItems: 'flex-start', gap: '12px', fontWeight: 600, lineHeight: 1.5 }}>
                                <span style={{ color: '#5e5ce6', fontSize: '18px', fontWeight: 800, marginTop: '2px' }}>✓</span> 
                                <span>우리는 피해자와 가해자 측 모두를 다루는 <span style={{ color: '#5e5ce6' }}>중립적인 가이드</span>입니다.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* One-line Concept */}
                <div style={{
                    backgroundColor: '#1d1d1f',
                    borderRadius: '16px',
                    padding: '16px',
                    textAlign: 'center',
                    borderLeft: '4px solid #5e5ce6',
                    marginBottom: '10px'
                }}>
                    <p style={{ color: 'white', fontSize: '16px', fontWeight: 500, margin: 0 }}>
                        <span style={{ color: '#5e5ce6', fontWeight: 700, fontSize: '13px', display: 'block', marginBottom: '4px' }}>ONE-LINE CONCEPT</span>
                        학교폭력 상황에 놓인 누구든, <span style={{ color: '#5e5ce6', fontWeight: 700 }}>검색어 없이도</span> 상황을 진단하고 대응하고 회복할 수 있는 <span style={{ fontWeight: 700 }}>AI 기반 법률·심리 통합 가이드</span>
                    </p>
                </div>

                <div className="slide-footer">
                    <p className="caption-text">기획: 전문 법률 가이드 서비스 다봄 솔루션 아키텍처 (2025)</p>
                    <p className="caption-text">범위: 학교폭력 진단 - 대응 - 회복 전 과정 아우르는 AI 엔진</p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSlide;
