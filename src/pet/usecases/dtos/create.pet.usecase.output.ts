export default class CreatePetUserCaseOutput {
    id: string;
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<CreatePetUserCaseOutput>) {
        Object.assign(this, data);
    }
}