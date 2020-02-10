import React from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import "./ReservationsPage.css";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import {Button, Dropdown, Input, Table,Image,Icon} from "semantic-ui-react";


class ReservationsPage extends React.Component{


    render() {



        return(
            <MainLayout>
                <Header title={"List de réservations"}>

                </Header>
                <div className={"filtre"}>
                    <span>Filtre: </span>
                    <div className={"filtre-input"}>
                        <Dropdown
                                   size={"mini"}
                                   placeholder='Terrain'
                                   selection
                                   className={"filtre-dropdown"}
                                   clearable
                                   options={[
                                       { key: 'Jenny Hess',
                                           text: 'Jenny Hess',
                                           value: 'Jenny Hess'},
                                       { key: 'Jenny',
                                           text: 'Jenny',
                                           value: 'Jenny'},
                                   ]} >

                        </Dropdown>
                        <Dropdown
                            clearable
                                   size={"mini"}
                                   placeholder='Activité'
                                   selection
                                   className={"filtre-dropdown"}
                                   options={[
                                       { key: 'Jenny Hess',
                                           text: 'Jenny Hess',
                                           value: 'Jenny Hess'},
                                       { key: 'Jenny',
                                           text: 'Jenny',
                                           value: 'Jenny'},
                                   ]} >

                        </Dropdown>
                        <Input type={"text"}  placeholder={"Client"} name={"client"} size='mini' />
                        <Input type={"date"}  placeholder={"Date"} name={"prenom"} size='mini' />

                    </div>

                    <Button className={"btn-round"} secondary>RECHERCHER</Button>


                </div>

                <div className={"table-container"}>
                    <CustomTable
                        size={10}
                        onChangeSize={(e,d)=>console.log(d)}
                        header={['N°','Nom','Prénom','Societé','Terrain','Activité','Durée','Montant','Créneaux','Code résa','','']} footer>
                        <Table.Body>

                        <Table.Row>
                            <Table.Cell className="td-text">
                                    <span className={"td-img"}>
                                            #1
                                    </span>

                            </Table.Cell>
                            <Table.Cell className="td-text">Tuchel</Table.Cell>
                            <Table.Cell className="td-text">Thomas</Table.Cell>
                            <Table.Cell className="td-text">QSAQUATAR</Table.Cell>
                            <Table.Cell className="td-text">Terrain 1</Table.Cell>
                            <Table.Cell className="td-text">Foot 5</Table.Cell>
                            <Table.Cell className="td-text">1H</Table.Cell>
                            <Table.Cell className="td-text">90€</Table.Cell>
                            <Table.Cell className="td-text">20h-21h</Table.Cell>
                            <Table.Cell className="td-text">80737458</Table.Cell>
                            <Table.Cell className="td-text">
                                <Button disabled className={"round-btn"} > Paiement</Button>
                            </Table.Cell>
                            <Table.Cell className="td-text tools">
                                <Button className={"round-btn"} > Détails</Button>
                                <Dropdown
                                    direction={"left"}
                                    className='icon'
                                    icon={null}
                                    floating
                                    trigger={<Icon name={"ellipsis vertical"}/>}
                                >
                                    <Dropdown.Menu>
                                        <Dropdown.Item icon='edit' text='Modifier' />
                                        <Dropdown.Item icon='trash' text='Supprimer' />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>


                </CustomTable>
                </div>

            </MainLayout>
        );
    }

}


export default ReservationsPage;


