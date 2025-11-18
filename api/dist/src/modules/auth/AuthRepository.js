import { PrismaClient } from "../../generated/prisma/client.js";
export class AuthRepository {
    prisma = new PrismaClient();
    async getByEmail(email) {
        return await this.prisma.user.findUnique({
            where: { email: email }
        });
    }
    async getById(id) {
        return await this.prisma.user.findUnique({
            where: { id }
        });
    }
    async create(email, password, cpf, name) {
        return await this.prisma.user.create({
            data: {
                email: email,
                password: password,
                cpf: cpf,
                name: name,
            }
        });
    }
    async update(id, data) {
        return await this.prisma.user.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return await this.prisma.user.delete({
            where: { id }
        });
    }
}
//# sourceMappingURL=AuthRepository.js.map