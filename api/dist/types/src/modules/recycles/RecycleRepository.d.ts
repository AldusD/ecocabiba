import type { RecyclesMade } from "../../generated/prisma/client.js";
export declare class RecycleRepository {
    private prisma;
    getRecylesById(id: string): Promise<string | null>;
    getRecyclesByDate(userId: string, doneDate: Date): Promise<Date | null>;
    getRecyclesByUserId(userId: string): Promise<RecyclesMade[] | null>;
    getDaysRecycledInMonth(userId: string, month: number, year: number): Promise<number[]>;
    create(userId: string, doneDate: Date): Promise<RecyclesMade>;
    delete(id: string): Promise<RecyclesMade>;
}
//# sourceMappingURL=RecycleRepository.d.ts.map