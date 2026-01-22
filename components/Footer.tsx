import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">OmniR3</h3>
            <p className="text-gray-600 text-sm">
              Reliable software systems, built to scale.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  How We Work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              The R3 Principles
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Reliable</li>
              <li>Responsible</li>
              <li>Repeatable</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            © {currentYear} OmniR3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
