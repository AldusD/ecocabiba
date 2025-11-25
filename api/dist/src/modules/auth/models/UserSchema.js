import { UserRolerEnum } from "../../shared/enums/userRolesEnum.js";
export class UserSchema {
    id;
    email;
    password;
    role;
    constructor(id, email, password, role = UserRolerEnum.COMMON) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    getId() { return this.id; }
    getEmail() { return this.email; }
    getPassword() { return this.password; }
    getRole() { return this.role; }
}
//# sourceMappingURL=UserSchema.js.map