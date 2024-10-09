import Footer from '@/app/components/Footer';
import React from 'react';

function page() {
  return (
    <div className='bg-cardpurple bg-cover  opacity-90 bg-blur-sm text-white'>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-buttoncolor mb-6">Generative AI and Its Impact</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Introduction to Generative AI</h2>
          <p className="text-purple-100">
            Generative AI refers to algorithms that create new content, such as text, images, music, and code, using learned patterns.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Types of Generative Models</h2>
          <p className="text-purple-100">
            Generative models include GANs and VAEs, each used for applications ranging from image generation to natural language processing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Applications of Generative AI</h2>
          <p className="text-purple-100">
            Generative AI is revolutionizing fields such as art, music, and software development, offering creative solutions and automation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Impact on Web Development</h2>
          <p className="text-purple-100">
            In web development, generative AI automates tasks like code generation, design suggestions, and user experience improvements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Integrating AI Models into Next.js</h2>
          <p className="text-purple-100">
            AI models can be integrated into Next.js apps via APIs or SDKs, enabling dynamic content generation for interactive web experiences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Ethical Considerations in AI</h2>
          <p className="text-purple-100">
            Ethical issues in AI, including privacy, bias, and authenticity, require careful attention to ensure responsible AI use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Future Trends in Generative AI</h2>
          <p className="text-purple-100">
            The future of generative AI includes improved personalization, AI-human collaboration, and advanced content creation tools.
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default page;
