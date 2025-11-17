import { AuthRepository } from "./AuthRepository.js";
import { User } from "./models/User.js";
export class AuthService {
    authRepository = new AuthRepository();
    async authUser(email, password) {
        const dbUser = this.authRepository.getByEmail(email);
        if (!dbUser)
            throw new Error("Invalid credentials!");
        // evaluate password and create jwt with userData
        const token = 'jwt';
        return token;
    }
    async registerUser(email, password, cpf, name) {
        const dbUser = await this.authRepository.getByEmail(email);
        if (dbUser)
            throw new Error("Email already registered!");
        const user = this.authRepository.create(email, password, cpf, name);
        const token = 'jwt';
        return token;
    }
}
//# sourceMappingURL=AuthService.js.map