import React from 'react';

const ServiceFlowSlide: React.FC = () => {
    return (
        <section className="slide-section" style={{ height: 'auto', minHeight: '100vh', padding: '60px 0', overflow: 'visible' }}>
            <div className="slide-container" style={{ height: 'auto', display: 'block', overflow: 'visible', maxWidth: '1400px' }}>
                {/* Top Title Section */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div style={{
                        backgroundColor: '#1d1d1f',
                        color: 'white',
                        padding: '4px 16px',
                        borderRadius: '20px',
                        fontSize: '16px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        width: 'fit-content',
                        margin: '0 auto 18px',
                        letterSpacing: '0.05em'
                    }}>
                        User Journey & Value Flow
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', color: '#1d1d1f' }}>
                        페르소나별 통합 서비스 여정 맵 (피해자/가해자 중심)
                    </h1>
                    <p style={{ fontSize: '18px', color: '#8e8e93', fontWeight: 500 }}>
                        진입 단계부터 유료 서비스 전환, 전문가 연결까지 이어지는 End-to-End 프로세스
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '50px', alignItems: 'flex-start' }}>

                    {/* Column 1: Victim Case (피해자 케이스) */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <ColumnHeader title="피해자 케이스" color="#e8f5e9" textColor="#1d1d1f" borderColor="#34c759" />

                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            {/* Absolute Backgrounds for the 2 columns */}
                            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 'calc(50% + 6px)', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.04)', zIndex: 0 }}></div>
                            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 'calc(50% + 6px)', right: 0, backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.04)', zIndex: 0 }}></div>

                            {/* Content Container */}
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', padding: '16px 0', gap: '10px', height: '100%' }}>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                    <div style={{ padding: '0 16px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#8e8e93', textAlign: 'center', marginBottom: '4px' }}>[ 피해 학생 여정 ]</div>
                                    </div>
                                    <div style={{ padding: '0 16px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#8e8e93', textAlign: 'center', marginBottom: '4px' }}>[ 부모·보호자 여정 ]</div>
                                    </div>
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                    <div style={{ padding: '0 16px' }}>
                                        <SectionLabel label="① 진입" />
                                        <FlowBox title="피해 학생" content={["단톡 차단·집단 무시 반복", "보복 두려워 침묵, 부모에게 숨김", "학교 가는 게 싫어지기 시작"]} color="#e8f5e9" borderColor="#34c759" />
                                    </div>
                                    <div style={{ padding: '0 16px' }}>
                                        <SectionLabel label="① 진입" />
                                        <FlowBox title="부모·보호자" content={["별다른 인지 없음", "자녀 태도 이상(성적 하락 등)", "뒤늦게 정황 인지 중"]} color="#e8f5e9" borderColor="#34c759" />
                                    </div>
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column' }}>
                                        <SectionLabel label="② 접속 계기" />
                                        <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                                            <FlowBox title="경로 A" content={["“이게 학폭이야?”", "부모 몰래, 혼자 검색"]} color="#e8f5e9" borderColor="#34c759" flex={1} />
                                            <FlowBox title="경로 B" content={["학폭 진단 테스트 유입"]} color="#e8f5e9" borderColor="#34c759" flex={1} />
                                        </div>
                                    </div>
                                    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column' }}>
                                        <SectionLabel label="② 접속 계기" />
                                        <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                                            <FlowBox title="경로 A" content={["직접 들음"]} color="#e8f5e9" borderColor="#34c759" flex={1} />
                                            <FlowBox title="경로 B" content={["학교 연락"]} color="#e8f5e9" borderColor="#34c759" flex={1} />
                                            <FlowBox title="경로 C" content={["학폭 진단\n테스트 유입"]} color="#e8f5e9" borderColor="#34c759" flex={1} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '0 16px', marginTop: '4px' }}>
                                    <div style={{ background: 'rgba(255, 255, 255, 0.75)', padding: '20px 20px', borderRadius: '24px', border: '2px dashed rgba(52, 199, 89, 0.5)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <p style={{ fontSize: '14px', color: '#34c759', margin: 0, fontWeight: 700 }}>무료 구간 — 혼자서도 할 수 있는 것</p>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                                            <FlowBox title="학폭 진단 결과 확인" content={["AI 학폭 해당 여부 판단", "심각도 수준 안내"]} color="#e8f5e9" borderColor="#34c759" />
                                            <FlowBox title="유사 사례 판례 조회" content={["비슷한 사례 결과 확인", "처분 범위 예시"]} color="#e8f5e9" borderColor="#34c759" />
                                            <FlowBox title="학교 신고 절차 안내" content={["담임·교감 연락 방법", "학폭위 회부 기준·타임라인", "Wee센터·117 안내"]} color="#e8f5e9" borderColor="#34c759" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px', marginTop: 'auto', paddingTop: '10px' }}>
                                    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <div style={{ marginTop: 'auto' }}>
                                            <FlowBox title="부모님께 결과 공유" content={["미성년자는 결제 불가", "부모에게 강력하게 상황 공유 유도"]} color="#e8f5e9" borderColor="#34c759" />
                                        </div>
                                    </div>
                                    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <div style={{ marginTop: 'auto' }}>
                                            <FlowBox title="지금 당장 뭘 해야하나?" content={["학폭 피해 부모 대응 가이드 필요", "감정 격앙 상태로 진입"]} color="#e8f5e9" borderColor="#34c759" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <SectionLabel label="③ 전환 포인트" />
                        <PinkBanner text="💳 법적으로 대응하고 싶은가요? — 저희가 도와드릴게요" />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '4px', marginBottom: '8px' }}>
                            <div style={{ background: '#fff9c4', border: '1px solid #ffcc00', borderRadius: '16px', padding: '12px', textAlign: 'center' }}>
                                <span style={{ color: '#ff9500', fontWeight: 700, fontSize: '15px' }}>네</span>
                            </div>
                            <div style={{ background: '#f5f5ff', border: '1px solid #b3b3ff', borderRadius: '16px', padding: '12px', textAlign: 'center' }}>
                                <span style={{ color: '#5856d6', fontWeight: 700, fontSize: '15px' }}>아니요 / 아이 마음만 괜찮아지면 돼요</span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div style={{ background: '#fff9c4', padding: '20px', borderRadius: '16px', border: '1px solid #ffcc00' }}>
                                <p style={{ fontSize: '14px', color: '#8e8e93', marginBottom: '12px', fontWeight: 600 }}>유료 구간 — 전문가 없이 하면 불리해지는 것</p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    <div style={{ background: '#fff3e0', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                                        <strong style={{ display: 'block', fontSize: '15px', marginBottom: '8px' }}>증거 전략</strong>
                                        <div style={{ fontSize: '13px', color: '#48484a', lineHeight: 1.5 }}>수집·보존·제출<br />타이밍 가이드<br />템플릿 제공</div>
                                    </div>
                                    <div style={{ background: '#fff3e0', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                                        <strong style={{ display: 'block', fontSize: '15px', marginBottom: '8px' }}>학폭위·불복</strong>
                                        <div style={{ fontSize: '13px', color: '#48484a', lineHeight: 1.5 }}>심의 대응 전략<br />진술서 작성<br />행정심판·소송</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: '#f5f5ff', padding: '20px', borderRadius: '16px', border: '1px solid #b3b3ff', display: 'flex', flexDirection: 'column' }}>
                                <p style={{ fontSize: '14px', color: '#5856d6', marginBottom: '16px', fontWeight: 600 }}>유료 구간 — 전문가가 설계한 마음 케어 서비스</p>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
                                    <strong style={{ fontSize: '17px', color: '#5856d6' }}>다봄 연결 — 세컨드 전환 전략</strong>
                                    <div style={{ fontSize: '14px', color: '#5856d6', lineHeight: 1.6 }}>우울·불안 정도 진단<br />피해 아동 마음 케어 AI 챗봇</div>
                                </div>
                            </div>
                        </div>

                        <RevenueBox label="법률사무소 연결 (수익)" color="#ff9500" />
                    </div>

                    {/* Column 2: Perpetrator Case (가해자 케이스) */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <ColumnHeader title="가해자 케이스" color="#fff3e0" textColor="#1d1d1f" borderColor="#ffcc00" />

                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            {/* Absolute Backgrounds for the 2 columns */}
                            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 'calc(50% + 6px)', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.04)', zIndex: 0 }}></div>
                            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 'calc(50% + 6px)', right: 0, backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.04)', zIndex: 0 }}></div>

                            {/* Content Container */}
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', padding: '16px 0', gap: '10px', height: '100%' }}>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                    <div style={{ padding: '0 16px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#8e8e93', textAlign: 'center', marginBottom: '4px' }}>[ 가해 학생 여정 ]</div>
                                    </div>
                                    <div style={{ padding: '0 16px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#8e8e93', textAlign: 'center', marginBottom: '4px' }}>[ 부모·보호자 여정 ]</div>
                                    </div>
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                    <div style={{ padding: '0 16px' }}>
                                        <SectionLabel label="① 진입" />
                                        <FlowBox title="가해 학생" content={["“그냥 장난이었는데”", "학폭 인식 없음 → 접근 동기 없음"]} color="#fff3e0" borderColor="#ffcc00" />
                                    </div>
                                    <div style={{ padding: '0 16px' }}>
                                        <SectionLabel label="① 진입" />
                                        <FlowBox title="부모·보호자" content={["별다른 인지 없음", "“우리 애가 그럴 리 없다” 부정"]} color="#fff3e0" borderColor="#ffcc00" />
                                    </div>
                                </div>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '12px' }}>
                                    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column' }}>
                                        <SectionLabel label="② 접속 계기" />
                                        <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                                            <FlowBox title="경로 A" content={["학폭 진단 테스트 유입"]} color="#fff3e0" borderColor="#ffcc00" flex={1} />
                                        </div>
                                    </div>
                                    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column' }}>
                                        <SectionLabel label="② 접속 계기" />
                                        <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                                            <FlowBox title="경로 A" content={["학폭위 회부 통보 연락 후 검색"]} color="#fff3e0" borderColor="#ffcc00" flex={1} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '0 16px', marginTop: '4px' }}>
                                    <div style={{ background: 'rgba(255, 255, 255, 0.75)', padding: '20px 20px', borderRadius: '24px', border: '2px dashed rgba(255, 204, 0, 0.6)', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                                        <p style={{ fontSize: '14px', color: '#e6b800', margin: 0, fontWeight: 700 }}>무료 구간 — 혼자서도 할 수 있는 것</p>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                                            <FlowBox title="학폭 진단 결과 확인" content={["AI 학폭 해당 여부 판단", "심각도 수준 안내"]} color="#fff3e0" borderColor="#ffcc00" />
                                            <FlowBox title="유사 사례 판례 조회" content={["비슷한 사례 결괏", "학폭위 타임라인 안내"]} color="#fff3e0" borderColor="#ffcc00" />
                                            <FlowBox title="학폭위 절차 안내" content={["심의 일정·단계 설명", "출석 전 준비 체크리스트", "조치 1~9호 기준 안내"]} color="#fff3e0" borderColor="#ffcc00" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <SectionLabel label="③ 전환 포인트" />
                        <PinkBanner text="💳 학폭위까지 몇 주 남았나요? — 지금 바로 전략이 필요합니다" />

                        <div style={{ background: '#fff9c4', padding: '24px', borderRadius: '16px', border: '1px solid #ffcc00', marginTop: '10px' }}>
                            <p style={{ fontSize: '14px', color: '#8e8e93', marginBottom: '16px', fontWeight: 600 }}>유료 구간 — 전문가 없이 하면 불리해지는 것 (학생·부모 맞춤 전략)</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '12px', border: '1px solid #ffcc00' }}>
                                    <p style={{ fontSize: '13px', color: '#8e8e93', marginBottom: '8px' }}>학생 맞춤 전략</p>
                                    <strong style={{ display: 'block', fontSize: '16px', marginBottom: '12px', textAlign: 'center' }}>진술·심의 대응</strong>
                                    <div style={{ fontSize: '14px', color: '#48484a', lineHeight: 1.6, textAlign: 'center' }}>진술서·사과문 초안 작성<br />심의 시뮬레이션<br />고의성 낮추는 진술 전략<br />불복 절차 안내</div>
                                </div>
                                <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '12px', border: '1px solid #ffcc00' }}>
                                    <p style={{ fontSize: '13px', color: '#8e8e93', marginBottom: '8px' }}>부모 맞춤 전략</p>
                                    <strong style={{ display: 'block', fontSize: '16px', marginBottom: '12px', textAlign: 'center' }}>의견서·합의 대응</strong>
                                    <div style={{ fontSize: '14px', color: '#48484a', lineHeight: 1.6, textAlign: 'center' }}>맞춤형 의견서 초안 즉시 제공<br />합의 vs 반박 전략 선택 가이드<br />증거 수집·보존 전략<br />행정심판·소송 불복 안내<br />변호사 연결</div>
                                </div>
                            </div>
                        </div>

                        <RevenueBox label="법률사무소 긴급 연결 (수익)" color="#ffcc00" textColor="#1d1d1f" />

                        <div style={{ background: '#f5f5ff', padding: '20px', borderRadius: '16px', border: '1px solid #b3b3ff', textAlign: 'center', marginTop: '8px' }}>
                            <strong style={{ fontSize: '16px', color: '#1d1d1f', display: 'block', marginBottom: '8px' }}>다봄 연계 — 사후 조치</strong>
                            <p style={{ fontSize: '14px', color: '#5856d6', margin: 0 }}>마음 케어 → 재발 방지 프로그램</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Legend */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '60px', padding: '20px', borderTop: '1px solid #eee' }}>
                    <LegendItem label="피해자/가해자 흐름" color="white" borderColor="#ccc" />
                    <LegendItem label="무료 구간" color="#f5f5f7" borderColor="#ccc" />
                    <LegendItem label="유료 구간" color="#fff9c4" borderColor="#ffcc00" />
                    <LegendItem label="다봄 (세컨드 전환)" color="#f5f5ff" borderColor="#b3b3ff" />
                    <LegendItem label="수익" color="#ffcc00" borderColor="#ff9500" />
                </div>
            </div>
        </section>
    );
};

// Sub-components for cleaner structure
const ColumnHeader: React.FC<{ title: string; color: string; textColor?: string; borderColor?: string }> = ({ title, color, textColor = 'white', borderColor }) => (
    <div style={{
        background: color,
        color: textColor,
        padding: '16px',
        borderRadius: '12px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 700,
        border: borderColor ? `1px solid ${borderColor}` : 'none'
    }}>
        {title}
    </div>
);

const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
    <div style={{ fontSize: '14px', color: '#8e8e93', marginTop: '8px', marginBottom: '4px' }}>
        {label}
    </div>
);

const FlowBox: React.FC<{ title: string; content: string[]; color: string; borderColor: string; flex?: number }> = ({ title, content, color, borderColor, flex }) => (
    <div style={{
        background: color,
        padding: '14px',
        borderRadius: '12px',
        border: `1px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '6px',
        flex: flex,
    }}>
        <strong style={{ fontSize: '14px', color: '#1d1d1f' }}>{title}</strong>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {content.map((text, i) => (
                <p key={i} style={{ fontSize: '12px', color: '#48484a', margin: 0, lineHeight: 1.4, whiteSpace: 'pre-line' }}>{text}</p>
            ))}
        </div>
    </div>
);

const PinkBanner: React.FC<{ text: string }> = ({ text }) => (
    <div style={{
        background: '#fff0f5',
        color: '#ff2d55',
        padding: '12px 16px',
        borderRadius: '12px',
        fontSize: '15px',
        fontWeight: 700,
        textAlign: 'center',
        margin: '8px 0',
        border: '1px solid #ffccdd'
    }}>
        {text}
    </div>
);

const RevenueBox: React.FC<{ label: string; color: string; textColor?: string }> = ({ label, color, textColor = 'white' }) => (
    <div style={{
        background: color,
        color: textColor,
        padding: '16px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: '16px'
    }}>
        {label}
    </div>
);

const LegendItem: React.FC<{ label: string; color: string; borderColor: string }> = ({ label, color, borderColor }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: color, border: `1px solid ${borderColor}` }}></div>
        <span style={{ fontSize: '13px', color: '#8e8e93', fontWeight: 500 }}>{label}</span>
    </div>
);

export default ServiceFlowSlide;
