import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  styled,
  Card,
  Button,
  CardContent,
  Typography,
} from "@mui/material";

const Image = styled("img")({
  height: 180,
  cursor: "pointer",
  transition: "transform 0.2s",
  paddingTop: 2,
  marginTop: 5,
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const Component = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

export function TopOfferSlides({ products }) {
  const sortedArray = products.sort((a, b) => {
    return parseFloat(b.price.discount) - parseFloat(a.price.discount);
  });

  const topDiscounts = sortedArray.slice(0, 5);
  console.log(topDiscounts);

  return (
    <Component>
      <Box>
        <Card
          sx={{
            width: 245,
            paddingRight: 2,
            height: 230,
            boxShadow: "none",
          }}
        >
          <CardContent
            sx={{
              paddingBottom: 5,
              marginBottom: 3,
              backgroundImage:
                "url('https://media.istockphoto.com/vectors/abstract-blue-and-orange-wave-vector-background-vector-id1142714085?k=6&m=1142714085&s=170667a&w=0&h=n0nCiXR0JhVUFmPHjg-GsqoVrFSX01v1QDLKvImpblc=')",
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ margin: 3 }}
            >
              Top Deals
            </Typography>
          </CardContent>

          <Button variant="contained" sx={{ marginLeft: 8 }}>
            View All
          </Button>
        </Card>
      </Box>
      <Box sx={{ width: "60%" }}>
        <Carousel responsive={responsive} infinite={true}>
          {topDiscounts.map((product) => (
            <div>
              <Image src={product.url} alt="" />
              <p>
                <strong>{product.title.shortTitle}</strong>
              </p>
              <p style={{ color: "green" }}>{product.discount}</p>
            </div>
          ))}
        </Carousel>
      </Box>
      <Box>
        <Card
          sx={{
            width: 180,
            paddingRight: 2,
            height: 240,
            boxShadow: "none",
            cursor: "pointer",
            backgroundImage:
              "url('https://i.pinimg.com/736x/b9/8d/1b/b98d1b6f3427f593ed4702fc4d23cefe.jpg')",
            backgroundSize: "100%",
          }}
        ></Card>
      </Box>
    </Component>
  );
}

export function FashionSlides({ products }) {
  const fashion = products.filter((item) => item.tagline === "Fashion");

  const fashionProd = fashion.slice(0, 6);

  return (
    <Component>
      <Box>
        <Card
          sx={{
            width: 245,
            paddingRight: 2,
            height: 230,
            boxShadow: "none",
          }}
        >
          <CardContent
            sx={{
              paddingBottom: 5,
              marginBottom: 3,
              backgroundImage:
                "url('https://media.istockphoto.com/vectors/abstract-blue-and-orange-vector-background-vector-id1133320303?k=6&m=1133320303&s=170667a&w=0&h=_CwJlzc907V268ABnAf-bY9f5Am4vvVaoZItLQS6SQw=')",
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: "white", margin: 3 }}
            >
              Fashion
            </Typography>
          </CardContent>

          <Button variant="contained" sx={{ marginLeft: 8 }}>
            View All
          </Button>
        </Card>
      </Box>
      <Box sx={{ width: "60%", height: "290px" }}>
        <Carousel responsive={responsive} infinite={true}>
          {fashionProd.map((product) => (
            <div>
              <Image src={product.url} alt="" />
              <p>
                <strong>{product.title.shortTitle}</strong>
              </p>
              <p style={{ color: "green" }}>{product.discount}</p>
            </div>
          ))}
        </Carousel>
      </Box>
      <Box>
        <Card
          sx={{
            width: 180,
            paddingRight: 2,
            height: 240,
            boxShadow: "none",
            cursor: "pointer",
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.1MdHuCSAoTyhtk9tp0j-VgHaJY?pid=ImgDet&w=1400&h=1774&rs=1')",
            backgroundSize: "100%",
          }}
        ></Card>
      </Box>
    </Component>
  );
}
