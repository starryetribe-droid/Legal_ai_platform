import React from 'react';

const ChartSection: React.FC = () => {
    return (
        <div style={{ display: 'flex', gap: '16px', margin: '8px 0' }}>
            {/* Bar Chart Container - Trends */}
            <div className="apple-card" style={{ flex: 1.2, padding: '16px' }}>
                <h3 className="card-title" style={{ marginBottom: '12px', fontSize: '17px' }}>학폭 사안 접수 vs 학폭위 회부 건수 (2020→2024)</h3>

                <div style={{ marginBottom: '12px' }}>
                    <p className="caption-text" style={{ marginBottom: '2px', fontSize: '14px' }}>학폭 사안 접수</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px' }}>2020</span>
                        <div style={{ flex: 1, height: '24px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '44%', height: '100%', background: '#0066cc', opacity: 0.3, borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', fontWeight: 600 }}>25,903</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px' }}>2024</span>
                        <div style={{ flex: 1, height: '24px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '100%', height: '100%', background: '#0066cc', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', fontWeight: 600, color: 'white' }}>58,502</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="caption-text" style={{ marginBottom: '2px', fontSize: '14px' }}>학폭위 회부</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px' }}>2020</span>
                        <div style={{ flex: 1, height: '24px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '30%', height: '100%', background: '#ff3b30', opacity: 0.3, borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', fontWeight: 600 }}>8,357</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px' }}>2024</span>
                        <div style={{ flex: 1, height: '24px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '100%', height: '100%', background: '#ff3b30', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', fontWeight: 600, color: 'white' }}>27,835</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Donut Chart Container - Victim Types */}
            <div className="apple-card" style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 className="card-title" style={{ marginBottom: '10px', fontSize: '17px', alignSelf: 'flex-start' }}>피해 유형별 비율 (2025)</h3>
                <div style={{ width: '140px', height: '140px', position: 'relative', marginBottom: '10px' }}>
                    <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#eee" strokeWidth="4" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#0071e3" strokeWidth="4" strokeDasharray="39 100" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#ffcc00" strokeWidth="4" strokeDasharray="16.4 100" strokeDashoffset="-39" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#ff3b30" strokeWidth="4" strokeDasharray="14.6 100" strokeDashoffset="-55.4" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#34c759" strokeWidth="4" strokeDasharray="7.8 100" strokeDashoffset="-70" />
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#af52de" strokeWidth="4" strokeDasharray="22.2 100" strokeDashoffset="-77.8" />
                    </svg>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '4px 6px',
                    width: '100%',
                    paddingTop: '6px',
                    borderTop: '1px solid #f5f5f7'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                        <div style={{ width: '7px', height: '7px', background: '#0071e3', borderRadius: '2px' }}></div>
                        <span style={{ whiteSpace: 'nowrap' }}>언어폭력 39.0</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                        <div style={{ width: '7px', height: '7px', background: '#ffcc00', borderRadius: '2px' }}></div>
                        <span style={{ whiteSpace: 'nowrap' }}>따돌림 16.4</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                        <div style={{ width: '7px', height: '7px', background: '#af52de', borderRadius: '2px' }}></div>
                        <span style={{ whiteSpace: 'nowrap' }}>기타 22.2</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                        <div style={{ width: '7px', height: '7px', background: '#ff3b30', borderRadius: '2px' }}></div>
                        <span style={{ whiteSpace: 'nowrap' }}>신체폭력 14.6</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                        <div style={{ width: '7px', height: '7px', background: '#34c759', borderRadius: '2px' }}></div>
                        <span style={{ whiteSpace: 'nowrap' }}>사이버 7.8</span>
                    </div>
                </div>
            </div>

            {/* Bar Chart Container - School Levels */}
            <div className="apple-card" style={{ flex: 1.1, padding: '16px' }}>
                <h3 className="card-title" style={{ marginBottom: '12px', fontSize: '17px' }}>학교급별 피해응답률 (2025학년도 1차)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* 전체 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>전체</span>
                        <div style={{ flex: 1, height: '22px', background: '#f5f5f7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '50%', height: '100%', background: '#86868b', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', left: 'calc(50% + 6px)', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700 }}>2.5%</span>
                        </div>
                    </div>
                    {/* 초등학교 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>초등학교</span>
                        <div style={{ flex: 1, height: '22px', background: '#f5f5f7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '100%', height: '100%', background: '#ff3b30', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700, color: 'white' }}>5.0%</span>
                        </div>
                    </div>
                    {/* 중학교 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>중학교</span>
                        <div style={{ flex: 1, height: '22px', background: '#f5f5f7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '42%', height: '100%', background: '#0071e3', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', left: 'calc(42% + 6px)', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700 }}>2.1%</span>
                        </div>
                    </div>
                    {/* 고등학교 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>고등학교</span>
                        <div style={{ flex: 1, height: '22px', background: '#f5f5f7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '14%', height: '100%', background: '#34c759', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', left: 'calc(14% + 6px)', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700 }}>0.7%</span>
                        </div>
                    </div>
                </div>
                <p className="caption-text" style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '13px' }}>
                    * 특징: 초등학생 피해 응답이 압도적으로 높음
                </p>
            </div>
        </div>
    );
};

export default ChartSection;
