import { AuthRepository } from "./AuthRepository.js";
import { generateAccessToken } from "../../utils/jwt.utils.js";
import { generateInvitationCode } from "../../utils/invitationCode.utils.js";
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
    async registerUser(email, password, cpf, name, invitationCode) {
        let dbUser = await this.authRepository.getByEmail(email);
        if (dbUser)
            throw new Error("Email already registered!");
        dbUser = await this.authRepository.getByCPF(cpf);
        if (dbUser)
            throw new Error("CPF already registered!");
        password = await bcrypt.hash(password, 10);
        if (invitationCode) {
            const inviterUser = await this.authRepository.getByInvitationCode(invitationCode);
            if (!inviterUser) {
                throw new Error("Invalid invitation code!");
            }
        }
        let attempts = 0;
        const maxAttempts = 5;
        while (attempts < maxAttempts) {
            try {
                const invitationCode = generateInvitationCode();
                console.log(invitationCode);
                const user = await this.authRepository.create(email, password, cpf, name, invitationCode);
                const token = generateAccessToken(user.id);
                return token;
            }
            catch (err) {
                if (err.code === 'P2002') {
                    attempts++;
                    continue;
                }
                throw err;
            }
        }
        throw new Error('Could not generate unique invitation code');
    }
}
//# sourceMappingURL=AuthService.js.map