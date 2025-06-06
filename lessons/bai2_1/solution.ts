export class SmartContract {
    private message: string;

    constructor(initialMessage: string) {
        this.message = initialMessage;
    }

    public updateMessage(newMsg: string): void {
        this.message = newMsg;
    }

    public getMessage(): string {
        return this.message;
    }
}