import { PrismaClient, type User } from "../../generated/prisma/client.js";

export class AuthRepository {
    private prisma = new PrismaClient();

    async getByEmail (email: string) : Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { email: email }
        })
    }

    async getById(id: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { id }
        });
    }

    async getByInvitationCode(invitationCode: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: { invitationCode: invitationCode }
        });
    }

    async create (
        email: string,
        password: string,
        cpf: string,
        name: string,
        invitationCode: string
    ) : Promise<User>  {
        return await this.prisma.user.create({
            data: {
                email: email,
                password: password,
                cpf: cpf,
                name: name,
                invitationCode: invitationCode
            }
        })
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        return await this.prisma.user.update({
        where: { id },
        data
        });
    }

    async delete(id: string): Promise<User> {
        return await this.prisma.user.delete({
        where: { id }
        });
    }
}