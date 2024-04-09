import { Body, Controller, Inject, Post } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatePetUserCaseInput from './usecases/dtos/create.pet.usecase.input';
import CreatePetUserCaseOutput from './usecases/dtos/create.pet.usecase.output';
import PetTokens from './pet.tokens';

@Controller('pet')
export class PetController {

    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUserCaseInput, CreatePetUserCaseOutput>
    
    @Post()
    async createPet(@Body() input: CreatePetControllerInput): Promise<CreatePetUserCaseOutput> {
        const useCaseInput = new CreatePetUserCaseInput({ ...input })
        return await this.createPetUseCase.run(useCaseInput)
    }

}
