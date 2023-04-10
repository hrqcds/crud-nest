import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/database/prisma.service";
import { FindTrainerDto } from "../../dto/find.dto";
import { ListTrainerDto } from "../../dto/list.dto";
import { TrainerRepository } from "../trainer.repository";

@Injectable()
export class TrainerPrismaRepository implements TrainerRepository {
    constructor(private prisma: PrismaService) { }
    

    async create(name: string, age: number): Promise<void> {
        await this.prisma.trainer.create({
            data: { name, age }
        })
    }

    async list(): Promise<ListTrainerDto[]> {
        return this.prisma.trainer.findMany()

    }

    async findById(id: string): Promise<FindTrainerDto> {
        return await this.prisma.trainer.findUnique({
            where: { id }
        })
    }

    async update(id: string, name: string, age: number): Promise<void> {
        await this.prisma.trainer.update({
            where: {
                id
            },
            data: {
                name,
                age
            }
        })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.trainer.delete({
            where: {
                id
            }
        })
    }

}