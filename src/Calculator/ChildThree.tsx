import React from 'react';
import ShuttlerComponent from "../Shuttler/ShuttlerComponent"
import CalculatorModel from './CalculatorModel';


export default class ChildThree extends ShuttlerComponent<CalculatorModel>{
    
    modelWasPushed(){
        console.log(this.props.shuttleStack.model);
        
    }

    

    render(){
        return <div>
                    <input 
                        defaultValue={this.props.shuttleStack.model?.answer}
                        readOnly={true}
                        type="text"/>
                </div>
        
    }
}