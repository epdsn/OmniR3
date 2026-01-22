import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OmniR3 - Reliable Software Systems Built to Scale",
  description:
    "OmniR3 delivers reliable, responsible, and repeatable software systems. Enterprise-grade solutions built to scale with your business.",
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Reliable software systems,
              <br />
              built to scale.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We deliver enterprise-grade software solutions that are reliable,
              responsible, and repeatable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800"
              >
                Get Started Today
              </Link>
              <Link
                href="/capabilities"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50"
              >
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* R3 Principles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The R3 Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach to software development is built on three fundamental
              principles that ensure success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                R
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reliable
              </h3>
              <p className="text-gray-600">
                We build systems you can depend on. Our solutions are designed
                with fault tolerance, comprehensive testing, and robust error
                handling to ensure consistent performance under all conditions.
              </p>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                R
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Responsible
              </h3>
              <p className="text-gray-600">
                We take ownership of our work. From security best practices to
                sustainable architecture decisions, we ensure our solutions meet
                the highest standards of quality and accountability.
              </p>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                R
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Repeatable
              </h3>
              <p className="text-gray-600">
                We establish processes that work. Through automation, clear
                documentation, and proven methodologies, we deliver consistent
                results that can scale across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose OmniR3
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical excellence with business understanding to
              deliver solutions that drive real value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enterprise-Grade Quality
              </h3>
              <p className="text-gray-600">
                Our solutions meet the rigorous demands of enterprise
                environments, with security, scalability, and maintainability
                built in from day one.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proven Methodologies
              </h3>
              <p className="text-gray-600">
                We leverage industry best practices and battle-tested approaches
                to deliver predictable results on time and within budget.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Long-Term Partnership
              </h3>
              <p className="text-gray-600">
                We&apos;re not just building software—we&apos;re building
                relationships. Our commitment extends beyond deployment to
                ongoing support and evolution.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technology Expertise
              </h3>
              <p className="text-gray-600">
                Our team stays current with emerging technologies while
                maintaining deep expertise in proven platforms, ensuring the
                right solution for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build something great?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how OmniR3 can help you achieve your software
            goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
