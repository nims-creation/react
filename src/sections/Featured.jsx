import { ImageSlider } from "../components";

// Sample data for the slider
const sliderData = [
  {
    image: "/assets/image/nike-air-max.jpg",
    title: "Nike Air Max Collection",
    description: "Featuring visible cushioning for ultimate comfort and style that never fades.",
    link: "/collections/air-max",
    buttonText: "Shop Collection"
  },
  {
    image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/df805c68-2749-468b-b9f1-67ef5c77c6aa/nike-just-do-it.jpg",
    title: "New Running Essentials",
    description: "Push your run forward with the latest innovations designed to keep you moving.",
    link: "/collections/running",
    buttonText: "Shop Running"
  },
  {
    image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/ef3f4fda-56a6-4c3c-a1d5-d6e4ee941c80/nike-just-do-it.jpg",
    title: "Nike Basketball",
    description: "Engineered to the exact specifications of championship athletes.",
    link: "/collections/basketball",
    buttonText: "Shop Basketball"
  },
  {
    image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/4c1e7944-5ea4-4e15-91e6-e89051960cdf/nike-just-do-it.jpg",
    title: "Lifestyle Essentials",
    description: "Everyday comfort with street-ready style for your active lifestyle.",
    link: "/collections/lifestyle",
    buttonText: "Shop Lifestyle"
  }
];

const Featured = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <h2 className="section-heading text-center mb-2">Featured Collections</h2>
        <p className="text-center info-text max-w-md mx-auto">Explore our latest collections and featured products</p>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4">
        <ImageSlider slides={sliderData} height="h-[500px]" />
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1280px] mx-auto px-4">
        <div className="rounded-2xl overflow-hidden relative group h-[250px]">
          <img 
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/d73b76fa-2040-4667-b231-d760601846b0/nike-just-do-it.jpg" 
            alt="Men's Collection"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">Men's Collection</h3>
            <a 
              href="/collections/men"
              className="inline-block bg-white text-dark-blue px-4 py-2 rounded-full font-semibold text-sm hover:bg-accent-indigo hover:text-white transition-all duration-300"
            >
              Shop Men
            </a>
          </div>
        </div>
        
        <div className="rounded-2xl overflow-hidden relative group h-[250px]">
          <img 
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/e0dcd7b4-db88-41f7-a08c-3c178cf142a4/nike-just-do-it.jpg" 
            alt="Women's Collection"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">Women's Collection</h3>
            <a 
              href="/collections/women"
              className="inline-block bg-white text-dark-blue px-4 py-2 rounded-full font-semibold text-sm hover:bg-accent-indigo hover:text-white transition-all duration-300"
            >
              Shop Women
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured; 