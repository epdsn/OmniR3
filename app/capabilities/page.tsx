import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capabilities - OmniR3",
  description:
    "Explore OmniR3's comprehensive software development capabilities, from custom applications to cloud infrastructure and system integration.",
};

export default function Capabilities() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Capabilities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services designed to meet the
              most demanding enterprise requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Software Development
              </h2>
              <p className="text-gray-600 mb-4">
                We design and build tailored software solutions that align
                perfectly with your business processes and goals.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enterprise application development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Web and mobile applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>API design and development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Microservices architecture</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cloud Infrastructure
              </h2>
              <p className="text-gray-600 mb-4">
                Build scalable, secure cloud infrastructure that grows with your
                business needs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Azure cloud solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Infrastructure as Code</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cloud migration and modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>DevOps and CI/CD pipelines</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                System Integration
              </h2>
              <p className="text-gray-600 mb-4">
                Connect your existing systems and create seamless data flows
                across your technology landscape.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Third-party API integration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy system modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Data synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enterprise service bus implementation</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h2>
              <p className="text-gray-600 mb-4">
                Ensure your software meets the highest standards through
                comprehensive testing and quality assurance processes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automated testing frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Performance and load testing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Security testing and audits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Continuous quality monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with modern, proven technologies to deliver robust
              solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Frontend</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Backend</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Node.js</li>
                <li>.NET Core</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Cloud</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Microsoft Azure</li>
                <li>AWS</li>
                <li>Google Cloud</li>
                <li>Kubernetes</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Databases</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>SQL Server</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to discuss your project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s talk about how our capabilities can address your specific
            needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
