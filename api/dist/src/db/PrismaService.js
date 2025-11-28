import { PrismaClient } from "@prisma/client";
class PrismaService {
    static instance;
    constructor() { }
    static getClient() {
        if (!PrismaService.instance) {
            PrismaService.instance = new PrismaClient();
        }
        return PrismaService.instance;
    }
}
export default PrismaService;
//# sourceMappingURL=PrismaService.js.map