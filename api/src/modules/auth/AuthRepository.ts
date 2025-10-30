import { UserSchema } from "./models/userSchema.js";

export class AuthRepository {
    getById () : UserSchema {
        return new UserSchema(1, 'aa@aa.com', 'senha');
    }
}