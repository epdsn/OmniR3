import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - OmniR3",
  description:
    "Learn about OmniR3's mission, values, and commitment to delivering reliable software systems that scale.",
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About OmniR3
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re a software agency dedicated to building enterprise-grade
              systems that are reliable, responsible, and repeatable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At OmniR3, we believe that great software is more than just code—it&apos;s
            a foundation for business success. Our mission is to deliver software
            systems that organizations can truly depend on, built with
            responsibility and designed to work consistently across all
            scenarios.
          </p>
          <p className="text-lg text-gray-600">
            We achieve this by focusing on three core principles: Reliability,
            Responsibility, and Repeatability. These aren&apos;t just buzzwords—they&apos;re
            the lens through which we evaluate every decision, from architecture
            choices to deployment strategies.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values shape how we work and the solutions we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on quality. Every line of code is written
                with care, every design decision is deliberate, and every
                deployment is thoroughly tested.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Client Success
              </h3>
              <p className="text-gray-600">
                Your success is our success. We measure our achievements by the
                value we deliver and the long-term impact of our solutions on
                your business.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Technical Excellence
              </h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, continuously learning
                and applying best practices to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ethical Practice
              </h3>
              <p className="text-gray-600">
                We conduct business with integrity, transparency, and respect
                for all stakeholders, always doing what&apos;s right for our clients
                and their users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What Makes Us Different
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enterprise-Safe by Default
              </h3>
              <p className="text-gray-600">
                We understand the unique challenges of enterprise environments.
                Security, compliance, scalability, and maintainability are
                built into every solution from the ground up.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                No Vendor Lock-In
              </h3>
              <p className="text-gray-600">
                We build solutions using open standards and industry-standard
                technologies. You own your software, and you&apos;re never locked
                into proprietary platforms or dependencies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Long-Term Partnership
              </h3>
              <p className="text-gray-600">
                We&apos;re not just here for the initial build. We partner with you
                for the long term, evolving your software as your business
                grows and requirements change.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                Our methodologies are battle-tested across numerous projects and
                industries. We bring this experience to every engagement,
                helping you avoid common pitfalls and achieve faster results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how OmniR3 can help bring your software vision to
            life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
