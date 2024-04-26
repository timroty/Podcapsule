"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtCheck = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const express_jwt_1 = require("express-jwt");
const User_1 = __importDefault(require("./routes/User"));
const Podcast_1 = __importDefault(require("./routes/Podcast"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var cors = require("cors");
const app = (0, express_1.default)();
const apiRouter = (0, express_2.Router)();
const PORT = process.env.PORT || "8000";
exports.jwtCheck = (0, express_jwt_1.expressjwt)({
    secret: process.env.SUPABASE_JWT_SECRET,
    audience: "authenticated",
    algorithms: ["HS256"],
});
app.use(express_1.default.json());
app.use(cors());
app.listen(PORT, () => `Server running on port ${PORT}!`);
apiRouter.get("/", (request, response) => {
    response.json({ message: "Ok" });
});
apiRouter.use("/users", User_1.default);
apiRouter.use("/podcast", Podcast_1.default);
apiRouter.get("/environment", (request, response) => {
    response.json({ message: process.env.ENVIRONMENT });
});
app.use("/api", apiRouter);
