import { Controller, Get } from "@nestjs/common";
import { ListTrainerDto } from "../dto/list.dto";
import { TrainerRepository } from "../repository/trainer.repository";

@Controller()
export class ListTrainerController {
    constructor(private trainerRepository: TrainerRepository) { }

    @Get("/trainers")
    async call(): Promise<ListTrainerDto[]> {
        return this.trainerRepository.list()
    }
}