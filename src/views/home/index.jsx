import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP
} from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop
} from "@/hooks";
import bannerImg from "@/images/ladclimatservice/слайд-1-2048x898.png";
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
              <strong>10000 грн</strong>
              <strong>&nbsp; Midea</strong>
            </h1>
            <p>Продаж встановлення</p>
            <p>Доставка</p>
            <br />
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img">
            {/* <img src={bannerImg} alt="" /> */}
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Рекомендовані кондиціонери</h1>
            <Link to={FEATURED_PRODUCTS}>Показати більше</Link>
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
