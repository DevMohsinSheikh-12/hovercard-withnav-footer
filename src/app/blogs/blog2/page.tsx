import Footer from '@/app/components/Footer';
import React from 'react';

function page() {
  return (
    <div className='bg-cardpurple bg-cover opacity-90 bg-blur-sm text-white'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-buttoncolor mb-6">Exploring Shadcn UI</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">What is Shadcn UI?</h2>
          <p className="text-purple-100">
            Shadcn UI is a modern UI component library that emphasizes a streamlined approach to styling within React applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Core Principles of Shadcn</h2>
          <p className="text-purple-100">
            The core principles of Shadcn revolve around simplicity, scalability, and maintainability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Benefits of Using Shadcn in React Projects</h2>
          <p className="text-purple-100">
            Using Shadcn in React projects enhances development speed by providing pre-built components that can be customized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Creating Responsive Designs</h2>
          <p className="text-purple-100">
            Shadcn UI facilitates the creation of responsive designs through its flexible layout system.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Integrating Shadcn with Next.js</h2>
          <p className="text-purple-100">
            Integrating Shadcn with Next.js allows developers to take advantage of server-side rendering and static site generation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Theming and Customization Options</h2>
          <p className="text-purple-100">
            Shadcn provides extensive theming options, enabling developers to define custom color schemes, typography, and spacing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Building a Component with Shadcn UI</h2>
          <p className="text-purple-100">
            A hands-on example of building a component with Shadcn UI demonstrates the library’s capabilities.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default page;
