import sharepod from "../assets/images/sharepod.jpg";
import agriconnect from "../assets/images/agriconnect.jpg";
import Elitemart from "../assets/images/Elitemart.jpg";

export const projects = [
  {
    id: 1,
    title: "Agriconnect",
    description:
      "An innovative AgriTech platform designed for farmers to access essential agricultural insights in one place. Features include real-time weather updates, a pest wiki for crop protection, government scheme information, and tools to manage and track crops efficiently.",
    image: agriconnect,
    link: null,
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "Elitemart",
    description:
      "A full-featured e-commerce platform built with the MERN stack. Features include product browsing, cart management, secure authentication, order processing, and an admin dashboard for inventory management.",
    image: Elitemart,
    link: null,
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 3,
    title: "SharePod",
    description:
      "A modern peer-to-peer file sharing application that enables users to upload, share, and manage files securely. Built with real-time capabilities using WebSockets for instant file transfer notifications.",
    image: sharepod,
    link: null,
    tags: ["React", "WebSockets", "Node.js", "MongoDB"],
  }
  
];
