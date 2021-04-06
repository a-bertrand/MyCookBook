import { Button, Layout, List,  Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import {Recipe} from "~/entity/Recipe/Recipe";
import RecipeRepository from "~/entity/Recipe/RecipeRepository";


function create_recipe(magic: number) {
	
	
}
const fake_recipes = [
	//create_recipe(1),
	// create_recipe(2),
	// create_recipe(3),
]


interface NewOrderSelectProps {
    navigate: any
}
interface NewOrderSelectState {
    onLoad: boolean,
	text: string,
	recipes: Recipe[],
	visibleDetailRecipe: boolean,
}

export default class RecipeList extends React.Component<any, NewOrderSelectState> {
	private recipeRepository: RecipeRepository = new RecipeRepository()
	static navigationOptions = {
		title: 'Recettes',
	};
	constructor(props: any){
		super(props)
		this.state = {
			text : '',
			onLoad: false,
			recipes : new Array<Recipe>(),
			visibleDetailRecipe: false,
		}
	}
	async addRecipe() {		const recipe = new Recipe();
		recipe.title = "Titre 1";
		recipe.description = " descript";
		recipe.how_many = 1
		await this.recipeRepository.repository.save(recipe);
		this.updateRecipes();
	}
	async updateRecipes() {
		this.setState({'recipes': await this.recipeRepository.GetAll()})
	}
	render() {
		const { navigate } = this.props.navigation;
		this.updateRecipes();
		const renderItem = ({item, index}) => (
			<Text> {item.id} </Text>
        );
        return (
			<Layout style={styles.listContainer}>
				<Text>Liste </Text>
				<Button onPress={() => this.addRecipe()}>
					add Random Recipe
				</Button>
				<List
					data={this.state.recipes}
					renderItem={renderItem} />
			</Layout>
        );
    }
}


const styles = StyleSheet.create({
	listContainer: {
		width: '100%',
		marginBottom: 50
	},
	searchBarLayout: {
		width: '100%',
	},
	container: {
		minHeight: 192,
	},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		borderStartColor: 'white',
        width: '100%', 
        padding:15,
        borderRadius: 15,
	},
	modal: {
		width: '90%',
		maxHeight:'70%',
	},
	customDivider: {
		marginTop:10,
		marginBottom:10,
	},
	scrollContainer: {
		maxHeight: '70%'
	}
});