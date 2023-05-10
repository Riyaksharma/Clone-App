const products = [
  {
    id: "product1",
    url: "https://5.imimg.com/data5/SELLER/Default/2021/6/GU/KW/GH/3719494/philips-avance-collection-750-watts-hl7777-00-mixer-grinder-500x500.PNG",
    posterUrl:
      "https://i.pinimg.com/originals/db/fd/6b/dbfd6b222df2e32031c07eec3918af03.jpg",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)",
    },
    price: {
      mrp: 1195,
      cost: 625,
      discount: "47%",
    },
    quantity: 1,
    description:
      "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product2",
    url: "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    posterUrl:
      "https://th.bing.com/th/id/OIP.x0FfAhULpU1O1qZyBMppFwHaFL?pid=ImgDet&rs=1",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Sandwich Makers",
      longTitle: "Flipkart SmartBuy Sandwich 01 Grill  (Black)",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    quantity: 1,
    description:
      "This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",
    discount: "From 99+5% Off",
    tagline: "Pestige, Nova & more",
  },
  {
    id: "product3",
    url: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1664377512_8412744.jpg?format=webp&w=360&dpr=1.0",
    posterUrl:
      "https://i2.wp.com/www.soccercleats101.com/wp-content/uploads/2017/02/Nike-Sale-2017.jpg?resize=618%2C345",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    title: {
      shortTitle: "Fitness Gear",
      longTitle:
        "AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)",
    },
    price: {
      mrp: 499,
      cost: 166,
      discount: "66%",
    },
    quantity: 1,
    description:
      "This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",
    discount: "Upto 70% Off",
    tagline: "Fashion",
  },
  {
    id: "product4",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    posterUrl:
      "https://th.bing.com/th/id/OIP.xYnpVfC7apo8loe4uV-XhAHaF7?pid=ImgDet&rs=1",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 6999,
      cost: 4049,
      discount: "42%",
    },
    quantity: 1,
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "Fashion",
  },
  {
    id: "product5",
    url: "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    posterUrl:
      "https://www.dhresource.com/0x0s/f2-albu-g9-M00-38-27-rBVaWF0eEYSAdCakAAH5od-lD9o251.jpg/explosion-b3-bluetooth-headphones-wireless.jpg",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    title: {
      shortTitle: "Trimmers, Dryers & more",
      longTitle: "Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)",
    },
    price: {
      mrp: 1899,
      cost: 1124,
      discount: "40%",
    },
    quantity: 1,
    description: "",
    discount: "From ₹499",
    tagline: "Kubra, Nova & more",
  },
  {
    id: "product6",
    url: "https://th.bing.com/th/id/OIP.NbdUGbDFgaLX2lLlDLTGqgHaHa?pid=ImgDet&w=800&h=800&rs=1",
    posterUrl:
      "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/03/10/780890-5.jpg",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70",
    title: {
      shortTitle: "Table Fans",
      longTitle:
        "Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)",
    },
    price: {
      mrp: 2250,
      cost: 1199,
      discount: "46%",
    },
    quantity: 1,
    description:
      'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',
    discount: "Minimum 40% Off",
    tagline: "Top Selling",
  },
  {
    id: "product7",
    url: "https://th.bing.com/th/id/OIP.1RUHjmZgjJulc64xnVqjZAHaKE?pid=ImgDet&rs=1",
    posterUrl:
      "https://bunnygaming.com/wp-content/uploads/2018/12/PlayStation-13-Day-Special-Campaign-Feature-Image.jpg",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle:
        "boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset ",
    },
    price: {
      mrp: 2990,
      cost: 1199,
      discount: "59%",
    },
    quantity: 1,
    description:
      "Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.",
    discount: "Minimum 50% Off",
    tagline: "Grab Now!",
  },
  {
    id: "product8",
    url: "https://i.pinimg.com/originals/00/f9/a2/00f9a211b2c5b6e98e3c8f9571432acf.jpg",
    posterUrl:
      "https://th.bing.com/th/id/OIP.x0FfAhULpU1O1qZyBMppFwHaFL?pid=ImgDet&rs=1",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Lipsticks",
      longTitle: "Flipkart Lipstick",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    quantity: 1,
    description: "Drak Ruby Red Lipstick for your day",
    discount: "From 99+5% Off",
    tagline: "Fashion",
  },
  {
    id: "product9",
    url: "https://th.bing.com/th/id/OIP.vhHz6g8kHsVoHR-VE0a0nwHaJ4?pid=ImgDet&rs=1",
    posterUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e4a1332413725.568167fbc749e.jpg",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "kurti",
      longTitle: "Flipkart Black Kurti",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    quantity: 1,
    description: "",
    discount: "From 99+5% Off",
    tagline: "Fashion",
  },
  {
    id: "product10",
    url: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1681973516_1505353.jpg?format=webp&w=360&dpr=1.0",
    posterUrl: "https://www.dhresource.com/fc/s009/homepage/081018/990-440.jpg",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Polo Shirt",
      longTitle: "Men Polo Shirt",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    quantity: 1,
    description: "",
    discount: "From 99+5% Off",
    tagline: "Fashion",
  },
  {
    id: "product11",
    url: "https://i0.wp.com/tricitydiaries.com/blog/wp-content/uploads/2020/06/designer-studio.jpg?w=960&ssl=1",
    posterUrl: "https://images.freekaamaal.com/post_images/1580898853.jpg",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Sarees",
      longTitle: "Silk Sarees",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    quantity: 1,
    description: "Women Saaree Off for you in Silk",
    discount: "Starting from Rs.499",
    tagline: "Fashion",
  },
];

module.exports = products;
