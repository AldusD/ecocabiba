import { AuthRepository } from "./AuthRepository.js";
import { User } from "./models/User.js";

export class AuthService {
    private authRepository = new AuthRepository();

    authUser (email: string, password: string) : string {
        const dbUser = this.authRepository.getByEmail(email);
        const user = User.ofDbUser(dbUser);
        // evaluate password and create jwt with userData
        const token = 'jwt'
        return token;
    }

    registerUser(email: string, password: string, cpf: string, name: string, invitationCode: string) : string {
        const dbUser = this.authRepository.getByEmail(email);
        
        if (dbUser === undefined) throw new Error("Email already registred!");

        const user = this.authRepository.create(email, password, cpf, name, invitationCode);
        const token = 'jwt';
        return token;
    }
}