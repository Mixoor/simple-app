import React from "react";
import MainLayout from "@/Layout/MainLayout/MainLayout";
import Header from "@/components/Header/Header";
import "./RolePage.css";
import { Table, Button} from "semantic-ui-react";
import CustomTable from "@/components/CustomTable/CustomTable"

const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
];
class ListRoles extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header title="List of user" />
        <div>
          <CustomTable  header={["N°","Nom de role","Description",'']}  >

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
                    className="custom-edit-tab"
                    circular
                  />
                  <Button
                    icon="trash"
                    color="red"
                    // style={{
                    //   backgroundColor: "white",
                    //   color: "#E64C66",
                    //   borderWidth: 1,
                    //   borderStyle: "solid",
                    //   borderColor: "#E64C66"
                    // }}
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
                    className="custom-edit-tab"

                    circular
                  />
                  <Button
                    icon="trash"
                    color="red"
                    // style={{
                    //   backgroundColor: "white",
                    //   color: "#E64C66",
                    //   borderWidth: 1,
                    //   borderStyle: "solid",
                    //   borderColor: "#E64C66"
                    // }}
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
                      className="custom-edit-tab"
                    icon="pencil alternate "

                    circular
                  />
                  <Button
                      className="custom-error-tab"
                    icon="trash"
                    color="red"

                    circular
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </CustomTable>
        </div>

          {/*<CustomTab panes={[*/}
          {/*    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },*/}
          {/*    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },*/}
          {/*    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },*/}
          {/*]}/>*/}

    {/*    <div>*/}
    {/*        <Form>*/}
    {/*    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>*/}


    {/*            <div style={{flex:1,margin:"2em"}}>*/}
    {/*                <CustomInput  className="input-bg picture-input" type="picture" label="some input" mode="inline" onChange={(e)=>console.log(e)}/>*/}
    {/*                <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}
    {/*                <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}
    {/*                <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}
    {/*                <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}

    {/*            </div>*/}

    {/*<div style={{flex:1,margin:"2em"}}>*/}
    {/*    <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e.target.value)}/>*/}
    {/*    <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}
    {/*    <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}
    {/*    <CustomInput  className="input-bg" type="text" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}
    {/*    <CustomInput*/}
    {/*                     fluid*/}
    {/*                     selection*/}
    {/*                     options={friendOptions} className="input-bg" type="dropdown" label="some input" mode="inline" value="chady" onChange={(e)=>console.log(e)}/>*/}

    {/*</div>*/}
    {/*    </div>*/}

    {/*        </Form>*/}
    {/*    </div>*/}






      </MainLayout>
    );
  }
}

ListRoles.propTypes = {};

export default ListRoles;
