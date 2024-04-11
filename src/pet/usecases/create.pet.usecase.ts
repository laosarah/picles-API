import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./dtos/create.pet.usecase.input";
import CreatePetUserCaseOutput from "./dtos/create.pet.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import IPetRepository from "../interface/pet.repository.interface";
import PetTokens from "../pet.tokens";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUseCaseInput, CreatePetUserCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ) {}

    async run(input: CreatePetUseCaseInput): Promise<CreatePetUserCaseOutput> {
        const newPet = await this.petRepository.create(input)
        return new CreatePetUserCaseOutput({
            id: newPet._id,
            name: newPet.name,
            type: newPet.type,
            size: newPet.size,
            gender: newPet.gender,
            bio: newPet.bio,
            photo: newPet.photo,
            createdAt: newPet.createdAt,
            updatedAt: newPet.updatedAt,
        })
    }

}