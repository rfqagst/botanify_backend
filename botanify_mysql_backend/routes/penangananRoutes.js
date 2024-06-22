import express from "express";
import {
  getPenangananPenyakitByNamaHandler,
  getPenangananHamaByNamaHandler,
  getPenangananByIdHandler,
  addPenangananHandler,
  updatePenangananHandler,
  deletePenangananHandler,
} from "../controllers/penanganController.js";

const router = express.Router();

router.get("/penyakit/:nama_penyakit", getPenangananPenyakitByNamaHandler);
router.get("/hama/:nama_hama", getPenangananHamaByNamaHandler);
router.get("penanganan/id/:id_penanganan", getPenangananByIdHandler);
router.post("/", addPenangananHandler);
router.put("/:id_penanganan", updatePenangananHandler);
router.delete("/:id_penanganan", deletePenangananHandler);

export default router;
