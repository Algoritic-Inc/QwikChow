import { Mail, MapPin, Phone } from "lucide-react";

export default function MobileFooter() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10">
      <div className="text-center mb-8">
        <h2 className="text-white text-xl font-semibold">QwikChow</h2>
        <p className="text-sm mt-2">
          The open platform for students to find and discover new dining options
          and connect with the restaurant.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4 ">
          <a href="#" className="hover:text-white">
            <img src="/twitter.png" alt="Twitter" className="w-[25px]" />
          </a>

          <a href="#" className="hover:text-white">
            <img src="/instagram.png" alt="instagram" className="w-[25px]" />
          </a>
          <a href="#" className="hover:text-white">
            <img src="/facebook.png" alt="facebook" className="w-[25px]" />
          </a>
          <a href="#" className="hover:text-white">
            <img src="/gmail.png" alt="gmail" className="w-[25px]" />
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 gap-8 text-center">
        <div>
          <h3 className="text-white font-medium mb-2">Explore</h3>
          <ul className="space-y-1 text-sm opacity-70">
            <li>
              <a href="#" className="hover:text-white">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Job Board
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Scholarships
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Share Content
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-2">Contact</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li className="flex items-center justify-center gap-2 ">
              <MapPin size={16} className="text-green-700" /> Lagos, Nigeria
            </li>
            <li className="flex items-center justify-center gap-2">
              <Mail size={16} className="text-green-700" /> qwikchow@gmail.com
            </li>
            <li className="flex items-center justify-center gap-2">
              <Phone size={16} /> +234 800 000 0000
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Stay Updated</h3>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-md px-3 py-2 text-sm text-white  focus:outline-none border border-white mb-3"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} QwikChow. All rights reserved.
      </div>
    </footer>
  );
}
