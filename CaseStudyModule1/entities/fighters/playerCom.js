import {Fighter} from "./fighter";

export class PlayerCom extends Fighter{
    constructor(x,y,vanToc) {
        super("playerCom",x,y,vanToc);
        this.image=document.querySelector('img[alt="rock"]')
    }
}