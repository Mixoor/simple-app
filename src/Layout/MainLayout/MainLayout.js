import React from "react";
import PropTypes from "prop-types";
import Sidemenu from "@/components/Sidemenu/Sidemenu";
import RightContainer from "@/components/RightContainer/RightContainer";
import "./MainLayout.css";

/**
 * this layout contain the sidebar and the Navbar
 *how to use
 * <MainLayout>
 *     <YourComponent/>
 * </MainLayout>
 *
 * */
class MainLayout extends React.Component {


  constructor(props) {
    super(props);
     this.container=React.createRef();
      this.state = { width: 250 ,
        isMobile:window.innerWidth < 1100,
    };
  }

    /**
     *here we handle switching between mobile view and desktop view
     *  desktop >= 810
     *  Mobile  < 810
     */
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 1100
            });
        }, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => {
        }, false);
    }

    /**
     * this function handle closing and opening the sidebar
     * toggle is disabled in mobile view
     * */
    toggleSidemenu() {
        const width = this.state.width === 250 ? 60 : 250;
        this.setState({ width });
    }

    toggleDarkMode(){

        console.log("length: ",this.container.current.classList.length);

        if(this.container.current.classList.length===1)
        {
            localStorage.setItem("dark","dark")
           this.container.current.classList.add("dark");
        }else{
            localStorage.setItem("dark","")
            this.container.current.classList.remove("dark")
        }

    }

  render() {
      let classList ="container";
      if(localStorage.getItem("dark")==="dark")
          classList =`container ${localStorage.getItem("dark")}`;


    return (

      <div ref={this.container} className={classList}>
        <Sidemenu isMobile={this.state.isMobile} width={this.state.width} />
        <RightContainer
            toggleDarkMode ={()=>this.toggleDarkMode()}
            isMobile={this.state.isMobile}
          width={this.state.width}
          toggleSidemenu={() => {
            this.toggleSidemenu();
          }}
        >
          {this.props.children}
        </RightContainer>
      </div>
    );
  }
}

export default MainLayout;
