import 'react-native-gesture-handler';
import React from 'react';
import { ApplicationProvider, IconRegistry, Layout, Spinner, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { DatabaseHelper } from '~/entity/common/DatabaseHelper';
import RecipeList from '~/screens/RecipeList';
import AddRecipe from '~/screens/AddRecipe/Index';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={RecipeList} 
                options={{headerShown: false}}/>
			<Stack.Screen 
                name="AddRecipe" 
                component={AddRecipe} 
                options={{headerShown: false}}/>
		</Stack.Navigator>
	)
}

export default class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			dbOnLoad: true,
		}
	}
	
	componentDidMount() {
		this.setState({'dbOnLoad': true}) 
		DatabaseHelper.DbInitializer().then(connection => {
			console.log("DB ON SUCCESS")
			this.setState({'dbOnLoad': false})
		}).catch(
			error => console.log("DB ERROR", error)
		);
		
	}
	render() {
		console.log(this.state.dbOnLoad)
		return(
			<>
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider {...eva} theme={eva.light}>
					<NavigationContainer>
						{ this.state.dbOnLoad ? 
							<LoaderComponent /> : 
							<Navigation />
						}	
					</NavigationContainer>
				</ApplicationProvider>	
			</>
		)
	}
}

const LoaderComponent = () => 
	 (
		<Layout style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
			<Text>MyCookBook</Text>
			<Spinner status='primary' />
		</Layout>
	)

