import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import { OUR_WORKS, RECOMMENDED_PRODUCTS, SHOP } from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop
} from "@/hooks";
import bannerImg from "@/images/ladclimatservice/Dr6JgDcFEE.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useDocumentTitle("Продаж кондиціонерів Midea Idea");
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              Кондиціонери від&nbsp;
              <strong>7899 грн</strong>
              <strong>&nbsp; Midea Idea C&H</strong>
            </h1>
            <p>Продаж та встановлення</p>
            <p>Доставка</p>
            <Link to={SHOP} className="button">
              Придбати кондиціонер &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Рекомендовані кондиціонери</h1>
            <Link to={OUR_WORKS}>Показати більше</Link>
          </div>
          {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        {/* <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
