import { Button, Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import RecipeDetail from "~/components/RecipeDetail";
import { StepProps } from "./components/RecipeAddStep";

export  class SummaryStep extends React.Component<StepProps, any> {
    render() {
        return (
            <>
                <RecipeDetail recipe={this.props.recipe}/>
                <TouchableOpacity>
                    <Text>Enregistrer ma recette</Text>
                </TouchableOpacity>
            </>
        )
    }
}

    
    