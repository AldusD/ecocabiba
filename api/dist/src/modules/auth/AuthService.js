import { AuthRepository } from "./AuthRepository.js";
import { generateAccessToken } from "../../utils/jwt.utils.js";
import bcrypt from "bcrypt";
export class AuthService {
    authRepository = new AuthRepository();
    async authUser(email, password) {
        const dbUser = await this.authRepository.getByEmail(email);
        if (!dbUser || !await bcrypt.compare(password, dbUser.password)) {
            throw new Error("Invalid credentials!");
        }
        const userId = dbUser.id;
        const token = generateAccessToken(userId);
        return token;
    }
    async registerUser(email, password, cpf, name) {
        const dbUser = await this.authRepository.getByEmail(email);
        if (dbUser)
            throw new Error("Email already registered!");
        password = await bcrypt.hash(password, 10);
        console.log('hi');
        const user = await this.authRepository.create(email, password, cpf, name);
        const token = generateAccessToken(user.id);
        return token;
    }
}
//# sourceMappingURL=AuthService.js.map