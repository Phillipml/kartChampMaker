import RacersList from "../models/RacersList";
import { RacerDocument } from "../models/RacersList";
import { Request, Response, RequestHandler } from "express";

export const createRacer = async (req: Request, res: Response) => {
  try {
    const newRacer = await RacersList.create(req.body);
    res.status(201).json(newRacer);
  } catch (err) {
    res.status(400).json({ error: `Failed to create racer! /n ${err}` });
  }
};
export const getRacers = async (_req: Request, res: Response) => {
  try {
    const racers = await RacersList.find();
    res.status(200).json(racers);
  } catch (err) {
    res.status(500).json({ error: `Failed to get racers! /n ${err}` });
  }
};
export const getOneRacer = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const racer = await RacersList.findById(id);
    res.status(200).json(racer);
  } catch (err) {
    console.log("Erro");
  }
};

export const deleteRacer: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(400).json({ message: "ID is required" });
      console.log("ID is required");
    }
    const deletedRacer: RacerDocument | null =
      await RacersList.findByIdAndDelete(id);

    if (!deletedRacer) {
      console.log("Racer not found");
      res.status(404).json({ message: `Racer not found` });
      return;
    }
    console.log(`Racer ${deletedRacer.name} deleted`);
    res.status(200).json(deletedRacer);
    return;
  } catch (err) {
    console.log(`Internal Error: \n ${err}`);
    res.status(500).json({ message: err });
    return;
  }
};
