import Banner from '@/components/homepage/Banner';
import FeaturedCards from '@/components/homepage/FeaturedCards';
import RunningText from '@/components/homepage/RunningText';
import WhoWeAre from '@/components/homepage/WhoWeAre';
import WhyTrain from '@/components/homepage/WhyTrain';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <div>
      <Banner/>
      <RunningText/>
      <FeaturedCards/>
      <WhoWeAre/>
      <WhyTrain/>
      
      <Footer/>
    </div>
  );
}
