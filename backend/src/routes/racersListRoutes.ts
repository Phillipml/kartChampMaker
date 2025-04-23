import { Router } from "express";
import {
  createRacer,
  deleteRacer,
  getOneRacer,
  getRacers,
} from "../controllers/RacersController";

const router = Router();
router.post("/racers", createRacer);
router.get("/racers", getRacers);
router.get("/racers/:id", getOneRacer);
router.delete("/racers/:id/delete", deleteRacer);

export default router;
