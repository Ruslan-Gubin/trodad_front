import { HomeFirstBlock } from "@/widgets/home/home-first-block/HomeFirstBlock";
import { HomeAdvantagesBlock } from "@/widgets/home/home-advantages/HomeAdvantagesBlock";
import { HomeBrandsBlock } from "@/widgets/home/home-brands-block/HomeBrandsBlock";
import { HomeReviewsBlock } from "@/widgets/home/home-reviews-block/HomeReviewsBlock";
import { HomeContactBlock } from "@/widgets/home/home-contact-block/HomeContactBlock";


const Home = () => {

  return (
    <>
      <HomeFirstBlock />
      <HomeAdvantagesBlock />
      <HomeBrandsBlock />
      <HomeReviewsBlock />
      <HomeContactBlock />
    </>
  );
};

export default Home;
