import 'react-native-gesture-handler';
import React from 'react';
import { ApplicationProvider, Layout, Spinner, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { DatabaseHelper } from '~/entity/common/DatabaseHelper';
import RecipeList from '~/screens/RecipeList';
import AddRecipe from '~/screens/AddRecipe';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
                component={RecipeList} 
                options={{headerShown: false}}/>
		</Stack.Navigator>
	)
}

export default class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			dbOnLoad: false,
		}
	}
	renderContent() {
		DatabaseHelper.DbInitializer().then(connection => {
			console.log("DB ON SUCCESS")
			this.setState({'dbOnLoad': true})
		}).catch(
			error => console.log("DB ERROR", error)
		);
	}

	render() {
		this.renderContent()
		return(
			<ApplicationProvider {...eva} theme={eva.light}>
				<NavigationContainer>
					{ !this.state.dbOnLoad ? 
						<LoaderComponent /> : 
						<Navigation />
					}	
				</NavigationContainer>
			</ApplicationProvider>	
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

