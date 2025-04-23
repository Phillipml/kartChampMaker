"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRacer = exports.getOneRacer = exports.getRacers = exports.createRacer = void 0;
const RacersList_1 = __importDefault(require("../models/RacersList"));
const createRacer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRacer = yield RacersList_1.default.create(req.body);
        res.status(201).json(newRacer);
    }
    catch (err) {
        res.status(400).json({ error: `Failed to create racer! /n ${err}` });
    }
});
exports.createRacer = createRacer;
const getRacers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const racers = yield RacersList_1.default.find();
        res.status(200).json(racers);
    }
    catch (err) {
        res.status(500).json({ error: `Failed to get racers! /n ${err}` });
    }
});
exports.getRacers = getRacers;
const getOneRacer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const racer = yield RacersList_1.default.findById(id);
        res.status(200).json(racer);
    }
    catch (err) {
        console.log("Erro");
    }
});
exports.getOneRacer = getOneRacer;
const deleteRacer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(400).json({ message: "ID is required" });
            console.log("ID is required");
        }
        const deletedRacer = yield RacersList_1.default.findByIdAndDelete(id);
        if (!deletedRacer) {
            console.log("Racer not found");
            res.status(404).json({ message: `Racer not found` });
            return;
        }
        console.log(`Racer ${deletedRacer.name} deleted`);
        res.status(200).json(deletedRacer);
        return;
    }
    catch (err) {
        console.log(`Internal Error: \n ${err}`);
        res.status(500).json({ message: err });
        return;
    }
});
exports.deleteRacer = deleteRacer;
