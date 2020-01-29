import React  from "react";
import {Form,Input,Button} from "semantic-ui-react"
import "./LoginPage.css";
import {withRouter} from "react-router-dom"


/**
 * this page handle cases of
 * login and forgetting password
 * */
class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            forget:false,
            email:"",
            password:"",
            remember:true,
            error:{
                email:null
        // {
        //             // content: 'Please enter a valid email address',
        //             // pointing: 'below',
        //         }
                ,
                password:null
                //     {
                //     // content: 'Please enter a valid email address',
                //     // pointing: 'below',
                // }
            }
        };


        this.onSubmitHandle= this.onSubmitHandle.bind(this);
        this.onChangeHandler= this.onChangeHandler.bind(this);
        this.renderLogin= this.renderLogin.bind(this);
        this.renderForget= this.renderForget.bind(this);
        this.handleSwitch= this.handleSwitch.bind(this);
    }


    // handle switching between login form  and forget form
    handleSwitch(e){
        e.preventDefault();
        let forget  = !this.state.forget;
        this.setState({forget:forget});
    }

    // render the forget form
    renderForget(){
        return (
            <>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    value={this.state.email}
                    name="email"
                    className="login-input"
                    onChange={this.onChangeHandler}
                    placeholder=''
                    label="Email"
                    error={this.state.error.email}
                />

                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Récupérer'
                    className="login-btn"
                    secondary
                />
            </>
        );

    }

    // render the login form
    renderLogin(){
        return(
            <>
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                value={this.state.email}
                name="email"
                className="login-input"
                onChange={this.onChangeHandler}
                placeholder=''
                label="Identifiant"
                error={this.state.error.email}
            />

            <Form.Field
        id='form-input-control-error-password'
        placeholder=''
        control={Input}
        value={this.state.password}
        name="password"
        className="login-input"
        label="Mot de passe"
        type="password"
        onChange={this.onChangeHandler}
        error={this.state.error.password}
        />
        <Form.Checkbox label='Se souvenir de moi'
                       checked={this.state.remember}
                       name="remember"
                       onChange={this.onChangeHandler}
        />

        <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Connecter'
        className="login-btn"
        secondary
        />
            </>
        );
    }


    onChangeHandler(event){
        let name=event.target.name;
        if(name==='remember')
            this.setState({remember:!this.state.remember});
        else
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // this were the api call go
    //TODO add the api call
    onSubmitHandle(event){
        event.preventDefault();
        const {history} = this.props;
        history.push('/role');
        console.log(this.state);
    }

    render(){
       return (
           <div className="login-main">
           <div className="login-container">

           <div className="login-logo">
               <h3>INEO</h3>
           </div>
               <Form onSubmit={this.onSubmitHandle}>

                   {
                       !this.state.forget ?
                        this.renderLogin()
                   :
                           this.renderForget()
                   }



               </Form>
               {
                   !this.state.forget ?

                               <div className="login-btn-link">

                               <a href="#" onClick={this.handleSwitch}>Mot de passe oublié</a>

                               </div>
               :
                               <div className="login-btn-link">

                               <a href="#" onClick={this.handleSwitch}>Retourner à la page d'authentification</a>

                               </div>
                               }
           </div>

           </div>

       );
    }

}

export default withRouter(LoginPage);