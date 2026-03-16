import PersonaCard from './PersonaCard';

const PersonaAnalysisSlide: React.FC = () => {
    return (
        <section className="slide-section">
            <div className="slide-container">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                            Target Analysis
                        </div>

                        <h1 className="hero-title" style={{ fontSize: '32px', marginBottom: '12px' }}>5개 페르소나, 모두 같은 순간에 무너진다</h1>
                        <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--apple-secondary-text)', marginBottom: '50px' }}>— 학폭위 D-21, 아무도 답을 모를 때</h2>
                    </div>

                    {/* Persona Profiles with Grouping and Flow - wrapped to center vertically */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'stretch' }}>
                        {/* Primary Group */}
                    <div style={{
                        flex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        padding: '12px',
                        borderRadius: '24px',
                        border: '1.5px dashed #0066cc40',
                        backgroundColor: '#0066cc05',
                        position: 'relative'
                    }}>
                        <div style={{
                            fontSize: '12px',
                            fontWeight: 800,
                            color: '#0066cc',
                            textAlign: 'center',
                            letterSpacing: '0.1em',
                            backgroundColor: 'white',
                            padding: '1px 10px',
                            borderRadius: '10px',
                            width: 'fit-content',
                            margin: '-20px auto 0 auto',
                            border: '1.5px solid #0066cc40'
                        }}>
                            <span style={{ opacity: 0.7, marginRight: '4px' }}>01</span> PRIMARY
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
                            <PersonaCard
                                type="A"
                                label="가해학생 부모"
                                subLabel="40대 학부모 · 대입 불안형"
                                color="#0066cc"
                                quote="생기부에 빨간 줄이 남고 대학에 못 갈까 봐 마음이 타들어 갑니다."
                                painPoints={["4호 이상 징계 시 2~4년 생기부 기재 공포", "정보 과부하 · 의견서 작성 막막", "변호사 수임료 200~500만 원 부담"]}
                                needs={["1~3호 처분 확보", "맞춤 의견서 초안", "처분 예측 확률"]}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', color: '#0066cc', fontSize: '28px', fontWeight: 800 }}>&gt;</div>
                            <PersonaCard
                                type="B"
                                label="피해학생 부모"
                                subLabel="40~50대 · 진실규명형"
                                color="#0066cc"
                                quote="가해자는 오히려 맞학폭을 걸어오는데 학교마저 믿을 수 없어 가슴이 무너집니다."
                                painPoints={["보호자 98% PTSD · 신체·정신 피해", "입증 책임이 피해자 측 · 증거 부족", "학교 편파 심의 · 맞학폭 역신고(42.3%)"]}
                                needs={["5호↑ 강력처분", "증거 수집 가이드", "맞학폭 방어전략"]}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: '#0066cc', fontSize: '28px', fontWeight: 800, margin: '0 4px' }}>&gt;</div>

                    {/* Secondary Group */}
                    <div style={{
                        flex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        padding: '12px',
                        borderRadius: '24px',
                        border: '1.5px dashed #ff3b3040',
                        backgroundColor: '#ff3b3005',
                        position: 'relative'
                    }}>
                        <div style={{
                            fontSize: '12px',
                            fontWeight: 800,
                            color: '#ff3b30',
                            textAlign: 'center',
                            letterSpacing: '0.1em',
                            backgroundColor: 'white',
                            padding: '1px 10px',
                            borderRadius: '10px',
                            width: 'fit-content',
                            margin: '-20px auto 0 auto',
                            border: '1.5px solid #ff3b3040'
                        }}>
                            <span style={{ opacity: 0.7, marginRight: '4px' }}>02</span> SECONDARY
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
                            <PersonaCard
                                type="a"
                                label="가해학생"
                                subLabel="중·고등학생 · 상황회피형"
                                color="#ff3b30"
                                quote="장난친 건데 이렇게 커질 줄 몰랐어요. 생기부에 남아서 대학 못 갈까 봐 너무 무서워요."
                                painPoints={["행동 합리화 · 죄의식 부족 → 체감 후 공포", "진술서·사과문 작성 방법 전무", '"솔직히 말하면 더 불리할까" 딜레마']}
                                needs={["즉각 처분 예측", "학생 눈높이 진술 가이드", "심의 Q&A 시뮬레이션"]}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', color: '#ff3b30', fontSize: '28px', fontWeight: 800 }}>&gt;</div>
                            <PersonaCard
                                type="b"
                                label="피해학생"
                                subLabel="중·고등학생 · 트라우마고립형"
                                color="#ff3b30"
                                quote="고통스러운데 이게 학폭인지 모르겠어요. 문제가 더 커질까봐 그냥 참고 있어요."
                                painPoints={["PTSD 유병률 64.3% · 자해충동 38%", "학폭 여부에 대한 확신 부재", "가해자 미분리 · 지속적 공포",]}
                                needs={["익명 학폭 여부 진단", "즉각 분리 및 심리 케어 지원", "증거 수집 조력자"]}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: '#ff3b30', fontSize: '28px', fontWeight: 800, margin: '0 4px' }}>&gt;</div>

                    {/* expansion Group */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        padding: '12px',
                        borderRadius: '24px',
                        border: '1.5px dashed #34c75940',
                        backgroundColor: '#34c75905',
                        position: 'relative'
                    }}>
                        <div style={{
                            fontSize: '12px',
                            fontWeight: 800,
                            color: '#34c759',
                            textAlign: 'center',
                            letterSpacing: '0.1em',
                            backgroundColor: 'white',
                            padding: '1px 10px',
                            borderRadius: '10px',
                            width: 'fit-content',
                            margin: '-20px auto 0 auto',
                            border: '1.5px solid #34c75940'
                        }}>
                            <span style={{ opacity: 0.7, marginRight: '4px' }}>03</span> EXPAND
                        </div>
                        <PersonaCard
                            type="C"
                            label="청소년 상담사"
                            subLabel="30~50대 · 법률공백 보완형"
                            color="#34c759"
                            quote="심각한데 법률적으로 도와줄 수가 없으니 답답해요. 학폭위가 어떻게 진행되는지도 저도 모르거든요."
                            painPoints={['"변호사 쓰세요" 밖에 못 해 답답', "처분 수위·시효·고소 질문에 답변 불가", "내담자 경제 상황 알기에 선임 권유 어려움"]}
                            needs={["즉시 참고 보조 도구", "출처 명확 법률 정보", "화면 공유 설명 자료"]}
                        />
                    </div>
                </div>

                <div className="insight-banner" style={{
                    background: '#fff9e6',
                    borderRadius: '16px',
                    padding: '16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginTop: '36px',
                    border: '1px solid #ffeeba',
                    fontSize: '15px',
                    boxShadow: '0 4px 12px rgba(133, 100, 4, 0.05)'
                }}>
                    <span style={{ fontSize: '28px' }}>💡</span>
                    <div>
                        <p style={{ fontWeight: 700, color: '#856404', marginBottom: '4px', fontSize: '18px', lineHeight: '1.4' }}>
                            공통 트리거: 모든 페르소나는 학폭위 통보 직후 정보 공백과 극심한 불안이 동시에 발생하는 "골든 21일" 안에 서비스 유입 — 즉각적이고 신뢰할 수 있는 답변이 전환의 핵심
                        </p>
                        <p style={{ fontSize: '14px', color: '#997b2d', fontWeight: 500 }}>
                            ※ 학교폭력예방법 제13조 제2항: 공문 접수일로부터 21일 이내 개최 원칙 (부득이한 경우 7일 연장, 최대 28일)
                        </p>
                    </div>
                </div>
            </div>


                <div className="slide-footer">
                    <p className="caption-text">기반: 핵심 이해관계자 페르소나 매핑 및 요구사항 분석 (2025)</p>
                    <p className="caption-text">우선순위: [Primary] 가해/피해학생 부모 &gt; [Secondary] 가해/피해학생 &gt; [Expand] 관계 전문가</p>
                </div>
            </div>
        </section>
    );
};

export default PersonaAnalysisSlide;
