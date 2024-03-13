import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import { useDocumentTitle, useGetOurWorks, useScrollTop } from "@/hooks";
import bannerImg from "@/images/ladclimatservice/слайд-1-2048x898.png";
import React from "react";

const FeaturedProducts = () => {
  useDocumentTitle("Кондиціонери продаж");
  useScrollTop();

  const { ourWorks, fetchOurWorks, isLoading, error } = useGetOurWorks();

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
            {error && !isLoading ? (
              <MessageDisplay
                message={error}
                action={fetchOurWorks}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid products={ourWorks} skeletonCount={6} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
