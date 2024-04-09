import { InjectModel } from "@nestjs/mongoose";
import { Shelter } from "./schemas/shelter.schema";
import { Model } from "mongoose";
import IShelterRepository from "./interfaces/shelter.repository.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ShelterRepository implements IShelterRepository {
    constructor(
        @InjectModel(Shelter.name)
        private readonly sherlterModel: Model<Shelter>
    ){}

    async get(): Promise<Shelter> {
        return await this.sherlterModel.findOne()
    }

    async update(data: Partial<Shelter>): Promise<void> {
        await this.sherlterModel.updateOne(null, {
            ...data,
            updatedAt: new Date()
        })
    }
}