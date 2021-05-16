import React from "react";
import RecipeDetail from "~/components/RecipeDetail";
import { StepProps } from "./utils/RecipeAddStep";

export class SummaryStep extends React.Component<StepProps, any> {
    render() {
        return (
            <RecipeDetail recipe={this.props.recipe}/>
        )
    }
}

    
    