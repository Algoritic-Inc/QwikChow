import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#0A0F1C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#22C55E]/10 rounded-full blur-lg"></div>
                <span className="text-3xl font-bold text-[#22C55E] relative z-10">QwikChow</span>
              </div>
              <span className="ml-3 text-xs bg-[#22C55E]/20 text-[#22C55E] px-3 py-1.5 rounded-full font-medium">
                Campus Feeding Simplified
              </span>
            </div>
            <p className="text-gray-300 max-w-md mb-6 leading-relaxed text-sm">
              Revolutionizing campus food delivery across African universities with 
              cutting-edge technology, exceptional quality, and unmatched convenience.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-3">
              {[
                { 
                  icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", 
                  name: "Facebook",
                  url: "https://facebook.com/qwikchow" 
                },
                { 
                  icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", 
                  name: "Instagram",
                  url: "https://instagram.com/qwikchow" 
                },
                { 
                  icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", 
                  name: "Twitter",
                  url: "https://twitter.com/qwikchow" 
                },
                { 
                  icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", 
                  name: "GitHub",
                  url: "https://github.com/qwikchow" 
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-800/50 rounded-xl hover:bg-[#22C55E] transition-all duration-300 hover:scale-105 group"
                  aria-label={social.name}
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white flex items-center">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: 'How It Works', url: '#how-it-works' },
                { name: 'Features', url: '#features' },
                { name: 'Vision', url: '#vision' },
                { name: 'Careers', url: '/careers' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300 flex items-center group text-sm">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-[#22C55E] transition-colors duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white flex items-center">
              <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mr-3"></span>
              Support
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Help Center', url: '/help' },
                { name: 'Contact Us', url: '/contact' },
                { name: 'Privacy Policy', url: '/privacy' },
                { name: 'Terms of Service', url: '/terms' }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-gray-300 hover:text-[#22C55E] transition-colors duration-300 flex items-center group text-sm">
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-[#22C55E] transition-colors duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-[#22C55E]/10 to-[#16A34A]/10 p-6 rounded-2xl mb-12 border border-[#22C55E]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">Get the latest news and updates about our expansion</p>
            </div>
            <div className="flex-1 w-[80%]">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/5 border border-[#22C55E]/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 text-sm"
                />
                <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium px-5 py-3 rounded-xl transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with Algoritic Inc branding */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} QwikChow. All rights reserved.
          </p>
          
          
          {/* Algoritic Inc branding */}
          <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-xl border border-gray-700/50">
            <span className="text-gray-400 text-sm">Powered by</span>
            <a 
              href="https://algoritic.com.ng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <span className="font-medium text-[#22C55E]">Algoritic Inc</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;