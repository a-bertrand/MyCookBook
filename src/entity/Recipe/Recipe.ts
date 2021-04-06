import {Entity, Column, ManyToOne} from "typeorm/browser";
import { CoreEntity } from "../common/CoreEntity";
import { IImage } from "../Image/IImage";
import { IStep } from "../Step/IStep";


@Entity()
export class Recipe extends CoreEntity {
    @Column({length: 100})
    title: string;

    @Column('text')
    description: string;

    @ManyToOne('Step', 'recipe')
    steps: IStep[];
    
    @Column({nullable: true})
    how_many: number;

    @ManyToOne('Image', 'recipe')
    images: IImage[];
}
