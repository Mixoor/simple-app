import React from "react";

/**
 * this is a standard layout doesnt contain anything
 * best suitable for login , register , caisse
 *
 * <FullLayout>
 *     <YourComponent/>
 * </FullLayout>
 *
 * */
class FullLayout extends React.Component{


    render() {
        return(
            <div className="container">
                {this.props.children}
            </div>
            );
    }
}

export default  FullLayout;