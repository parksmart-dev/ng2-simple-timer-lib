import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { UUID } from 'angular2-uuid';
import * as i0 from "@angular/core";
export class SimpleTimer {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNpbXBsZS10aW1lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmcyLXNpbXBsZS10aW1lci9zcmMvbGliL25nMi1zaW1wbGUtdGltZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBNEIsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBaUJyQyxNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUdTLFdBQU0sR0FBYyxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBcUIsRUFBRSxDQUFDO0tBa0Y1QztJQWhGQSxRQUFRO1FBQ1AsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsZUFBZTtRQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELFFBQVEsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLFFBQWlCLEtBQUs7UUFDekQsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRSxPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFrQixDQUFBO1FBQ3RCLElBQUksS0FBSyxFQUFFO1lBQ1YsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUNJO1lBQ0osQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxD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O1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O3dHQXBGVyxXQUFXOzRHQUFYLFdBQVcsY0FERSxNQUFNOzJGQUNuQixXQUFXO2tCQUR2QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVVSUQgfSBmcm9tICdhbmd1bGFyMi11dWlkJztcblxuaW50ZXJmYWNlIFRpbWVyTGlzdCB7XG5cdFtuYW1lOiBzdHJpbmddOiB7XG5cdFx0c2Vjb25kOiBudW1iZXIsXG5cdFx0dDogT2JzZXJ2YWJsZTxhbnk+XG5cdH07XG59XG5cbmludGVyZmFjZSBTdWJzY3JpcHRpb25MaXN0IHtcblx0W2lkOiBzdHJpbmddOiB7XG5cdFx0bmFtZTogc3RyaW5nLFxuXHRcdHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG5cdH07XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGltZXIge1xuXG5cdHByaXZhdGUgdGltZXJzOiBUaW1lckxpc3QgPSB7fTtcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbkxpc3QgPSB7fTtcblxuXHRnZXRUaW1lcigpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudGltZXJzKTtcblx0fVxuXHRnZXRTdWJzY3JpcHRpb24oKTogc3RyaW5nW10ge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN1YnNjcmlwdGlvbik7XG5cdH1cblx0bmV3VGltZXIobmFtZTogc3RyaW5nLCBzZWM6IG51bWJlciwgZGVsYXk6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuXHRcdGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgc2VjID09PSB1bmRlZmluZWQgfHwgdGhpcy50aW1lcnNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IHQ6IE9ic2VydmFibGU8YW55PlxuXHRcdGlmIChkZWxheSkge1xuXHRcdFx0dCA9IHRpbWVyKHNlYyAqIDEwMDAsIHNlYyAqIDEwMDApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHQgPSB0aW1lcigwLCBzZWMgKiAxMDAwKTtcblx0XHR9XG5cdFx0dGhpcy50aW1lcnNbbmFtZV0gPSB7IHNlY29uZDogc2VjLCB0OiB0IH07XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0bmV3VGltZXJDRChuYW1lOiBzdHJpbmcsIHNlYzogbnVtYmVyLCBkZWxheTogbnVtYmVyID0gMCk6IGJvb2xlYW4ge1xuXHRcdGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgc2VjID09PSB1bmRlZmluZWQgfHwgdGhpcy50aW1lcnNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IHQ6IE9ic2VydmFibGU8YW55PlxuXHRcdHQgPSB0aW1lcihkZWxheSAqIDEwMDAsIHNlYyAqIDEwMDApO1xuXHRcdHRoaXMudGltZXJzW25hbWVdID0geyBzZWNvbmQ6IHNlYywgdDogdCB9O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdG5ld1RpbWVySFIobmFtZTogc3RyaW5nLCBtc2VjOiBudW1iZXIsIGRlbGF5OiBudW1iZXIgPSAwKTogYm9vbGVhbiB7XG5cdFx0aWYgKG5hbWUgPT09IHVuZGVmaW5lZCB8fCBtc2VjID09PSB1bmRlZmluZWQgfHwgdGhpcy50aW1lcnNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IHQ6IE9ic2VydmFibGU8YW55PlxuXHRcdHQgPSB0aW1lcihkZWxheSwgbXNlYyk7XG5cdFx0dGhpcy50aW1lcnNbbmFtZV0gPSB7IHNlY29uZDogbXNlYywgdDogdCB9O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGRlbFRpbWVyKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgIXRoaXMudGltZXJzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCBzID0gdGhpcy5nZXRTdWJzY3JpcHRpb24oKTtcblx0XHQvLyB1bnN1YnNjcmliZSBhbGwgc3Vic2NyaXB0aW9uIGZvciBxdWV1ZSAnbmFtZSdcblx0XHRzLmZvckVhY2goaSA9PiB7XG5cdFx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb25baV0ubmFtZSA9PT0gbmFtZSkge1xuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlKGkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIGRlbGV0ZSBxdWV1ZSAnbmFtZScgc3ViamVjdCBhbmQgb2JzZXJ2YWJsZVxuXHRcdGRlbGV0ZSB0aGlzLnRpbWVyc1tuYW1lXS50O1xuXHRcdGRlbGV0ZSB0aGlzLnRpbWVyc1tuYW1lXTtcblx0fVxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHBhcmFtIGNhbGxiYWNrXG5cdCAqL1xuXHRzdWJzY3JpYmUobmFtZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHN0cmluZyB7XG5cdFx0aWYgKCF0aGlzLnRpbWVyc1tuYW1lXSkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRsZXQgaWQgPSBuYW1lICsgJy0nICsgVVVJRC5VVUlEKCk7XG5cdFx0dGhpcy5zdWJzY3JpcHRpb25baWRdID0ge1xuXHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdHN1YnNjcmlwdGlvbjogdGhpcy50aW1lcnNbbmFtZV0udC5zdWJzY3JpYmUoY2FsbGJhY2spXG5cdFx0fVxuXHRcdHJldHVybiBpZDtcblx0fVxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIGlkXG5cdCAqL1xuXHR1bnN1YnNjcmliZShpZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0aWYgKCFpZCB8fCAhdGhpcy5zdWJzY3JpcHRpb25baWRdKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uW2lkXS5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHRkZWxldGUgdGhpcy5zdWJzY3JpcHRpb25baWRdO1xuXHR9XG59XG4iXX0=