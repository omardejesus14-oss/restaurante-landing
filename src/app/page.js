import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import  MenuCard from '@/components/menucard';
import BookingForm from '@/components/booking-form';
import Footer from '@/components/fotter';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans antialiased">
      <Navbar />
      <Hero />
      <MenuCard />
      
      <BookingForm />
      <Footer />
    </div>
  );

}