import React from "react";
import { client } from "../../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Link from "next/link";

const Home = ({ products, bannerData }) => (
  <div>
    <div className="products-heading">
      <Link href="/api/hello">
        <h2>15% OFF On Medicines</h2>
      </Link>
      <p>Strength in Health, Confidence in Life</p>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "medicine"]';
  const products = await client.fetch(query);
  

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
