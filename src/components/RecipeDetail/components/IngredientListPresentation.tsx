import React from 'react';
import { StyleSheet, View } from 'react-native';
import {CommonStyles} from '~/styles/Common';
import { Text } from '@ui-kitten/components';


const ListShowcase = (props: any) => {
	const ingredients = props.ingredients;
	const RenderIngredient= (props: any) => {
		const ingredient = props.ingredient
		return (
			<View style={styles.listItem}>
				<Text style={styles.textItem}>
					<Text style={styles.textQuantityItem}>
						{
							ingredient.quantity != 0 ? ingredient.quantity + ' ' + ingredient.measure_type + ' - '  :  ''
						}
					</Text>
					{ingredient.name}  
				</Text>
			</View>
		)
	}
	return (
		<View>
			{
				ingredients.map((ingredient: any) => {
						return(
							<RenderIngredient key={ingredient.id} ingredient={ingredient} />
						)
					}
				)
			}
		</View>
	);
};

export default ListShowcase;

const styles = StyleSheet.create({
	listItem: {
		paddingLeft: 5,
	},
	textItem: {
		fontSize: 16,
		padding: 5,
	},
	textQuantityItem: {
		fontWeight: 'bold'
	},
	customH2 : {
		...CommonStyles.h2,
		marginBottom: 15,
	}
});