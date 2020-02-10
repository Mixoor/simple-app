import React, {useState} from 'react';
import {Grid, Form, Input, Dropdown, Checkbox, TextArea,Select} from "semantic-ui-react";
import PropTypes from "prop-types";
import './CustomInput.css';
import InputColor from 'react-input-color';
// import 'react-times/css/material/default.css';
// import 'react-times/css/classic/default.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = (props) => {
    let input = null;
    {/******input color******/
    }
    const [color, setColor] = React.useState({});

    {/******upload images******/
    }
    let $image = (<img src="https://react.semantic-ui.com/images/wireframe/image.png"/>);
    if (props.imageurl) {
        $image = (<img src={props.imageurl}/>);
    }
    {/*******DatePicker**********/
    }
    const [startDate, setStartDate] = useState(new Date());

    switch (props.type) {
        case 'picture':
            return (
                <div className={`form-input-${props.mode}`}>
                    <Form.Field
                        error={props.error}
                    >
                        <label forhtml="picture">{props.label}</label>
                        <span>
                            <label forhtml="picture">
                                {$image}
                                <Input id="picture" {...{...props, type: 'file', label: false}}/>
                            </label>
                        </span>
                    </Form.Field>
                </div>
            );





        case 'datePicker':
            return (
                <div className="form-input-margin">
                    <Form.Field
                        error={props.error}
                    >
                        <label>{props.label}</label>
                        <DatePicker
                            {...props}
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="yyyy mm dd"
                        />
                    </Form.Field>
                </div>
            );
        case 'timePicker':
            return (
                <div className="form-input-margin">
                    <Form.Field
                        error={props.error}
                    >
                        <label>{props.label}</label>
                        <div style={{display: "flex", flex: 1}}>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={10}
                                timeCaption="Time"
                                dateFormat="HH:mm"
                                timeFormat="HH:mm"
                            />
                        </div>
                    </Form.Field>
                </div>
            );
        case 'dropdown':
            return (
                <div className="form-input-margin">
                    <Form.Field
                        error={props.error}
                    >
                        <Grid columns={16}>
                            <Grid.Column width={4}>
                                <label>{props.label}</label>
                            </Grid.Column>

                            <Grid.Column width={12}>
                                <Dropdown {...{...props, type: '', label: false}}/>
                            </Grid.Column>
                        </Grid>
                    </Form.Field>
                </div>
            );
        case 'checkbox':
            return (
                <div className="form-input-margin">
                    <Form.Field
                        error={props.error}
                    >
                        <label>{props.label}</label>
                        <div style={{display: "flex", flex: 1}}><Checkbox toggle/></div>
                    </Form.Field>
                </div>
            );

        case 'select':
            return (
                <div className="form-input-margin">
                    <Form.Field error={props.error}>
                        <Grid columns={"16"}  verticalAlign={"middle"}>
                            <Grid.Column width={"4"}>
                                <label>{props.label}</label>
                            </Grid.Column>
                            <Grid.Column width={"12"}>
                                <Select {...{...props, label: false}}/>
                            </Grid.Column>
                        </Grid>
                    </Form.Field>
                </div>
            );
        case 'color-input':
            return (
                <div className={`form-input-margin ${props.parentClass}`}>
                    <Form.Field
                        error={props.error}
                    >
                        <label>{props.label}</label>
                        <div style={{display: "flex", flex: 1}}>
                            <InputColor
                                initialHexColor="#5e72e4"
                                onChange={setColor}
                                placement="right"
                            />
                        </div>
                    </Form.Field>
                </div>
            );
        case 'number':
            return (
                <div className={`form-input-margin ${props.parentClass}`}>
                    <Form.Field error={props.error}>
                        <Grid columns={16}  verticalAlign={"middle"}>
                            <Grid.Column width={4}>
                        <label>{props.label}</label>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Input type='number' min={0} {...{...props, label: false}}/>
                            </Grid.Column>
                        </Grid>
                    </Form.Field>
                </div>
            );

        case 'textArea':
            return (
                <div className={`form-input-margin ${props.parentClass} custom-form-input`}>
                    <Form.Field
                        error={props.error}
                    >
                        <Grid columns={16} verticalAlign={"middle"}>
                            <Grid.Column width={4}>
                        <label>{props.label}</label>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <TextArea {...{...props, label: false}}/>

                            </Grid.Column>
                        </Grid>
                    </Form.Field>
                </div>
            );


        default:
            return (
                <div className={`form-input-margin ${props.parentClass!== undefined && props.parentClass } custom-form-input`}>

                    <Form.Field
                        error={props.error}
                    >
                        <Grid  columns={16} verticalAlign={"middle"} >
                            {props.label !== false &&
                                <Grid.Column width={4}>
                                    <label >{props.label}</label>
                                </Grid.Column>
                            }
                            <Grid.Column width={12}>
                                <Input {...{...props, label: false}}/>
                            </Grid.Column>
                        </Grid>
                    </Form.Field>


                </div>
            );

    }
}


// CustomInput.proptypes ={
//     mode:PropTypes.string,
// }

export default CustomInput;




