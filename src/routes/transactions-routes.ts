import { Router } from "express";
import { createTransaction, getAll, updateTransaction } from "../controllers/transaction-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateBody } from "../middlewares/validate-body-middleware";
import { transactionSchema } from "../models/transaction-schema";

const transactionsRoutes = Router();

transactionsRoutes
 .all("/*", authenticateToken)
 .post("", validateBody(transactionSchema), createTransaction)
 .get("/",getAll)
 .put("/:transactionId", validateBody(transactionSchema), updateTransaction)

export default transactionsRoutes;
