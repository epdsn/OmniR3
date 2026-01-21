import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work - OmniR3",
  description:
    "Learn about OmniR3's proven software development methodology and collaborative approach to delivering successful projects.",
};

export default function HowWeWork() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven, transparent methodology that ensures successful delivery
              and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  STEP 1
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Discovery & Planning
                </h2>
                <p className="text-gray-600 mb-4">
                  We start by deeply understanding your business objectives,
                  technical requirements, and constraints. This phase ensures
                  we&apos;re aligned on goals and approach.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Stakeholder interviews and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Requirements gathering and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Technical architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Project roadmap and timeline</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-300 mb-4">
                      01
                    </div>
                    <p className="text-gray-600">Discovery & Planning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  STEP 2
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Iterative Development
                </h2>
                <p className="text-gray-600 mb-4">
                  We build in short iterations, delivering working software
                  regularly and incorporating feedback throughout the process.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Agile sprint cycles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Regular demos and reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Continuous integration and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Transparent progress tracking</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg md:order-1">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-300 mb-4">
                      02
                    </div>
                    <p className="text-gray-600">Iterative Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  STEP 3
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                </h2>
                <p className="text-gray-600 mb-4">
                  Quality is built in from the start, with comprehensive testing
                  at every stage to ensure reliability and performance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automated testing suites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Code reviews and pair programming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Performance and security testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>User acceptance testing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-300 mb-4">
                      03
                    </div>
                    <p className="text-gray-600">Quality Assurance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  STEP 4
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Deployment & Support
                </h2>
                <p className="text-gray-600 mb-4">
                  We ensure smooth deployment and provide ongoing support to
                  maximize the value of your investment.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automated deployment pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Production monitoring and alerting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Documentation and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ongoing maintenance and enhancements</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border border-gray-200 rounded-lg md:order-1">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-300 mb-4">
                      04
                    </div>
                    <p className="text-gray-600">Deployment & Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Working Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                Open communication, clear documentation, and regular updates
                keep everyone aligned and informed throughout the project.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We work as an extension of your team, fostering close
                collaboration to ensure the best outcomes for your business.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Continuous Improvement
              </h3>
              <p className="text-gray-600">
                We constantly refine our processes and incorporate lessons
                learned to deliver better results with each project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s start working together
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our proven approach to software development firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
