import { ICoreEntity } from "../common/ICoreEntity";
import { IRecipe } from "../Recipe/IRecipe";

export interface IImage extends ICoreEntity {
    title: string;
    content: string;
    recipes: IRecipe
}
