import { Router } from "express";
import {
  ApproveRestaurant,
  getAdminStats,
  getAllRestaurants,
} from "../controllers/adminController.js";
import { adminOnly, protect } from "../middlewares/auth.js";

const adminRouter = Router();

adminRouter.use(protect);
adminRouter.use(adminOnly);

adminRouter.get("/restaurants", getAllRestaurants);
adminRouter.put("/restaurants/:id/approve", ApproveRestaurant);
adminRouter.get("/stats", getAdminStats);

export default adminRouter;
