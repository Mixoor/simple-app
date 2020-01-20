import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header/Header";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import PermissionTable from "@/components/PermissionTable/PermissionTable";

class PermissionPage extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header title="Permission" />
        <PermissionTable />
      </MainLayout>
    );
  }
}

PermissionPage.propTypes = {};

export default PermissionPage;
