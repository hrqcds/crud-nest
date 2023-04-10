import { Controller, Delete, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { TrainerRepository } from "../repository/trainer.repository";

@Controller()
export class DeleteTrainerController {
    constructor(private trainerRepository: TrainerRepository) { }

    @Delete("/trainers/:id")
    async call(@Param("id") id: string, @Res() res: Response): Promise<void> {
        await this.trainerRepository.delete(id)

        res.status(200).json({ message: "Trainer deleted" })
    }
}