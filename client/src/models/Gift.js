
export class Gift {
    constructor(data) {
        this.id = data.id 
        this.opened = data.opened == false
        this.tag = data.tag || 'No tag supplied'
        this.url = data.url
    }

}