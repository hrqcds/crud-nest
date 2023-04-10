import { Module } from "@nestjs/common";
import { PrismaService } from "src/infra/database/prisma.service";
import { CreateTrainerController } from "./controller/create.controller";
import { DeleteTrainerController } from "./controller/delete.controller";
import { FindTrainerController } from "./controller/find.controller";
import { ListTrainerController } from "./controller/list.controller";
import { UpdateTrainerController } from "./controller/update.controller";
import { TrainerPrismaRepository } from "./repository/implements/prisma.repository";
import { TrainerRepository } from "./repository/trainer.repository";

@Module({
    controllers: [
        CreateTrainerController, 
        ListTrainerController,
        FindTrainerController, 
        UpdateTrainerController, 
        DeleteTrainerController
    ],
    providers: [
        PrismaService,
        {
            provide: TrainerRepository,
            useClass: TrainerPrismaRepository
        }
    ]
})
export class TrainerModule { }