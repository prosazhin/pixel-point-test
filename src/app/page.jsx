'use client';

import { Tab, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

import Divider from 'components/shared/divider';
import Tabs from 'components/shared/tabs';

const data = [
  {
    title: 'Renewal Tracking',
    description:
      'Set up alerts, notifications, and workflows for renewals so you never miss one again. Lorem ipsum dolor sit amet consectetur. Volutpat a molestie proin nisi odio est. A libero quam augue elit. Et auctor vitae neque nibh vitae gravida turpis curabitur.',
    image_url: '/image/renewal_tracking.png',
  },
  {
    title: 'Contract Dashboard',
    description:
      'End-to-end visibility into contract data so you can make smarter decisions. Volutpat a molestie proin nisi odio est. A libero quam augue elit. Et auctor vitae neque nibh vitae gravida turpis curabitur.Volutpat a molestie proin nisi odio est. A libero quam augue elit. Et auctor vitae neque nibh vitae gravida turpis curabitur.',
    image_url: '/image/contract_dashboard.png',
  },
  {
    title: 'Contract Calendar',
    description:
      'See committed contract commits and spend years out in a single view. Et auctor vitae neque nibh vitae gravida turpis curabitur.Volutpat a molestie proin nisi odio est. A libero quam augue elit. Et auctor vitae neque nibh vitae gravida turpis curabitur.Et auctor vitae neque nibh vitae gravida turpis curabitur.Volutpat a molestie proin nisi odio est. A libero quam augue elit. Et auctor vitae neque nibh vitae gravida turpis curabitur.',
    image_url: '/image/contract_calendar.png',
  },
  {
    title: 'Clause Library',
    description:
      'Create a collection of templates across various clause types. Capture and compare clauses across all contracts in seconds.',
    image_url: '/image/clause_library.png',
  },
  {
    title: 'Contract Hierarchy',
    description:
      'Organize complex parent/child relationships. View the “Relationship Tree” to show the entire hierarchy and see where the current contract fits into the family, consolidate agreements, and simplify contract administration',
    image_url: '/image/contract_hierarchy.png',
  },
];

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="m-auto block w-full max-w-[1472px] px-[44px] md:w-full sm:px-[28px] xs:px-[16px]">
      <section className="relative w-full after:absolute after:inset-x-0 after:top-[-120px] after:-z-10 after:m-auto after:h-[630px] after:w-[630px] after:rounded-full after:bg-primary-1 after:opacity-20 after:blur-[400px]">
        <Divider />
        <h2 className="inline-block w-full text-center text-[72px] font-normal leading-[1.12em] tracking-[-0.01em] text-gray-98 drop-shadow-headline md:text-[60px] sm:text-[48px] xs:text-[32px]">
          Core Features
        </h2>
        <Tabs
          data={data}
          keyName="title"
          display="title"
          selectedIndex={selectedIndex}
          className="mt-[56px] md:mt-[40px] sm:mt-[36px] xs:mt-[28px]"
          onChange={setSelectedIndex}
        >
          <Tab.Panels className="mt-[64px] w-full md:mt-[48px] sm:mt-[44px] xs:mt-[32px]">
            {data.map((tab, index) => (
              <Tab.Panel key={tab.title}>
                <Transition
                  show={selectedIndex === index}
                  enter="transition ease-in-out duration-[1200ms] delay-100"
                  enterFrom="transform opacity-0 scale-90"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in-out duration-[1200ms]"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-90"
                  appear
                >
                  <div className="flex w-full flex-row items-center justify-center space-x-[80px] md:space-x-0 sm:flex-col sm:space-y-[48px] xs:space-y-[40px]">
                    <div className="flex flex-col items-start justify-start space-y-[20px] xs:space-y-[16px]">
                      <h3 className="w-full text-[60px] font-normal leading-[1.12em] tracking-[-0.01em] text-gray-98 drop-shadow-headline md:text-[40px] sm:text-[36px] xs:text-[28px]">
                        {tab.title}
                      </h3>
                      <p className="text-[18px] font-light leading-normal tracking-[0.02em] text-gray-94 md:text-[16px] md:leading-snug">
                        {tab.description}
                      </p>
                      <a
                        href="https://pixelpoint.io"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[16px] font-medium leading-none text-primary-1 transition hover:text-primary-2"
                      >
                        Learn more
                      </a>
                    </div>
                    <Image src={tab.image_url} width={946} height={640} alt="image" />
                  </div>
                </Transition>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tabs>
      </section>
    </div>
  );
};

export default Home;
