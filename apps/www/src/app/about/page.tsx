import AboutHero from './components/AboutHero';
//import { CtaSection } from './components/CtaSection';
import { CultureSection } from './components/CultureSection';
import { LeadershipSection } from './components/LeadershipSection';
import { MissionSection } from './components/MissionSection';
import { PartnersSection } from './components/PartnersSection';
import { StatsSection } from './components/StatsSection';
import { StoryTimeline } from './components/StoryTimeline';
import { ValuesSection } from './components/ValuesSection';


export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-white">
      <AboutHero />
       <MissionSection />
      <ValuesSection />
      <StoryTimeline />
      <StatsSection />
      <LeadershipSection />
      <CultureSection />
      <PartnersSection />
      {/* <CtaSection /> */}
    </div>
  );
}