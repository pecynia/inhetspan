import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, LibraryBig, Brush, LucideLockKeyhole, MoveRight} from 'lucide-react';
import { contactInfo, location } from '@/dictionaries/contactInfo';

const AboutPage = () => {
    const aboutLinks = [
        { title: 'Wat is Span?', href: '/wat-is-span', color: 'bg-red-100', icon: <LibraryBig size={24} /> },
        { title: 'Kunst in het Span', href: '/kunst-in-het-span', color: 'bg-blue-100', icon: <Brush size={24} /> },
        { title: 'Camerabewaking', href: '/camerabewaking', color: 'bg-green-100', icon: <LucideLockKeyhole size={24} /> },
    ];

    return (
        <div className='px-12 lg:px-24 mx-auto'>
          {/* About Links */}
          <div className='mb-16 '>
              <h2 className='text-3xl font-bold mb-8 mt-16'>Kijk eens rond</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-4' >
                  {aboutLinks.map((link, index) => (
                      <Link key={index} href={link.href}>
                          <div className={`cursor-pointer ${link.color} rounded-lg p-6 shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out`}>
                              <h3 className='text-lg font-semibold flex items-center'><span className='mr-2'>{link.icon}</span> {link.title} <span className='ml-2'><MoveRight size={16} /></span></h3>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>

          {/* Contact Information */}
          <div className='bg-primary rounded-3xl p-8 text-primary-foreground mb-10'>
              <div className='mb-6'>
                    <h2 className='text-2xl font-bold mb-4'>Contact</h2>
                    <p className='flex items-center mb-2'>
                        <MapPin className='mr-2' />
                        {location.street} {location.number}, {location.city}, {location.zip}
                    </p>
                    <p className='flex items-center mb-2'>
                        <Mail className='mr-2' />
                        <Link href={`mailto:${contactInfo.email}`} className='hover:text-secondary-foreground'>
                            {contactInfo.email}
                        </Link>
                  </p>
              </div>
          </div>
      </div>
    );
};

export default AboutPage;
