import { UserSchema } from "./models/UserSchema.js";

export class AuthRepository {
    getByEmail (email: string) : UserSchema {
        return new UserSchema(1, 'aa@aa.com', 'senha');
    }
}