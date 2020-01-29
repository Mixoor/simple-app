import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import "./PermissionTable.css";
class PermissionTable extends React.Component {
  render() {
    return (
      <Table
        size="small"
        textAlign="left"
        compact
        padded
        unstackable
        celled
        definition
        striped
        textAlign="center"

      >
        <Table.Header className="no-border">
          <Table.Row>
            <Table.HeaderCell className="tab-header bg-tab" />
            <Table.HeaderCell className="tab-header bg-tab">
              Role 1
            </Table.HeaderCell>
            <Table.HeaderCell className="tab-header bg-tab">
              Role 2
            </Table.HeaderCell>
            <Table.HeaderCell className="tab-header bg-tab">
              Role 3
            </Table.HeaderCell>
            <Table.HeaderCell className="tab-header bg-tab">
              Role 4
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.HeaderCell className="tab-header" collapsing>
              Permission 1
            </Table.HeaderCell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell collapsing className="tab-header">
              Permission 2
            </Table.HeaderCell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell collapsing className="tab-header">
              Permission 3
            </Table.HeaderCell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell collapsing className="tab-header">
              Permission 4
            </Table.HeaderCell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell collapsing className="tab-header">
              Permission 4
            </Table.HeaderCell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell collapsing className="tab-header">
              Permission 4
            </Table.HeaderCell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell collapsing className="tab-header">
              Permission 4
            </Table.HeaderCell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row textAlign="left">
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Add Role
              </Button>
              <Button size="small" color="red">
                Reset
              </Button>
              <Button disabled size="small">
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default PermissionTable;
