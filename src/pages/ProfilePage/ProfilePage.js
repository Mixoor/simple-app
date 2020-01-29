import React from "react";
import "./ProfilePage.css";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import {Button, Icon, Image} from "semantic-ui-react";
import CustomTab from "@/components/CustomTab/CustomTab";
import Header from "@/components/Header/Header";
import ReservationTable from "./ReservationTable";

class ProfilePage extends React.Component{




    render() {


        return (
            <MainLayout>
                <Header title={"Fiche clients"}>
                    <Button basic={true} >Retour</Button>
                </Header>

                <div className={"profile-page"}>

                    <div className={"profile-header"}>

                        <div className={"profile-details"}>
                            <Image
                                   src="https://react.semantic-ui.com/images/wireframe/square-image.png"

                                   circular
                            />
                            <div className={"profile-details-items"}>
                                <span className={"profile-name"}>Thomas Trugger</span>
                                <span className={"profile-phone"}>06.90.12.38.77</span>
                                <span className={"profile-mail"}>tthoms@gmail.com</span>
                            </div>

                        </div>

                        <div className={"profile-info"}>
                            <span>Né le 23 décenmbre 1983</span>
                            <span>Adr 4 rue plantes</span>
                            <span>CP: 75001  Ville: Paris</span>
                            <span>Tél: 01 55 56 54 33</span>
                        </div>
                        <div className={"profile-credit"}>
                            <Icon size={"big"} name={"credit card"} />
                            <span>90 crédits</span>
                            <Button  icon="pencil alternate"

                                     circular
                                        className={"profile-btn"}/>
                        </div>
                    </div>

                    <CustomTab panes={[
                    { menuItem: 'Réservations', render: () => <ReservationTable/> },
                    { menuItem: 'Abonnement', render: () => <ReservationTable/>},
                    { menuItem: 'Compétition', render: () => <ReservationTable/> },
                    { menuItem: 'Ecole de sport', render: () => <ReservationTable/>},
                ]}/>


                </div>

            </MainLayout>
        );
    }
}


export default ProfilePage;