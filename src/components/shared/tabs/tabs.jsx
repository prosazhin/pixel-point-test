/* eslint-disable react/require-default-props */

'use client';

import { Tab } from '@headlessui/react';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Tabs = ({ className: additionalClassName, data, keyName, display, children, ...props }) => (
  <Tab.Group as="div" className={`${additionalClassName}`} {...props}>
    <Tab.List className="relative w-full">
      <div className=" flex w-auto flex-row flex-nowrap justify-center space-x-[56px] overflow-x-auto md:justify-start xs:space-x-[32px]">
        {data.map((item) => (
          <Tab as={Fragment} key={item[keyName]}>
            {({ selected }) => (
              <button
                type="button"
                className={`relative whitespace-nowrap pb-[10px] text-[18px] font-normal leading-snug tracking-[0.02em] text-gray-98 transition duration-200 hover:text-primary-1 md:text-[16px] sm:text-[15px] sm:leading-tight xs:text-[13px] ${
                  selected
                    ? 'font-medium text-primary-1 after:absolute after:inset-x-0 after:bottom-0 after:z-20 after:h-[2px] after:w-full after:bg-primary-1'
                    : ''
                }`}
              >
                {item[display]}
              </button>
            )}
          </Tab>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-[1px] w-full bg-tabs-border mix-blend-overlay" />
    </Tab.List>
    {children}
  </Tab.Group>
);

Tabs.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  keyName: PropTypes.string,
  display: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Tabs;
