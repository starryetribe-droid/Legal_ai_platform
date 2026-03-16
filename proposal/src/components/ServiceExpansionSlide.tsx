import React from 'react';

/* ── 데이터 ── */
const PHASES = [
    {
        phase: 'Phase 1',
        status: '운영 중',
        statusColor: '#34c759',
        accent: '#e8631c',
        title: '학교폭력',
        service: '학폭 119',
        emoji: '🏫',
        features: [
            'AI 학폭 진단 · 판례 맞춤 분석',
            '증거 수집 가이드 + 보관함',
            '학폭위 절차 타임라인 안내',
            '진술서 · 의견서 초안 자동 생성',
            'LAWL 변호사 직접 연계',
        ],
    },
    {
        phase: 'Phase 2',
        status: '2025 예정',
        statusColor: '#5e5ce6',
        accent: '#5e5ce6',
        title: '가정폭력',
        service: '가폭 SOS',
        emoji: '🏠',
        features: [
            '가정폭력 상황 AI 진단',
            '긴급 대피 경로 · 쉼터 안내',
            '접근금지가처분 절차 가이드',
            '피해 진술서 초안 자동 생성',
            'LAWL 변호사 직접 연계',
        ],
    },
    {
        phase: 'Phase 3',
        status: '2026 예정',
        statusColor: '#00a89d',
        accent: '#00a89d',
        title: '이혼',
        service: '이혼 AI 파트너',
        emoji: '⚖️',
        features: [
            '이혼 사유 · 재산분할 진단',
            '양육권 분쟁 대응 전략',
            '협의이혼 vs 재판이혼 가이드',
            '이혼 서류 초안 자동 생성',
            'LAWL 변호사 직접 연계',
        ],
    },
] as const;

/* ── 메인 컴포넌트 ── */
const ServiceExpansionSlide: React.FC = () => (
    <section className="slide-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="slide-container">

            {/* 전체 콘텐츠를 세로 · 가로 정중앙 배치 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                {/* 헤더 — 중앙 정렬 유지 */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        backgroundColor: '#1d1d1f', color: 'white',
                        padding: '4px 12px', borderRadius: '20px',
                        fontSize: '16px', fontWeight: 600,
                        textTransform: 'uppercase', width: 'fit-content',
                        margin: '0 auto 18px', letterSpacing: '0.05em',
                    }}>
                        Service Expansion
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', color: '#1d1d1f' }}>
                        하나의 사례기반 엔진에서 버티컬 확장하는 법률 AI 플랫폼
                    </h1>
                    <p style={{ fontSize: '18px', color: '#8e8e93', fontWeight: 500 }}>
                        학교폭력에서 시작하여 가정폭력, 이혼까지 — 동일한 RAG 엔진과 변호사 연계 구조 위에서 단계적 확장
                    </p>
                </div>

                {/* 3-column phase grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 48px 1fr 48px 1fr',
                    alignItems: 'stretch',
                }}>
                    {PHASES.map((p, i) => (
                        <React.Fragment key={p.phase}>
                            <PhaseColumn {...p} />
                            {i < PHASES.length - 1 && <Arrow />}
                        </React.Fragment>
                    ))}
                </div>

                {/* 하단 검은 요약 바 */}
                <div style={{
                    background: '#1d1d1f', borderRadius: '16px',
                    padding: '14px 24px', display: 'flex',
                    alignItems: 'center', gap: '14px', marginTop: '24px',
                }}>
                    <div style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: '#ff9500', boxShadow: '0 0 8px #ff9500', flexShrink: 0,
                    }} />
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: 'white' }}>공통 인프라 —</span>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#ff9500' }}>하나의 사례기반 RAG 엔진 위에서 버티컬 확장</span>
                        <span style={{ fontSize: '14px', fontWeight: 400, color: '#8e8e93' }}>· LAWL 변호사 직접 연계 모델은 모든 Phase에서 동일</span>
                    </div>
                </div>

            </div>

            {/* Footer — 다른 장표와 동일한 위치 */}
            <div className="slide-footer">
                <p className="caption-text">기획: ETRIBE 법률 AI 서비스 버티컬 확장 로드맵 (2025)</p>
                <p className="caption-text">대상 버티컬: 학교폭력 · 가정폭력 · 이혼 소송</p>
            </div>

        </div>
    </section>
);

/* ── Phase 컬럼 ── */
const PhaseColumn: React.FC<typeof PHASES[number]> = ({
    phase, status, statusColor, accent, title, service, emoji, features
}) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        border: `1px dashed ${accent}45`,
        borderRadius: '18px',
        padding: '20px',
        backgroundColor: `${accent}06`,
    }}>
        {/* ① 기준선 1: Phase pill + 상태 태그 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '28px' }}>
            <span style={{
                backgroundColor: accent, color: 'white',
                padding: '3px 10px', borderRadius: '8px',
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.02em',
            }}>{phase}</span>
            <span style={{
                backgroundColor: `${statusColor}18`, color: statusColor,
                padding: '3px 10px', borderRadius: '8px',
                fontSize: '13px', fontWeight: 600,
            }}>{status}</span>
        </div>

        {/* ② 기준선 2: 제목 카드 (고정 높이 72px) */}
        <div style={{
            backgroundColor: 'white', borderRadius: '12px',
            padding: '14px 16px', border: `1px solid ${accent}22`,
            display: 'flex', alignItems: 'center', gap: '12px',
            flexShrink: 0,
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        }}>
            <div style={{ width: '3px', height: '50px', backgroundColor: accent, borderRadius: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '32px', lineHeight: 1 }}>{emoji}</span>
            <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#1d1d1f', lineHeight: 1.2 }}>{title}</div>
                <div style={{ fontSize: '16px', color: accent, fontWeight: 600, marginTop: '2px' }}>{service}</div>
            </div>
        </div>

        {/* ③ 기능 리스트 카드 */}
        <div style={{
            backgroundColor: 'white', borderRadius: '12px',
            padding: '16px 18px', border: '1px solid #e5e5e7',
            boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
        }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {features.map((f, i) => (
                    <li key={i} style={{
                        fontSize: '16px', color: '#48484a',
                        display: 'flex', alignItems: 'flex-start', gap: '7px',
                        lineHeight: 1.5,
                    }}>
                        <span style={{ color: accent, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>›</span>
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

/* ── 화살표 ── */
const Arrow: React.FC = () => (
    <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#a1a1a6', fontSize: '36px', fontWeight: 700,
        userSelect: 'none',
    }}>
        ›
    </div>
);

export default ServiceExpansionSlide;
