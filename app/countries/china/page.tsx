import React from 'react'

import { ContactProps } from '~/shared/types';
import {
    IconClock,
    IconMapPin,
    IconPhoneCall,
  } from '@tabler/icons-react';
import Contact2 from '~/components/widgets/Contact2';
import HeaderWidget from '~/components/common/HeaderWidget';
import Form from '~/components/common/Form';

  const contactData: ContactProps = {

    header: {
        title: 'Get in Touch',
        subtitle: 'Our team in China would love to hear from you!',
        highlight: 'China',
    },
    content:
        '',
    items: [
        {
            title: 'Our Address',
            description: ['3-2-201, Yamai Garden 126# East Hongkong Road Qingdao'],
            icon: IconMapPin,
        },
        {
            title: 'Contact',
            description: ['Mobile: 008613355421258 ', 'Office: 008653285928337 ', 'Mail: sunshguo@163169.net'],
            icon: IconPhoneCall,
        },
        {
            title: 'Working hours',
            description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
            icon: IconClock,
        },
    ],
    form: {
        title: 'Ready to Get Started?',
        inputs: [
            {
                type: 'text',
                name: 'name',
                autocomplete: 'given-name',
                placeholder: 'Your name',
            },
            {
                type: 'email',
                name: 'email',
                autocomplete: 'email',
                placeholder: 'Your email address',
            },
        ],
        textarea: {
            cols: 30,
            rows: 5,
            name: 'textarea',
            placeholder: 'Write your message...',
        },
        btn: {
            title: 'Send Message',
            type: 'submit',
        },
    },
};

const page = () => {
    const { header , content, items, form } = contactData

    return (
      <section className="bg-primary-50 dark:bg-slate-800" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</p>}
                <ul className="mb-6 md:mb-0">
                  {items.map(({ title, description, icon: Icon }, index) => (
                    <li key={`item-contact-${index}`} className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                        {typeof description === 'string' ? (
                          <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                            {description}
                          </p>
                        ) : (
                          description &&
                          description.map((desc, index) => (
                            <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                              {desc}
                            </p>
                          ))
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <Form {...form} btnPosition="center" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default page