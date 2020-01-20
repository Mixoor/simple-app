import React from "react";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import RoleFormulaire from "@/components/RoleFormulaire/RoleFormulaire";
import "./RolePage.css";
class AddRole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      description: "",
      error: {
        role: {
          content: "Please enter a valid email address",
          pointing: "below"
        },
        description: null
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
  }

  render() {
    return (
      <MainLayout>
        <Header title="Add Role" />
        <div className="align-center">
          <RoleFormulaire
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        </div>
      </MainLayout>
    );
  }
}

export default AddRole;
