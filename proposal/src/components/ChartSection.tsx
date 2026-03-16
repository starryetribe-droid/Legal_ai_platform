import React from 'react';

const ChartSection: React.FC = () => {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            {/* Bar Chart Container - Trends */}
            <div className="apple-card" style={{ flex: 1.2, padding: '16px', display: 'flex', flexDirection: 'column' }}>
                <h3 className="card-title" style={{ marginBottom: '20px', fontSize: '19px' }}>학폭 사안 접수 vs 학폭위 회부 건수 (2020→2024)</h3>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                    <p className="caption-text" style={{ marginBottom: '2px', fontSize: '14px' }}>학폭 사안 접수</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px' }}>2020</span>
                        <div style={{ flex: 1, height: '20px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '44%', height: '100%', background: '#0066cc', opacity: 0.3, borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', fontWeight: 600 }}>25,903</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px', color: '#0066cc', fontWeight: 700 }}>2024</span>
                        <div style={{ flex: 1, height: '20px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '100%', height: '100%', background: '#0066cc', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', fontWeight: 600, color: 'white' }}>58,502</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="caption-text" style={{ marginBottom: '2px', fontSize: '14px' }}>학폭위 회부</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px' }}>2020</span>
                        <div style={{ flex: 1, height: '20px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '30%', height: '100%', background: '#ff3b30', opacity: 0.3, borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', fontWeight: 600 }}>8,357</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="caption-text" style={{ width: '40px', fontSize: '14px', color: '#ff3b30', fontWeight: 700 }}>2024</span>
                        <div style={{ flex: 1, height: '20px', background: '#d2d2d7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '100%', height: '100%', background: '#ff3b30', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', fontWeight: 600, color: 'white' }}>27,835</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Donut Chart Container - Victim Types */}
            <div className="apple-card" style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 className="card-title" style={{ marginBottom: '20px', fontSize: '19px' }}>피해 유형별 비율 (2025)</h3>
                
                <div style={{ display: 'flex', alignItems: 'stretch', gap: '24px', flex: 1 }}>
                    {/* Left: Donut Chart Enlagred by ~25% */}
                    <div style={{ width: '150px', height: '150px', position: 'relative', flexShrink: 0, alignSelf: 'center' }}>
                        <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#eee" strokeWidth="4" />
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#0071e3" strokeWidth="4" strokeDasharray="39 100" />
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#ffcc00" strokeWidth="4" strokeDasharray="16.4 100" strokeDashoffset="-39" />
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#ff3b30" strokeWidth="4" strokeDasharray="14.6 100" strokeDashoffset="-55.4" />
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#34c759" strokeWidth="4" strokeDasharray="7.8 100" strokeDashoffset="-70" />
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#af52de" strokeWidth="4" strokeDasharray="22.2 100" strokeDashoffset="-77.8" />
                        </svg>
                    </div>

                    {/* Right: Legend & Percentage (Data Emphasized) */}
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                        
                        {/* 1st - Highlighted */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,113,227,0.06)', padding: '6px 12px', borderRadius: '8px', marginLeft: '-12px', marginRight: '12px' }}>
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#0071e3', width: '56px' }}>39.0<span style={{ fontSize: '14px' }}>%</span></span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', background: '#0071e3', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '16px', color: '#0071e3', fontWeight: 700 }}>언어폭력</span>
                            </div>
                        </div>
                        
                        {/* 2nd */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1d1d1f', width: '56px' }}>22.2<span style={{ fontSize: '14px' }}>%</span></span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', background: '#af52de', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '14px', color: '#86868b', fontWeight: 500 }}>기타</span>
                            </div>
                        </div>

                        {/* 3rd */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1d1d1f', width: '56px' }}>16.4<span style={{ fontSize: '14px' }}>%</span></span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', background: '#ffcc00', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '14px', color: '#86868b', fontWeight: 500 }}>따돌림</span>
                            </div>
                        </div>

                        {/* 4th */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1d1d1f', width: '56px' }}>14.6<span style={{ fontSize: '14px' }}>%</span></span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', background: '#ff3b30', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '14px', color: '#86868b', fontWeight: 500 }}>신체폭력</span>
                            </div>
                        </div>

                        {/* 5th */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1d1d1f', width: '56px' }}>7.8<span style={{ fontSize: '14px' }}>%</span></span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <div style={{ width: '8px', height: '8px', background: '#34c759', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '14px', color: '#86868b', fontWeight: 500 }}>사이버</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bar Chart Container - School Levels */}
            <div className="apple-card" style={{ flex: 1.1, padding: '16px', display: 'flex', flexDirection: 'column' }}>
                <h3 className="card-title" style={{ marginBottom: '20px', fontSize: '19px' }}>학교급별 피해응답률 (2025학년도 1차)</h3>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                    {/* 전체 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>전체</span>
                        <div style={{ flex: 1, height: '18px', background: '#f5f5f7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '50%', height: '100%', background: '#86868b', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', left: 'calc(50% + 6px)', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700 }}>2.5%</span>
                        </div>
                    </div>
                    {/* 초등학교 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,59,48,0.08)', padding: '6px 12px', borderRadius: '8px', marginLeft: '-12px', marginRight: '12px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 800, color: '#ff3b30', whiteSpace: 'nowrap' }}>초등학교</span>
                        <div style={{ flex: 1, height: '18px', background: '#ffffff', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '100%', height: '100%', background: '#ff3b30', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700, color: 'white' }}>5.0%</span>
                        </div>
                    </div>
                    {/* 중학교 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>중학교</span>
                        <div style={{ flex: 1, height: '18px', background: '#f5f5f7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '42%', height: '100%', background: '#0071e3', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', left: 'calc(42% + 6px)', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700 }}>2.1%</span>
                        </div>
                    </div>
                    {/* 고등학교 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="caption-text" style={{ width: '60px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>고등학교</span>
                        <div style={{ flex: 1, height: '18px', background: '#f5f5f7', borderRadius: '4px', position: 'relative' }}>
                            <div style={{ width: '14%', height: '100%', background: '#34c759', borderRadius: '4px' }}></div>
                            <span style={{ position: 'absolute', left: 'calc(14% + 6px)', top: '50%', transform: 'translateY(-50%)', fontSize: '13px', fontWeight: 700 }}>0.7%</span>
                        </div>
                    </div>
                </div>
                <p className="caption-text" style={{ marginTop: '12px', fontStyle: 'italic', fontSize: '13px' }}>
                    * 특징: 초등학생 피해 응답이 압도적으로 높음
                </p>
                </div>
            </div>
        </div>
    );
};

export default ChartSection;
