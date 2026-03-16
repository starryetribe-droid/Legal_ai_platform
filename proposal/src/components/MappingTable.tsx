import React from 'react';

const MappingTable: React.FC = () => {
    const data = [
        { id: 'A', persona: '가해학생 부모', keyword: '"몇 호 나올까요?"\n"의견서 어떻게 써요?"', pain: '처분 예측 불확실성 · 고비용 법률장벽', feature: 'AI 처분 예측 · 의견서 자동 초안 생성', color: '#0066cc' },
        { id: 'B', persona: '피해학생 부모', keyword: '"맞학폭 어떻게 막아요?"\n"증거가 부족해요"', pain: '입증 난이도 · 편파 심의 불신', feature: '유사 판례 및 조항 검색 · 맞학폭 방어 전략', color: '#0066cc' },
        { id: 'a', persona: '가해학생', keyword: '"진술서에 뭐라고 써요?"\n"솔직히 말하면..."', pain: '학생 눈높이 정보 부재 · 심의 공포', feature: '학생용 진술 가이드 · 심의 시뮬레이션', color: '#ff3b30' },
        { id: 'b', persona: '피해학생', keyword: '"이게 학폭 맞나요?"\n(침묵)일 커지는 게 무서워요', pain: '고립·재트라우마 · 증거 수집 무력감', feature: '익명 상담 채널 · 안전한 증거 기록 도구', color: '#ff3b30' },
        { id: 'C', persona: '상담사', keyword: '"법률적으로 도와줄 수 없어 답답해요"', pain: '법률·절차 안내 공백 · 반복 질문 한계', feature: '상담 보조 리포트 · 출처 명확 법률 정보', color: '#34c759' },
    ];

    const groupedData = [
        { title: '01 PRIMARY', color: '#0066cc', items: [data[0], data[1]] },
        { title: '02 SECONDARY', color: '#ff3b30', items: [data[2], data[3]] },
        { title: '03 EXPAND', color: '#34c759', items: [data[4]] },
    ];

    return (
        <div style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'stretch'
        }}>
            {groupedData.map((group, gIdx) => (
                <div key={gIdx} style={{
                    flex: group.items.length,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px',
                    borderRadius: '24px',
                    border: `1.5px dashed ${group.color}40`,
                    backgroundColor: `${group.color}03`,
                    position: 'relative'
                }}>
                    {/* Group Badge */}
                    <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '12px',
                        fontWeight: 800,
                        color: group.color,
                        textAlign: 'center',
                        letterSpacing: '0.1em',
                        backgroundColor: 'white',
                        padding: '2px 12px',
                        borderRadius: '10px',
                        border: `1.5px solid ${group.color}40`,
                        whiteSpace: 'nowrap'
                    }}>
                        {group.title}
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${group.items.length}, 1fr)`,
                        gap: '24px',
                        flex: 1
                    }}>
                        {group.items.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                alignItems: 'center',
                                gap: '36px'
                            }}>
                                {/* Problem Box */}
                                <div className="apple-card" style={{
                                    width: '100%',
                                    padding: '24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    flex: 1,
                                    backgroundColor: '#ffffff',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <div style={{
                                            width: '38px',
                                            height: '38px',
                                            borderRadius: '50%',
                                            backgroundColor: `${item.color}20`,
                                            color: item.color,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 800,
                                            fontSize: '20px'
                                        }}>
                                            {item.id}
                                        </div>
                                        <div style={{ fontSize: '19px', fontWeight: 800, color: '#1d1d1f' }}>
                                            {item.persona}
                                        </div>
                                    </div>

                                    <div style={{
                                        fontStyle: 'italic',
                                        fontSize: '14px',
                                        padding: '12px',
                                        backgroundColor: 'rgba(0,0,0,0.03)',
                                        borderRadius: '8px',
                                        lineHeight: '1.4',
                                        color: '#333',
                                        minHeight: '88px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        whiteSpace: 'pre-line'
                                    }}>
                                        {item.keyword}
                                    </div>

                                    <div style={{ marginTop: '12px', borderLeft: `3px solid ${item.color}`, paddingLeft: '12px' }}>
                                        <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '6px', color: item.color, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Challenge</div>
                                        <p style={{ fontSize: '14px', lineHeight: '1.3', color: '#333' }}>{item.pain}</p>
                                    </div>
                                </div>

                                {/* Downward Arrow */}
                                <div style={{
                                    fontSize: '22px',
                                    fontWeight: 800,
                                    color: 'var(--apple-secondary-text)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '24px'
                                }}>
                                    ↓
                                </div>

                                {/* Solution Area */}
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '110px',
                                }}>
                                    <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: item.color, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>
                                        Solution
                                    </div>
                                    <div style={{
                                        fontSize: '16px',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        backgroundColor: `${item.color}15`,
                                        color: item.color,
                                        fontWeight: 800,
                                        textAlign: 'center',
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        wordBreak: 'keep-all',
                                        lineHeight: '1.4',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                                    }}>
                                        {item.feature}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MappingTable;
