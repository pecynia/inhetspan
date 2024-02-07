import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/dictionaries/routes';
import { contactInfo, location } from '@/dictionaries/contactInfo';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary pb-8 pt-12 px-16 text-primary-foreground">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">

                {/* Logo & Description */}
                <div className="flex flex-col items-center">
                    <Image src='/logo.png' alt='Logo' width={160} height={100} priority />
                    <p className="text-center mt-4 mb-2">het Span Medisch Centrum</p>
                    <p className="text-center font-thin">{location.street} {location.number}, {location.city}</p>
                    <p className="text-center font-thin">{location.zip}</p>
                </div>

                {/* Navigation */}
                <div className=''>
                    <h1 className="text-3xl text-primary-secondary mb-4">Navigatie</h1>
                    {routes.map(route => (route.includeInHeader &&
                        <Link key={route.href} href={route.href}>
                            <div className="mb-2 hover:underline cursor-pointer">{route.label}</div>
                        </Link>
                    ))}
                </div>

                {/* Contact */}
                <div className='space-y-2'>
                    <h1 className="text-3xl text-primary-secondary mb-4">Contact</h1>
                    <p>{contactInfo.name}</p>
                    <div className="flex items-center mb-2 hover:text-secondary-foreground">
                        <Mail className="mr-2" />
                        <Link href={`mailto:${contactInfo.email}`}>
                            {contactInfo.email}
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 flex justify-center font-thin items-center space-x-4">
                <p>kvk: {contactInfo.kvk}</p>
                <p>&copy; het Span {new Date().getFullYear()}</p>
                <p>
                    Website gemaakt door
                    <Link href="https://boostmaestro.com" target="_blank" className='hover:text-secondary'>
                        <span className="font-bold font-raleway"> Boost Maestro</span>
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
