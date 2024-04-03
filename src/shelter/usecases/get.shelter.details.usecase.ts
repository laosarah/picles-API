import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
  run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
    return Promise.resolve(new GetShelterDetailsUseCaseOutput({
      shelterName: 'Meu Aumigo',
      shelterEmail: 'meuaumigoabrigo@gmail.com',
      shelterPhone: '19998766554',
      shelterWhatsApp: '19986776543',
      createdAt: new Date(),
      updatedAt: new Date()
    }))
  }
}

