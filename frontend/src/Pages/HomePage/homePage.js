import OfferPage from "../OfferPage/offerPage";
import Banner from "../Carousel/Banner";
import InstantOfferPage from "../InstantOffer/InstantOfferPage";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <OfferPage />
      <Banner />
      <InstantOfferPage />
      <h3>Welcome To Shopify App!!</h3>
    </>
  );
};

export default HomePage;
