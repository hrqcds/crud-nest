import { Body, Controller, Get, HttpStatus, Param, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { RequestUpdateTrainerDto } from "../dto/update.dto";
import { TrainerRepository } from "../repository/trainer.repository";

@Controller()
export class UpdateTrainerController {
    constructor(private trainerRepository: TrainerRepository) { }

    @Put("/trainers/:id")
    async call(@Param("id") id: string, @Body() { name, age }: RequestUpdateTrainerDto, @Res() res: Response): Promise<void> {
        await this.trainerRepository.update(id, name, age)

        res.status(HttpStatus.NO_CONTENT).send()
    }
}