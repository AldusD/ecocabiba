import { UserSchema } from "./models/UserSchema.js";
export class AuthRepository {
    getByEmail(email) {
        return new UserSchema(1, 'aa@aa.com', 'senha');
    }
}
//# sourceMappingURL=AuthRepository.js.map