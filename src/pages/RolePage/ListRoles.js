import React from "react";
import PropTypes from "prop-types";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import "./RolePage.css";
import { Table, Button, Icon, Dropdown } from "semantic-ui-react";

class ListRoles extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header title="List of user" />
        <div>
          <Table size="small" textAlign="left" compact padded unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className="tab-header bg-tab">
                  N°
                </Table.HeaderCell>
                <Table.HeaderCell className="tab-header bg-tab">
                  Role name
                </Table.HeaderCell>
                <Table.HeaderCell className="tab-header bg-tab">
                  Description
                </Table.HeaderCell>

                <Table.HeaderCell className="tab-header bg-tab"></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell className="td-text">#10</Table.Cell>

                <Table.Cell className="td-text">John Lilki</Table.Cell>
                <Table.Cell className="td-text">
                  Jamie is a kind girl but sometimes you don't really have
                  enough room to describe everything you'd like
                </Table.Cell>
                <Table.Cell className="td-text tools" width={2}>
                  <Button
                    icon="pencil alternate"
                    style={{
                      backgroundColor: "#9E94FF",
                      color: "white",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#9E94FF"
                    }}
                    circular
                  />
                  <Button
                    icon="trash"
                    color="red"
                    style={{
                      backgroundColor: "white",
                      color: "#E64C66",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#E64C66"
                    }}
                    circular
                  />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell className="td-text">#5</Table.Cell>

                <Table.Cell className="td-text">John Lilki</Table.Cell>
                <Table.Cell className="td-text">
                  Jamie is a kind girl but sometimes you don't really have
                  enough room to describe everything you'd like
                </Table.Cell>
                <Table.Cell className="td-text tools" width={2}>
                  {/* <Button icon="search" primary circular /> */}
                  {/* <Button icon="pencil alternate" primary circular />
                  <Button icon="trash" color="red" circular /> */}
                  <Button
                    icon="pencil alternate"
                    style={{
                      backgroundColor: "#9E94FF",
                      color: "white",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#9E94FF"
                    }}
                    circular
                  />
                  <Button
                    icon="trash"
                    color="red"
                    style={{
                      backgroundColor: "white",
                      color: "#E64C66",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#E64C66"
                    }}
                    circular
                  />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell className="td-text">#11</Table.Cell>

                <Table.Cell className="td-text">John Lilki</Table.Cell>
                <Table.Cell className="td-text">
                  Jamie is a kind girl but sometimes you don't really have
                  enough room to describe everything you'd like
                </Table.Cell>
                <Table.Cell className="td-text tools" width={2}>
                  {/* <Button icon="search" primary circular /> */}
                  {/* <Button icon="pencil alternate" primary circular />
                  <Button icon="trash" color="red" circular /> */}
                  <Button
                    icon="pencil alternate"
                    style={{
                      backgroundColor: "#9E94FF",
                      color: "white",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#9E94FF"
                    }}
                    circular
                  />
                  <Button
                    icon="trash"
                    color="red"
                    style={{
                      backgroundColor: "white",
                      color: "#E64C66",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#E64C66"
                    }}
                    circular
                  />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell className="td-text">#12</Table.Cell>

                <Table.Cell className="td-text">John Lilki</Table.Cell>
                <Table.Cell className="td-text">
                  Jamie is a kind girl but sometimes you don't really have
                  enough room to describe everything you'd like
                </Table.Cell>
                <Table.Cell className="td-text tools" width={2}>
                  {/* <Dropdown icon="ellipsis vertical">
                    <Dropdown.Menu>
                      <Dropdown.Item
                        icon="pencil alternate"
                        color="#9E94FF"
                        text="Edit"
                      />
                      <Dropdown.Item icon="trash" text="Remove" />
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <Button
                    icon="pencil alternate"
                    style={{
                      backgroundColor: "#9E94FF",
                      color: "white",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#9E94FF"
                    }}
                    circular
                  />
                  <Button
                    icon="trash"
                    color="red"
                    style={{
                      backgroundColor: "white",
                      color: "#E64C66",
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "#E64C66"
                    }}
                    circular
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </MainLayout>
    );
  }
}

ListRoles.propTypes = {};

export default ListRoles;
