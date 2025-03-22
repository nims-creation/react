import {React} from "react";
import Nav from "./components/Nav";
import { CartProvider } from "./contexts/CartContext";
import {
  CustomerReviews,
  Featured,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <CartProvider>
      <main className='relative dark:bg-dark-primary transition-colors'>
        <Nav/>
        <section className='xl:padding-l wide:padding-r padding-b bg-gradient-to-b from-primary to-pale-blue dark:from-dark-primary dark:to-dark-secondary'>
          <Hero />
        </section>
        <section className='padding bg-white dark:bg-dark-primary'>
          <Featured />
        </section>
        <section className='padding bg-light-gray dark:bg-dark-secondary'>
          <PopularProduct/>
        </section>
        <section className='padding bg-white dark:bg-dark-primary'>
          <SuperQuality />
        </section>
        <section className='padding-x py-10 bg-gradient-to-r from-pale-blue to-primary dark:from-dark-secondary dark:to-dark-primary'>
          <Services />
        </section>
        <section className='padding bg-white dark:bg-dark-primary'>
          <SpecialOffer />
        </section>
        <section className='bg-pale-blue dark:bg-dark-secondary padding'>
          <CustomerReviews />
        </section>
        <section className='padding-x sm:py-32 py-16 w-full bg-gradient-to-r from-accent-indigo/10 to-accent-purple/10 dark:from-dark-accent/30 dark:to-dark-secondary'>
          <Subscribe />
        </section>
        <section className='bg-dark-blue dark:bg-dark-accent padding-x padding-t pb-8'>
          <Footer />
        </section>
      </main>
    </CartProvider>
  );
};

export default App;
