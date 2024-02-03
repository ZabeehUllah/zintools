import Footer from '@/components/organisms/footer';
import Navbar from '@/components/organisms/navbar/navbar';
import ToolsSection from '@/components/organisms/toolsSection';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Navbar />
      <ToolsSection />
      <Footer />
    </>
  );
};

export default Home;
