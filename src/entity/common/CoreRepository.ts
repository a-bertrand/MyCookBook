

export abstract class CoreRepository<T> {
    constructor() {
        
        
    }    

    
}

	// async runDemo() {
	// 	await this.connect();
		
	// 	const stepRepository = getRepository(Step);
	// 	const recipeRepository = getRepository(Recipe);
	// 	const imageRepository = getRepository(Image);


	// 	const recipe = new Recipe();
	// 	recipe.title = "Titre 1";
	// 	recipe.description = " descript";
	// 	recipe.how_many = 1
	// 	await recipeRepository.save(recipe);

	// 	console.log("User has been saved");
	// 	this.setState({
	// 		progress: "USer has been saved"
	// 	});

	// 	const recipes = await recipeRepository.find();
	// 	console.log("Post has been loaded: ", recipes);
	// 	this.setState({
	// 		Recipes: recipes
	// 	});
	// }