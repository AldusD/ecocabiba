import { AuthRepository } from "./authRepository.js";
import { User } from "./models/user.js";

export class AuthService {
    private authRepository = new AuthRepository();

    authUser () : string {
        const dbUser = this.authRepository.getById();
        const user = User.ofDbUser(dbUser);
        // create jwt with userData
        const token = 'jwt'
        return token;
    }
}