import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * DeleteSong_Transaction
 * 
 * This class represents a transaction that works with deleting
 * a song. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Nazif Mahamud
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, songInfo) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.songTitle = songInfo.title;
        this.songArtist = songInfo.artist;
        this.songID = songInfo.youTubeId
        this.song = { title:this.songTitle, artist:this.songArtist, youTubeId:this.songID }
    }

    doTransaction() {
        this.app.deleteSong(this.index);
    }
    
    undoTransaction() {
        this.app.addSongAtIndex(this.index, this.song)
    }
}