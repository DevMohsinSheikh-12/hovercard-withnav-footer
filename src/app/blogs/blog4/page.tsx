import React from 'react';
import Footer from '@/app/components/Footer';

function page() {
  return (
    <div className='bg-cardpurple bg-cover opacity-90 bg-blur-sm text-white'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-buttoncolor mb-6">Mastering Cloud Computing</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">What is Cloud Computing?</h2>
          <p className="text-purple-100">
            Cloud computing is the delivery of computing services over the internet, offering on-demand access to resources.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Types of Cloud Services (IaaS, PaaS, SaaS)</h2>
          <p className="text-purple-100">
            Cloud services include IaaS, PaaS, and SaaS, each offering different advantages for diverse use cases.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Key Benefits of Cloud Computing</h2>
          <p className="text-purple-100">
            Benefits include cost efficiency, scalability, enhanced security, and improved collaboration across organizations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Popular Cloud Platforms</h2>
          <p className="text-purple-100">
            Platforms like AWS, Microsoft Azure, and Google Cloud offer a variety of services for different organizational needs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Setting Up a Cloud Environment</h2>
          <p className="text-purple-100">
            Setting up involves choosing services, configuring resources, and ensuring security for optimal performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Best Practices for Cloud Security</h2>
          <p className="text-purple-100">
            Security practices include strong access controls, monitoring resources, and encrypting sensitive data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Future of Cloud Technology</h2>
          <p className="text-purple-100">
            The future includes AI integration, serverless computing, and edge computing, enhancing efficiency and reducing latency.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default page;
