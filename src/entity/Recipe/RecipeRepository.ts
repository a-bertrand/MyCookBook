import { getRepository, Repository } from "typeorm/browser";
import { Recipe } from "./Recipe";

export default class RecipeRepository {

    public repository: Repository<Recipe>;

    constructor() {
        this.repository = getRepository(Recipe);
    }

    public async GetAll(): Promise<Recipe[]> {
        return await this.repository.find();
    }
}