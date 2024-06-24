import About from './_components/about';
import Projects from './_components/projects';
import Companies from './_components/companies';
import SkillPills from './_components/skill-pill';
import Footer from './_components/footer';

export default function Home() {
  return (
    <div>
      <section
        id='home'
        className='mx-auto my-2 w-[90%] md:my-4 lg:w-full lg:max-w-2xl'
      >
        <About />
      </section>
      <section
        id='projects'
        className='mx-auto my-2 w-[90%] md:my-4 lg:w-full lg:max-w-2xl'
      >
        <Projects />
      </section>
      <section
        id='companies'
        className='mx-auto my-2 w-[90%] md:my-4 lg:w-full lg:max-w-2xl'
      >
        <Companies />
      </section>
      <section
        id='tech-stack'
        className='mx-auto my-2 w-[90%] md:my-4 lg:w-full lg:max-w-2xl'
      >
        <SkillPills />
      </section>
      <section
        id='contact-me'
        className='mx-auto my-2 w-[90%] md:my-4 lg:w-full lg:max-w-2xl'
      >
        <Footer />
      </section>
    </div>
  );
}
