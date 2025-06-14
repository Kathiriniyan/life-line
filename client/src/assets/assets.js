import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import orange_arrow_icon from "./orange_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";
import surgery_image from "./surgery_image.png";
import emergency_image from "./emergency_image.png";
import child_maternity_image from "./child&maternity_image.png";
import treatment_image from "./treatment_image.png";
import rehabilitation_image from "./rehabilitation_image.png";
import diagnostics_testing_image from "./diagnostics&testing_image.png";
import equipment_image from "./equipment_image.png";
import potato_image_1 from "./potato_image_1.png";
import potato_image_2 from "./potato_image_2.png";
import potato_image_3 from "./potato_image_3.png";
import potato_image_4 from "./potato_image_4.png";
import tomato_image from "./tomato_image.png";
import carrot_image from "./carrot_image.png";
import apple_image from "./apple_image.png";
import amul_milk_image from "./amul_milk_image.png";
import coca_cola_image from "./coca_cola_image.png";
import brown_bread_image from "./brown_bread_image.png";
import basmati_rice_image from "./basmati_rice_image.png";
import paneer_image from "./paneer_image.png";
import orange_image from "./orange_image.png";
import pepsi_image from "./pepsi_image.png";
import wheat_flour_image from "./wheat_flour_image.png";
import cheese_image from "./cheese_image.png";
import eggs_image from "./eggs_image.png";
import spinach_image_1 from "./spinach_image_1.png";
import onion_image_1 from "./onion_image_1.png";
import banana_image_1 from "./banana_image_1.png";
import mango_image_1 from "./mango_image_1.png";
import grapes_image_1 from "./grapes_image_1.png";
import paneer_image_2 from "./paneer_image_2.png";
import sprite_image_1 from "./sprite_image_1.png";
import fanta_image_1 from "./fanta_image_1.png";
import seven_up_image_1 from "./seven_up_image_1.png";
import top_ramen_image from "./top_ramen_image.png";
import knorr_soup_image from "./knorr_soup_image.png";
import yippee_image from "./yippee_image.png";
import maggi_oats_image from "./maggi_oats_image.png";
import butter_croissant_image from "./butter_croissant_image.png";
import chocolate_cake_image from "./chocolate_cake_image.png";
import whole_wheat_bread_image from "./whole_wheat_bread_image.png";
import vanilla_muffins_image from "./vanilla_muffins_image.png";
import quinoa_image from "./quinoa_image.png";
import brown_rice_image from "./brown_rice_image.png";
import barley_image from "./barley_image.png";
import ab_image1 from "./ab1.png";
import ab_image2 from "./ab2.png";
import ab_image3 from "./ab3.png";
import banner_ab from "./banner_ab.png";
import patient_1 from "./patient_1.png";
import patient_2 from "./patient_2.png";
import favourite_icon from "./favourite_icon.svg";


export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  orange_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  ab_image1,
  ab_image2,
  ab_image3,
  box_icon,
  banner_ab,
  patient_1,
  patient_2,
  favourite_icon,
};

export const categories = [
  {
    text: "Surgery",
    path: "surgery",
    image: surgery_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Emergency",
    path: "emergency",
    image: emergency_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Child & Maternity",
    path: "maternity",
    image: child_maternity_image,
    bgColor: "#F0F5DE",
  },
  {
    text: "Medical Treatment",
    path: "treatment",
    image: treatment_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Rehabilitation",
    path: "rehabilitation",
    image: rehabilitation_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Diagnostics",
    path: "diagnostics",
    image: diagnostics_testing_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "Health Equipment",
    path: "equipment",
    image: equipment_image,
    bgColor: "#F1E3F9",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Built for Medical Needs Only",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: leaf_icon,
    title: "Verified & Secure",
    description: "Fresh produce straight from the source.",
  },
  {
    icon: coin_icon,
    title: "Social Sharing Made Simple",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Support from Real Humans",
    description: "Loved by 10,000+ happy customers.",
  },
  {
    icon: trust_icon,
    title: "Verified Fund Transfer",
    description: "Loved by 10,000+ happy customers.",
  },
];

export const dummyProducts = [
  // Surgery
  {
    _id: "gd46g23h",
    name: "Help Nuwani Fight Stage 3 Leukemia",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    Progress: 70,
    donors: 237,
    daysLeft: 24,
    image: [patient_1, patient_2, patient_1, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Emergency
  {
    _id: "ek51j12k",
    name: "wehsbwbevhw webwieub bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 200000,
    address: "Colombo",
    Progress: 60,
    donors: 232,
    daysLeft: 24,
    image: [patient_2, patient_1],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Child & Maternity
  {
    _id: "ek56j67k",
    name: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    Progress: 70,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Medical Treatment
  {
    _id: "ek61j12k",
    name: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Treatment",
    goal_amount: 330000,
    address: "Colombo",
    Progress: 21,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Rehabilitation
  {
    _id: "ek66j67k",
    name: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    Progress: 13,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Diagnostics
  {
    _id: "bk01a24z",
    name: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    Progress: 70,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Health Equipment
  {
    _id: "in01f25u",
    name: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. Shes bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    Progress: 70,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },

];

export const dummyCampaigns = [
  // Surgery
  {
    _id: "gd46g23h",
    userId: "68479913731562c76e2e9b04",
    title: "Help Nuwani Fight Stage 3 Leukemia",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Surgery",
    goal_amount: 800000,
    address: "Colombo",
    progress: 0.7,
    donors: 237,
    daysLeft: 24,
    image: [patient_1, patient_2, patient_1, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Emergency
  {
    _id: "ek51j12k",
    userId: "68479913731562c76e2e9b04",
    title: "wehsbwbevhw webwieub bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Emergency",
    goal_amount: 200000,
    address: "Colombo",
    progress: 0.6,
    donors: 232,
    daysLeft: 24,
    image: [patient_2, patient_1],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Child & Maternity
  {
    _id: "ek56j67k",
    userId: "68479913731562c76e2e9b04",
    title: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    progress: 0.5,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Medical Treatment
  {
    _id: "ek61j12k",
    userId: "68479913731562c76e2e9b04",
    title: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Treatment",
    goal_amount: 330000,
    address: "Colombo",
    progress: 0.5,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Rehabilitation
  {
    _id: "ek66j67k",
    userId: "68479913731562c76e2e9b04",
    title: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    progress: 0.5,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Diagnostics
  {
    _id: "bk01a24z",
    userId: "68479913731562c76e2e9b04",
    title: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. She’s bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    progress: 0.5,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },


  // Health Equipment
  {
    _id: "in01f25u",
    userId: "68479913731562c76e2e9b04",
    title: "idjd wweffwfwe bwiubvw",
    description: [
      "Nuwani is a cheerful 9-year-old who dreams of becoming a teacher. Shes bravely battling leukemia and needs an urgent bone",
    ],
    category: "Maternity",
    goal_amount: 800000,
    address: "Colombo",
    progress: 0.5,
    donors: 237,
    daysLeft: 24,
    image: [patient_2, patient_2],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    isApprove: true,
    isEmergency: true,
  },

];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
