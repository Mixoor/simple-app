import React from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
import {Button, Table} from "semantic-ui-react";



class ReservationTable extends React.Component{


    render(){
        return(
            <div className={"table-container"}>

            <CustomTable header={['N°',"Date","Activité","Terrain","Durée","Créneaux","Code réseau","Societé",""]}     footer>


                <Table.Row>
                    <Table.Cell className="td-text">#11</Table.Cell>
                    <Table.Cell className="td-text">Lundi 5 mai 2019</Table.Cell>
                    <Table.Cell className="td-text">Foot 5</Table.Cell>
                    <Table.Cell className="td-text">Terrain 1</Table.Cell>
                    <Table.Cell className="td-text">1H</Table.Cell>
                    <Table.Cell className="td-text">20h-21h</Table.Cell>
                    <Table.Cell className="td-text">82737408</Table.Cell>
                <Table.Cell className="td-text">QSAQUTAR</Table.Cell>

                    <Table.Cell className="td-text tools">
                            <Button className={"round-btn"} > Détails</Button>
                    </Table.Cell>
                </Table.Row>



                <Table.Row>
                    <Table.Cell className="td-text">#11</Table.Cell>
                    <Table.Cell className="td-text">Lundi 5 mai 2019</Table.Cell>
                    <Table.Cell className="td-text">Foot 5</Table.Cell>
                    <Table.Cell className="td-text">Terrain 1</Table.Cell>
                    <Table.Cell className="td-text">1H</Table.Cell>
                    <Table.Cell className="td-text">20h-21h</Table.Cell>
                    <Table.Cell className="td-text">82737408</Table.Cell>
                    <Table.Cell className="td-text">QSAQUTAR</Table.Cell>

                    <Table.Cell className="td-text tools">
                        <Button className={"round-btn"} > Détails</Button>
                    </Table.Cell>
                </Table.Row>


                <Table.Row>
                    <Table.Cell className="td-text">#11</Table.Cell>
                    <Table.Cell className="td-text">Lundi 5 mai 2019</Table.Cell>
                    <Table.Cell className="td-text">Foot 5</Table.Cell>
                    <Table.Cell className="td-text">Terrain 1</Table.Cell>
                    <Table.Cell className="td-text">1H</Table.Cell>
                    <Table.Cell className="td-text">20h-21h</Table.Cell>
                    <Table.Cell className="td-text">82737408</Table.Cell>
                    <Table.Cell className="td-text">QSAQUTAR</Table.Cell>

                    <Table.Cell className="td-text tools">
                        <Button className={"round-btn"} > Détails</Button>
                    </Table.Cell>
                </Table.Row>


                <Table.Row>
                    <Table.Cell className="td-text">#11</Table.Cell>
                    <Table.Cell className="td-text">Lundi 5 mai 2019</Table.Cell>
                    <Table.Cell className="td-text">Foot 5</Table.Cell>
                    <Table.Cell className="td-text">Terrain 1</Table.Cell>
                    <Table.Cell className="td-text">1H</Table.Cell>
                    <Table.Cell className="td-text">20h-21h</Table.Cell>
                    <Table.Cell className="td-text">82737408</Table.Cell>
                    <Table.Cell className="td-text">QSAQUTAR</Table.Cell>

                    <Table.Cell className="td-text tools">
                        <Button className={"round-btn"} > Détails</Button>
                    </Table.Cell>
                </Table.Row>


            </CustomTable>
            </div>
        );
    }
}




export default ReservationTable;