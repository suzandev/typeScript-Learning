//* only Idea */
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

//* implementation */
class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("Playing Music.....");
  }

  pause(): void {
    console.log("Music Paused......");
  }

  stop(): void {
    console.log("Music Stopped.....");
  }
}

const myPlayer = new MusicPlayer();

myPlayer.play();

//* Example - 2 */

abstract class MediaPlayer2 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;

  // constructor(parameters) {

  // }
}

class myPlayer2 extends MediaPlayer2 {
  play() {
    console.log("Playing Music.....");
  }

  pause() {
    console.log("Music is paused.....");
  }

  stop() {
    console.log("Music Stopped......");
  }
}

const myPlayer1 = new myPlayer2();

myPlayer1.play();
