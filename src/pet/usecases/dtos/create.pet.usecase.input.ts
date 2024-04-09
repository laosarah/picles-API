export default class CreatePetUserCaseInput {
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;

    constructor(data: Partial<CreatePetUserCaseInput>) {
        Object.assign(this, data);
    }
}