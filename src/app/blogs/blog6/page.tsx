import React from 'react';
import Footer from '@/app/components/Footer';

function page() {
  return (
    <div className='bg-cardpurple bg-cover opacity-90 bg-blur-sm text-white'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-buttoncolor mb-6">Tailwind CSS for Modern Web Design</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Introduction to Tailwind CSS</h2>
          <p className="text-purple-100">
            Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs quickly by composing utility classes in their markup. This approach streamlines the styling process and promotes consistency.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Utility-First Approach Explained</h2>
          <p className="text-purple-100">
            The utility-first methodology of Tailwind CSS encourages the use of small, reusable utility classes for styling rather than writing custom CSS. This leads to more maintainable code and faster development cycles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Benefits of Using Tailwind CSS</h2>
          <p className="text-purple-100">
            Tailwind CSS offers numerous benefits, including rapid prototyping, improved responsiveness, and easy customization. Developers can create unique designs without the bloat of traditional CSS frameworks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Setting Up Tailwind in a Next.js Project</h2>
          <p className="text-purple-100">
            Integrating Tailwind CSS into a Next.js project is straightforward, requiring minimal configuration. Developers can quickly start using utility classes to style their components and pages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Creating Responsive Designs with Tailwind</h2>
          <p className="text-purple-100">
            Tailwind CSS provides responsive utility classes that allow developers to easily create designs that adapt to various screen sizes. This feature ensures a seamless user experience across devices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Best Practices for Tailwind CSS</h2>
          <p className="text-purple-100">
            Adhering to best practices, such as using component classes and managing responsive design, is essential for maintaining a clean codebase. This leads to better collaboration and easier updates in the long run.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Examples of Tailwind CSS Components</h2>
          <p className="text-purple-100">
            Demonstrating real-world examples of Tailwind CSS components can inspire developers to leverage the framework's full potential and create visually appealing designs efficiently.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default page;
