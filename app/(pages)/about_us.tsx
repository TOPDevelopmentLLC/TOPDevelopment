import { Stats } from 'components/data/Stats';
import { BasePage } from 'components/layout/BasePage';
import { CTASection } from 'components/layout/CTASection';
import { HeroSection } from 'components/layout/HeroSection';
import { OurMissionSection } from 'components/layout/OurMissionSection';
import { OurStorySection } from 'components/layout/OurStorySection';
import { ValuesSection } from 'components/layout/ValuesSection';
import { router } from 'expo-router';
import { values } from 'lib/data/about_us';
import React from 'react';

const AboutUs = () => {

  const handleNavigate = (page: string) => {
    const pageMap: { [key: string]: string } = {
      contact: '/contact_us',
      services: '/services',
      about: '/about_us',
      pricing: '/pricing',
      faq: '/faq',
    };

    const route = pageMap[page];
    if (route) {
      router.push(route as any);
    }
  };

  return (
    <BasePage>
      <HeroSection
        badge="About Us"
        title="Building Solutions That Matter"
        subtitle="Founded in 2025, driven by passion, powered by innovation"
      />
      <OurStorySection
        title="Our Story"
        paragraphs={[
          "TOP Development LLC was founded in September 2025 out of a passion for software development and a drive to solve meaningful problems. What began as an unexpected journey—starting in Pre-Law before realizing that path wasn't the right fit—turned into a pursuit of creating solutions that truly matter.",
          "That realization led to a move to Florida, where I attended Full Sail University and earned an Associate's Degree in Mobile Development. Over time, my skills expanded beyond mobile into web, backend, and DevOps, allowing me to build across the full stack of modern development.",
          "Today, TOP Development LLC is built on that same foundation of curiosity, adaptability, and commitment to delivering impactful software."
        ]}
      />
      <OurMissionSection
        title="Our Mission"
        paragraphs={[
          "At TOP Development LLC, our mission is simple: solve real problems with practical and lasting solutions. We take the time to analyze your unique needs, then design strategies that fit—not just for today, but for the future.",
          "By modernizing infrastructure and leveraging modern frameworks, we create solutions that are efficient, scalable, and built to grow with you. Our goal is to deliver technology that empowers, streamlines, and makes a meaningful difference."
        ]}
      />
      <ValuesSection
        title="Our Values"
        subtitle="The principles that guide every project and partnership"
        values={values}
      />
      <Stats
        stats={[
          { number: '2025', label: 'Founded' },
          { number: '24/7', label: 'Support Available' },
          { number: '∞', label: 'Possibilities' },
        ]}
      />
      <CTASection
        title="Let's Build Something Great Together"
        subtitle="Ready to start your project? Get in touch and let's discuss how we can help you achieve your goals."
        buttonText="Contact Us"
        onPressAction={() => handleNavigate('contact')}
      />
    </BasePage>
  );
};

export default AboutUs;
