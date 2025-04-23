"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const racersListRoutes_1 = __importDefault(require("./routes/racersListRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", racersListRoutes_1.default);
if (!process.env.MONGO_URI) {
    throw new Error("Missing the URI variable data to connect. Please");
}
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("Connected to DataBase");
})
    .catch((err) => {
    console.log("DataBase connection error:", err.message);
});
app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});
exports.default = app;
