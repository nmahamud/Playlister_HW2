import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { song, editSongCallback, hideEditSongModalCallback } = this.props;
        let title = "";
        let artist = "";
        let id = "";
        if (song) {
            title = song.song.title;
            artist = song.song.artist;
            id = song.song.youTubeId;
        }
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
                            <span id="title-prompt" class="modal-prompt">Title: </span> <input type="text" defaultValue={title} id="title-input" class="modal-textfield" /> 
                            <span id="artist-prompt" class="modal-prompt">Artist: </span> <input type="text" defaultValue={artist} id="artist-input" class="modal-textfield" />
                            <span id="you-tube-id-prompt" class="modal-prompt">You Tube Id: </span> <input type="text" defaultValue={id} id="youtube-input" class="modal-textfield" />
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