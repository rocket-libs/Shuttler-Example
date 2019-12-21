import React from 'react';
import ShuttlerComponent from "../Shuttler/ShuttlerComponent"
import CalculatorModel from './CalculatorModel';


export default class ChildTwo extends ShuttlerComponent<CalculatorModel>{
    
    modelWasPushed(){
        
    }

    _valueChanged(e: any){
        const thing = Object.assign(this.props.shuttleStack.model,{secondNumber: parseFloat(e.target.value)});
        this.pushFullModel(thing);
    }

    render(){
        return <div>
                    <input 
                        defaultValue={this.props.shuttleStack.model?.secondNumber}
                        onChange={(e: any) => this._valueChanged(e)}
                        type="text"/>
                </div>
        
    }
}