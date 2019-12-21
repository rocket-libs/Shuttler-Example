import React from 'react';
import ShuttlerComponent from "../Shuttler/ShuttlerComponent"
import CalculatorModel from './CalculatorModel';


export default class ChildOne extends ShuttlerComponent<CalculatorModel>{
    
    modelWasPushed(){
        
    }

    _valueChanged(e: any){
        //const thing = Object.assign(this.props.shuttleStack.model,{firstNumber: parseFloat(e.target.value)});
        this.pushDelta({firstNumber: parseFloat(e.target.value)});
    }

    render(){
        return <div>
                    <input 
                        defaultValue={this.props.shuttleStack.model?.firstNumber}
                        onChange={(e: any) => this._valueChanged(e)}
                        type="text"/>
                </div>
        
    }
}