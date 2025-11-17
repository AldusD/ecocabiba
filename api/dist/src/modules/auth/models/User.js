import { UserRolerEnum } from "../../shared/enums/userRolesEnum.js";
export class User {
    id;
    email; // TODO change to specific email class??
    password;
    role;
    constructor(email, password, role = UserRolerEnum.COMMON) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static ofDbUser(dbUser) {
        const user = new User(dbUser.getEmail(), dbUser.getPassword(), dbUser.getRole());
        user.setId(dbUser.getId());
        return user;
    }
    checkBalance() {
        // implements logic with no link to prisma representation
        return 10;
    }
    setId(id) {
        this.id = id;
    }
}
//# sourceMappingURL=User.js.map