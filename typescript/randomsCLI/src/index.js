#!/usr/bin/env node
"use strict";
// Randoms CLI Working with files
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
var fs_1 = require("fs");
var promises_1 = require("fs/promises");
var path_1 = require("path");
var fs_extra_1 = require("fs-extra");
var environment = "testing";
var root = process.cwd(); // absolute path
var folderPrefix = "RANDOM";
function isFolder(path) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, promises_1.lstat)(path)];
                case 1: return [2 /*return*/, (_a.sent()).isDirectory()];
            }
        });
    });
}
function getFileName(filePath) {
    var paths = filePath.split("\\", filePath.length);
    return paths[paths.length - 1];
}
function addFileToRoot(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var extName, folderName, absFolderPath;
        return __generator(this, function (_a) {
            if (environment == "testing")
                return [2 /*return*/];
            extName = (0, path_1.extname)(filePath).replaceAll(".", "");
            folderName = (folderPrefix + "_" + extName).replaceAll(" ", "_");
            absFolderPath = root + "\\" + folderName;
            if (!(0, fs_1.existsSync)(absFolderPath)) {
                (0, fs_1.mkdirSync)(absFolderPath);
            }
            absFolderPath += "\\" + getFileName(filePath);
            console.log(absFolderPath);
            // Add File to Folder
            (0, fs_extra_1.copySync)(filePath, absFolderPath, function (err) {
                console.log(err);
            });
            return [2 /*return*/];
        });
    });
}
function readDirectory(root) {
    return __awaiter(this, void 0, void 0, function () {
        var files, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isFolder(root)];
                case 1:
                    if (!(_a.sent())) {
                        addFileToRoot(root);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, promises_1.readdir)(root)];
                case 2:
                    files = _a.sent();
                    for (i = 0; i < files.length; i += 1)
                        readDirectory(root + "\\" + files[i]);
                    return [2 /*return*/];
            }
        });
    });
}
console.log("Copying Files...");
setTimeout(function () {
    console.log("Making Dirs...");
}, 1000);
await readDirectory(root);
