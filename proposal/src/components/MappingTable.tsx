import React from 'react';

const MappingTable: React.FC = () => {
    const data = [
        { id: 'A', persona: '가해학생 부모', keyword: '"몇 호 나올까요?"\n"의견서 어떻게 써요?"', pain: '처분 예측 불확실성 · 고비용 법률장벽', feature: 'AI 처분 예측 · 의견서 자동 초안 생성', color: '#0066cc' },
        { id: 'B', persona: '피해학생 부모', keyword: '"맞학폭 어떻게 막아요?"\n"증거가 부족해요"', pain: '입증 난이도 · 편파 심의 불신', feature: '유사 판례 및 조항 검색 · 맞학폭 방어 전략', color: '#0066cc' },
        { id: 'a', persona: '가해학생', keyword: '"진술서에 뭐라고 써요?"\n"솔직히 말하면..."', pain: '학생 눈높이 정보 부재 · 심의 공포', feature: '학생용 진술 가이드 · 심의 시뮬레이션', color: '#ff3b30' },
        { id: 'b', persona: '피해학생', keyword: '"이게 학폭 맞나요?"\n(침묵)일 커지는 게 무서워요', pain: '고립·재트라우마 · 증거 수집 무력감', feature: '익명 상담 채널 · 안전한 증거 기록 도구', color: '#ff3b30' },
        { id: 'C', persona: '상담사', keyword: '"법률적으로 도와줄 수 없어 답답해요"', pain: '법률·절차 안내 공백 · 반복 질문 한계', feature: '상담 보조 리포트 · 출처 명확 법률 정보', color: '#34c759' },
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '12px'
        }}>
            {data.map((item, idx) => (
                <div key={idx} className="apple-card" style={{
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: '18px',
                    overflow: 'hidden'
                }}>
                    <div style={{ padding: '24px 24px 12px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                            <span style={{
                                backgroundColor: item.color,
                                color: 'white',
                                padding: '3px 8px',
                                borderRadius: '4px',
                                fontSize: '16px',
                                fontWeight: 700
                            }}>{item.id}</span>
                            <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{item.persona}</h3>
                        </div>

                        <div style={{
                            padding: '12px 16px',
                            backgroundColor: 'rgba(0,0,0,0.04)',
                            borderRadius: '8px',
                            border: 'none',
                        }}>
                            <div style={{
                                fontSize: '16px',
                                color: '#1d1d1f',
                                fontStyle: 'italic',
                                lineHeight: '1.5',
                                whiteSpace: 'pre-line'
                            }}>
                                {item.keyword}
                            </div>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <p style={{ fontSize: '16px', color: 'var(--apple-secondary-text)', marginBottom: '4px', fontWeight: 600 }}>Challenge</p>
                            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{item.pain}</p>
                        </div>
                    </div>

                    <div style={{
                        padding: '20px 24px',
                        backgroundColor: `${item.color}10`,
                        borderTop: `1px solid ${item.color}20`,
                        borderRadius: '0 0 18px 18px'
                    }}>
                        <p style={{ fontSize: '16px', color: item.color, marginBottom: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '18px' }}>✨</span> Solution
                        </p>
                        <p style={{ fontSize: '16px', fontWeight: 600, color: '#1d1d1f', lineHeight: '1.5' }}>{item.feature}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MappingTable;
