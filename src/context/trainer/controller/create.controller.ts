import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateTrainerDto } from "../dto/create.dto";
import { TrainerRepository } from "../repository/trainer.repository";

@Controller()
export class CreateTrainerController {
    constructor(private trainerRepository: TrainerRepository) { }

    @Post("/trainers")
    async call(@Body() { age, name }: CreateTrainerDto, @Res() res: Response): Promise<void> {
        await this.trainerRepository.create(name, age)

        res.status(HttpStatus.CREATED).send()
    }
}