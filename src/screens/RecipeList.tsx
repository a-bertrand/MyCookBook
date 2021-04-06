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
	needReload: boolean
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
			needReload: false,
		}
	}
	componentDidMount() {
		this.updateRecipes();
	}
	componentWillUnmount() {
		this.setState({'needReload': true})
	}
	async checkNeedReload() {
		this.setState({'needReload': false})
		if(this.state.needReload) {
			await this.updateRecipes();
		}
	}
	async updateRecipes() {
		this.setState({'recipes': await this.recipeRepository.GetAll()})
	}
	render() {
		const { navigate } = this.props.navigation;
		const renderItem = ({item, index}) => (
			<Text> {item.title} </Text>
        );
		this.checkNeedReload();
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