import React from 'react';
import {Form,Input,Dropdown} from "semantic-ui-react";
import PropTypes from "prop-types"
import './CustomInput.css';
const CustomInput=(props)=>{
    let input=null;

    switch(props.type){
        case 'picture':
            return (
                <div className={`form-input-${props.mode}`}>
                    <Form.Field
                        error={props.error}
                    >
                        <label forhtml="picture">{props.label}</label>
                        <span>
                                <label forhtml="picture">
                                    <img src="https://miro.medium.com/fit/c/96/96/1*ziBRZIhilxftsKMCeu4qhg.jpeg" />



                            <Input id="picture" {...{...props,type:'file',label:false} }/>
                              </label>
                        </span>
                    </Form.Field>
                </div>
            );
    case 'dropdown':
        return (
            <div className="form-input-inline">
                <Form.Field
                   error={props.error}
                >
                    <label>{props.label}</label>
                    <Dropdown {...{...props,type:'',label:false} }/>
                </Form.Field>
            </div>
        );
        default:
        return (
            <div className="form-input-inline">
                <Form.Field
                    error={props.error}
                >
                    <label>{props.label}</label>
                    <Input {...{...props , label:false} }/>
                </Form.Field>
            </div>
        );

    }
}


// CustomInput.proptypes ={
//     mode:PropTypes.string,
// }

export default CustomInput;




