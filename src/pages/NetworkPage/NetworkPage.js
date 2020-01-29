import React from "react";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import './NetworkPage.css';
import {Button, Table} from "semantic-ui-react";
import CustomTable from "@/components/CustomTable/CustomTable";

class NetworkPage extends React.Component{

    render(){
        return(
            <MainLayout>
                <Header title={"List de Réseaux"}>
                    <Button basic>Retour</Button>
                </Header>
                <Button primary className={"round-btn"} >Ajouter un réseau</Button>

                <div className={"table-container"}>

                    <CustomTable  footer size={8} page={0}  total={12}  header={
                       [
                           "N°",
                           "Nom de role",
                           "Description",
                           'Activité',
                           'Numéro',
                           "Adresse",
                           "Locale",
                           "Année",
                           ""

                       ]
                   } >

                       <Table.Body>
                           <Table.Row>
                               <Table.Cell className="td-text">#10</Table.Cell>
                               <Table.Cell className="td-text">John Lilki</Table.Cell>
                               <Table.Cell className="td-text">
                                   Jamie is a kind girl but sometimes
                               </Table.Cell>
                               <Table.Cell className="td-text">John Lilki</Table.Cell>
                               <Table.Cell className="td-text">John Lilki</Table.Cell>
                               <Table.Cell className="td-text">John Lilki</Table.Cell>
                               <Table.Cell className="td-text">John Lilki</Table.Cell>
                               <Table.Cell className="td-text">John Lilki</Table.Cell>

                               <Table.Cell className="td-text tools" width={2}>
                                   <Button
                                       icon="pencil alternate"
                                       className="custom-edit-tab"
                                       circular
                                   />
                                   <Button
                                       icon="trash"
                                       color="red"
                                       circular
                                   />
                               </Table.Cell>
                           </Table.Row>
                       </Table.Body>
                   </CustomTable>

               </div>
            </MainLayout>
        );
    }
}

export default NetworkPage;