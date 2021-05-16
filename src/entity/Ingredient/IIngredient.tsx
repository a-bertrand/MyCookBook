import { ICoreEntity } from "../common/ICoreEntity";
import { IRecipe } from "../Recipe/IRecipe";

export interface IIngredient extends ICoreEntity {
    description: string;
    measure_type: string;
    quantity: number;
    recipe: IRecipe;
}
