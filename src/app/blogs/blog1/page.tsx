import Footer from '@/app/components/Footer'
import React from 'react'

function page() {
  return (
    <div className='bg-cardpurple bg-cover opacity-90 bg-blur-sm text-white'>

<div className="p-6 max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold text-buttoncolor mb-6">Exploring Radix UI</h1>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">Introduction to Radix UI</h2>
    <p className="text-purple-100">
      Radix UI is a library designed to create accessible and customizable UI components for React applications. It provides a set of primitives that help developers build complex interfaces while maintaining a focus on accessibility and usability.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">Benefits of Using Radix UI</h2>
    <p className="text-purple-100">
      One of the key advantages of Radix UI is its accessibility features, ensuring that components adhere to ARIA guidelines. Additionally, it allows for easy customization, enabling developers to style components to fit their design needs without compromising functionality.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">Key Components Overview</h2>
    <p className="text-purple-100">
      Radix UI includes a range of components such as modals, tooltips, popovers, and dropdowns. Each component is built with accessibility in mind, providing a robust foundation for creating interactive user interfaces.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">Accessibility Features</h2>
    <p className="text-purple-100">
      Accessibility is at the core of Radix UI. The library follows best practices for screen readers and keyboard navigation, making it easier for developers to create inclusive applications that cater to all users.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">Integrating Radix UI with Next.js</h2>
    <p className="text-purple-100">
      Integrating Radix UI into a Next.js project is straightforward. Developers can easily import components and utilize them within their pages, enhancing the overall user experience with minimal setup.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">Customizing Radix Components with Tailwind CSS</h2>
    <p className="text-purple-100">
      Radix UI components can be seamlessly styled using Tailwind CSS, allowing developers to leverage utility classes for rapid design implementation while maintaining component functionality.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-purple-600 mb-4">Building a Sample Component</h2>
    <p className="text-purple-100">
      To illustrate the capabilities of Radix UI, developers can build a sample modal component that showcases the integration of accessibility features and custom styling using Tailwind CSS, demonstrating the ease of use and flexibility of the library.
    </p>

    <Footer />
  </section>
</div>


    </div>
  )
}

export default page