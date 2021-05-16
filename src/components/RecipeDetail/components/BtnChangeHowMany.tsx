import React from "react";
import { Icon, Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { Recipe } from "~/entity/Index";

type RecipeBtnChangeHowManyProps = {
    actionUp: any,
    actionDown: any,
    recipe: Recipe,
    layoutLevel: string
}

const IconAdd = (props) => (
    <Icon
        {...props} 
        style={styles.icon}
        fill="black"
        name='plus-outline'
    />
)
const IconMinus = (props) => (
    <Icon
        {...props} 
        style={styles.icon}
        fill="black"
        name='minus-outline'
    />
)


export default class RecipeBtnChangeHowMany extends React.Component<RecipeBtnChangeHowManyProps, any>{
    render() {
        const {actionUp, actionDown, recipe, layoutLevel} = this.props
        return (
            <Layout style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}>
                <Text style={{marginRight: 15}}>
                    Nombre de personne : 
                </Text>
                <Button 
                    size="small" 
                    status="basic" 
                    onPress={actionDown} 
                    accessoryLeft={IconMinus} 
                    />
                <Text style={{marginRight: 15, marginLeft: 15}}> 
                    {recipe.how_many?.toString()}
                </Text>
                <Button 
                    size="small" 
                    status="basic" 
                    onPress={actionUp} 
                    accessoryLeft={IconAdd} />
            </Layout>
        )
    }
}
const styles = StyleSheet.create({ 
    icon: {
        width: 20,
        height: 20,
    }
});