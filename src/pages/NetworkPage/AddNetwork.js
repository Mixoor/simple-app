import React from "react";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import './NetworkPage.css';
import {Button, Table,Form} from "semantic-ui-react";
import CustomInput from "@/components/CustomInput/CustomInput";

class AddNetwork extends React.Component{
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
          <Header title={"Ajouter un réseau"}>
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

                      </div>

                  </div>
                  <div className={"btn-right"}>
                      <Button  icon='save' labelPosition='left'  content={'Enregister'} primary className={"btn-right"}/>

                  </div>

              </Form>
      </MainLayout>)
    }

}



export default AddNetwork;