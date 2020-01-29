import React from "react";
import {Table,Icon,Dropdown} from "semantic-ui-react";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import './CustomTable.css'

const CustomTable =(props)=>{

    const sizes=[
        {text:10 ,value:10},
        {text:20 ,value:20},
        {text:50 ,value:50},
        ];
  return(
      <Table size="small" textAlign="left" compact padded unstackable>

          <Table.Header>
              <Table.Row>
                  {props.header.map((it,i)=> {
                        return(
                            <Table.HeaderCell key={`header-${i}`} className="tab-header bg-tab">
                                {it}
                            </Table.HeaderCell>
                        );
                  }
                  )}
              </Table.Row>
          </Table.Header>

                 {props.loading ?
                     <Table.Body>
                     <Table.Row>
                     <Loader/>
                  </Table.Row></Table.Body>: props.children
                 }



              {props.footer &&
              <Table.Footer fullWidth>
                  <Table.Row>
                      <Table.HeaderCell colSpan={props.header.length+1}>
                          <div className="table-footer">
                              <div className="table-footer-component">
                                  <span>Ligne per page:</span>
                                  <Dropdown
                                      value={props.size}
                                      onChange={props.onChangeSize}
                                      upward
                                      options={sizes}
                                  >

                                  </Dropdown>
                              </div>
                              <div className="table-footer-component">
                                    <span>{`${props.page*props.size+1} sur ${props.total}`}</span>
                              </div>
                              <div className="table-footer-component">
                                  <span><Icon name="angle left" onClick={()=>props.loadMore(props.page-1)} /></span>
                                  <span><Icon name="angle right" onClick={()=>props.loadMore(props.page+1)} /></span>
                              </div>
                          </div>
                      </Table.HeaderCell>
                  </Table.Row>
              </Table.Footer>
              }
      </Table>
      );
};

CustomTable.prototype={
    header:PropTypes.array,
    page:PropTypes.number,
    size:PropTypes.number,
    total:PropTypes.number,
    loading:PropTypes.bool,
    footer:PropTypes.bool,
    loadMore:PropTypes.func,
    onChangeSize:PropTypes.func
};
CustomTable.defaultProps={

}




export default  CustomTable;