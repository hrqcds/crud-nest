import { ListTrainerDto } from "../dto/list.dto";

export abstract class TrainerRepository {
    abstract create(name: string, age: number): Promise<void>;
    abstract list(): Promise<ListTrainerDto[]>;
    abstract findById(id: string): Promise<ListTrainerDto>;
    abstract update(id: string, name: string, age: number): Promise<void>;
    abstract delete(id: string): Promise<void>;
}