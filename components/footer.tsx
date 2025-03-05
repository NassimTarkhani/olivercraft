export function Footer() {
  return (
    <footer className="bg-white text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-black hover:text-gray-800">
              OLIVER CRAFT
            </h2>
            <p className="max-w-md text-black">
              OLIVER CRAFT is a digital agency specializing in creating
              exceptional digital experiences for luxury and premium brands
              worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#work"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-800 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black hover:text-gray-800 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OLIVER CRAFT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-black hover:text-gray-800 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
