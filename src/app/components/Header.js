import React from "react";

export const Header = (props)=>{
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href={props.homeLink} className="navbar-brand">{props.siteName}</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href={props.homeLink}>Home</a></li>
                        <li><a href={props.myContactsLink}>My Contacts</a></li>
                        <li><a href={props.newContactLink}>New Contact</a></li>
                    </ul>
                </div>
            </nav>
        );
}