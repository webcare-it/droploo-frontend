import type { ConfigType } from "./hooks/useConfig";

export const config: ConfigType[] = [
  {
    type: "header_logo",
    value: "https://backend.droploo.com/setting/1751791223.png",
  },
  {
    type: "footer_logo",
    value: "https://backend.droploo.com/setting/1751791223.png",
  },
  {
    type: "favicon",
    value: "https://backend.droploo.com/setting/1751791223.png",
  },
  {
    type: "site_name",
    value: "My Awesome Website",
  },
  {
    type: "site_motto",
    value: "Building the future, one pixel at a time",
  },
  {
    type: "phone",
    value: "+1 (555) 123-4567",
  },
  {
    type: "email",
    value: "contact@myawesomewebsite.com",
  },
  {
    type: "whatsapp",
    value: "+1 (555) 987-6543",
  },
  {
    type: "address",
    value: "123 Main Street, Suite 500, New York, NY 10001",
  },
  {
    type: "facebook",
    value: "https://facebook.com/myawesomewebsite",
  },
  {
    type: "twitter",
    value: "https://twitter.com/myawesomeweb",
  },
  {
    type: "instagram",
    value: "https://instagram.com/myawesomewebsite",
  },
  {
    type: "youtube",
    value: "https://youtube.com/@myawesomewebsite",
  },
  {
    type: "linkedin",
    value: "https://linkedin.com/company/myawesomewebsite",
  },
  {
    type: "footer_description",
    value:
      "Droploo is a leading e-commerce platform that helps businesses grow by providing them with the tools and resources they need to succeed.",
  },
  {
    type: "copy_rights_text",
    value: "Droploo. All rights reserved.",
  },
];

interface CategoryType {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export const categories: CategoryType[] = [
  {
    id: 1,
    name: "Trending",
    slug: "trending",
    image: "/tech.png",
  },
  {
    id: 2,
    name: "Tech Accessories",
    slug: "tech-accessories",
    image: "/tech.png",
  },
  {
    id: 3,
    name: "Toys",
    slug: "toys",
    image: "/tech.png",
  },
  {
    id: 4,
    name: "Home & Garden",
    slug: "home-garden",
    image: "/tech.png",
  },
  {
    id: 5,
    name: "Seasonal",
    slug: "seasonal",
    image: "/tech.png",
  },
  {
    id: 6,
    name: "Bath & Beauty",
    slug: "bath-beauty",
    image: "/tech.png",
  },
  {
    id: 7,
    name: "Footwear",
    slug: "footwear",
    image: "/tech.png",
  },
  {
    id: 8,
    name: "Women's Clothing",
    slug: "womens-clothing",
    image: "/tech.png",
  },
  {
    id: 9,
    name: "Print-on-demand",
    slug: "print-on-demand",
    image: "/tech.png",
  },
  {
    id: 10,
    name: "Gifts",
    slug: "gifts",
    image: "/tech.png",
  },
  {
    id: 11,
    name: "Pet Supplies",
    slug: "pet-supplies",
    image: "/tech.png",
  },
  {
    id: 12,
    name: "Jewelry & Watches",
    slug: "jewelry-watches",
    image: "/tech.png",
  },
  {
    id: 13,
    name: "Men's Clothing",
    slug: "mens-clothing",
    image: "/tech.png",
  },
  {
    id: 14,
    name: "Accessories",
    slug: "accessories",
    image: "/tech.png",
  },
  {
    id: 15,
    name: "Kids & Babies Product",
    slug: "kids-babies",
    image: "/tech.png",
  },
  {
    id: 16,
    name: "Automotive",
    slug: "automotive",
    image: "/tech.png",
  },
  {
    id: 17,
    name: "Festivals & Parties",
    slug: "festivals-parties",
    image: "/tech.png",
  },
  {
    id: 18,
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    image: "/tech.png",
  },
];

export const home = {
  hero: {
    title: "Dropshipping Bangladesh!",
    sub_title: "Empowering Your Business with Dropshipping",
    description:
      "We help you grow your business with our easy-to-use platform and expert advice.  Join us today and let's build something amazing together!",
    images: [
      "https://www.cloudways.com/blog/wp-content/uploads/What-is-Dropshipping.jpg",
      "https://static.vecteezy.com/system/resources/previews/006/159/855/non_2x/dropshipping-blue-flat-design-long-shadow-glyph-icon-drop-shipping-order-and-product-delivery-to-customer-goods-transportation-e-commerce-sales-business-silhouette-illustration-vector.jpg",
      "https://binaryfolks.com/wp-content/uploads/2025/08/Intro-3.png",
      "https://binaryfolks.com/wp-content/uploads/2025/08/Intro-3.png",
    ],
    review_title: "120+ satisfied customers",
  },
  achievements: [
    {
      id: "",
      name: "",
      description: "",
      image: "",
    },
  ],
  feature_one: {
    title: "",
    description: "",
    image: "",
  },
  feature_tow: {
    title: "",
    description: "",
    image: "",
  },
  trustworthy: {
    video: {
      type: "facebook / youtube",
      is_reel: true,
      video_id: "",
    },
    info: {
      title: "",
      desc_one: "",
      desc_two: "",
      desc_three: "",
    },
  },
  what_we_do_for_you: {
    tittle: "",
    description: "",
    image: "",
  },
  what_will_you_do: {
    tittle: "",
    description: "",
    image: "",
  },
  reviews: ["image1", "image2"],
  blogs: [
    {
      id: "",
      title: "",
      description: "",
      author: "",
      date: "",
    },
  ],
  faqs: [
    {
      id: "",
      question: "",
      answer: "",
    },
  ],
};
