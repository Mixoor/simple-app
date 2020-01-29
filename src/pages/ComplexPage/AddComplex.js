import React from "react";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import './ComplexPage.css';
import {Button, Table,Form} from "semantic-ui-react";
import CustomInput from "@/components/CustomInput/CustomInput";



const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]




class AddComplex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:""
        };

        this.onChangeHandle=this.onChangeHandle.bind(this);
        this.onSubmitHandle=this.onSubmitHandle.bind(this);
    }

    onChangeHandle(event){
        console.log(event.target.value);
    }

    onSubmitHandle(event){
        console.log(event);
    }

    render(){
        return  (
            <MainLayout>
                <Header title={"Ajouter un complexe"}>
                    <Button>Retour</Button>
                </Header>
                <Form>
                    <div className={"div-form-container"}>


                        <div className={"div-form"}>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"}
                                         mode={"inline"}
                                         value={"value"}
                                         error={{content:"something went wrong"}}
                                         onChange={this.onChangeHandle}/>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>

                        </div>

                        <div className={"div-form"}>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>

                            <CustomInput

                                compact

                                selection
                                options={options} className="input-bg" type="dropdown" label="some input" mode="inline" value="design" onChange={(e,d)=>console.log(d.value)}/>

                        </div>

                        <div className={"div-form"}>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"}
                                         mode={"inline"}
                                         value={"value"}
                                         error={{content:"something went wrong"}}
                                         onChange={this.onChangeHandle}/>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>

                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>
                            <CustomInput name={"name"}
                                         className={"input-bg"}
                                         label={"Name"}
                                         type={"text"} mode={"inline"}
                                         value={"value"}
                                         onChange={this.onChangeHandle}/>

                        </div>
                        <div className={"div-form"}>
                        <CustomInput name={"name"}
                                     className={"input-bg"}
                                     label={"Name"}
                                     type={"text"} mode={"inline"}
                                     value={"value"}
                                     onChange={this.onChangeHandle}/>

                    </div>

                    </div>
                    <div className={"btn-right"}>
                        <Button   content={'Cancel'} basic />
                        <Button    content={'Enregister'} primary />

                    </div>

                </Form>
            </MainLayout>)
    }

}



export default AddComplex;