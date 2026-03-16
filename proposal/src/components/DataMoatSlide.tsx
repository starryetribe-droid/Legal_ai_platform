import React from 'react';

const DataMoatSlide: React.FC = () => {
    return (
        <section className="slide-section">
            <div className="slide-container">
                <div className="slide-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center' }}>
                    
                    {/* Header Part */}
                    <div>
                        <div style={{
                            backgroundColor: '#1d1d1f',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            width: 'fit-content',
                            marginBottom: '16px',
                            letterSpacing: '0.05em'
                        }}>
                            DATA MOAT
                        </div>
                        <h1 className="hero-title" style={{ fontSize: '38px', marginBottom: '0' }}>공개 판례 조회와 우리가 다른 이유</h1>
                    </div>

                    {/* Comparison Table */}
                    <div style={{
                        width: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '1px solid #e5e5e7',
                        backgroundColor: '#fff'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', tableLayout: 'fixed' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#fbfbfd', borderBottom: '1px solid #e5e5e7' }}>
                                    <th style={{ padding: '20px 24px', color: '#86868b', fontSize: '16px', fontWeight: 600, width: '15%' }}>구분</th>
                                    <th style={{ padding: '20px 24px', color: '#86868b', fontSize: '16px', fontWeight: 600 }}>일반 LLM</th>
                                    <th style={{ padding: '20px 24px', color: '#86868b', fontSize: '16px', fontWeight: 600 }}>공개 판례 검색</th>
                                    <th style={{ 
                                        padding: '20px 24px', 
                                        color: '#2A72E6', 
                                        fontSize: '16px', 
                                        fontWeight: 700,
                                        backgroundColor: '#f0f6ff'
                                    }}>사례 기반 RAG (우리)</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '17px' }}>
                                <tr style={{ borderBottom: '1px solid #f5f5f7' }}>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, color: '#424245' }}>답변 근거</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>학습 데이터 패턴</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>판결문 텍스트 매칭</td>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, backgroundColor: '#f0f6ff' }}>수임 전 과정 + 판례 DB</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f5f5f7' }}>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, color: '#424245' }}>환각 위험</td>
                                    <td style={{ padding: '20px 24px' }}>
                                        <span style={{ color: '#ff3b30', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '4px' }}>높음</span>
                                        <span style={{ color: '#86868b', marginLeft: '6px' }}>가짜 판례 생성</span>
                                    </td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>낮음, 단 문맥 오독 있음</td>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, backgroundColor: '#f0f6ff' }}>
                                        <span style={{ color: '#2A72E6' }}>극히 낮음</span>
                                        <span style={{ color: '#424245', marginLeft: '6px' }}>실존 사례만</span>
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f5f5f7' }}>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, color: '#424245' }}>수임 전 데이터</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>없음</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>없음 (판결문만)</td>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, backgroundColor: '#f0f6ff' }}>초기 상담 · 증거 · 합의 조건</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f5f5f7' }}>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, color: '#424245' }}>페르소나 맥락</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>없음</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>없음</td>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, backgroundColor: '#f0f6ff' }}>피해자 · 가해자 완전 분리</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, color: '#424245' }}>최신성</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>학습 시점까지</td>
                                    <td style={{ padding: '20px 24px', color: '#86868b' }}>업데이트 주기에 의존</td>
                                    <td style={{ padding: '20px 24px', fontWeight: 600, backgroundColor: '#f0f6ff' }}>새 판례 즉시 반영</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Data Flywheel Flow */}
                    <div style={{
                        backgroundColor: '#111111',
                        borderRadius: '16px',
                        padding: '24px 32px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px'
                    }}>
                        <div style={{ color: '#86868b', fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', width: '140px' }}>
                            DATA FLYWHEEL
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                            {[
                                '수임 데이터 축적',
                                '진단 정확도 ↑',
                                '변호사 연결 전환율 ↑',
                                '파트너 법인 확대',
                                '데이터 재축적'
                            ].map((step, idx, arr) => (
                                <React.Fragment key={idx}>
                                    <div style={{
                                        backgroundColor: idx === 0 || idx === arr.length - 1 ? '#2c2c2e' : '#1c1c1e',
                                        color: '#fff',
                                        padding: '10px 18px',
                                        borderRadius: '30px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {step}
                                    </div>
                                    {idx < arr.length - 1 && (
                                        <span style={{ color: '#48484a', fontWeight: 900 }}>→</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Summary Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                        <div className="apple-card" style={{ padding: '20px' }}>
                            <div style={{ color: '#86868b', fontSize: '14px', marginBottom: '4px' }}>일반 LLM</div>
                            <div style={{ fontSize: '19px', fontWeight: 700 }}>아는 게 많은 친구</div>
                        </div>
                        <div className="apple-card" style={{ padding: '20px' }}>
                            <div style={{ color: '#86868b', fontSize: '14px', marginBottom: '4px' }}>판례 검색</div>
                            <div style={{ fontSize: '19px', fontWeight: 700 }}>판결문 열람실</div>
                        </div>
                        <div className="apple-card" style={{ 
                            padding: '20px', 
                            border: '2px solid #2A72E6',
                            backgroundColor: '#fff'
                        }}>
                            <div style={{ color: '#2A72E6', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>사례 기반 RAG AI</div>
                            <div style={{ fontSize: '19px', fontWeight: 700, wordBreak: 'keep-all' }}>
                                케이스를 처음부터 끝까지 관리하는 플랫폼
                            </div>
                        </div>
                    </div>

                </div>
                <div className="slide-footer">
                    <p className="caption-text">자체 구축 판례 DB 및 수임 데이터 세트 활용 (2025)</p>
                    <p className="caption-text">Proprietary RAG Optimization Architecture</p>
                </div>
            </div>
        </section>
    );
};

export default DataMoatSlide;
