import { Button, Layout, List,  Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import {Recipe} from "~/entity/Recipe/Recipe";
import RecipeRepository from "~/entity/Recipe/RecipeRepository";


interface RecipeListProps {
    navigation: any
}
interface RecipeListState {
    onLoad: boolean,
	text: string,
	recipes: Recipe[],
	visibleDetailRecipe: boolean,
	alreadyUpdate: boolean
}

export default class RecipeList extends React.Component<RecipeListProps, RecipeListState> {
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
			alreadyUpdate: false
		}
	}
	clean() {
		this.recipeRepository.repository.find().then((recipes) => {
			recipes.forEach(recipe => {
				this.recipeRepository.repository.delete(recipe.id)
			});
		});
	}
	componentDidMount() {
		this.clean()
		const  navigation  = this.props.navigation;
		navigation.addListener('focus', () => this.updateRecipes()),
		this.updateRecipes()
	}	
	updateRecipes() {
		this.setState({'alreadyUpdate': true, 'onLoad': true})
		this.recipeRepository.GetAll().then((recipes) => {
			this.setState({'recipes': recipes, 'onLoad': false})
		})
	}
	render() {
		const  {navigate}  = this.props.navigation;
		const renderItem = ({item, index}) => (
			<Text> {item.title} </Text>
        );
        return (
			<Layout style={styles.listContainer}>
				<Text>Liste </Text>
				<Button onPress={() => navigate('AddRecipe')}>
					Ajouter une recette
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