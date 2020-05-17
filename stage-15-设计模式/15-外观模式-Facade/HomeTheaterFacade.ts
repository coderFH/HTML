import { TheaterLight } from "./家庭影院设备的类/TheaterLight";
import { Popcorn } from "./家庭影院设备的类/Popcorn";
import { Stereo } from "./家庭影院设备的类/Stereo";
import { Progector } from "./家庭影院设备的类/Progector";
import { Screen } from "./家庭影院设备的类/Screen";
import { DVDPlayer } from "./家庭影院设备的类/DDVPlayer";

class HomeTheaterFacade {
    // 定义各个子系统的对象
    private theaterLight : TheaterLight;
    private popcorn : Popcorn;
    private stereo : Stereo;
    private progector : Progector;
    private screen : Screen;
    private dvdPlayer : DVDPlayer;

    constructor() {
        this.theaterLight = TheaterLight.getInstance();
        this.popcorn = Popcorn.getInstance();
        this.stereo = Stereo.getInstance();
        this.progector = Progector.getInstance();
        this.screen = Screen.getInstance();
        this.dvdPlayer = DVDPlayer.getInstance();
    }

    // 操作分成4部
    ready() : void {
        this.popcorn.on();
        this.popcorn.pop();
        this.screen.down();
        this.progector.on();
        this.stereo.on();
        this.dvdPlayer.on();
        this.theaterLight.dim();
    }

    play() : void {
        this.dvdPlayer.play();
    }

    pause() : void {
        this.dvdPlayer.pause();
    }

    end() : void {
        this.popcorn.off();
        this.popcorn.off();
        this.screen.up();
        this.progector.off();
        this.stereo.off();
        this.dvdPlayer.off();
        this.theaterLight.bright();
    }
}

export {HomeTheaterFacade}