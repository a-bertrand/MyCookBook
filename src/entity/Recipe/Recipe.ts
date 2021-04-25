import {Entity, Column, ManyToOne} from "typeorm/browser";
import { CoreEntity } from "../common/CoreEntity";
import { IImage } from "../Image/IImage";
import { IIngredient } from "../Ingredient/IIngredient";
import { IStep } from "../Step/IStep";


@Entity()
export class Recipe extends CoreEntity {
    @Column({length: 100})
    title: string;

    @Column('text')
    description: string;
    
    @Column({nullable: true})
    how_many: number;

    @ManyToOne('Step', 'recipe')
    steps: IStep[];

    @ManyToOne('Image', 'recipe')
    images: IImage[];

    @ManyToOne('Ingredient', 'recipe')
    ingredients: IIngredient[];

    static Create(): Recipe {
        let recipe = new Recipe()
        recipe.steps = new Array<IStep>();
        recipe.images = new Array<IImage>();
        recipe.ingredients = new Array<IIngredient>();
        return recipe
    }
}
