import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUserCaseInput from "./dtos/create.pet.usecase.input";
import CreatePetUserCaseOutput from "./dtos/create.pet.usecase.output";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatePetUserCaseInput, CreatePetUserCaseOutput> {
    run(input: CreatePetUserCaseInput): Promise<CreatePetUserCaseOutput> {
        throw new Error("Method not implemented.");
    }

}