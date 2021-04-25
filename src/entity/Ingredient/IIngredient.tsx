import { ICoreEntity } from "../common/ICoreEntity";
import { IRecipe } from "../Recipe/IRecipe";

export interface IIngredient extends ICoreEntity {
    name: string;
    measure_type: string;
    quantity: number;
    recipe: IRecipe;
}
