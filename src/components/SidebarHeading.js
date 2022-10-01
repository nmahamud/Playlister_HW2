import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { canAddSong, createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        const { canAddSong } = this.props;
        let addList = "toolbar-button";
        if (canAddSong) addList += " disabled"
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className="toolbar-button" 
                    onClick={this.handleClick}
                    value="+"
                    disabled={canAddSong}
                    />
                Your Playlists
            </div>
        );
    }
}