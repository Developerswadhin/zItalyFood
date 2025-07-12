import express from "express";

import {
  loadHomePage,
  loadStaffPage,
  loadMenuPage,
  loadReservationPage,
  loadLocationPage,
  loadgalleryPage,
  loadNewsPage,
  loadArchivePage,
} from "../controllers/loadPageControllers.js";

const router = express.Router();

router.get("/", loadHomePage);

router.get("/staff", loadStaffPage);
router.get("/menu", loadMenuPage);
router.get("/reservation", loadReservationPage);
router.get("/location", loadLocationPage);
router.get("/gallery", loadgalleryPage);
router.get("/news", loadNewsPage);
router.get("/archive", loadArchivePage);

export default router;
