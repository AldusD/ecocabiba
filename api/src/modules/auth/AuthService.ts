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
}