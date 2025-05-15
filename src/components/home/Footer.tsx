import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import logo from "../../assets/images/logo.png"
import CommonWrapper from '@/common/CommonWrapper';
import HomeButton from './HomeButton';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#000000] text-white">
            <CommonWrapper>
                <div className=" mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <img src={logo} alt="logo" />

                            <p className="text-[#FFFFFF] text-base leading-relaxed pt-2">
                                Discover a wide selection of luxury villas offering exquisite designs, breathtaking views and endless amenities for an unforgettable stay.
                            </p>
                            <div className="flex space-x-3">
                                <a href="#" className="bg-[#F1B037] text-black p-2 rounded-md" aria-label="Facebook">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="bg-[#F1B037]   text-black p-2 rounded-md" aria-label="Twitter">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="bg-[#F1B037]  text-black p-2 rounded-md" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="bg-[#F1B037]   text-black p-2 rounded-md" aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>
                        {/* privacy */}
                        <div className='md:pl-10'>
                            <h4 className="text-lg font-bold mb-4 text-[#FFFFFF]">Privacy Policy</h4>
                            <ul className="space-y-2 text-base text-[#FFFFFF]">
                                {['Accounting & Taxes', 'Business Finance', 'Consumer Market', 'Strategy & Planning', 'Audit & Evaluation'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <ChevronRight size={16} className='text-[#F1B037]' />
                                        <a href="#" className="hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Terms Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-[#FFFFFF]">Terms of Service</h4>
                            <ul className="space-y-2 text-base text-[#FFFFFF]">
                                {['Booking & Payments', 'Refund Policy', 'Guest Responsibilities', 'Owner Responsibilities', 'Privacy & Data Protection'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <ChevronRight size={16} className='text-[#F1B037]' />
                                        <a href="#" className="hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Contact & Newsletter */}
                        <div>
                            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
                            <ul className="space-y-2 text-base text-[#FFFFFF] mb-6">
                                <li className="flex items-center gap-2">
                                    <Phone size={16} className='text-[#F1B037]' />
                                    +85018643855
                                </li>
                                <li className="flex items-center gap-2 ">
                                    <Mail size={16} className='text-[#F1B037]' />
                                    info.abwab@gmail.com
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin size={16} className='text-[#F1B037]' />
                                    4540 Parker Rd. Allentown
                                </li>
                            </ul>

                         
                        </div>

                         
                    </div>
                    <div className=" flex justify-end">
                         <div className="max-w-lg">
                                <h4 className="text-lg font-medium pb-3">Newsletter</h4>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-3 py-2 bg-[#333333] rounded text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                    />
                                    <HomeButton>    Subscribe</HomeButton>
                               
                                </div>
                            </div>
                    </div>
                     

                    <div className="mt-12 pt-4 border-t border-[#333333] text-center text-sm text-[#FFFFFF]">
                        <p>© 2023 abwab.com. All rights reserved.</p>
                    </div>
                </div>
            </CommonWrapper>
        </footer>
    );
};

export default Footer;