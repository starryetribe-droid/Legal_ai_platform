import React, { useEffect } from 'react';
import MarketOverviewSlide from './components/MarketOverviewSlide';
import ProblemDefinitionSlide from './components/ProblemDefinitionSlide';
import PersonaAnalysisSlide from './components/PersonaAnalysisSlide';
import PersonaDemandMappingSlide from './components/PersonaDemandMappingSlide';
import SolutionSlide from './components/SolutionSlide';
import ProductPositioningSlide from './components/ProductPositioningSlide';
import ServiceFlowSlide from './components/ServiceFlowSlide';
import ServiceExpansionSlide from './components/ServiceExpansionSlide';
import DataMoatSlide from './components/DataMoatSlide';
import TAMSlide from './components/TAMSlide';

const slides = [
  TAMSlide,
  MarketOverviewSlide,
  PersonaAnalysisSlide,
  PersonaDemandMappingSlide,
  ProblemDefinitionSlide,
  SolutionSlide,
  ProductPositioningSlide,
  DataMoatSlide,
  ServiceFlowSlide,
  ServiceExpansionSlide
];

const App: React.FC = () => {
  useEffect(() => {
    console.log('Proposal App Initialized');
    // Prevent default pinch-zoom or other gestures if needed
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault();
    };
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <main className="slides-wrapper">
      {slides.map((Slide, index) => (
        <React.Fragment key={index}>
          <Slide />
        </React.Fragment>
      ))}
    </main>
  );
};

export default App;
