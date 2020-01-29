import React from "react";
import {Segment,Image,Loader,Dimmer} from "semantic-ui-react";

const CustomLoader =()=>{
    return (
        <Segment basic>
            <Dimmer active inverted>
                <Loader active inverted />
            </Dimmer>
            <Image  src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"/>
        </Segment>
    );
}


export default  CustomLoader;