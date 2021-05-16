import React from "react";
import IngredientListPresentation from "./components/IngredientListPresentation";
import StepList from "./components/StepList";
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { Text, Divider, Layout } from '@ui-kitten/components';
import RecipeBtnChangeHowMany from "./components/BtnChangeHowMany";
import { Recipe } from "~/entity/Index";


interface State {
	recipe : Recipe
}


export default class RecipeDetail extends React.Component<any, State> {
	constructor(props: any){
		super(props)
		this.state = {
			recipe : null
		}
	}
	Capitalize (str: String){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}	
	changeToHowMany(toAdd: number) {
		let recipeToUpdate = this.state.recipe;
		let newHowMany = this.state.recipe.how_many + toAdd;
		if (newHowMany > 0) {
			recipeToUpdate.resize_recipe(newHowMany)
			this.setState({'recipe':recipeToUpdate})
		}
	}
	render() {
		const recipe = this.state.recipe;
		const imageUrl = 'data:image/png;base64,'+recipe.images[0].content
		return (
			<ScrollView style={{flex:1, width:'100%'}} scrollIndicatorInsets={{ right: 1 }}>
				<Image
					style={styles.image}
					source={{uri: imageUrl}}
				/>
				<Layout>
					<View style={{padding:10}}> 
						<Text category='h2' style={{ textAlign: "center", textAlignVertical:"center"}}>
							{this.Capitalize(recipe.title)}
						</Text>
					</View>
					<Divider style={styles.customDivider}/>
					<Text category='h5'>Ingredients :</Text>
					<View style={{marginTop:10, marginBottom:10}}>
						<RecipeBtnChangeHowMany 
							actionUp={this.changeToHowMany.bind(this, 1)} 
							actionDown={this.changeToHowMany.bind(this, -1)}
							recipe={recipe}
							layoutLevel="2"
						/>
					</View>
					<View style={{padding:5}}>
						<IngredientListPresentation ingredients={recipe.ingredients} />
					</View>
					<Divider style={styles.customDivider}/>
					<Text category='p1'>
						{recipe.description}
					</Text>
					<Layout>
						{ recipe.steps.length !== 0 ? StepList(recipe) : <></>}
					</Layout>
				</Layout>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
  image: {
	width: '100%', 
	height: 150,
  },
  stepListBox: {
	marginTop: 25
  },
  customDivider: {
	marginTop:10,
	marginBottom:10,
  },
});
  