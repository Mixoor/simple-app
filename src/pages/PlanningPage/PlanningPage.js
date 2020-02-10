import React from "react";
import "./PlanningPage.css";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import FullCalendar from '@fullcalendar/react'
import plugin from "@fullcalendar/resource-timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import {
    Button,
    Icon,
    Divider,
    Checkbox,
    Tab,
    Transition,
    Image,
    Modal,
    Search,
    Grid,
    Pagination, Form, Input, Dropdown, Table
} from "semantic-ui-react";
import Calendar from 'react-calendar';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import "@fullcalendar/timegrid/main.css";
import moment from "moment";
import localization from 'moment/locale/fr';
import ReactTooltip from 'react-tooltip';
import CustomLoader from "../../components/Loader/Loader";
import CustomTab from "../../components/CustomTab/CustomTab";
import CustomInput from "../../components/CustomInput/CustomInput";
import ReservationTable from "../ProfilePage/ReservationTable";
import CustomTable from "../../components/CustomTable/CustomTable";


const icon = "https://i1.wp.com/s3-alpha.figma.com/static/user_m_v2.png?ssl=1";

let events = [
    {
        id: "01",
        resourceId: 14,
        title: "event 1",
        start: "2020-01-30T08:00:00+00:00",
        end: "2020-01-30T10:00:00+00:00"
        ,
        startHour: "08:00",
        endHour: "10:00",
        color: "#72F286",
        icon: icon,
        user: {firstname: "james", lastname: "bond", phone: "007123123", sociaty: "QSCVCVCV", info: "more information"}
    },
    {
        id: "02",
        resourceId: 24,
        title: "event 3",
        start: "2020-01-30T08:00:00+00:00",
        end: "2020-01-30T10:00:00+00:00",
        startHour: "08:00",
        endHour: "10:00",
        color: "#EEF1F7",
        icon: icon,
        user: {firstname: "james", lastname: "bond", phone: "007123123", sociaty: "QSCVCVCV", info: "more information"}
    },
    {
        id: "03",
        resourceId: 34,
        title: "event 4",
        color: "#9E94FF",
        start: "2020-01-30T08:00:00+00:00",
        end: "2020-01-30T10:00:00+00:00",
        startHour: "08:00",
        endHour: "10:00",
        icon: icon,
        user: {firstname: "james", lastname: "bond", phone: "007123123", sociaty: "QSCVCVCV", info: "more information"}
    },
    {
        id: "04",
        resourceId: 44,
        title: "event 5",
        color: "#15A4FA",
        start: "2020-01-30T08:00:00+00:00",
        end: "2020-01-30T10:00:00+00:00",
        startHour: "08:00",
        endHour: "10:00",
        icon: icon,
        user: {firstname: "james", lastname: "bond", phone: "007123123", sociaty: "QSCVCVCV", info: "more information"}
    },
    {
        id: "05",
        resourceId: 14,
        title: "event 2",
        color: "#4F4F4F",
        start: "2020-01-30T08:00:00+00:00",
        end: "2020-01-30T10:00:00+00:00",
        startHour: "08:00",
        endHour: "10:00",
        icon: icon,
        user: {firstname: "james", lastname: "bond", phone: "007123123", sociaty: "QSCVCVCV", info: "more information"}
    },


];

let options = [
    {
        key: 0,
        text: "Equipe A",
        value: 0
    },
    {
        key: 1,
        text: "Equipe B",
        value: 1
    }
];

let players = [
    {
        deletable: false,
        editable: true,
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
    },
    {
        deletable: false,
        editable: true,
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
    },
    {
        deletable: false,
        editable: true,
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
    },
    {
        deletable: false,
        editable: true,
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
    },
    {
        deletable: false,
        editable: true,
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
    }
];

let clients = [
    {
        id: 0,
        firstName: "Client1 firstname",
        lastName: "Client lastname",
        email: "client1@gmail.com",
        mobile: "06 55 66 44 11"
    },
    {
        id: 1,
        firstName: "Client2 firstname",
        lastName: "Client2 lastname",
        email: "client2@gmail.com",
        mobile: "06 44 66 44 11"
    },
    {
        id: 2,
        firstName: "Client3 firstname",
        lastName: "Client3 lastname",
        email: "client3@gmail.com",
        mobile: "06 33 66 44 11"
    },
];

let player= {
    id:null,
    firstName:"",
    lastName:"",
    email:'',
    mobile:"",
    terrain:"",
    removable:false
};


class PlanningPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().format("YYYY-MM-DD"),
            terrains: [],
            toggle: false,
            modalHistory: false,
            modalDeleted: false,
            modalAdd: false,
            modalDirection: "left",
            isLoading: false,
            search: "",
            results: [],
            client: null,
            clients: [],
            info: {},
            selectedIndex: 0,
            reservationForm: {
                selectedIndex: -1,
                information: {
                    show: false,
                    search: "",
                    id: null,
                    isLoading: false,
                    firstName: "",
                    lastName: "",
                    dateOfBirth: "",
                    email: "",
                    mobile: "",
                    society: "",
                    info: "",
                    activity: "",
                    terrain: "",
                    competition: "",
                    duree: "",
                    date: "",
                    startHour: "",
                    endHour: "",
                    montant: "",
                    remise: "",
                    codeRe: "",
                    codeVideo: "",
                    recurrence: "0",
                    video: "0",
                    conclusion: "",
                },
                participant: {
                    equipe1: {
                        id: 0,
                        players: new Array(5).fill(player)
                    },
                    equipe2: {
                        id: 1,
                        players: new Array(5).fill(player)
                    }


                },
                history: {}
            }
        };

        this.fullCalendarRef = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onShowHandler = this.onShowHandler.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onEventHandler = this.onEventHandler.bind(this);
        this.renderEvent = this.renderEvent.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.showClientForm = this.showClientForm.bind(this);
        this.handleReservationChange = this.handleReservationChange.bind(this);
        this.handleParticipantChange = this.handleParticipantChange.bind(this);
        this.handleConclusion = this.handleConclusion.bind(this);
        this.handlePlayerChange = this.handlePlayerChange.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.addNewPlayer = this.addNewPlayer.bind(this);

    }

    removePlayer(index,team){
        let {reservationForm} = this.state;
        let {participant} = reservationForm;
        if (team === 1) {
            let {equipe1} = participant;
            equipe1.players.splice(index,1);
            participant = {...participant, ...equipe1};
            reservationForm = {...reservationForm, ...participant};
        } else {
            let {equipe2} = participant;
            equipe2.players.splice(index,1);
            participant = {...participant, ...equipe2};
            reservationForm = {...reservationForm, ...participant};
        }

        this.setState({reservationForm: reservationForm});
    }

    addNewPlayer(team){
        let {reservationForm} = this.state;
        let {participant} = reservationForm;

        if (team === 1) {
            let {equipe1} = participant;
            equipe1.players.push({id:null,...player,removable:true});
            participant = {...participant, ...equipe1};
            reservationForm = {...reservationForm, ...participant};
        } else {
            let {equipe2} = participant;
            equipe2.players.push({id:null,...player,removable:true});
            participant = {...participant, ...equipe2};
            reservationForm = {...reservationForm, ...participant};
        }

        this.setState({reservationForm: reservationForm});
    }

    renderPlayerInformation(index,team) {

        // let client = options.filter(c => c.value === player.id);
        // if(client.length===0) return;
        // player = client[0].player;
        let editable =true;
        let {reservationForm} = this.state;
        let {participant} = reservationForm;
        let equipe= team===1 ? participant.equipe1 : participant.equipe2;
        let player = equipe.players[index];
        return (
            <>
                <Grid.Column width={6} className={"no-padding"}>
                    <Input
                        type={"text"}
                        placeholder={'nom'}
                        name={"firstName"}
                        value={player.firstName}
                        onChange={(e)=>this.handleParticipantChange(e,index,team)}
                    />
                </Grid.Column>
                <Grid.Column width={5} className={"no-padding"}>
                    <Input
                        type={"text"}
                        placeholder={'prénom'}
                        name={"lastName"}
                        value={player.lastName}
                        onChange={(e)=>this.handleParticipantChange(e,index,team)}
                    />

                </Grid.Column>
                <Grid.Column width={5} className={"no-padding"}>
                    <Input
                        type={"text"}
                        placeholder={'Terrain'}
                        name={"terrain"}
                        value={player.terrain}
                        onChange={(e)=>this.handleParticipantChange(e,index,team)}
                    />
                </Grid.Column>
                <Grid.Column width={10} className={"no-padding"}>
                    <Input
                        type={"text"}
                        name={"email"}
                        placeholder={"Email"}
                        value={player.email}
                        onChange={(e)=>this.handleParticipantChange(e,index,team)}
                    />
                </Grid.Column>
                <Grid.Column width={6} className={"no-padding"}>
                    <Input
                        type={"text"}
                        name={"mobile"}
                        placeholder={"Mobile"}
                        value={player.mobile}
                        onChange={(e)=>this.handleParticipantChange(e,index,team)}
                    />
                </Grid.Column>
            </>);
    }

    handlePlayerChange(e, d, i, team) {

        let {reservationForm} = this.state;
        let {participant} = reservationForm;
        if (team === 1) {
            let {equipe1} = participant;
            equipe1.players[i] = {...equipe1.players[i],id:d.value};
            participant = {...participant, ...equipe1};
            reservationForm = {...reservationForm, ...participant};
        } else {
            let {equipe2} = participant;
            equipe2.players[i] = {...equipe2.players[i],id:d.value};
            participant = {...participant, ...equipe2};
            reservationForm = {...reservationForm, ...participant};
        }

        this.setState({reservationForm: reservationForm});
    }

    onChangeTeam(e, d, team) {
        let {reservationForm} = this.state;
        let {participant} = reservationForm;
        if (team === 1) {
            let {equipe1} = participant;
            equipe1.id = d.value;
            equipe1.players = new Array(5).fill({id: null});
            participant = {...participant, ...equipe1};
            reservationForm = {...reservationForm, ...participant};
        } else {
            let {equipe2} = participant;
            equipe2.id = d.value;
            equipe2.players = new Array(5).fill({id: null});
            participant = {...participant, ...equipe2};
            reservationForm = {...reservationForm, ...participant};
        }

        this.setState({reservationForm: reservationForm});
        console.log("state : ", this.state);
    }

    handleConclusion(conclusion) {
        let reservationForm = this.state.reservationForm;
        let information = reservationForm.information;

        information.conclusion = conclusion;

        reservationForm = {...reservationForm, information};
        this.setState({
            reservationForm: reservationForm
        });

    }

    handleReservationChange(e) {
        let {reservationForm} = this.state;
        let {information} = this.state.reservationForm;
        information = {...information, [e.target.name]: e.target.value};
        reservationForm = {...reservationForm, information};
        this.setState({reservationForm: reservationForm});
    }

    handleParticipantChange(e,index,team) {
        let {reservationForm} = this.state;
        let {participant} = this.state.reservationForm;
        let equipe = team===1 ? participant.equipe1:participant.equipe2;

        equipe.players[index]={...equipe.players[index],[e.target.name]:e.target.value};


        participant = team===1 ? {...participant,equipe1:equipe} :{...participant,equipe2:equipe};
        reservationForm = {...reservationForm, participant};
        this.setState({reservationForm: reservationForm});
    }

    showClientForm(e, show) {
        e.preventDefault();

        let {reservationForm} = this.state;
        let {information} = this.state.reservationForm;

        information.show = show;
        reservationForm = {...reservationForm, information};
        this.setState({reservationForm: reservationForm});

    }

    renderParticipantsModal() {

        let clientOptions = clients.map(client => {
            return {
                key: client.id,
                value: client.id,
                text: `${client.lastName + " " + client.firstName}`,
                player: client
            }
        });
        return (
            <Grid columns={16} className={"padding-modal"} padded={false}>
                <Grid.Row className={"padding-modal"}>
                <Grid.Column computer={8} tablet={16} className={"no-padding-left  modal-border-left no-padding-right"}  >
                    <Grid columns={16} className={"padding-modal"}>
                        <Grid.Row verticalAlign={"middle"} >
                            <Grid.Column width={3}>
                                <Image src={require("../../assets/teamA.png")} className={"modal-team-logo"}/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Dropdown scrolling={true} search selection fluid className={"search-input"}
                                          loading={this.state.isLoading}
                                          defaultValue={this.state.reservationForm.participant.equipe1.id}
                                          options={options}
                                          onChange={(e, d) => this.onChangeTeam(e, d, 1)}
                                />
                            </Grid.Column>

                        </Grid.Row>

                        {this.state.reservationForm.participant.equipe1.players.map((player, i) => {
                            return (
                                <Grid.Row verticalAlign={"top"}  className={'border-bottom no-padding-right'} >
                                    <React.Fragment key={`equipe-1-player-${i}`}>
                                        <Grid.Column width={4} className={"no-padding-left "}>

                                                    <label className={"label-modal no-padding"}>Joueur {+(i + 1)}</label>
                                                    {
                                                        player.removable &&
                                                        <Icon color={"red"}  name={"trash"} className={"remove-player"}
                                                              onClick={() => this.removePlayer(i, 1)}/>
                                                    }

                                        </Grid.Column>
                                        <Grid.Column width={12} className={"no-padding-left no-padding-right"}>

                                            <Grid columns={16} padded={false}>
                                                {/*<Grid.Column width={player.removable ? 14 : 16 } className={'no-padding'}>*/}
                                                {/*    <Dropdown search selection fluid scrolling*/}
                                                {/*              className={"search-input"}*/}
                                                {/*              loading={this.state.isLoading}*/}
                                                {/*              placeholder={"Choisissez un joueur"}*/}
                                                {/*              value={player.id}*/}
                                                {/*              onChange={(e, d) => this.handlePlayerChange(e, d, i, 1)}*/}
                                                {/*              options={clientOptions}*/}
                                                {/*              onSearchChange={(event, data) => console.log(data)}*/}
                                                {/*    />*/}
                                                {/*</Grid.Column>*/}
                                                {/*{*/}
                                                {/*    player.removable && <Grid.Column width={2}> <Icon color={"red"} name={"trash"} onClick={()=>this.removePlayer(i,1)}/></Grid.Column>*/}
                                                {/*}*/}
                                                {
                                                this.renderPlayerInformation(i,1)
                                                }
                                            </Grid>


                                        </Grid.Column>
                                    </React.Fragment>


                                </Grid.Row>
                            );
                        })
                        }

                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Button icon={"add user"} className={"round-btn a-venir"} content={"Ajouter un joueur"} onClick={()=>this.addNewPlayer(1)}/>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Grid.Column>

                <Grid.Column computer={8} tablet={16} className={"no-padding-left border-bottom no-padding-right"} >
                    <Grid columns={16} className={"padding-modal"}>
                        <Grid.Row verticalAlign={"middle"}>
                            <Grid.Column width={3}>
                                <Image src={require("../../assets/teamB.png")} className={"modal-team-logo"}/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Dropdown scrolling={true} search selection fluid className={"search-input"}
                                          loading={this.state.isLoading}
                                          defaultValue={this.state.reservationForm.participant.equipe2.id}
                                          options={options}
                                          onChange={(e, d) => this.onChangeTeam(e, d, 2)}
                                />
                            </Grid.Column>

                        </Grid.Row>

                        {this.state.reservationForm.participant.equipe2.players.map((player, i) => {
                            return (
                                <Grid.Row verticalAlign={"top"} className={'no-padding-left no-padding-right '}  >
                                    <React.Fragment key={`equipe-2-player-${i}`}>
                                        <Grid.Column width={4} className={"no-padding-left"} >
                                            <Grid columns={16} >
                                                <Grid.Column width={16}  >
                                                    <label className={"label-modal no-padding"}>Joueur {+(i + 1)}</label>
                                                    {
                                                        player.removable &&
                                                        <Icon color={"red"}  name={"trash"} className={"remove-player"}
                                                              onClick={() => this.removePlayer(i, 2)}/>
                                                    }
                                                </Grid.Column>


                                            </Grid>
                                        </Grid.Column>
                                        <Grid.Column width={12} className={"no-padding-left no-padding-right"} >

                                            <Grid columns={16} className={"no-padding-right"}>
                                                {/*<Grid.Column width={player.removable ? 14 : 16 } className={'no-padding'}>*/}
                                                {/*    <Dropdown search selection fluid scrolling*/}
                                                {/*              className={"search-input"}*/}
                                                {/*              loading={this.state.isLoading}*/}
                                                {/*              placeholder={"Choisissez un joueur"}*/}
                                                {/*              value={player.id}*/}
                                                {/*              onChange={(e, d) => this.handlePlayerChange(e, d, i, 1)}*/}
                                                {/*              options={clientOptions}*/}
                                                {/*              onSearchChange={(event, data) => console.log(data)}*/}
                                                {/*    />*/}
                                                {/*</Grid.Column>*/}
                                                {/*{*/}
                                                {/*    player.removable && <Grid.Column width={2}> <Icon color={"red"} name={"trash"} onClick={()=>this.removePlayer(i,1)}/></Grid.Column>*/}
                                                {/*}*/}
                                                {
                                                    this.renderPlayerInformation(i,2)
                                                }
                                            </Grid>


                                        </Grid.Column>
                                    </React.Fragment>


                                </Grid.Row>
                            );
                        })
                        }

                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Button icon={"add user"} className={"round-btn a-venir"} content={"Ajouter un joueur"} onClick={()=>this.addNewPlayer(2)}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                </Grid.Row>


            </Grid>
        )
            ;
    }

    //rendering Modal for history
    renderModal() {
        return (
            <Modal open={this.state.modalHistory} onClose={() => this.setState({modalHistory: false})}>
                <Modal.Header className={"centered-title modal-title header"}>Historique de réservations</Modal.Header>
                <Modal.Content image scrolling className={"history-content"}>

                    <Modal.Description>
                        <div className={"modal-history-container"}>
                            <div className={"modal-history-header"}>
                                <span>Choisir un client:</span>
                                <Dropdown search selection fluid className={"search-input"}
                                          loading={this.state.isLoading}
                                    // onResultSelect={this.handleResultSelect}
                                    // onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                    //     leading: true,
                                    // })}
                                          results={this.state.results}
                                          value={this.state.search}
                                          options={[]}

                                />
                            </div>
                            <div className={"modal-history-content"}>

                                <div className={"modal-history-item"}>
                                    <CustomLoader/>
                                </div>

                                <div className={"modal-history-item"}>
                                    <div className={"history-item-status"}/>
                                    <div className={"history-item-right"}>
                                        <div>
                                            <span>Anniversaire - 1h30</span>
                                            <span>Le Samedi 12 septembre 2019 - 13h/14:30</span>
                                            <span>Romain Gambas</span>
                                            <span>Crée le 11 septembre par Cédric Pollet</span>
                                        </div>
                                        <Button primary onClick={() => console.log('Details')}>Détails</Button>
                                    </div>
                                </div>

                                <div className={"modal-history-item"}>
                                    <div className={"history-item-status"}/>
                                    <div className={"history-item-right"}>
                                        <div>
                                            <span>Anniversaire - 1h30</span>
                                            <span>Le Samedi 12 septembre 2019 - 13h/14:30</span>
                                            <span>Romain Gambas</span>
                                            <span>Crée le 11 septembre par Cédric Pollet</span>
                                        </div>
                                        <Button primary onClick={() => console.log('Details')}>Détails</Button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions className={"modal-history-footer"}>
                    <Pagination defaultActivePage={5} totalPages={10}/>
                </Modal.Actions>
            </Modal>

        );
    }

    // rendering modal for recovery
    renderRecoveryModal() {
        return (
            <Modal open={this.state.modalDeleted} onClose={() => this.setState({modalDeleted: false})}>
                <Modal.Header className={"centered-title modal-title header"}>Réservations supprimées</Modal.Header>
                <Modal.Content image scrolling className={"history-content"}>

                    <Modal.Description>
                        <div className={"modal-history-container"}>
                            <div className={"modal-history-content"}>

                                <div className={"modal-history-item"}>
                                    <CustomLoader/>
                                </div>

                                <div className={"modal-history-item"}>
                                    <div className={"history-item-status"} style={{backgroundColor: "#E64C66"}}/>
                                    <div className={"history-item-right"}>
                                        <div>
                                            <span>Anniversaire - 1h30</span>
                                            <span>Le Samedi 12 septembre 2019 - 13h/14:30</span>
                                            <span>Romain Gambas</span>
                                            <span>Crée le 11 septembre par Cédric Pollet</span>
                                        </div>
                                        <Button primary onClick={() => console.log('Récupérer')}>Récupérer</Button>
                                    </div>
                                </div>

                                <div className={"modal-history-item"}>
                                    <div className={"history-item-status"} style={{backgroundColor: "#E64C66"}}/>
                                    <div className={"history-item-right"}>
                                        <div>
                                            <span>Anniversaire - 1h30</span>
                                            <span>Le Samedi 12 septembre 2019 - 13h/14:30</span>
                                            <span>Romain Gambas</span>
                                            <span>Crée le 11 septembre par Cédric Pollet</span>
                                        </div>
                                        <Button primary onClick={() => console.log('Récupérer')}>Récupérer</Button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions className={"modal-history-footer"}>
                    <Pagination defaultActivePage={5} totalPages={10}/>
                </Modal.Actions>
            </Modal>

        );
    }

    //render add reservation
    renderReservationModal() {

        return (
            <Modal open={this.state.modalAdd} size={"large"} className={"reservation-modal"}
                   onClose={() => this.setState({modalAdd: false})}>
                <Modal.Header className={"centered-title modal-title"}> Réservation
                    du {moment(this.state.info.dateStr).locale("fr", localization).format("LLLL")}</Modal.Header>
                <Modal.Content image scrolling={false} className={"history-content"}>
                    <CustomTab onTabChange={(ev, data) => {
                        this.setState({selectedIndex: data.activeIndex})
                    }}
                               activeIndex={this.state.selectedIndex}  cssClassName={"modal-tab"}
                               panes={[
                                   {
                                       menuItem: 'Informations', render: () => {
                                           return this.renderInformationPanel()
                                       }
                                   },
                                   {
                                       menuItem: 'Participants', render: () => {
                                           return this.renderParticipantsModal()
                                       }
                                   },
                                   {
                                       menuItem: 'Historique', render: () => {
                                           return this.renderHistoricalPanel()
                                       }
                                   },
                               ]}/>

                </Modal.Content>
                <Modal.Actions className={"modal-history-footer"}>
                    <Button icon className={"prev-btn"} disabled={this.state.selectedIndex === 0}
                            onClick={() => {
                                let {selectedIndex} = this.state;
                                this.setState({selectedIndex: --selectedIndex})
                            }}
                    >
                        <Icon name={"arrow left"}/>
                        Précédent
                    </Button>

                    <Button icon className={"next-btn"} disabled={this.state.selectedIndex === 2}
                            onClick={() => {
                                let {selectedIndex} = this.state;
                                this.setState({selectedIndex: ++selectedIndex})
                            }}
                    >
                        Suivant
                        <Icon name={"arrow right"}/>
                    </Button>

                    <Button className={"btn-enregister"} onClick={() => {
                        console.log("hi there");
                    }} secondary>Enregister</Button>
                </Modal.Actions>
            </Modal>
        );

    }


    renderHistoricalPanel() {
        return (
            <div className={"historique-container"}>

                <div className={"table-container"}>
                    <CustomTable
                        size={10}
                        onChangeSize={(e, d) => console.log(d)}
                        header={['N°', 'Nom', 'Prénom', 'Societé', 'Terrain', 'Activité', 'Durée', 'Montant', 'Créneaux', 'Code résa', '']}
                        footer>
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

                                <Table.Cell className="td-text tools">
                                    <Button className={"round-btn"}> Détails</Button>
                                    {/*<Dropdown*/}
                                    {/*    direction={"left"}*/}
                                    {/*    className='icon'*/}
                                    {/*    icon={null}*/}
                                    {/*    floating*/}
                                    {/*    trigger={<Icon name={"ellipsis vertical"}/>}*/}
                                    {/*>*/}
                                    {/*/!*    <Dropdown.Menu>*!/*/}
                                    {/*/!*        <Dropdown.Item icon='edit' text='Modifier' />*!/*/}
                                    {/*/!*        <Dropdown.Item icon='trash' text='Supprimer' />*!/*/}
                                    {/*/!*    </Dropdown.Menu>*!/*/}
                                    {/*/!*</Dropdown>*!/*/}
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>


                    </CustomTable>
                </div>


            </div>

        );
    }

    renderInformationPanel() {


        return (

            <div className={"modal-container-column"}>
                <Grid>
                    <Grid.Row className={"no-padding-bottom"}>
                        <Grid.Column computer={8} tablet={16} className={"modal-border-left"}>
                            <div className={"header-search "}>
                                <Grid columns={16} verticalAlign={"middle"}>
                                    <Grid.Column width={4}>
                                        <span className={"label-modal"}>Choisir un client</span>
                                    </Grid.Column>
                                    <Grid.Column width={12}>
                                        <Dropdown search selection fluid className={"search-input"}
                                                  loading={this.state.isLoading}
                                            // onResultSelect={this.handleResultSelect}
                                            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                            //     leading: true,
                                            // })}
                                                  results={this.state.results}
                                                  value={this.state.search}
                                                 options={[]}
                                        />
                                    </Grid.Column>
                                </Grid>

                            </div>
                            <Grid>
                                <Grid.Column width={4}/>
                                <Grid.Column width={8} className={"link-btn"}>
                                    <a href={"#"} onClick={(e) => this.showClientForm(e, true)}>
                                        <Icon name={"add"} />
                                        Ajouter un client
                                    </a>
                                </Grid.Column>

                            </Grid>


                            {
                                <Transition visible={this.state.reservationForm.information.show} animation='fade'
                                            duration={100}>

                                    <div className={"input-modal"}>

                                        <Grid verticalAlign={"middle"} columns={16}
                                              className={"form-input-inline-modal"}>
                                            <Grid.Column width={4}>
                                                <span className={"label-modal"}>Name</span>
                                            </Grid.Column>
                                            <Grid.Column width={12}>
                                                <Grid verticalAlign={"middle"} columns={"equal"}>
                                                    <Grid.Column>
                                                        <Form.Field className={"modal-input"}>
                                                            <Input name={"firstName"} type={"text"}
                                                                   value={this.state.reservationForm.information.firstName}
                                                                   onChange={this.handleReservationChange}/>
                                                        </Form.Field>

                                                    </Grid.Column>

                                                    <Grid.Column>

                                                        <Form.Field className={"modal-input"}
                                                        >
                                                            <Input name={"lastName"} type={"text"}
                                                                   value={this.state.reservationForm.information.lastName}
                                                                   onChange={this.handleReservationChange}/>
                                                        </Form.Field>

                                                    </Grid.Column>
                                                </Grid>

                                            </Grid.Column>

                                        </Grid>


                                        <CustomInput parentClass={"modal-input"}
                                                     label={"Né le"}
                                                     onChange={this.handleReservationChange}
                                                     value={this.state.reservationForm.information.dateOfBirth}
                                                     name={"dateOfBirth"}
                                                     type={"date"}/>

                                        <CustomInput mode={"inline"}
                                                     parentClass={"modal-input"}
                                                     label={"Email"}
                                                     value={this.state.reservationForm.information.email}
                                                     type={"email"}
                                                     onChange={this.handleReservationChange}
                                                     name={"email"}/>

                                        <CustomInput mode={"inline"}
                                                     parentClass={"modal-input"}
                                                     label={"Mobile"}
                                                     value={this.state.reservationForm.information.mobile}
                                                     type={"text"}
                                                     onChange={this.handleReservationChange}
                                                     name={"mobile"}/>

                                        <CustomInput mode={"inline"}
                                                     parentClass={"modal-input"}
                                                     label={"Societé"}
                                                     value={this.state.reservationForm.information.society}
                                                     type={"text"}
                                                     onChange={this.handleReservationChange}
                                                     name={"society"}/>
                                        <CustomInput mode={"inline"}
                                                     parentClass={"modal-input"}
                                                     label={"Info"}
                                                     value={this.state.reservationForm.information.info}
                                                     type={"textArea"}
                                                     onChange={this.handleReservationChange}
                                                     name={"info"}/>

                                    </div>


                                </Transition>

                            }

                        </Grid.Column>
                        <Grid.Column computer={8} tablet={16} className={"no-padding-left"}>

                            {this.renderRightSide()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className={"no-padding-bottom"}>
                        <Grid columns={16} className={"modal-input bottom-modal"}>
                            <Grid.Column width={8}>
                                <div className={"box-info"}>
                                    <span className={"info-title"}>Information</span>
                                    <span className={"info-description"}>
                                                Derniére réservation le 12 janvier 2019
                                            </span>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className={"box-info"}>
                                    <span className={"info-title"}>Conclusion</span>
                                    <span className={"info-description btn-description"}>
                                        <Button className={"valider"} onClick={() => this.handleConclusion("valider")}>
                                            {this.state.reservationForm.information.conclusion === "valider" &&
                                            <Icon name='check'/>
                                            }
                                            A valider
                                        </Button>
                                <Button className={"venir"} onClick={() => this.handleConclusion("venir")}>
                                      {this.state.reservationForm.information.conclusion === "venir" &&
                                      <Icon name='check'/>
                                      }
                                    A Venir
                                        </Button>
                                <Button className={"venu"} onClick={() => this.handleConclusion("venu")}>
                                      {this.state.reservationForm.information.conclusion === "venu" &&
                                      <Icon name='check'/>
                                      }
                                    Venu
                                        </Button>
                                <Button className={"pas-venu"} onClick={() => this.handleConclusion("pas-venu")}>
                                      {this.state.reservationForm.information.conclusion === "pas-venu" &&
                                      <Icon name='check'/>
                                      }
                                    Pas Venu
                                        </Button>
                                    </span>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </Grid.Row>
                </Grid>

            </div>
        );
    }

    renderRightSide() {
        return (
            <div className={"input-modal"}>

                {/*<div className={"form-input-inline-modal"}>*/}
                {/*    <span>Name</span>*/}
                {/*    <CustomInput mode={"inline"} parentClass={"modal-input"} value={"some value "} type={"text"}*/}
                {/*                 name={"name"}/>*/}
                {/*    <CustomInput mode={"inline"} parentClass={"modal-input"} value={"some value "} type={"text"}*/}
                {/*                 name={"name"}/>*/}
                {/*</div>*/}

                <CustomInput parentClass={"modal-input"} label={"Activité"}
                             value={this.state.reservationForm.information.activity}
                             onChange={this.handleReservationChange}
                             options={[]}
                             name={"activity"} type={"dropdown"} selection/>

                <CustomInput mode={"inline"}
                             parentClass={"modal-input"} label={"Terrain"}
                             value={this.state.reservationForm.information.terrain}
                             onChange={this.handleReservationChange}
                             type={"dropdown"}
                             selection
                             options={[]}
                             name={"terrain"}/>

                <CustomInput mode={"inline"}
                             parentClass={"modal-input"}
                             label={"Compétation"}
                             type={"dropdown"}
                             selection
                             options={[]}
                             value={this.state.reservationForm.information.competition}
                             onChange={this.handleReservationChange}
                             name={"competition"}/>


                <Grid verticalAlign={"middle"}>
                    <Grid.Column width={4}>
                        <label className={"label-modal"}>Durée</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"text"}
                            name={"duree"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.duree}
                        />
                    </Grid.Column>
                    <Grid.Column width={2} textAlign={"center"}>
                        <label className={"label-modal"}>Date</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"text"}
                            name={"date"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.date}
                        />
                    </Grid.Column>
                </Grid>


                <Grid verticalAlign={"middle"}>
                    <Grid.Column width={4}>
                        <label className={"label-modal"}>Heure début</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"text"}
                            name={"duree"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.duree}
                        />
                    </Grid.Column>
                    <Grid.Column width={2} textAlign={"center"}>
                        <label className={"label-modal"}>Heure Fin</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"text"}
                            name={"date"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.date}
                        />
                    </Grid.Column>
                </Grid>


                <Grid verticalAlign={"middle"}>
                    <Grid.Column width={4}>
                        <label className={"label-modal"}>Montant</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"time"}
                            name={"duree"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.duree}
                        />
                    </Grid.Column>
                    <Grid.Column width={2} textAlign={"center"}>
                        <label className={"label-modal"}>Supp/ rem</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"text"}
                            name={"date"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.date}
                        />
                    </Grid.Column>
                </Grid>


                <Grid verticalAlign={"middle"}>
                    <Grid.Column width={4}>
                        <label className={"label-modal"}>Récurrence</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Dropdown
                            placeholder='Réccurence'
                            selection={true}
                            parentClass={"modal-input"}
                            value={this.state.reservationForm.information.recurrence}
                            onChange={this.handleReservationChange}
                            name={"reccurence"}
                            options={[
                                {key: 0, text: 'Oui', value: 0},
                                {key: 1, text: 'Non', value: 1},
                            ]}
                        />

                    </Grid.Column>
                    <Grid.Column width={2} textAlign={"center"}>
                        <label className={"label-modal"}>Vidéo</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Dropdown
                            placeholder='Réccurence'
                            selection={true}
                            parentClass={"modal-input"}
                            value={this.state.reservationForm.information.video}
                            onChange={this.handleReservationChange}
                            name={"reccurence"}
                            options={[
                                {key: 0, text: 'Oui', value: 0},
                                {key: 1, text: 'Non', value: 1},
                            ]}
                        />
                    </Grid.Column>
                </Grid>


                <Grid verticalAlign={"middle"}>
                    <Grid.Column width={4}>
                        <label className={"label-modal"}>Code réseau</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"text"}
                            name={"duree"}
                            disabled={true}
                            className={"code"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.duree}
                        />
                    </Grid.Column>
                    <Grid.Column width={2} textAlign={"center"}>
                        <label className={"label-modal"}>Code video</label>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Input
                            type={"text"}
                            disabled={true}
                            className={"code"}
                            name={"date"}
                            onChange={this.handleReservationChange}
                            value={this.state.reservationForm.information.date}
                        />
                    </Grid.Column>
                </Grid>
                {/*<CustomInput mode={"inline"}*/}
                {/*             parentClass={"modal-input"}*/}
                {/*             label={"Date"}*/}
                {/*             value={this.state.reservationForm.information.date}*/}
                {/*             type={"date"}*/}
                {/*             onChange={this.handleReservationChange}*/}
                {/*             name={"date"}/>*/}

                {/*<Grid columns={16}>*/}


                {/*    <Grid.Column width={8}>*/}
                {/*        <CustomInput mode={"inline"}*/}
                {/*                     parentClass={"modal-input"}*/}
                {/*                     label={"Heure début"}*/}
                {/*                     value={this.state.reservationForm.information.startHour}*/}
                {/*                     onChange={this.handleReservationChange}*/}
                {/*                     name={"startHour"}*/}
                {/*                     type={"time"}*/}
                {/*        />*/}
                {/*    </Grid.Column>*/}

                {/*    <Grid.Column width={8}>*/}
                {/*        <CustomInput mode={"inline"}*/}
                {/*                     parentClass={"modal-input"}*/}
                {/*                     label={"Heure fin"}*/}
                {/*                     value={this.state.reservationForm.information.endHour}*/}
                {/*                     onChange={this.handleReservationChange}*/}
                {/*                     name={"endHour"}*/}
                {/*                     type={"time"}*/}
                {/*        />*/}
                {/*    </Grid.Column>*/}
                {/*</Grid>*/}


                {/*<Grid columns={16}>*/}
                {/*    <Grid.Column width={8}>*/}
                {/*        <CustomInput mode={"inline"}*/}
                {/*                     parentClass={"modal-input"}*/}
                {/*                     label={"Montant"}*/}
                {/*                     value={this.state.reservationForm.information.montant}*/}
                {/*                     onChange={this.handleReservationChange}*/}
                {/*                     name={"montant"}*/}
                {/*                     type={"number"}*/}
                {/*        />*/}
                {/*    </Grid.Column>*/}

                {/*    <Grid.Column width={8}>*/}
                {/*        <CustomInput mode={"inline"}*/}
                {/*                     parentClass={"modal-input"}*/}
                {/*                     label={"Supp / rem"}*/}
                {/*                     value={this.state.reservationForm.information.remise}*/}
                {/*                     onChange={this.handleReservationChange}*/}
                {/*                     name={"remise"}*/}
                {/*                     type={"number"}*/}
                {/*        />*/}
                {/*    </Grid.Column>*/}
                {/*</Grid>*/}


                {/*<Grid columns={16}>*/}
                {/*    <Grid.Column width={8}>*/}
                {/*        <CustomInput mode={"inline"}*/}
                {/*                     parentClass={"modal-input"}*/}
                {/*                     label={"Code Réseaux"}*/}
                {/*                     value={this.state.reservationForm.information.codeRe}*/}
                {/*                     onChange={this.handleReservationChange}*/}
                {/*                     name={"codeRe"}*/}
                {/*                     type={"text"}*/}
                {/*        />*/}

                {/*    </Grid.Column>*/}
                {/*    <Grid.Column width={8}>*/}
                {/*        <CustomInput mode={"inline"}*/}
                {/*                     parentClass={"modal-input"}*/}
                {/*                     label={"Code vidéo"}*/}
                {/*                     value={this.state.reservationForm.information.codeVideo}*/}
                {/*                     onChange={this.handleReservationChange}*/}
                {/*                     name={"codeVideo"}*/}
                {/*                     type={"text"}*/}
                {/*        />*/}
                {/*    </Grid.Column>*/}
                {/*</Grid>*/}


                {/*/!*<div className={"modal-col selected-modal"}>*!/*/}
                {/*<Grid columns={"16"} verticalAlign={"middle"} className={"selected-modal"}>*/}
                {/*    <Grid.Column width={"8"}>*/}
                {/*        <CustomInput*/}
                {/*            placeholder='Réccurence'*/}
                {/*            selection={true}*/}
                {/*            mode={"inline"}*/}
                {/*            parentClass={"modal-input"}*/}
                {/*            label={"Réccur rence"}*/}
                {/*            value={this.state.reservationForm.information.video}*/}
                {/*            onChange={this.handleReservationChange}*/}
                {/*            name={"reccurence"}*/}
                {/*            type={"dropdown"}*/}
                {/*            options={[*/}
                {/*                {key: 0, text: 'Oui', value: 0},*/}
                {/*                {key: 1, text: 'Non', value: 1},*/}
                {/*            ]}*/}
                {/*        />*/}
                {/*    </Grid.Column>*/}
                {/*    <Grid.Column width={"8"}>*/}
                {/*        <CustomInput*/}
                {/*            placeholder='Vidéo'*/}
                {/*            selection={true}*/}
                {/*            mode={"inline"}*/}
                {/*            parentClass={"modal-input"}*/}
                {/*            label={"Vidéo"}*/}
                {/*            value={this.state.reservationForm.information.video}*/}
                {/*            onChange={this.handleReservationChange}*/}
                {/*            name={"video"}*/}
                {/*            type={"dropdown"}*/}
                {/*            options={[*/}
                {/*                {key: 0, text: 'Oui', value: 0},*/}
                {/*                {key: 1, text: 'Non', value: 1},*/}
                {/*            ]}*/}
                {/*        />*/}
                {/*    </Grid.Column>*/}
                {/*</Grid>*/}
                {/*</div>*/}


                {/*</Grid>*/}


            </div>
        );
    }

    // rendering two button on the right side of the planning header
    renderPlanningButton() {
        return (
            <div className={"planning-btn-right"}>

                <Button className={"btn-right-plan"} onClick={() => this.setState({modalHistory: true})}>
                    <Image src={require("../../assets/addReser.png")}/>
                </Button>
                <Button className={"btn-right-plan"} onClick={() => this.setState({modalDeleted: true})}>
                    <Image src={require("../../assets/history.png")}/>
                </Button>
            </div>
        );
    }

    //render the tooltips for the hover  on the event
    renderToolTips(id) {
        //filtering by id
        let eventFiltered = events.filter(it => it.id === id);
        if (eventFiltered.length === 0) return;


        return (
            <div className={"label-container"}>
                <div className={"label-header"}>
                    <span>Foot</span>
                    <span>1H</span>
                    <span>ICON</span>
                </div>
                <div className={"label-content"}>
                    <span className={"label-name"}>James bond</span>
                    <span><span className={"bold-label "}>Mobile: </span> 0658525455</span>
                    <span><span className={"bold-label "}>Email: </span> someone@gmail.com</span>
                    <span><span className={"bold-label "}>Societé: </span> QCVQCVQCV</span>
                    <span><span className={"bold-label "}>Code réseau: </span> 784578457855</span>
                    <span><span className={"bold-label "}>Info: </span> locatio de capture</span>

                </div>
                <div className={"label-footer"}>
                    <Button className={"round-btn supprimer"}>Supprimer</Button>
                    <div>
                        <Button className={"round-btn venu"}>Venu</Button>
                        <Button className={"round-btn pas-venu"}>Pas venu</Button>

                    </div>
                </div>
            </div>
        );
    }

    //render the events for the full-calendar
    renderEvent(e) {
        const {color, user, icon, startHour, endHour} = e.event.extendedProps;


        e.el.innerHTML = `<div class="event-container" style="background-color: ${color}">  
                                    <div>
                                    <span>${startHour}/${endHour}</span>
                                    <span>${user.firstname} ${user.lastname}</span>
                                    <span>${user.phone}</span>
                                    </div>
                                    <div class="img-event">
                                    <img src=${icon} alt="Activité"/>
                                    </div>                               
                                </div>`;


    }

    // position the hover labels
    handleEventPositioned(e) {
        const {id} = e.event;

        e.el.setAttribute("data-tip", id);
        e.el.setAttribute("data-for", "soclose");
        ReactTooltip.rebuild();
    }

    // Show modal when event is clicked
    onEventHandler(e, ev) {
        console.log("from the event handler :  ", e);
        console.log("from the event handler :  ", ev);
    }

    // handle date change from the calendar
    async onChange(e) {
        // for avoiding ISO
        let date = new Date(e.toString());
        let newDate = moment(date).format("YYYY-MM-DD");
        await this.goTo(newDate, 0);
        await this.setState({date: newDate});

    }

    // handle checkbox
    onShowHandler(i) {
        let terrains = this.state.terrains;
        terrains[i].show = !terrains[i].show;
        this.setState({terrains: terrains});
    }

    onToggle() {
        this.setState({toggle: !this.state.toggle})
    }

    // handle the adding or subtracting day from the state.date
    async onChangeDay(i) {

        let day = new Date(this.state.date);
        await day.setDate(day.getDate() + i);

        if (i > 0)
            this.goTo(day, 0);
        else {
            this.goTo(day, 0);
        }

        this.setState({date: day});


    }

    goTo(date, i = 0) {
        this.fullCalendarRef.current.calendar.state.currentDate = new Date(date);
    }

    componentDidMount() {

        const terrains = [
            {
                id: 14,
                title: "terrain 1",
                BackgroundColor: "#15A4FA",
                show: false
            },
            {
                id: 24,
                title: "terrain 2",
                BackgroundColor: "#15A4FA",
                show: true
            },
            {
                id: 34,
                title: "terrain 3",
                BackgroundColor: "#15A4FA",
                show: true
            },
            {
                id: 44,
                title: "terrain 4",
                BackgroundColor: "#72F286",
                show: true
            }
        ];
        this.setState({terrains: terrains})
    }

    render() {

        // filter the terrains that has show === true
        let terrains = this.state.terrains.filter(it => it.show);
        return (
            <MainLayout>
                {this.renderModal()}
                {this.renderReservationModal()}
                {this.renderRecoveryModal()}
                <div className="planning-container">

                    <Transition visible={!this.state.toggle}
                                animation={this.state.toggle ? 'scale' : 'scale'} duration={200}>

                        <div className={"planning-left"}>
                            <div className={"planning-header header-res"}>
                                <Button className={"round-btn ajourdhui"} onClick={() => {
                                    this.goTo(new Date());
                                    this.setState({date: new Date()})
                                }}>Aujourd'hui</Button>

                            </div>
                            <span className={"planning-header-toggle"}>
                            <span>Calendrier</span>
                            <Icon name={"angle left"} color={"black"} size={'small'}
                                  onClick={() => this.setState({toggle: true})}
                            />
                        </span>
                            <div className={"planning-container-left"}>
                                <Calendar
                                    locale={'fr'}
                                    onChange={this.onChange}
                                    value={moment(this.state.date).toDate()}
                                />

                                <Divider/>
                                <div className={"planning-terrain"}>
                                    <span className={"planning-terrain-header"}>Terrains</span>
                                    <div className={"planning-terrain-items"}>
                                        {this.state.terrains.map((it, i) => {
                                            return (
                                                <div key={`terr-${i}`} className={"planning-terrain-item"}>
                                                    <label htmlFor={"ter-" + i}>


                                                        <div>
                                                         <span className={"terrain-round"} style={{
                                                             backgroundColor: it.BackgroundColor
                                                         }}/>
                                                            <span className={"terrain-title"}>{it.title}</span>
                                                        </div>
                                                    </label>
                                                    <Checkbox id={"ter-" + i} checked={it.show}
                                                              onChange={() => this.onShowHandler(i)}/>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <div className={"planning-right"}>

                        <div className={!this.state.toggle ? 'display-none' : "planning-right-toggle"}>
                            <Icon name={"angle right"} color={"black"} size={'small'}
                                  onClick={() => this.setState({toggle: false})}
                            />
                        </div>

                        <div className={"planning-right-header"}>
                            <Button circular icon={"angle left"} onClick={() => this.onChangeDay(-1)}/>
                            <h2>{moment(this.state.date).locale("fr", localization).format("LL")}</h2>
                            <Button circular icon={"angle right"} onClick={() => this.onChangeDay(1)}/>
                        </div>
                        {this.renderPlanningButton()}

                        <div id="calendar">


                            <FullCalendar
                                ref={this.fullCalendarRef}
                                minTime="08:00:00"
                                footer={false}
                                themeSystem="bootstrap"
                                locale='fr'
                                defaultView='resourceTimeGridDay'
                                allDaySlot={false}
                                height={"parent"}
                                timeZone={false}
                                gotoDate={this.state.date}
                                header={
                                    {
                                        right: '',
                                        center: '',
                                        left: ''
                                    }
                                }
                                slotLabelFormat={[
                                    {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false
                                    },
                                ]}
                                schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
                                plugins={[plugin, interactionPlugin]}
                                resourceRender={function (renderInfo) {
                                    let show = renderInfo.resource._resource.extendedProps.show;
                                    if (show) {
                                        renderInfo.el.classList.add('header-res');
                                        renderInfo.el.innerText = "terrain : " + renderInfo.resource.title;
                                    }
                                }}

                                dayRender={function (e) {
                                    let id = e.el.attributes.getNamedItem("data-resource-id").value;
                                    // eslint-disable-next-line eqeqeq
                                    let arr = terrains.filter(it => it.id.toString() === id.toString());
                                    if (arr.length > 0)
                                        e.el.style = `background-color:${arr[0].BackgroundColor};border-color:#DADFEA;opacity: 0.05`;
                                    else {
                                        e.el.style = `background-color:#15A4FA;border-color:#DADFEA;opacity: 0.05`;
                                    }

                                }}

                                dateClick={(info) => {
                                    this.setState({info: info, modalAdd: true});
                                }
                                }
                                resources={terrains}
                                events={events}
                                eventRender={this.renderEvent}
                                eventClick={this.onEventHandler}
                                eventPositioned={this.handleEventPositioned}
                            />
                        </div>
                    </div>

                </div>
                <ReactTooltip id='soclose'
                              place={"top"}
                              offset={{top: -70, left: -30}}
                              getContent={this.renderToolTips}
                              type={'light'}
                              clickable={true}
                              effect='solid'
                              delayHide={100}
                              delayUpdate={200}
                >

                </ReactTooltip>
            </MainLayout>
        );
    }
}


export default PlanningPage;