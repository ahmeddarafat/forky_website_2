import Nav          from '../src/components/Nav/Nav.jsx';
import Hero         from '../src/components/Hero/Hero.jsx';
import Services     from '../src/components/Services/Services.jsx';
import Trust        from '../src/components/Trust/Trust.jsx';
import Problem      from '../src/components/Problem/Problem.jsx';
import Method       from '../src/components/Method/Method.jsx';
import Results      from '../src/components/Results/Results.jsx';
import Capabilities from '../src/components/Capabilities/Capabilities.jsx';
import CTA          from '../src/components/CTA/CTA.jsx';
import Footer       from '../src/components/Footer/Footer.jsx';
import ScrollReveal from '../src/components/ScrollReveal/ScrollReveal.jsx';

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Results />
        <Method />
        <Capabilities />
        <Problem />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
