import { getRepository, Repository } from "typeorm/browser";
import { Image } from "../Index";
import { Ingredient } from "../Ingredient/Ingredient";
import { Step } from "../Step/Step";
import { Recipe } from "./Recipe";

export default class RecipeRepository {

    public repository: Repository<Recipe>;

    constructor() {
        this.repository = getRepository(Recipe);
    }

    public async GetAll(): Promise<Recipe[]> {
        return await this.repository.find();
    }

    public async SaveNewRecipe(recipe: Recipe) {
        this.SaveRecipeImages(recipe)
        this.SaveRecipeSteps(recipe)
        this.SaveRecipeIngredients(recipe)
        this.repository.save(recipe);
        
    }
    private SaveRecipeIngredients(recipe: Recipe) {
        const ingredientRepository = getRepository(Step)
        try {
            recipe.steps.map( (step: Step) => ingredientRepository.save(step))
        } catch(exception) {
            console.log('Error when create steps')
            throw exception;
        }
    }
    private SaveRecipeSteps(recipe: Recipe) {
        const ingredientRepository = getRepository(Ingredient)
        try {
            recipe.ingredients.map((ingredient: Ingredient) => ingredientRepository.save(ingredient))
        } catch(exception) {
            console.log('Error when create ingredients')
            throw exception;
        }
    }
    private SaveRecipeImages(recipe: Recipe) {
        const imageRepository = getRepository(Image)
        try {
            recipe.images.map( (image: Image) => imageRepository.save(image))
        } catch(exception) {
            console.log('Error when create images')
            throw exception;
        }
    }
}