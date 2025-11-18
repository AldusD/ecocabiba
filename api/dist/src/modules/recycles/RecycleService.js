import { RecycleRepository } from "./RecycleRepository.js";
export class RecycleService {
    recycleRepository = new RecycleRepository();
    async checkRecycle(userId, currentDate) {
        const hasRecycled = await this.recycleRepository.getRecyclesByDate(userId, currentDate);
        return hasRecycled !== null;
    }
}
//# sourceMappingURL=RecycleService.js.map