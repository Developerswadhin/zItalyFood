import express from "express";

export const loadHomePage = (req, res) => {
  res.render("home");
};
export const loadStaffPage = (req, res) => {
  res.render("staff");
};
export const loadMenuPage = (req, res) => {
  res.render("menu");
};
export const loadReservationPage = (req, res) => {
  res.render("reservation");
};
export const loadLocationPage = (req, res) => {
  res.render("location");
};
export const loadgalleryPage = (req, res) => {
  res.render("gallery");
};
export const loadNewsPage = (req, res) => {
  res.render("news");
};
export const loadArchivePage = (req, res) => {
  res.render("archive");
};
