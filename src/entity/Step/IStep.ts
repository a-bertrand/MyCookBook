import { ICoreEntity } from "../common/ICoreEntity";
import { IRecipe } from "../Recipe/IRecipe";

export interface IStep extends ICoreEntity {
    number: number;
    description: number;
    recipe: IRecipe;
}