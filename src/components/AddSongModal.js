import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { editSongCallback, hideEditSongModalCallback } = this.props;
        // let name = "";
        // if (song) {
        //     name = song.song.title;
        // }
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-edit-song-root'>
                        <div class="modal-north">
                            Edit song
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                <label for="title-input">Title: </label> <input type="text" id="title-input" class="modal-text" /> {'\n'}
                                <label for="artist-input">Artist: </label> <input type="text" id="artist-input" class="modal-text" /> {'\n'}
                                <label for="youtube-input">YouTube Id: </label> <input type="text" id="youtube-input" class="modal-text" />
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}