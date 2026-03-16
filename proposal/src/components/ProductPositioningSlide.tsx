import React from 'react';

const ProductPositioningSlide: React.FC = () => {
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
                    Product Positioning
                </div>

                <h1 className="hero-title" style={{ fontSize: '32px', marginBottom: '12px' }}>
                    일반 LLM과 다른 이유, 사례관리자 방식의 AI 법률 플랫폼
                </h1>
                <h2 style={{ fontSize: '18px', color: 'var(--apple-secondary-text)', fontWeight: 500, marginBottom: '20px' }}>
                    — ChatGPT·Gemini 등 범용 LLM과의 핵심 차별점 6가지 · 사회복지 사례관리 전문성 5대 역량 기반
                </h2>

                <div style={{ display: 'flex', gap: '20px', flex: 1, minHeight: 0 }}>
                    {/* Left Grid: 6 Points */}
                    <div style={{ flex: 2.2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {/* 01 */}
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px', position: 'relative', border: '1px solid #e5e5e7', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ background: '#1d1d1f', color: 'white', borderRadius: '6px', padding: '2px 8px', fontSize: '14px', fontWeight: 700 }}>01</span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>페르소나 기반 맥락 설계</h3>
                            </div>
                            <ul style={{ margin: '0 0 12px 18px', padding: 0, color: 'var(--apple-secondary-text)', fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                                <li>피해자 부모 vs 가해자 부모: 대상별 커스텀 플로우 및 톤앤매너 안내</li>
                                <li>동일 사건이라도 사용자 입장에 따른 정보 우선순위 차등 제공</li>
                            </ul>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <Tag label="→ 사정" color="#af52de" textColor="white" />
                            </div>
                        </div>

                        {/* 02 - Dark Card */}
                        <div style={{ background: '#1d1d1f', color: 'white', padding: '20px', borderRadius: '20px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ background: 'white', color: '#1d1d1f', borderRadius: '6px', padding: '2px 8px', fontSize: '14px', fontWeight: 700 }}>02</span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>사례관리자처럼 가이드하는 챗봇</h3>
                            </div>
                            <ul style={{ margin: '0 0 12px 18px', padding: 0, color: '#8e8e93', fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                                <li>상황 파악을 위한 능동적 질문과 단계별 가이드 제시</li>
                                <li>사용자의 질문 유도 없이도 챗봇이 전체 케이스를 리딩</li>
                            </ul>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px', marginBottom: '12px' }}>
                                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#d2d2d7' }}>"지금 학폭위 통보를 받으셨나요? 그럼 오늘 해야 할 일이 있어요."</p>
                            </div>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <Tag label="→ 의사소통" color="#0066cc" textColor="white" />
                            </div>
                        </div>

                        {/* 03 */}
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px', border: '1px solid #e5e5e7', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ background: '#1d1d1f', color: 'white', borderRadius: '6px', padding: '2px 8px', fontSize: '14px', fontWeight: 700 }}>03</span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>진단 → 행동 가이드</h3>
                            </div>
                            <ul style={{ margin: '0 0 12px 18px', padding: 0, color: 'var(--apple-secondary-text)', fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                                <li>단순 정보 나열 형태 탈피: 즉각적인 행동 지침(Action Plan) 제공</li>
                                <li>체크리스트와 타임라인 기반의 개인형 맞춤 출력물
                                    <ul style={{ margin: '4px 0 0 20px', padding: 0, fontSize: '14px', color: 'var(--apple-secondary-text)', listStyleType: 'circle' }}>
                                        <li>증거 수집 체크리스트</li>
                                        <li>D-21 타임라인 자동 생성</li>
                                        <li>오늘 할 일 우선순위 안내</li>
                                    </ul>
                                </li>
                            </ul>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <Tag label="→ 사정" color="#af52de" textColor="white" />
                                <Tag label="→ 개입·모니터링" color="#ff9500" textColor="white" />
                            </div>
                        </div>

                        {/* 04 */}
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px', border: '1px solid #e5e5e7', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ background: '#1d1d1f', color: 'white', borderRadius: '6px', padding: '2px 8px', fontSize: '14px', fontWeight: 700 }}>04</span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>증거·문서 관리 기능</h3>
                            </div>
                            <ul style={{ margin: '0 0 12px 18px', padding: 0, color: 'var(--apple-secondary-text)', fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                                <li>LLM 기반 대화 수준을 넘어선 실무 중심의 케이스 관리 툴셋</li>
                                <li>증거 보관함, 진술서 초안 생성, 타임라인 추적 자동화</li>
                            </ul>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                                <button style={{ flex: 1, background: '#f2f2f7', border: 'none', padding: '8px', borderRadius: '10px', fontSize: '14px', fontWeight: 600 }}>증거 보관함</button>
                                <button style={{ flex: 1, background: '#f2f2f7', border: 'none', padding: '8px', borderRadius: '10px', fontSize: '14px', fontWeight: 600 }}>진술서 초안</button>
                            </div>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <Tag label="→ 자원 연계" color="#34c759" textColor="white" />
                                <Tag label="→ 개입·모니터링" color="#ff9500" textColor="white" />
                            </div>
                        </div>

                        {/* 05 */}
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px', border: '1px solid #e5e5e7', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ background: '#1d1d1f', color: 'white', borderRadius: '6px', padding: '2px 8px', fontSize: '14px', fontWeight: 700 }}>05</span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>법적 책임 범위 설계</h3>
                            </div>
                            <ul style={{ margin: '0 0 12px 18px', padding: 0, color: 'var(--apple-secondary-text)', fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                                <li>변호사 직접 검토를 거친 신뢰도 높은 법률 콘텐츠 제공</li>
                                <li>전문가 연결 CTA를 활용한 신뢰 확보와 명확한 수익 모델 구축</li>
                            </ul>
                            <div style={{ background: '#f2f2f7', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, color: '#1d1d1f', width: 'fit-content', marginBottom: '12px' }}>
                                신뢰 확보 → 전문가 연결 → 수익화
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Tag label="→ 윤리적 판단" color="#ff3b30" textColor="white" />
                            </div>
                        </div>

                        {/* 06 */}
                        <div className="glass-card" style={{ padding: '20px', borderRadius: '20px', border: '1px solid #e5e5e7', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ background: '#1d1d1f', color: 'white', borderRadius: '6px', padding: '2px 8px', fontSize: '14px', fontWeight: 700 }}>06</span>
                                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>심리 상태 반영 설계</h3>
                            </div>
                            <ul style={{ margin: '0 0 12px 18px', padding: 0, color: 'var(--apple-secondary-text)', fontSize: '14px', lineHeight: '1.6', flex: 1 }}>
                                <li>심리적 위기 상태(혼란/공포)에 처한 사용자의 심리 분석 반영</li>
                                <li>정보 전달 전 사용자 정서 공감과 확인 욕구 우선 충족 구조</li>
                            </ul>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                                <button style={{ background: '#f2f2f7', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>공감 먼저</button>
                                <button style={{ background: '#f2f2f7', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>정보 나중</button>
                            </div>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <Tag label="→ 의사소통" color="#0066cc" textColor="white" />
                                <Tag label="→ 윤리적 판단" color="#ff3b30" textColor="white" />
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: 5 Core Competencies */}
                    <div style={{
                        flex: 1,
                        background: 'white',
                        borderRadius: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                        overflow: 'hidden',
                        border: '1px solid #f2f2f7'
                    }}>
                        {/* Panel Header */}
                        <div style={{ background: '#2c2c2e', padding: '16px 20px', color: 'white' }}>
                            <p style={{ fontSize: '16px', color: '#8e8e93', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '2px' }}>AI 설계 기반 5대 역량</p>
                            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>사례관리자 전문성</h3>
                        </div>

                        {/* List of Competencies */}
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <CompetencyItem
                                title="의사소통"
                                badge="신뢰 형성 · 공감"
                                description="언어·비언어 표현으로 감정·요구 사항을 정확히 이해하고 명확하게 전달"
                                links={[{ text: '02 챗봇', highlight: true }, { text: '06 심리' }]}
                                color="#0066cc"
                                bgColor="#ffffff"
                            />
                            <CompetencyItem
                                title="사정 (Assessment)"
                                badge="심층 평가"
                                description="심리·사회·경제 상태를 종합 파악하고 문제 원인과 자원을 동시에 탐색"
                                links={[{ text: '01 페르소나' }, { text: '03 진단' }]}
                                color="#af52de"
                                bgColor="#f9f9fb"
                            />
                            <CompetencyItem
                                title="자원 연계"
                                badge="기관 협력"
                                description="복지관·병원·상담센터 등 지역사회 자원을 발굴·연결하고 협력 체계 구축"
                                links={[{ text: '04 문서관리' }]}
                                color="#34c759"
                                bgColor="#ffffff"
                            />
                            <CompetencyItem
                                title="개입·모니터링"
                                badge="성과 점검"
                                description="개입 계획 실행 후 주기적으로 결과를 평가하고 방향을 재조정"
                                links={[{ text: '03 행동가이드' }, { text: '04 문서관리' }]}
                                color="#ff9500"
                                bgColor="#f9f9fb"
                            />
                            <CompetencyItem
                                title="윤리적 판단"
                                badge="비밀 보장"
                                description="개인정보를 보호하고 충분한 설명·동의 절차로 클라이언트 자율성을 존중"
                                links={[{ text: '05 법적책임' }, { text: '06 심리' }]}
                                color="#ff3b30"
                                bgColor="#ffffff"
                                isLast={true}
                            />
                        </div>

                    </div>
                </div>

                {/* Bottom Core Position Banner */}
                <div style={{
                    background: '#1d1d1f',
                    borderRadius: '16px',
                    padding: '12px 24px',
                    marginTop: '20px',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff9500', boxShadow: '0 0 10px #ff9500' }}></div>
                    <p style={{ fontSize: '16px', fontWeight: 700 }}>
                        핵심 포지션 — ChatGPT = <span style={{ color: '#8e8e93', fontWeight: 500 }}>아는 게 많은 친구</span> vs <span style={{ color: '#ff9500' }}>ETRIBE 법률 AI 서비스 = 내 케이스를 처음부터 끝까지 함께 끌고 가는 AI 사례관리자</span>
                    </p>
                </div>

                <div className="slide-footer">
                    <p className="caption-text">자료: 서비스 기획 내부 문서 · [표 8-1] 사례관리자의 전문성</p>
                    <p className="caption-text">대상: 학교폭력 · 가정폭력 · 이혼</p>
                </div>
            </div>
        </section>
    );
};

// Internal sub-components to keep code clean
const Tag: React.FC<{ label: string; color?: string; textColor?: string }> = ({ label, color = '#f2f2f7', textColor = '#1d1d1f' }) => (
    <span style={{
        backgroundColor: color,
        color: textColor,
        padding: '4px 10px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: 700,
        whiteSpace: 'nowrap'
    }}>
        {label}
    </span>
);

const CompetencyItem: React.FC<{
    title: string;
    badge: string;
    description: string;
    links: { text: string; highlight?: boolean }[];
    color: string;
    bgColor: string;
    isLast?: boolean;
}> = ({ title, badge, description, links, color, bgColor, isLast }) => (
    <div style={{
        padding: '16px 20px',
        backgroundColor: bgColor,
        borderBottom: isLast ? 'none' : '1px solid #f2f2f7',
        borderLeft: `3px solid ${color}`,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '5px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#1d1d1f' }}>{title}</h4>
            <span style={{
                backgroundColor: color + '15',
                color: color,
                padding: '2px 10px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700
            }}>{badge}</span>
        </div>
        <p style={{ fontSize: '14px', color: '#48484a', lineHeight: '1.6', marginBottom: '7px' }}>{description}</p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {links.map((link, idx) => (
                <span key={idx} style={{
                    backgroundColor: link.highlight ? '#1d1d1f' : color + '15',
                    color: link.highlight ? 'white' : color,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 700
                }}>{link.text}</span>
            ))}
        </div>
    </div>
);

export default ProductPositioningSlide;
