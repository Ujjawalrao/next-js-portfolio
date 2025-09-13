import Card from '@/components/Card';
import Intro from '@/components/intro';

export default function Page() {
  const interviews = [
    {
      image: "https://ujjawalraosahab.netlify.app/assets/louis-vuitton.png",
      title: "Louis Vuitton",
      description: "Designed a responsive and elegant landing page inspired by the Louis Vuitton website using HTML, Tailwind CSS, and JavaScript, Gsap. Features include a luxury-themed UI, interactive product sections, smooth animations, and mobile-friendly design.",
      websiteLink: "https://louis-vuitton-webpage.vercel.app/",
      sourceLink: "https://github.com/your-repo/louis-vuitton"
    },
    {
      image: "https://ujjawalraosahab.netlify.app/assets/mercedes.png",
      title: "Mercedes Car-Brand",
      description: "Developed a sleek and responsive landing page for a car brand using React and Framer Motion. The project features a modern user interface, smooth scroll-based animations, and a mobile-first layout.",
      websiteLink: "https://mercedes-ui-eight.vercel.app/",
      sourceLink: "https://github.com/your-repo/mercedes"
    },
    {
      image: "https://ujjawalraosahab.netlify.app/assets/Chapter-2.png",
      title: "Chapter-2Dril",
      description: "Built a modern and responsive landing page for a fashion brand using React and Framer Motion. Features a clean UI, product showcase, smooth animations, and mobile-first design inspired by high-end streetwear aesthetics.",
      websiteLink: "https://e-commerce-clothing-one.vercel.app/",
      sourceLink: "https://github.com/your-repo/chapter-2dril"
    },
    {
      image: "https://ujjawalraosahab.netlify.app/assets/smilecare.png",
      title: "Smilecare :)",
      description: "Created a clean and responsive dental clinic landing page using HTML, Tailwind CSS, and JavaScript. Features include a professional layout, services section, appointment CTA, and mobile-optimized design.",
      websiteLink: "https://dentistteeth-ui.vercel.app/",
      sourceLink: "https://github.com/your-repo/smilecare"
    },
  ];

  return (
    <>
      <Intro />
      <div id='web' className="min-h-screen p-4 pt-20 sm:p-6 md:p-10 md:pt-30 lg:p-40  bg-cover bg-no-repeat bg-top">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {interviews.map((interview, index) => (
            <Card key={index} {...interview} />
          ))} 
        </div>
      </div>
    </>
  );
}

