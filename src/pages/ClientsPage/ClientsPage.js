import React from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import "./ClientsPage.css";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import {Button, Dropdown, Input, Table,Image,Icon} from "semantic-ui-react";


class ClientsPage extends React.Component{


    render() {



        return(
            <MainLayout>
                <Header title={"List de clients"}>

                </Header>
            <Button className={"round-btn"}>Ajouter un client</Button>
                <div className={"filtre"}>
                    <span>Filtre: </span>
                    <div className={"filtre-input"}>
                        <Dropdown  search
                                   size={"mini"}
                                   clearable
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
                        <Input type={"text"}  placeholder={"Nom"} name={"nom"} size='mini' />
                        <Input type={"text"}  placeholder={"Prénom"} name={"prenom"} size='mini' />
                        <Input type={"text"}  placeholder={"Email"} name={"email"} size='mini'  />

                    </div>

                    <Button className={"btn-round"} secondary>RECHERCHER</Button>


                </div>

                <div className={"table-container"}>
                        <CustomTable header={['Nom','Prénom','Email','Mobile','Type',
                            'Equipe','Capitaine','Societé','']} footer>

                            <Table.Row>
                                <Table.Cell className="td-text">
                                    <span className={"td-img"}>
                                           <Image
                                               src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                                               circular
                                           />
                                           TUCHEL
                                    </span>
                                </Table.Cell>
                                <Table.Cell className="td-text">Thomas</Table.Cell>
                                <Table.Cell className="td-text">popov@gmail.com</Table.Cell>
                                <Table.Cell className="td-text">06.09.12.38.77</Table.Cell>
                                <Table.Cell className="td-text">Loisirs</Table.Cell>
                                <Table.Cell className="td-text">---</Table.Cell>
                                <Table.Cell className="td-text">---</Table.Cell>
                                <Table.Cell className="td-text">---</Table.Cell>

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

                        </CustomTable>
                </div>

            </MainLayout>
        );
    }

}


export default ClientsPage;


