"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var type_1 = require("./type");
var inversify_1 = require("inversify");
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.resetDatabase = function (dropDatabase) {
        if (dropDatabase === void 0) { dropDatabase = false; }
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        connection = _a.sent();
                        if (!dropDatabase) return [3 /*break*/, 3];
                        return [4 /*yield*/, connection.dropDatabase()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        connection.entityMetadatas.forEach(function (metaData) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, connection.manager.query("SET  FOREIGN_KEY_CHECKS=0;")];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, connection.manager.query("  TRUNCATE TABLE " + metaData.tableName)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, connection.manager.query("SET  FOREIGN_KEY_CHECKS=1;")];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 4;
                    case 4: 
                    //
                    return [4 /*yield*/, connection.synchronize()];
                    case 5:
                        //
                        _a.sent();
                        return [2 /*return*/, connection];
                }
            });
        });
    };
    Util.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection_1, connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            connection_1 = typeorm_1.getConnection();
                            return [2 /*return*/, connection_1];
                        }
                        catch (connectionError) {
                            console.log("connection not found create ");
                        }
                        console.log("the option for connection", __assign({}, this.databaseConfig, { entities: this.entities }));
                        return [4 /*yield*/, typeorm_1.createConnection(__assign({}, this.databaseConfig, { entities: this.entities }))];
                    case 1:
                        connection = _a.sent();
                        return [2 /*return*/, connection];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(type_1.default.config),
        __metadata("design:type", Object)
    ], Util.prototype, "databaseConfig", void 0);
    __decorate([
        inversify_1.inject("entities"),
        __metadata("design:type", Object)
    ], Util.prototype, "entities", void 0);
    Util = __decorate([
        inversify_1.injectable()
    ], Util);
    return Util;
}());
exports.default = Util;
//# sourceMappingURL=util.js.map