import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { UUID } from 'angular2-uuid';

class SimpleTimer {
    constructor() {
        this.timers = {};
        this.subscription = {};
    }
    getTimer() {
        return Object.keys(this.timers);
    }
    getSubscription() {
        return Object.keys(this.subscription);
    }
    newTimer(name, sec, delay = false) {
        if (name === undefined || sec === undefined || this.timers[name]) {
            return false;
        }
        let t;
        if (delay) {
            t = timer(sec * 1000, sec * 1000);
        }
        else {
            t = timer(0, sec * 1000);
        }
        this.timers[name] = { second: sec, t: t };
        return true;
    }
    newTimerCD(name, sec, delay = 0) {
        if (name === undefined || sec === undefined || this.timers[name]) {
            return false;
        }
        let t;
        t = timer(delay * 1000, sec * 1000);
        this.timers[name] = { second: sec, t: t };
        return true;
    }
    newTimerHR(name, msec, delay = 0) {
        if (name === undefined || msec === undefined || this.timers[name]) {
            return false;
        }
        let t;
        t = timer(delay, msec);
        this.timers[name] = { second: msec, t: t };
        return true;
    }
    delTimer(name) {
        if (name === undefined || !this.timers[name]) {
            return false;
        }
        let s = this.getSubscription();
        // unsubscribe all subscription for queue 'name'
        s.forEach(i => {
            if (this.subscription[i].name === name) {
                this.unsubscribe(i);
            }
        });
        // delete queue 'name' subject and observable
        delete this.timers[name].t;
        delete this.timers[name];
    }
    /**
     *
     * @param name
     * @param callback
     */
    subscribe(name, callback) {
        if (!this.timers[name]) {
            return '';
        }
        let id = name + '-' + UUID.UUID();
        this.subscription[id] = {
            name: name,
            subscription: this.timers[name].t.subscribe(callback)
        };
        return id;
    }
    /**
     *
     * @param id
     */
    unsubscribe(id) {
        if (!id || !this.subscription[id]) {
            return false;
        }
        this.subscription[id].subscription.unsubscribe();
        delete this.subscription[id];
    }
}
SimpleTimer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SimpleTimer, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SimpleTimer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SimpleTimer, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SimpleTimer, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/*
 * Public API Surface of ng2-simple-timer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SimpleTimer };
//# sourceMappingURL=ng2-simple-timer.mjs.map
