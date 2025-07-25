import express from "express";
import { homeData1, homeData2, DataForSlider } from "../data/home.js";
import { chefs } from "../data/staff.js";
import { menuItems } from "../data/menu.js";
import { contentData } from "../data/news.js";
import { galleryData } from "../data/gallery.js";

import {
  address,
  hoursOfOperation,
  contactInfo,
  mapEmbedUrl,
} from "../data/location.js";

export const loadHomePage = (req, res) => {
  res.render("home", {
    homeData1,
    homeData2,
    DataForSlider,
  });
};
export const loadStaffPage = (req, res) => {
  res.render("staff", {
    chefs,
  });
};
export const loadMenuPage = (req, res) => {
  res.render("menu", {
    menuItems,
  });
};
export const loadReservationPage = (req, res) => {
  res.render("reservation");
};
export const loadLocationPage = (req, res) => {
  res.render("location", {
    address,
    hoursOfOperation,
    contactInfo,
    mapEmbedUrl,
  });
};
export const loadgalleryPage = (req, res) => {
  res.render("gallery", {
    galleryData,
  });
};
export const loadNewsPage = (req, res) => {
  res.render("news", {
    contentData,
  });
};
export const loadArchivePage = (req, res) => {
  res.render("archive");
};
