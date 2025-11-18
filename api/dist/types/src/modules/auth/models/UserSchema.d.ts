import { UserRolerEnum } from "../../shared/enums/userRolesEnum.js";
export declare class UserSchema {
    private id;
    private email;
    private password;
    private role;
    constructor(id: number, email: string, password: string, role?: UserRolerEnum);
    getId(): number;
    getEmail(): string;
    getPassword(): string;
    getRole(): UserRolerEnum;
}
//# sourceMappingURL=UserSchema.d.ts.map