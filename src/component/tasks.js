import React, { Component, Fragment } from 'react';
import './services.css';
import { faBell, faClock, faImage, faAddressCard, faAddressBook, faCalendar, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Tasks extends Component {

    state = {
        sidebar: false,
        infoCard: false,
        mobileView: false,
    }

    sideBarNames = ["Account", "Bank", "Teams", "Locations", "Devices", "Tasks", "Services", "Products"];
    leftContentBody = ["First Task", "New Task Updated", "Rollback", "Title", "Task"];


    render_sidebar_names = () => {
        let output = this.sideBarNames.map(name => {
            return (
                <div className="sidebarName">{name}
                </div>
            )
        })
        return output;
    }

    render_left_body_content = () => {
        let output = this.leftContentBody.map(task => {
            return (
                <div className="leftContent">
                    <div className="tasks" onClick={() => this.infocard()}>
                        <div className="checkbox"></div>
                        <label>{task}</label>
                    </div>
                </div>
            )
        })
        return output
    }

    render_right_content = () => {
        return (
            <Fragment>
                <div className="containerHeader">
                    <label className="taskLabel">Tasks</label>
                </div>
                <div className="rightContent">
                    <div className="topRightContent">
                        <div className="contentElement">
                            <div className="icon"> <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: "25px" }} /> </div>
                            <div className="contentText">
                                <label>First Task</label>
                            </div>
                        </div>
                        <div className="contentElement">
                            <div className="icon"> <FontAwesomeIcon icon={faAddressCard} style={{ fontSize: "25px" }} /> </div>
                            <div className="contentText">
                                <label>Description</label>
                            </div>
                        </div>
                        <div className="contentElement">
                            <div className="icon"><FontAwesomeIcon icon={faImage} style={{ fontSize: "25px" }} /></div>
                            <div className="contentText">
                                <label>Requires Photo</label>
                            </div>
                            <div className="toggleSwitch">
                                <div className="toggleButton"></div>
                            </div>
                        </div>

                    </div>
                    <div className="bottomRightContent">
                        <div className="contentElement">
                            <div className="icon"> <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ fontSize: "25px" }} /> </div>
                            <div className="contentText">
                                <label>4 Locations</label>
                            </div>
                        </div>
                        <div className="contentElement">
                            <div className="icon"> <FontAwesomeIcon icon={faCalendar} style={{ fontSize: "25px" }} /> </div>
                            <div className="contentText">
                                <label>All Days</label>
                            </div>
                        </div>
                        <div className="contentElement">
                            <div className="icon"> <FontAwesomeIcon icon={faClock} style={{ fontSize: "25px" }} /> </div>
                            <div className="contentText">
                                <label>All Shifts</label>
                            </div>
                        </div>
                        <div className="contentElement">
                            <button className="saveButton">SAVE</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    mobile_sidebar = () => {
        this.setState({
            sidebar: !this.state.sidebar,
        })
    }

    infocard = () => {
        this.setState({
            infoCard: true,
        })
    }
    handleBackClick = () => {
        this.setState({
            infoCard:false,
        })
    }


    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-left">
                        <div className="burgerMenu">
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: "40px",color:"#3d98ff" }} onClick={this.mobile_sidebar} />
                        </div>
                        {this.state.sidebar ?
                            <div className="sidebarMobile">
                                {this.render_sidebar_names()}
                            </div> : null}
                        <div className="titles" style={{ width: "120px" }}>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCog} style={{ fontSize: "25px" }} />
                            </div>
                            <div className="text"><p>Admin</p></div>
                        </div>
                        <div className="titles" style={{ borderColor: "grey" }}>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCog} style={{ fontSize: "25px", color: "grey" }} />
                            </div>
                            <div className="text" style={{ color: "grey" }}><p>Laundormats</p></div>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="notification-button">
                            <FontAwesomeIcon icon={faBell} style={{ fontSize: "35px", color: " #3d98ff" }} />
                        </div>
                        <div className="logout">
                            <p>LD</p>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="sidebar">
                        {this.render_sidebar_names()}
                    </div>

                    { (window.innerWidth <= 500) ?
                        this.state.infoCard ?
                            <div className="container">
                                <div className="right-container">
                                    <div>
                                        <FontAwesomeIcon 
                                            icon={faArrowLeft} 
                                            style={{position:"relative" ,top:"15px" ,left:"15px" ,fontSize:"25px"}}
                                            onClick={this.handleBackClick} />
                                    </div>
                                    {this.render_right_content()}
                                </div>
                                <div className="rightSpace" >
                                </div>
                            </div>
                            :
                            <div className="container">
                                <div className="left-container">
                                    <div className="containerHeader">
                                        <label className="taskLabel">Tasks</label>
                                        <label className="plusIcon">+</label>
                                    </div>
                                    {this.render_left_body_content()}
                                </div>
                                <div className="rightSpace" >
                                </div>
                            </div>
                        :
                        <div className="container">
                            <div className="left-container">
                                <div className="containerHeader">
                                    <label className="taskLabel">Tasks</label>
                                    <label className="plusIcon">+</label>
                                </div>
                                {this.render_left_body_content()}
                            </div>
                            <div className="right-container">
                                {this.render_right_content()}
                            </div>
                            <div className="rightSpace" >
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Tasks;