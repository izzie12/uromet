import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features3 from '~/components/widgets/Features3';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToActionData,
  faqsData2,
  featuresData,
  heroData,
} from '~/shared/data';
import Contact from '~/components/widgets/Contact';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero data={heroData} />
      {/* <SocialProof {...socialProofData} /> */}
      <Features3 {...featuresData} />
       {/* <Testimonial />
      <FAQs2 {...faqsData2} />  */}
      <Team />
       {/* <Contact />
      <CallToAction2 {...callToActionData} />  */}
    </>
  );
}
