import * as i0 from "@angular/core";
export declare class SimpleTimer {
    private timers;
    private subscription;
    getTimer(): string[];
    getSubscription(): string[];
    newTimer(name: string, sec: number, delay?: boolean): boolean;
    newTimerCD(name: string, sec: number, delay?: number): boolean;
    newTimerHR(name: string, msec: number, delay?: number): boolean;
    delTimer(name: string): boolean;
    /**
     *
     * @param name
     * @param callback
     */
    subscribe(name: string, callback: () => void): string;
    /**
     *
     * @param id
     */
    unsubscribe(id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleTimer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SimpleTimer>;
}
//# sourceMappingURL=ng2-simple-timer.service.d.ts.map