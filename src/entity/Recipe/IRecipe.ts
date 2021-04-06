import { ICoreEntity } from "../common/ICoreEntity";
import { IImage } from "../Image/IImage";
import { IStep } from "../Step/IStep";

export interface IRecipe extends ICoreEntity {
    title: string;
    description: string;
    steps: IStep[]
    how_many: number;
    images: IImage[];
}

