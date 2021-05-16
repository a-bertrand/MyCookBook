import {Entity, Column, OneToMany} from "typeorm/browser";
import { CoreEntity } from "../common/CoreEntity";
import { IRecipe } from "../Recipe/IRecipe";
import { IImage } from "./IImage";


@Entity()
export class Image extends CoreEntity implements IImage {
    @Column()
    title: string;

    @Column("varchar")
    content: string;

    @OneToMany('Recipe', 'images')
    recipe: IRecipe

    constructor(title, content) {
        super();
        this.title = title;
        this.content = content;
    }
}
