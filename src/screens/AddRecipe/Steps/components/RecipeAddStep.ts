import { LayoutProps } from "@ui-kitten/components";
import React from "react";
import { Recipe } from "~/entity/Index";

export interface StepProps {
    recipe: Recipe
    updateRecipe: Function
}
export interface StepState {
    recipe: Recipe
}

 
export abstract class RecipeAddStep extends React.Component<StepProps, StepState> {
    constructor(props, state: {} = {}) {
        super(props);
        this.state = {
            recipe: this.props.recipe,
            ...state
        }
    }
}
