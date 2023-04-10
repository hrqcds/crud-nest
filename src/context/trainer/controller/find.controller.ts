import { Controller, Get, Param } from "@nestjs/common";
import { FindTrainerDto } from "../dto/find.dto";
import { TrainerRepository } from "../repository/trainer.repository";

@Controller()
export class FindTrainerController {
    constructor(private trainerRepository: TrainerRepository) { }

    @Get("/trainers/:id")
    async call(@Param("id") id: string): Promise<FindTrainerDto> {
        return this.trainerRepository.findById(id)
    }
}