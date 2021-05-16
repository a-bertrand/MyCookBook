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

    steps: IStep[];

    images: IImage[];

    ingredients: IIngredient[];

    static Create(): Recipe {
        let recipe = new Recipe()
        recipe.steps = new Array<IStep>();
        recipe.images = new Array<IImage>();
        recipe.ingredients = new Array<IIngredient>();
        recipe.how_many = 0;
        return recipe
    }

    public resize_recipe(newHowMany: number): void{
        if(this.how_many) {
            this.ingredients.forEach(
                (ingredient: IIngredient) => {
                    let newQuantity = ingredient.quantity * newHowMany / this.how_many
                    ingredient.quantity = newQuantity.toFixed(1)
                }
            );
        }
        this.how_many = newHowMany
    }
}
