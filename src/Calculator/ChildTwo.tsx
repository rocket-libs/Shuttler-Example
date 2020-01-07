import React from 'react';
import ShuttlerComponent from "../Shuttler/ShuttlerComponent"
import CalculatorModel from './CalculatorModel';


export default class ChildTwo extends ShuttlerComponent<CalculatorModel>{
    
    modelWasPushed(){
        
    }

    get _inputValue(): string{
        if(this.props.shuttleStack.model){
            return this.props.shuttleStack.model.secondNumber;
        }else{
            return "";
        }
    }

    _valueChanged(e: any){
        this.pushDelta({secondNumber: parseFloat(e.target.value)});
    }

    render(){
        return <div>
                    <input 
                        defaultValue={this._inputValue}
                        onChange={(e: any) => this._valueChanged(e)}
                        type="text"/>
                </div>
        
    }
}