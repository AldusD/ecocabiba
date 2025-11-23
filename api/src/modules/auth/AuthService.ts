import { AuthRepository } from "./AuthRepository.js";
import { generateAccessToken } from "../../utils/jwt.utils.js"
import { generateInvitationCode } from "../../utils/invitationCode.utils.js";
import bcrypt from "bcrypt";

export class AuthService {
    private authRepository = new AuthRepository();

    async authUser (email: string, password: string) : Promise<string> {
        const dbUser = await this.authRepository.getByEmail(email);

        if (!dbUser || !await bcrypt.compare(password, dbUser.password)) {
            throw new Error("Invalid credentials!");
        }
        const userId = dbUser.id;

        const token = generateAccessToken(userId);
        return token;
    }

    async registerUser(
        email: string,
        password: string,
        cpf: string,
        name: string,
        invitationCode: string
    ) : Promise<string> {
        const dbUser = await this.authRepository.getByEmail(email);
        
        if (dbUser) throw new Error("Email already registered!");
        
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
                const user = await this.authRepository.create(email, password, cpf, name, invitationCode);
            
                const token = generateAccessToken(user.id);
                return token;
            } catch (err: any) {
                if (err.code === 'P2002') { // Prisma unique constraint error
                    attempts++;
                    continue;
                }
                throw err;
            }
        }
        
        throw new Error('Could not generate unique invitation code');
    }
}