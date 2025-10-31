import { UserRolerEnum } from "../../shared/enums/userRolesEnum.js";
import type { UserSchema } from "./UserSchema.js";
export declare class User {
    private id?;
    private email;
    private password;
    private role;
    constructor(email: string, password: string, role?: UserRolerEnum);
    static ofDbUser(dbUser: UserSchema): User;
    checkBalance(): number;
    setId(id: number): void;
}
//# sourceMappingURL=User.d.ts.map