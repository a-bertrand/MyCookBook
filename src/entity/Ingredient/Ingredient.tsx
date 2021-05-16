import { CoreEntity } from "../common/CoreEntity";
import {Column, OneToMany, Entity} from "typeorm/browser";
import { Recipe } from "../Recipe/Recipe";
import { IIngredient } from "./IIngredient";


@Entity()
export class Ingredient extends CoreEntity implements IIngredient  {
    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    measure_type: string;

    @Column({nullable: true})
    quantity : number;

    @OneToMany('Recipe', 'ingredients')
    recipe: Recipe
}
