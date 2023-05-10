import OfferPage from "../OfferPage/offerPage";
import Banner from "../Carousel/Banner";
import { TopOfferPage, FashionPage } from "../InstantOffer/InstantOfferPage";
import { TopOfferSlides, FashionSlides } from "../Slides/Slides";

import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const { products } = useSelector((state) => state.getProduct); //this reducer is made in store

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <OfferPage />
      <Banner />
      <TopOfferSlides products={products} />
      <TopOfferPage products={products} />
      <FashionSlides products={products} />
      <FashionPage products={products} />
      <h3>Welcome To Shopify App!!</h3>
    </>
  );
};

export default HomePage;
