import React from "react";
import {Button, Form} from "semantic-ui-react";
import CustomInput from "@/components/CustomInput/CustomInput";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";


const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: {avatar: true, src: '/images/avatar/small/jenny.jpg'},
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: {avatar: true, src: '/images/avatar/small/elliot.jpg'},
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: {avatar: true, src: '/images/avatar/small/stevie.jpg'},
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: {avatar: true, src: '/images/avatar/small/christian.jpg'},
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: {avatar: true, src: '/images/avatar/small/matt.jpg'},
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: {avatar: true, src: '/images/avatar/small/justen.jpg'},
    },
];

class AddClient extends React.Component {

    constructor(props) {
        super(props);

        this.state={
                firstName:"",
                lastName:"",
                email:"",
                mobile:"",
                adresse:"",
                equipe:"",
                capitaine:"",
                socity:"",
        };

        this.handleChange=this.handleChange.bind(this);
    }

        handleChange(e){
                    let value = e.target.value;
                    this.setState({[e.target.name]:value});
        }



    render() {
        return (
            <MainLayout>
                <Header title={"Ajouter un client"}>
                    <Button  color={"google plus"}>
                        Annuler
                    </Button>
                </Header>

                <div>
                    <Form>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>


                            <div style={{flex: 1, margin: "2em"}}>
                                <CustomInput className="input-bg picture-input" type="picture" label="Photo"
                                             mode="inline" onChange={(e) => console.log(e)}/>
                                <CustomInput className="input-bg" type="text" label="Name" mode="inline"
                                             value="" onChange={(e) => console.log(e)}/>
                                <CustomInput className="input-bg" type="email" label="Email" mode="inline"
                                             value="" onChange={(e) => console.log(e)}/>
                                <CustomInput className="input-bg" type="text" label="Sociéte" mode="inline"
                                             value="" onChange={(e) => console.log(e)}/>
                                <CustomInput className="input-bg" type="text" label="Mobile" mode="inline"
                                             value="" onChange={(e) => console.log(e)}/>

                            </div>

                            <div style={{flex: 1, margin: "2em"}}>
                                <CustomInput className="input-bg" type="text" label="Type" mode="inline"
                                             value="" onChange={(e) => console.log(e.target.value)}/>
                                <CustomInput className="input-bg" type="text" label="some input" mode="inline"
                                             value="" onChange={(e) => console.log(e)}/>
                                <CustomInput className="input-bg" type="text" label="Equipe" mode="inline"
                                             value="" onChange={(e) => console.log(e)}/>
                                <CustomInput className="input-bg" type="text" label="Capitaine" mode="inline"
                                             value="" onChange={(e) => console.log(e)}/>

                            <div style={{flex: 1}}>
                                             <CustomInput
                                    selection
                                    search
                                    fluid
                                    placeholder={"Sélectionner"}
                                    options={friendOptions} className="input-bg" type="dropdown" label="Equipe"
                                    mode="inline"  onChange={(e) => console.log(e)}/>
                                <CustomInput
                                    selection
                                    search
                                    fluid
                                    placeholder={"Sélectionner"}
                                    options={friendOptions} className="input-bg" type="dropdown" label="Compléxe"
                                    mode="inline"  onChange={(e) => console.log(e)}/>

                            </div>
                        </div>
                        </div>
                        <div>
                            <Button className={"round-btn venu"}> Récuperer mot de passe </Button>

                        </div>
                        <div style={{display:"flex",flex:1,justifyContent:'center',alignItems:"center"}}>
                            <Button className={"round-btn"} size={"large"} style={{justifySelf:'center'}}> Enregister </Button>

                        </div>

                    </Form>
                </div>

            </MainLayout>


        );
    }
}

export default AddClient;