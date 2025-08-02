import logo_img from "./icons8-chat-32.png";

import avatar_icon from "./avatar_icon.png";
import profile_richard from "./profile_richard.png";
import profile_alison from "./profile_alison.png";
import profile_enrique from "./profile_enrique.png";
import profile_marco from "./profile_marco.png";
import profile_martin from "./profile_martin.png";

import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

export const assets = {
  logo_img,
  avatar_icon,
  profile_richard,
  profile_alison,
  profile_enrique,
  profile_marco,
  profile_martin,
};

//  default assets;

export const imagesDummyData = [pic1, pic2, pic3, pic4, img1, img2];

export const userDummyData = [
  {
    _id: "680f50aaf10f3cd28382ecf2",
    email: "test1@gmail.com",
    fullName: "Alison Martin",
    profilePic: profile_alison,
    bio: "Hi Everyone, I am Using ChatCom",
  },
  {
    _id: "680f50e4f10f3cd28382ecf9",
    email: "test2@gmail.com",
    fullName: "Martin Johnson",
    profilePic: profile_martin,
    bio: "Hi Everyone, I am Using ChatCom",
  },
  {
    _id: "680f510af10f3cd28382ed01",
    email: "test3@gmail.com",
    fullName: "Enrique Martinez",
    profilePic: profile_enrique,
    bio: "Hi Everyone, I am Using ChatCom",
  },
  {
    _id: "680f5137f10f3cd28382ed10",
    email: "test4@gmail.com",
    fullName: "Marco Jones",
    profilePic: profile_marco,
    bio: "Hi Everyone, I am Using ChatCom",
  },
  {
    _id: "680f516cf10f3cd28382ed11",
    email: "test5@gmail.com",
    fullName: "Richard Smith",
    profilePic: profile_richard,
    bio: "Hi Everyone, I am Using ChatCom",
  },
];

export const messagesDummyData = [
  {
    _id: "680f571ff10f3cd28382f094",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    text: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    seen: true,
    createdAt: "2025-04-28T10:23:27.844Z",
  },
  {
    _id: "680f5726f10f3cd28382f0b1",
    senderId: "680f50e4f10f3cd28382ecf9",
    receiverId: "680f5116f10f3cd28382ed02",
    text: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    seen: true,
    createdAt: "2025-04-28T10:23:34.520Z",
  },
  {
    _id: "680f5729f10f3cd28382f0b6",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    text: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    seen: true,
    createdAt: "2025-04-28T10:23:37.301Z",
  },
  {
    _id: "680f572cf10f3cd28382f0bb",
    senderId: "680f50e4f10f3cd28382ecf9",
    receiverId: "680f5116f10f3cd28382ed02",
    text: "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    seen: true,
    createdAt: "2025-04-28T10:23:40.334Z",
  },
  {
    _id: "680f573cf10f3cd28382f0c0",
    senderId: "680f50e4f10f3cd28382ecf9",
    receiverId: "680f5116f10f3cd28382ed02",
    image: img1,
    seen: true,
    createdAt: "2025-04-28T10:23:56.265Z",
  },
  {
    _id: "680f5745f10f3cd28382f0c5",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    image: img2,
    seen: true,
    createdAt: "2025-04-28T10:24:05.164Z",
  },
  {
    _id: "680f5748f10f3cd28382f0ca",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    text: "7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    seen: true,
    createdAt: "2025-04-28T10:24:08.523Z",
  },
];
