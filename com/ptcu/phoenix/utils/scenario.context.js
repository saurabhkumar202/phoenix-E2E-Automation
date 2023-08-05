"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScenarioContext {
    static getMap() {
        return this.map;
    }
    static add(key, value) {
        this.map.set(key, value);
        return this.map;
    }
    static get(key) {
        return this.map.get(key);
    }
    static delete(key) {
        this.map.delete(key);
    }
    static contains(key) {
        return this.map.has(key);
    }
    static clearAll() {
        this.map.clear();
    }
}
ScenarioContext.map = new Map([]);
exports.ScenarioContext = ScenarioContext;
