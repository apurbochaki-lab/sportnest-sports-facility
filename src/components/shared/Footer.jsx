
const Footer = () => {
    return (
        <footer className="bg-[#283618] text-[#fefae0]">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-[#dda15e]">
                            SportNest Arena
                        </h2>
                        <p className="text-sm leading-7 text-[#fefae0]/80">
                            Discover and book premium sports facilities including football turfs,
                            badminton courts, swimming lanes, and tennis arenas with ease.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-[#dda15e]">
                            Contact Information
                        </h3>

                        <div className="space-y-2 text-sm text-[#fefae0]/80">
                            <p>Email: support@sportnest.com</p>
                            <p>Phone: +880 1234-567890</p>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-[#dda15e]">
                            Follow Us
                        </h3>

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <a
                                href="https://www.facebook.com"
                                className="border border-[#dda15e] px-4 py-2 rounded-md btn-hover font-medium"
                            >
                                Facebook
                            </a>

                            <a
                                href="https://www.instagram.com"
                                className="border border-[#dda15e] px-4 py-2 rounded-md btn-hover font-medium"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://www.x.com"
                                className="border border-[#dda15e] px-4 py-2 rounded-md btn-hover font-medium"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-[#606c38] mt-10 pt-6 text-center md:text-left">
                    <p className="text-sm text-[#fefae0]/70">
                        © 2026 Sportify Arena. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;