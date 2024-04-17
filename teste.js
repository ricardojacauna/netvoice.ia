var e, t, n, i, r, o, s, a, l, d, c, u, h, p, f, g, m, v, w, y, b, x, k, _;
o = Object.freeze(["id", "type", {
    sourceArg: "type",
    cases: [{
        sourceArgValues: ["chooser", "inputBox", "slider", "switch"],
        argToAdd: "global"
    }, {
        sourceArgValues: ["button", "monitor", "plot"],
        argToAdd: "name"
    }, {
        sourceArgValues: ["textBox"],
        argToAdd: "text"
    }]
}, {
    sourceArg: "type",
    cases: [{
        sourceArgValues: ["button", "monitor"],
        argToAdd: "code"
    }]
}]), r = Object.freeze([{
    name: "model-load",
    args: ["source", "location"]
}, {
    name: "compile-start",
    args: ["nlogo", "originalNlogo"]
}, {
    name: "compile-complete",
    args: ["nlogo", "originalNlogo", "status", {
        sourceArg: "status",
        cases: [{
            sourceArgValues: ["failure"],
            argToAdd: "failure-level"
        }]
    }]
}, {
    name: "revert-work-in-progress",
    args: []
}, {
    name: "undo-revert",
    args: []
}, {
    name: "nlogo-exported",
    args: ["fileName", "nlogo"]
}, {
    name: "html-exported",
    args: ["fileName", "nlogo"]
}, {
    name: "startup-procedure-run",
    args: []
}, {
    name: "session-loop-started",
    args: []
}, {
    name: "recompile-start",
    args: ["source", "code", "originalCode"]
}, {
    name: "recompile-complete",
    args: ["source", "code", "originalCode"]
}, {
    name: "new-widget-initialized",
    args: ["id", "type"]
}, {
    name: "new-widget-finalized",
    args: o
}, {
    name: "new-widget-cancelled",
    args: ["id", "type"]
}, {
    name: "widget-updated",
    args: o
}, {
    name: "widget-deleted",
    args: o
}, {
    name: "widget-moved",
    args: ["id", "type", "top", "bottom", "left", "right"]
}, {
    name: "info-updated",
    args: ["text"]
}, {
    name: "button-widget-clicked",
    args: ["id", "name", "code", "isForever", "isNowRunning"]
}, {
    name: "slider-widget-changed",
    args: ["id", "global", "newValue", "oldValue"]
}, {
    name: "chooser-widget-changed",
    args: ["id", "global", "newValue", "oldValue"]
}, {
    name: "input-widget-changed",
    args: ["id", "global", "newValue", "oldValue", "type"]
}, {
    name: "switch-widget-changed",
    args: ["id", "global", "newValue", "oldValue"]
}, {
    name: "command-center-run",
    args: ["command"]
}, {
    name: "speed-slider-changed",
    args: ["speed"]
}, {
    name: "command-center-toggled",
    args: ["isOpen"]
}, {
    name: "model-code-toggled",
    args: ["isOpen"]
}, {
    name: "model-info-toggled",
    args: ["isOpen"]
}, {
    name: "title-changed",
    args: ["title"]
}, {
    name: "authoring-mode-toggled",
    args: ["isActive"]
}, {
    name: "notify-user",
    args: ["message"]
}, {
    name: "compiler-error",
    args: ["source", "errors"]
}, {
    name: "runtime-error",
    args: ["source", "exception", "code"]
}, {
    name: "extension-error",
    args: ["messages"]
}]), i = function(e, t) {
    var n, i;
    return "string" == typeof e ? e : (n = t[e.sourceArg], null != (i = e.cases.find((function(e) {
        return e.sourceArgValues.includes(n)
    }))) ? i.argToAdd : void 0)
}, t = function(e, t) {
    var n;
    if (n = {}, e.length < t.length) throw new Error("not enough arg settings for the values given");
    return e.forEach((function(e, r) {
        var o;
        if (null != (o = i(e, n))) return n[o] = t[r]
    })), n
}, e = function() {
    return {
        timeStamp: Date.now()
    }
}, n = function(n, i) {
    var r;
    return r = n.reduce((function(e, t) {
            return e.set(t.name, t), e
        }), new Map),
        function(n, ...o) {
            var s, a, l, d;
            (d = i.filter((function(e) {
                return null != e[n]
            }))).length > 0 && (a = r.get(n), s = e(), l = t(a.args, o), d.forEach((function(e) {
                return e[n](s, l)
            })))
        }
}, s = function(e) {
    var t;
    return t = {}, e.forEach((function(e) {
        return t[e.name] = function(t, n) {
            return console.debug(e.name, t, n)
        }
    })), t
}, l = function(e, t, n) {
    window.parent.postMessage({
        type: "nlw-notification",
        event: e,
        commonArgs: t,
        eventArgs: n
    }, "*")
}, d = function(e, t, n, i) {
    window.parent.postMessage({
        type: "nlw-notification",
        tag: e,
        event: t,
        commonArgs: n,
        eventArgs: i
    }, "*")
}, a = function(e, t, n) {
    var i, r, o, s;
    return r = "" !== t.trim() ? (i = t.split(",").map((function(e) {
        return e.trim()
    })), e.filter((function(e) {
        return i.includes(e.name)
    }))) : e, s = null != n ? function(e, t, i) {
        return d(n, e, t, i)
    } : l, o = {}, r.forEach((function(e) {
        return o[e.name] = function(t, n) {
            return s(e.name, t, n)
        }
    })), o
}, p = Object.freeze(new Map([
    ["button", ["actionKey", "buttonKind", "disableUntilTicksStart", "display", "forever", "source"]],
    ["chooser", ["choices", "currentChoice", "display", "variable"]],
    ["inputBox", ["boxedValue", "variable"]],
    ["monitor", ["display", "fontSize", "precision", "source"]],
    ["output", ["fontSize"]],
    ["plot", ["autoPlotOn", "display", "legendOn", "pens", "setupCode", "updateCode", "xAxis", "xmax", "xmin", "yAxis", "ymax", "ymin"]],
    ["slider", ["default", "direction", "display", "max", "min", "step", "units", "variable"]],
    ["switch", ["display", "on", "variable"]],
    ["textBox", ["color", "display", "fontSize", "transparent"]],
    ["view", ["dimensions", "fontSize", "frameRate", "showTickCounter", "tickCounterLabel", "updateMode"]]
])), u = Object.freeze(["bottom", "left", "right", "top"]), h = Object.freeze(["type"]), c = function(e) {
    var t;
    return t = p.get(e.type), Object.keys(e).filter((function(e) {
        return t.includes(e) || u.includes(e) || h.includes(e)
    })).reduce((function(t, n) {
        return t[n] = e[n], t
    }), {})
}, ({
    fold: w
} = tortoise_require("brazier/maybe")), ({
    createExportValue: m
} = tortoise_require("engine/core/world/export")), ({
    Perspective: g
} = tortoise_require("engine/core/observer")), f = class {
    constructor(e, t) {
        this.session = e, this.workspace = t, this._exportValue = m(this.workspace.world)
    }
    _filterNames(e, t) {
        return null != t ? e.filter((function(e) {
            return t.includes(e)
        })) : e
    }
    _getAllBreeds() {
        var e;
        return e = this.workspace.breedManager.breeds(), Object.keys(e).map((function(t) {
            return e[t]
        }))
    }
    getLinkBreeds() {
        var e;
        return e = this._getAllBreeds().filter((function(e) {
            return e.isLinky()
        })).map((function(e) {
            return e.originalName
        })), e
    }
    getTurtleBreeds() {
        var e;
        return e = this._getAllBreeds().filter((function(e) {
            return !e.isLinky()
        })).map((function(e) {
            return e.originalName
        })), e
    }
    getCode() {
        return this.session.getCode()
    }
    getCurrentPlot() {
        return w((function() {
            return null
        }))((function(e) {
            return e.name
        }))(this.workspace.plotManager.getCurrentPlotMaybe())
    }
    getCurrentPerspective() {
        var e, t, n;
        return n = (e = this.workspace.world.observer)._targetAgent, {
            type: null != (t = e.getPerspective()) ? g.perspectiveToString(t) : "unset",
            targetAgent: null != n ? n.toString() : "nobody"
        }
    }
    getGlobals(e) {
        var t;
        return t = this.workspace.world.observer, this._filterNames(t.varNames(), e).map((e => ({
            name: e,
            value: this._exportValue(t.getGlobal(e))
        })))
    }
    getInfo() {
        return this.session.getInfo()
    }
    getModelTitle() {
        return this.session.modelTitle()
    }
    getNlogo() {
        return this.session.getNlogo()
    }
    getSetting(e) {
        return this.session.widgetController.ractive.get(e)
    }
    getSource() {
        return this.session.nlogoSource
    }
    getSpeed() {
        return this.session.widgetController.speed()
    }
    getTicks() {
        return this.session.widgetController.ractive.get("ticks")
    }
    getLinkVars() {
        return this.session.compiler.listLinkVars()
    }
    getLinkBreedVars(e) {
        return this.session.compiler.listLinkOwnVarsForBreed(e)
    }
    getPatchVars() {
        return this.session.compiler.listPatchVars()
    }
    getTurtleVars() {
        return this.session.compiler.listTurtleVars()
    }
    getTurtleBreedVars(e) {
        return this.session.compiler.listOwnVarsForBreed(e)
    }
    getView() {
        return this.workspace.importExportPrims.exportViewRaw()
    }
    getWidgets() {
        return this.session.widgetController.widgets().map(c)
    }
    runReporter(e) {
        var t;
        return (t = this.session.runReporter(e)).success && (t.value = this._exportValue(t.value)), t
    }
}, v = function(e, t) {
    return new f(e, t)
}, x = function(e, t, n, i) {
    e.postMessage({
        type: "nlw-query-response",
        queries: t,
        sourceInfo: n,
        results: i
    }, "*")
}, b = function(e, t) {
    var n;
    switch (t.type) {
        case "globals":
            return {
                type: "globals-result", globals: e.getGlobals(t.variableFilters)
            };
        case "reporter":
            return (n = e.runReporter(t.code)).type = "reporter-result", n;
        case "widgets":
            return {
                type: "widgets-result", widgets: e.getWidgets()
            };
        case "info":
            return {
                type: "info-result", info: e.getInfo()
            };
        case "code":
            return {
                type: "code-result", code: e.getCode()
            };
        case "nlogo-file":
            return {
                type: "nlogo-file-result", nlogo: e.getNlogo()
            };
        case "metadata":
            return {
                type: "metadata-result", title: e.getModelTitle(), source: e.getSource(), speed: e.getSpeed(), ticks: e.getTicks(), currentPlot: e.getCurrentPlot(), perspective: e.getCurrentPerspective()
            };
        case "view":
            return {
                type: "view-result", base64: e.getView()
            };
        default:
            throw new Error(`Unknown query: ${t}`)
    }
}, y = function(e) {
    var t, n;
    n = null, t = function(t) {
        var i;
        return i = e(), null != n && n.session === i || (n = v(i, globalThis.workspace)), b(n, t)
    }, window.addEventListener("message", (function(e) {
        var n;
        "nlw-query" === e.data.type && (n = e.data.queries.map(t), x(e.source, e.data.queries, e.data.sourceInfo, n))
    }))
}, k = class {
    constructor(e, t) {
        var n;
        this.namespace = e, this.localStorage = t, (n = this.localStorage.getItem(this.namespace)) ? this.inProgress = JSON.parse(n) : (this.inProgress = {}, this.localStorage.setItem(this.namespace, JSON.stringify(this.inProgress)))
    }
    hasKey(e) {
        return this.inProgress.hasOwnProperty(e)
    }
    get(e) {
        return this.inProgress[e]
    }
    set(e, t) {
        this.inProgress[e] = t, this.localStorage.setItem(this.namespace, JSON.stringify(this.inProgress))
    }
    remove(e) {
        delete this.inProgress[e], this.localStorage.setItem(this.namespace, JSON.stringify(this.inProgress))
    }
}, _ = function() {
    var e;
    return e = {}, {
        setItem: function(t, n) {
            return e[t] = n
        },
        getItem: function(t) {
            return e[t]
        },
        removeItem: function(t) {
            return delete e[t]
        },
        clear: function() {
            return Object.getOwnPropertyNames(e).forEach((t => delete e[t]))
        }
    }
};
var C, E, S, T, P, A, I, L, z, M, B, R, O, N, U, D, V, W, F, j, H, q, X = "\n@#$#@#$#@\nGRAPHICS-WINDOW\n210\n10\n647\n448\n-1\n-1\n13.0\n1\n10\n1\n1\n1\n0\n1\n1\n1\n-16\n16\n-16\n16\n1\n1\n1\nticks\n30.0\n\n@#$#@#$#@\n## WHAT IS IT?\n\n(a general understanding of what the model is trying to show or explain)\n\n## HOW IT WORKS\n\n(what rules the agents use to create the overall behavior of the model)\n\n## HOW TO USE IT\n\n(how to use the model, including a description of each of the items in the Interface tab)\n\n## THINGS TO NOTICE\n\n(suggested things for the user to notice while running the model)\n\n## THINGS TO TRY\n\n(suggested things for the user to try to do (move sliders, switches, etc.) with the model)\n\n## EXTENDING THE MODEL\n\n(suggested things to add or change in the Code tab to make the model more complicated, detailed, accurate, etc.)\n\n## NETLOGO FEATURES\n\n(interesting or unusual features of NetLogo that the model uses, particularly in the Code tab; or where workarounds were needed for missing features)\n\n## RELATED MODELS\n\n(models in the NetLogo Models Library and elsewhere which are of related interest)\n\n## CREDITS AND REFERENCES\n\n(a reference to the model's URL on the web if it has one, as well as any other necessary credits, citations, and links)\n@#$#@#$#@\ndefault\ntrue\n0\nPolygon -7500403 true true 150 5 40 250 150 205 260 250\n\nairplane\ntrue\n0\nPolygon -7500403 true true 150 0 135 15 120 60 120 105 15 165 15 195 120 180 135 240 105 270 120 285 150 270 180 285 210 270 165 240 180 180 285 195 285 165 180 105 180 60 165 15\n\narrow\ntrue\n0\nPolygon -7500403 true true 150 0 0 150 105 150 105 293 195 293 195 150 300 150\n\nbox\nfalse\n0\nPolygon -7500403 true true 150 285 285 225 285 75 150 135\nPolygon -7500403 true true 150 135 15 75 150 15 285 75\nPolygon -7500403 true true 15 75 15 225 150 285 150 135\nLine -16777216 false 150 285 150 135\nLine -16777216 false 150 135 15 75\nLine -16777216 false 150 135 285 75\n\nbug\ntrue\n0\nCircle -7500403 true true 96 182 108\nCircle -7500403 true true 110 127 80\nCircle -7500403 true true 110 75 80\nLine -7500403 true 150 100 80 30\nLine -7500403 true 150 100 220 30\n\nbutterfly\ntrue\n0\nPolygon -7500403 true true 150 165 209 199 225 225 225 255 195 270 165 255 150 240\nPolygon -7500403 true true 150 165 89 198 75 225 75 255 105 270 135 255 150 240\nPolygon -7500403 true true 139 148 100 105 55 90 25 90 10 105 10 135 25 180 40 195 85 194 139 163\nPolygon -7500403 true true 162 150 200 105 245 90 275 90 290 105 290 135 275 180 260 195 215 195 162 165\nPolygon -16777216 true false 150 255 135 225 120 150 135 120 150 105 165 120 180 150 165 225\nCircle -16777216 true false 135 90 30\nLine -16777216 false 150 105 195 60\nLine -16777216 false 150 105 105 60\n\ncar\nfalse\n0\nPolygon -7500403 true true 300 180 279 164 261 144 240 135 226 132 213 106 203 84 185 63 159 50 135 50 75 60 0 150 0 165 0 225 300 225 300 180\nCircle -16777216 true false 180 180 90\nCircle -16777216 true false 30 180 90\nPolygon -16777216 true false 162 80 132 78 134 135 209 135 194 105 189 96 180 89\nCircle -7500403 true true 47 195 58\nCircle -7500403 true true 195 195 58\n\ncircle\nfalse\n0\nCircle -7500403 true true 0 0 300\n\ncircle 2\nfalse\n0\nCircle -7500403 true true 0 0 300\nCircle -16777216 true false 30 30 240\n\ncow\nfalse\n0\nPolygon -7500403 true true 200 193 197 249 179 249 177 196 166 187 140 189 93 191 78 179 72 211 49 209 48 181 37 149 25 120 25 89 45 72 103 84 179 75 198 76 252 64 272 81 293 103 285 121 255 121 242 118 224 167\nPolygon -7500403 true true 73 210 86 251 62 249 48 208\nPolygon -7500403 true true 25 114 16 195 9 204 23 213 25 200 39 123\n\ncylinder\nfalse\n0\nCircle -7500403 true true 0 0 300\n\ndot\nfalse\n0\nCircle -7500403 true true 90 90 120\n\nface happy\nfalse\n0\nCircle -7500403 true true 8 8 285\nCircle -16777216 true false 60 75 60\nCircle -16777216 true false 180 75 60\nPolygon -16777216 true false 150 255 90 239 62 213 47 191 67 179 90 203 109 218 150 225 192 218 210 203 227 181 251 194 236 217 212 240\n\nface neutral\nfalse\n0\nCircle -7500403 true true 8 7 285\nCircle -16777216 true false 60 75 60\nCircle -16777216 true false 180 75 60\nRectangle -16777216 true false 60 195 240 225\n\nface sad\nfalse\n0\nCircle -7500403 true true 8 8 285\nCircle -16777216 true false 60 75 60\nCircle -16777216 true false 180 75 60\nPolygon -16777216 true false 150 168 90 184 62 210 47 232 67 244 90 220 109 205 150 198 192 205 210 220 227 242 251 229 236 206 212 183\n\nfish\nfalse\n0\nPolygon -1 true false 44 131 21 87 15 86 0 120 15 150 0 180 13 214 20 212 45 166\nPolygon -1 true false 135 195 119 235 95 218 76 210 46 204 60 165\nPolygon -1 true false 75 45 83 77 71 103 86 114 166 78 135 60\nPolygon -7500403 true true 30 136 151 77 226 81 280 119 292 146 292 160 287 170 270 195 195 210 151 212 30 166\nCircle -16777216 true false 215 106 30\n\nflag\nfalse\n0\nRectangle -7500403 true true 60 15 75 300\nPolygon -7500403 true true 90 150 270 90 90 30\nLine -7500403 true 75 135 90 135\nLine -7500403 true 75 45 90 45\n\nflower\nfalse\n0\nPolygon -10899396 true false 135 120 165 165 180 210 180 240 150 300 165 300 195 240 195 195 165 135\nCircle -7500403 true true 85 132 38\nCircle -7500403 true true 130 147 38\nCircle -7500403 true true 192 85 38\nCircle -7500403 true true 85 40 38\nCircle -7500403 true true 177 40 38\nCircle -7500403 true true 177 132 38\nCircle -7500403 true true 70 85 38\nCircle -7500403 true true 130 25 38\nCircle -7500403 true true 96 51 108\nCircle -16777216 true false 113 68 74\nPolygon -10899396 true false 189 233 219 188 249 173 279 188 234 218\nPolygon -10899396 true false 180 255 150 210 105 210 75 240 135 240\n\nhouse\nfalse\n0\nRectangle -7500403 true true 45 120 255 285\nRectangle -16777216 true false 120 210 180 285\nPolygon -7500403 true true 15 120 150 15 285 120\nLine -16777216 false 30 120 270 120\n\nleaf\nfalse\n0\nPolygon -7500403 true true 150 210 135 195 120 210 60 210 30 195 60 180 60 165 15 135 30 120 15 105 40 104 45 90 60 90 90 105 105 120 120 120 105 60 120 60 135 30 150 15 165 30 180 60 195 60 180 120 195 120 210 105 240 90 255 90 263 104 285 105 270 120 285 135 240 165 240 180 270 195 240 210 180 210 165 195\nPolygon -7500403 true true 135 195 135 240 120 255 105 255 105 285 135 285 165 240 165 195\n\nline\ntrue\n0\nLine -7500403 true 150 0 150 300\n\nline half\ntrue\n0\nLine -7500403 true 150 0 150 150\n\npentagon\nfalse\n0\nPolygon -7500403 true true 150 15 15 120 60 285 240 285 285 120\n\nperson\nfalse\n0\nCircle -7500403 true true 110 5 80\nPolygon -7500403 true true 105 90 120 195 90 285 105 300 135 300 150 225 165 300 195 300 210 285 180 195 195 90\nRectangle -7500403 true true 127 79 172 94\nPolygon -7500403 true true 195 90 240 150 225 180 165 105\nPolygon -7500403 true true 105 90 60 150 75 180 135 105\n\nplant\nfalse\n0\nRectangle -7500403 true true 135 90 165 300\nPolygon -7500403 true true 135 255 90 210 45 195 75 255 135 285\nPolygon -7500403 true true 165 255 210 210 255 195 225 255 165 285\nPolygon -7500403 true true 135 180 90 135 45 120 75 180 135 210\nPolygon -7500403 true true 165 180 165 210 225 180 255 120 210 135\nPolygon -7500403 true true 135 105 90 60 45 45 75 105 135 135\nPolygon -7500403 true true 165 105 165 135 225 105 255 45 210 60\nPolygon -7500403 true true 135 90 120 45 150 15 180 45 165 90\n\nsheep\nfalse\n15\nCircle -1 true true 203 65 88\nCircle -1 true true 70 65 162\nCircle -1 true true 150 105 120\nPolygon -7500403 true false 218 120 240 165 255 165 278 120\nCircle -7500403 true false 214 72 67\nRectangle -1 true true 164 223 179 298\nPolygon -1 true true 45 285 30 285 30 240 15 195 45 210\nCircle -1 true true 3 83 150\nRectangle -1 true true 65 221 80 296\nPolygon -1 true true 195 285 210 285 210 240 240 210 195 210\nPolygon -7500403 true false 276 85 285 105 302 99 294 83\nPolygon -7500403 true false 219 85 210 105 193 99 201 83\n\nsquare\nfalse\n0\nRectangle -7500403 true true 30 30 270 270\n\nsquare 2\nfalse\n0\nRectangle -7500403 true true 30 30 270 270\nRectangle -16777216 true false 60 60 240 240\n\nstar\nfalse\n0\nPolygon -7500403 true true 151 1 185 108 298 108 207 175 242 282 151 216 59 282 94 175 3 108 116 108\n\ntarget\nfalse\n0\nCircle -7500403 true true 0 0 300\nCircle -16777216 true false 30 30 240\nCircle -7500403 true true 60 60 180\nCircle -16777216 true false 90 90 120\nCircle -7500403 true true 120 120 60\n\ntree\nfalse\n0\nCircle -7500403 true true 118 3 94\nRectangle -6459832 true false 120 195 180 300\nCircle -7500403 true true 65 21 108\nCircle -7500403 true true 116 41 127\nCircle -7500403 true true 45 90 120\nCircle -7500403 true true 104 74 152\n\ntriangle\nfalse\n0\nPolygon -7500403 true true 150 30 15 255 285 255\n\ntriangle 2\nfalse\n0\nPolygon -7500403 true true 150 30 15 255 285 255\nPolygon -16777216 true false 151 99 225 223 75 224\n\ntruck\nfalse\n0\nRectangle -7500403 true true 4 45 195 187\nPolygon -7500403 true true 296 193 296 150 259 134 244 104 208 104 207 194\nRectangle -1 true false 195 60 195 105\nPolygon -16777216 true false 238 112 252 141 219 141 218 112\nCircle -16777216 true false 234 174 42\nRectangle -7500403 true true 181 185 214 194\nCircle -16777216 true false 144 174 42\nCircle -16777216 true false 24 174 42\nCircle -7500403 false true 24 174 42\nCircle -7500403 false true 144 174 42\nCircle -7500403 false true 234 174 42\n\nturtle\ntrue\n0\nPolygon -10899396 true false 215 204 240 233 246 254 228 266 215 252 193 210\nPolygon -10899396 true false 195 90 225 75 245 75 260 89 269 108 261 124 240 105 225 105 210 105\nPolygon -10899396 true false 105 90 75 75 55 75 40 89 31 108 39 124 60 105 75 105 90 105\nPolygon -10899396 true false 132 85 134 64 107 51 108 17 150 2 192 18 192 52 169 65 172 87\nPolygon -10899396 true false 85 204 60 233 54 254 72 266 85 252 107 210\nPolygon -7500403 true true 119 75 179 75 209 101 224 135 220 225 175 261 128 261 81 224 74 135 88 99\n\nwheel\nfalse\n0\nCircle -7500403 true true 3 3 294\nCircle -16777216 true false 30 30 240\nLine -7500403 true 150 285 150 15\nLine -7500403 true 15 150 285 150\nCircle -7500403 true true 120 120 60\nLine -7500403 true 216 40 79 269\nLine -7500403 true 40 84 269 221\nLine -7500403 true 40 216 269 79\nLine -7500403 true 84 40 221 269\n\nwolf\nfalse\n0\nPolygon -16777216 true false 253 133 245 131 245 133\nPolygon -7500403 true true 2 194 13 197 30 191 38 193 38 205 20 226 20 257 27 265 38 266 40 260 31 253 31 230 60 206 68 198 75 209 66 228 65 243 82 261 84 268 100 267 103 261 77 239 79 231 100 207 98 196 119 201 143 202 160 195 166 210 172 213 173 238 167 251 160 248 154 265 169 264 178 247 186 240 198 260 200 271 217 271 219 262 207 258 195 230 192 198 210 184 227 164 242 144 259 145 284 151 277 141 293 140 299 134 297 127 273 119 270 105\nPolygon -7500403 true true -1 195 14 180 36 166 40 153 53 140 82 131 134 133 159 126 188 115 227 108 236 102 238 98 268 86 269 92 281 87 269 103 269 113\n\nx\nfalse\n0\nPolygon -7500403 true true 270 75 225 30 30 225 75 270\nPolygon -7500403 true true 30 75 75 30 270 225 225 270\n@#$#@#$#@\nNetLogo 6.2.2\n@#$#@#$#@\n@#$#@#$#@\n@#$#@#$#@\n@#$#@#$#@\n@#$#@#$#@\ndefault\n0.0\n-0.2 0 0.0 1.0\n0.0 1 1.0 0.0\n0.2 0 0.0 1.0\nlink direction\ntrue\n0\nLine -7500403 true 150 150 90 180\nLine -7500403 true 150 150 210 180\n@#$#@#$#@\n0\n@#$#@#$#@";
C = function(e) {
    return window.html_sanitize(window.markdown.toHTML(e), (function(e) {
        return /^https?:\/\//.test(e) ? e : void 0
    }), (function(e) {
        return e
    }))
}, A = function(e) {
    return e.replace(new RegExp("\x3c!---*\\s*((?:[^-]|-+[^->])*)\\s*-*--\x3e", "g"), (function(e, t) {
        return `[nlw-comment]: <> (${t.trim()})`
    }))
}, P = function(e) {
    return e.replace(new RegExp("\\[nlw-comment\\]: <> \\(([^\\)]*)\\)", "g"), (function(e, t) {
        return `\x3c!-- ${t} --\x3e`
    }))
}, S = function(e) {
    var t;
    return t = e.split(/\/|\\/), decodeURI(t[t.length - 1])
}, E = function(e) {
    return e.split(/^\@#\$#\@#\$#\@$/gm)
}, T = function(e) {
    return e.join("@#$#@#$#@")
}, R = function(e) {
    return null != e.toLocaleLowerCase().endsWith(".nlogo") ? e.slice(0, -6) : e
}, z = class {
    constructor(e, t, n) {
        this.type = e, this.fileName = t, this.nlogo = n, this._title = null
    }
    setModelTitle(e) {
        return this._title = e
    }
    getModelTitle() {
        return null != this._title ? this._title : R(this.fileName)
    }
    getWipKey() {
        return "dummy"
    }
}, B = class extends z {
    constructor(e, t) {
        var n, i;
        super("url", S(e), t), this.url = decodeURI(e), [this.host, this.path] = this.url.startsWith("http:") || this.url.startsWith("https:") ? [(i = new URL(this.url)).host, decodeURI(i.pathname)] : (n = this.url.startsWith("/") ? this.url : `/${this.url}`, [globalThis.location.host, n])
    }
    getWipKey() {
        return `url://${this.host}${this.path}`
    }
}, I = class extends z {
    constructor(e, t) {
        super("disk", S(e), t)
    }
    getWipKey() {
        return `disk://${this.fileName}`
    }
}, L = class extends z {
    constructor(e = X) {
        super("new", "New Model", e)
    }
    getWipKey() {
        return "new"
    }
}, M = class extends z {
    constructor(e, t) {
        super("script-element", S(e), t)
    }
    getWipKey() {
        return `script-element://${this.fileName}`
    }
}, O = class {
    constructor(e, t) {
        this.storage = e, this.storagePrefix = t
    }
    update(e) {
        this.version1(e)
    }
    version1(e) {
        var t, n, i, r, o, s, a, l, d;
        "url" === e.type && (d = `${this.storagePrefix}${e.getWipKey()}`, this.storage.hasKey(d) || (t = e.host, r = e.path, n = e.host === globalThis.location.host, o = ["http://", "https://"].map((e => `${this.storagePrefix}${e}${t}${r}`)), n && o.push(`${this.storagePrefix}${r}`), l = o.filter((e => this.storage.hasKey(e))), 0 !== l.length && (a = 1 === l.length ? l[0] : (i = l.sort(((e, t) => this.storage.get(e).timeStamp - this.storage.get(t).timeStamp))[0], console.log("Found multiple existing v1 WIP URL keys for a model, updating for v2.", d, e), console.log("Possible keys checked:", o), console.log("Existing v1 keys found:", l), console.log("Chosen v1 key to use as v2 based on time stamps:", i), i), s = this.storage.get(a), this.store(d, s.nlogo, s.title), l.forEach((e => {
            var t;
            return t = this.storage.get(e), this.storage.remove(e), this.storage.set(`__v1_backup:${e}`, t)
        })))))
    }
    store(e, t, n) {
        var i;
        i = {
            version: 2,
            title: n,
            timeStamp: Date.now(),
            nlogo: t
        }, this.storage.set(e, i)
    }
}, N = class {
    constructor(e, t) {
        this.storage = e, this.storagePrefix = null != t && "" !== t.trim() ? `${t}:` : "", this._nlogoSource = null, this._data = new O(this.storage, this.storagePrefix), this.session = null, this.reverted = null
    }
    getNlogoSource() {
        return this._nlogoSource
    }
    setNlogoSource(e) {
        return this._data.update(e), this._nlogoSource = e
    }
    getWipKey() {
        return `${this.storagePrefix}${this.getNlogoSource().getWipKey()}`
    }
    setSession(e) {
        var t;
        this.session = e, null != this.reverted ? this.session.widgetController.ractive.set("workInProgressState", "enabled-with-reversion") : (t = this.getWipKey(), this.notifyOfWorkInProgress(this.storage.hasKey(t)))
    }
    getCurrentNlogo() {
        return this.session.getNlogo()
    }
    getModelTitle() {
        return this.session.modelTitle()
    }
    notifyOfWorkInProgress(e) {
        var t;
        t = e ? "enabled-with-wip" : "enabled-and-empty", this.session.widgetController.ractive.set("workInProgressState", t)
    }
    getWip() {
        var e, t;
        return t = this.getWipKey(), null != (e = this.storage.get(t)) ? e : null
    }
    revertWip() {
        var e;
        e = this.getWipKey(), this.reverted = this.storage.get(e), this.storage.remove(e)
    }
    undoRevert() {
        var e;
        e = this.getWipKey(), this.storage.set(e, this.reverted), this.reverted = null
    }
    _storeWipInfo(e, t, n) {
        this._data.store(e, t, n), this.notifyOfWorkInProgress(!0)
    }
    _removeWipInfo(e) {
        this.storage.remove(e), this.notifyOfWorkInProgress(!1)
    }
    _setWip(e) {
        var t, n, i;
        this.reverted = null, i = this.getWipKey(), n = this.getModelTitle(), e === (t = this.getNlogoSource()).nlogo && `${n}.nlogo` === t.fileName ? this._removeWipInfo(i) : (t.setModelTitle(n), this._storeWipInfo(i, e, n))
    }
    _maybeSetWip() {
        var e, t;
        try {
            (t = this.getCurrentNlogo()).success && this._setWip(t.result)
        } catch (t) {
            e = t, console.log("Unable to set work in progress, `getCurrentNlogo()` or `_setWip()` failed.", e)
        }
    }
    _updateForFileExport(e, t) {
        var n;
        n = new I(e, t), ["disk", "new"].includes(this.getNlogoSource().type) && (this.setNlogoSource(n), this._setWip(t))
    }
    _filterCompileErrors(e) {
        ["recompile"].includes(e.source) && this._maybeSetWip()
    }
    "recompile-complete"() {
        return this._maybeSetWip()
    }
    "compiler-error"(e, t) {
        return this._filterCompileErrors(t)
    }
    "new-widget-finalized"() {
        return this._maybeSetWip()
    }
    "widget-updated"() {
        return this._maybeSetWip()
    }
    "widget-deleted"() {
        return this._maybeSetWip()
    }
    "widget-moved"() {
        return this._maybeSetWip()
    }
    "info-updated"() {
        return this._maybeSetWip()
    }
    "title-changed"() {
        return this._maybeSetWip()
    }
    "nlogo-exported"(e, {
        fileName: t,
        nlogo: n
    }) {
        return this._updateForFileExport(t, n)
    }
}, q = ["ask-concurrent", "beep", "display", "export-interface", "file-close", "file-close-all", "file-delete", "file-flush", "file-open", "file-print", "file-show", "file-type", "file-write", "hubnet-broadcast", "hubnet-broadcast-clear-output", "hubnet-broadcast-message", "hubnet-clear-override", "hubnet-clear-overrides", "hubnet-kick-all-clients", "hubnet-kick-client", "hubnet-fetch-message", "hubnet-reset", "hubnet-reset-perspective", "hubnet-send", "hubnet-send-clear-output", "hubnet-send-follow", "hubnet-send-message", "hubnet-send-override", "hubnet-send-watch", "inspect", "no-display", "set-current-directory", "file-at-end\\?", "file-exists\\?", "file-read", "file-read-characters", "file-read-line", "hubnet-clients-list", "hubnet-enter-message\\?", "hubnet-exit-message\\?", "hubnet-message", "hubnet-message-source", "hubnet-message-tag", "hubnet-message-waiting\\?", "movie-status", "user-directory", "user-file", "user-new-file", "user-one-of"];
var Y, K, G, Z, J, Q, ee, te, ne, ie, re, oe, se, ae, le, de, ce, ue, he, pe, fe, ge = {
    all: [].concat(U = ["__apply", "__bench", "__change-topology", "__done", "__experimentstepend", "__export-drawing", "__foreverbuttonend", "__ignore", "__let", "__linkcode", "__make-preview", "__mkdir", "__observercode", "__patchcode", "__plot-pen-hide", "__plot-pen-show", "__pwd", "__reload-extensions", "__set-line-thickness", "__stderr", "__stdout", "__thunk-did-finish", "__turtlecode", "ask", "ask-concurrent", "auto-plot-off", "auto-plot-on", "back", "beep", "bk", "ca", "carefully", "cd", "clear-all", "clear-all-plots", "clear-drawing", "clear-globals", "clear-links", "clear-output", "clear-patches", "clear-plot", "clear-ticks", "clear-turtles", "cp", "create-link-from", "create-link-to", "create-link-with", "create-links-from", "create-links-to", "create-links-with", "create-ordered-turtles", "create-temporary-plot-pen", "create-turtles", "cro", "crt", "ct", "die", "diffuse", "diffuse4", "display", "downhill", "downhill4", "error", "every", "export-all-plots", "export-interface", "export-output", "export-plot", "export-view", "export-world", "face", "facexy", "fd", "file-close", "file-close-all", "file-delete", "file-flush", "file-open", "file-print", "file-show", "file-type", "file-write", "follow", "follow-me", "foreach", "forward", "hatch", "hide-link", "hide-turtle", "histogram", "home", "ht", "hubnet-broadcast", "hubnet-broadcast-clear-output", "hubnet-broadcast-message", "hubnet-clear-override", "hubnet-clear-overrides", "hubnet-kick-all-clients", "hubnet-kick-client", "hubnet-fetch-message", "hubnet-reset", "hubnet-reset-perspective", "hubnet-send", "hubnet-send-clear-output", "hubnet-send-follow", "hubnet-send-message", "hubnet-send-override", "hubnet-send-watch", "if", "if-else", "ifelse", "import-drawing", "import-pcolors", "import-pcolors-rgb", "import-world", "inspect", "jump", "layout-circle", "layout-radial", "layout-spring", "layout-tutte", "left", "let", "loop", "lt", "move-to", "no-display", "output-print", "output-show", "output-type", "output-write", "pd", "pe", "pen-down", "pen-erase", "pen-up", "pendown", "penup", "plot", "plot-pen-down", "plot-pen-reset", "plot-pen-up", "plotxy", "print", "pu", "random-seed", "repeat", "report", "reset-perspective", "reset-ticks", "reset-timer", "resize-world", "ride", "ride-me", "right", "rp", "rt", "run", "set", "set-current-directory", "set-current-plot", "set-current-plot-pen", "set-default-shape", "set-histogram-num-bars", "set-patch-size", "set-plot-background-color", "set-plot-pen-color", "set-plot-pen-interval", "set-plot-pen-mode", "set-plot-x-range", "set-plot-y-range", "setup-plots", "setxy", "show", "show-link", "show-turtle", "sprout", "st", "stamp", "stamp-erase", "stop", "stop-inspecting", "stop-inspecting-dead-agents", "tick", "tick-advance", "tie", "type", "untie", "update-plots", "uphill", "uphill4", "user-message", "wait", "watch", "watch-me", "while", "with-local-randomness", "without-interruption", "write"], D = ["TRUE", "FALSE", "NOBODY", "E", "PI", "gray", "grey", "red", "orange", "brown", "yellow", "green", "lime", "turquoise", "cyan", "sky", "blue", "violet", "magenta", "pink", "black", "white"], V = ["BREED", "TO", "TO-REPORT", "END", "GLOBALS", "TURTLES-OWN", "LINKS-OWN", "PATCHES-OWN", "DIRECTED-LINK-BREED", "UNDIRECTED-LINK-BREED", "EXTENSIONS", "__INCLUDES"], W = ["END1", "END2", "COLOR", "LABEL", "LABEL-COLOR", "HIDDEN\\?", "BREED", "THICKNESS", "SHAPE", "TIE-MODE"], F = ["PXCOR", "PYCOR", "PCOLOR", "PLABEL", "PLABEL-COLOR"], j = ["!=", "\\*", "\\+", "-", "/", "<", "<=", "=", ">", ">=", "\\^", "__apply-result", "__boom", "__check-syntax", "__dump", "__dump-extension-prims", "__dump-extensions", "__dump1", "__hubnet-in-q-size", "__hubnet-out-q-size", "__nano-time", "__patchcol", "__patchrow", "__processors", "__random-state", "__stack-trace", "__to-string", "abs", "acos", "all\\?", "and", "any\\?", "approximate-hsb", "approximate-rgb", "asin", "at-points", "atan", "autoplot\\?", "base-colors", "behaviorspace-experiment-name", "behaviorspace-run-number", "bf", "bl", "both-ends", "but-first", "but-last", "butfirst", "butlast", "can-move\\?", "ceiling", "cos", "count", "date-and-time", "distance", "distance-nowrap", "distancexy", "distancexy-nowrap", "dx", "dy", "empty\\?", "end1", "end2", "error-message", "exp", "extract-hsb", "extract-rgb", "file-at-end\\?", "file-exists\\?", "file-read", "file-read-characters", "file-read-line", "filter", "first", "floor", "fput", "hsb", "hubnet-clients-list", "hubnet-enter-message\\?", "hubnet-exit-message\\?", "hubnet-message", "hubnet-message-source", "hubnet-message-tag", "hubnet-message-waiting\\?", "ifelse-value", "in-cone", "in-cone-nowrap", "in-link-from", "in-link-neighbor\\?", "in-link-neighbors", "in-radius", "in-radius-nowrap", "insert-item", "int", "is-agent\\?", "is-agentset\\?", "is-anonymous-command\\?", "is-anonymous-reporter\\?", "is-boolean\\?", "is-command-task\\?", "is-directed-link\\?", "is-link-set\\?", "is-link\\?", "is-list\\?", "is-number\\?", "is-patch-set\\?", "is-patch\\?", "is-reporter-task\\?", "is-string\\?", "is-turtle-set\\?", "is-turtle\\?", "is-undirected-link\\?", "item", "last", "length", "link", "link-heading", "link-length", "link-neighbor\\?", "link-neighbors", "link-set", "link-shapes", "link-with", "links", "list", "ln", "log", "lput", "map", "max", "max-n-of", "max-one-of", "max-pxcor", "max-pycor", "mean", "median", "member\\?", "min", "min-n-of", "min-one-of", "min-pxcor", "min-pycor", "mod", "modes", "mouse-down\\?", "mouse-inside\\?", "mouse-xcor", "mouse-ycor", "movie-status", "my-in-links", "my-links", "my-out-links", "myself", "n-of", "n-values", "neighbors", "neighbors4", "netlogo-applet\\?", "netlogo-version", "netlogo-web\\?", "new-seed", "no-links", "no-patches", "no-turtles", "not", "of", "one-of", "or", "other", "other-end", "out-link-neighbor\\?", "out-link-neighbors", "out-link-to", "patch", "patch-ahead", "patch-at", "patch-at-heading-and-distance", "patch-here", "patch-left-and-ahead", "patch-right-and-ahead", "patch-set", "patch-size", "patches", "plot-name", "plot-pen-exists\\?", "plot-x-max", "plot-x-min", "plot-y-max", "plot-y-min", "position", "precision", "random", "random-exponential", "random-float", "random-gamma", "random-normal", "random-or-random-float", "random-poisson", "random-pxcor", "random-pycor", "random-xcor", "random-ycor", "range", "read-from-string", "reduce", "remainder", "remove", "remove-duplicates", "remove-item", "replace-item", "reverse", "rgb", "round", "run-result", "runresult", "scale-color", "se", "self", "sentence", "shade-of\\?", "shapes", "shuffle", "sin", "sort", "sort-by", "sort-on", "sqrt", "standard-deviation", "subject", "sublist", "substring", "subtract-headings", "sum", "tan", "task", "ticks", "timer", "towards", "towards-nowrap", "towardsxy", "towardsxy-nowrap", "turtle", "turtle-set", "turtles", "turtles-at", "turtles-here", "turtles-on", "user-directory", "user-file", "user-input", "user-new-file", "user-one-of", "user-yes-or-no\\?", "value-from", "values-from", "variance", "with", "with-max", "with-min", "word", "world-height", "world-width", "wrap-color", "xor"], H = ["WHO", "COLOR", "HEADING", "XCOR", "YCOR", "SHAPE", "LABEL", "LABEL-COLOR", "BREED", "HIDDEN\\?", "SIZE", "PEN-SIZE", "PEN-MODE"]).map((function(e) {
        return e.toLowerCase()
    })),
    commands: U,
    constants: D,
    directives: V,
    linkVars: W,
    patchVars: F,
    reporters: j,
    turtleVars: H,
    unsupported: q
};
({
    commands: G,
    constants: Q,
    directives: ee,
    linkVars: te,
    patchVars: re,
    reporters: oe,
    turtleVars: se
} = ge), le = /[^\s\[\(\]\)]/.source, de = `(?=${/[\s\[\(\]\)]/.source}|$)`, ce = function(e) {
    return new RegExp(`${e}${de}`, "i")
}, Z = {
    token: "comment",
    regex: /;.*/
}, J = {
    token: "constant",
    regex: (ne = function(e) {
        return ce(`(?:${e.join("|")})`)
    })(Q)
}, ie = {
    regex: /[\[\(]/,
    indent: !0
}, K = {
    regex: /[\]\)]/,
    dedent: !0
}, ae = {
    token: "variable",
    regex: new RegExp(le + "+")
}, Y = [].concat(oe, se, re, te).reverse(), CodeMirror.defineSimpleMode("netlogo", {
    start: [{
        token: "keyword",
        regex: ce("to(?:-report)?"),
        indent: !0
    }, {
        token: "keyword",
        regex: ce("end"),
        dedent: !0
    }, {
        token: "keyword",
        regex: ne(ee)
    }, {
        token: "keyword",
        regex: ce(`${le}*-own`)
    }, {
        token: "command",
        regex: ne(G.reverse())
    }, {
        token: "reporter",
        regex: ne(Y)
    }, {
        token: "string",
        regex: /"(?:[^\\]|\\.)*?"/
    }, {
        token: "number",
        regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i
    }, J, Z, ie, K, ae],
    meta: {
        electricChars: "dD])\n",
        lineComment: ";"
    }
}), ({
    isSomething: he,
    toArray: fe
} = tortoise_require("brazier/maybe")), ue = class e {
    constructor(e, t) {
        var n, i;
        this.findConsole = function() {
            return null
        }, i = (e, t) => this.isLinkableProcedure(e, t), n = (e, t) => this.isKnownProcedure(e, t), this._ractive = new Ractive({
            el: e,
            template: pe,
            data: {
                isActive: !1,
                isDismissable: !0,
                isStandalone: t,
                message: void 0,
                title: void 0,
                frames: void 0
            },
            on: {
                show: function(e, t, n, i) {
                    this.get("isActive") ? (this.set("title", `${this.get("title")} / ${t}`), this.set("message", `${this.get("message")}<br/><br/>Next message: ${n}`)) : (this.set("title", t), this.set("message", n), this.set("frames", i), this.set("isActive", !0))
                },
                hide: function() {
                    this.set("isDismissable", !0), this.set("isActive", !1)
                },
                "*.copy-message": function(e) {
                    var t;
                    t = this.find("#alert-message"), navigator.clipboard.writeText(null != t ? t.innerText : void 0)
                }
            },
            isLinkableProcedure: i,
            isKnownProcedure: n
        })
    }
    static makeRemoteLoadErrorMessage(e) {
        return `Unable to load NetLogo model from ${e}, please ensure:\n<ul>\n  <li>That you can download the resource <a target="_blank" href="${e}">at the link given for it.</a></li>\n  <li>That the server containing the resource has\n    <a target="_blank" href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing">\n      Cross-Origin Resource Sharing\n    </a>\n    configured appropriately</li>\n</ul>\nIf you have followed the above steps and are still seeing this error,\nplease send an email to our <a href="mailto:bugs@ccl.northwestern.edu">"bugs" mailing list</a>\nwith the following information:\n<ul>\n  <li>The full URL of this page (copy and paste from address bar)</li>\n  <li>Your operating system and browser version</li>\n</ul>`
    }
    static makeCompilerErrorMessage(e) {
        var t;
        return t = function(e, t) {
            return e.indexOf(t) > -1
        }, e.map((function(e) {
            return "string" == typeof e ? e : null != e.message && (t(e.message, "Couldn't find corresponding reader") || t(e.message, "Models must have 12 sections")) ? ("https://netlogoweb.org/docs/faq#model-format-error", `${e.message} (see <a href='https://netlogoweb.org/docs/faq#model-format-error'>here</a> for more information)`) : null != e.lineNumber ? `(Line ${e.lineNumber}) ${e.message}` : e.message
        }))
    }
    static makeBareFrameError(e) {
        switch (e.type) {
            case "command":
                return `called by command ${e.name.toUpperCase()}`;
            case "reporter":
                return `called by reporter ${e.name.toUpperCase()}`;
            case "plot":
                return `called by plot ${e.name}`;
            default:
                return "called by unknown"
        }
    }
    static makeBareRuntimeErrorMessage(e, t, n, i, r) {
        var o;
        return `${e}\nerror while running ${""===t?"a primitive":t.toUpperCase()}${he(n)?(o=fe(n)[0],` on line ${r.slice(0,o).split("\n").length}`):""}`
    }
    static makeButtonRuntimeErrorMessage(e, t, n) {
        return `${e}\nerror while running ${""===t?"a primitive":t.toUpperCase()} in button "${n}"`
    }
    static makeLinkedRuntimeErrorMessage(e, t, n, i) {
        var r;
        return r = "" === t ? "a primitive" : t.toUpperCase(), `${e}\nerror while running ${he(n)&&he(i)?`<a href='/ignore' onclick='${`this.parentElement._ractive.proxy.ractive.fire("jump-to-code", ${fe(n)[0]}, ${fe(i)[0]}); return false;`}'>${r}</a>`:r}`
    }
    static makeTypeErrorMessage(e) {
        return `A type error has occurred in the simulation engine.\nMore information about these sorts of errors can be found\n<a href="https://netlogoweb.org/docs/faq#type-errors">here</a>.<br><br>\nAdvanced users might find the generated error helpful, which is as follows:<br><br>\n<b>${e}</b><br><br>`
    }
    static makeProtocolErrorMessage(e, t, n) {
        return `<p>The linked model protocol is insecure (HTTP) but the NetLogo Web page is secure (HTTPS),\nso the model cannot be loaded as specified.</p>\n<p>You can try to load the model securely by changing to the below link, but it assumes the default\nsecure port for the model's host, which may not be correct.</p>\n<p>Original model link: ${e}</p>\n<p>New model link to try: ${null==n?t:`<a href="${n}">${t}</a>`}</p>\n<ul>`
    }
    setWidgetController(e) {
        this.findConsole = function() {
            return e.ractive.findComponent("console")
        }, this._ractive.off("jump-to-procedure"), this._ractive.on("jump-to-procedure", (function(t, n) {
            return this.fire("hide"), e.jumpToProcedure(n), !1
        })), this._ractive.off("jump-to-code"), this._ractive.on("jump-to-code", (function(t, n, i) {
            return this.fire("hide"), e.jumpToCode(n, i), !1
        }))
    }
    "extension-error"(e, {
        messages: t
    }) {
        this.reportError(t.join("<br/>"))
    }
    "runtime-error"(t, {
        source: n,
        exception: i,
        code: r
    }) {
        var o, s, a, l, d;
        if (i instanceof Exception.HaltInterrupt) throw new Error("`HaltInterrupt` should be handled and should not be reported to users.");
        "console" === n ? (o = i instanceof Exception.RuntimeException ? (d = e.makeBareRuntimeErrorMessage(i.message, i.primitive, i.sourceStart, i.sourceEnd, r), "" === (l = i.stackTrace.map(e.makeBareFrameError).join("\n")) ? d : `${d}\n${l}`) : i instanceof TypeError ? e.makeTypeErrorMessage(i.message) : i.message, this.reportConsoleError(o)) : "button" === n && i instanceof Exception.RuntimeException && null != r ? (o = i instanceof Exception.RuntimeException ? e.makeButtonRuntimeErrorMessage(i.message, i.primitive, r) : void 0, this.reportError(o, null != (s = i.stackTrace) ? s : [])) : (o = i instanceof Exception.RuntimeException ? e.makeLinkedRuntimeErrorMessage(i.message, i.primitive, i.sourceStart, i.sourceEnd) : i instanceof TypeError ? e.makeTypeErrorMessage(i.message) : i.message, this.reportError(o, null != (a = i.stackTrace) ? a : []))
    }
    "compiler-error"(t, {
        source: n,
        errors: i
    }) {
        var r;
        switch (n) {
            case "load-from-url":
                r = e.makeRemoteLoadErrorMessage(i[0]), this._ractive.set("isDismissable", !1), this.reportError(r);
                break;
            case "console":
                r = e.makeCompilerErrorMessage(i).join("\n"), this.reportConsoleError(r);
                break;
            default:
                r = e.makeCompilerErrorMessage(i).join("<br/>"), "compile-fatal" === n && this._ractive.set("isDismissable", !1), this.reportError(r)
        }
    }
    reportProtocolError(t, n, i) {
        var r;
        return r = e.makeProtocolErrorMessage(t, n, i), this._ractive.set("isDismissable", !1), this.reportError(r)
    }
    hide() {
        this._ractive.fire("hide")
    }
    reportError(e, t = []) {
        this.show("Error", e, t)
    }
    reportConsoleError(e) {
        var t;
        null != (t = this.findConsole()) && (e = e.replace("\n", " "), t.appendText(`ERROR: ${e}\n`))
    }
    "notify-user"(e, {
        message: t
    }) {
        this.reportNotification(t)
    }
    reportNotification(e) {
        this.show("NetLogo Notification", e, [])
    }
    show(e, t, n) {
        this._ractive.fire("show", e, t, n)
    }
    isLinkableProcedure(e, t) {
        return ["command", "reporter"].includes(e)
    }
    isKnownProcedure(e, t) {
        return ["command", "reporter", "plot"].includes(e)
    }
}, pe = '<div class="dark-overlay alert-overlay"{{# !isActive}} style="display: none;"{{/}}>\n\n  {{# isActive}}\n  <div class="alert-dialog" id="alert-dialog">\n\n    <h3 id="alert-title">{{ title }}</h3>\n\n    <div id="alert-message" class="alert-text">\n      {{{message}}}<br/>\n      {{#each frames }}\n\n        {{#if @.isLinkableProcedure(type, name) }}\n          called by {{type}} <a href="/ignore" on-click=[\'jump-to-procedure\', name]>{{ name.toUpperCase() }}</a><br/>\n\n        {{elseif @.isKnownProcedure(type, name) }}\n          called by {{type}} {{name}}<br/>\n\n        {{else}}\n          called by unknown<br/>\n\n        {{/if}}\n      {{/each}}\n    </div>\n\n    {{# isStandalone }}\n    <div class="alert-text standalone-text">\n      It looks like you\'re using NetLogo Web in standalone mode.\n      <br/>\n      If the above error is being caused by an unimplemented primitive, we recommend a quick visit to\n      <a href="https://netlogoweb.org" target="_blank">NetLogoWeb.org</a>\n      to see if the primitive has been implemented in the most up-to-date version.\n    </div>\n    {{/ isStandalone }}\n\n    <div id="alert-dismiss-container">\n      <input id="alert-copy" type="button" class="alert-button" on-click="copy-message" value="Copy Message to Clipboard" />\n      {{# isDismissable }}\n      <input id="alert-dismiss" type="button" class="alert-button alert-separator-top" on-click="hide" value="Dismiss" />\n      {{/ isDismissable }}\n    </div>\n\n  </div>\n  {{/ isActive }}\n\n</div>';
var me, ve, we, ye = ue;
we = function(e, t) {
    var n;
    return n = Number.parseFloat(e), Number.isNaN(n) ? t : n
}, ve = function(e, t, n) {
    return Math.max(e, Math.min(t, n))
}, me = function() {
    class e {
        applyStorage(e) {
            e.hasKey("locale") && (this.locale = e.get("locale")), e.hasKey("useVerticalLayout") && (this.useVerticalLayout = e.get("useVerticalLayout")), e.hasKey("workInProgress.enabled") && (this.workInProgress.enabled = e.get("workInProgress.enabled"))
        }
        applyQueryParams(e) {
            var t;
            e.has("locale") && (this.locale = e.get("locale").replace("-", "_").toLowerCase()), e.has("tabs") && (this.useVerticalLayout = !("right" === e.get("tabs"))), e.has("speed") && (t = e.get("speed"), this.speed = ve(-1, 1, we(t, 0))), this.workInProgress.enabled = !e.has("disableWorkInProgress") && this.workInProgress.enabled, e.has("storageTag") && (this.workInProgress.storageTag = e.get("storageTag")), this.events.enableDebug = e.has("debugEvents") || this.events.enableDebug, this.events.enableIframeRelay = e.has("relayIframeEvents") || this.events.enableIframeRelay, e.has("relayIframeEvents") && (this.events.iframeRelayEvents = e.get("relayIframeEvents")), e.has("relayIframeEventsTag") && (this.events.iframeRelayEventsTag = e.get("relayIframeEventsTag")), this.queries.enableDebug = e.has("debugQueries") || this.queries.enableDebug
        }
    }
    return e.prototype.locale = "en_us", e.prototype.useVerticalLayout = !0, e.prototype.speed = 0, e.prototype.workInProgress = {
        enabled: !0,
        storageTag: ""
    }, e.prototype.events = {
        enableDebug: !1,
        enableIframeRelay: !1,
        iframeRelayEvents: "",
        iframeRelayEventsTag: ""
    }, e.prototype.queries = {
        enableDebug: !1
    }, e
}.call(this);
var be, xe, ke, _e, Ce, Ee = me;
be = function(e) {
    var t;
    return (t = new k("netLogoWebSettings", e)).hasKey("version") && t.get("version") > 1 && ("Unable to read settings, somehow the stored version is higher than the latest format version?", console.error("Unable to read settings, somehow the stored version is higher than the latest format version?", t.inProgress, 1)), t.set("version", 1), t
}, Ce = function(e, t, n) {
    var i, r, o, s, a, l, d, c, u, h, p, f, g, m, v;
    return ({
        experimentName: r,
        parameterSet: h,
        repetitionsPerCombo: p,
        metrics: c,
        setup: g,
        go: a,
        stopCondition: m,
        iterationLimit: l
    } = e), h = function() {
        switch (h.type) {
            case "discreteCombos":
                return h.combos;
            case "cartesianProduct":
                return _e(h.variables);
            default:
                throw new Exception(`Unknown parameter set type: ${type}`)
        }
    }(), o = function(e) {
        return [].concat(...e)
    }(function() {
        var e, t, n;
        for (n = [], e = 0, t = h.length; e < t; e++) i = h[e], n.push(function() {
            var e, t, n;
            for (n = [], e = 1, t = p; 1 <= t ? e <= t : e >= t; 1 <= t ? e++ : e--) n.push(i);
            return n
        }());
        return n
    }()), window.Meta.behaviorSpaceName = null != r ? r : "BabyBehaviorSpace", window.Meta.behaviorSpaceRun = 0, s = function() {
        var e, i, r;
        for (r = [], e = 0, i = o.length; e < i; e++) {
            for (d in u = o[e]) v = u[d], t(d, v);
            f = ke(g, a, m, l, c, n), window.Meta.behaviorSpaceRun = window.Meta.behaviorSpaceRun + 1, r.push({
                config: u,
                results: f
            })
        }
        return r
    }(), window.Meta.behaviorSpaceName = "", window.Meta.behaviorSpaceRun = 0, s
}, xe = function(e) {
    return e.reduce((function(e, t) {
        var n;
        return n = e.map((function(e) {
            return t.map((function(t) {
                return e.concat(t)
            }))
        })), n.reduce((function(e, t) {
            return e.concat(t)
        }), [])
    }), [
        []
    ])
}, _e = function(e) {
    var t, n;
    return t = e.map((function({
        name: e,
        parameterSpace: {
            type: t,
            values: n,
            min: i,
            max: r,
            interval: o
        }
    }) {
        var s;
        return n = function() {
            var e, a, l, d;
            switch (t) {
                case "discreteValues":
                    return n;
                case "range":
                    for (d = [], s = e = i, a = r, l = o; 0 !== l && (l > 0 ? e <= a : e >= a); s = e += l) d.push(s);
                    return d;
                default:
                    throw new Exception(`Unknown parameter space type: ${t}`)
            }
        }(), n.map((function(t) {
            return {
                name: e,
                value: t
            }
        }))
    })), n = function(e, {
        name: t,
        value: n
    }) {
        return e[t] = n, e
    }, xe(t).map((function(e) {
        return e.reduce(n, {})
    }))
}, ke = function(e, t, n, i, r, o) {
    var s, a, l, d;
    for (s = 0, a = i < 1 ? -1 : i, d = {}, l = function(e) {
            var t, n, i, s;
            for (i in n = {}, r)({
                reporter: s,
                interval: t
            } = r[i]), 0 !== t && e % t != 0 || (n[i] = o(s()));
            Object.keys(n).length > 0 && (d[e] = n)
        }, e(); !n() && s < a;) l(s), t(), s++;
    return l(s), d
};
var Se, Te, Pe, Ae, Ie = Ce;
({
    fold: Te
} = tortoise_require("brazier/maybe")), ({
    DisplayMode: {
        displayModeToString: Se
    },
    PenMode: {
        penModeToBool: Ae
    }
} = tortoise_require("engine/plot/pen")), Pe = function(e, t, n, i, r) {
    var o, s, a, l, d, c, u, h, p, f, g, m, v, w, y, b, x, k, _, C;
    for (l = function(e, t) {
            return e.toUpperCase() === t.toUpperCase()
        }, o = null != (w = window.structuredClone) ? w : function(e) {
            return JSON.parse(JSON.stringify(e))
        }, ({
            currentPlotNameOrNull: a,
            plots: v
        } = o(e)), p = null != a && l(a, i) ? r : a, y = Object.fromEntries(Object.entries(n).map((function([e, t]) {
            return [t, e]
        }))), d = 0, u = t.length; d < u; d++)
        if (m = t[d], x = l(m.name, r) ? i : m.name, null != (b = v.find((function(e) {
                return l(e.name, x)
            })))) {
            for (s = m.getCurrentPenMaybe(), b.currentPenNameOrNull = Te((function() {
                    return null
                }))((function(e) {
                    return e.name
                }))(s), b.name = m.name, b.isAutoplotting = m.isAutoplotting, b.isLegendOpen = m.isLegendEnabled, c = 0, h = (g = m.getPens()).length; c < h; c++) f = g[c], _ = l(m.name, r) && null != y[f.name] ? y[f.name] : f.name, null != (k = b.pens.find((function(e) {
                return l(e.name, _)
            }))) && (k.color = f.getColor(), k.interval = f.getInterval(), k.isPenDown = Ae(f.getPenMode()), k.mode = Se(f.getDisplayMode()), k.name = f.name);
            C = g.map((function(e) {
                return e.name
            })), b.pens = b.pens.filter((function(e) {
                return C.includes(e.name)
            }))
        } return {
        currentPlotNameOrNull: p,
        plots: v
    }
};
var Le, ze, Me, Be, Re = Pe;
ze = tortoise_require("engine/plot/pen"), Me = tortoise_require("engine/plot/plotops"), Be = function(e, t) {
    return {
        chart: {
            animation: !1,
            renderTo: e,
            spacingBottom: 10,
            spacingLeft: 15,
            spacingRight: 15,
            zoomType: "xy"
        },
        boost: {
            pixelRatio: 0,
            useGPUTranslations: !0
        },
        credits: {
            enabled: !1
        },
        legend: {
            enabled: t.isLegendEnabled,
            margin: 5,
            itemStyle: {
                fontSize: "10px"
            }
        },
        series: [],
        title: {
            text: t.name,
            style: {
                fontSize: "12px"
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    height: 10,
                    symbolSize: 10,
                    symbolStrokeWidth: 1,
                    symbolY: 5
                }
            }
        },
        tooltip: {
            formatter: function() {
                var e, t;
                return e = Number(Highcharts.numberFormat(this.point.x, 2, ".", "")), t = Number(Highcharts.numberFormat(this.point.y, 2, ".", "")), `<span style='color:${this.series.color}'>${this.series.name}</span>: <b>${e}, ${t}</b><br/>`
            }
        },
        xAxis: {
            title: {
                text: t.xLabel,
                style: {
                    fontSize: "10px"
                }
            },
            labels: {
                style: {
                    fontSize: "9px"
                }
            }
        },
        yAxis: {
            title: {
                text: t.yLabel,
                x: -7,
                style: {
                    fontSize: "10px"
                }
            },
            labels: {
                padding: 0,
                x: -15,
                style: {
                    fontSize: "9px"
                }
            }
        },
        plotOptions: {
            series: {
                turboThreshold: 1
            },
            column: {
                pointPadding: 0,
                groupPadding: 0,
                shadow: !1,
                grouping: !1
            }
        }
    }
}, Le = function() {
    class e extends Me {
        constructor(e) {
            var t, n, i, r, o, s, a;
            r = function(e) {
                var t, n, i, r;
                t = this._chart.series.length, i = this._chart.addSeries({
                    color: this.colorToRGBString(e.getColor()),
                    data: [],
                    dataLabels: {
                        enabled: !1
                    },
                    name: e.name
                }), r = this.modeToString(e.getDisplayMode()), n = s.seriesTypeOptions(r, e.getInterval()), i.update(n, !1), this._penNameToSeriesNum[e.name] = t, this._needsRedraw = !0
            }, s = null, n = null, i = null, o = e => () => {
                var t;
                null != (t = s.penToSeries(e)) && t.setData([], !1), s._needsRedraw = !0, n = null, i = null
            }, a = e => t => {
                var n, i;
                n = s.colorToRGBString(t), (i = s.penToSeries(e)).options.color = n, i.update(i.options, !1), s._needsRedraw = !0
            }, super((function(e, t, n, i) {
                this._chart.xAxis[0].setExtremes(e, t, !1), this._chart.yAxis[0].setExtremes(n, i, !1), this._needsRedraw = !0
            }), (function(t) {
                this._chart.destroy(), this._chart = new Highcharts.Chart(Be(e, t)), this._penNameToSeriesNum = {}, this._needsRedraw = !0
            }), r, o, (e => (t, r) => {
                var o, a;
                a = s.penToSeries(e), o = e.getPenMode() === ze.PenMode.Down ? (null !== n && (a.addPoint(n, !1), n = null), r) : (n = [t, r], null), e.getDisplayMode() === ze.DisplayMode.Bar || (null == i ? i = t : t <= i ? 1 !== a.options.boostThreshold && (a.options.boostThreshold = 1, a.update(a.options, !1)) : i = t), a.addPoint([t, o], !1), s._needsRedraw = !0
            }), (e => t => {
                var n, i, r;
                null != (i = s.penToSeries(e)) && (r = s.modeToString(t), n = s.seriesTypeOptions(r, e.getInterval()), i.update(n, !1))
            }), a), s = this, t = {
                name: "New Plot"
            }, this._chart = new Highcharts.Chart(Be(e, t)), this._penNameToSeriesNum = {}, null == this._chart.options.exporting.buttons.contextButton.menuItems.popped && (this._chart.options.exporting.buttons.contextButton.menuItems.pop(), this._chart.options.exporting.buttons.contextButton.menuItems.pop(), this._chart.options.exporting.buttons.contextButton.menuItems.popped = !0)
        }
        dispose() {
            this._chart.destroy()
        }
        modeToString(e) {
            var t, n, i;
            switch (({
                    Bar: t,
                    Line: n,
                    Point: i
                } = ze.DisplayMode), e) {
                case t:
                    return "column";
                case n:
                    return "line";
                case i:
                    return "scatter";
                default:
                    return "line"
            }
        }
        seriesTypeOptions(e, t) {
            var n;
            return {
                boostThreshold: 0,
                marker: {
                    enabled: n = "scatter" === e,
                    radius: n ? 1 : 4
                },
                lineWidth: "line" === e ? 2 : null,
                type: e,
                pointRange: "column" === e ? t : null,
                animation: !1,
                connectNulls: !1
            }
        }
        penToSeries(e) {
            return this._chart.series[this._penNameToSeriesNum[e.name]]
        }
        redraw() {
            this._needsRedraw && (this._chart.redraw(), this._needsRedraw = !1)
        }
        resizeElem(e, t) {
            this._chart.setSize(e, t, !1)
        }
        setBGColor(e) {
            this._chart.chartBackground.css({
                color: e
            })
        }
    }
    return e.prototype._chart = void 0, e.prototype._penNameToSeriesNum = void 0, e.prototype._needsRedraw = !0, e
}.call(this);
var Oe, Ne, Ue, De, Ve, We, $e, Fe, je, He, qe, Xe, Ye, Ke, Ge = Le;
Ke = function(e, t, n, i) {
    var r, o, s, a;
    for (o = r = 0, s = t.length; r < s; o = ++r) a = t[o], Ye(e, a, o, n, i)
}, De = function(e) {
    return new Function(`return ${e}`)
}, Ye = function(e, t, n, i, r) {
    switch (t.id = n, null != t.variable && (t.variable = t.variable.toLowerCase()), t.type) {
        case "switch":
            Xe(t, t);
            break;
        case "slider":
            t.currentValue = t.default, qe(t, t);
            break;
        case "inputBox":
            Fe(t, t);
            break;
        case "button":
            We(e, i)(t, t);
            break;
        case "chooser":
            $e(t, t);
            break;
        case "monitor":
            je(t, t);
            break;
        case "plot":
            He(r)(t, t)
    }
}, Fe = function(e, t) {
    t.boxedValue = e.boxedValue, t.currentValue = t.boxedValue.value, t.variable = e.variable, t.display = t.variable
}, He = function(e) {
    return function(t, n) {
        var i, r, o;
        i = `#netlogo-${t.type}-${n.id}`, n.autoPlotOn = t.autoPlotOn, n.bottom = t.bottom, n.compilation = t.compilation, n.compiledPens = t.compiledPens, n.compiledSetupCode = t.compiledSetupCode, n.compiledUpdateCode = t.compiledUpdateCode, n.display = t.display, n.id = t.id, n.left = t.left, n.legendOn = t.legendOn, n.pens = t.pens, n.right = t.right, n.setupCode = t.setupCode, n.top = t.top, n.type = t.type, n.updateCode = t.updateCode, n.xAxis = t.xAxis, n.xmax = t.xmax, n.xmin = t.xmin, n.yAxis = t.yAxis, n.ymax = t.ymax, n.ymin = t.ymin, o = e.getPlotOps(), (r = new Ge(e.lookupElem(i))).setBGColor("#efefef"), o[t.display] = r, e.getPlotComps().find((function(e) {
            return e.get("widget").display === t.display
        })).set("resizeCallback", r.resizeElem.bind(r))
    }
}, Xe = function(e, t) {
    t.on = e.on, t.currentValue = t.on
}, $e = function(e, t) {
    t.choices = e.choices, t.currentChoice = e.currentChoice, t.currentValue = t.choices[t.currentChoice]
}, Ve = function(e, t, n, i) {
    var r;
    try {
        return n() === StopInterrupt
    } catch (n) {
        return (r = n) instanceof Exception.HaltInterrupt || t("runtime", e, r, i), !0
    }
}, Ne = function(e, t, n, i, r) {
    return function() {
        Ve("button", e, i, r) && (n.running = !1, t())
    }
}, Ue = function(e, t, n, i) {
    return function() {
        Ve("button", e, n, i), t()
    }
}, Oe = function(e, t, n) {
    return function() {
        t.running = !1, e("compiler", "button", ["Button failed to compile with:"].concat(n))
    }
}, We = function(e, t) {
    return function(n, i) {
        var r, o, s, a, l;
        n.forever && (i.running = !1), (null != (s = n.compilation) ? s.success : void 0) ? (r = null != n.display ? n.display : n.source, i.compiledSource = n.compiledSource, o = new Function(i.compiledSource), i.run = n.forever ? Ne(e, t, i, o, r) : Ue(e, t, o, r)) : i.run = Oe(e, i, null != (a = null != (l = n.compilation) ? l.messages : void 0) ? a : [])
    }
}, je = function(e, t) {
    var n;
    (null != (n = e.compilation) ? n.success : void 0) ? (t.compiledSource = e.compiledSource, t.reporter = De(t.compiledSource), t.currentValue = "") : (t.reporter = function() {
        return "N/A"
    }, t.currentValue = "N/A")
}, qe = function(e, t) {
    var n;
    t.default = e.default, t.compiledMin = e.compiledMin, t.compiledMax = e.compiledMax, t.compiledStep = e.compiledStep, (null != (n = e.compilation) ? n.success : void 0) ? (t.getMin = De(t.compiledMin), t.getMax = De(t.compiledMax), t.getStep = De(t.compiledStep)) : (t.getMin = function() {
        return t.currentValue
    }, t.getMax = function() {
        return t.currentValue
    }, t.getStep = function() {
        return .001
    }), t.minValue = t.currentValue, t.maxValue = t.currentValue + 1, t.stepValue = .001
};
var Ze, Je, Qe = Ractive.extend({
    data: function() {
        return {
            contextMenuOptions: void 0
        }
    },
    standardOptions: function(e) {
        return {
            delete: {
                text: "Delete",
                isEnabled: !0,
                action: function() {
                    var t;
                    return e.fire("hide-context-menu"), t = e.get("widget"), e.fire("unregister-widget", t.id, !1, e.getExtraNotificationArgs())
                }
            },
            edit: {
                text: "Edit",
                isEnabled: !0,
                action: function() {
                    return e.fire("edit-widget")
                }
            }
        }
    }
});
Ze = {
    dragstart: function(e, {
        original: t
    }, n, i) {
        var r, o, s, a, l;
        ({
            clientX: r,
            clientY: o,
            dataTransfer: s,
            view: l
        } = t), n(r, o) ? ((a = document.createElement("img")).src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "function" == typeof s.setDragImage && s.setDragImage(a, 0, 0), s.setData("text/plain", ""), e.view = l, e.lastUpdateMs = (new Date).getTime(), i(r, o)) : t.preventDefault()
    },
    drag: function(e, {
        original: {
            clientX: t,
            clientY: n,
            view: i
        }
    }, r) {
        var o, s, a, l, d, c;
        return null != e.view && (l = (o = function(e) {
            return null != e.parent ? o(e.parent) : e
        })(e), d = 0 !== t ? t : null != (s = l.get("lastDragX")) ? s : -1, c = 0 !== n ? n : null != (a = l.get("lastDragY")) ? a : -1, e.view === i && d > 0 && c > 0 && (new Date).getTime() - e.lastUpdateMs >= 1e3 / 60 && (e.lastUpdateMs = (new Date).getTime(), r(d, c))), !0
    },
    dragend: function(e, t) {
        var n, i;
        null != e.view && (i = (n = function(e) {
            return null != e.parent ? n(e.parent) : e
        })(e), i.set("lastDragX", void 0), i.set("lastDragY", void 0), e.view = void 0, e.lastUpdateMs = void 0, t())
    }
}, Je = Qe.extend({
    lastUpdateMs: void 0,
    startLeft: void 0,
    startRight: void 0,
    startTop: void 0,
    startBottom: void 0,
    view: void 0,
    data: function() {
        return {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0
        }
    },
    nudge: function(e) {
        switch (e) {
            case "up":
                if (this.get("top") > 0) return this.set("top", this.get("top") - 1), this.set("bottom", this.get("bottom") - 1);
                break;
            case "down":
                return this.set("top", this.get("top") + 1), this.set("bottom", this.get("bottom") + 1);
            case "left":
                if (this.get("left") > 0) return this.set("left", this.get("left") - 1), this.set("right", this.get("right") - 1);
                break;
            case "right":
                return this.set("left", this.get("left") + 1), this.set("right", this.get("right") + 1);
            default:
                return console.log(`'${e}' is an impossible direction for nudging...`)
        }
    },
    on: {
        "start-widget-drag": function(e) {
            return Ze.dragstart(this, e, (function() {
                return !0
            }), ((t, n) => (this.fire("select-component", e.component), this.startLeft = this.get("left") - t, this.startRight = this.get("right") - t, this.startTop = this.get("top") - n, this.startBottom = this.get("bottom") - n)))
        },
        "drag-widget": function(e) {
            var t, n;
            return t = window.navigator.platform.startsWith("Mac"), n = !t && !e.original.ctrlKey || t && !e.original.metaKey, Ze.drag(this, e, ((e, t) => {
                var i, r, o, s, a;
                return i = function(e) {
                    return e - 5 * Math.round(e / 5)
                }, s = n ? i(this.startLeft + e) : 0, a = n ? i(this.startTop + t) : 0, r = this.startLeft + e - s, o = this.startTop + t - a, r < 0 ? (this.set("left", 0), this.set("right", this.startRight - this.startLeft)) : (this.set("left", r), this.set("right", this.startRight + e - s)), o < 0 ? (this.set("top", 0), this.set("bottom", this.startBottom - this.startTop)) : (this.set("top", o), this.set("bottom", this.startBottom + t - a))
            }))
        },
        "stop-widget-drag": function() {
            return Ze.dragend(this, (() => (this.startLeft = void 0, this.startRight = void 0, this.startTop = void 0, this.startBottom = void 0)))
        }
    }
});
var et, tt, nt = [].splice;
tt = {
    recompileForPlot: function(e, t, n) {
        return {
            run: function(i, r) {
                return i.fire("recompile-for-plot", "system", e, t, n)
            },
            type: "recompile-for-plot"
        }
    },
    recompile: function() {
        return {
            run: function(e, t) {
                return e.fire("recompile", "system")
            },
            type: "recompile"
        }
    },
    redrawView: function() {
        return {
            run: function(e, t) {
                return e.fire("redraw-view")
            },
            type: "redrawView"
        }
    },
    refreshChooser: function() {
        return {
            run: function(e, t) {
                return e.fire("refresh-chooser", "ignore", t)
            },
            type: "refreshChooser"
        }
    },
    rename: function(e, t) {
        return {
            run: function(n, i) {
                return n.fire("rename-interface-global", e, t, i.currentValue)
            },
            type: `rename:${e},${t}`
        }
    },
    resizePatches: function() {
        return {
            run: function(e, t) {
                return e.fire("set-patch-size", t.dimensions.patchSize)
            },
            type: "resizePatches"
        }
    },
    resizeView: function() {
        return {
            run: function(e, t) {
                return e.fire("resize-view")
            },
            type: "resizeView"
        }
    },
    updateEngineValue: function() {
        return {
            run: function(e, t) {
                return world.observer.setGlobal(t.variable, t.currentValue)
            },
            type: "updateCurrentValue"
        }
    },
    updateTopology: function() {
        return {
            run: function(e, t) {
                return e.fire("update-topology")
            },
            type: "updateTopology"
        }
    }
}, et = Je.extend({
    _weg: tt,
    data: function() {
        return {
            id: void 0,
            isEditing: void 0,
            isSelected: void 0,
            resizeDirs: ["left", "right", "top", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"],
            widget: void 0
        }
    },
    components: {
        editForm: void 0
    },
    computed: {
        classes: function() {
            return `${this.get("isEditing")?"interface-unlocked":""}\n${this.get("isSelected")?"selected":""}`
        },
        dims: function() {
            return `position: absolute;\nleft: ${this.get("left")}px; top: ${this.get("top")}px;\nwidth: ${this.get("right")-this.get("left")}px; height: ${this.get("bottom")-this.get("top")}px;`
        }
    },
    notifyWidgetMoved: function() {
        var e;
        e = this.get("widget"), this.fire("widget-moved", e.id, e.type, e.top, e.bottom, e.left, e.right)
    },
    nudge: function(e) {
        this._super(e), this.notifyWidgetMoved()
    },
    handleResize: function({
        left: e,
        right: t,
        top: n,
        bottom: i
    }) {
        this.set("widget.left", e), this.set("widget.right", t), this.set("widget.top", n), this.set("widget.bottom", i)
    },
    handleResizeEnd: function() {
        this.notifyWidgetMoved()
    },
    getExtraNotificationArgs: function(e) {
        return []
    },
    on: {
        "edit-widget": function() {
            !0 !== this.get("isNotEditable") && (this.fire("hide-context-menu"), this.findComponent("editForm").fire("show-yourself"))
        },
        init: function() {
            var e;
            null != (e = this.findComponent("editForm")) && e.fire("activate-cloaking-device")
        },
        "initialize-widget": function() {
            return this.findComponent("editForm").fire("prove-your-worth"), !1
        },
        "*.has-been-proven-unworthy": function() {
            return this.fire("unregister-widget", this.get("widget").id, !0)
        },
        "*.update-widget-value": function(e, t, n) {
            var i, r, o, s, a, l, d, c, u, h, p, f, g, m, v, w, y, b, x, k, _, C, E, S, T, P;
            d = function(e) {
                return function(t) {
                    return t.split(".").reduce((function(e, t) {
                        return e[t]
                    }), e)
                }
            }, k = function(e) {
                return function(t) {
                    return function(n) {
                        var i, r, o;
                        return o = t.split("."), [...r] = o, [i] = nt.call(r, -1), r.reduce((function(e, t) {
                            return e[t]
                        }), e)[i] = n
                    }
                }
            };
            try {
                if (l = t.__extras, delete t.__extras, T = this.get("widget"), P = Object.values(this.parent.get("widgetObj")), u = function(e) {
                        return e.variable === t.variable && e.type !== T.type
                    }, null != t.variable && P.some(u)) return this.fire("reject-duplicate-var", t.variable);
                for (h in x = function(e, t) {
                        return t.reduce((function(t, n) {
                            return t[n] = d(e)(n), t
                        }), {})
                    }, C = this.eventTriggers(), _ = Object.keys(C), y = x(T, _), t) S = t[h], k(T)(h)(S);
                for (m = x(T, _), o = function() {
                        var e, t, n;
                        for (n = [], e = 0, t = _.length; e < t; e++) f = _[e], m[f] !== y[f] && n.push(C[f].map((function(e) {
                            return e(y[f], m[f])
                        })));
                        return n
                    }(), a = (null != l ? l.recompileForPlot : void 0) ? [tt.recompileForPlot()] : [], E = [].concat(a, ...o).reduce((function(e, t) {
                        return null == e.find((function(e) {
                            return e.type === t.type
                        })) ? e.concat([t]) : e
                    }), []), c = 0, p = E.length; c < p; c++)("recompile-for-plot" === (r = E[c]).type ? (w = (i = this.findComponent("editForm")).getOldName(), g = T.display, b = i.getRenamings(), tt.recompileForPlot(w, g, b)) : r).run(this, T);
                return v = n ? "new-widget-finalized" : "widget-updated", this.fire(v, T.id, T.type, ...this.getExtraNotificationArgs()), this.fire("update-widgets")
            } catch (e) {
                return s = e, console.error(s)
            } finally {
                return !1
            }
        },
        "*.stop-widget-drag": function(e) {
            return this.notifyWidgetMoved()
        }
    },
    partials: {
        editorOverlay: '{{ #isEditing }}\n<div\n  draggable="true"\n  style="{{dims}}"\n  class="editor-overlay{{#isSelected}} selected{{/}}{{#widget.type === \'plot\'}} plot-overlay{{/}}"\n  on-click="@this.fire(\'hide-context-menu\') && @this.fire(\'select-widget\', @event)"\n  on-contextmenu="@this.fire(\'show-context-menu\', @event)"\n  on-dblclick="@this.fire(\'edit-widget\')"\n  on-dragstart="start-widget-drag"\n  on-drag="drag-widget"\n  on-dragend="stop-widget-drag">\n</div>\n{{/}}'
    }
});
var it, rt = et;
it = Ractive.extend({
    lastUpdateMs: void 0,
    startX: void 0,
    startY: void 0,
    view: void 0,
    data: function() {
        return {
            parentClass: "netlogo-widget-container",
            submitLabel: "OK",
            cancelLabel: "Cancel",
            horizontalOffset: void 0,
            verticalOffset: void 0,
            amProvingMyself: !1,
            idBasis: void 0,
            style: void 0,
            visible: void 0,
            xLoc: void 0,
            yLoc: void 0,
            draggable: !0
        }
    },
    computed: {
        id: function() {
            return `${this.get("idBasis")}-edit-window`
        }
    },
    twoway: !1,
    lazy: !0,
    on: {
        submit: function({
            node: e
        }) {
            var t, n;
            try {
                if (null != (n = this.genProps(e))) return this.fire("update-widget-value", {}, n, this.get("amProvingMyself"))
            } catch (e) {
                return t = e, console.warn("Widget form submission error: ", t)
            } finally {
                return this.set("amProvingMyself", !1), this.fire("activate-cloaking-device"), !1
            }
        },
        "show-yourself": function() {
            var e, t, n, i, r, o, s, a, l, d;
            return s = function(e) {
                return function({
                    parentElement: t
                }) {
                    return null != t ? t.classList.contains(e) ? t : s(e)(t) : void 0
                }
            }, this.set("visible", !0), (o = this.getElem()).focus(), this.fire("lock-selection", this.parent), this.fire("edit-form-opened", this), t = (e = s(this.get("parentClass"))(o)).offsetWidth / 2, n = e.offsetHeight / 2, r = o.offsetWidth / 2, i = o.offsetHeight / 2, this.set("xLoc", null != (a = this.get("horizontalOffset")) ? a : t - r), this.set("yLoc", null != (l = this.get("verticalOffset")) ? l : n - i), this.resetPartial("widgetFields", this.partials.widgetFields), d = e => (e.addEventListener("focus", (e => {
                this.set("draggable", !1)
            })), e.addEventListener("blur", (e => {
                this.set("draggable", !0)
            }))), this.findAll("textarea").forEach(d), this.findAll("input").forEach(d), !1
        },
        "activate-cloaking-device": function() {
            return this.set("visible", !1), this.fire("unlock-selection"), this.fire("edit-form-closed", this), this.get("amProvingMyself") && this.fire("has-been-proven-unworthy"), !1
        },
        "prove-your-worth": function() {
            return this.fire("show-yourself"), this.set("amProvingMyself", !0), !1
        },
        "start-edit-drag": function(e) {
            return Ze.dragstart(this, e, (function(e, t) {
                var n;
                switch ((n = document.elementFromPoint(e, t)).tagName.toLowerCase()) {
                    case "input":
                        return "number" !== n.type.toLowerCase() && "text" !== n.type.toLowerCase();
                    case "textarea":
                        return !1;
                    default:
                        return !0
                }
            }), ((e, t) => (this.startX = this.get("xLoc") - e, this.startY = this.get("yLoc") - t)))
        },
        "drag-edit-dialog": function(e) {
            return Ze.drag(this, e, ((e, t) => (this.set("xLoc", this.startX + e), this.set("yLoc", this.startY + t))))
        },
        "stop-edit-drag": function() {
            return Ze.dragend(this, (function() {}))
        },
        "cancel-edit": function() {
            this.fire("activate-cloaking-device")
        },
        "handle-key": function({
            original: {
                keyCode: e
            }
        }) {
            27 === e && this.fire("cancel-edit")
        }
    },
    getElem: function() {
        return this.find(`#${this.get("id")}`)
    },
    template: '{{# visible }}\n<div class="widget-edit-form-overlay">\n  <div id="{{id}}"\n       class="widget-edit-popup widget-edit-text"\n       style="top: {{yLoc}}px; left: {{xLoc}}px; {{style}}"\n       on-keydown="handle-key"\n       draggable="{{draggable}}" on-drag="drag-edit-dialog" on-dragstart="start-edit-drag"\n       on-dragend="stop-edit-drag"\n       tabindex="0">\n    <div id="{{id}}-closer" class="widget-edit-closer" on-click="cancel-edit">X</div>\n    <form class="widget-edit-form" on-submit="submit">\n      <div class="widget-edit-form-title">{{>title}}</div>\n      {{>widgetFields}}\n      <div class="widget-edit-form-button-container">\n        <input class="widget-edit-text" type="submit" value="{{ submitLabel }}" />\n        <input class="widget-edit-text" type="button" on-click="cancel-edit" value="{{ cancelLabel }}" />\n      </div>\n    </form>\n  </div>\n</div>\n{{/}}',
    partials: {
        widgetFields: void 0
    }
});
var ot, st, at = it;
st = (ot = Ractive.extend({
    data: function() {
        return {
            disabled: void 0,
            id: void 0,
            isChecked: void 0,
            labelText: void 0,
            name: void 0
        }
    },
    twoway: !1,
    template: '<div class="widget-edit-checkbox-wrapper">\n  <input id="{{id}}" class="widget-edit-checkbox"\n         name="[[name]]" type="checkbox" checked="{{isChecked}}"\n         {{# disabled === true }} disabled {{/}} />\n  <label for="{{id}}" class="widget-edit-input-label" style="margin-right: 0px;">{{labelText}}</label>\n</div>'
})).extend({
    twoway: !0
});
var lt, dt = Ractive.extend({
    data: function() {
        return {
            height: void 0,
            width: void 0
        }
    },
    template: '<div style="{{>height}} {{>width}}"></div>',
    partials: {
        height: "{{ #height }}height: {{height}};{{/}}",
        width: "{{ #width  }}width:  {{width }};{{/}}"
    }
});
(lt = Ractive.extend({
    data: function() {
        return {
            attrs: void 0,
            checked: void 0,
            class: void 0,
            divClass: "flex-row",
            id: void 0,
            labelStr: void 0,
            labelStyle: void 0,
            max: void 0,
            min: void 0,
            name: void 0,
            onChange: void 0,
            onInput: void 0,
            placeholder: void 0,
            required: void 0,
            style: void 0,
            type: void 0,
            value: void 0
        }
    },
    twoway: !1,
    on: {
        exec: function(e) {
            var t;
            (t = this.get("onChange")) && ("number" === this.get("type") && this.set("value", this.clampNumber(this.get("value"), this.get("min"), this.get("max"))), this.fire(t, e, this.get("value")))
        },
        "process-input": function(e) {
            var t;
            return "function" == typeof(t = this.get("onInput")) ? t(e) : void 0
        }
    },
    clampNumber: function(e, t, n) {
        return null != t && e < t ? t : null != n && e > n ? n : e
    },
    template: '<div class="{{ divClass }}">\n  <label for="{{ id }}" class="widget-edit-input-label" style="{{ labelStyle }}">{{ labelStr }}</label>\n  <div style="flex-grow: 1;">\n    <input class="widget-edit-text widget-edit-input {{ class }}"\n      type="{{ type }}" name="{{ name }}" style="{{ style }}"\n      value="{{ value }}" checked="{{ checked }}"\n      {{#if id}}id="{{ id }}"{{/if}}\n      {{#if placeholder}}placeholder="{{ placeholder }}"{{/if}}\n      {{#if min}}min="{{ min }}"{{/if}} {{#if max}}max="{{ max }}"{{/if}}\n      on-change="exec" on-input="process-input"\n      {{#if type === \'text\'}}dir="auto"{{/if}}\n      {{ attrs }} />\n  </div>\n</div>'
})).extend({
    data: function() {
        return {
            attrs: 'lazy step="any"'
        }
    },
    twoway: !0
});
var ct, ut, ht, pt, ft = lt.extend({
    data: function() {
        return {
            attrs: "min=0 step=1 required",
            labelStr: "Font size:",
            style: "width: 70px;",
            type: "number"
        }
    },
    twoway: !1
});
ct = Ractive.extend({
    data: function() {
        return {
            id: void 0,
            hint: void 0,
            label: void 0,
            max: void 0,
            min: void 0,
            name: void 0,
            value: void 0
        }
    },
    isolated: !0,
    twoway: !1,
    components: {
        labeledInput: lt
    },
    template: '<div>\n  <labeledInput id="{{id}}" labelStr="{{label}}"\n                labelStyle="min-width: 100px; white-space: nowrap;"\n                name="{{name}}" style="text-align: right;" type="number"\n                attrs="min=\'{{min}}\' max=\'{{max}}\' step=1 required"\n                value="{{value}}" />\n  <div class="widget-edit-hint-text">{{hint}}</div>\n</div>'
}), pt = at.extend({
    data: function() {
        return {
            framerate: void 0,
            isShowingTicks: void 0,
            maxX: void 0,
            maxY: void 0,
            minX: void 0,
            minY: void 0,
            patchSize: void 0,
            tickLabel: void 0,
            turtleLabelSize: void 0,
            wrapsInX: void 0,
            wrapsInY: void 0
        }
    },
    computed: {
        topology: {
            get: function() {
                return this.get("wrapsInX") ? this.get("wrapsInY") ? "Torus" : "Horizontal Cylinder" : this.get("wrapsInY") ? "Vertical Cylinder" : "Box"
            }
        }
    },
    twoway: !1,
    components: {
        coordInput: ct,
        formCheckbox: ot,
        formFontSize: ft,
        labeledInput: lt,
        spacer: dt
    },
    genProps: function(e) {
        return {
            "dimensions.maxPxcor": Number.parseInt(e.maxX.value),
            "dimensions.maxPycor": Number.parseInt(e.maxY.value),
            "dimensions.minPxcor": Number.parseInt(e.minX.value),
            "dimensions.minPycor": Number.parseInt(e.minY.value),
            "dimensions.patchSize": Number.parseInt(e.patchSize.value),
            "dimensions.wrappingAllowedInX": e.wrapsInX.checked,
            "dimensions.wrappingAllowedInY": e.wrapsInY.checked,
            fontSize: Number.parseInt(e.turtleLabelSize.value),
            frameRate: Number.parseInt(e.framerate.value),
            showTickCounter: e.isShowingTicks.checked,
            tickCounterLabel: e.tickLabel.value
        }
    },
    partials: {
        title: "Model Settings",
        widgetFields: '{{>worldSet}}\n<spacer height="10px" />\n{{>viewSet}}\n<spacer height="10px" />\n{{>tickCounterSet}}',
        worldSet: '<fieldset class="widget-edit-fieldset">\n  <legend class="widget-edit-legend">World</legend>\n  <div class="flex-row">\n    {{>coordColumn}}\n    <spacer width="8%" />\n    {{>wrappingColumn}}\n  </div>\n</fieldset>',
        coordColumn: '<div class="flex-column">\n\n  <coordInput id="{{id}}-min-x" label="min-pxcor:" name="minX" value="{{minX}}"\n              min="-50000" max="0" hint="minimum x coordinate for patches" />\n\n  <coordInput id="{{id}}-max-x" label="max-pxcor:" name="maxX" value="{{maxX}}"\n              min="0" max="50000" hint="maximum x coordinate for patches" />\n\n  <coordInput id="{{id}}-min-y" label="min-pycor:" name="minY" value="{{minY}}"\n              min="-50000" max="0" hint="minimum y coordinate for patches" />\n\n  <coordInput id="{{id}}-max-y" label="max-pycor:" name="maxY" value="{{maxY}}"\n              min="0" max="50000" hint="maximum y coordinate for patches" />\n\n</div>',
        wrappingColumn: '<div class="flex-column">\n  <formCheckbox id="{{id}}-wraps-in-x" isChecked="{{ wrapsInX }}"\n                labelText="Wraps horizontally" name="wrapsInX" />\n  <spacer height="10px" />\n  <formCheckbox id="{{id}}-wraps-in-y" isChecked="{{ wrapsInY }}"\n                labelText="Wraps vertically" name="wrapsInY" />\n</div>',
        viewSet: '<fieldset class="widget-edit-fieldset">\n  <legend class="widget-edit-legend">View</legend>\n  <div class="flex-row">\n    <div class="flex-column" style="flex-grow: 1;">\n      <labeledInput id="{{id}}-patch-size" labelStr="Patch size:"\n                    name="patchSize" type="number" value="{{patchSize}}"\n                    attrs="min=-1 step=\'any\' required" />\n      <div class="widget-edit-hint-text">measured in pixels</div>\n    </div>\n    <spacer width="20px" />\n    <div class="flex-column" style="flex-grow: 1;">\n      <formFontSize id="{{id}}-turtle-label-size" name="turtleLabelSize" value="{{turtleLabelSize}}"/>\n      <div class="widget-edit-hint-text">of labels on agents</div>\n    </div>\n  </div>\n\n  <spacer height="10px" />\n\n  <labeledInput id="{{id}}-framerate" labelStr="Frame rate:" name="framerate"\n                style="text-align: right;" type="number" value="{{framerate}}"\n                attrs="min=0 step=\'any\' required" />\n  <div class="widget-edit-hint-text">Frames per second at normal speed</div>\n\n</fieldset>',
        tickCounterSet: '<fieldset class="widget-edit-fieldset">\n  <legend class="widget-edit-legend">Tick Counter</legend>\n  <formCheckbox id="{{id}}-is-showing-ticks" isChecked="{{ isShowingTicks }}"\n                labelText="Show tick counter" name="isShowingTicks" />\n  <spacer height="10px" />\n  <labeledInput id="{{id}}-tick-label" labelStr="Tick counter label:" name="tickLabel"\n                style="width: 230px;" type="text" value="{{tickLabel}}" />\n</fieldset>'
    }
}), ut = rt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit],
            resizeDirs: ["topLeft", "topRight", "bottomLeft", "bottomRight"],
            ticks: void 0
        }
    },
    computed: {
        viewDims: function() {
            var e, t, n, i;
            return ({
                top: i,
                right: n,
                bottom: e,
                left: t
            } = ht), `padding: ${i}px ${n}px ${e}px ${t}px;`
        }
    },
    components: {
        editForm: pt
    },
    eventTriggers: function() {
        return {
            fontSize: [this._weg.redrawView],
            "dimensions.maxPxcor": [this._weg.resizeView, this._weg.redrawView],
            "dimensions.maxPycor": [this._weg.resizeView, this._weg.redrawView],
            "dimensions.minPxcor": [this._weg.resizeView, this._weg.redrawView],
            "dimensions.minPycor": [this._weg.resizeView, this._weg.redrawView],
            "dimensions.patchSize": [this._weg.resizePatches, this._weg.redrawView],
            "dimensions.wrappingAllowedInX": [this._weg.updateTopology, this._weg.redrawView],
            "dimensions.wrappingAllowedInY": [this._weg.updateTopology, this._weg.redrawView]
        }
    },
    handleResize: function({
        left: e,
        right: t,
        top: n,
        bottom: i
    }) {
        var r, o, s, a, l, d, c, u, h, p, f, g, m, v, w, y, b, x;
        e >= 0 && n >= 0 && (g = this.get("left"), m = this.get("right"), v = this.get("top"), h = this.get("bottom"), f = m - g - ht.horizontal, p = h - v - ht.vertical, u = t - e - ht.horizontal, c = i - n - ht.vertical, y = Math.abs(f - u) > Math.abs(p - c) ? c / p : u / f, o = (w = parseFloat((this.get("widget.dimensions.patchSize") * y).toFixed(2))) * (this.get("widget.dimensions.maxPxcor") - this.get("widget.dimensions.minPxcor") + 1) - f, s = w * (this.get("widget.dimensions.maxPycor") - this.get("widget.dimensions.minPycor") + 1) - p, l = e !== g, d = n !== v, [x, r] = d ? [v - s, i] : [n, h + s], [a, b] = l ? [g - o, t] : [e, m + o], a >= 0 && x >= 0 && (this.set("widget.top", Math.round(x)), this.set("widget.bottom", Math.round(r)), this.set("widget.left", Math.round(a)), this.set("widget.right", Math.round(b)), this.findComponent("editForm").set("patchSize", w)))
    },
    handleResizeEnd: function() {
        this.fire("set-patch-size", this.findComponent("editForm").get("patchSize")), this.notifyWidgetMoved()
    },
    minWidth: 10,
    minHeight: 10,
    template: '{{>editorOverlay}}\n{{>view}}\n<editForm idBasis="view" style="width: 510px;"\n          maxX="{{widget.dimensions.maxPxcor}}" maxY="{{widget.dimensions.maxPycor}}"\n          minX="{{widget.dimensions.minPxcor}}" minY="{{widget.dimensions.minPycor}}"\n          wrapsInX="{{widget.dimensions.wrappingAllowedInX}}" wrapsInY="{{widget.dimensions.wrappingAllowedInY}}"\n          patchSize="{{widget.dimensions.patchSize}}" turtleLabelSize="{{widget.fontSize}}"\n          framerate="{{widget.frameRate}}"\n          isShowingTicks="{{widget.showTickCounter}}" tickLabel="{{widget.tickCounterLabel}}" />',
    partials: {
        view: '<div id="{{id}}" class="netlogo-widget netlogo-view-container {{classes}}" style="{{dims}}{{viewDims}}"></div>'
    }
}), (ht = {
    top: 5,
    right: 4,
    bottom: 4,
    left: 4
}).horizontal = ht.left + ht.right, ht.vertical = ht.top + ht.bottom;
var gt, mt, vt, wt, yt, bt = ut;
gt = class {
    constructor(e, t, n) {
        this.reportError = this.reportError.bind(this), this.setCode = this.setCode.bind(this), this._countByType = this._countByType.bind(this), this.ractive = e, this.viewController = t, this.configs = n, this.ractive.observe("isEditing", (e => {
            var t;
            return t = e ? "#efefef" : "#ffffff", Object.values(this.configs.plotOps).forEach((function(e) {
                return e.setBGColor(t)
            }))
        }))
    }
    createWidget(e, t, n) {
        var i, r, o, s, a, l, d;
        l = document.querySelector(".netlogo-widget-container").getBoundingClientRect(), o = {
            left: i = Math.round(t - l.left),
            top: r = Math.round(n - l.top),
            type: e
        }, a = mt(e, i, r, this._countByType), d = Object.assign(o, a), s = Math.max(...Object.keys(this.ractive.get("widgetObj")).map(parseFloat)) + 1, this.ractive.get("widgetObj")[s] = d, this.ractive.update("widgetObj"), Ye(this.reportError, d, s, (() => (this.redraw(), this.updateWidgets())), this.plotSetupHelper()), null != d.currentValue && world.observer.setGlobal(d.variable, d.currentValue), this.ractive.findAllComponents("").find((function(e) {
            return e.get("widget") === d
        })).fire("initialize-widget"), this.ractive.fire("new-widget-initialized", s, e)
    }
    runForevers() {
        var e, t, n, i;
        for (e = 0, t = (n = this.widgets()).length; e < t; e++) "button" === (i = n[e]).type && i.forever && i.running && i.run()
    }
    updateWidgets() {
        var e, t, n, i, r, o, s, a;
        for (e in o = this.configs.plotOps)(t = o[e]).redraw(), n = this.ractive.get("isEditing") ? "#efefef" : "#ffffff", t.setBGColor(n);
        for (i = 0, r = (s = this.widgets()).length; i < r; i++) a = s[i], vt(a);
        world.ticker.ticksAreStarted() ? (this.ractive.set("ticks", Math.floor(world.ticker.tickCount())), this.ractive.set("ticksStarted", !0)) : (this.ractive.set("ticks", ""), this.ractive.set("ticksStarted", !1)), this.ractive.update()
    }
    removeWidgetById(e, t, n) {
        var i;
        if (i = this.ractive.get("widgetObj")[e].type, delete this.ractive.get("widgetObj")[e], this.ractive.update("widgetObj"), this.ractive.fire("deselect-widgets"), t) this.ractive.fire("new-widget-cancelled", e, i);
        else {
            switch (i) {
                case "chooser":
                case "inputBox":
                case "plot":
                case "slider":
                case "switch":
                    this.ractive.fire("recompile-sync", "system")
            }
            this.ractive.fire("widget-deleted", e, i, ...n)
        }
    }
    widgets() {
        var e, t, n, i;
        for (e in n = [], t = this.ractive.get("widgetObj")) i = t[e], n.push(i);
        return n
    }
    reportError(e, t, n, ...i) {
        if (!["runtime", "compiler"].includes(e)) throw new Error('Only valid values for `time` are "runtime" or "compiler"');
        return this.ractive.fire(`${e}-error`, {}, t, n, ...i)
    }
    freshenUpWidgets(e, t) {
        var n, i, r, o, s, a, l, d;
        for (i = n = 0, r = t.length; n < r; i = ++n)(o = t[i]).id = i, s = p.get(o.type), d = function() {
            switch (o.type) {
                case "button":
                    return We(this.reportError, (() => (this.redraw(), this.updateWidgets())));
                case "chooser":
                    return $e;
                case "inputBox":
                    return Fe;
                case "monitor":
                    return je;
                case "output":
                case "textBox":
                case "view":
                    return function() {};
                case "plot":
                    return He(this.plotSetupHelper());
                case "slider":
                    return qe;
                case "switch":
                    return Xe;
                default:
                    throw new Error(`Unknown widget type: ${o.type}`)
            }
        }.call(this), null != (a = e.find(wt(s)(o))) && (a.compilation = o.compilation, d(o, a), null != o.variable && (a.variable = o.variable.toLowerCase()), "chooser" !== (l = o.type) && "inputBox" !== l && "slider" !== l && "switch" !== l || world.observer.setGlobal(o.variable, a.currentValue));
        this.updateWidgets()
    }
    speed() {
        return this.ractive.get("speed")
    }
    setCode(e) {
        var t;
        this.ractive.set("code", e), null != (t = this.ractive.findComponent("codePane")) && t.setCode(e), this.ractive.fire("recompile", "system")
    }
    jumpToProcedure(e) {
        var t, n;
        this.ractive.set("showCode", !0), this.ractive.findComponent("codePane").set("jumpToProcedure", e), null != (t = this.ractive.find("#netlogo-code-tab")) && (n = function() {
            return t.scrollIntoView()
        }, window.setTimeout(n, 50))
    }
    jumpToCode(e, t) {
        var n, i;
        this.ractive.set("showCode", !0), this.ractive.findComponent("codePane").set("jumpToCode", {
            start: e,
            end: t
        }), null != (n = this.ractive.find("#netlogo-code-tab")) && (i = function() {
            return n.scrollIntoView()
        }, window.setTimeout(i, 50))
    }
    redraw() {
        Updater.hasUpdates() && this.viewController.update(Updater.collectUpdates())
    }
    teardown() {
        this.ractive.torndown || this.ractive.teardown()
    }
    code() {
        return this.ractive.get("code")
    }
    plotSetupHelper() {
        return {
            getPlotComps: () => this.ractive.findAllComponents("plotWidget"),
            getPlotOps: () => this.configs.plotOps,
            lookupElem: e => this.ractive.find(e)
        }
    }
    _countByType(e) {
        return this.widgets().filter((function(t) {
            return t.type === e
        })).length
    }
}, vt = function(e) {
    var t, n, i, r, o, s, a, l, d, c, u, h;
    switch (null != e.currentValue && (e.currentValue = function() {
            if (null != e.variable) return world.observer.getGlobal(e.variable);
            if (null == e.reporter) return e.currentValue;
            try {
                return h = e.reporter(), i = "number" == typeof h, !(null != h && (!i || isFinite(h))) ? "N/A" : null != e.precision && i ? yt(h, e.precision) : h
            } catch (e) {
                return "N/A"
            }
        }()), e.type) {
        case "inputBox":
            e.boxedValue.value = e.currentValue;
            break;
        case "slider":
            s = e.getMax(), u = e.getStep(), d = e.getMin(), e.maxValue === s && e.stepValue === u && e.minValue === d || (e.maxValue = s, e.stepValue = u, e.minValue = d - 1e-6, e.minValue = d);
            break;
        case "view":
            ({
                maxPxcor: r,
                maxPycor: o,
                minPxcor: a,
                minPycor: l,
                patchSize: c
            } = e.dimensions), n = Math.round(c * (r - a + 1)), t = Math.round(c * (o - l + 1)), e.right = e.left + n + ht.horizontal, e.bottom = e.top + t + ht.vertical
    }
}, yt = function(e, t) {
    var n, i;
    return n = Math.pow(10, t), i = Math.floor(e * n + .5) / n, t > 0 ? i : Math.round(i)
}, mt = function(e, t, n, i) {
    switch (e) {
        case "output":
            return {
                bottom: n + 60, right: t + 180, fontSize: 12
            };
        case "switch":
            return {
                bottom: n + 33, right: t + 100, on: !1, variable: ""
            };
        case "slider":
            return {
                bottom: n + 33, right: t + 170,
                    default: 50, direction: "horizontal", max: "100", min: "0", step: "1"
            };
        case "inputBox":
            return {
                bottom: n + 60, right: t + 180, boxedValue: {
                    multiline: !1,
                    type: "String",
                    value: ""
                }, variable: ""
            };
        case "button":
            return {
                bottom: n + 60, right: t + 180, buttonKind: "Observer", disableUntilTicksStart: !1, forever: !1, running: !1
            };
        case "chooser":
            return {
                bottom: n + 45, right: t + 140, choices: [], currentChoice: -1, variable: ""
            };
        case "monitor":
            return {
                bottom: n + 45, right: t + 70, fontSize: 11, precision: 17
            };
        case "plot":
            return {
                bottom: n + 160, right: t + 200, autoPlotOn: !0, display: `Plot ${i(e)+1}`, legendOn: !1, pens: [], setupCode: "", updateCode: "", xAxis: "", xmax: 10, xmin: 0, yAxis: "", ymax: 10, ymin: 0, exists: !1
            };
        case "textBox":
            return {
                bottom: n + 60, right: t + 180, color: 0, display: "", fontSize: 12, transparent: !0
            };
        default:
            throw new Error(`Huh?  What kind of widget is a ${e}?`)
    }
}, wt = function(e) {
    return function(t) {
        return function(n) {
            var i, r;
            return ({
                eq: i
            } = tortoise_require("brazier/equals")), r = function(e) {
                var r, o;
                return r = t[e], o = n[e], null == r && null == o || i(r)(o)
            }, t.type === n.type && u.concat(e).every(r)
        }
    }
};
var xt, kt, _t, Ct, Et, St, Tt, Pt, At, It, Lt, zt, Mt, Bt, Rt, Ot, Nt, Ut, Dt, Vt = gt;
for (zt = function(e) {
        var t, n, i, r, o;
        return [o, r, i] = n = Rt(e), (t = n.length > 3 ? n[3] : 255) < 255 ? `rgba(${o}, ${r}, ${i}, ${t/255})` : `rgb(${o}, ${r}, ${i})`
    }, Bt = function(e) {
        var t, n, i;
        return [i, n, t] = Rt(e), `rgb(${i}, ${n}, ${t})`
    }, Mt = function(e) {
        return `#${Rt(e).map((function(e){var t;return 1===(t=e.toString(16)).length?`0${t}`:t})).join("")}`
    }, St = function(e) {
        var t, n, i, r, o;
        return i = "([0-9a-f]{2})", o = e.toLowerCase().match(new RegExp(`#${i}${i}${i}`)).slice(1), [r, n, t] = o.map((function(e) {
            return parseInt(e, 16)
        })), ColorModel.nearestColorNumberOfRGB(r, n, t)
    }, Rt = function(e) {
        switch (typeof e) {
            case "number":
                return _t[Math.floor(10 * e)];
            case "object":
                return e.map(Math.round);
            case "string":
                return It[Lt[e]];
            default:
                return console.error(`Unrecognized color: ${e}`)
        }
    }, Lt = {}, Tt = Pt = 0, At = (Nt = ["gray", "red", "orange", "brown", "yellow", "green", "lime", "turqoise", "cyan", "sky", "blue", "violet", "magenta", "pink", "black", "white"]).length; Pt < At; Tt = ++Pt) Lt[Nt[Tt]] = Tt;
It = [
    [140, 140, 140],
    [215, 48, 39],
    [241, 105, 19],
    [156, 109, 70],
    [237, 237, 47],
    [87, 176, 58],
    [42, 209, 57],
    [27, 158, 119],
    [82, 196, 196],
    [43, 140, 190],
    [50, 92, 168],
    [123, 78, 163],
    [166, 25, 105],
    [224, 126, 149],
    [0, 0, 0],
    [255, 255, 255]
], _t = function() {
    var e, t;
    for (t = [], Ct = e = 0; e <= 1400; Ct = ++e) kt = Math.floor(Ct / 100), [Ot, Et, xt] = It[kt], (Ut = (Ct % 100 - 50) / 50.48 + .012) < 0 ? (Ot += Math.floor(Ot * Ut), Et += Math.floor(Et * Ut), xt += Math.floor(xt * Ut)) : (Ot += Math.floor((255 - Ot) * Ut), Et += Math.floor((255 - Et) * Ut), xt += Math.floor((255 - xt) * Ut)), t.push([Ot, Et, xt]);
    return t
}(), Dt = Ractive.extend({
    data: function() {
        return {
            class: void 0,
            id: void 0,
            isEnabled: !0,
            name: void 0,
            style: void 0,
            value: void 0
        }
    },
    on: {
        "handle-color-change": function({
            node: {
                value: e
            }
        }) {
            var t;
            return t = function() {
                try {
                    return St(e)
                } catch (e) {
                    return 0
                }
            }(), this.set("value", t), this.fire("change"), !1
        },
        render: function() {
            var e;
            e = function(e, t) {
                var n, i;
                e !== t && (n = function() {
                    try {
                        return Mt(this.get("value"))
                    } catch (e) {
                        return "#000000"
                    }
                }.call(this), (i = this.find("input")).value = n, null != i.jsc && (i.style.backgroundColor = i.value))
            }, this.observe("value", e)
        }
    },
    template: '<input id="{{id}}" class="{{class}}" name="{{name}}" style="{{style}}" type="color"\n       on-change="handle-color-change"\n       {{# !isEnabled }}disabled{{/}} />'
});
var Wt, $t = Dt;
Wt = at.extend({
    data: function() {
        return {
            color: void 0,
            fontSize: void 0,
            text: void 0,
            transparent: void 0,
            _color: void 0
        }
    },
    twoway: !1,
    components: {
        colorInput: $t,
        formCheckbox: ot,
        formFontSize: ft,
        labeledInput: lt,
        spacer: dt
    },
    genProps: function(e) {
        return {
            color: this.findComponent("colorInput").get("value"),
            display: e.text.value,
            fontSize: parseInt(e.fontSize.value),
            transparent: e.transparent.checked
        }
    },
    on: {
        init: function() {
            this.set("_color", this.get("color"))
        }
    },
    partials: {
        title: "Note",
        widgetFields: '<label for="{{id}}-text">Text</label><br>\n<textarea id="{{id}}-text" class="widget-edit-textbox"\n          name="text" placeholder="Enter note text here..."\n          value="{{text}}" autofocus></textarea>\n\n<spacer height="20px" />\n\n<div class="flex-row" style="align-items: center;">\n  <div style="width: 48%;">\n    <formFontSize id="{{id}}-font-size" name="fontSize" value="{{fontSize}}"/>\n  </div>\n  <spacer width="4%" />\n  <div style="width: 48%;">\n    <div class="flex-row" style="align-items: center;">\n      <label for="{{id}}-text-color" class="widget-edit-input-label">Text color:</label>\n      <div style="flex-grow: 1;">\n        <colorInput id="{{id}}-text-color" name="color" class="widget-edit-text widget-edit-input widget-edit-color-pick" value="{{_color}}" />\n      </div>\n    </div>\n  </div>\n</div>\n\n<spacer height="15px" />\n\n<formCheckbox id="{{id}}-transparent-checkbox" isChecked={{transparent}} labelText="Transparent background" name="transparent" />'
    }
});
var Ft, jt, Ht, qt, Xt, Yt = rt.extend({
        data: function() {
            return {
                contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
                convertColor: zt
            }
        },
        components: {
            editForm: Wt
        },
        eventTriggers: function() {
            return {}
        },
        getExtraNotificationArgs: function() {
            return [this.get("widget").display]
        },
        minWidth: 13,
        minHeight: 13,
        template: "{{>editorOverlay}}\n{{>label}}\n{{>form}}",
        partials: {
            label: '<pre id="{{id}}" class="netlogo-widget netlogo-text-box {{classes}}"\n     style="{{dims}} font-size: {{widget.fontSize}}px; color: {{ convertColor(widget.color) }}; {{# widget.transparent}}background: transparent;{{/}}"\n     >{{ widget.display }}</pre>',
            form: '<editForm idBasis="{{id}}" color="{{widget.color}}"\n          fontSize="{{widget.fontSize}}" text="{{widget.display}}"\n          transparent="{{widget.transparent}}" />'
        }
    }),
    Kt = rt.extend({
        data: function() {
            return {
                oldValue: void 0,
                internalValue: void 0
            }
        },
        widgetType: void 0,
        on: {
            init: function() {
                var e;
                e = () => {
                    var e;
                    e = this.get("widget.currentValue"), this.set("internalValue", e), this.set("oldValue", e)
                }, this.observe("widget.currentValue", e), e()
            },
            "widget-value-change": function(e, ...t) {
                var n, i, r;
                n = this.get("internalValue"), (i = this.get("oldValue")) !== n && (this.set("widget.currentValue", n), r = this.get("widget"), this.fire(`${this.widgetType}-widget-changed`, r.id, r.variable, n, i, ...t))
            }
        },
        getExtraNotificationArgs: function() {
            return [this.get("widget").variable]
        }
    });
Ft = Ractive.extend({
    _editor: void 0,
    data: function() {
        return {
            code: void 0,
            extraClasses: void 0,
            extraConfig: void 0,
            id: void 0,
            initialCode: void 0,
            isDisabled: !1,
            injectedConfig: void 0,
            onchange: function() {},
            style: void 0
        }
    },
    oncomplete: function() {
        var e, t;
        e = this.get("initialCode"), this.set("code", null != (t = null != e ? e : this.get("code")) ? t : ""), this._setupCodeMirror()
    },
    twoway: !1,
    _setupCodeMirror: function() {
        var e, t, n, i;
        e = {
            mode: "netlogo",
            theme: "netlogo-default",
            value: this.get("code").toString(),
            viewportMargin: Infinity
        }, t = Object.assign({}, e, null != (n = this.get("extraConfig")) ? n : {}, null != (i = this.get("injectedConfig")) ? i : {}), this._editor = new CodeMirror(this.find(`#${this.get("id")}`), t), this._editor.on("change", (() => {
            var e;
            return e = this._editor.getValue(), this.set("code", e), this.parent.fire("code-changed", e), this.get("onchange")(e)
        })), this._editor.on("blur", (() => this.fire("change"))), this.observe("isDisabled", (function(e) {
            var t;
            this._editor.setOption("readOnly", !!e && "nocursor"), t = this.find(".netlogo-code").querySelector(".CodeMirror-scroll").classList, e ? t.add("cm-disabled") : t.remove("cm-disabled")
        }))
    },
    refresh: function() {
        this._editor.refresh()
    },
    setCode: function(e) {
        var t;
        t = e.toString(), null != this._editor && this._editor.getValue() !== t && this._editor.setValue(t)
    },
    template: '<div\n  id="{{id}}"\n  class="netlogo-code {{(extraClasses || []).join(\' \')}}"\n  style="{{style}}"\n  translate="no"\n/>'
}), jt = Ft.extend({
    data: function() {
        return {
            extraConfig: {
                tabSize: 2,
                extraKeys: {
                    "Ctrl-F": "findPersistent",
                    "Cmd-F": "findPersistent"
                }
            },
            jumpToProcedure: void 0,
            jumpToCode: void 0
        }
    },
    oncomplete: function() {
        return this._super(), this.jumpToProcedure(), this.jumpToCode()
    },
    observe: {
        jumpToProcedure: function() {
            return this.jumpToProcedure()
        },
        jumpToCode: function() {
            return this.jumpToCode()
        }
    },
    highlightProcedure: function(e, t) {
        var n, i;
        n = this._editor.posFromIndex(t), i = CodeMirror.Pos(n.line, n.ch - e.length), this._editor.setSelection(i, n)
    },
    highlightLocation: function(e) {
        var t, n;
        n = this._editor.posFromIndex(e.start), t = this._editor.posFromIndex(e.end), this._editor.setSelection(n, t)
    },
    jumpToProcedure: function() {
        var e;
        null != (e = this.get("jumpToProcedure")) && null != this._editor && this.highlightProcedure(e.procName, e.index)
    },
    jumpToCode: function() {
        var e;
        null != (e = this.get("jumpToCode")) && null != this._editor && this.highlightLocation(e)
    },
    getEditor: function() {
        return this._editor
    }
}), Xt = function(e) {
    return Ractive.extend({
        data: function() {
            return {
                config: void 0,
                id: void 0,
                isCollapsible: !1,
                isDisabled: !1,
                isExpanded: void 0,
                label: void 0,
                onchange: function() {},
                style: void 0,
                value: void 0
            }
        },
        twoway: !1,
        components: {
            codeContainer: e
        },
        on: {
            init: function() {
                var e, t;
                e = null != (t = this.get("isExpanded")) ? t : !this.get("isCollapsible"), this.set("isExpanded", e), this.observe("isExpanded", (function(e, t) {
                    if (!0 === e && !1 === t) return setTimeout((() => this.findComponent("codeContainer").refresh()), 0)
                }))
            },
            "toggle-expansion": function() {
                return this.get("isCollapsible") && this.set("isExpanded", !this.get("isExpanded")), !1
            }
        },
        template: '<div class="flex-row code-container-label{{#isExpanded}} open{{/}}"\n     on-click="toggle-expansion">\n  {{# isCollapsible }}\n    <div for="{{id}}-is-expanded" class="expander widget-edit-checkbox-wrapper">\n      <span id="{{id}}-is-expanded" class="widget-edit-input-label expander-label">&#9654;</span>\n    </div>\n  {{/}}\n  <label for="{{id}}" class="expander-text">{{label}}</label>\n</div>\n<div class="{{# isCollapsible && !isExpanded }}hidden{{/}}" style="{{style}}">\n  <codeContainer id="{{id}}" initialCode="{{value}}" injectedConfig="{{config}}"\n                 isDisabled="{{isDisabled}}" onchange="{{onchange}}" />\n</div>'
    })
}, qt = Xt(Ft.extend({
    oncomplete: function() {
        var e;
        this._super(), e = function(e, t) {
            var n;
            return n = t.text.join("").replace(/\n/g, ""), t.update(t.from, t.to, [n]), !0
        }, this._editor.on("beforeChange", e)
    }
})), Ht = Xt(jt);
var Gt, Zt, Jt, Qt = Ractive.extend({
    data: function() {
        return {
            id: void 0,
            name: void 0,
            value: void 0
        }
    },
    twoway: !1,
    on: {
        validate: function({
            node: e
        }) {
            var t, n;
            return n = e.value.toLowerCase(), t = ge.all.some((function(e) {
                return e.toLowerCase() === n
            })) ? `'${e.value}' is a reserved name` : "", e.setCustomValidity(t), !1
        }
    },
    template: '<label for="{{id}}">Global variable: </label>\n<input id="{{id}}" class="widget-edit-text" name="{{name}}" placeholder="(Required)"\n       type="text" value="{{value}}"\n       autofocus autocomplete="off" on-input="validate"\n       pattern="[=*!<>:#+/%\'&$^.?\\-_a-zA-Z][=*!<>:#+/%\'&$^.?\\-\\w]*"\n       title="One or more alphanumeric characters and characters in (( $^.?=*!<>:#+/%\'&-_ )).  Cannot start with a number"\n       required />'
});
Gt = Ractive.extend({
    data: function() {
        return {
            changeEvent: void 0,
            choices: void 0,
            disableds: void 0,
            name: void 0,
            id: void 0,
            label: void 0,
            selected: void 0,
            checkIsDisabled: function(e) {
                var t;
                return (null != (t = this.get("disableds")) ? t : []).some((function(t) {
                    return t === e || null != e.value && e.value === t
                }))
            },
            valOf: function(e) {
                return null != e.value ? e.value : e
            },
            textOf: function(e) {
                return null != e.text ? e.text : e
            }
        }
    },
    on: {
        "*.changed": function(e) {
            var t;
            null != (t = this.get("changeEvent")) && this.fire(t)
        }
    },
    twoway: !1,
    template: '<div class="{{ divClass }}">\n  <label for="{{ id }}" class="widget-edit-input-label">{{ label }}</label>\n  <select id="{{ id }}" name="{{ name }}" class="widget-edit-dropdown" value="{{ selected }}" on-change="changed">\n    {{#choices }}\n      <option value="{{ valOf(this) }}" {{# checkIsDisabled(this) }} disabled {{/}}>{{ textOf(this) }}</option>\n    {{/}}\n  </select>\n</div>'
}), Gt.extend({
    twoway: !0
}), Zt = at.extend({
    data: function() {
        return {
            boxtype: void 0,
            display: void 0,
            isMultiline: void 0,
            value: void 0
        }
    },
    components: {
        formCheckbox: ot,
        formDropdown: Gt,
        formVariable: Qt,
        spacer: dt
    },
    twoway: !1,
    genProps: function(e) {
        var t, n, i, r;
        return n = e.boxtype.value, r = e.variable.value, i = function() {
            if (n === this.get("boxtype")) return this.get("value");
            switch (n) {
                case "Color":
                case "Number":
                    return 0;
                default:
                    return ""
            }
        }.call(this), t = "Color" !== n && "Number" !== n ? {
            multiline: e.multiline.checked
        } : {}, {
            boxedValue: Object.assign(t, {
                type: n,
                value: i
            }),
            currentValue: i,
            display: r,
            variable: r.toLowerCase()
        }
    },
    partials: {
        title: "Input",
        widgetFields: '<formVariable id="{{id}}-varname" name="variable" value="{{display}}" />\n<spacer height="15px" />\n<div class="flex-row" style="align-items: center;">\n  <formDropdown id="{{id}}-boxtype" name="boxtype" label="Type" selected="{{boxtype}}"\n                choices="[\'String\', \'Number\', \'Color\', \'String (reporter)\', \'String (commands)\']" />\n  <formCheckbox id="{{id}}-multiline-checkbox" isChecked={{isMultiline}} labelText="Multiline"\n                name="multiline" disabled="typeof({{isMultiline}}) === \'undefined\'" />\n</div>\n<spacer height="10px" />'
    }
}), Jt = Kt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete]
        }
    },
    widgetType: "input",
    components: {
        colorInput: $t,
        editForm: Zt,
        editor: jt
    },
    eventTriggers: function() {
        return {
            currentValue: [this._weg.updateEngineValue],
            variable: [this._weg.recompile, this._weg.rename]
        }
    },
    on: {
        "code-changed": function(e, t) {
            return this.get("widget").boxedValue.type.includes("String ") && this.set("internalValue", t), !1
        },
        "handle-keypress": function({
            original: {
                keyCode: e,
                target: t
            }
        }) {
            if (!this.get("widget.boxedValue.multiline") && 13 === e) return t.blur(), !1
        },
        render: function() {
            return this.observe("widget.currentValue", ((e, t) => {
                this.scrollToBottom(e), this.validateValue(e, t)
            }))
        }
    },
    scrollToBottom: function(e) {
        var t, n;
        null != (t = this.find(".netlogo-multiline-input")) && setTimeout((function() {
            return t.scrollTop = t.scrollHeight
        }), 0), null != (n = this.findComponent("editor")) && n.setCode(e)
    },
    resetValue: function(e, t, n) {
        var i;
        return i = typeof t !== e ? n : t, this.set("widget.currentValue", i), this.fire("set-global", this.get("widget.variable"), i)
    },
    validateValue: function(e, t) {
        var n, i;
        n = this.get("widget.boxedValue.type"), i = typeof e, ["Color", "Number"].includes(n) && "number" !== i ? this.resetValue("number", t, 0) : n.startsWith("String") && "string" !== i && this.resetValue("string", t, "")
    },
    minWidth: 70,
    minHeight: 43,
    template: '{{>editorOverlay}}\n{{>input}}\n<editForm idBasis="{{id}}" boxtype="{{widget.boxedValue.type}}" display="{{widget.display}}"\n          {{# widget.boxedValue.type !== \'Color\' && widget.boxedValue.type !== \'Number\' }}\n            isMultiline="{{widget.boxedValue.multiline}}"\n          {{/}} value="{{widget.currentValue}}"\n          />',
    partials: {
        input: '<label id="{{id}}" class="netlogo-widget netlogo-input-box netlogo-input {{classes}}" style="{{dims}}">\n  <div class="netlogo-label">{{widget.variable}}</div>\n  {{# widget.boxedValue.type === \'Number\'}}\n    <input\n      class="netlogo-multiline-input"\n      type="number"\n      value="{{internalValue}}"\n      lazy="true"\n      on-change="[\'widget-value-change\', widget.boxedValue.type]"\n      {{# isEditing }}disabled{{/}}\n      />\n  {{/}}\n  {{# widget.boxedValue.type === \'String\'}}\n    <textarea\n      class="netlogo-multiline-input"\n      value="{{internalValue}}"\n      on-keypress="handle-keypress"\n      lazy="true"\n      on-change="[\'widget-value-change\', widget.boxedValue.type]"\n      {{# isEditing }}disabled{{/}} >\n    </textarea>\n  {{/}}\n  {{# widget.boxedValue.type === \'String (reporter)\' || widget.boxedValue.type === \'String (commands)\' }}\n    <editor\n      extraClasses="[\'netlogo-multiline-input\']"\n      id="{{id}}-code"\n      injectedConfig="{ scrollbarStyle: \'null\' }"\n      style="height: 50%;"\n      initialCode="{{internalValue}}"\n      isDisabled="{{isEditing}}"\n      on-change="[\'widget-value-change\', widget.boxedValue.type]"\n      />\n  {{/}}\n  {{# widget.boxedValue.type === \'Color\'}}\n    <colorInput\n      class="netlogo-multiline-input"\n      style="margin: 0; width: 100%;"\n      value="{{internalValue}}"\n      isEnabled="{{!isEditing}}"\n      on-change="[\'widget-value-change\', widget.boxedValue.type]"\n      />\n  {{/}}\n</label>'
    }
});
var en, tn = Jt;
en = at.extend({
    data: function() {
        return {
            actionKey: void 0,
            display: void 0,
            isForever: void 0,
            source: void 0,
            startsDisabled: void 0,
            type: void 0
        }
    },
    computed: {
        displayedType: {
            get: function() {
                return this._typeToDisplay(this.get("type"))
            }
        }
    },
    on: {
        "handle-action-key-press": function({
            event: {
                key: e
            },
            node: t
        }) {
            if ("Enter" !== e) return t.value = ""
        }
    },
    twoway: !1,
    components: {
        formCheckbox: ot,
        formCode: Ht,
        formDropdown: Gt,
        labeledInput: lt,
        spacer: dt
    },
    genProps: function(e) {
        var t, n;
        return t = e.actionKey.value, n = this.findComponent("formCode").findComponent("codeContainer").get("code"), {
            actionKey: 1 === t.length ? t.toUpperCase() : null,
            buttonKind: this._displayToType(e.type.value),
            disableUntilTicksStart: e.startsDisabled.checked,
            display: "" !== e.display.value ? e.display.value : void 0,
            forever: e.forever.checked,
            source: "" !== n ? n : void 0
        }
    },
    partials: {
        title: "Button",
        widgetFields: '<div class="flex-row" style="align-items: center;">\n  <formDropdown id="{{id}}-type" choices="[\'observer\', \'turtles\', \'patches\', \'links\']" name="type" label="Agent(s):" selected="{{displayedType}}" />\n  <formCheckbox id="{{id}}-forever-checkbox" isChecked={{isForever}} labelText="Forever" name="forever" />\n</div>\n\n<spacer height="15px" />\n\n<formCheckbox id="{{id}}-start-disabled-checkbox" isChecked={{startsDisabled}} labelText="Disable until ticks start" name="startsDisabled" />\n\n<spacer height="15px" />\n\n<formCode id="{{id}}-source" name="source" value="{{source}}" label="Commands" />\n\n<spacer height="15px" />\n\n<div class="flex-row" style="align-items: center;">\n  <labeledInput id="{{id}}-display" labelStr="Display name:" name="display" class="widget-edit-inputbox" type="text" value="{{display}}" />\n</div>\n\n<spacer height="15px" />\n\n<div class="flex-row" style="align-items: center;">\n  <label for="{{id}}-action-key">Action key:</label>\n  <input  id="{{id}}-action-key" name="actionKey" type="text" value="{{actionKey}}"\n          class="widget-edit-inputbox" style="text-transform: uppercase; width: 33px;"\n          on-keypress="handle-action-key-press" />\n</div>'
    },
    _displayToType: function(e) {
        return {
            observer: "Observer",
            turtles: "Turtle",
            patches: "Patch",
            links: "Link"
        } [e]
    },
    _typeToDisplay: function(e) {
        return {
            Observer: "observer",
            Turtle: "turtles",
            Patch: "patches",
            Link: "links"
        } [e]
    }
});
var nn, rn, on = rt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
            errorClass: void 0,
            ticksStarted: void 0,
            isRunning: !1
        }
    },
    computed: {
        isEnabled: {
            get: function() {
                var e, t, n, i;
                return !this.get("isEditing") && (i = this.get("widget"), n = this.get("ticksStarted"), e = !i.disableUntilTicksStart, t = !i.compilation.success, n || e || t)
            }
        }
    },
    oninit: function() {
        this._super(), this.on("activate-button", (function(e, t) {
            var n;
            this.get("isEnabled") && (t(), n = this.get("widget"), this.fire("button-widget-clicked", n.id, n.display, n.source, !1, !1))
        }))
    },
    on: {
        "forever-button-change": function() {
            var e, t;
            e = this.get("isRunning"), this.set("widget.running", e), t = this.get("widget"), this.fire("button-widget-clicked", t.id, t.display, t.source, !0, e)
        }
    },
    observe: {
        "widget.running": function(e) {
            this.set("isRunning", e)
        }
    },
    components: {
        editForm: en
    },
    eventTriggers: function() {
        return {
            buttonKind: [this._weg.recompile],
            forever: [this._weg.recompile],
            source: [this._weg.recompile]
        }
    },
    getExtraNotificationArgs: function() {
        var e;
        return [(e = this.get("widget")).display, e.source]
    },
    minWidth: 35,
    minHeight: 30,
    template: '{{>editorOverlay}}\n{{>button}}\n<editForm actionKey="{{widget.actionKey}}" display="{{widget.display}}"\n          idBasis="{{id}}" isForever="{{widget.forever}}" source="{{widget.source}}"\n          startsDisabled="{{widget.disableUntilTicksStart}}" type="{{widget.buttonKind}}" />',
    partials: {
        button: "{{# widget.forever }}\n  {{>foreverButton}}\n{{ else }}\n  {{>standardButton}}\n{{/}}",
        standardButton: '<button id="{{id}}" type="button" style="{{dims}}"\n        class="netlogo-widget netlogo-button netlogo-command{{# !isEnabled }} netlogo-disabled{{/}} {{errorClass}} {{classes}}"\n        on-click="@this.fire(\'activate-button\', @this.get(\'widget.run\'))">\n  {{>buttonContext}}\n  {{>label}}\n  {{>actionKeyIndicator}}\n</button>',
        foreverButton: '<label id="{{id}}" style="{{dims}}"\n       class="netlogo-widget netlogo-button netlogo-forever-button{{#isRunning}} netlogo-active{{/}} netlogo-command{{# !isEnabled }} netlogo-disabled{{/}} {{errorClass}} {{classes}}">\n  {{>buttonContext}}\n  {{>label}}\n  {{>actionKeyIndicator}}\n  <input type="checkbox" checked={{ isRunning }} on-change="forever-button-change" {{# !isEnabled }}disabled{{/}}/>\n  <div class="netlogo-forever-icon"></div>\n</label>',
        buttonContext: '<div class="netlogo-button-agent-context">\n{{#if widget.buttonKind === "Turtle" }}\n  T\n{{elseif widget.buttonKind === "Patch" }}\n  P\n{{elseif widget.buttonKind === "Link" }}\n  L\n{{/if}}\n</div>',
        label: '<span class="netlogo-label">{{widget.display || widget.source}}</span>',
        actionKeyIndicator: '{{# widget.actionKey }}\n  <span class="netlogo-action-key {{# widget.hasFocus }}netlogo-focus{{/}}">\n    {{widget.actionKey}}\n  </span>\n{{/}}'
    }
});
nn = Ractive.extend({
    template: '<div class="flex-column" style="align-items: center; flex-grow: 1; max-width: 140px;">\n  {{ yield }}\n</div>'
}), rn = at.extend({
    data: function() {
        return {
            bottom: void 0,
            direction: void 0,
            left: void 0,
            maxCode: void 0,
            minCode: void 0,
            right: void 0,
            stepCode: void 0,
            top: void 0,
            units: void 0,
            value: void 0,
            variable: void 0
        }
    },
    twoway: !1,
    components: {
        column: nn,
        formCheckbox: ot,
        formMaxCode: qt,
        formMinCode: qt,
        formStepCode: qt,
        formVariable: Qt,
        labeledInput: lt,
        spacer: dt
    },
    genProps: function(e) {
        var t, n, i, r, o, s, a;
        return a = Number.parseFloat(e.value.value), o = this.get("top"), r = this.get("right"), n = this.get("bottom"), i = this.get("left"), [s, t] = "horizontal" === this.get("direction") && e.vertical.checked || "vertical" === this.get("direction") && !e.vertical.checked ? [i + (n - o), o + (r - i)] : [r, n], {
            bottom: t,
            currentValue: a,
            default: a,
            direction: e.vertical.checked ? "vertical" : "horizontal",
            display: e.variable.value,
            max: this.findComponent("formMaxCode").findComponent("codeContainer").get("code"),
            min: this.findComponent("formMinCode").findComponent("codeContainer").get("code"),
            right: s,
            step: this.findComponent("formStepCode").findComponent("codeContainer").get("code"),
            units: "" !== e.units.value ? e.units.value : void 0,
            variable: e.variable.value.toLowerCase()
        }
    },
    partials: {
        title: "Slider",
        widgetFields: '<formVariable id="{{id}}-varname" name="variable" value="{{variable}}"/>\n\n<spacer height="15px" />\n\n<div class="flex-row" style="align-items: stretch; justify-content: space-around">\n  <column>\n    <formMinCode id="{{id}}-min-code" label="Minimum" name="minCode" config="{ scrollbarStyle: \'null\' }"\n                 style="width: 100%;" value="{{minCode}}" />\n  </column>\n  <column>\n    <formStepCode id="{{id}}-step-code" label="Increment" name="stepCode" config="{ scrollbarStyle: \'null\' }"\n                  style="width: 100%;" value="{{stepCode}}" />\n  </column>\n  <column>\n    <formMaxCode id="{{id}}-max-code" label="Maximum" name="maxCode" config="{ scrollbarStyle: \'null\' }"\n                 style="width: 100%;" value="{{maxCode}}" />\n  </column>\n</div>\n\n<div class="widget-edit-hint-text" style="margin-left: 4px; margin-right: 4px;">min, increment, and max may be numbers or reporters</div>\n\n<div class="flex-row" style="align-items: center;">\n  <labeledInput id="{{id}}-value" labelStr="Default value:" name="value" type="number" value="{{value}}" attrs="required step=\'any\'"\n                style="flex-grow: 1; text-align: right;" />\n  <labeledInput id="{{id}}-units" labelStr="Units:" labelStyle="margin-left: 10px;" name="units" type="text" value="{{units}}"\n                style="flex-grow: 1; padding: 4px;" />\n</div>\n\n<spacer height="15px" />\n\n<formCheckbox id="{{id}}-vertical" isChecked="{{ direction === \'vertical\' }}" labelText="Vertical?"\n              name="vertical" />'
    }
});
var sn, an = Kt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
            errorClass: void 0,
            internalValue: 0
        }
    },
    widgetType: "slider",
    on: {
        "reset-if-invalid": function(e) {
            e.node.validity.rangeOverflow ? this.set("internalValue", this.get("widget.maxValue")) : e.node.validity.rangeUnderflow && this.set("internalValue", this.get("widget.minValue")), this.fire("widget-value-change")
        }
    },
    computed: {
        resizeDirs: {
            get: function() {
                return "vertical" !== this.get("widget.direction") ? ["left", "right"] : ["top", "bottom"]
            },
            set: function() {}
        },
        textWidth: function() {
            var e;
            return null != (e = this.get("internalValue")) ? e.toString().length + 3 : 3
        }
    },
    components: {
        editForm: rn
    },
    eventTriggers: function() {
        return {
            currentValue: [this._weg.updateEngineValue],
            max: [this._weg.recompile],
            min: [this._weg.recompile],
            step: [this._weg.recompile],
            variable: [this._weg.recompile, this._weg.rename]
        }
    },
    minWidth: 60,
    minHeight: 33,
    template: '{{>editorOverlay}}\n{{>slider}}\n<editForm direction="{{widget.direction}}" idBasis="{{id}}" maxCode="{{widget.max}}"\n          minCode="{{widget.min}}" stepCode="{{widget.step}}" units="{{widget.units}}"\n          top="{{widget.top}}" right="{{widget.right}}" bottom="{{widget.bottom}}"\n          left="{{widget.left}}" value="{{widget.default}}" variable="{{widget.variable}}" />',
    partials: {
        slider: '<label id="{{id}}" class="netlogo-widget netlogo-slider netlogo-input {{errorClass}} {{classes}}"\n       style="{{ #widget.direction !== \'vertical\' }}{{dims}}{{else}}{{>verticalDims}}{{/}}">\n  <input\n    type="range"\n    max="{{widget.maxValue}}"\n    min="{{widget.minValue}}"\n    step="{{widget.stepValue}}"\n    value="{{internalValue}}"\n    on-change="widget-value-change"\n    {{# isEditing }}disabled{{/}} />\n  <div class="netlogo-slider-label">\n    <span class="netlogo-label" on-click="[\'show-widget-errors\', widget]">{{widget.display}}</span>\n    <span class="netlogo-slider-value">\n      <input\n        type="number"\n        on-change="reset-if-invalid"\n        style="width: {{textWidth}}ch"\n        min="{{widget.minValue}}"\n        max="{{widget.maxValue}}"\n        step="{{widget.stepValue}}"\n        value="{{internalValue}}"\n        {{# isEditing }}disabled{{/}} />\n      {{#widget.units}}{{widget.units}}{{/}}\n    </span>\n  </div>\n</label>',
        verticalDims: "position: absolute;\nleft: {{ left }}px; top: {{ top }}px;\nwidth: {{ bottom - top }}px; height: {{ right - left }}px;\ntransform: translateY({{ bottom - top }}px) rotate(270deg);\ntransform-origin: top left;"
    }
});
sn = at.extend({
    data: function() {
        return {
            choices: void 0,
            display: void 0,
            setHiddenInput: function(e) {
                var t, n;
                return (t = this.find(`#${this.get("id")}-choices-hidden`)).value = e, n = function() {
                    try {
                        return Converter.stringToJSValue(`[${e}]`), ""
                    } catch (e) {
                        return "Invalid format: Must be a space-separated list of NetLogo literal values"
                    }
                }(), t.setCustomValidity(n)
            }
        }
    },
    twoway: !1,
    components: {
        formCode: Ht,
        formVariable: Qt
    },
    computed: {
        chooserChoices: {
            get: function() {
                return this.get("choices").map((function(e) {
                    return workspace.dump(e, !0)
                })).join("\n")
            }
        }
    },
    genProps: function(e) {
        var t, n;
        return n = e.varName.value, t = this.findComponent("formCode").findComponent("codeContainer").get("code"), {
            choices: Converter.stringToJSValue(`[${t}]`),
            display: n,
            variable: n.toLowerCase()
        }
    },
    partials: {
        title: "Chooser",
        widgetFields: '<formVariable id="{{id}}-varname" value="{{display}}"        name="varName" />\n<formCode     id="{{id}}-choices" value="{{chooserChoices}}" name="codeChoices"\n              label="Choices" config="{}" style="" onchange="{{setHiddenInput}}" />\n<input id="{{id}}-choices-hidden" name="trueCodeChoices" class="all-but-hidden"\n       style="margin: -5px 0 0 7px;" type="text" />\n<div class="widget-edit-hint-text">Example: "a" "b" "c" 1 2 3</div>'
    }
});
var ln, dn = Kt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
            resizeDirs: ["left", "right"]
        }
    },
    widgetType: "chooser",
    observe: {
        "widget.currentValue": function() {
            var e, t;
            e = (t = this.get("widget")).choices.findIndex((function(e) {
                return e === t.currentValue
            })), this.set("widget.currentChoice", e >= 0 ? e : 0)
        }
    },
    components: {
        editForm: sn
    },
    eventTriggers: function() {
        return {
            choices: [this._weg.refreshChooser],
            variable: [this._weg.recompile, this._weg.rename]
        }
    },
    minWidth: 55,
    minHeight: 45,
    template: '{{>editorOverlay}}\n<label id="{{id}}" class="netlogo-widget netlogo-chooser netlogo-input {{classes}}" style="{{dims}}">\n  <span class="netlogo-label">{{widget.display}}</span>\n  <select\n    class="netlogo-chooser-select"\n    value="{{internalValue}}"\n    on-change="widget-value-change"\n    {{# isEditing }} disabled{{/}} >\n    {{#widget.choices}}\n    <option class="netlogo-chooser-option" value="{{.}}">{{>literal}}</option>\n    {{/}}\n  </select>\n</label>\n<editForm idBasis="{{id}}" choices="{{widget.choices}}" display="{{widget.display}}" />',
    partials: {
        literal: '{{# typeof . === "string"}}{{.}}{{/}}\n{{# typeof . === "number"}}{{.}}{{/}}\n{{# typeof . === "boolean"}}{{.}}{{/}}\n{{# typeof . === "object"}}\n  [{{#.}}\n    {{>literal}}\n  {{/}}]\n{{/}}'
    }
});
ln = at.extend({
    data: function() {
        return {
            display: void 0,
            fontSize: void 0,
            precision: void 0,
            source: void 0
        }
    },
    components: {
        formCode: Ht,
        formFontSize: ft,
        labeledInput: lt,
        spacer: dt
    },
    twoway: !1,
    genProps: function(e) {
        var t;
        return t = parseInt(e.fontSize.value), {
            display: "" !== e.display.value ? e.display.value : void 0,
            fontSize: t,
            bottom: this.parent.get("widget.top") + 2 * t + 23,
            precision: parseInt(e.precision.value),
            source: this.findComponent("formCode").findComponent("codeContainer").get("code")
        }
    },
    partials: {
        title: "Monitor",
        widgetFields: '<formCode id="{{id}}-source" name="source" value="{{source}}" label="Reporter" />\n\n<spacer height="15px" />\n\n<div class="flex-row" style="align-items: center;">\n  <labeledInput id="{{id}}-display" labelStr="Display name:" name="display" class="widget-edit-inputbox" type="text" value="{{display}}" />\n</div>\n\n<spacer height="15px" />\n\n<div class="flex-row" style="align-items: center; justify-content: space-between;">\n\n  <label for="{{id}}">Decimal places: </label>\n  <input  id="{{id}}" name="precision" placeholder="(Required)"\n          class="widget-edit-inputbox" style="width: 70px;"\n          type="number" value="{{precision}}" min=-30 max=17 step=1 required />\n  <spacer width="50px" />\n  <formFontSize id="{{id}}-font-size" name="fontSize" value="{{fontSize}}"/>\n\n</div>'
    }
});
var cn, un = rt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
            errorClass: void 0,
            resizeDirs: ["left", "right"]
        }
    },
    components: {
        editForm: ln
    },
    eventTriggers: function() {
        return {
            source: [this._weg.recompile]
        }
    },
    getExtraNotificationArgs: function() {
        var e;
        return [(e = this.get("widget")).display, e.source]
    },
    minWidth: 20,
    minHeight: 45,
    template: '{{>editorOverlay}}\n{{>monitor}}\n<editForm idBasis="{{id}}" display="{{widget.display}}" fontSize="{{widget.fontSize}}"\n          precision="{{widget.precision}}" source="{{widget.source}}" />',
    partials: {
        monitor: '<div id="{{id}}" class="netlogo-widget netlogo-monitor netlogo-output {{classes}}"\n     style="{{dims}} font-size: {{widget.fontSize}}px;">\n  <label class="netlogo-label {{errorClass}}" on-click="[\'show-widget-errors\', widget]">\n    {{widget.display || widget.source}}\n  </label>\n  <output class="netlogo-value">{{widget.currentValue}}</output>\n</div>'
    }
});
cn = function() {
    class e {
        static findProcedureNames(t, n) {
            var i, r, o;
            for (i = function() {
                    switch (n) {
                        case "upper":
                            return function(e) {
                                return e.toUpperCase()
                            };
                        case "lower":
                            return function(e) {
                                return e.toLowerCase()
                            };
                        case "as-written":
                            return function(e) {
                                return e
                            }
                    }
                }(), o = {}, e.procedureNameFinder.lastIndex = 0; r = e.procedureNameFinder.exec(t);) o[i(r[1])] = r.index + r[0].length;
            return o
        }
    }
    return e.procedureNameFinder = /^\s*(?:to|to-report)\s(?:\s*;.*\n)*\s*(\w\S*)/gm, e
}.call(this);
var hn, pn = cn;
hn = Ractive.extend({
    data: function() {
        return {
            code: void 0,
            isReadOnly: void 0,
            jumpToProcedure: void 0,
            jumpToCode: void 0,
            lastCompiledCode: void 0,
            lastCompileFailed: !1,
            procedureNames: {},
            autoCompleteStatus: !1,
            codeUsage: [],
            usageVisibility: !1,
            selectedCode: void 0,
            usageLeft: void 0,
            usageTop: void 0
        }
    },
    components: {
        codeEditor: jt
    },
    computed: {
        isStale: "(code !== lastCompiledCode) || lastCompileFailed"
    },
    setCode: function(e) {
        this.findComponent("codeEditor").setCode(e)
    },
    setupProceduresDropdown: function() {
        $("#procedurenames-dropdown").chosen({
            search_contains: !0
        }), $("#procedurenames-dropdown").on("change", (() => {
            var e, t;
            return e = this.get("procedureNames")[t = $("#procedurenames-dropdown").val()], this.findComponent("codeEditor").highlightProcedure(t, e)
        })), $("#procedurenames-dropdown").on("chosen:showing_dropdown", (() => this.setProcedureNames()))
    },
    setProcedureNames: function() {
        var e;
        e = pn.findProcedureNames(this.get("code"), "as-written"), this.set("procedureNames", e), $("#procedurenames-dropdown").trigger("chosen:updated")
    },
    setupAutoComplete: function(e) {
        CodeMirror.registerHelper("hintWords", "netlogo", e), this.findComponent("codeEditor").getEditor().on("keyup", ((e, t) => {
            if (!e.state.completionActive && t.keyCode > 64 && t.keyCode < 91 && this.get("autoCompleteStatus")) return e.showHint({
                completeSingle: !1
            })
        }))
    },
    netLogoHintHelper: function(e, t) {
        var n, i, r, o, s, a;
        if (n = e.getCursor(), a = e.getTokenAt(n), s = CodeMirror.Pos(n.line, a.end), a.string && /\S/.test(a.string[a.string.length - 1]) ? (o = a.string, r = CodeMirror.Pos(n.line, a.start)) : (o = "", r = s), (i = t.words.filter((function(e) {
                return e.slice(0, o.length) === o
            }))).length > 0) return {
            list: i,
            from: r,
            to: s
        }
    },
    autoCompleteWords: function() {
        var e, t;
        return e = new Set(ge.all), t = Array.from(e).filter((function(e) {
            return !ge.unsupported.includes(e)
        })).map((function(e) {
            return e.replace("\\", "")
        })), Object.keys(pn.findProcedureNames(this.get("code"), "lower")).concat(t)
    },
    toggleLineComments: function(e) {
        var t, n, i, r, o;
        ({
            start: o,
            end: i
        } = e.somethingSelected() ? (({
            head: r,
            anchor: t
        } = e.listSelections()[0]), r.line > t.line || r.line === t.line && r.ch > t.ch ? {
            start: t,
            end: r
        } : {
            start: r,
            end: t
        }) : {
            start: n = e.getCursor(),
            end: n
        }), e.uncomment(o, i) || e.lineComment(o, i)
    },
    setupCodeUsagePopup: function() {
        var e, t;
        e = {
            "Ctrl-U": () => {
                if (t.somethingSelected()) return this.setCodeUsage()
            },
            "Cmd-U": () => {
                if (t.somethingSelected()) return this.setCodeUsage()
            },
            "Ctrl-;": () => {
                this.toggleLineComments(t)
            },
            "Cmd-;": () => {
                this.toggleLineComments(t)
            }
        }, (t = this.findComponent("codeEditor").getEditor()).addKeyMap(e), t.on("cursorActivity", (e => {
            if (this.get("usageVisibility")) return this.set("usageVisibility", !1)
        }))
    },
    getCodeUsage: function() {
        var e, t, n, i, r, o, s, a, l;
        for (l = (i = this.findComponent("codeEditor").getEditor()).getSelection().trim(), this.set("selectedCode", l), t = this.get("code"), e = new RegExp(l, "gm"), n = []; s = e.exec(t);) o = (a = i.posFromIndex(s.index)).line + 1, r = i.getLine(a.line), n.push({
            pos: a,
            lineNumber: o,
            line: r
        });
        return n
    },
    setCodeUsage: function() {
        var e, t, n;
        e = this.getCodeUsage(), t = this.findComponent("codeEditor").getEditor(), this.set("codeUsage", e), n = t.cursorCoords(t.getCursor()), this.set("usageLeft", n.left), this.set("usageTop", n.top), this.set("usageVisibility", !0)
    },
    jumpToProcedure: function() {
        var e, t;
        null != (t = this.get("jumpToProcedure")) && null != (e = pn.findProcedureNames(this.get("code"), "upper")[t.toUpperCase()]) && this.findComponent("codeEditor").set("jumpToProcedure", {
            procName: t,
            index: e
        })
    },
    jumpToCode: function() {
        var e;
        null != (e = this.get("jumpToCode")) && (this.set("jumpToCode", null), this.findComponent("codeEditor").set("jumpToCode", e))
    },
    on: {
        complete: function(e) {
            this.setupProceduresDropdown(), CodeMirror.registerHelper("hint", "fromList", this.netLogoHintHelper), this.setupAutoComplete(this.autoCompleteWords()), this.setupCodeUsagePopup(), this.jumpToProcedure(), this.jumpToCode()
        },
        recompile: function(e) {
            this.setupAutoComplete(this.autoCompleteWords())
        },
        "jump-to-usage": function(e, t) {
            var n, i, r, o;
            n = this.findComponent("codeEditor").getEditor(), r = this.get("selectedCode"), i = t, o = CodeMirror.Pos(i.line, i.ch + r.length), n.setSelection(o, i), this.set("usageVisibility", !1)
        }
    },
    observe: {
        jumpToProcedure: function() {
            return this.jumpToProcedure()
        },
        jumpToCode: function() {
            return this.jumpToCode()
        }
    },
    template: '<div id="netlogo-code-tab" class="netlogo-tab-content netlogo-code-container"\n  grow-in=\'{disable:"code-tab-toggle"}\' shrink-out=\'{disable:"code-tab-toggle"}\'>\n  <ul class="netlogo-codetab-widget-list">\n    <li class="netlogo-codetab-widget-listitem">\n      <select class="netlogo-procedurenames-dropdown" id="procedurenames-dropdown" data-placeholder="Jump to Procedure" tabindex="2">\n        {{#each procedureNames:name}}\n          <option value="{{name}}">{{name}}</option>\n        {{/each}}\n      </select>\n    </li>\n    <li class="netlogo-codetab-widget-listitem">\n      {{# !isReadOnly }}\n        <button class="netlogo-widget netlogo-ugly-button netlogo-recompilation-button{{#isEditing}} interface-unlocked{{/}}"\n            on-click="[\'recompile\', \'user\']" {{# !isStale }}disabled{{/}} >Recompile Code</button>\n      {{/}}\n    </li>\n    <li class="netlogo-codetab-widget-listitem">\n      <input type=\'checkbox\' class="netlogo-autocomplete-checkbox" checked=\'{{autoCompleteStatus}}\'>\n      <label class="netlogo-autocomplete-label">\n        Auto Complete {{# autoCompleteStatus}}Enabled{{else}}Disabled{{/}}\n      </label>\n    </li>\n  </ul>\n  <codeEditor id="netlogo-code-tab-editor" code="{{code}}"\n              injectedConfig="{ lineNumbers: true, readOnly: {{isReadOnly}} }"\n              extraClasses="[\'netlogo-code-tab\']" />\n</div>\n<div class="netlogo-codeusage-popup" style="left: {{usageLeft}}px; top: {{usageTop}}px;">\n  {{# usageVisibility}}\n    <ul class="netlogo-codeusage-list">\n      {{#each codeUsage}}\n        <li class="netlogo-codeusage-item" on-click="[ \'jump-to-usage\', this.pos ]">{{this.lineNumber}}: {{this.line}}</li>\n      {{/each}}\n    </ul>\n  {{/}}\n</div>'
});
var fn, gn = hn;
fn = at.extend({
    data: function() {
        return {
            display: void 0
        }
    },
    twoway: !1,
    components: {
        formVariable: Qt
    },
    genProps: function(e) {
        var t;
        return {
            display: t = e.variable.value,
            variable: t.toLowerCase()
        }
    },
    partials: {
        title: "Switch",
        widgetFields: '<formVariable id="{{id}}-varname" name="variable" value="{{display}}"/>'
    }
});
var mn, vn, wn, yn, bn = Kt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
            resizeDirs: ["left", "right"]
        }
    },
    widgetType: "switch",
    observe: {
        "widget.on": function(e, t) {
            e !== t && (this.set("internalValue", e), this.fire("widget-value-change"))
        },
        "widget.currentValue": function(e) {
            this.set("widget.on", e)
        }
    },
    components: {
        editForm: fn
    },
    eventTriggers: function() {
        return {
            variable: [this._weg.recompile, this._weg.rename]
        }
    },
    minWidth: 35,
    minHeight: 33,
    template: '{{>editorOverlay}}\n{{>switch}}\n<editForm idBasis="{{id}}" display="{{widget.display}}" />',
    partials: {
        switch: '<label id="{{id}}" class="netlogo-widget netlogo-switcher netlogo-input {{classes}}" style="{{dims}}">\n  <input type="checkbox" checked="{{ internalValue }}" on-change="widget-value-change" {{# isEditing }} disabled{{/}} />\n  <span class="netlogo-label">{{ widget.display }}</span>\n</label>'
    }
});
yn = (mn = window.navigator.platform.startsWith("Mac")) ? "&#8984;" : "ctrl", vn = function(e, t) {
    return `<tr>\n  <td class="help-keys">${e.map((function(e){return"<kbd>"+e+"</kbd>"})).join("")}</td>\n  <td class="help-explanation">${t}</td>\n</tr>`
}, wn = function(e) {
    return `<table class="help-key-table">\n  ${e.map((function([e,t]){return vn(e,t)})).join("\n")}\n</table>`
};
var xn, kn = Ractive.extend({
        data: function() {
            return {
                isOverlayUp: void 0,
                isVisible: void 0,
                stateName: void 0,
                wareaHeight: void 0,
                wareaWidth: void 0
            }
        },
        observe: {
            isVisible: function(e, t) {
                this.set("isOverlayUp", e), e ? (setTimeout((() => this.find("#help-dialog").focus()), 0), this.fire("dialog-opened", this)) : this.fire("dialog-closed", this)
            }
        },
        on: {
            "close-popup": function() {
                return this.set("isVisible", !1), !1
            },
            "handle-key": function({
                original: {
                    keyCode: e
                }
            }) {
                if (27 === e) return this.fire("close-popup"), !1
            }
        },
        template: '<div id="help-dialog" class="help-popup"\n     style="{{# !isVisible }}display: none;{{/}} top: {{(wareaHeight * .1) + 150}}px; left: {{wareaWidth * .1}}px; width: {{wareaWidth * .8}}px; {{style}}"\n     on-keydown="handle-key" tabindex="0">\n  <div id="{{id}}-closer" class="widget-edit-closer" on-click="close-popup">X</div>\n  <div>{{>helpText}}</div>\n</div>',
        partials: {
            helpAuthoringEditWidget: wn([
                [
                    ["enter"], "submit form"
                ],
                [
                    ["escape"], "close form and ignore any changes made"
                ]
            ]),
            helpAuthoringStandard: wn([
                [
                    [yn, "shift", "l"], "switch to interactive mode"
                ],
                [
                    [yn, "shift", "h"], "toggle resizer visibility"
                ],
                [
                    ["escape"], "close context menu if it is open, or deselect any selected widget"
                ],
                [
                    [yn], 'hold to ignore "snap to grid" while moving or resizing the selected widget'
                ],
                [
                    ["&uarr;", "&darr;", "&larr;", "&rarr;"], "move widget, irrespective of the grid"
                ]
            ].concat(mn ? [] : [
                [
                    ["delete"], "delete the selected widget"
                ]
            ])),
            helpInteractive: wn([
                [
                    [yn, "shift", "l"], "switch to authoring mode"
                ],
                [
                    [yn, "u"], "find all usages of selected text (when in NetLogo Code editor)"
                ],
                [
                    [yn, ";"], "comment/uncomment a line of code (when in NetLogo Code editor)"
                ]
            ]),
            helpText: "<table>\n  {{# stateName === 'interactive' }}\n    {{>helpInteractive}}\n  {{elseif stateName === 'authoring - plain' }}\n    {{>helpAuthoringStandard}}\n  {{elseif stateName === 'authoring - editing widget' }}\n    {{>helpAuthoringEditWidget}}\n  {{else}}\n    Invalid help state.\n  {{/}}\n</table>"
        }
    }),
    _n = Ractive.extend({
        data: function() {
            return {
                fontSize: void 0,
                id: void 0,
                output: void 0
            }
        },
        observe: {
            output: function() {
                return this.update("output").then((() => {
                    var e;
                    return null != (e = this.find("#" + this.get("id"))) ? e.scrollTop = e.scrollHeight : void 0
                }))
            }
        },
        template: "<pre id='{{id}}' class='netlogo-output-area'\n     style=\"font-size: {{fontSize}}px;\">{{output}}</pre>"
    }),
    Cn = Ractive.extend({
        data: function() {
            return {
                input: "",
                isEditing: void 0,
                agentTypes: ["observer", "turtles", "patches", "links"],
                agentTypeIndex: 0,
                checkIsReporter: void 0,
                history: [],
                historyIndex: 0,
                workingEntry: {},
                output: ""
            }
        },
        computed: {
            agentType: {
                get: function() {
                    return this.get("agentTypes")[this.get("agentTypeIndex")]
                },
                set: function(e) {
                    var t;
                    if ((t = this.get("agentTypes").indexOf(e)) >= 0) return this.set("agentTypeIndex", t), this.focusCommandCenterEditor()
                }
            }
        },
        components: {
            printArea: _n
        },
        onrender: function() {
            var e, t, n, i;
            return e = () => this.set("agentTypeIndex", (this.get("agentTypeIndex") + 1) % this.get("agentTypes").length), n = e => {
                var t, n;
                return (n = this.get("historyIndex") + e) < 0 ? n = 0 : n > this.get("history").length && (n = this.get("history").length), this.get("historyIndex") === this.get("history").length && this.set("workingEntry", {
                    agentType: this.get("agentType"),
                    input: this.get("input")
                }), n === this.get("history").length ? this.set(this.get("workingEntry")) : (t = this.get("history")[n], this.set(t)), this.set("historyIndex", n)
            }, i = () => {
                var e, t, n, i;
                if ((n = this.get("input")).trim().length > 0) return e = this.get("agentType"), this.get("checkIsReporter")(n) && (n = `show ${n}`), this.set("output", `${this.get("output")}${e}> ${n}\n`), (i = (t = this.get("history")).length > 0 ? t[t.length - 1] : {
                    agentType: "",
                    input: ""
                }).input === n && i.agentType === e || t.push({
                    agentType: e,
                    input: n
                }), this.set("historyIndex", t.length), "observer" !== e && (n = `ask ${e} [ ${n} ]`), this.fire("run", {}, "console", n), this.fire("command-center-run", n), this.set("input", ""), this.set("workingEntry", {})
            }, this.on("clear-history", (function() {
                return this.set("output", "")
            })), t = CodeMirror(this.find(".netlogo-command-center-editor"), {
                value: this.get("input"),
                mode: "netlogo",
                theme: "netlogo-default",
                scrollbarStyle: "null",
                extraKeys: {
                    Enter: i,
                    Up: () => n(-1),
                    Down: () => n(1),
                    Tab: () => e()
                }
            }), this.focusCommandCenterEditor = function() {
                return t.focus()
            }, t.on("beforeChange", (function(e, t) {
                var n;
                return n = t.text.join("").replace(/\n/g, ""), t.update(t.from, t.to, [n]), !0
            })), t.on("change", (() => this.set("input", t.getValue()))), this.observe("input", (function(e) {
                if (e !== t.getValue()) return t.setValue(e), t.execCommand("goLineEnd")
            })), this.observe("isEditing", (function(e) {
                var n;
                t.setOption("readOnly", !!e && "nocursor"), n = this.find(".netlogo-command-center-editor").querySelector(".CodeMirror-scroll").classList, e ? n.add("cm-disabled") : n.remove("cm-disabled")
            }))
        },
        appendText: function(e) {
            this.set("output", this.get("output") + e)
        },
        template: "<div class='netlogo-tab-content netlogo-command-center'\n     grow-in='{disable:\"console-toggle\"}' shrink-out='{disable:\"console-toggle\"}'>\n  <printArea id='command-center-print-area' output='{{output}}'/>\n\n  <div class='netlogo-command-center-input'>\n    <label>\n      <select value=\"{{agentType}}\">\n      {{#agentTypes}}\n        <option value=\"{{.}}\">{{.}}</option>\n      {{/}}\n      </select>\n    </label>\n    <div class=\"netlogo-command-center-editor\"></div>\n    <button on-click='clear-history'>Clear</button>\n  </div>\n</div>"
    });
xn = at.extend({
    data: function() {
        return {
            fontSize: void 0
        }
    },
    twoway: !1,
    components: {
        formFontSize: ft
    },
    genProps: function(e) {
        return {
            fontSize: parseInt(e.fontSize.value)
        }
    },
    partials: {
        title: "Output",
        widgetFields: '<formFontSize id="{{id}}-font-size" name="fontSize" style="margin-left: 0;" value="{{fontSize}}"/>'
    }
});
var En, Sn = rt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
            text: void 0
        }
    },
    components: {
        editForm: xn,
        printArea: _n
    },
    eventTriggers: function() {
        return {}
    },
    appendText: function(e) {
        this.set("text", this.get("text") + e)
    },
    setText: function(e) {
        this.set("text", e)
    },
    minWidth: 15,
    minHeight: 25,
    template: '{{>editorOverlay}}\n{{>output}}\n<editForm idBasis="{{id}}" fontSize="{{widget.fontSize}}" style="width: 285px;" />',
    partials: {
        output: '<div id="{{id}}" class="netlogo-widget netlogo-output netlogo-output-widget {{classes}}" style="{{dims}}">\n  <printArea id="{{id}}-print-area" fontSize="{{widget.fontSize}}" output="{{text}}" />\n</div>'
    }
});
En = Ractive.extend({
    data: function() {
        return {
            isEditing: !1
        }
    },
    onrender: function() {
        var e;
        return (e = CodeMirror(this.find(".netlogo-info-editor"), {
            value: this.get("rawText"),
            tabsize: 2,
            mode: "markdown",
            theme: "netlogo-default",
            editing: this.get("isEditing"),
            lineWrapping: !0
        })).on("change", (() => (this.set("rawText", e.getValue()), this.set("info", e.getValue()))))
    },
    template: "<div class='netlogo-info-editor'></div>"
});
var Tn, Pn = Ractive.extend({
    data: function() {
        return {
            isEditing: !1,
            rawText: void 0,
            info: void 0,
            originalText: void 0
        }
    },
    onrender: function() {
        this.set("originalText", this.get("rawText"))
    },
    observe: {
        isEditing: function(e, t) {
            var n;
            n = this.get("rawText"), t && !e && n !== this.get("originalText") && (this.set("originalText", n), this.fire("info-updated", n))
        }
    },
    components: {
        infoeditor: En
    },
    computed: {
        sanitizedText: function() {
            return C(this.get("rawText"))
        }
    },
    template: "<div class='netlogo-tab-content netlogo-info'\n     grow-in='{disable:\"info-toggle\"}' shrink-out='{disable:\"info-toggle\"}'>\n  {{# !isEditing }}\n    <div class='netlogo-info-markdown'>{{{sanitizedText}}}</div>\n  {{ else }}\n    <infoeditor rawText='{{rawText}}' />\n  {{ / }}\n</div>"
});
Tn = Qe.extend({
    data: function() {
        return {
            contextMenuOptions: [{
                text: "Edit",
                isEnabled: !0,
                action: () => this.fire("edit-title")
            }],
            isEditing: void 0,
            title: void 0
        }
    },
    on: {
        "edit-title": function() {
            var e, t, n, i;
            e = function(e) {
                return "" === e ? "Untitled" : e
            }, this.get("isEditing") && (n = this.get("title"), t = prompt("Enter a new name for your model", n), this.set("title", null != (i = e(t)) ? i : n), this.fire("title-changed", this.get("title")))
        }
    },
    template: '<div class="netlogo-model-masthead">\n  <div class="flex-column netlogo-model-title-wrapper">\n    <h2 id="netlogo-title"\n        on-contextmenu="@this.fire(\'show-context-menu\', @event)"\n        class="netlogo-widget netlogo-model-title {{classes}}{{# isEditing }} interface-unlocked initial-color{{/}}"\n        on-dblclick="edit-title">\n      {{ title }}\n    </h2>\n    {{# hasWorkInProgress}}\n    <p class="netlogo-model-modified">Modified from original</p>\n    {{/}}\n  </div>\n</div>'
});
var An = Tn;
var In, Ln, zn, Mn = Ractive.extend({
    data: function() {
        return {
            isUp: !1,
            hasWorkInProgress: !1,
            statusTimer: 0
        }
    },
    on: {
        init: function() {
            if (this.get("hasWorkInProgress")) return this.showStatus()
        },
        "close-status": function() {
            return this.closeStatus()
        }
    },
    computed: {
        sourceMessage: function() {
            switch (this.get("sourceType")) {
                case "url":
                    return "model from the link";
                case "disk":
                    return "model from the uploaded file";
                case "new":
                    return "new blank model";
                case "script-element":
                    return "model from the page";
                default:
                    return "model"
            }
        }
    },
    showStatus: function() {
        var e, t;
        this.set("isUp", !0), e = 20, this.set("statusTimer", e), t = () => {
            e < 1 ? this.closeStatus() : (e -= 1, this.set("statusTimer", e), setTimeout(t, 1e3))
        }, setTimeout(t, 1e3)
    },
    closeStatus: function() {
        return this.set("isUp", !1)
    },
    template: '{{# isUp }}\n<div class="netlogo-model-status flex-row">\n  <div>\n    This model has been loaded with previous work in progress found in your cache.\n    To reload the unmodified {{sourceMessage}},\n    press <span class="netlogo-model-status-link" on-click="revert-wip">File: <strong>Revert to Original</strong></span>\n    ({{statusTimer}}).\n  </div>\n  <div class="netlogo-model-status-closer" on-click="close-status">\n  X\n  </div>\n</div>\n{{/}}'
});
zn = function(e) {
    var t, n, i;
    return [i, n, t] = Rt(e), (-1 << 24) + (i << 16) + (n << 8) + t
}, In = Ractive.extend({
    data: function() {
        return {
            color: void 0,
            display: void 0,
            index: void 0,
            interval: void 0,
            isExpanded: !1,
            modeIndex: void 0,
            setupCode: void 0,
            shouldShowInLegend: void 0,
            updateCode: void 0
        }
    },
    components: {
        colorInput: $t,
        formCheckbox: st,
        formCode: Ht,
        labeledInput: lt,
        spacer: dt
    },
    computed: {
        id: function() {
            return `${this.parent.get("id")}-pen-${this.get("index")}`
        },
        mode: {
            get: function() {
                return ["Line", "Bar", "Point"][this.get("modeIndex")]
            },
            set: function(e) {
                return this.set("modeIndex", ["Line", "Bar", "Point"].indexOf(e))
            }
        },
        nlColor: {
            get: function() {
                var e, t, n, i;
                return n = function(e) {
                    return Number(e).toString(16).padStart(2, "0")
                }, i = (65280 & (t = this.get("color"))) >> 8, e = 255 & t, St(`#${n((16711680&t)>>16)}${n(i)}${n(e)}`)
            },
            set: function(e) {
                this.set("color", zn(e))
            }
        }
    },
    on: {
        "*.code-changed": function({
            component: e
        }, t) {
            var n;
            return (n = e.get("id")).endsWith("setup-code") ? this.set("setupCode", t) : n.endsWith("update-code") ? this.set("updateCode", t) : console.warn("Unknown plot pen code container!", e), !1
        },
        "remove-pen": function() {
            return this.parent.fire("remove-child-pen", this.get("index")), !1
        },
        "validate-name": function({
            ractive: e
        }) {
            var t, n, i, r;
            return n = this.getTitleElem(), t = n.value.toUpperCase(), i = function(n) {
                return n.get("display").toUpperCase() === t && n !== e
            }, r = e.parent.findAllComponents("formPen").some(i) ? `There is already a pen with the name '${n.value}'` : "", n.setCustomValidity(r), !1
        }
    },
    getTitleElem: function() {
        return this.find(`#${this.get("id")}-name`)
    },
    template: '<div class="flex-column plot-pen-row{{#isExpanded}} open{{/}}">\n  <div class="flex-row">\n    <label for="{{id}}-is-expanded" class="expander widget-edit-checkbox-wrapper">\n      <input id="{{id}}-is-expanded" class="widget-edit-checkbox"\n             style="display: none;" type="checkbox"\n             checked="{{isExpanded}}" twoway="true" />\n      <span class="widget-edit-input-label expander-label">&#9654;</span>\n    </label>\n    <colorInput id="{{id}}-color" name="color" value="{{nlColor}}" style="min-height: 33px; min-width: 33px;" />\n    <input id="{{id}}-name" name="name" type="text" placeholder="(Required)"\n           class="widget-edit-text widget-edit-input widget-edit-inputbox"\n           style="border-radius: 4px; margin: auto 10px;" value="{{display}}"\n           on-input="validate-name" required />\n    <input class="plot-pen-delete" type="button" on-click="remove-pen" value="Delete" />\n  </div>\n  {{# isExpanded }}\n    <spacer height="10px" />\n    <div class="flex-row" style="justify-content: space-between;">\n      <select id="{{id}}-mode" name="mode" class="widget-edit-dropdown" style="margin-left: 0; width: 80px;" value="{{mode}}">\n        <option value="Line" >Line </option>\n        <option value="Bar"  >Bar  </option>\n        <option value="Point">Point</option>\n      </select>\n      <div>\n        <label for="{{id}}-interval" class="widget-edit-input-label" style="margin-right: 5px;">Interval:</label>\n        <input id="{{id}}-interval" name="interval" class="widget-edit-text widget-edit-input widget-edit-inputbox"\n               style="margin: 0 10px 0 0; width: 70px;" min="0" max="10000" type="number" step="any" value="{{interval}}">\n      </div>\n      <formCheckbox id="{{id}}-in-legend?" isChecked={{shouldShowInLegend}} labelText="In legend?" name="legend" />\n    </div>\n    <spacer height="10px" />\n    <formCode id="{{id}}-setup-code"  name="setupCode"  value="{{setupCode}}"  label="Pen setup commands"   style="width: 100%;" />\n    <spacer height="10px" />\n    <formCode id="{{id}}-update-code" name="updateCode" value="{{updateCode}}" label="Pen update commands"  style="width: 100%;" />\n    <spacer height="10px" />\n  {{/}}\n</div>'
}), Ln = at.extend({
    data: function() {
        return {
            autoPlotOn: void 0,
            display: void 0,
            guiPens: void 0,
            legendOn: void 0,
            pens: void 0,
            setupCode: void 0,
            updateCode: void 0,
            xLabel: void 0,
            xMax: void 0,
            xMin: void 0,
            yLabel: void 0,
            yMax: void 0,
            yMin: void 0
        }
    },
    components: {
        formCheckbox: ot,
        formCode: Ht,
        formPen: In,
        labeledInput: lt,
        spacer: dt
    },
    twoway: !1,
    _oldName: void 0,
    _trackedPens: void 0,
    _clonePens: function(e) {
        var t;
        return (null != (t = window.structuredClone) ? t : function(e) {
            return JSON.parse(JSON.stringify(e))
        })(e)
    },
    getOldName: function() {
        return this._oldName
    },
    getRenamings: function() {
        var e;
        return e = function(e, {
            name: t,
            pen: {
                display: n
            }
        }) {
            return t !== n && (e[t] = n), e
        }, this._trackedPens.reduce(e, {})
    },
    genProps: function(e) {
        var t, n, i, r, o, s;
        return n = function(e) {
            return function(t) {
                return e.findAllComponents("formCode").find((function(e) {
                    return e.get("id") === t
                })).findComponent("codeContainer").get("code")
            }
        }, r = null != e.name.length ? e.name[0].value : e.name.value, t = {
            recompileForPlot: this.get("amProvingMyself")
        }, i = this.get("guiPens"), o = this._clonePens(i), this.set("guiPens", []), s = function(e, t) {
            return "" === e ? t : e
        }, {
            autoPlotOn: e.autoPlotOn.checked,
            display: r,
            legendOn: e.legendOn.checked,
            pens: o,
            setupCode: n(this)(`${this.get("id")}-setup-code`),
            updateCode: n(this)(`${this.get("id")}-update-code`),
            xAxis: s(e.xLabel.value, null),
            xmax: e.xMax.valueAsNumber,
            xmin: e.xMin.valueAsNumber,
            yAxis: s(e.yLabel.value, null),
            ymax: e.yMax.valueAsNumber,
            ymin: e.yMin.valueAsNumber,
            __extras: t
        }
    },
    on: {
        "add-new": function() {
            var e, t, n, i, r, o, s, a, l;
            return e = function() {
                var e, t;
                for (t = [], i = e = 0; e <= 13; i = ++e) t.push(5 + 10 * i);
                return t
            }(), s = this.findAllComponents("formPen").map((function(e) {
                return e.get("nlColor")
            })), l = new Set(s), o = null != (a = e.find((function(e) {
                return !l.has(e)
            }))) ? a : 0, n = {
                color: zn(o),
                display: `Pen ${this.get("guiPens").length+1}`,
                inLegend: !0,
                interval: 1,
                mode: 0,
                setupCode: "",
                type: "pen",
                updateCode: ""
            }, this.get("guiPens").push(n), this.update("guiPens"), (r = (t = this.findAllComponents("formPen"))[t.length - 1]).set("isExpanded", !0), r.fire("validate-name"), !1
        },
        "cancel-edit": function() {
            return this.set("guiPens", []), !0
        },
        init: function() {
            return this._oldName = "", this._trackedPens = [], null == this.get("pens") && this.set("pens", []), this.set("guiPens", []), this.set("validateTitle", this.validateTitle)
        },
        "remove-child-pen": function(e, t) {
            return this.splice("guiPens", t, 1), !1
        },
        "show-yourself": function() {
            var e;
            return this._oldName = this.get("display"), e = this._clonePens(this.get("pens")), this._trackedPens = e.map((function(e) {
                return {
                    name: e.display,
                    pen: e
                }
            })), this.set("guiPens", e), !0
        }
    },
    validateTitle: function(e) {
        var t, n, i, r, o;
        return ({
            node: i,
            ractive: r
        } = e), t = i.value.toUpperCase(), n = r.parent.parent.get("widget"), o = Object.values(r.parent.parent.parent.get("widgetObj")).filter((function(e) {
            return "plot" === e.type
        })).some((function(e) {
            return e.display.toUpperCase() === t && e !== n
        })) ? `There is already a plot with the name '${i.value}'` : "", i.setCustomValidity(o), !1
    },
    partials: {
        title: "Plot",
        widgetFields: '<spacer height="15px" />\n<div class="flex-column plot-editor" style="align-items: center;">\n  <labeledInput id="{{id}}-name" labelStr="Name:" name="name" type="text"\n                class="widget-edit-inputbox" placeholder="(Required)"\n                value="{{display}}" onInput="{{validateTitle}}"\n                attrs="required" />\n  <spacer height="10px" />\n  <div class="flex-row" style="justify-content: space-evenly;">\n    <div class="flex-column">\n      <div class="flex-row">\n        <label for="{{id}}-x-label" class="widget-edit-input-label" style="margin-right: 0px; min-width: 70px;">X label:</label>\n        <input id="{{id}}-x-label" name="xLabel" class="widget-edit-text widget-edit-input widget-edit-inputbox" type="text" value="{{xLabel}}">\n      </div>\n      <spacer height="5px" />\n      <div class="flex-row">\n        <label for="{{id}}-x-min" class="widget-edit-input-label" style="margin-right: 0px; min-width: 70px;">X min:</label>\n        <input id="{{id}}-x-min" name="xMin" class="widget-edit-text widget-edit-input widget-edit-inputbox" type="number" value="{{xMin}}" step="any">\n      </div>\n      <spacer height="5px" />\n      <div class="flex-row">\n        <label for="{{id}}-x-max" class="widget-edit-input-label" style="margin-right: 0px; min-width: 70px;">X max:</label>\n        <input id="{{id}}-x-max" name="xMax" class="widget-edit-text widget-edit-input widget-edit-inputbox" type="number" value="{{xMax}}" step="any">\n      </div>\n    </div>\n    <spacer width="20px" />\n    <div class="flex-column">\n      <div class="flex-row">\n        <label for="{{id}}-y-label" class="widget-edit-input-label" style="margin-right: 0px; min-width: 70px;">Y label:</label>\n        <input id="{{id}}-y-label" name="yLabel" class="widget-edit-text widget-edit-input widget-edit-inputbox" type="text" value="{{yLabel}}">\n      </div>\n      <spacer height="5px" />\n      <div class="flex-row">\n        <label for="{{id}}-y-min" class="widget-edit-input-label" style="margin-right: 0px; min-width: 70px;">Y min:</label>\n        <input id="{{id}}-y-min" name="yMin" class="widget-edit-text widget-edit-input widget-edit-inputbox" type="number" value="{{yMin}}" step="any">\n      </div>\n      <spacer height="5px" />\n      <div class="flex-row">\n        <label for="{{id}}-y-max" class="widget-edit-input-label" style="margin-right: 0px; min-width: 70px;">Y max:</label>\n        <input id="{{id}}-y-max" name="yMax" class="widget-edit-text widget-edit-input widget-edit-inputbox" type="number" value="{{yMax}}" step="any">\n      </div>\n    </div>\n  </div>\n  <spacer height="10px" />\n  <div class="flex-row" style="justify-content: space-evenly; width: 100%;">\n    <formCheckbox id="{{id}}-auto-scale"  isChecked={{autoPlotOn}} labelText="Auto scale?"     name="autoPlotOn" />\n    <formCheckbox id="{{id}}-show-legend" isChecked={{legendOn}}   labelText="Display legend?" name="legendOn"   />\n  </div>\n  <spacer height="10px" />\n  <div class="flex-column" style="justify-content: left; width: 100%;">\n    <formCode id="{{id}}-setup-code" isCollapsible="true" isExpanded="false"\n              value="{{setupCode}}" label="Plot setup commands"\n              style="width: 100%;" />\n  </div>\n  <spacer height="10px" />\n  <div class="flex-column" style="justify-content: left; width: 100%;">\n    <formCode id="{{id}}-update-code" isCollapsible="true" isExpanded="false"\n              value="{{updateCode}}" label="Plot update commands"\n              style="width: 100%;" />\n  </div>\n  <spacer height="10px" />\n  <div class="flex-column" style="justify-content: left; margin-left: 18px; width: 100%;">Plot pens</div>\n  <div style="border: 2px solid black; overflow-y: auto; width: 95%;">\n    {{#each guiPens: index}}\n      <formPen color="{{color}}" display="{{display}}" index="{{index}}"\n               interval="{{interval}}" modeIndex="{{mode}}" setupCode="{{setupCode}}"\n               shouldShowInLegend="{{inLegend}}" updateCode="{{updateCode}}" />\n    {{/each}}\n    <input type="button" on-click="@this.fire(\'add-new\')" style="height: 26px; margin: 8px 0 8px 6px;" value="Add Pen" />\n  </div>\n</div>\n<spacer height="10px" />'
    }
});
var Bn, Rn = rt.extend({
    data: function() {
        return {
            contextMenuOptions: [this.standardOptions(this).edit, this.standardOptions(this).delete],
            menuIsOpen: !1,
            resizeCallback: function(e, t) {}
        }
    },
    components: {
        editForm: Ln
    },
    eventTriggers: function() {
        return {
            autoPlotOn: [this._weg.recompileForPlot],
            display: [this._weg.recompileForPlot],
            legendOn: [this._weg.recompileForPlot],
            pens: [this._weg.recompileForPlot],
            setupCode: [this._weg.recompileForPlot],
            updateCode: [this._weg.recompileForPlot],
            xAxis: [this._weg.recompileForPlot],
            xmax: [this._weg.recompileForPlot],
            xmin: [this._weg.recompileForPlot],
            yAxis: [this._weg.recompileForPlot],
            ymax: [this._weg.recompileForPlot],
            ymin: [this._weg.recompileForPlot]
        }
    },
    observe: {
        "left right top bottom": function() {
            this.get("resizeCallback")(this.get("right") - this.get("left"), this.get("bottom") - this.get("top"))
        }
    },
    on: {
        render: function() {
            var e, t, n;
            return e = this, t = document.querySelector(`#${this.get("id")}`), (n = new MutationObserver((function(t) {
                return t.forEach((function({
                    addedNodes: t
                }) {
                    var i, r;
                    if (null != (i = Array.from(t).find((function(e) {
                            return e.classList.contains("highcharts-container")
                        })))) return n.disconnect(), (r = new MutationObserver((function(t) {
                        return t.forEach((function({
                            addedNodes: t
                        }) {
                            var n;
                            if (null != (n = Array.from(t).find((function(e) {
                                    return e.classList.contains("highcharts-contextmenu")
                                })))) return e.set("menuIsOpen", !0), r.disconnect(), new MutationObserver((function() {
                                return e.set("menuIsOpen", "none" !== n.style.display)
                            })).observe(n, {
                                attributes: !0
                            })
                        }))
                    }))).observe(i, {
                        childList: !0
                    })
                }))
            }))).observe(t, {
                childList: !0
            })
        }
    },
    getExtraNotificationArgs: function() {
        return [this.get("widget").display]
    },
    minWidth: 100,
    minHeight: 85,
    template: '{{>editorOverlay}}\n<div id="{{id}}" class="netlogo-widget netlogo-plot {{classes}}"\n     style="{{dims}}{{#menuIsOpen}}z-index: 10;{{/}}"></div>\n<editForm autoPlotOn={{widget.autoPlotOn}} display="{{widget.display}}" idBasis="{{id}}"\n          legendOn={{widget.legendOn}} pens="{{widget.pens}}"\n          setupCode="{{widget.setupCode}}" updateCode="{{widget.updateCode}}"\n          xLabel="{{widget.xAxis}}" xMin="{{widget.xmin}}" xMax="{{widget.xmax}}"\n          yLabel="{{widget.yAxis}}" yMin="{{widget.ymin}}" yMax="{{widget.ymax}}" />'
});
Bn = Ractive.extend({
    _isLocked: !1,
    _xAdjustment: void 0,
    _yAdjustment: void 0,
    data: function() {
        return {
            isEnabled: !1,
            isVisible: !0,
            target: null
        }
    },
    computed: {
        dims: function() {
            return `position: absolute;\nleft: ${this.get("left")}px; top: ${this.get("top")}px;\nwidth: ${this.get("width")}px; height: ${this.get("height")}px;`
        },
        midX: function() {
            return this.get("width") / 2 - 5
        },
        midY: function() {
            return this.get("height") / 2 - 5
        },
        left: function() {
            return this.get("target").get("left") - 5
        },
        right: function() {
            return this.get("target").get("right") + 5
        },
        top: function() {
            return this.get("target").get("top") - 5
        },
        bottom: function() {
            return this.get("target").get("bottom") + 5
        },
        height: function() {
            return this.get("bottom") - this.get("top")
        },
        width: function() {
            return this.get("right") - this.get("left")
        }
    },
    clearTarget: function() {
        var e;
        e = this.get("target"), this._isLocked || null == e || (e.destroyed || e.set("isSelected", !1), this.set("target", null))
    },
    setTarget: function(e) {
        this._isLocked || setTimeout((() => (this.clearTarget(), this.set("target", e), e.set("isSelected", !0))), 0)
    },
    lockTarget: function(e) {
        this._isLocked || null == e || (this.setTarget(e), this._isLocked = !0)
    },
    unlockTarget: function() {
        this._isLocked = !1
    },
    on: {
        "start-handle-drag": function(e) {
            return Ze.dragstart(this, e, (function() {
                return !0
            }), ((e, t) => {
                var n, i;
                return ({
                    left: n,
                    top: i
                } = this.find(".widget-resizer").getBoundingClientRect()), this._xAdjustment = n - this.get("left"), this._yAdjustment = i - this.get("top")
            }))
        },
        "drag-handle": function(e) {
            return Ze.drag(this, e, ((t, n) => {
                var i, r, o, s, a, l, d, c, u, h, p, f, g, m, v, w, y, b, x, k, _, C, E;
                return y = function(e) {
                    return e - (e - 10 * Math.round(e / 10))
                }, d = !(l = window.navigator.platform.startsWith("Mac")) && !e.original.ctrlKey || l && !e.original.metaKey, [b, x] = d ? [t, n].map(y) : [t, n], C = b - this._xAdjustment, E = x - this._yAdjustment, g = (k = this.get("target")).get("left"), m = k.get("right"), v = k.get("top"), p = k.get("bottom"), c = ["left", C], w = ["right", C], _ = ["top", E], r = ["bottom", E], a = e.original.target.dataset.direction, i = function() {
                    switch (a) {
                        case "Bottom":
                            return [r];
                        case "BottomLeft":
                            return [r, c];
                        case "BottomRight":
                            return [r, w];
                        case "Left":
                            return [c];
                        case "Right":
                            return [w];
                        case "Top":
                            return [_];
                        case "TopLeft":
                            return [_, c];
                        case "TopRight":
                            return [_, w];
                        default:
                            throw new Error(`What the heck resize direction is '${a}'?`)
                    }
                }(), o = (e, t) => {
                    var n, i, r;
                    return i = function() {
                        switch (e) {
                            case "left":
                                return "right";
                            case "right":
                                return "left";
                            case "top":
                                return "bottom";
                            case "bottom":
                                return "top";
                            default:
                                throw new Error(`What the heck opposite direction is '${e}'?`)
                        }
                    }(), r = k.get(i), n = function() {
                        switch (i) {
                            case "left":
                                return Math.max(t, r + k.minWidth);
                            case "top":
                                return Math.max(t, r + k.minHeight);
                            case "right":
                                return Math.min(t, r - k.minWidth);
                            case "bottom":
                                return Math.min(t, r - k.minHeight);
                            default:
                                throw new Error(`No, really, what the heck opposite direction is '${i}'?`)
                        }
                    }(), Math.round(n)
                }, u = (s = i.map((function([e, t]) {
                    return [e, o(e, t)]
                }))).every((function([e, t]) {
                    return !(("left" === e || "top" === e) && t < 0)
                })) ? s.reduce((function(e, [t, n]) {
                    return e[t] = n, e
                }), {}) : {}, f = {
                    left: g,
                    top: v,
                    bottom: p,
                    right: m
                }, h = Object.assign(f, u), this.get("target").handleResize(h)
            }))
        },
        "stop-handle-drag": function() {
            return Ze.dragend(this, (() => (this._xAdjustment = void 0, this._yAdjustment = void 0, this.get("target").handleResizeEnd())))
        }
    },
    template: '{{# isEnabled && isVisible && target !== null }}\n<div class="widget-resizer" style="{{dims}}">\n  {{ #target.get("resizeDirs").includes("bottom")      }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="Bottom"      style="cursor:  s-resize; bottom:          0; left:   {{midX}};"></div>{{/}}\n  {{ #target.get("resizeDirs").includes("bottomLeft")  }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="BottomLeft"  style="cursor: sw-resize; bottom:          0; left:          0;"></div>{{/}}\n  {{ #target.get("resizeDirs").includes("bottomRight") }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="BottomRight" style="cursor: se-resize; bottom:          0; right:         0;"></div>{{/}}\n  {{ #target.get("resizeDirs").includes("left")        }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="Left"        style="cursor:  w-resize; bottom:   {{midY}}; left:          0;"></div>{{/}}\n  {{ #target.get("resizeDirs").includes("right")       }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="Right"       style="cursor:  e-resize; bottom:   {{midY}}; right:         0;"></div>{{/}}\n  {{ #target.get("resizeDirs").includes("top")         }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="Top"         style="cursor:  n-resize; top:             0; left:   {{midX}};"></div>{{/}}\n  {{ #target.get("resizeDirs").includes("topLeft")     }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="TopLeft"     style="cursor: nw-resize; top:             0; left:          0;"></div>{{/}}\n  {{ #target.get("resizeDirs").includes("topRight")    }}<div draggable="true" on-drag="drag-handle" on-dragstart="start-handle-drag" on-dragend="stop-handle-drag" class="widget-resize-handle" data-direction="TopRight"    style="cursor: ne-resize; top:             0; right:         0;"></div>{{/}}\n</div>\n{{/}}'
});
var On, Nn, Un = Bn;
({
    maybe: Nn,
    None: On
} = tortoise_require("brazier/maybe"));
var Dn, Vn, Wn, $n, Fn = Ractive.extend({
    lastUpdateMs: void 0,
    startX: void 0,
    startY: void 0,
    view: void 0,
    data: function() {
        return {
            isVisible: void 0,
            state: void 0,
            wareaHeight: void 0,
            wareaWidth: void 0,
            xLoc: 0,
            yLoc: 0
        }
    },
    observe: {
        isVisible: function(e, t) {
            e ? (this.set("xLoc", .1 * this.get("wareaWidth")), this.set("yLoc", .1 * this.get("wareaHeight") + 150), setTimeout((() => this.find("#async-user-dialog").focus()), 0), this.fire("dialog-opened", this)) : this.fire("dialog-closed", this)
        }
    },
    on: {
        "close-popup": function() {
            return this.set("isVisible", !1), !1
        },
        "handle-key": function({
            original: {
                keyCode: e
            }
        }) {
            var t;
            return 13 === e ? (t = function() {
                switch (this.get("state").type) {
                    case "chooser":
                        return "async-dialog-chooser-ok";
                    case "message":
                        return "async-dialog-message-ok";
                    case "text-input":
                        return "async-dialog-input-ok";
                    case "yes-or-no":
                        return "async-dialog-yon-yes";
                    default:
                        throw new Error(`Unknown async dialog type: ${this.get("state").type}`)
                }
            }.call(this), document.getElementById(t).click(), !1) : 27 === e ? this.fire("close-popup") : void 0
        },
        "perform-halt": function() {
            return this.fire("close-popup"), this.get("state").callback(On), !1
        },
        "perform-chooser-ok": function() {
            var e, t;
            return this.fire("close-popup"), t = (e = document.getElementById("async-dialog-chooser")).selectedIndex, e.selectedIndex = 0, this.get("state").callback(Nn(t)), !1
        },
        "perform-input-ok": function() {
            var e, t;
            return this.fire("close-popup"), t = (e = document.getElementById("async-dialog-text-input")).value, e.value = "", this.get("state").callback(Nn(t)), !1
        },
        "perform-message-ok": function() {
            return this.fire("close-popup"), this.get("state").callback(Nn(0)), !1
        },
        "perform-no": function() {
            return this.fire("close-popup"), this.get("state").callback(Nn(!1)), !1
        },
        "perform-yes": function() {
            return this.fire("close-popup"), this.get("state").callback(Nn(!0)), !1
        },
        "show-state": function(e, t) {
            return this.set("state", t), this.set("isVisible", !0), !1
        },
        "show-chooser": function(e, t, n, i) {
            return this.fire("show-state", {}, {
                type: "chooser",
                message: t,
                choices: n,
                callback: i
            }), !1
        },
        "show-text-input": function(e, t, n) {
            return this.fire("show-state", {}, {
                type: "text-input",
                message: t,
                callback: n
            }), !1
        },
        "show-yes-or-no": function(e, t, n) {
            return this.fire("show-state", {}, {
                type: "yes-or-no",
                message: t,
                callback: n
            }), !1
        },
        "show-message": function(e, t, n) {
            return this.fire("show-state", {}, {
                type: "message",
                message: t,
                callback: n
            }), !1
        },
        "start-drag": function(e) {
            return Ze.dragstart(this, e, (function(e, t) {
                var n;
                switch ((n = document.elementFromPoint(e, t)).tagName.toLowerCase()) {
                    case "input":
                        return "number" !== n.type.toLowerCase() && "text" !== n.type.toLowerCase();
                    case "textarea":
                        return !1;
                    default:
                        return !0
                }
            }), ((e, t) => (this.startX = this.get("xLoc") - e, this.startY = this.get("yLoc") - t)))
        },
        "drag-dialog": function(e) {
            return Ze.drag(this, e, ((e, t) => (this.set("xLoc", this.startX + e), this.set("yLoc", this.startY + t))))
        },
        "stop-drag": function() {
            return Ze.dragend(this, (function() {}))
        }
    },
    template: '<div id="async-user-dialog" class="async-popup"\n     style="{{# !isVisible }}display: none;{{/}} top: {{yLoc}}px; left: {{xLoc}}px; max-width: {{wareaWidth * .4}}px; {{style}}"\n     draggable="true" on-drag="drag-dialog" on-dragstart="start-drag" on-dragend="stop-drag"\n     on-keydown="handle-key" tabindex="0">\n  <div id="{{id}}-closer" class="widget-edit-closer" on-click="perform-halt">X</div>\n  <div class="async-dialog-message">{{state.message}}</div>\n  <div id="async-dialog-controls" class="async-dialog-controls">{{>controls}}</div>\n</div>',
    partials: {
        controls: '{{# state.type === \'message\' }}\n  <div class="async-dialog-button-row">\n    <input id="async-dialog-message-ok" type="button" on-click="perform-message-ok" value="OK"/>\n  </div>\n\n{{ elseif state.type === \'text-input\' }}\n  <input id="async-dialog-text-input" class="async-dialog-text-input" type="text" />\n  <div class="async-dialog-button-row">\n    <input id="async-dialog-input-ok" type="button" on-click="perform-input-ok" value="OK"/>\n  </div>\n\n{{ elseif state.type === \'chooser\' }}\n  <div class="h-center-flexbox">\n    <select id="async-dialog-chooser" class="async-dialog-chooser" style="max-width: {{wareaWidth * .3}}px">\n    {{#state.choices:i}}\n      <option {{# i === 0}} selected{{/}}>{{state.choices[i]}}</option>\n    {{/}}\n    </select>\n  </div>\n  <div class="async-dialog-button-row">\n    <input id="async-dialog-chooser-ok" type="button" on-click="perform-chooser-ok" value="OK"/>\n  </div>\n\n{{ elseif state.type === \'yes-or-no\' }}\n  <div class="async-dialog-button-row">\n    <input id="async-dialog-yon-no"  type="button"                           on-click="perform-no"  value="No" />\n    <input id="async-dialog-yon-yes" type="button" style="margin-left: 5px;" on-click="perform-yes" value="Yes"/>\n  </div>\n\n{{else}}\n  Invalid dialog state.\n\n{{/}}'
    }
});
$n = function(e, t, n = !0, i = function() {
    return !1
}) {
    return {
        text: `Create ${e}`,
        enabler: i,
        isEnabled: n,
        action: function(e, n, i) {
            return e.fire("create-widget", t, n, i)
        }
    }
}, Wn = [
    ["Button", "button"],
    ["Chooser", "chooser"],
    ["Input", "inputBox"],
    ["Note", "textBox"],
    ["Monitor", "monitor"],
    ["Output", "output", !1, (Vn = function(e) {
        return function(t) {
            return null != t.parent ? Vn(e)(t.parent) : null == t.findComponent(e)
        }
    })("outputWidget")],
    ["Plot", "plot"],
    ["Slider", "slider"],
    ["Switch", "switch"]
].map((function(e) {
    return $n(...e)
})), Dn = Ractive.extend({
    data: function() {
        return {
            options: void 0,
            mouseX: 0,
            mouseY: 0,
            target: void 0,
            visible: !1
        }
    },
    on: {
        "ignore-click": function() {
            return !1
        },
        "cover-thineself": function() {
            this.set("visible", !1), this.fire("unlock-selection")
        },
        "reveal-thineself": function(e, t, n, i) {
            var r;
            this.set("target", t), this.set("options", null != (r = null != t ? t.get("contextMenuOptions") : void 0) ? r : Wn), this.set("visible", this.get("options").length > 0), this.set("mouseX", n), this.set("mouseY", i), t instanceof rt && this.fire("lock-selection", t)
        }
    },
    template: '{{# visible }}\n<div id="netlogo-widget-context-menu" class="widget-context-menu" style="top: {{mouseY}}px; left: {{mouseX}}px;">\n  <div id="{{id}}-context-menu" class="netlogo-widget-editor-menu-items">\n    <ul class="context-menu-list">\n      {{# options }}\n        {{# (..enabler !== undefined && ..enabler(target)) || ..isEnabled }}\n          <li class="context-menu-item" on-mouseup="..action(target, mouseX, mouseY)">{{..text}}</li>\n        {{ else }}\n          <li class="context-menu-item disabled" on-mouseup="ignore-click">{{..text}}</li>\n        {{/}}\n      {{/}}\n    </ul>\n  </div>\n</div>\n{{/}}'
});
var jn, Hn, qn, Xn = Dn,
    Yn = Ractive.extend({
        data: function() {
            return {
                isVisible: void 0,
                label: void 0,
                value: void 0
            }
        },
        twoway: !1,
        template: '<span class="netlogo-label">\n  {{ # isVisible }}\n    {{label}}: {{value}}\n  {{else}}\n    &nbsp;\n  {{/}}\n</span>'
    });
jn = function(e, t, n, i, r, o, s, a) {
    var l, d;
    return d = {
        checkIsReporter: a,
        code: n,
        consoleOutput: "",
        exportForm: !1,
        hasFocus: !1,
        workInProgressState: s,
        height: 0,
        info: i,
        isEditing: !1,
        isHelpVisible: !1,
        isOverlayUp: !1,
        isReadOnly: r,
        isResizerVisible: !0,
        isStale: !1,
        isVertical: !0,
        lastCompiledCode: n,
        lastCompileFailed: !1,
        lastDragX: void 0,
        lastDragY: void 0,
        modelTitle: o.getModelTitle(),
        outputWidgetOutput: "",
        primaryView: void 0,
        someDialogIsOpen: !1,
        someEditFormIsOpen: !1,
        source: o,
        speed: 0,
        ticks: "",
        ticksStarted: !1,
        widgetObj: t.reduce((function(e, t, n) {
            return e[n] = t, e
        }), {}),
        width: 0
    }, l = function(e) {
        return function(t, n) {
            var i, r, o, s, a;
            for (n = t.processParams(n), a = function(n) {
                    return function(i) {
                        var o, s, a;
                        for (i.target.classList.remove(e), s = 0, a = r.length; s < a; s++) o = r[s], i.target.removeEventListener(o, n);
                        return t.complete()
                    }
                }, o = 0, s = (r = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "msAnimationEnd"]).length; o < s; o++) i = r[o], t.node.addEventListener(i, a(a));
            return t.node.classList.add(e)
        }
    }, Ractive.transitions.grow = l("growing"), Ractive.transitions.shrink = l("shrinking"), new Ractive({
        el: e,
        template: qn,
        partials: Hn,
        components: {
            asyncDialog: Fn,
            console: Cn,
            contextMenu: Xn,
            editableTitle: An,
            codePane: gn,
            helpDialog: kn,
            infotab: Pn,
            statusPopup: Mn,
            resizer: Un,
            tickCounter: Yn,
            labelWidget: Yt,
            switchWidget: bn,
            buttonWidget: on,
            sliderWidget: an,
            chooserWidget: dn,
            monitorWidget: un,
            inputWidget: tn,
            outputWidget: Sn,
            plotWidget: Rn,
            viewWidget: bt,
            spacer: dt
        },
        computed: {
            stateName: function() {
                return this.get("isEditing") ? this.get("someEditFormIsOpen") ? "authoring - editing widget" : "authoring - plain" : "interactive"
            },
            isRevertable: function() {
                return !this.get("isEditing") && this.get("hasWorkInProgress")
            },
            disableWorkInProgress: function() {
                return "disabled" === this.get("workInProgressState")
            },
            hasWorkInProgress: function() {
                return "enabled-with-wip" === this.get("workInProgressState")
            },
            hasRevertedWork: function() {
                return "enabled-with-reversion" === this.get("workInProgressState")
            }
        },
        data: function() {
            return d
        }
    })
}, qn = '<statusPopup\n  hasWorkInProgress={{hasWorkInProgress}}\n  isSessionLoopRunning={{isSessionLoopRunning}}\n  sourceType={{source.type}}\n  />\n\n<div class="netlogo-model netlogo-display-{{# isVertical }}vertical{{ else }}horizontal{{/}}" style="min-width: {{width}}px;"\n     tabindex="1" on-keydown="@this.fire(\'check-action-keys\', @event)"\n     on-focus="@this.fire(\'track-focus\', @node)"\n     on-blur="@this.fire(\'track-focus\', @node)">\n  <div id="modal-overlay" class="modal-overlay" style="{{# !isOverlayUp }}display: none;{{/}}" on-click="drop-overlay"></div>\n\n  <div class="netlogo-display-vertical">\n\n    <div class="netlogo-header">\n      <div class="netlogo-subheader">\n        <div class="netlogo-powered-by">\n          <a href="http://ccl.northwestern.edu/netlogo/">\n            <img style="vertical-align: middle;" alt="NetLogo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAANcSURBVHjarJRdaFxFFMd/M/dj7252uxubKms+bGprVyIVbNMWWqkQqtLUSpQWfSiV+oVFTcE3DeiDgvoiUSiCYLH2oVoLtQ+iaaIWWtE2FKGkkSrkq5svN+sm7ma/7p3x4W42lEbjQw8MM8yc87/nzPnNFVprbqWJXyMyXuMqx1Ni6N3ny3cX8tOHNLoBUMvESoFI2Xbs4zeO1lzREpSrMSNS1zkBDv6uo1/noz1H7mpvS4SjprAl2AZYEqzKbEowBAgBAkjPKX2599JjT7R0bj412D0JYNplPSBD1G2SmR/e6u1ikEHG2vYiGxoJmxAyIGSCI8GpCItKimtvl2JtfGujDNkX6epuAhCjNeAZxM1ocPy2Qh4toGQ5DLU+ysiuA2S3P0KgJkjAgEAlQylAA64CG/jlUk6//ng4cNWmLK0yOPNMnG99Rs9LQINVKrD+wmke7upg55PrWP3eYcwrlykpKCkoelDy/HVegQhoABNAepbACwjOt72gZkJhypX70YDWEEklue+rbnYc2MiGp1upPfYReiJJUUG58gFXu4udch1wHcjFIgy0HyIjb2yvBpT2F6t+6+f+D15lW8c9JDo7iPSdgVIRLUqL2AyHDQAOf9hfbqxvMF98eT3RuTS1avHyl+Stcphe2chP9+4k/t3RbXVl3W+Ws17FY56/w3VcbO/koS/eZLoAqrQMxADZMTYOfwpwoWjL4+bCYcgssMqGOzPD6CIkZ/3SxTJ0ayFIN6/BnBrZb2XdE1JUgkJWkfrUNRJnPyc16zsbgPyXIUJBpvc+y89nk/S8/4nek3NPGeBWMwzGvhUPnP6RubRLwfODlqqx3LSCyee2MnlwMwA2RwgO5qouVcHmksUdJweYyi8hZkrUjgT5t/ejNq0jBsSqNWsKyT9uFtxw7Bs585d3g46KOeT2bWHmtd14KyP+5mzqpsYU3OyioACMhGiqPTMocsrHId9cy9BLDzKxq8X3ctMwlV6yKSHL4fr4dd0DeQBTBUgUkvpE1kVPbqkX117ZzuSaFf4zyfz5n9A4lk0yNU7vyb7jTy1kmFGipejKvh6h9n0W995ZPTu227hqmCz33xXgFV1v9NzI96NfjndWt7XWCB/7BSICFWL+j3lAofpCtfYFb6X9MwCJZ07mUsXRGwAAAABJRU5ErkJggg=="/>\n            <span style="font-size: 16px;">powered by NetLogo</span>\n          </a>\n        </div>\n      </div>\n      <editableTitle\n        title="{{modelTitle}}"\n        isEditing="{{isEditing}}"\n        hasWorkInProgress="{{hasWorkInProgress}}"\n        />\n      {{# !isReadOnly }}\n        <div class="flex-column" style="align-items: flex-end; user-select: none;">\n          <div class="netlogo-export-wrapper">\n            <span style="margin-right: 4px;">File:</span>\n            <button class="netlogo-ugly-button" on-click="open-new-file"{{#isEditing}} disabled{{/}}>New</button>\n            {{#!disableWorkInProgress}}\n              {{#!hasRevertedWork}}\n                <button class="netlogo-ugly-button" on-click="revert-wip"{{#!isRevertable}} disabled{{/}}>Revert to Original</button>\n              {{else}}\n                <button class="netlogo-ugly-button" on-click="undo-revert"{{#isEditing}} disabled{{/}}>Undo Revert</button>\n              {{/}}\n            {{/}}\n          </div>\n          <div class="netlogo-export-wrapper">\n            <span style="margin-right: 4px;">Export:</span>\n            <button class="netlogo-ugly-button" on-click="export-nlogo"{{#isEditing}} disabled{{/}}>NetLogo</button>\n            <button class="netlogo-ugly-button" on-click="export-html"{{#isEditing}} disabled{{/}}>HTML</button>\n          </div>\n        </div>\n      {{/}}\n    </div>\n\n    <div class="netlogo-display-horizontal">\n\n      <div id="authoring-lock" class="netlogo-toggle-container{{#!someDialogIsOpen}} enabled{{/}}" on-click="toggle-interface-lock">\n        <div class="netlogo-interface-unlocker {{#isEditing}}interface-unlocked{{/}}"></div>\n        <spacer width="5px" />\n        <span class="netlogo-toggle-text">Mode: {{#isEditing}}Authoring{{else}}Interactive{{/}}</span>\n      </div>\n\n      <div id="tabs-position" class="netlogo-toggle-container{{#!someDialogIsOpen}} enabled{{/}}" on-click="toggle-orientation">\n        <div class="netlogo-model-orientation {{#isVertical}}vertical-display{{/}}"></div>\n        <spacer width="5px" />\n        <span class="netlogo-toggle-text">Commands and Code: {{#isVertical}}Bottom{{else}}Right Side{{/}}</span>\n      </div>\n\n    </div>\n\n    <asyncDialog wareaHeight="{{height}}" wareaWidth="{{width}}"></asyncDialog>\n    <helpDialog isOverlayUp="{{isOverlayUp}}" isVisible="{{isHelpVisible}}" stateName="{{stateName}}" wareaHeight="{{height}}" wareaWidth="{{width}}"></helpDialog>\n    <contextMenu></contextMenu>\n\n    <label class="netlogo-speed-slider{{#isEditing}} interface-unlocked{{/}}">\n      <span class="netlogo-label">model speed</span>\n      <input type="range" min=-1 max=1 step=0.01 value="{{speed}}"{{#isEditing}} disabled{{/}} on-change="[\'speed-slider-changed\', speed]" />\n      <tickCounter isVisible="{{primaryView.showTickCounter}}"\n                   label="{{primaryView.tickCounterLabel}}" value="{{ticks}}" />\n    </label>\n\n    <div style="position: relative; width: {{width}}px; height: {{height}}px"\n         class="netlogo-widget-container{{#isEditing}} interface-unlocked{{/}}"\n         on-contextmenu="@this.fire(\'show-context-menu\', { component: @this }, @event)"\n         on-click="@this.fire(\'deselect-widgets\', @event)" on-dragover="mosaic-killer-killer">\n      <resizer isEnabled="{{isEditing}}" isVisible="{{isResizerVisible}}" />\n      {{#widgetObj:key}}\n        {{# type === \'view\'     }} <viewWidget    id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} ticks="{{ticks}}" /> {{/}}\n        {{# type === \'textBox\'  }} <labelWidget   id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} /> {{/}}\n        {{# type === \'switch\'   }} <switchWidget  id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} /> {{/}}\n        {{# type === \'button\'   }} <buttonWidget  id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} errorClass="{{>errorClass}}" ticksStarted="{{ticksStarted}}"/> {{/}}\n        {{# type === \'slider\'   }} <sliderWidget  id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} errorClass="{{>errorClass}}" /> {{/}}\n        {{# type === \'chooser\'  }} <chooserWidget id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} /> {{/}}\n        {{# type === \'monitor\'  }} <monitorWidget id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} errorClass="{{>errorClass}}" /> {{/}}\n        {{# type === \'inputBox\' }} <inputWidget   id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} /> {{/}}\n        {{# type === \'plot\'     }} <plotWidget    id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} /> {{/}}\n        {{# type === \'output\'   }} <outputWidget  id="{{>widgetID}}" isEditing="{{isEditing}}" left="{{left}}" right="{{right}}" top="{{top}}" bottom="{{bottom}}" widget={{this}} text="{{outputWidgetOutput}}" /> {{/}}\n      {{/}}\n    </div>\n\n  </div>\n\n  <div class="netlogo-tab-area" style="min-width: {{Math.min(width, 500)}}px; max-width: {{Math.max(width, 500)}}px">\n    {{# !isReadOnly }}\n    <label class="netlogo-tab{{#showConsole}} netlogo-active{{/}}">\n      <input id="console-toggle" type="checkbox" checked="{{ showConsole }}" on-change="[\'command-center-toggled\', showConsole]"/>\n      <span class="netlogo-tab-text">Command Center</span>\n    </label>\n    {{#showConsole}}\n      <console output="{{consoleOutput}}" isEditing="{{isEditing}}" checkIsReporter="{{checkIsReporter}}" />\n    {{/}}\n    {{/}}\n    <label class="netlogo-tab{{#showCode}} netlogo-active{{/}}">\n      <input id="code-tab-toggle" type="checkbox" checked="{{ showCode }}" on-change="[\'model-code-toggled\', showCode]" />\n      <span class="netlogo-tab-text{{#lastCompileFailed}} netlogo-widget-error{{/}}">NetLogo Code</span>\n    </label>\n    {{#showCode}}\n      <codePane code=\'{{code}}\' lastCompiledCode=\'{{lastCompiledCode}}\' lastCompileFailed=\'{{lastCompileFailed}}\' isReadOnly=\'{{isReadOnly}}\' />\n    {{/}}\n    <label class="netlogo-tab{{#showInfo}} netlogo-active{{/}}">\n      <input id="info-toggle" type="checkbox" checked="{{ showInfo }}" on-change="[\'model-info-toggled\', showInfo]" />\n      <span class="netlogo-tab-text">Model Info</span>\n    </label>\n    {{#showInfo}}\n      <infotab rawText=\'{{info}}\' isEditing=\'{{isEditing}}\' />\n    {{/}}\n  </div>\n\n  <input id="general-file-input" type="file" name="general-file" style="display: none;" />\n\n</div>', Hn = {
    errorClass: "{{# !compilation.success}}netlogo-widget-error{{/}}",
    widgetID: "netlogo-{{type}}-{{key}}"
};
var Kn, Gn = jn,
    Zn = function(e) {
        var t, n, i, r, o, s, a, l, d;
        return a = function() {
            return e.findComponent("resizer")
        }, o = function(e, t) {
            a().lockTarget(t)
        }, d = function() {
            a().unlockTarget()
        }, t = function() {
            var t, i, r;
            i = a().get("target"), e.get("isEditing") && null != i && (r = i.get("widget"), t = null == document.querySelector(".widget-edit-popup"), null != r && "view" !== r.type && t && (d(), n(), e.fire("unregister-widget", r.id, !1, r.getExtraNotificationArgs())))
        }, r = function(e) {
            a().setTarget(e.component)
        }, l = function(t, n) {
            e.get("isEditing") && (n.preventDefault(), n.stopPropagation(), r(t))
        }, n = function() {
            a().clearTarget()
        }, e.observe("isEditing", (function(e) {
            n()
        })), i = function() {
            return !e.get("isEditing") || (e.set("isResizerVisible", !e.get("isResizerVisible")), !1)
        }, s = function(t, n) {
            var i;
            return !(null != (i = a().get("target")) && !e.get("someDialogIsOpen")) || (i.nudge(n), !1)
        }, e.on("*.select-component", r), e.on("*.select-widget", l), e.on("deselect-widgets", n), e.on("delete-selected", t), e.on("hide-resizer", i), e.on("nudge-widget", s), e.on("*.lock-selection", o), e.on("*.unlock-selection", d)
    };
Kn = function(e) {
    var t;
    t = function(t) {
        var n;
        2 !== (null != t ? t.button : void 0) && (n = e.findComponent("contextMenu")).get("visible") && n.fire("cover-thineself")
    }, window.addEventListener("keyup", (function(e) {
        if (27 === e.keyCode) return t(e)
    })), document.addEventListener("click", t), document.addEventListener("contextmenu", (function(e) {
        var n, i, r, o, s, a, l;
        for (a = e.target, o = []; null != a;) o.push(a), a = a.parentElement;
        if (l = function() {
                var e, t, i;
                for (i = [], e = 0, t = o.length; e < t; e++) r = o[e], i.push(function() {
                    var e, t, i, o;
                    for (o = [], e = 0, t = (i = r.classList).length; e < t; e++) n = i[e], o.push(n);
                    return o
                }());
                return i
            }(), i = l.reduce((function(e, t) {
                return e.concat(t)
            })), !(s = function(e) {
                return -1 !== i.indexOf(e)
            })("netlogo-widget") && !s("netlogo-widget-container")) return t(e)
    })), Kn = function(t, n, i) {
        var r, o, s;
        return !(this.get("isEditing") && !this.findAllComponents("editForm").some((function(e) {
            return e.get("visible")
        }))) || ([{
            component: r
        }, {
            pageX: o,
            pageY: s
        }] = null == i ? [t, n] : [n, i], e.fire("deselect-widgets"), this.findComponent("contextMenu").fire("reveal-thineself", r, o, s), !1)
    }, e.on("show-context-menu", Kn), e.on("*.show-context-menu", Kn), e.on("*.hide-context-menu", t)
};
var Jn, Qn = Kn,
    ei = {}.hasOwnProperty;
Jn = function(e) {
    var t, n, i, r, o, s, a, l, d, c, u, h, p, f, g, m, v, w, y, b, x, k, _, C, E, S, T, P, A;
    ({
        ractive: g,
        viewController: P
    } = e), f = new Set([]), t = function(e) {
        var t, n, i, r;
        if (g.get("hasFocus"))
            for (t in n = String.fromCharCode(null != e.which ? e.which : e.keyCode), i = g.get("widgetObj")) "button" === (r = i[t]).type && r.actionKey === n && g.findAllComponents("buttonWidget").find((function(e) {
                return e.get("widget") === r
            })).get("isEnabled") && (r.forever ? r.running = !r.running : r.run())
    }, n = function(t, n, i) {
        e.createWidget(t, n, i)
    }, i = function() {
        g.set("isHelpVisible", !1), g.set("isOverlayUp", !1)
    }, r = function({
        event: {
            clientX: e,
            clientY: t
        }
    }) {
        g.set("lastDragX", e), g.set("lastDragY", t)
    }, s = function(e) {
        var t;
        f.delete(e), g.set("someDialogIsOpen", f.size > 0), t = document.scrollTop, document.querySelector(".netlogo-model").focus({
            preventScroll: !0
        }), document.scrollTop = t
    }, a = function(e) {
        g.set("someEditFormIsOpen", !1), s(e)
    }, A = void 0, c = function({
        target: e
    }) {
        var t, n;
        ("input" === (n = e.tagName.toLowerCase()) || "textarea" === n) && !e.readOnly || "true" === e.contentEditable || (t = !g.get("isHelpVisible"), g.set("isHelpVisible", t), (t ? (A = document.activeElement, g.find("#help-dialog")) : A).focus())
    }, l = function(e) {
        f.add(e), g.set("someDialogIsOpen", !0)
    }, d = function(e) {
        g.set("someEditFormIsOpen", !0), l(e)
    }, u = function() {
        var e, t, n;
        e = function(e) {
            return "plot" === e.type ? e.bottom + 3 : e.bottom
        }, g.set("height", Math.max.apply(Math, function() {
            var i, r;
            for (t in r = [], i = g.get("widgetObj")) ei.call(i, t) && null != (n = i[t]).bottom && r.push(e(n));
            return r
        }()))
    }, h = function() {
        var e, t, n;
        e = function(e) {
            return "plot" === e.type ? e.right + 3 : e.right
        }, g.set("width", Math.max.apply(Math, function() {
            var i, r;
            for (t in r = [], i = g.get("widgetObj")) ei.call(i, t) && null != (n = i[t]).right && r.push(e(n));
            return r
        }()))
    }, p = function(e, t, n, i) {
        var r, o;
        o = function(e, t) {
            return null != t && function() {
                switch (e.type) {
                    case "slider":
                        return !isNaN(t);
                    case "inputBox":
                        return !("Number" === e.boxedValue.type && isNaN(t));
                    default:
                        return !0
                }
            }()
        }, null != (r = g.get("widgetObj")[i]).variable && "undefined" != typeof world && null !== world && e !== t && o(r, e) && world.observer.setGlobal(r.variable, e)
    }, m = function() {
        e.redraw(), P.repaint()
    }, v = function(e) {
        var t;
        return ({
            eq: t
        } = tortoise_require("brazier/equals")), e.currentChoice = Math.max(0, e.choices.findIndex(t(e.currentValue))), e.currentValue = e.choices[e.currentChoice], world.observer.setGlobal(e.variable, e.currentValue), !1
    }, w = function() {
        h(), u()
    }, y = function(t) {
        e.reportError("compiler", "update-widget-value", [`There is already a widget of a different type with a variable named '${t}'`])
    }, _ = function(t) {
        if (!t.compilation.success) return e.reportError("compiler", t.type, t.compilation.messages)
    }, b = function(e, t, n) {
        return function(e) {
            return function(t) {
                var n, i;
                for (n in t)
                    if (i = t[n], e(i)) return !0;
                return !1
            }
        }((function({
            variable: t
        }) {
            return t === e
        }))(g.get("widgetObj")) || world.observer.setGlobal(e, void 0), world.observer.setGlobal(t, n), !1
    }, x = function() {
        var e, t, n, i, r;
        ({
            minpxcor: n,
            maxpxcor: e,
            minpycor: i,
            maxpycor: t,
            patchsize: r
        } = P.model.world), k(r), world.resize(n, e, i, t), w()
    }, k = function(e) {
        world.setPatchSize(e), w()
    }, C = function(e, t) {
        var n;
        g.get("someDialogIsOpen") || (n = !g.get(e), g.set(e, n), null != t && g.fire(t, n))
    }, E = function(e) {
        g.set("hasFocus", document.activeElement === e)
    }, S = function(t, n, i, r) {
        e.removeWidgetById(n, i, r), w()
    }, T = function() {
        var e, t;
        ({
            wrappingallowedinx: e,
            wrappingallowediny: t
        } = P.model.world), world.changeTopology(e, t)
    }, (o = Mousetrap(g.find(".netlogo-model"))).bind(["up", "down", "left", "right"], (function(e, t) {
        return g.fire("nudge-widget", t)
    })), o.bind(["ctrl+shift+l", "command+shift+l"], (function() {
        return g.fire("toggle-interface-lock")
    })), o.bind(["ctrl+shift+h", "command+shift+h"], (function() {
        return g.fire("hide-resizer")
    })), o.bind("del", (function() {
        return g.fire("delete-selected")
    })), o.bind("escape", (function() {
        return g.fire("deselect-widgets")
    })), o.bind("?", c), g.observe("widgetObj.*.currentValue", p), g.observe("widgetObj.*.right", h), g.observe("widgetObj.*.bottom", u), g.on("mosaic-killer-killer", r), g.on("toggle-interface-lock", (function() {
        return C("isEditing", "authoring-mode-toggled")
    })), g.on("toggle-orientation", (function() {
        return C("isVertical")
    })), g.on("*.redraw-view", m), g.on("*.resize-view", x), g.on("*.unregister-widget", S), g.on("*.update-topology", T), g.on("check-action-keys", (function(e, n) {
        return t(n)
    })), g.on("create-widget", (function(e, t, i, r) {
        return n(t, i, r)
    })), g.on("drop-overlay", (function(e, t) {
        return i()
    })), g.on("*.show-widget-errors", (function(e, t) {
        return _(t)
    })), g.on("track-focus", (function(e, t) {
        return E(t)
    })), g.on("*.refresh-chooser", (function(e, t, n) {
        return v(n)
    })), g.on("*.reject-duplicate-var", (function(e, t) {
        return y(t)
    })), g.on("*.rename-interface-global", (function(e, t, n, i) {
        return b(t, n, i)
    })), g.on("*.set-patch-size", (function(e, t) {
        return k(t)
    })), g.on("*.update-widgets", (function() {
        return e.updateWidgets()
    })), g.on("*.dialog-closed", (function(e, t) {
        return s(t)
    })), g.on("*.dialog-opened", (function(e, t) {
        return l(t)
    })), g.on("*.edit-form-closed", (function(e, t) {
        return a(t)
    })), g.on("*.edit-form-opened", (function(e, t) {
        return d(t)
    }))
};
for (var ti = Jn, ni = {}, ii = {
        byteLength: function(e) {
            var t = ci(e),
                n = t[0],
                i = t[1];
            return 3 * (n + i) / 4 - i
        },
        toByteArray: function(e) {
            var t, n, i = ci(e),
                r = i[0],
                o = i[1],
                s = new si(function(e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, r, o)),
                a = 0,
                l = o > 0 ? r - 4 : r;
            for (n = 0; n < l; n += 4) t = oi[e.charCodeAt(n)] << 18 | oi[e.charCodeAt(n + 1)] << 12 | oi[e.charCodeAt(n + 2)] << 6 | oi[e.charCodeAt(n + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
            2 === o && (t = oi[e.charCodeAt(n)] << 2 | oi[e.charCodeAt(n + 1)] >> 4, s[a++] = 255 & t);
            1 === o && (t = oi[e.charCodeAt(n)] << 10 | oi[e.charCodeAt(n + 1)] << 4 | oi[e.charCodeAt(n + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t);
            return s
        },
        fromByteArray: function(e) {
            for (var t, n = e.length, i = n % 3, r = [], o = 16383, s = 0, a = n - i; s < a; s += o) r.push(ui(e, s, s + o > a ? a : s + o));
            1 === i ? (t = e[n - 1], r.push(ri[t >> 2] + ri[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], r.push(ri[t >> 10] + ri[t >> 4 & 63] + ri[t << 2 & 63] + "="));
            return r.join("")
        }
    }, ri = [], oi = [], si = "undefined" != typeof Uint8Array ? Uint8Array : Array, ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", li = 0, di = ai.length; li < di; ++li) ri[li] = ai[li], oi[ai.charCodeAt(li)] = li;

function ci(e) {
    var t = e.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = e.indexOf("=");
    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
}

function ui(e, t, n) {
    for (var i, r, o = [], s = t; s < n; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(ri[(r = i) >> 18 & 63] + ri[r >> 12 & 63] + ri[r >> 6 & 63] + ri[63 & r]);
    return o.join("")
}
oi["-".charCodeAt(0)] = 62, oi["_".charCodeAt(0)] = 63;
var hi = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
hi.read = function(e, t, n, i, r) {
        var o, s, a = 8 * r - i - 1,
            l = (1 << a) - 1,
            d = l >> 1,
            c = -7,
            u = n ? r - 1 : 0,
            h = n ? -1 : 1,
            p = e[t + u];
        for (u += h, o = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; o = 256 * o + e[t + u], u += h, c -= 8);
        for (s = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; s = 256 * s + e[t + u], u += h, c -= 8);
        if (0 === o) o = 1 - d;
        else {
            if (o === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, i), o -= d
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - i)
    }, hi.write = function(e, t, n, i, r, o) {
        var s, a, l, d = 8 * o - r - 1,
            c = (1 << d) - 1,
            u = c >> 1,
            h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = i ? 0 : o - 1,
            f = i ? 1 : -1,
            g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = c) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + u >= 1 ? h / l : h * Math.pow(2, 1 - u)) * l >= 2 && (s++, l /= 2), s + u >= c ? (a = 0, s = c) : s + u >= 1 ? (a = (t * l - 1) * Math.pow(2, r), s += u) : (a = t * Math.pow(2, u - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + p] = 255 & a, p += f, a /= 256, r -= 8);
        for (s = s << r | a, d += r; d > 0; e[n + p] = 255 & s, p += f, s /= 256, d -= 8);
        e[n + p - f] |= 128 * g
    },
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    function(e) {
        const t = ii,
            n = hi,
            i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        e.Buffer = s, e.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return s.alloc(+e)
        }, e.INSPECT_MAX_BYTES = 50;
        const r = 2147483647;

        function o(e) {
            if (e > r) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            const t = new Uint8Array(e);
            return Object.setPrototypeOf(t, s.prototype), t
        }

        function s(e, t, n) {
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                return d(e)
            }
            return a(e, t, n)
        }

        function a(e, t, n) {
            if ("string" == typeof e) return function(e, t) {
                "string" == typeof t && "" !== t || (t = "utf8");
                if (!s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                const n = 0 | p(e, t);
                let i = o(n);
                const r = i.write(e, t);
                r !== n && (i = i.slice(0, r));
                return i
            }(e, t);
            if (ArrayBuffer.isView(e)) return function(e) {
                if (X(e, Uint8Array)) {
                    const t = new Uint8Array(e);
                    return u(t.buffer, t.byteOffset, t.byteLength)
                }
                return c(e)
            }(e);
            if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (X(e, ArrayBuffer) || e && X(e.buffer, ArrayBuffer)) return u(e, t, n);
            if ("undefined" != typeof SharedArrayBuffer && (X(e, SharedArrayBuffer) || e && X(e.buffer, SharedArrayBuffer))) return u(e, t, n);
            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
            const i = e.valueOf && e.valueOf();
            if (null != i && i !== e) return s.from(i, t, n);
            const r = function(e) {
                if (s.isBuffer(e)) {
                    const t = 0 | h(e.length),
                        n = o(t);
                    return 0 === n.length || e.copy(n, 0, 0, t), n
                }
                if (void 0 !== e.length) return "number" != typeof e.length || Y(e.length) ? o(0) : c(e);
                if ("Buffer" === e.type && Array.isArray(e.data)) return c(e.data)
            }(e);
            if (r) return r;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, n);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }

        function l(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }

        function d(e) {
            return l(e), o(e < 0 ? 0 : 0 | h(e))
        }

        function c(e) {
            const t = e.length < 0 ? 0 : 0 | h(e.length),
                n = o(t);
            for (let i = 0; i < t; i += 1) n[i] = 255 & e[i];
            return n
        }

        function u(e, t, n) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let i;
            return i = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(i, s.prototype), i
        }

        function h(e) {
            if (e >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
            return 0 | e
        }

        function p(e, t) {
            if (s.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            const n = e.length,
                i = arguments.length > 2 && !0 === arguments[2];
            if (!i && 0 === n) return 0;
            let r = !1;
            for (;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                    return j(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return H(e).length;
                default:
                    if (r) return i ? -1 : j(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function f(e, t, n) {
            let i = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return P(this, t, n);
                case "utf8":
                case "utf-8":
                    return C(this, t, n);
                case "ascii":
                    return S(this, t, n);
                case "latin1":
                case "binary":
                    return T(this, t, n);
                case "base64":
                    return _(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return A(this, t, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), i = !0
            }
        }

        function g(e, t, n) {
            const i = e[t];
            e[t] = e[n], e[n] = i
        }

        function m(e, t, n, i, r) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Y(n = +n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (r) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!r) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = s.from(t, i)), s.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, i, r);
            if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, i, r);
            throw new TypeError("val must be string, number or Buffer")
        }

        function v(e, t, n, i, r) {
            let o, s = 1,
                a = e.length,
                l = t.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (e.length < 2 || t.length < 2) return -1;
                s = 2, a /= 2, l /= 2, n /= 2
            }

            function d(e, t) {
                return 1 === s ? e[t] : e.readUInt16BE(t * s)
            }
            if (r) {
                let i = -1;
                for (o = n; o < a; o++)
                    if (d(e, o) === d(t, -1 === i ? 0 : o - i)) {
                        if (-1 === i && (i = o), o - i + 1 === l) return i * s
                    } else - 1 !== i && (o -= o - i), i = -1
            } else
                for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
                    let n = !0;
                    for (let i = 0; i < l; i++)
                        if (d(e, o + i) !== d(t, i)) {
                            n = !1;
                            break
                        } if (n) return o
                }
            return -1
        }

        function w(e, t, n, i) {
            n = Number(n) || 0;
            const r = e.length - n;
            i ? (i = Number(i)) > r && (i = r) : i = r;
            const o = t.length;
            let s;
            for (i > o / 2 && (i = o / 2), s = 0; s < i; ++s) {
                const i = parseInt(t.substr(2 * s, 2), 16);
                if (Y(i)) return s;
                e[n + s] = i
            }
            return s
        }

        function y(e, t, n, i) {
            return q(j(t, e.length - n), e, n, i)
        }

        function b(e, t, n, i) {
            return q(function(e) {
                const t = [];
                for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, i)
        }

        function x(e, t, n, i) {
            return q(H(t), e, n, i)
        }

        function k(e, t, n, i) {
            return q(function(e, t) {
                let n, i, r;
                const o = [];
                for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), i = n >> 8, r = n % 256, o.push(r), o.push(i);
                return o
            }(t, e.length - n), e, n, i)
        }

        function _(e, n, i) {
            return 0 === n && i === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, i))
        }

        function C(e, t, n) {
            n = Math.min(e.length, n);
            const i = [];
            let r = t;
            for (; r < n;) {
                const t = e[r];
                let o = null,
                    s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                if (r + s <= n) {
                    let n, i, a, l;
                    switch (s) {
                        case 1:
                            t < 128 && (o = t);
                            break;
                        case 2:
                            n = e[r + 1], 128 == (192 & n) && (l = (31 & t) << 6 | 63 & n, l > 127 && (o = l));
                            break;
                        case 3:
                            n = e[r + 1], i = e[r + 2], 128 == (192 & n) && 128 == (192 & i) && (l = (15 & t) << 12 | (63 & n) << 6 | 63 & i, l > 2047 && (l < 55296 || l > 57343) && (o = l));
                            break;
                        case 4:
                            n = e[r + 1], i = e[r + 2], a = e[r + 3], 128 == (192 & n) && 128 == (192 & i) && 128 == (192 & a) && (l = (15 & t) << 18 | (63 & n) << 12 | (63 & i) << 6 | 63 & a, l > 65535 && l < 1114112 && (o = l))
                    }
                }
                null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), r += s
            }
            return function(e) {
                const t = e.length;
                if (t <= E) return String.fromCharCode.apply(String, e);
                let n = "",
                    i = 0;
                for (; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += E));
                return n
            }(i)
        }
        e.kMaxLength = r, s.TYPED_ARRAY_SUPPORT = function() {
            try {
                const e = new Uint8Array(1),
                    t = {
                        foo: function() {
                            return 42
                        }
                    };
                return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
            } catch (e) {
                return !1
            }
        }(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (s.isBuffer(this)) return this.buffer
            }
        }), Object.defineProperty(s.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (s.isBuffer(this)) return this.byteOffset
            }
        }), s.poolSize = 8192, s.from = function(e, t, n) {
            return a(e, t, n)
        }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e, t, n) {
            return function(e, t, n) {
                return l(e), e <= 0 ? o(e) : void 0 !== t ? "string" == typeof n ? o(e).fill(t, n) : o(e).fill(t) : o(e)
            }(e, t, n)
        }, s.allocUnsafe = function(e) {
            return d(e)
        }, s.allocUnsafeSlow = function(e) {
            return d(e)
        }, s.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== s.prototype
        }, s.compare = function(e, t) {
            if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), X(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            let n = e.length,
                i = t.length;
            for (let r = 0, o = Math.min(n, i); r < o; ++r)
                if (e[r] !== t[r]) {
                    n = e[r], i = t[r];
                    break
                } return n < i ? -1 : i < n ? 1 : 0
        }, s.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, s.concat = function(e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return s.alloc(0);
            let n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            const i = s.allocUnsafe(t);
            let r = 0;
            for (n = 0; n < e.length; ++n) {
                let t = e[n];
                if (X(t, Uint8Array)) r + t.length > i.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(i, r)) : Uint8Array.prototype.set.call(i, t, r);
                else {
                    if (!s.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    t.copy(i, r)
                }
                r += t.length
            }
            return i
        }, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
            const e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) g(this, t, t + 1);
            return this
        }, s.prototype.swap32 = function() {
            const e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
            return this
        }, s.prototype.swap64 = function() {
            const e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
            return this
        }, s.prototype.toString = function() {
            const e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : f.apply(this, arguments)
        }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
            if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === s.compare(this, e)
        }, s.prototype.inspect = function() {
            let t = "";
            const n = e.INSPECT_MAX_BYTES;
            return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">"
        }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(e, t, n, i, r) {
            if (X(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw new RangeError("out of range index");
            if (i >= r && t >= n) return 0;
            if (i >= r) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            let o = (r >>>= 0) - (i >>>= 0),
                a = (n >>>= 0) - (t >>>= 0);
            const l = Math.min(o, a),
                d = this.slice(i, r),
                c = e.slice(t, n);
            for (let e = 0; e < l; ++e)
                if (d[e] !== c[e]) {
                    o = d[e], a = c[e];
                    break
                } return o < a ? -1 : a < o ? 1 : 0
        }, s.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, s.prototype.indexOf = function(e, t, n) {
            return m(this, e, t, n, !0)
        }, s.prototype.lastIndexOf = function(e, t, n) {
            return m(this, e, t, n, !1)
        }, s.prototype.write = function(e, t, n, i) {
            if (void 0 === t) i = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
            }
            const r = this.length - t;
            if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            let o = !1;
            for (;;) switch (i) {
                case "hex":
                    return w(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return y(this, e, t, n);
                case "ascii":
                case "latin1":
                case "binary":
                    return b(this, e, t, n);
                case "base64":
                    return x(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return k(this, e, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), o = !0
            }
        }, s.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        const E = 4096;

        function S(e, t, n) {
            let i = "";
            n = Math.min(e.length, n);
            for (let r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
            return i
        }

        function T(e, t, n) {
            let i = "";
            n = Math.min(e.length, n);
            for (let r = t; r < n; ++r) i += String.fromCharCode(e[r]);
            return i
        }

        function P(e, t, n) {
            const i = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
            let r = "";
            for (let i = t; i < n; ++i) r += K[e[i]];
            return r
        }

        function A(e, t, n) {
            const i = e.slice(t, n);
            let r = "";
            for (let e = 0; e < i.length - 1; e += 2) r += String.fromCharCode(i[e] + 256 * i[e + 1]);
            return r
        }

        function I(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function L(e, t, n, i, r, o) {
            if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
            if (n + i > e.length) throw new RangeError("Index out of range")
        }

        function z(e, t, n, i, r) {
            V(t, i, r, e, n, 7);
            let o = Number(t & BigInt(4294967295));
            e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o;
            let s = Number(t >> BigInt(32) & BigInt(4294967295));
            return e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, n
        }

        function M(e, t, n, i, r) {
            V(t, i, r, e, n, 7);
            let o = Number(t & BigInt(4294967295));
            e[n + 7] = o, o >>= 8, e[n + 6] = o, o >>= 8, e[n + 5] = o, o >>= 8, e[n + 4] = o;
            let s = Number(t >> BigInt(32) & BigInt(4294967295));
            return e[n + 3] = s, s >>= 8, e[n + 2] = s, s >>= 8, e[n + 1] = s, s >>= 8, e[n] = s, n + 8
        }

        function B(e, t, n, i, r, o) {
            if (n + i > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function R(e, t, i, r, o) {
            return t = +t, i >>>= 0, o || B(e, 0, i, 4), n.write(e, t, i, r, 23, 4), i + 4
        }

        function O(e, t, i, r, o) {
            return t = +t, i >>>= 0, o || B(e, 0, i, 8), n.write(e, t, i, r, 52, 8), i + 8
        }
        s.prototype.slice = function(e, t) {
            const n = this.length;
            (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
            const i = this.subarray(e, t);
            return Object.setPrototypeOf(i, s.prototype), i
        }, s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || I(e, t, this.length);
            let i = this[e],
                r = 1,
                o = 0;
            for (; ++o < t && (r *= 256);) i += this[e + o] * r;
            return i
        }, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || I(e, t, this.length);
            let i = this[e + --t],
                r = 1;
            for (; t > 0 && (r *= 256);) i += this[e + --t] * r;
            return i
        }, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
            return e >>>= 0, t || I(e, 1, this.length), this[e]
        }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0, t || I(e, 2, this.length), this[e] | this[e + 1] << 8
        }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0, t || I(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, s.prototype.readBigUInt64LE = G((function(e) {
            W(e >>>= 0, "offset");
            const t = this[e],
                n = this[e + 7];
            void 0 !== t && void 0 !== n || $(e, this.length - 8);
            const i = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                r = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
            return BigInt(i) + (BigInt(r) << BigInt(32))
        })), s.prototype.readBigUInt64BE = G((function(e) {
            W(e >>>= 0, "offset");
            const t = this[e],
                n = this[e + 7];
            void 0 !== t && void 0 !== n || $(e, this.length - 8);
            const i = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                r = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
            return (BigInt(i) << BigInt(32)) + BigInt(r)
        })), s.prototype.readIntLE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || I(e, t, this.length);
            let i = this[e],
                r = 1,
                o = 0;
            for (; ++o < t && (r *= 256);) i += this[e + o] * r;
            return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i
        }, s.prototype.readIntBE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || I(e, t, this.length);
            let i = t,
                r = 1,
                o = this[e + --i];
            for (; i > 0 && (r *= 256);) o += this[e + --i] * r;
            return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o
        }, s.prototype.readInt8 = function(e, t) {
            return e >>>= 0, t || I(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, s.prototype.readInt16LE = function(e, t) {
            e >>>= 0, t || I(e, 2, this.length);
            const n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, s.prototype.readInt16BE = function(e, t) {
            e >>>= 0, t || I(e, 2, this.length);
            const n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, s.prototype.readInt32LE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, s.prototype.readInt32BE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, s.prototype.readBigInt64LE = G((function(e) {
            W(e >>>= 0, "offset");
            const t = this[e],
                n = this[e + 7];
            void 0 !== t && void 0 !== n || $(e, this.length - 8);
            const i = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
            return (BigInt(i) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
        })), s.prototype.readBigInt64BE = G((function(e) {
            W(e >>>= 0, "offset");
            const t = this[e],
                n = this[e + 7];
            void 0 !== t && void 0 !== n || $(e, this.length - 8);
            const i = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
            return (BigInt(i) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
        })), s.prototype.readFloatLE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), n.read(this, e, !0, 23, 4)
        }, s.prototype.readFloatBE = function(e, t) {
            return e >>>= 0, t || I(e, 4, this.length), n.read(this, e, !1, 23, 4)
        }, s.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0, t || I(e, 8, this.length), n.read(this, e, !0, 52, 8)
        }, s.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0, t || I(e, 8, this.length), n.read(this, e, !1, 52, 8)
        }, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, i) {
            if (e = +e, t >>>= 0, n >>>= 0, !i) {
                L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            let r = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
            return t + n
        }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, i) {
            if (e = +e, t >>>= 0, n >>>= 0, !i) {
                L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            let r = n - 1,
                o = 1;
            for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
            return t + n
        }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
        }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
        }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, s.prototype.writeBigUInt64LE = G((function(e, t = 0) {
            return z(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        })), s.prototype.writeBigUInt64BE = G((function(e, t = 0) {
            return M(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
        })), s.prototype.writeIntLE = function(e, t, n, i) {
            if (e = +e, t >>>= 0, !i) {
                const i = Math.pow(2, 8 * n - 1);
                L(this, e, t, n, i - 1, -i)
            }
            let r = 0,
                o = 1,
                s = 0;
            for (this[t] = 255 & e; ++r < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + r - 1] && (s = 1), this[t + r] = (e / o >> 0) - s & 255;
            return t + n
        }, s.prototype.writeIntBE = function(e, t, n, i) {
            if (e = +e, t >>>= 0, !i) {
                const i = Math.pow(2, 8 * n - 1);
                L(this, e, t, n, i - 1, -i)
            }
            let r = n - 1,
                o = 1,
                s = 0;
            for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + r + 1] && (s = 1), this[t + r] = (e / o >> 0) - s & 255;
            return t + n
        }, s.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, s.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, s.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, s.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
        }, s.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, s.prototype.writeBigInt64LE = G((function(e, t = 0) {
            return z(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        })), s.prototype.writeBigInt64BE = G((function(e, t = 0) {
            return M(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
        })), s.prototype.writeFloatLE = function(e, t, n) {
            return R(this, e, t, !0, n)
        }, s.prototype.writeFloatBE = function(e, t, n) {
            return R(this, e, t, !1, n)
        }, s.prototype.writeDoubleLE = function(e, t, n) {
            return O(this, e, t, !0, n)
        }, s.prototype.writeDoubleBE = function(e, t, n) {
            return O(this, e, t, !1, n)
        }, s.prototype.copy = function(e, t, n, i) {
            if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
            if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
            const r = i - n;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), r
        }, s.prototype.fill = function(e, t, n, i) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !s.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                if (1 === e.length) {
                    const t = e.charCodeAt(0);
                    ("utf8" === i && t < 128 || "latin1" === i) && (e = t)
                }
            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            let r;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                for (r = t; r < n; ++r) this[r] = e;
            else {
                const o = s.isBuffer(e) ? e : s.from(e, i),
                    a = o.length;
                if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (r = 0; r < n - t; ++r) this[r + t] = o[r % a]
            }
            return this
        };
        const N = {};

        function U(e, t, n) {
            N[e] = class extends n {
                constructor() {
                    super(), Object.defineProperty(this, "message", {
                        value: t.apply(this, arguments),
                        writable: !0,
                        configurable: !0
                    }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                }
                get code() {
                    return e
                }
                set code(e) {
                    Object.defineProperty(this, "code", {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0
                    })
                }
                toString() {
                    return `${this.name} [${e}]: ${this.message}`
                }
            }
        }

        function D(e) {
            let t = "",
                n = e.length;
            const i = "-" === e[0] ? 1 : 0;
            for (; n >= i + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
            return `${e.slice(0,n)}${t}`
        }

        function V(e, t, n, i, r, o) {
            if (e > n || e < t) {
                const i = "bigint" == typeof t ? "n" : "";
                let r;
                throw r = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${i} and < 2${i} ** ${8*(o+1)}${i}` : `>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}` : `>= ${t}${i} and <= ${n}${i}`, new N.ERR_OUT_OF_RANGE("value", r, e)
            }! function(e, t, n) {
                W(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || $(t, e.length - (n + 1))
            }(i, r, o)
        }

        function W(e, t) {
            if ("number" != typeof e) throw new N.ERR_INVALID_ARG_TYPE(t, "number", e)
        }

        function $(e, t, n) {
            if (Math.floor(e) !== e) throw W(e, n), new N.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
            if (t < 0) throw new N.ERR_BUFFER_OUT_OF_BOUNDS;
            throw new N.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
        }
        U("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
            return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
        }), RangeError), U("ERR_INVALID_ARG_TYPE", (function(e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`
        }), TypeError), U("ERR_OUT_OF_RANGE", (function(e, t, n) {
            let i = `The value of "${e}" is out of range.`,
                r = n;
            return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? r = D(String(n)) : "bigint" == typeof n && (r = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (r = D(r)), r += "n"), i += ` It must be ${t}. Received ${r}`, i
        }), RangeError);
        const F = /[^+/0-9A-Za-z-_]/g;

        function j(e, t) {
            let n;
            t = t || 1 / 0;
            const i = e.length;
            let r = null;
            const o = [];
            for (let s = 0; s < i; ++s) {
                if (n = e.charCodeAt(s), n > 55295 && n < 57344) {
                    if (!r) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === i) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        r = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                        continue
                    }
                    n = 65536 + (r - 55296 << 10 | n - 56320)
                } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                if (r = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function H(e) {
            return t.toByteArray(function(e) {
                if ((e = (e = e.split("=")[0]).trim().replace(F, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function q(e, t, n, i) {
            let r;
            for (r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
            return r
        }

        function X(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }

        function Y(e) {
            return e != e
        }
        const K = function() {
            const e = "0123456789abcdef",
                t = new Array(256);
            for (let n = 0; n < 16; ++n) {
                const i = 16 * n;
                for (let r = 0; r < 16; ++r) t[i + r] = e[n] + e[r]
            }
            return t
        }();

        function G(e) {
            return "undefined" == typeof BigInt ? Z : e
        }

        function Z() {
            throw new Error("BigInt not supported")
        }
    }(ni);
var pi, fi = {
        exports: {}
    },
    gi = {};

function mi() {
    return pi || (pi = 1, function(e) {
        var t = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.assign = function(e) {
            for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                var i = t.shift();
                if (i) {
                    if ("object" != typeof i) throw new TypeError(i + "must be non-object");
                    for (var r in i) n(i, r) && (e[r] = i[r])
                }
            }
            return e
        }, e.shrinkBuf = function(e, t) {
            return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
        };
        var i = {
                arraySet: function(e, t, n, i, r) {
                    if (t.subarray && e.subarray) e.set(t.subarray(n, n + i), r);
                    else
                        for (var o = 0; o < i; o++) e[r + o] = t[n + o]
                },
                flattenChunks: function(e) {
                    var t, n, i, r, o, s;
                    for (i = 0, t = 0, n = e.length; t < n; t++) i += e[t].length;
                    for (s = new Uint8Array(i), r = 0, t = 0, n = e.length; t < n; t++) o = e[t], s.set(o, r), r += o.length;
                    return s
                }
            },
            r = {
                arraySet: function(e, t, n, i, r) {
                    for (var o = 0; o < i; o++) e[r + o] = t[n + o]
                },
                flattenChunks: function(e) {
                    return [].concat.apply([], e)
                }
            };
        e.setTyped = function(t) {
            t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, i)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, r))
        }, e.setTyped(t)
    }(gi)), gi
}
var vi, wi, yi, bi, xi, ki, _i, Ci, Ei = {},
    Si = {},
    Ti = {};

function Pi() {
    if (vi) return Ti;
    vi = 1;
    var e = mi();

    function t(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0
    }
    var n = 256,
        i = 286,
        r = 30,
        o = 15,
        s = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        a = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        d = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        c = new Array(576);
    t(c);
    var u = new Array(60);
    t(u);
    var h = new Array(512);
    t(h);
    var p = new Array(256);
    t(p);
    var f = new Array(29);
    t(f);
    var g, m, v, w = new Array(r);

    function y(e, t, n, i, r) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = i, this.max_length = r, this.has_stree = e && e.length
    }

    function b(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
    }

    function x(e) {
        return e < 256 ? h[e] : h[256 + (e >>> 7)]
    }

    function k(e, t) {
        e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
    }

    function _(e, t, n) {
        e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, k(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
    }

    function C(e, t, n) {
        _(e, n[2 * t], n[2 * t + 1])
    }

    function E(e, t) {
        var n = 0;
        do {
            n |= 1 & e, e >>>= 1, n <<= 1
        } while (--t > 0);
        return n >>> 1
    }

    function S(e, t, n) {
        var i, r, s = new Array(16),
            a = 0;
        for (i = 1; i <= o; i++) s[i] = a = a + n[i - 1] << 1;
        for (r = 0; r <= t; r++) {
            var l = e[2 * r + 1];
            0 !== l && (e[2 * r] = E(s[l]++, l))
        }
    }

    function T(e) {
        var t;
        for (t = 0; t < i; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < r; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
    }

    function P(e) {
        e.bi_valid > 8 ? k(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
    }

    function A(e, t, n, i) {
        var r = 2 * t,
            o = 2 * n;
        return e[r] < e[o] || e[r] === e[o] && i[t] <= i[n]
    }

    function I(e, t, n) {
        for (var i = e.heap[n], r = n << 1; r <= e.heap_len && (r < e.heap_len && A(t, e.heap[r + 1], e.heap[r], e.depth) && r++, !A(t, i, e.heap[r], e.depth));) e.heap[n] = e.heap[r], n = r, r <<= 1;
        e.heap[n] = i
    }

    function L(e, t, i) {
        var r, o, l, d, c = 0;
        if (0 !== e.last_lit)
            do {
                r = e.pending_buf[e.d_buf + 2 * c] << 8 | e.pending_buf[e.d_buf + 2 * c + 1], o = e.pending_buf[e.l_buf + c], c++, 0 === r ? C(e, o, t) : (C(e, (l = p[o]) + n + 1, t), 0 !== (d = s[l]) && _(e, o -= f[l], d), C(e, l = x(--r), i), 0 !== (d = a[l]) && _(e, r -= w[l], d))
            } while (c < e.last_lit);
        C(e, 256, t)
    }

    function z(e, t) {
        var n, i, r, s = t.dyn_tree,
            a = t.stat_desc.static_tree,
            l = t.stat_desc.has_stree,
            d = t.stat_desc.elems,
            c = -1;
        for (e.heap_len = 0, e.heap_max = 573, n = 0; n < d; n++) 0 !== s[2 * n] ? (e.heap[++e.heap_len] = c = n, e.depth[n] = 0) : s[2 * n + 1] = 0;
        for (; e.heap_len < 2;) s[2 * (r = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1, e.depth[r] = 0, e.opt_len--, l && (e.static_len -= a[2 * r + 1]);
        for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) I(e, s, n);
        r = d;
        do {
            n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], I(e, s, 1), i = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = i, s[2 * r] = s[2 * n] + s[2 * i], e.depth[r] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1, s[2 * n + 1] = s[2 * i + 1] = r, e.heap[1] = r++, I(e, s, 1)
        } while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1],
            function(e, t) {
                var n, i, r, s, a, l, d = t.dyn_tree,
                    c = t.max_code,
                    u = t.stat_desc.static_tree,
                    h = t.stat_desc.has_stree,
                    p = t.stat_desc.extra_bits,
                    f = t.stat_desc.extra_base,
                    g = t.stat_desc.max_length,
                    m = 0;
                for (s = 0; s <= o; s++) e.bl_count[s] = 0;
                for (d[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < 573; n++)(s = d[2 * d[2 * (i = e.heap[n]) + 1] + 1] + 1) > g && (s = g, m++), d[2 * i + 1] = s, i > c || (e.bl_count[s]++, a = 0, i >= f && (a = p[i - f]), l = d[2 * i], e.opt_len += l * (s + a), h && (e.static_len += l * (u[2 * i + 1] + a)));
                if (0 !== m) {
                    do {
                        for (s = g - 1; 0 === e.bl_count[s];) s--;
                        e.bl_count[s]--, e.bl_count[s + 1] += 2, e.bl_count[g]--, m -= 2
                    } while (m > 0);
                    for (s = g; 0 !== s; s--)
                        for (i = e.bl_count[s]; 0 !== i;)(r = e.heap[--n]) > c || (d[2 * r + 1] !== s && (e.opt_len += (s - d[2 * r + 1]) * d[2 * r], d[2 * r + 1] = s), i--)
                }
            }(e, t), S(s, c, e.bl_count)
    }

    function M(e, t, n) {
        var i, r, o = -1,
            s = t[1],
            a = 0,
            l = 7,
            d = 4;
        for (0 === s && (l = 138, d = 3), t[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) r = s, s = t[2 * (i + 1) + 1], ++a < l && r === s || (a < d ? e.bl_tree[2 * r] += a : 0 !== r ? (r !== o && e.bl_tree[2 * r]++, e.bl_tree[32]++) : a <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, a = 0, o = r, 0 === s ? (l = 138, d = 3) : r === s ? (l = 6, d = 3) : (l = 7, d = 4))
    }

    function B(e, t, n) {
        var i, r, o = -1,
            s = t[1],
            a = 0,
            l = 7,
            d = 4;
        for (0 === s && (l = 138, d = 3), i = 0; i <= n; i++)
            if (r = s, s = t[2 * (i + 1) + 1], !(++a < l && r === s)) {
                if (a < d)
                    do {
                        C(e, r, e.bl_tree)
                    } while (0 != --a);
                else 0 !== r ? (r !== o && (C(e, r, e.bl_tree), a--), C(e, 16, e.bl_tree), _(e, a - 3, 2)) : a <= 10 ? (C(e, 17, e.bl_tree), _(e, a - 3, 3)) : (C(e, 18, e.bl_tree), _(e, a - 11, 7));
                a = 0, o = r, 0 === s ? (l = 138, d = 3) : r === s ? (l = 6, d = 3) : (l = 7, d = 4)
            }
    }
    t(w);
    var R = !1;

    function O(t, n, i, r) {
        _(t, 0 + (r ? 1 : 0), 3),
            function(t, n, i, r) {
                P(t), r && (k(t, i), k(t, ~i)), e.arraySet(t.pending_buf, t.window, n, i, t.pending), t.pending += i
            }(t, n, i, !0)
    }
    return Ti._tr_init = function(e) {
        R || (! function() {
            var e, t, n, d, b, x = new Array(16);
            for (n = 0, d = 0; d < 28; d++)
                for (f[d] = n, e = 0; e < 1 << s[d]; e++) p[n++] = d;
            for (p[n - 1] = d, b = 0, d = 0; d < 16; d++)
                for (w[d] = b, e = 0; e < 1 << a[d]; e++) h[b++] = d;
            for (b >>= 7; d < r; d++)
                for (w[d] = b << 7, e = 0; e < 1 << a[d] - 7; e++) h[256 + b++] = d;
            for (t = 0; t <= o; t++) x[t] = 0;
            for (e = 0; e <= 143;) c[2 * e + 1] = 8, e++, x[8]++;
            for (; e <= 255;) c[2 * e + 1] = 9, e++, x[9]++;
            for (; e <= 279;) c[2 * e + 1] = 7, e++, x[7]++;
            for (; e <= 287;) c[2 * e + 1] = 8, e++, x[8]++;
            for (S(c, 287, x), e = 0; e < r; e++) u[2 * e + 1] = 5, u[2 * e] = E(e, 5);
            g = new y(c, s, 257, i, o), m = new y(u, a, 0, r, o), v = new y(new Array(0), l, 0, 19, 7)
        }(), R = !0), e.l_desc = new b(e.dyn_ltree, g), e.d_desc = new b(e.dyn_dtree, m), e.bl_desc = new b(e.bl_tree, v), e.bi_buf = 0, e.bi_valid = 0, T(e)
    }, Ti._tr_stored_block = O, Ti._tr_flush_block = function(e, t, i, r) {
        var o, s, a = 0;
        e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
            var t, i = 4093624447;
            for (t = 0; t <= 31; t++, i >>>= 1)
                if (1 & i && 0 !== e.dyn_ltree[2 * t]) return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
            for (t = 32; t < n; t++)
                if (0 !== e.dyn_ltree[2 * t]) return 1;
            return 0
        }(e)), z(e, e.l_desc), z(e, e.d_desc), a = function(e) {
            var t;
            for (M(e, e.dyn_ltree, e.l_desc.max_code), M(e, e.dyn_dtree, e.d_desc.max_code), z(e, e.bl_desc), t = 18; t >= 3 && 0 === e.bl_tree[2 * d[t] + 1]; t--);
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
        }(e), o = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= o && (o = s)) : o = s = i + 5, i + 4 <= o && -1 !== t ? O(e, t, i, r) : 4 === e.strategy || s === o ? (_(e, 2 + (r ? 1 : 0), 3), L(e, c, u)) : (_(e, 4 + (r ? 1 : 0), 3), function(e, t, n, i) {
            var r;
            for (_(e, t - 257, 5), _(e, n - 1, 5), _(e, i - 4, 4), r = 0; r < i; r++) _(e, e.bl_tree[2 * d[r] + 1], 3);
            B(e, e.dyn_ltree, t - 1), B(e, e.dyn_dtree, n - 1)
        }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), L(e, e.dyn_ltree, e.dyn_dtree)), T(e), r && P(e)
    }, Ti._tr_tally = function(e, t, i) {
        return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & i, e.last_lit++, 0 === t ? e.dyn_ltree[2 * i]++ : (e.matches++, t--, e.dyn_ltree[2 * (p[i] + n + 1)]++, e.dyn_dtree[2 * x(t)]++), e.last_lit === e.lit_bufsize - 1
    }, Ti._tr_align = function(e) {
        _(e, 2, 3), C(e, 256, c),
            function(e) {
                16 === e.bi_valid ? (k(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
            }(e)
    }, Ti
}

function Ai() {
    if (yi) return wi;
    return yi = 1, wi = function(e, t, n, i) {
        for (var r = 65535 & e | 0, o = e >>> 16 & 65535 | 0, s = 0; 0 !== n;) {
            n -= s = n > 2e3 ? 2e3 : n;
            do {
                o = o + (r = r + t[i++] | 0) | 0
            } while (--s);
            r %= 65521, o %= 65521
        }
        return r | o << 16 | 0
    }, wi
}

function Ii() {
    if (xi) return bi;
    xi = 1;
    var e = function() {
        for (var e, t = [], n = 0; n < 256; n++) {
            e = n;
            for (var i = 0; i < 8; i++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
            t[n] = e
        }
        return t
    }();
    return bi = function(t, n, i, r) {
        var o = e,
            s = r + i;
        t ^= -1;
        for (var a = r; a < s; a++) t = t >>> 8 ^ o[255 & (t ^ n[a])];
        return -1 ^ t
    }, bi
}

function Li() {
    return _i ? ki : (_i = 1, ki = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    })
}

function zi() {
    if (Ci) return Si;
    Ci = 1;
    var e, t = mi(),
        n = Pi(),
        i = Ai(),
        r = Ii(),
        o = Li(),
        s = -2,
        a = 258,
        l = 262,
        d = 103,
        c = 113,
        u = 666;

    function h(e, t) {
        return e.msg = o[t], t
    }

    function p(e) {
        return (e << 1) - (e > 4 ? 9 : 0)
    }

    function f(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0
    }

    function g(e) {
        var n = e.state,
            i = n.pending;
        i > e.avail_out && (i = e.avail_out), 0 !== i && (t.arraySet(e.output, n.pending_buf, n.pending_out, i, e.next_out), e.next_out += i, n.pending_out += i, e.total_out += i, e.avail_out -= i, n.pending -= i, 0 === n.pending && (n.pending_out = 0))
    }

    function m(e, t) {
        n._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, g(e.strm)
    }

    function v(e, t) {
        e.pending_buf[e.pending++] = t
    }

    function w(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t
    }

    function y(e, n, o, s) {
        var a = e.avail_in;
        return a > s && (a = s), 0 === a ? 0 : (e.avail_in -= a, t.arraySet(n, e.input, e.next_in, a, o), 1 === e.state.wrap ? e.adler = i(e.adler, n, a, o) : 2 === e.state.wrap && (e.adler = r(e.adler, n, a, o)), e.next_in += a, e.total_in += a, a)
    }

    function b(e, t) {
        var n, i, r = e.max_chain_length,
            o = e.strstart,
            s = e.prev_length,
            d = e.nice_match,
            c = e.strstart > e.w_size - l ? e.strstart - (e.w_size - l) : 0,
            u = e.window,
            h = e.w_mask,
            p = e.prev,
            f = e.strstart + a,
            g = u[o + s - 1],
            m = u[o + s];
        e.prev_length >= e.good_match && (r >>= 2), d > e.lookahead && (d = e.lookahead);
        do {
            if (u[(n = t) + s] === m && u[n + s - 1] === g && u[n] === u[o] && u[++n] === u[o + 1]) {
                o += 2, n++;
                do {} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < f);
                if (i = a - (f - o), o = f - a, i > s) {
                    if (e.match_start = t, s = i, i >= d) break;
                    g = u[o + s - 1], m = u[o + s]
                }
            }
        } while ((t = p[t & h]) > c && 0 != --r);
        return s <= e.lookahead ? s : e.lookahead
    }

    function x(e) {
        var n, i, r, o, s, a = e.w_size;
        do {
            if (o = e.window_size - e.lookahead - e.strstart, e.strstart >= a + (a - l)) {
                t.arraySet(e.window, e.window, a, a, 0), e.match_start -= a, e.strstart -= a, e.block_start -= a, n = i = e.hash_size;
                do {
                    r = e.head[--n], e.head[n] = r >= a ? r - a : 0
                } while (--i);
                n = i = a;
                do {
                    r = e.prev[--n], e.prev[n] = r >= a ? r - a : 0
                } while (--i);
                o += a
            }
            if (0 === e.strm.avail_in) break;
            if (i = y(e.strm, e.window, e.strstart + e.lookahead, o), e.lookahead += i, e.lookahead + e.insert >= 3)
                for (s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 3 - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < 3)););
        } while (e.lookahead < l && 0 !== e.strm.avail_in)
    }

    function k(e, t) {
        for (var i, r;;) {
            if (e.lookahead < l) {
                if (x(e), e.lookahead < l && 0 === t) return 1;
                if (0 === e.lookahead) break
            }
            if (i = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== i && e.strstart - i <= e.w_size - l && (e.match_length = b(e, i)), e.match_length >= 3)
                if (r = n._tr_tally(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                    e.match_length--;
                    do {
                        e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart
                    } while (0 != --e.match_length);
                    e.strstart++
                } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
            else r = n._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
            if (r && (m(e, !1), 0 === e.strm.avail_out)) return 1
        }
        return e.insert = e.strstart < 2 ? e.strstart : 2, 4 === t ? (m(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (m(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }

    function _(e, t) {
        for (var i, r, o;;) {
            if (e.lookahead < l) {
                if (x(e), e.lookahead < l && 0 === t) return 1;
                if (0 === e.lookahead) break
            }
            if (i = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, 0 !== i && e.prev_length < e.max_lazy_match && e.strstart - i <= e.w_size - l && (e.match_length = b(e, i), e.match_length <= 5 && (1 === e.strategy || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
                o = e.strstart + e.lookahead - 3, r = n._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                do {
                    ++e.strstart <= o && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, i = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart)
                } while (0 != --e.prev_length);
                if (e.match_available = 0, e.match_length = 2, e.strstart++, r && (m(e, !1), 0 === e.strm.avail_out)) return 1
            } else if (e.match_available) {
                if ((r = n._tr_tally(e, 0, e.window[e.strstart - 1])) && m(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
            } else e.match_available = 1, e.strstart++, e.lookahead--
        }
        return e.match_available && (r = n._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < 2 ? e.strstart : 2, 4 === t ? (m(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (m(e, !1), 0 === e.strm.avail_out) ? 1 : 2
    }

    function C(e, t, n, i, r) {
        this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = i, this.func = r
    }

    function E() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new t.Buf16(1146), this.dyn_dtree = new t.Buf16(122), this.bl_tree = new t.Buf16(78), f(this.dyn_ltree), f(this.dyn_dtree), f(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new t.Buf16(16), this.heap = new t.Buf16(573), f(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new t.Buf16(573), f(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
    }

    function S(e) {
        var t;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = 2, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? 42 : c, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = 0, n._tr_init(t), 0) : h(e, s)
    }

    function T(t) {
        var n, i = S(t);
        return 0 === i && ((n = t.state).window_size = 2 * n.w_size, f(n.head), n.max_lazy_match = e[n.level].max_lazy, n.good_match = e[n.level].good_length, n.nice_match = e[n.level].nice_length, n.max_chain_length = e[n.level].max_chain, n.strstart = 0, n.block_start = 0, n.lookahead = 0, n.insert = 0, n.match_length = n.prev_length = 2, n.match_available = 0, n.ins_h = 0), i
    }

    function P(e, n, i, r, o, a) {
        if (!e) return s;
        var l = 1;
        if (-1 === n && (n = 6), r < 0 ? (l = 0, r = -r) : r > 15 && (l = 2, r -= 16), o < 1 || o > 9 || 8 !== i || r < 8 || r > 15 || n < 0 || n > 9 || a < 0 || a > 4) return h(e, s);
        8 === r && (r = 9);
        var d = new E;
        return e.state = d, d.strm = e, d.wrap = l, d.gzhead = null, d.w_bits = r, d.w_size = 1 << d.w_bits, d.w_mask = d.w_size - 1, d.hash_bits = o + 7, d.hash_size = 1 << d.hash_bits, d.hash_mask = d.hash_size - 1, d.hash_shift = ~~((d.hash_bits + 3 - 1) / 3), d.window = new t.Buf8(2 * d.w_size), d.head = new t.Buf16(d.hash_size), d.prev = new t.Buf16(d.w_size), d.lit_bufsize = 1 << o + 6, d.pending_buf_size = 4 * d.lit_bufsize, d.pending_buf = new t.Buf8(d.pending_buf_size), d.d_buf = 1 * d.lit_bufsize, d.l_buf = 3 * d.lit_bufsize, d.level = n, d.strategy = a, d.method = i, T(e)
    }
    return e = [new C(0, 0, 0, 0, (function(e, t) {
        var n = 65535;
        for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
            if (e.lookahead <= 1) {
                if (x(e), 0 === e.lookahead && 0 === t) return 1;
                if (0 === e.lookahead) break
            }
            e.strstart += e.lookahead, e.lookahead = 0;
            var i = e.block_start + n;
            if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, m(e, !1), 0 === e.strm.avail_out)) return 1;
            if (e.strstart - e.block_start >= e.w_size - l && (m(e, !1), 0 === e.strm.avail_out)) return 1
        }
        return e.insert = 0, 4 === t ? (m(e, !0), 0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (m(e, !1), e.strm.avail_out), 1)
    })), new C(4, 4, 8, 4, k), new C(4, 5, 16, 8, k), new C(4, 6, 32, 32, k), new C(4, 4, 16, 16, _), new C(8, 16, 32, 32, _), new C(8, 16, 128, 128, _), new C(8, 32, 128, 256, _), new C(32, 128, 258, 1024, _), new C(32, 258, 258, 4096, _)], Si.deflateInit = function(e, t) {
        return P(e, t, 8, 15, 8, 0)
    }, Si.deflateInit2 = P, Si.deflateReset = T, Si.deflateResetKeep = S, Si.deflateSetHeader = function(e, t) {
        return e && e.state ? 2 !== e.state.wrap ? s : (e.state.gzhead = t, 0) : s
    }, Si.deflate = function(t, i) {
        var o, l, y, b;
        if (!t || !t.state || i > 5 || i < 0) return t ? h(t, s) : s;
        if (l = t.state, !t.output || !t.input && 0 !== t.avail_in || l.status === u && 4 !== i) return h(t, 0 === t.avail_out ? -5 : s);
        if (l.strm = t, o = l.last_flush, l.last_flush = i, 42 === l.status)
            if (2 === l.wrap) t.adler = 0, v(l, 31), v(l, 139), v(l, 8), l.gzhead ? (v(l, (l.gzhead.text ? 1 : 0) + (l.gzhead.hcrc ? 2 : 0) + (l.gzhead.extra ? 4 : 0) + (l.gzhead.name ? 8 : 0) + (l.gzhead.comment ? 16 : 0)), v(l, 255 & l.gzhead.time), v(l, l.gzhead.time >> 8 & 255), v(l, l.gzhead.time >> 16 & 255), v(l, l.gzhead.time >> 24 & 255), v(l, 9 === l.level ? 2 : l.strategy >= 2 || l.level < 2 ? 4 : 0), v(l, 255 & l.gzhead.os), l.gzhead.extra && l.gzhead.extra.length && (v(l, 255 & l.gzhead.extra.length), v(l, l.gzhead.extra.length >> 8 & 255)), l.gzhead.hcrc && (t.adler = r(t.adler, l.pending_buf, l.pending, 0)), l.gzindex = 0, l.status = 69) : (v(l, 0), v(l, 0), v(l, 0), v(l, 0), v(l, 0), v(l, 9 === l.level ? 2 : l.strategy >= 2 || l.level < 2 ? 4 : 0), v(l, 3), l.status = c);
            else {
                var k = 8 + (l.w_bits - 8 << 4) << 8;
                k |= (l.strategy >= 2 || l.level < 2 ? 0 : l.level < 6 ? 1 : 6 === l.level ? 2 : 3) << 6, 0 !== l.strstart && (k |= 32), k += 31 - k % 31, l.status = c, w(l, k), 0 !== l.strstart && (w(l, t.adler >>> 16), w(l, 65535 & t.adler)), t.adler = 1
            } if (69 === l.status)
            if (l.gzhead.extra) {
                for (y = l.pending; l.gzindex < (65535 & l.gzhead.extra.length) && (l.pending !== l.pending_buf_size || (l.gzhead.hcrc && l.pending > y && (t.adler = r(t.adler, l.pending_buf, l.pending - y, y)), g(t), y = l.pending, l.pending !== l.pending_buf_size));) v(l, 255 & l.gzhead.extra[l.gzindex]), l.gzindex++;
                l.gzhead.hcrc && l.pending > y && (t.adler = r(t.adler, l.pending_buf, l.pending - y, y)), l.gzindex === l.gzhead.extra.length && (l.gzindex = 0, l.status = 73)
            } else l.status = 73;
        if (73 === l.status)
            if (l.gzhead.name) {
                y = l.pending;
                do {
                    if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > y && (t.adler = r(t.adler, l.pending_buf, l.pending - y, y)), g(t), y = l.pending, l.pending === l.pending_buf_size)) {
                        b = 1;
                        break
                    }
                    b = l.gzindex < l.gzhead.name.length ? 255 & l.gzhead.name.charCodeAt(l.gzindex++) : 0, v(l, b)
                } while (0 !== b);
                l.gzhead.hcrc && l.pending > y && (t.adler = r(t.adler, l.pending_buf, l.pending - y, y)), 0 === b && (l.gzindex = 0, l.status = 91)
            } else l.status = 91;
        if (91 === l.status)
            if (l.gzhead.comment) {
                y = l.pending;
                do {
                    if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > y && (t.adler = r(t.adler, l.pending_buf, l.pending - y, y)), g(t), y = l.pending, l.pending === l.pending_buf_size)) {
                        b = 1;
                        break
                    }
                    b = l.gzindex < l.gzhead.comment.length ? 255 & l.gzhead.comment.charCodeAt(l.gzindex++) : 0, v(l, b)
                } while (0 !== b);
                l.gzhead.hcrc && l.pending > y && (t.adler = r(t.adler, l.pending_buf, l.pending - y, y)), 0 === b && (l.status = d)
            } else l.status = d;
        if (l.status === d && (l.gzhead.hcrc ? (l.pending + 2 > l.pending_buf_size && g(t), l.pending + 2 <= l.pending_buf_size && (v(l, 255 & t.adler), v(l, t.adler >> 8 & 255), t.adler = 0, l.status = c)) : l.status = c), 0 !== l.pending) {
            if (g(t), 0 === t.avail_out) return l.last_flush = -1, 0
        } else if (0 === t.avail_in && p(i) <= p(o) && 4 !== i) return h(t, -5);
        if (l.status === u && 0 !== t.avail_in) return h(t, -5);
        if (0 !== t.avail_in || 0 !== l.lookahead || 0 !== i && l.status !== u) {
            var _ = 2 === l.strategy ? function(e, t) {
                for (var i;;) {
                    if (0 === e.lookahead && (x(e), 0 === e.lookahead)) {
                        if (0 === t) return 1;
                        break
                    }
                    if (e.match_length = 0, i = n._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, i && (m(e, !1), 0 === e.strm.avail_out)) return 1
                }
                return e.insert = 0, 4 === t ? (m(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (m(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            }(l, i) : 3 === l.strategy ? function(e, t) {
                for (var i, r, o, s, l = e.window;;) {
                    if (e.lookahead <= a) {
                        if (x(e), e.lookahead <= a && 0 === t) return 1;
                        if (0 === e.lookahead) break
                    }
                    if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (r = l[o = e.strstart - 1]) === l[++o] && r === l[++o] && r === l[++o]) {
                        s = e.strstart + a;
                        do {} while (r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && o < s);
                        e.match_length = a - (s - o), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                    }
                    if (e.match_length >= 3 ? (i = n._tr_tally(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (i = n._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), i && (m(e, !1), 0 === e.strm.avail_out)) return 1
                }
                return e.insert = 0, 4 === t ? (m(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (m(e, !1), 0 === e.strm.avail_out) ? 1 : 2
            }(l, i) : e[l.level].func(l, i);
            if (3 !== _ && 4 !== _ || (l.status = u), 1 === _ || 3 === _) return 0 === t.avail_out && (l.last_flush = -1), 0;
            if (2 === _ && (1 === i ? n._tr_align(l) : 5 !== i && (n._tr_stored_block(l, 0, 0, !1), 3 === i && (f(l.head), 0 === l.lookahead && (l.strstart = 0, l.block_start = 0, l.insert = 0))), g(t), 0 === t.avail_out)) return l.last_flush = -1, 0
        }
        return 4 !== i ? 0 : l.wrap <= 0 ? 1 : (2 === l.wrap ? (v(l, 255 & t.adler), v(l, t.adler >> 8 & 255), v(l, t.adler >> 16 & 255), v(l, t.adler >> 24 & 255), v(l, 255 & t.total_in), v(l, t.total_in >> 8 & 255), v(l, t.total_in >> 16 & 255), v(l, t.total_in >> 24 & 255)) : (w(l, t.adler >>> 16), w(l, 65535 & t.adler)), g(t), l.wrap > 0 && (l.wrap = -l.wrap), 0 !== l.pending ? 0 : 1)
    }, Si.deflateEnd = function(e) {
        var t;
        return e && e.state ? 42 !== (t = e.state.status) && 69 !== t && 73 !== t && 91 !== t && t !== d && t !== c && t !== u ? h(e, s) : (e.state = null, t === c ? h(e, -3) : 0) : s
    }, Si.deflateSetDictionary = function(e, n) {
        var r, o, a, l, d, c, u, h, p = n.length;
        if (!e || !e.state) return s;
        if (2 === (l = (r = e.state).wrap) || 1 === l && 42 !== r.status || r.lookahead) return s;
        for (1 === l && (e.adler = i(e.adler, n, p, 0)), r.wrap = 0, p >= r.w_size && (0 === l && (f(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), h = new t.Buf8(r.w_size), t.arraySet(h, n, p - r.w_size, r.w_size, 0), n = h, p = r.w_size), d = e.avail_in, c = e.next_in, u = e.input, e.avail_in = p, e.next_in = 0, e.input = n, x(r); r.lookahead >= 3;) {
            o = r.strstart, a = r.lookahead - 2;
            do {
                r.ins_h = (r.ins_h << r.hash_shift ^ r.window[o + 3 - 1]) & r.hash_mask, r.prev[o & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = o, o++
            } while (--a);
            r.strstart = o, r.lookahead = 2, x(r)
        }
        return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = 2, r.match_available = 0, e.next_in = c, e.input = u, e.avail_in = d, r.wrap = l, 0
    }, Si.deflateInfo = "pako deflate (from Nodeca project)", Si
}
var Mi, Bi, Ri, Oi, Ni = {};

function Ui() {
    if (Mi) return Ni;
    Mi = 1;
    var e = mi(),
        t = !0,
        n = !0;
    try {
        String.fromCharCode.apply(null, [0])
    } catch (e) {
        t = !1
    }
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (e) {
        n = !1
    }
    for (var i = new e.Buf8(256), r = 0; r < 256; r++) i[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;

    function o(i, r) {
        if (r < 65537 && (i.subarray && n || !i.subarray && t)) return String.fromCharCode.apply(null, e.shrinkBuf(i, r));
        for (var o = "", s = 0; s < r; s++) o += String.fromCharCode(i[s]);
        return o
    }
    return i[254] = i[254] = 1, Ni.string2buf = function(t) {
        var n, i, r, o, s, a = t.length,
            l = 0;
        for (o = 0; o < a; o++) 55296 == (64512 & (i = t.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (r = t.charCodeAt(o + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), o++), l += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
        for (n = new e.Buf8(l), s = 0, o = 0; s < l; o++) 55296 == (64512 & (i = t.charCodeAt(o))) && o + 1 < a && 56320 == (64512 & (r = t.charCodeAt(o + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), o++), i < 128 ? n[s++] = i : i < 2048 ? (n[s++] = 192 | i >>> 6, n[s++] = 128 | 63 & i) : i < 65536 ? (n[s++] = 224 | i >>> 12, n[s++] = 128 | i >>> 6 & 63, n[s++] = 128 | 63 & i) : (n[s++] = 240 | i >>> 18, n[s++] = 128 | i >>> 12 & 63, n[s++] = 128 | i >>> 6 & 63, n[s++] = 128 | 63 & i);
        return n
    }, Ni.buf2binstring = function(e) {
        return o(e, e.length)
    }, Ni.binstring2buf = function(t) {
        for (var n = new e.Buf8(t.length), i = 0, r = n.length; i < r; i++) n[i] = t.charCodeAt(i);
        return n
    }, Ni.buf2string = function(e, t) {
        var n, r, s, a, l = t || e.length,
            d = new Array(2 * l);
        for (r = 0, n = 0; n < l;)
            if ((s = e[n++]) < 128) d[r++] = s;
            else if ((a = i[s]) > 4) d[r++] = 65533, n += a - 1;
        else {
            for (s &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < l;) s = s << 6 | 63 & e[n++], a--;
            a > 1 ? d[r++] = 65533 : s < 65536 ? d[r++] = s : (s -= 65536, d[r++] = 55296 | s >> 10 & 1023, d[r++] = 56320 | 1023 & s)
        }
        return o(d, r)
    }, Ni.utf8border = function(e, t) {
        var n;
        for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]);) n--;
        return n < 0 || 0 === n ? t : n + i[e[n]] > t ? n : t
    }, Ni
}

function Di() {
    if (Ri) return Bi;
    return Ri = 1, Bi = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
    }
}
var Vi, Wi, $i, Fi, ji, Hi, qi, Xi, Yi, Ki, Gi, Zi, Ji, Qi = {},
    er = {};

function tr() {
    if (ji) return er;
    ji = 1;
    var e = mi(),
        t = Ai(),
        n = Ii(),
        i = (Wi || (Wi = 1, Vi = function(e, t) {
            var n, i, r, o, s, a, l, d, c, u, h, p, f, g, m, v, w, y, b, x, k, _, C, E, S;
            n = e.state, i = e.next_in, E = e.input, r = i + (e.avail_in - 5), o = e.next_out, S = e.output, s = o - (t - e.avail_out), a = o + (e.avail_out - 257), l = n.dmax, d = n.wsize, c = n.whave, u = n.wnext, h = n.window, p = n.hold, f = n.bits, g = n.lencode, m = n.distcode, v = (1 << n.lenbits) - 1, w = (1 << n.distbits) - 1;
            e: do {
                f < 15 && (p += E[i++] << f, f += 8, p += E[i++] << f, f += 8), y = g[p & v];
                t: for (;;) {
                    if (p >>>= b = y >>> 24, f -= b, 0 == (b = y >>> 16 & 255)) S[o++] = 65535 & y;
                    else {
                        if (!(16 & b)) {
                            if (0 == (64 & b)) {
                                y = g[(65535 & y) + (p & (1 << b) - 1)];
                                continue t
                            }
                            if (32 & b) {
                                n.mode = 12;
                                break e
                            }
                            e.msg = "invalid literal/length code", n.mode = 30;
                            break e
                        }
                        x = 65535 & y, (b &= 15) && (f < b && (p += E[i++] << f, f += 8), x += p & (1 << b) - 1, p >>>= b, f -= b), f < 15 && (p += E[i++] << f, f += 8, p += E[i++] << f, f += 8), y = m[p & w];
                        n: for (;;) {
                            if (p >>>= b = y >>> 24, f -= b, !(16 & (b = y >>> 16 & 255))) {
                                if (0 == (64 & b)) {
                                    y = m[(65535 & y) + (p & (1 << b) - 1)];
                                    continue n
                                }
                                e.msg = "invalid distance code", n.mode = 30;
                                break e
                            }
                            if (k = 65535 & y, f < (b &= 15) && (p += E[i++] << f, (f += 8) < b && (p += E[i++] << f, f += 8)), (k += p & (1 << b) - 1) > l) {
                                e.msg = "invalid distance too far back", n.mode = 30;
                                break e
                            }
                            if (p >>>= b, f -= b, k > (b = o - s)) {
                                if ((b = k - b) > c && n.sane) {
                                    e.msg = "invalid distance too far back", n.mode = 30;
                                    break e
                                }
                                if (_ = 0, C = h, 0 === u) {
                                    if (_ += d - b, b < x) {
                                        x -= b;
                                        do {
                                            S[o++] = h[_++]
                                        } while (--b);
                                        _ = o - k, C = S
                                    }
                                } else if (u < b) {
                                    if (_ += d + u - b, (b -= u) < x) {
                                        x -= b;
                                        do {
                                            S[o++] = h[_++]
                                        } while (--b);
                                        if (_ = 0, u < x) {
                                            x -= b = u;
                                            do {
                                                S[o++] = h[_++]
                                            } while (--b);
                                            _ = o - k, C = S
                                        }
                                    }
                                } else if (_ += u - b, b < x) {
                                    x -= b;
                                    do {
                                        S[o++] = h[_++]
                                    } while (--b);
                                    _ = o - k, C = S
                                }
                                for (; x > 2;) S[o++] = C[_++], S[o++] = C[_++], S[o++] = C[_++], x -= 3;
                                x && (S[o++] = C[_++], x > 1 && (S[o++] = C[_++]))
                            } else {
                                _ = o - k;
                                do {
                                    S[o++] = S[_++], S[o++] = S[_++], S[o++] = S[_++], x -= 3
                                } while (x > 2);
                                x && (S[o++] = S[_++], x > 1 && (S[o++] = S[_++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (i < r && o < a);
            i -= x = f >> 3, p &= (1 << (f -= x << 3)) - 1, e.next_in = i, e.next_out = o, e.avail_in = i < r ? r - i + 5 : 5 - (i - r), e.avail_out = o < a ? a - o + 257 : 257 - (o - a), n.hold = p, n.bits = f
        }), Vi),
        r = function() {
            if (Fi) return $i;
            Fi = 1;
            var e = mi(),
                t = 15,
                n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                r = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                o = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            return $i = function(s, a, l, d, c, u, h, p) {
                var f, g, m, v, w, y, b, x, k, _ = p.bits,
                    C = 0,
                    E = 0,
                    S = 0,
                    T = 0,
                    P = 0,
                    A = 0,
                    I = 0,
                    L = 0,
                    z = 0,
                    M = 0,
                    B = null,
                    R = 0,
                    O = new e.Buf16(16),
                    N = new e.Buf16(16),
                    U = null,
                    D = 0;
                for (C = 0; C <= t; C++) O[C] = 0;
                for (E = 0; E < d; E++) O[a[l + E]]++;
                for (P = _, T = t; T >= 1 && 0 === O[T]; T--);
                if (P > T && (P = T), 0 === T) return c[u++] = 20971520, c[u++] = 20971520, p.bits = 1, 0;
                for (S = 1; S < T && 0 === O[S]; S++);
                for (P < S && (P = S), L = 1, C = 1; C <= t; C++)
                    if (L <<= 1, (L -= O[C]) < 0) return -1;
                if (L > 0 && (0 === s || 1 !== T)) return -1;
                for (N[1] = 0, C = 1; C < t; C++) N[C + 1] = N[C] + O[C];
                for (E = 0; E < d; E++) 0 !== a[l + E] && (h[N[a[l + E]]++] = E);
                if (0 === s ? (B = U = h, y = 19) : 1 === s ? (B = n, R -= 257, U = i, D -= 257, y = 256) : (B = r, U = o, y = -1), M = 0, E = 0, C = S, w = u, A = P, I = 0, m = -1, v = (z = 1 << P) - 1, 1 === s && z > 852 || 2 === s && z > 592) return 1;
                for (;;) {
                    b = C - I, h[E] < y ? (x = 0, k = h[E]) : h[E] > y ? (x = U[D + h[E]], k = B[R + h[E]]) : (x = 96, k = 0), f = 1 << C - I, S = g = 1 << A;
                    do {
                        c[w + (M >> I) + (g -= f)] = b << 24 | x << 16 | k | 0
                    } while (0 !== g);
                    for (f = 1 << C - 1; M & f;) f >>= 1;
                    if (0 !== f ? (M &= f - 1, M += f) : M = 0, E++, 0 == --O[C]) {
                        if (C === T) break;
                        C = a[l + h[E]]
                    }
                    if (C > P && (M & v) !== m) {
                        for (0 === I && (I = P), w += S, L = 1 << (A = C - I); A + I < T && !((L -= O[A + I]) <= 0);) A++, L <<= 1;
                        if (z += 1 << A, 1 === s && z > 852 || 2 === s && z > 592) return 1;
                        c[m = M & v] = P << 24 | A << 16 | w - u | 0
                    }
                }
                return 0 !== M && (c[w + M] = C - I << 24 | 64 << 16 | 0), p.bits = P, 0
            }, $i
        }(),
        o = -2,
        s = 12,
        a = 30;

    function l(e) {
        return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
    }

    function d() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new e.Buf16(320), this.work = new e.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
    }

    function c(t) {
        var n;
        return t && t.state ? (n = t.state, t.total_in = t.total_out = n.total = 0, t.msg = "", n.wrap && (t.adler = 1 & n.wrap), n.mode = 1, n.last = 0, n.havedict = 0, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new e.Buf32(852), n.distcode = n.distdyn = new e.Buf32(592), n.sane = 1, n.back = -1, 0) : o
    }

    function u(e) {
        var t;
        return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, c(e)) : o
    }

    function h(e, t) {
        var n, i;
        return e && e.state ? (i = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? o : (null !== i.window && i.wbits !== t && (i.window = null), i.wrap = n, i.wbits = t, u(e))) : o
    }

    function p(e, t) {
        var n, i;
        return e ? (i = new d, e.state = i, i.window = null, 0 !== (n = h(e, t)) && (e.state = null), n) : o
    }
    var f, g, m = !0;

    function v(t) {
        if (m) {
            var n;
            for (f = new e.Buf32(512), g = new e.Buf32(32), n = 0; n < 144;) t.lens[n++] = 8;
            for (; n < 256;) t.lens[n++] = 9;
            for (; n < 280;) t.lens[n++] = 7;
            for (; n < 288;) t.lens[n++] = 8;
            for (r(1, t.lens, 0, 288, f, 0, t.work, {
                    bits: 9
                }), n = 0; n < 32;) t.lens[n++] = 5;
            r(2, t.lens, 0, 32, g, 0, t.work, {
                bits: 5
            }), m = !1
        }
        t.lencode = f, t.lenbits = 9, t.distcode = g, t.distbits = 5
    }

    function w(t, n, i, r) {
        var o, s = t.state;
        return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new e.Buf8(s.wsize)), r >= s.wsize ? (e.arraySet(s.window, n, i - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : ((o = s.wsize - s.wnext) > r && (o = r), e.arraySet(s.window, n, i - r, o, s.wnext), (r -= o) ? (e.arraySet(s.window, n, i - r, r, 0), s.wnext = r, s.whave = s.wsize) : (s.wnext += o, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += o))), 0
    }
    return er.inflateReset = u, er.inflateReset2 = h, er.inflateResetKeep = c, er.inflateInit = function(e) {
        return p(e, 15)
    }, er.inflateInit2 = p, er.inflate = function(d, c) {
        var u, h, p, f, g, m, y, b, x, k, _, C, E, S, T, P, A, I, L, z, M, B, R, O, N = 0,
            U = new e.Buf8(4),
            D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!d || !d.state || !d.output || !d.input && 0 !== d.avail_in) return o;
        (u = d.state).mode === s && (u.mode = 13), g = d.next_out, p = d.output, y = d.avail_out, f = d.next_in, h = d.input, m = d.avail_in, b = u.hold, x = u.bits, k = m, _ = y, B = 0;
        e: for (;;) switch (u.mode) {
            case 1:
                if (0 === u.wrap) {
                    u.mode = 13;
                    break
                }
                for (; x < 16;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                if (2 & u.wrap && 35615 === b) {
                    u.check = 0, U[0] = 255 & b, U[1] = b >>> 8 & 255, u.check = n(u.check, U, 2, 0), b = 0, x = 0, u.mode = 2;
                    break
                }
                if (u.flags = 0, u.head && (u.head.done = !1), !(1 & u.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
                    d.msg = "incorrect header check", u.mode = a;
                    break
                }
                if (8 != (15 & b)) {
                    d.msg = "unknown compression method", u.mode = a;
                    break
                }
                if (x -= 4, M = 8 + (15 & (b >>>= 4)), 0 === u.wbits) u.wbits = M;
                else if (M > u.wbits) {
                    d.msg = "invalid window size", u.mode = a;
                    break
                }
                u.dmax = 1 << M, d.adler = u.check = 1, u.mode = 512 & b ? 10 : s, b = 0, x = 0;
                break;
            case 2:
                for (; x < 16;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                if (u.flags = b, 8 != (255 & u.flags)) {
                    d.msg = "unknown compression method", u.mode = a;
                    break
                }
                if (57344 & u.flags) {
                    d.msg = "unknown header flags set", u.mode = a;
                    break
                }
                u.head && (u.head.text = b >> 8 & 1), 512 & u.flags && (U[0] = 255 & b, U[1] = b >>> 8 & 255, u.check = n(u.check, U, 2, 0)), b = 0, x = 0, u.mode = 3;
            case 3:
                for (; x < 32;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                u.head && (u.head.time = b), 512 & u.flags && (U[0] = 255 & b, U[1] = b >>> 8 & 255, U[2] = b >>> 16 & 255, U[3] = b >>> 24 & 255, u.check = n(u.check, U, 4, 0)), b = 0, x = 0, u.mode = 4;
            case 4:
                for (; x < 16;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                u.head && (u.head.xflags = 255 & b, u.head.os = b >> 8), 512 & u.flags && (U[0] = 255 & b, U[1] = b >>> 8 & 255, u.check = n(u.check, U, 2, 0)), b = 0, x = 0, u.mode = 5;
            case 5:
                if (1024 & u.flags) {
                    for (; x < 16;) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    u.length = b, u.head && (u.head.extra_len = b), 512 & u.flags && (U[0] = 255 & b, U[1] = b >>> 8 & 255, u.check = n(u.check, U, 2, 0)), b = 0, x = 0
                } else u.head && (u.head.extra = null);
                u.mode = 6;
            case 6:
                if (1024 & u.flags && ((C = u.length) > m && (C = m), C && (u.head && (M = u.head.extra_len - u.length, u.head.extra || (u.head.extra = new Array(u.head.extra_len)), e.arraySet(u.head.extra, h, f, C, M)), 512 & u.flags && (u.check = n(u.check, h, C, f)), m -= C, f += C, u.length -= C), u.length)) break e;
                u.length = 0, u.mode = 7;
            case 7:
                if (2048 & u.flags) {
                    if (0 === m) break e;
                    C = 0;
                    do {
                        M = h[f + C++], u.head && M && u.length < 65536 && (u.head.name += String.fromCharCode(M))
                    } while (M && C < m);
                    if (512 & u.flags && (u.check = n(u.check, h, C, f)), m -= C, f += C, M) break e
                } else u.head && (u.head.name = null);
                u.length = 0, u.mode = 8;
            case 8:
                if (4096 & u.flags) {
                    if (0 === m) break e;
                    C = 0;
                    do {
                        M = h[f + C++], u.head && M && u.length < 65536 && (u.head.comment += String.fromCharCode(M))
                    } while (M && C < m);
                    if (512 & u.flags && (u.check = n(u.check, h, C, f)), m -= C, f += C, M) break e
                } else u.head && (u.head.comment = null);
                u.mode = 9;
            case 9:
                if (512 & u.flags) {
                    for (; x < 16;) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    if (b !== (65535 & u.check)) {
                        d.msg = "header crc mismatch", u.mode = a;
                        break
                    }
                    b = 0, x = 0
                }
                u.head && (u.head.hcrc = u.flags >> 9 & 1, u.head.done = !0), d.adler = u.check = 0, u.mode = s;
                break;
            case 10:
                for (; x < 32;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                d.adler = u.check = l(b), b = 0, x = 0, u.mode = 11;
            case 11:
                if (0 === u.havedict) return d.next_out = g, d.avail_out = y, d.next_in = f, d.avail_in = m, u.hold = b, u.bits = x, 2;
                d.adler = u.check = 1, u.mode = s;
            case s:
                if (5 === c || 6 === c) break e;
            case 13:
                if (u.last) {
                    b >>>= 7 & x, x -= 7 & x, u.mode = 27;
                    break
                }
                for (; x < 3;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                switch (u.last = 1 & b, x -= 1, 3 & (b >>>= 1)) {
                    case 0:
                        u.mode = 14;
                        break;
                    case 1:
                        if (v(u), u.mode = 20, 6 === c) {
                            b >>>= 2, x -= 2;
                            break e
                        }
                        break;
                    case 2:
                        u.mode = 17;
                        break;
                    case 3:
                        d.msg = "invalid block type", u.mode = a
                }
                b >>>= 2, x -= 2;
                break;
            case 14:
                for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                if ((65535 & b) != (b >>> 16 ^ 65535)) {
                    d.msg = "invalid stored block lengths", u.mode = a;
                    break
                }
                if (u.length = 65535 & b, b = 0, x = 0, u.mode = 15, 6 === c) break e;
            case 15:
                u.mode = 16;
            case 16:
                if (C = u.length) {
                    if (C > m && (C = m), C > y && (C = y), 0 === C) break e;
                    e.arraySet(p, h, f, C, g), m -= C, f += C, y -= C, g += C, u.length -= C;
                    break
                }
                u.mode = s;
                break;
            case 17:
                for (; x < 14;) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                if (u.nlen = 257 + (31 & b), b >>>= 5, x -= 5, u.ndist = 1 + (31 & b), b >>>= 5, x -= 5, u.ncode = 4 + (15 & b), b >>>= 4, x -= 4, u.nlen > 286 || u.ndist > 30) {
                    d.msg = "too many length or distance symbols", u.mode = a;
                    break
                }
                u.have = 0, u.mode = 18;
            case 18:
                for (; u.have < u.ncode;) {
                    for (; x < 3;) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    u.lens[D[u.have++]] = 7 & b, b >>>= 3, x -= 3
                }
                for (; u.have < 19;) u.lens[D[u.have++]] = 0;
                if (u.lencode = u.lendyn, u.lenbits = 7, R = {
                        bits: u.lenbits
                    }, B = r(0, u.lens, 0, 19, u.lencode, 0, u.work, R), u.lenbits = R.bits, B) {
                    d.msg = "invalid code lengths set", u.mode = a;
                    break
                }
                u.have = 0, u.mode = 19;
            case 19:
                for (; u.have < u.nlen + u.ndist;) {
                    for (; P = (N = u.lencode[b & (1 << u.lenbits) - 1]) >>> 16 & 255, A = 65535 & N, !((T = N >>> 24) <= x);) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    if (A < 16) b >>>= T, x -= T, u.lens[u.have++] = A;
                    else {
                        if (16 === A) {
                            for (O = T + 2; x < O;) {
                                if (0 === m) break e;
                                m--, b += h[f++] << x, x += 8
                            }
                            if (b >>>= T, x -= T, 0 === u.have) {
                                d.msg = "invalid bit length repeat", u.mode = a;
                                break
                            }
                            M = u.lens[u.have - 1], C = 3 + (3 & b), b >>>= 2, x -= 2
                        } else if (17 === A) {
                            for (O = T + 3; x < O;) {
                                if (0 === m) break e;
                                m--, b += h[f++] << x, x += 8
                            }
                            x -= T, M = 0, C = 3 + (7 & (b >>>= T)), b >>>= 3, x -= 3
                        } else {
                            for (O = T + 7; x < O;) {
                                if (0 === m) break e;
                                m--, b += h[f++] << x, x += 8
                            }
                            x -= T, M = 0, C = 11 + (127 & (b >>>= T)), b >>>= 7, x -= 7
                        }
                        if (u.have + C > u.nlen + u.ndist) {
                            d.msg = "invalid bit length repeat", u.mode = a;
                            break
                        }
                        for (; C--;) u.lens[u.have++] = M
                    }
                }
                if (u.mode === a) break;
                if (0 === u.lens[256]) {
                    d.msg = "invalid code -- missing end-of-block", u.mode = a;
                    break
                }
                if (u.lenbits = 9, R = {
                        bits: u.lenbits
                    }, B = r(1, u.lens, 0, u.nlen, u.lencode, 0, u.work, R), u.lenbits = R.bits, B) {
                    d.msg = "invalid literal/lengths set", u.mode = a;
                    break
                }
                if (u.distbits = 6, u.distcode = u.distdyn, R = {
                        bits: u.distbits
                    }, B = r(2, u.lens, u.nlen, u.ndist, u.distcode, 0, u.work, R), u.distbits = R.bits, B) {
                    d.msg = "invalid distances set", u.mode = a;
                    break
                }
                if (u.mode = 20, 6 === c) break e;
            case 20:
                u.mode = 21;
            case 21:
                if (m >= 6 && y >= 258) {
                    d.next_out = g, d.avail_out = y, d.next_in = f, d.avail_in = m, u.hold = b, u.bits = x, i(d, _), g = d.next_out, p = d.output, y = d.avail_out, f = d.next_in, h = d.input, m = d.avail_in, b = u.hold, x = u.bits, u.mode === s && (u.back = -1);
                    break
                }
                for (u.back = 0; P = (N = u.lencode[b & (1 << u.lenbits) - 1]) >>> 16 & 255, A = 65535 & N, !((T = N >>> 24) <= x);) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                if (P && 0 == (240 & P)) {
                    for (I = T, L = P, z = A; P = (N = u.lencode[z + ((b & (1 << I + L) - 1) >> I)]) >>> 16 & 255, A = 65535 & N, !(I + (T = N >>> 24) <= x);) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    b >>>= I, x -= I, u.back += I
                }
                if (b >>>= T, x -= T, u.back += T, u.length = A, 0 === P) {
                    u.mode = 26;
                    break
                }
                if (32 & P) {
                    u.back = -1, u.mode = s;
                    break
                }
                if (64 & P) {
                    d.msg = "invalid literal/length code", u.mode = a;
                    break
                }
                u.extra = 15 & P, u.mode = 22;
            case 22:
                if (u.extra) {
                    for (O = u.extra; x < O;) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    u.length += b & (1 << u.extra) - 1, b >>>= u.extra, x -= u.extra, u.back += u.extra
                }
                u.was = u.length, u.mode = 23;
            case 23:
                for (; P = (N = u.distcode[b & (1 << u.distbits) - 1]) >>> 16 & 255, A = 65535 & N, !((T = N >>> 24) <= x);) {
                    if (0 === m) break e;
                    m--, b += h[f++] << x, x += 8
                }
                if (0 == (240 & P)) {
                    for (I = T, L = P, z = A; P = (N = u.distcode[z + ((b & (1 << I + L) - 1) >> I)]) >>> 16 & 255, A = 65535 & N, !(I + (T = N >>> 24) <= x);) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    b >>>= I, x -= I, u.back += I
                }
                if (b >>>= T, x -= T, u.back += T, 64 & P) {
                    d.msg = "invalid distance code", u.mode = a;
                    break
                }
                u.offset = A, u.extra = 15 & P, u.mode = 24;
            case 24:
                if (u.extra) {
                    for (O = u.extra; x < O;) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    u.offset += b & (1 << u.extra) - 1, b >>>= u.extra, x -= u.extra, u.back += u.extra
                }
                if (u.offset > u.dmax) {
                    d.msg = "invalid distance too far back", u.mode = a;
                    break
                }
                u.mode = 25;
            case 25:
                if (0 === y) break e;
                if (C = _ - y, u.offset > C) {
                    if ((C = u.offset - C) > u.whave && u.sane) {
                        d.msg = "invalid distance too far back", u.mode = a;
                        break
                    }
                    C > u.wnext ? (C -= u.wnext, E = u.wsize - C) : E = u.wnext - C, C > u.length && (C = u.length), S = u.window
                } else S = p, E = g - u.offset, C = u.length;
                C > y && (C = y), y -= C, u.length -= C;
                do {
                    p[g++] = S[E++]
                } while (--C);
                0 === u.length && (u.mode = 21);
                break;
            case 26:
                if (0 === y) break e;
                p[g++] = u.length, y--, u.mode = 21;
                break;
            case 27:
                if (u.wrap) {
                    for (; x < 32;) {
                        if (0 === m) break e;
                        m--, b |= h[f++] << x, x += 8
                    }
                    if (_ -= y, d.total_out += _, u.total += _, _ && (d.adler = u.check = u.flags ? n(u.check, p, _, g - _) : t(u.check, p, _, g - _)), _ = y, (u.flags ? b : l(b)) !== u.check) {
                        d.msg = "incorrect data check", u.mode = a;
                        break
                    }
                    b = 0, x = 0
                }
                u.mode = 28;
            case 28:
                if (u.wrap && u.flags) {
                    for (; x < 32;) {
                        if (0 === m) break e;
                        m--, b += h[f++] << x, x += 8
                    }
                    if (b !== (4294967295 & u.total)) {
                        d.msg = "incorrect length check", u.mode = a;
                        break
                    }
                    b = 0, x = 0
                }
                u.mode = 29;
            case 29:
                B = 1;
                break e;
            case a:
                B = -3;
                break e;
            case 31:
                return -4;
            default:
                return o
        }
        return d.next_out = g, d.avail_out = y, d.next_in = f, d.avail_in = m, u.hold = b, u.bits = x, (u.wsize || _ !== d.avail_out && u.mode < a && (u.mode < 27 || 4 !== c)) && w(d, d.output, d.next_out, _ - d.avail_out), k -= d.avail_in, _ -= d.avail_out, d.total_in += k, d.total_out += _, u.total += _, u.wrap && _ && (d.adler = u.check = u.flags ? n(u.check, p, _, d.next_out - _) : t(u.check, p, _, d.next_out - _)), d.data_type = u.bits + (u.last ? 64 : 0) + (u.mode === s ? 128 : 0) + (20 === u.mode || 15 === u.mode ? 256 : 0), (0 === k && 0 === _ || 4 === c) && 0 === B && (B = -5), B
    }, er.inflateEnd = function(e) {
        if (!e || !e.state) return o;
        var t = e.state;
        return t.window && (t.window = null), e.state = null, 0
    }, er.inflateGetHeader = function(e, t) {
        var n;
        return e && e.state ? 0 == (2 & (n = e.state).wrap) ? o : (n.head = t, t.done = !1, 0) : o
    }, er.inflateSetDictionary = function(e, n) {
        var i, r = n.length;
        return e && e.state ? 0 !== (i = e.state).wrap && 11 !== i.mode ? o : 11 === i.mode && t(1, n, r, 0) !== i.check ? -3 : w(e, n, r, r) ? (i.mode = 31, -4) : (i.havedict = 1, 0) : o
    }, er.inflateInfo = "pako inflate (from Nodeca project)", er
}

function nr() {
    return qi ? Hi : (qi = 1, Hi = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    })
}

function ir() {
    if (Ki) return Qi;
    Ki = 1;
    var e = tr(),
        t = mi(),
        n = Ui(),
        i = nr(),
        r = Li(),
        o = Di(),
        s = Yi ? Xi : (Yi = 1, Xi = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
        }),
        a = Object.prototype.toString;

    function l(n) {
        if (!(this instanceof l)) return new l(n);
        this.options = t.assign({
            chunkSize: 16384,
            windowBits: 0,
            to: ""
        }, n || {});
        var a = this.options;
        a.raw && a.windowBits >= 0 && a.windowBits < 16 && (a.windowBits = -a.windowBits, 0 === a.windowBits && (a.windowBits = -15)), !(a.windowBits >= 0 && a.windowBits < 16) || n && n.windowBits || (a.windowBits += 32), a.windowBits > 15 && a.windowBits < 48 && 0 == (15 & a.windowBits) && (a.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o, this.strm.avail_out = 0;
        var d = e.inflateInit2(this.strm, a.windowBits);
        if (d !== i.Z_OK) throw new Error(r[d]);
        this.header = new s, e.inflateGetHeader(this.strm, this.header)
    }

    function d(e, t) {
        var n = new l(t);
        if (n.push(e, !0), n.err) throw n.msg || r[n.err];
        return n.result
    }
    return l.prototype.push = function(r, o) {
        var s, l, d, c, u, h, p = this.strm,
            f = this.options.chunkSize,
            g = this.options.dictionary,
            m = !1;
        if (this.ended) return !1;
        l = o === ~~o ? o : !0 === o ? i.Z_FINISH : i.Z_NO_FLUSH, "string" == typeof r ? p.input = n.binstring2buf(r) : "[object ArrayBuffer]" === a.call(r) ? p.input = new Uint8Array(r) : p.input = r, p.next_in = 0, p.avail_in = p.input.length;
        do {
            if (0 === p.avail_out && (p.output = new t.Buf8(f), p.next_out = 0, p.avail_out = f), (s = e.inflate(p, i.Z_NO_FLUSH)) === i.Z_NEED_DICT && g && (h = "string" == typeof g ? n.string2buf(g) : "[object ArrayBuffer]" === a.call(g) ? new Uint8Array(g) : g, s = e.inflateSetDictionary(this.strm, h)), s === i.Z_BUF_ERROR && !0 === m && (s = i.Z_OK, m = !1), s !== i.Z_STREAM_END && s !== i.Z_OK) return this.onEnd(s), this.ended = !0, !1;
            p.next_out && (0 !== p.avail_out && s !== i.Z_STREAM_END && (0 !== p.avail_in || l !== i.Z_FINISH && l !== i.Z_SYNC_FLUSH) || ("string" === this.options.to ? (d = n.utf8border(p.output, p.next_out), c = p.next_out - d, u = n.buf2string(p.output, d), p.next_out = c, p.avail_out = f - c, c && t.arraySet(p.output, p.output, d, c, 0), this.onData(u)) : this.onData(t.shrinkBuf(p.output, p.next_out)))), 0 === p.avail_in && 0 === p.avail_out && (m = !0)
        } while ((p.avail_in > 0 || 0 === p.avail_out) && s !== i.Z_STREAM_END);
        return s === i.Z_STREAM_END && (l = i.Z_FINISH), l === i.Z_FINISH ? (s = e.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, s === i.Z_OK) : l !== i.Z_SYNC_FLUSH || (this.onEnd(i.Z_OK), p.avail_out = 0, !0)
    }, l.prototype.onData = function(e) {
        this.chunks.push(e)
    }, l.prototype.onEnd = function(e) {
        e === i.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = t.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    }, Qi.Inflate = l, Qi.inflate = d, Qi.inflateRaw = function(e, t) {
        return (t = t || {}).raw = !0, d(e, t)
    }, Qi.ungzip = d, Qi
}

function rr() {
    if (Zi) return Gi;
    Zi = 1;
    var e = mi().assign,
        t = function() {
            if (Oi) return Ei;
            Oi = 1;
            var e = zi(),
                t = mi(),
                n = Ui(),
                i = Li(),
                r = Di(),
                o = Object.prototype.toString;

            function s(a) {
                if (!(this instanceof s)) return new s(a);
                this.options = t.assign({
                    level: -1,
                    method: 8,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: 0,
                    to: ""
                }, a || {});
                var l = this.options;
                l.raw && l.windowBits > 0 ? l.windowBits = -l.windowBits : l.gzip && l.windowBits > 0 && l.windowBits < 16 && (l.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new r, this.strm.avail_out = 0;
                var d = e.deflateInit2(this.strm, l.level, l.method, l.windowBits, l.memLevel, l.strategy);
                if (0 !== d) throw new Error(i[d]);
                if (l.header && e.deflateSetHeader(this.strm, l.header), l.dictionary) {
                    var c;
                    if (c = "string" == typeof l.dictionary ? n.string2buf(l.dictionary) : "[object ArrayBuffer]" === o.call(l.dictionary) ? new Uint8Array(l.dictionary) : l.dictionary, 0 !== (d = e.deflateSetDictionary(this.strm, c))) throw new Error(i[d]);
                    this._dict_set = !0
                }
            }

            function a(e, t) {
                var n = new s(t);
                if (n.push(e, !0), n.err) throw n.msg || i[n.err];
                return n.result
            }
            return s.prototype.push = function(i, r) {
                var s, a, l = this.strm,
                    d = this.options.chunkSize;
                if (this.ended) return !1;
                a = r === ~~r ? r : !0 === r ? 4 : 0, "string" == typeof i ? l.input = n.string2buf(i) : "[object ArrayBuffer]" === o.call(i) ? l.input = new Uint8Array(i) : l.input = i, l.next_in = 0, l.avail_in = l.input.length;
                do {
                    if (0 === l.avail_out && (l.output = new t.Buf8(d), l.next_out = 0, l.avail_out = d), 1 !== (s = e.deflate(l, a)) && 0 !== s) return this.onEnd(s), this.ended = !0, !1;
                    0 !== l.avail_out && (0 !== l.avail_in || 4 !== a && 2 !== a) || ("string" === this.options.to ? this.onData(n.buf2binstring(t.shrinkBuf(l.output, l.next_out))) : this.onData(t.shrinkBuf(l.output, l.next_out)))
                } while ((l.avail_in > 0 || 0 === l.avail_out) && 1 !== s);
                return 4 === a ? (s = e.deflateEnd(this.strm), this.onEnd(s), this.ended = !0, 0 === s) : 2 !== a || (this.onEnd(0), l.avail_out = 0, !0)
            }, s.prototype.onData = function(e) {
                this.chunks.push(e)
            }, s.prototype.onEnd = function(e) {
                0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = t.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
            }, Ei.Deflate = s, Ei.deflate = a, Ei.deflateRaw = function(e, t) {
                return (t = t || {}).raw = !0, a(e, t)
            }, Ei.gzip = function(e, t) {
                return (t = t || {}).gzip = !0, a(e, t)
            }, Ei
        }(),
        n = {};
    return e(n, t, ir(), nr()), Gi = n
}
Ji = fi,
    function() {
        var e = {};
        Ji.exports = e,
            function(e, t) {
                e.toRGBA8 = function(t) {
                    var n = t.width,
                        i = t.height;
                    if (null == t.tabs.acTL) return [e.toRGBA8.decodeImage(t.data, n, i, t).buffer];
                    var r = [];
                    null == t.frames[0].data && (t.frames[0].data = t.data);
                    for (var o, s = new Uint8Array(n * i * 4), a = 0; a < t.frames.length; a++) {
                        var l = t.frames[a],
                            d = l.rect.x,
                            c = l.rect.y,
                            u = l.rect.width,
                            h = l.rect.height,
                            p = e.toRGBA8.decodeImage(l.data, u, h, t);
                        if (0 == a ? o = p : 0 == l.blend ? e._copyTile(p, u, h, o, n, i, d, c, 0) : 1 == l.blend && e._copyTile(p, u, h, o, n, i, d, c, 1), r.push(o.buffer), o = o.slice(0), 0 == l.dispose);
                        else if (1 == l.dispose) e._copyTile(s, u, h, o, n, i, d, c, 0);
                        else if (2 == l.dispose) {
                            for (var f = a - 1; 2 == t.frames[f].dispose;) f--;
                            o = new Uint8Array(r[f]).slice(0)
                        }
                    }
                    return r
                }, e.toRGBA8.decodeImage = function(t, n, i, r) {
                    var o = n * i,
                        s = e.decode._getBPP(r),
                        a = Math.ceil(n * s / 8),
                        l = new Uint8Array(4 * o),
                        d = new Uint32Array(l.buffer),
                        c = r.ctype,
                        u = r.depth,
                        h = e._bin.readUshort;
                    if (6 == c) {
                        var p = o << 2;
                        if (8 == u)
                            for (var f = 0; f < p; f++) l[f] = t[f];
                        if (16 == u)
                            for (f = 0; f < p; f++) l[f] = t[f << 1]
                    } else if (2 == c) {
                        var g = r.tabs.tRNS,
                            m = -1,
                            v = -1,
                            w = -1;
                        if (g && (m = g[0], v = g[1], w = g[2]), 8 == u)
                            for (f = 0; f < o; f++) {
                                var y = 3 * f;
                                l[S = f << 2] = t[y], l[S + 1] = t[y + 1], l[S + 2] = t[y + 2], l[S + 3] = 255, -1 != m && t[y] == m && t[y + 1] == v && t[y + 2] == w && (l[S + 3] = 0)
                            }
                        if (16 == u)
                            for (f = 0; f < o; f++) y = 6 * f, l[S = f << 2] = t[y], l[S + 1] = t[y + 2], l[S + 2] = t[y + 4], l[S + 3] = 255, -1 != m && h(t, y) == m && h(t, y + 2) == v && h(t, y + 4) == w && (l[S + 3] = 0)
                    } else if (3 == c) {
                        var b = r.tabs.PLTE,
                            x = r.tabs.tRNS,
                            k = x ? x.length : 0;
                        if (1 == u)
                            for (var _ = 0; _ < i; _++) {
                                var C = _ * a,
                                    E = _ * n;
                                for (f = 0; f < n; f++) {
                                    var S = E + f << 2,
                                        T = 3 * (P = t[C + (f >> 3)] >> 7 - ((7 & f) << 0) & 1);
                                    l[S] = b[T], l[S + 1] = b[T + 1], l[S + 2] = b[T + 2], l[S + 3] = P < k ? x[P] : 255
                                }
                            }
                        if (2 == u)
                            for (_ = 0; _ < i; _++)
                                for (C = _ * a, E = _ * n, f = 0; f < n; f++) S = E + f << 2, T = 3 * (P = t[C + (f >> 2)] >> 6 - ((3 & f) << 1) & 3), l[S] = b[T], l[S + 1] = b[T + 1], l[S + 2] = b[T + 2], l[S + 3] = P < k ? x[P] : 255;
                        if (4 == u)
                            for (_ = 0; _ < i; _++)
                                for (C = _ * a, E = _ * n, f = 0; f < n; f++) S = E + f << 2, T = 3 * (P = t[C + (f >> 1)] >> 4 - ((1 & f) << 2) & 15), l[S] = b[T], l[S + 1] = b[T + 1], l[S + 2] = b[T + 2], l[S + 3] = P < k ? x[P] : 255;
                        if (8 == u)
                            for (f = 0; f < o; f++) {
                                var P;
                                S = f << 2, T = 3 * (P = t[f]), l[S] = b[T], l[S + 1] = b[T + 1], l[S + 2] = b[T + 2], l[S + 3] = P < k ? x[P] : 255
                            }
                    } else if (4 == c) {
                        if (8 == u)
                            for (f = 0; f < o; f++) {
                                S = f << 2;
                                var A = t[I = f << 1];
                                l[S] = A, l[S + 1] = A, l[S + 2] = A, l[S + 3] = t[I + 1]
                            }
                        if (16 == u)
                            for (f = 0; f < o; f++) {
                                var I;
                                S = f << 2, A = t[I = f << 2], l[S] = A, l[S + 1] = A, l[S + 2] = A, l[S + 3] = t[I + 2]
                            }
                    } else if (0 == c) {
                        if (m = r.tabs.tRNS ? r.tabs.tRNS : -1, 1 == u)
                            for (f = 0; f < o; f++) {
                                var L = (A = 255 * (t[f >> 3] >> 7 - (7 & f) & 1)) == 255 * m ? 0 : 255;
                                d[f] = L << 24 | A << 16 | A << 8 | A
                            }
                        if (2 == u)
                            for (f = 0; f < o; f++) L = (A = 85 * (t[f >> 2] >> 6 - ((3 & f) << 1) & 3)) == 85 * m ? 0 : 255, d[f] = L << 24 | A << 16 | A << 8 | A;
                        if (4 == u)
                            for (f = 0; f < o; f++) L = (A = 17 * (t[f >> 1] >> 4 - ((1 & f) << 2) & 15)) == 17 * m ? 0 : 255, d[f] = L << 24 | A << 16 | A << 8 | A;
                        if (8 == u)
                            for (f = 0; f < o; f++) L = (A = t[f]) == m ? 0 : 255, d[f] = L << 24 | A << 16 | A << 8 | A;
                        if (16 == u)
                            for (f = 0; f < o; f++) A = t[f << 1], L = h(t, f << 1) == m ? 0 : 255, d[f] = L << 24 | A << 16 | A << 8 | A
                    }
                    return l
                }, e.decode = function(t) {
                    for (var n, i = new Uint8Array(t), r = 8, o = e._bin, s = o.readUshort, a = o.readUint, l = {
                            tabs: {},
                            frames: []
                        }, d = new Uint8Array(i.length), c = 0, u = 0, h = [137, 80, 78, 71, 13, 10, 26, 10], p = 0; p < 8; p++)
                        if (i[p] != h[p]) throw "The input is not a PNG file!";
                    for (; r < i.length;) {
                        var f = o.readUint(i, r);
                        r += 4;
                        var g = o.readASCII(i, r, 4);
                        if (r += 4, "IHDR" == g) e.decode._IHDR(i, r, l);
                        else if ("IDAT" == g) {
                            for (p = 0; p < f; p++) d[c + p] = i[r + p];
                            c += f
                        } else if ("acTL" == g) l.tabs[g] = {
                            num_frames: a(i, r),
                            num_plays: a(i, r + 4)
                        }, n = new Uint8Array(i.length);
                        else if ("fcTL" == g) {
                            0 != u && ((C = l.frames[l.frames.length - 1]).data = e.decode._decompress(l, n.slice(0, u), C.rect.width, C.rect.height), u = 0);
                            var m = {
                                    x: a(i, r + 12),
                                    y: a(i, r + 16),
                                    width: a(i, r + 4),
                                    height: a(i, r + 8)
                                },
                                v = s(i, r + 22);
                            v = s(i, r + 20) / (0 == v ? 100 : v);
                            var w = {
                                rect: m,
                                delay: Math.round(1e3 * v),
                                dispose: i[r + 24],
                                blend: i[r + 25]
                            };
                            l.frames.push(w)
                        } else if ("fdAT" == g) {
                            for (p = 0; p < f - 4; p++) n[u + p] = i[r + p + 4];
                            u += f - 4
                        } else if ("pHYs" == g) l.tabs[g] = [o.readUint(i, r), o.readUint(i, r + 4), i[r + 8]];
                        else if ("cHRM" == g)
                            for (l.tabs[g] = [], p = 0; p < 8; p++) l.tabs[g].push(o.readUint(i, r + 4 * p));
                        else if ("tEXt" == g) {
                            null == l.tabs[g] && (l.tabs[g] = {});
                            var y = o.nextZero(i, r),
                                b = o.readASCII(i, r, y - r),
                                x = o.readASCII(i, y + 1, r + f - y - 1);
                            l.tabs[g][b] = x
                        } else if ("iTXt" == g) {
                            null == l.tabs[g] && (l.tabs[g] = {}), y = 0;
                            var k = r;
                            y = o.nextZero(i, k), b = o.readASCII(i, k, y - k), i[k = y + 1], i[k + 1], k += 2, y = o.nextZero(i, k), o.readASCII(i, k, y - k), k = y + 1, y = o.nextZero(i, k), o.readUTF8(i, k, y - k), k = y + 1, x = o.readUTF8(i, k, f - (k - r)), l.tabs[g][b] = x
                        } else if ("PLTE" == g) l.tabs[g] = o.readBytes(i, r, f);
                        else if ("hIST" == g) {
                            var _ = l.tabs.PLTE.length / 3;
                            for (l.tabs[g] = [], p = 0; p < _; p++) l.tabs[g].push(s(i, r + 2 * p))
                        } else if ("tRNS" == g) 3 == l.ctype ? l.tabs[g] = o.readBytes(i, r, f) : 0 == l.ctype ? l.tabs[g] = s(i, r) : 2 == l.ctype && (l.tabs[g] = [s(i, r), s(i, r + 2), s(i, r + 4)]);
                        else if ("gAMA" == g) l.tabs[g] = o.readUint(i, r) / 1e5;
                        else if ("sRGB" == g) l.tabs[g] = i[r];
                        else if ("bKGD" == g) 0 == l.ctype || 4 == l.ctype ? l.tabs[g] = [s(i, r)] : 2 == l.ctype || 6 == l.ctype ? l.tabs[g] = [s(i, r), s(i, r + 2), s(i, r + 4)] : 3 == l.ctype && (l.tabs[g] = i[r]);
                        else if ("IEND" == g) {
                            var C;
                            0 != u && ((C = l.frames[l.frames.length - 1]).data = e.decode._decompress(l, n.slice(0, u), C.rect.width, C.rect.height), u = 0), l.data = e.decode._decompress(l, d, l.width, l.height);
                            break
                        }
                        r += f, o.readUint(i, r), r += 4
                    }
                    return delete l.compress, delete l.interlace, delete l.filter, l
                }, e.decode._decompress = function(t, n, i, r) {
                    return 0 == t.compress && (n = e.decode._inflate(n)), 0 == t.interlace ? n = e.decode._filterZero(n, t, 0, i, r) : 1 == t.interlace && (n = e.decode._readInterlace(n, t)), n
                }, e.decode._inflate = function(e) {
                    return t.inflate(e)
                }, e.decode._readInterlace = function(t, n) {
                    for (var i = n.width, r = n.height, o = e.decode._getBPP(n), s = o >> 3, a = Math.ceil(i * o / 8), l = new Uint8Array(r * a), d = 0, c = [0, 0, 4, 0, 2, 0, 1], u = [0, 4, 0, 2, 0, 1, 0], h = [8, 8, 8, 4, 4, 2, 2], p = [8, 8, 4, 4, 2, 2, 1], f = 0; f < 7;) {
                        for (var g = h[f], m = p[f], v = 0, w = 0, y = c[f]; y < r;) y += g, w++;
                        for (var b = u[f]; b < i;) b += m, v++;
                        var x = Math.ceil(v * o / 8);
                        e.decode._filterZero(t, n, d, v, w);
                        for (var k = 0, _ = c[f]; _ < r;) {
                            for (var C = u[f], E = d + k * x << 3; C < i;) {
                                var S;
                                if (1 == o && (S = (S = t[E >> 3]) >> 7 - (7 & E) & 1, l[_ * a + (C >> 3)] |= S << 7 - ((3 & C) << 0)), 2 == o && (S = (S = t[E >> 3]) >> 6 - (7 & E) & 3, l[_ * a + (C >> 2)] |= S << 6 - ((3 & C) << 1)), 4 == o && (S = (S = t[E >> 3]) >> 4 - (7 & E) & 15, l[_ * a + (C >> 1)] |= S << 4 - ((1 & C) << 2)), o >= 8)
                                    for (var T = _ * a + C * s, P = 0; P < s; P++) l[T + P] = t[(E >> 3) + P];
                                E += o, C += m
                            }
                            k++, _ += g
                        }
                        v * w != 0 && (d += w * (1 + x)), f += 1
                    }
                    return l
                }, e.decode._getBPP = function(e) {
                    return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth
                }, e.decode._filterZero = function(t, n, i, r, o) {
                    var s = e.decode._getBPP(n),
                        a = Math.ceil(r * s / 8),
                        l = e.decode._paeth;
                    s = Math.ceil(s / 8);
                    for (var d = 0; d < o; d++) {
                        var c = i + d * a,
                            u = c + d + 1,
                            h = t[u - 1];
                        if (0 == h)
                            for (var p = 0; p < a; p++) t[c + p] = t[u + p];
                        else if (1 == h) {
                            for (p = 0; p < s; p++) t[c + p] = t[u + p];
                            for (p = s; p < a; p++) t[c + p] = t[u + p] + t[c + p - s] & 255
                        } else if (0 == d) {
                            for (p = 0; p < s; p++) t[c + p] = t[u + p];
                            if (2 == h)
                                for (p = s; p < a; p++) t[c + p] = 255 & t[u + p];
                            if (3 == h)
                                for (p = s; p < a; p++) t[c + p] = t[u + p] + (t[c + p - s] >> 1) & 255;
                            if (4 == h)
                                for (p = s; p < a; p++) t[c + p] = t[u + p] + l(t[c + p - s], 0, 0) & 255
                        } else {
                            if (2 == h)
                                for (p = 0; p < a; p++) t[c + p] = t[u + p] + t[c + p - a] & 255;
                            if (3 == h) {
                                for (p = 0; p < s; p++) t[c + p] = t[u + p] + (t[c + p - a] >> 1) & 255;
                                for (p = s; p < a; p++) t[c + p] = t[u + p] + (t[c + p - a] + t[c + p - s] >> 1) & 255
                            }
                            if (4 == h) {
                                for (p = 0; p < s; p++) t[c + p] = t[u + p] + l(0, t[c + p - a], 0) & 255;
                                for (p = s; p < a; p++) t[c + p] = t[u + p] + l(t[c + p - s], t[c + p - a], t[c + p - s - a]) & 255
                            }
                        }
                    }
                    return t
                }, e.decode._paeth = function(e, t, n) {
                    var i = e + t - n,
                        r = Math.abs(i - e),
                        o = Math.abs(i - t),
                        s = Math.abs(i - n);
                    return r <= o && r <= s ? e : o <= s ? t : n
                }, e.decode._IHDR = function(t, n, i) {
                    var r = e._bin;
                    i.width = r.readUint(t, n), n += 4, i.height = r.readUint(t, n), n += 4, i.depth = t[n], n++, i.ctype = t[n], n++, i.compress = t[n], n++, i.filter = t[n], n++, i.interlace = t[n], n++
                }, e._bin = {
                    nextZero: function(e, t) {
                        for (; 0 != e[t];) t++;
                        return t
                    },
                    readUshort: function(e, t) {
                        return e[t] << 8 | e[t + 1]
                    },
                    writeUshort: function(e, t, n) {
                        e[t] = n >> 8 & 255, e[t + 1] = 255 & n
                    },
                    readUint: function(e, t) {
                        return 16777216 * e[t] + (e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3])
                    },
                    writeUint: function(e, t, n) {
                        e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = 255 & n
                    },
                    readASCII: function(e, t, n) {
                        for (var i = "", r = 0; r < n; r++) i += String.fromCharCode(e[t + r]);
                        return i
                    },
                    writeASCII: function(e, t, n) {
                        for (var i = 0; i < n.length; i++) e[t + i] = n.charCodeAt(i)
                    },
                    readBytes: function(e, t, n) {
                        for (var i = [], r = 0; r < n; r++) i.push(e[t + r]);
                        return i
                    },
                    pad: function(e) {
                        return e.length < 2 ? "0" + e : e
                    },
                    readUTF8: function(t, n, i) {
                        for (var r, o = "", s = 0; s < i; s++) o += "%" + e._bin.pad(t[n + s].toString(16));
                        try {
                            r = decodeURIComponent(o)
                        } catch (r) {
                            return e._bin.readASCII(t, n, i)
                        }
                        return r
                    }
                }, e._copyTile = function(e, t, n, i, r, o, s, a, l) {
                    for (var d = Math.min(t, r), c = Math.min(n, o), u = 0, h = 0, p = 0; p < c; p++)
                        for (var f = 0; f < d; f++)
                            if (s >= 0 && a >= 0 ? (u = p * t + f << 2, h = (a + p) * r + s + f << 2) : (u = (-a + p) * t - s + f << 2, h = p * r + f << 2), 0 == l) i[h] = e[u], i[h + 1] = e[u + 1], i[h + 2] = e[u + 2], i[h + 3] = e[u + 3];
                            else if (1 == l) {
                        var g = e[u + 3] * (1 / 255),
                            m = e[u] * g,
                            v = e[u + 1] * g,
                            w = e[u + 2] * g,
                            y = i[h + 3] * (1 / 255),
                            b = i[h] * y,
                            x = i[h + 1] * y,
                            k = i[h + 2] * y,
                            _ = 1 - g,
                            C = g + y * _,
                            E = 0 == C ? 0 : 1 / C;
                        i[h + 3] = 255 * C, i[h + 0] = (m + b * _) * E, i[h + 1] = (v + x * _) * E, i[h + 2] = (w + k * _) * E
                    } else if (2 == l) g = e[u + 3], m = e[u], v = e[u + 1], w = e[u + 2], y = i[h + 3], b = i[h], x = i[h + 1], k = i[h + 2], g == y && m == b && v == x && w == k ? (i[h] = 0, i[h + 1] = 0, i[h + 2] = 0, i[h + 3] = 0) : (i[h] = m, i[h + 1] = v, i[h + 2] = w, i[h + 3] = g);
                    else if (3 == l) {
                        if (g = e[u + 3], m = e[u], v = e[u + 1], w = e[u + 2], y = i[h + 3], b = i[h], x = i[h + 1], k = i[h + 2], g == y && m == b && v == x && w == k) continue;
                        if (g < 220 && y > 20) return !1
                    }
                    return !0
                }, e.encode = function(t, n, i, r, o, s) {
                    null == r && (r = 0), null == s && (s = !1);
                    for (var a = new Uint8Array(t[0].byteLength * t.length + 100), l = [137, 80, 78, 71, 13, 10, 26, 10], d = 0; d < 8; d++) a[d] = l[d];
                    var c = 8,
                        u = e._bin,
                        h = e.crc.crc,
                        p = u.writeUint,
                        f = u.writeUshort,
                        g = u.writeASCII,
                        m = e.encode.compressPNG(t, n, i, r, s);
                    p(a, c, 13), g(a, c += 4, "IHDR"), p(a, c += 4, n), p(a, c += 4, i), a[c += 4] = m.depth, a[++c] = m.ctype, a[++c] = 0, a[++c] = 0, a[++c] = 0, p(a, ++c, h(a, c - 17, 17)), p(a, c += 4, 1), g(a, c += 4, "sRGB"), a[c += 4] = 1, p(a, ++c, h(a, c - 5, 5)), c += 4;
                    var v = t.length > 1;
                    if (v && (p(a, c, 8), g(a, c += 4, "acTL"), p(a, c += 4, t.length), p(a, c += 4, 0), p(a, c += 4, h(a, c - 12, 12)), c += 4), 3 == m.ctype) {
                        for (p(a, c, 3 * (S = m.plte.length)), g(a, c += 4, "PLTE"), c += 4, d = 0; d < S; d++) {
                            var w = 3 * d,
                                y = m.plte[d],
                                b = 255 & y,
                                x = y >> 8 & 255,
                                k = y >> 16 & 255;
                            a[c + w + 0] = b, a[c + w + 1] = x, a[c + w + 2] = k
                        }
                        if (p(a, c += 3 * S, h(a, c - 3 * S - 4, 3 * S + 4)), c += 4, m.gotAlpha) {
                            for (p(a, c, S), g(a, c += 4, "tRNS"), c += 4, d = 0; d < S; d++) a[c + d] = m.plte[d] >> 24 & 255;
                            p(a, c += S, h(a, c - S - 4, S + 4)), c += 4
                        }
                    }
                    for (var _ = 0, C = 0; C < m.frames.length; C++) {
                        var E = m.frames[C];
                        v && (p(a, c, 26), g(a, c += 4, "fcTL"), p(a, c += 4, _++), p(a, c += 4, E.rect.width), p(a, c += 4, E.rect.height), p(a, c += 4, E.rect.x), p(a, c += 4, E.rect.y), f(a, c += 4, o[C]), f(a, c += 2, 1e3), a[c += 2] = E.dispose, a[++c] = E.blend, p(a, ++c, h(a, c - 30, 30)), c += 4);
                        var S, T = E.cimg;
                        p(a, c, (S = T.length) + (0 == C ? 0 : 4));
                        var P = c += 4;
                        for (g(a, c, 0 == C ? "IDAT" : "fdAT"), c += 4, 0 != C && (p(a, c, _++), c += 4), d = 0; d < S; d++) a[c + d] = T[d];
                        p(a, c += S, h(a, P, c - P)), c += 4
                    }
                    return p(a, c, 0), g(a, c += 4, "IEND"), p(a, c += 4, h(a, c - 4, 4)), c += 4, a.buffer.slice(0, c)
                }, e.encode.compressPNG = function(t, n, i, r, o) {
                    for (var s = e.encode.compress(t, n, i, r, !1, o), a = 0; a < t.length; a++) {
                        var l = s.frames[a];
                        l.rect.width;
                        var d = l.rect.height,
                            c = l.bpl,
                            u = l.bpp,
                            h = new Uint8Array(d * c + d);
                        l.cimg = e.encode._filterZero(l.img, d, u, c, h)
                    }
                    return s
                }, e.encode.compress = function(t, n, i, r, o, s) {
                    null == s && (s = !1);
                    for (var a = 6, l = 8, d = 4, c = 255, u = 0; u < t.length; u++)
                        for (var h = new Uint8Array(t[u]), p = h.length, f = 0; f < p; f += 4) c &= h[f + 3];
                    var g = 255 != c,
                        m = {},
                        v = [];
                    if (0 != t.length && (m[0] = 0, v.push(0), 0 != r && r--), 0 != r) {
                        var w = e.quantize(t, r, o);
                        for (t = w.bufs, f = 0; f < w.plte.length; f++) null == m[b = w.plte[f].est.rgba] && (m[b] = v.length, v.push(b))
                    } else
                        for (u = 0; u < t.length; u++) {
                            var y = new Uint32Array(t[u]);
                            for (p = y.length, f = 0; f < p; f++) {
                                var b = y[f];
                                if ((f < n || b != y[f - 1] && b != y[f - n]) && null == m[b] && (m[b] = v.length, v.push(b), v.length >= 300)) break
                            }
                        }
                    var x = !!g && o,
                        k = v.length;
                    k <= 256 && 0 == s && (l = k <= 2 ? 1 : k <= 4 ? 2 : k <= 16 ? 4 : 8, o && (l = 8), g = !0);
                    var _ = [];
                    for (u = 0; u < t.length; u++) {
                        var C = new Uint8Array(t[u]),
                            E = new Uint32Array(C.buffer),
                            S = 0,
                            T = 0,
                            P = n,
                            A = i,
                            I = 0;
                        if (0 != u && !x) {
                            for (var L = o || 1 == u || 2 == _[_.length - 2].dispose ? 1 : 2, z = 0, M = 1e9, B = 0; B < L; B++) {
                                for (var R = new Uint8Array(t[u - 1 - B]), O = new Uint32Array(t[u - 1 - B]), N = n, U = i, D = -1, V = -1, W = 0; W < i; W++)
                                    for (var $ = 0; $ < n; $++) E[f = W * n + $] != O[f] && ($ < N && (N = $), $ > D && (D = $), W < U && (U = W), W > V && (V = W));
                                var F = -1 == D ? 1 : (D - N + 1) * (V - U + 1);
                                F < M && (M = F, z = B, -1 == D ? (S = T = 0, P = A = 1) : (S = N, T = U, P = D - N + 1, A = V - U + 1))
                            }
                            R = new Uint8Array(t[u - 1 - z]), 1 == z && (_[_.length - 1].dispose = 2);
                            var j = new Uint8Array(P * A * 4);
                            new Uint32Array(j.buffer), e._copyTile(R, n, i, j, P, A, -S, -T, 0), e._copyTile(C, n, i, j, P, A, -S, -T, 3) ? (e._copyTile(C, n, i, j, P, A, -S, -T, 2), I = 1) : (e._copyTile(C, n, i, j, P, A, -S, -T, 0), I = 0), C = j, E = new Uint32Array(C.buffer)
                        }
                        var H = 4 * P;
                        if (k <= 256 && 0 == s) {
                            for (H = Math.ceil(l * P / 8), j = new Uint8Array(H * A), W = 0; W < A; W++) {
                                f = W * H;
                                var q = W * P;
                                if (8 == l)
                                    for ($ = 0; $ < P; $++) j[f + $] = m[E[q + $]];
                                else if (4 == l)
                                    for ($ = 0; $ < P; $++) j[f + ($ >> 1)] |= m[E[q + $]] << 4 - 4 * (1 & $);
                                else if (2 == l)
                                    for ($ = 0; $ < P; $++) j[f + ($ >> 2)] |= m[E[q + $]] << 6 - 2 * (3 & $);
                                else if (1 == l)
                                    for ($ = 0; $ < P; $++) j[f + ($ >> 3)] |= m[E[q + $]] << 7 - 1 * (7 & $)
                            }
                            C = j, a = 3, d = 1
                        } else if (0 == g && 1 == t.length) {
                            j = new Uint8Array(P * A * 3);
                            var X = P * A;
                            for (f = 0; f < X; f++) {
                                var Y = 3 * f,
                                    K = 4 * f;
                                j[Y] = C[K], j[Y + 1] = C[K + 1], j[Y + 2] = C[K + 2]
                            }
                            C = j, a = 2, d = 3, H = 3 * P
                        }
                        _.push({
                            rect: {
                                x: S,
                                y: T,
                                width: P,
                                height: A
                            },
                            img: C,
                            bpl: H,
                            bpp: d,
                            blend: I,
                            dispose: x ? 1 : 0
                        })
                    }
                    return {
                        ctype: a,
                        depth: l,
                        plte: v,
                        gotAlpha: g,
                        frames: _
                    }
                }, e.encode._filterZero = function(n, i, r, o, s) {
                    for (var a = [], l = 0; l < 5; l++)
                        if (!(i * o > 5e5) || 2 != l && 3 != l && 4 != l) {
                            for (var d = 0; d < i; d++) e.encode._filterLine(s, n, d, o, r, l);
                            if (a.push(t.deflate(s)), 1 == r) break
                        } for (var c, u = 1e9, h = 0; h < a.length; h++) a[h].length < u && (c = h, u = a[h].length);
                    return a[c]
                }, e.encode._filterLine = function(t, n, i, r, o, s) {
                    var a = i * r,
                        l = a + i,
                        d = e.decode._paeth;
                    if (t[l] = s, l++, 0 == s)
                        for (var c = 0; c < r; c++) t[l + c] = n[a + c];
                    else if (1 == s) {
                        for (c = 0; c < o; c++) t[l + c] = n[a + c];
                        for (c = o; c < r; c++) t[l + c] = n[a + c] - n[a + c - o] + 256 & 255
                    } else if (0 == i) {
                        for (c = 0; c < o; c++) t[l + c] = n[a + c];
                        if (2 == s)
                            for (c = o; c < r; c++) t[l + c] = n[a + c];
                        if (3 == s)
                            for (c = o; c < r; c++) t[l + c] = n[a + c] - (n[a + c - o] >> 1) + 256 & 255;
                        if (4 == s)
                            for (c = o; c < r; c++) t[l + c] = n[a + c] - d(n[a + c - o], 0, 0) + 256 & 255
                    } else {
                        if (2 == s)
                            for (c = 0; c < r; c++) t[l + c] = n[a + c] + 256 - n[a + c - r] & 255;
                        if (3 == s) {
                            for (c = 0; c < o; c++) t[l + c] = n[a + c] + 256 - (n[a + c - r] >> 1) & 255;
                            for (c = o; c < r; c++) t[l + c] = n[a + c] + 256 - (n[a + c - r] + n[a + c - o] >> 1) & 255
                        }
                        if (4 == s) {
                            for (c = 0; c < o; c++) t[l + c] = n[a + c] + 256 - d(0, n[a + c - r], 0) & 255;
                            for (c = o; c < r; c++) t[l + c] = n[a + c] + 256 - d(n[a + c - o], n[a + c - r], n[a + c - o - r]) & 255
                        }
                    }
                }, e.crc = {
                    table: function() {
                        for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
                            for (var n = t, i = 0; i < 8; i++) 1 & n ? n = 3988292384 ^ n >>> 1 : n >>>= 1;
                            e[t] = n
                        }
                        return e
                    }(),
                    update: function(t, n, i, r) {
                        for (var o = 0; o < r; o++) t = e.crc.table[255 & (t ^ n[i + o])] ^ t >>> 8;
                        return t
                    },
                    crc: function(t, n, i) {
                        return 4294967295 ^ e.crc.update(4294967295, t, n, i)
                    }
                }, e.quantize = function(t, n, i) {
                    for (var r = [], o = 0, s = 0; s < t.length; s++) r.push(e.encode.alphaMul(new Uint8Array(t[s]), i)), o += t[s].byteLength;
                    var a = new Uint8Array(o),
                        l = new Uint32Array(a.buffer),
                        d = 0;
                    for (s = 0; s < r.length; s++) {
                        for (var c = r[s], u = c.length, h = 0; h < u; h++) a[d + h] = c[h];
                        d += u
                    }
                    var p = {
                        i0: 0,
                        i1: a.length,
                        bst: null,
                        est: null,
                        tdst: 0,
                        left: null,
                        right: null
                    };
                    p.bst = e.quantize.stats(a, p.i0, p.i1), p.est = e.quantize.estats(p.bst);
                    for (var f = [p]; f.length < n;) {
                        var g = 0,
                            m = 0;
                        for (s = 0; s < f.length; s++) f[s].est.L > g && (g = f[s].est.L, m = s);
                        if (g < .001) break;
                        var v = f[m],
                            w = e.quantize.splitPixels(a, l, v.i0, v.i1, v.est.e, v.est.eMq255),
                            y = {
                                i0: v.i0,
                                i1: w,
                                bst: null,
                                est: null,
                                tdst: 0,
                                left: null,
                                right: null
                            };
                        y.bst = e.quantize.stats(a, y.i0, y.i1), y.est = e.quantize.estats(y.bst);
                        var b = {
                            i0: w,
                            i1: v.i1,
                            bst: null,
                            est: null,
                            tdst: 0,
                            left: null,
                            right: null
                        };
                        for (b.bst = {
                                R: [],
                                m: [],
                                N: v.bst.N - y.bst.N
                            }, s = 0; s < 16; s++) b.bst.R[s] = v.bst.R[s] - y.bst.R[s];
                        for (s = 0; s < 4; s++) b.bst.m[s] = v.bst.m[s] - y.bst.m[s];
                        b.est = e.quantize.estats(b.bst), v.left = y, v.right = b, f[m] = y, f.push(b)
                    }
                    f.sort((function(e, t) {
                        return t.bst.N - e.bst.N
                    }));
                    for (var x = 0; x < r.length; x++) {
                        var k = e.quantize.planeDst,
                            _ = new Uint8Array(r[x].buffer),
                            C = new Uint32Array(r[x].buffer),
                            E = _.length;
                        for (s = 0; s < E; s += 4) {
                            for (var S = _[s] * (1 / 255), T = _[s + 1] * (1 / 255), P = _[s + 2] * (1 / 255), A = _[s + 3] * (1 / 255), I = p; I.left;) I = k(I.est, S, T, P, A) <= 0 ? I.left : I.right;
                            C[s >> 2] = I.est.rgba
                        }
                        r[x] = C.buffer
                    }
                    return {
                        bufs: r,
                        plte: f
                    }
                }, e.quantize.getNearest = function(t, n, i, r, o) {
                    if (null == t.left) return t.tdst = e.quantize.dist(t.est.q, n, i, r, o), t;
                    var s = e.quantize.planeDst(t.est, n, i, r, o),
                        a = t.left,
                        l = t.right;
                    s > 0 && (a = t.right, l = t.left);
                    var d = e.quantize.getNearest(a, n, i, r, o);
                    if (d.tdst <= s * s) return d;
                    var c = e.quantize.getNearest(l, n, i, r, o);
                    return c.tdst < d.tdst ? c : d
                }, e.quantize.planeDst = function(e, t, n, i, r) {
                    var o = e.e;
                    return o[0] * t + o[1] * n + o[2] * i + o[3] * r - e.eMq
                }, e.quantize.dist = function(e, t, n, i, r) {
                    var o = t - e[0],
                        s = n - e[1],
                        a = i - e[2],
                        l = r - e[3];
                    return o * o + s * s + a * a + l * l
                }, e.quantize.splitPixels = function(t, n, i, r, o, s) {
                    var a = e.quantize.vecDot;
                    for (r -= 4; i < r;) {
                        for (; a(t, i, o) <= s;) i += 4;
                        for (; a(t, r, o) > s;) r -= 4;
                        if (i >= r) break;
                        var l = n[i >> 2];
                        n[i >> 2] = n[r >> 2], n[r >> 2] = l, i += 4, r -= 4
                    }
                    for (; a(t, i, o) > s;) i -= 4;
                    return i + 4
                }, e.quantize.vecDot = function(e, t, n) {
                    return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3]
                }, e.quantize.stats = function(e, t, n) {
                    for (var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = [0, 0, 0, 0], o = n - t >> 2, s = t; s < n; s += 4) {
                        var a = e[s] * (1 / 255),
                            l = e[s + 1] * (1 / 255),
                            d = e[s + 2] * (1 / 255),
                            c = e[s + 3] * (1 / 255);
                        r[0] += a, r[1] += l, r[2] += d, r[3] += c, i[0] += a * a, i[1] += a * l, i[2] += a * d, i[3] += a * c, i[5] += l * l, i[6] += l * d, i[7] += l * c, i[10] += d * d, i[11] += d * c, i[15] += c * c
                    }
                    return i[4] = i[1], i[8] = i[2], i[12] = i[3], i[9] = i[6], i[13] = i[7], i[14] = i[11], {
                        R: i,
                        m: r,
                        N: o
                    }
                }, e.quantize.estats = function(t) {
                    var n = t.R,
                        i = t.m,
                        r = t.N,
                        o = i[0],
                        s = i[1],
                        a = i[2],
                        l = i[3],
                        d = 0 == r ? 0 : 1 / r,
                        c = [n[0] - o * o * d, n[1] - o * s * d, n[2] - o * a * d, n[3] - o * l * d, n[4] - s * o * d, n[5] - s * s * d, n[6] - s * a * d, n[7] - s * l * d, n[8] - a * o * d, n[9] - a * s * d, n[10] - a * a * d, n[11] - a * l * d, n[12] - l * o * d, n[13] - l * s * d, n[14] - l * a * d, n[15] - l * l * d],
                        u = c,
                        h = e.M4,
                        p = [.5, .5, .5, .5],
                        f = 0,
                        g = 0;
                    if (0 != r)
                        for (var m = 0; m < 10 && (p = h.multVec(u, p), g = Math.sqrt(h.dot(p, p)), p = h.sml(1 / g, p), !(Math.abs(g - f) < 1e-9)); m++) f = g;
                    var v = [o * d, s * d, a * d, l * d],
                        w = h.dot(h.sml(255, v), p),
                        y = v[3] < .001 ? 0 : 1 / v[3];
                    return {
                        Cov: c,
                        q: v,
                        e: p,
                        L: f,
                        eMq255: w,
                        eMq: h.dot(p, v),
                        rgba: (Math.round(255 * v[3]) << 24 | Math.round(255 * v[2] * y) << 16 | Math.round(255 * v[1] * y) << 8 | Math.round(255 * v[0] * y) << 0) >>> 0
                    }
                }, e.M4 = {
                    multVec: function(e, t) {
                        return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3], e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3], e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3], e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3]]
                    },
                    dot: function(e, t) {
                        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
                    },
                    sml: function(e, t) {
                        return [e * t[0], e * t[1], e * t[2], e * t[3]]
                    }
                }, e.encode.alphaMul = function(e, t) {
                    for (var n = new Uint8Array(e.length), i = e.length >> 2, r = 0; r < i; r++) {
                        var o = r << 2,
                            s = e[o + 3];
                        t && (s = s < 128 ? 0 : 255);
                        var a = s * (1 / 255);
                        n[o + 0] = e[o + 0] * a, n[o + 1] = e[o + 1] * a, n[o + 2] = e[o + 2] * a, n[o + 3] = s
                    }
                    return n
                }
            }(e, rr())
    }();
var or = fi.exports,
    sr = {
        exports: {}
    };
! function(e) {
    function t(e) {
        var t, n, i, r, o, s = Math.floor,
            a = new Array(64),
            l = new Array(64),
            d = new Array(64),
            c = new Array(64),
            u = new Array(65535),
            h = new Array(65535),
            p = new Array(64),
            f = new Array(64),
            g = [],
            m = 0,
            v = 7,
            w = new Array(64),
            y = new Array(64),
            b = new Array(64),
            x = new Array(256),
            k = new Array(2048),
            _ = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
            C = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            E = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            S = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
            T = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
            P = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            I = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
            L = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

        function z(e, t) {
            for (var n = 0, i = 0, r = new Array, o = 1; o <= 16; o++) {
                for (var s = 1; s <= e[o]; s++) r[t[i]] = [], r[t[i]][0] = n, r[t[i]][1] = o, i++, n++;
                n *= 2
            }
            return r
        }

        function M(e) {
            for (var t = e[0], n = e[1] - 1; n >= 0;) t & 1 << n && (m |= 1 << v), n--, --v < 0 && (255 == m ? (B(255), B(0)) : B(m), v = 7, m = 0)
        }

        function B(e) {
            g.push(e)
        }

        function R(e) {
            B(e >> 8 & 255), B(255 & e)
        }

        function O(e, t, n, i, r) {
            for (var o, s = r[0], a = r[240], l = function(e, t) {
                    var n, i, r, o, s, a, l, d, c, u, h = 0;
                    for (c = 0; c < 8; ++c) {
                        n = e[h], i = e[h + 1], r = e[h + 2], o = e[h + 3], s = e[h + 4], a = e[h + 5], l = e[h + 6];
                        var f = n + (d = e[h + 7]),
                            g = n - d,
                            m = i + l,
                            v = i - l,
                            w = r + a,
                            y = r - a,
                            b = o + s,
                            x = o - s,
                            k = f + b,
                            _ = f - b,
                            C = m + w,
                            E = m - w;
                        e[h] = k + C, e[h + 4] = k - C;
                        var S = .707106781 * (E + _);
                        e[h + 2] = _ + S, e[h + 6] = _ - S;
                        var T = .382683433 * ((k = x + y) - (E = v + g)),
                            P = .5411961 * k + T,
                            A = 1.306562965 * E + T,
                            I = .707106781 * (C = y + v),
                            L = g + I,
                            z = g - I;
                        e[h + 5] = z + P, e[h + 3] = z - P, e[h + 1] = L + A, e[h + 7] = L - A, h += 8
                    }
                    for (h = 0, c = 0; c < 8; ++c) {
                        n = e[h], i = e[h + 8], r = e[h + 16], o = e[h + 24], s = e[h + 32], a = e[h + 40], l = e[h + 48];
                        var M = n + (d = e[h + 56]),
                            B = n - d,
                            R = i + l,
                            O = i - l,
                            N = r + a,
                            U = r - a,
                            D = o + s,
                            V = o - s,
                            W = M + D,
                            $ = M - D,
                            F = R + N,
                            j = R - N;
                        e[h] = W + F, e[h + 32] = W - F;
                        var H = .707106781 * (j + $);
                        e[h + 16] = $ + H, e[h + 48] = $ - H;
                        var q = .382683433 * ((W = V + U) - (j = O + B)),
                            X = .5411961 * W + q,
                            Y = 1.306562965 * j + q,
                            K = .707106781 * (F = U + O),
                            G = B + K,
                            Z = B - K;
                        e[h + 40] = Z + X, e[h + 24] = Z - X, e[h + 8] = G + Y, e[h + 56] = G - Y, h++
                    }
                    for (c = 0; c < 64; ++c) u = e[c] * t[c], p[c] = u > 0 ? u + .5 | 0 : u - .5 | 0;
                    return p
                }(e, t), d = 0; d < 64; ++d) f[_[d]] = l[d];
            var c = f[0] - n;
            n = f[0], 0 == c ? M(i[0]) : (M(i[h[o = 32767 + c]]), M(u[o]));
            for (var g = 63; g > 0 && 0 == f[g]; g--);
            if (0 == g) return M(s), n;
            for (var m, v = 1; v <= g;) {
                for (var w = v; 0 == f[v] && v <= g; ++v);
                var y = v - w;
                if (y >= 16) {
                    m = y >> 4;
                    for (var b = 1; b <= m; ++b) M(a);
                    y &= 15
                }
                o = 32767 + f[v], M(r[(y << 4) + h[o]]), M(u[o]), v++
            }
            return 63 != g && M(s), n
        }

        function N(e) {
            if (e <= 0 && (e = 1), e > 100 && (e = 100), o != e) {
                (function(e) {
                    for (var t = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
                        var i = s((t[n] * e + 50) / 100);
                        i < 1 ? i = 1 : i > 255 && (i = 255), a[_[n]] = i
                    }
                    for (var r = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o = 0; o < 64; o++) {
                        var u = s((r[o] * e + 50) / 100);
                        u < 1 ? u = 1 : u > 255 && (u = 255), l[_[o]] = u
                    }
                    for (var h = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], p = 0, f = 0; f < 8; f++)
                        for (var g = 0; g < 8; g++) d[p] = 1 / (a[_[p]] * h[f] * h[g] * 8), c[p] = 1 / (l[_[p]] * h[f] * h[g] * 8), p++
                })(e < 50 ? Math.floor(5e3 / e) : Math.floor(200 - 2 * e)), o = e
            }
        }
        this.encode = function(e, o) {
                var s;
                (new Date).getTime(), o && N(o), g = new Array, m = 0, v = 7, R(65496), R(65504), R(16), B(74), B(70), B(73), B(70), B(0), B(1), B(1), B(0), R(1), R(1), B(0), B(0), void 0 !== (s = e.comments) && s.constructor === Array && s.forEach((e => {
                        if ("string" == typeof e) {
                            R(65534);
                            var t, n = e.length;
                            for (R(n + 2), t = 0; t < n; t++) B(e.charCodeAt(t))
                        }
                    })),
                    function(e) {
                        if (e) {
                            R(65505), 69 === e[0] && 120 === e[1] && 105 === e[2] && 102 === e[3] ? R(e.length + 2) : (R(e.length + 5 + 2), B(69), B(120), B(105), B(102), B(0));
                            for (var t = 0; t < e.length; t++) B(e[t])
                        }
                    }(e.exifBuffer),
                    function() {
                        R(65499), R(132), B(0);
                        for (var e = 0; e < 64; e++) B(a[e]);
                        B(1);
                        for (var t = 0; t < 64; t++) B(l[t])
                    }(),
                    function(e, t) {
                        R(65472), R(17), B(8), R(t), R(e), B(3), B(1), B(17), B(0), B(2), B(17), B(1), B(3), B(17), B(1)
                    }(e.width, e.height),
                    function() {
                        R(65476), R(418), B(0);
                        for (var e = 0; e < 16; e++) B(C[e + 1]);
                        for (var t = 0; t <= 11; t++) B(E[t]);
                        B(16);
                        for (var n = 0; n < 16; n++) B(S[n + 1]);
                        for (var i = 0; i <= 161; i++) B(T[i]);
                        B(1);
                        for (var r = 0; r < 16; r++) B(P[r + 1]);
                        for (var o = 0; o <= 11; o++) B(A[o]);
                        B(17);
                        for (var s = 0; s < 16; s++) B(I[s + 1]);
                        for (var a = 0; a <= 161; a++) B(L[a])
                    }(), R(65498), R(12), B(3), B(1), B(0), B(2), B(17), B(3), B(17), B(0), B(63), B(0);
                var u = 0,
                    h = 0,
                    p = 0;
                m = 0, v = 7, this.encode.displayName = "_encode_";
                for (var f, x, _, z, U, D, V, W, $, F = e.data, j = e.width, H = e.height, q = 4 * j, X = 0; X < H;) {
                    for (f = 0; f < q;) {
                        for (D = U = q * X + f, V = -1, W = 0, $ = 0; $ < 64; $++) D = U + (W = $ >> 3) * q + (V = 4 * (7 & $)), X + W >= H && (D -= q * (X + 1 + W - H)), f + V >= q && (D -= f + V - q + 4), x = F[D++], _ = F[D++], z = F[D++], w[$] = (k[x] + k[_ + 256 >> 0] + k[z + 512 >> 0] >> 16) - 128, y[$] = (k[x + 768 >> 0] + k[_ + 1024 >> 0] + k[z + 1280 >> 0] >> 16) - 128, b[$] = (k[x + 1280 >> 0] + k[_ + 1536 >> 0] + k[z + 1792 >> 0] >> 16) - 128;
                        u = O(w, d, u, t, i), h = O(y, c, h, n, r), p = O(b, c, p, n, r), f += 32
                    }
                    X += 8
                }
                if (v >= 0) {
                    var Y = [];
                    Y[1] = v + 1, Y[0] = (1 << v + 1) - 1, M(Y)
                }
                return R(65497), Buffer.from(g)
            }, (new Date).getTime(), e || (e = 50),
            function() {
                for (var e = String.fromCharCode, t = 0; t < 256; t++) x[t] = e(t)
            }(), t = z(C, E), n = z(P, A), i = z(S, T), r = z(I, L),
            function() {
                for (var e = 1, t = 2, n = 1; n <= 15; n++) {
                    for (var i = e; i < t; i++) h[32767 + i] = n, u[32767 + i] = [], u[32767 + i][1] = n, u[32767 + i][0] = i;
                    for (var r = -(t - 1); r <= -e; r++) h[32767 + r] = n, u[32767 + r] = [], u[32767 + r][1] = n, u[32767 + r][0] = t - 1 + r;
                    e <<= 1, t <<= 1
                }
            }(),
            function() {
                for (var e = 0; e < 256; e++) k[e] = 19595 * e, k[e + 256 >> 0] = 38470 * e, k[e + 512 >> 0] = 7471 * e + 32768, k[e + 768 >> 0] = -11059 * e, k[e + 1024 >> 0] = -21709 * e, k[e + 1280 >> 0] = 32768 * e + 8421375, k[e + 1536 >> 0] = -27439 * e, k[e + 1792 >> 0] = -5329 * e
            }(), N(e), (new Date).getTime()
    }
    sr.exports = function(e, n) {
        void 0 === n && (n = 50);
        return {
            data: new t(n).encode(e, n),
            width: e.width,
            height: e.height
        }
    }
}();
var ar = {
    exports: {}
};
! function(e) {
    var t = function() {
        var e = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]),
            t = 4017,
            n = 799,
            i = 3406,
            r = 2276,
            o = 1567,
            s = 3784,
            a = 5793,
            l = 2896;

        function d() {}

        function c(e, t) {
            for (var n, i, r = 0, o = [], s = 16; s > 0 && !e[s - 1];) s--;
            o.push({
                children: [],
                index: 0
            });
            var a, l = o[0];
            for (n = 0; n < s; n++) {
                for (i = 0; i < e[n]; i++) {
                    for ((l = o.pop()).children[l.index] = t[r]; l.index > 0;) {
                        if (0 === o.length) throw new Error("Could not recreate Huffman Table");
                        l = o.pop()
                    }
                    for (l.index++, o.push(l); o.length <= n;) o.push(a = {
                        children: [],
                        index: 0
                    }), l.children[l.index] = a.children, l = a;
                    r++
                }
                n + 1 < s && (o.push(a = {
                    children: [],
                    index: 0
                }), l.children[l.index] = a.children, l = a)
            }
            return o[0].children
        }

        function u(t, n, i, r, o, s, a, l, d, c) {
            i.precision, i.samplesPerLine, i.scanLines;
            var u = i.mcusPerLine,
                h = i.progressive;
            i.maxH, i.maxV;
            var p = n,
                f = 0,
                g = 0;

            function m() {
                if (g > 0) return g--, f >> g & 1;
                if (255 == (f = t[n++])) {
                    var e = t[n++];
                    if (e) throw new Error("unexpected marker: " + (f << 8 | e).toString(16))
                }
                return g = 7, f >>> 7
            }

            function v(e) {
                for (var t, n = e; null !== (t = m());) {
                    if ("number" == typeof(n = n[t])) return n;
                    if ("object" != typeof n) throw new Error("invalid huffman sequence")
                }
                return null
            }

            function w(e) {
                for (var t = 0; e > 0;) {
                    var n = m();
                    if (null === n) return;
                    t = t << 1 | n, e--
                }
                return t
            }

            function y(e) {
                var t = w(e);
                return t >= 1 << e - 1 ? t : t + (-1 << e) + 1
            }
            var b = 0;
            var x, k = 0;

            function _(e, t, n, i, r) {
                var o = n % u,
                    s = (n / u | 0) * e.v + i,
                    a = o * e.h + r;
                void 0 === e.blocks[s] && c.tolerantDecoding || t(e, e.blocks[s][a])
            }

            function C(e, t, n) {
                var i = n / e.blocksPerLine | 0,
                    r = n % e.blocksPerLine;
                void 0 === e.blocks[i] && c.tolerantDecoding || t(e, e.blocks[i][r])
            }
            var E, S, T, P, A, I, L = r.length;
            I = h ? 0 === s ? 0 === l ? function(e, t) {
                var n = v(e.huffmanTableDC),
                    i = 0 === n ? 0 : y(n) << d;
                t[0] = e.pred += i
            } : function(e, t) {
                t[0] |= m() << d
            } : 0 === l ? function(t, n) {
                if (b > 0) b--;
                else
                    for (var i = s, r = a; i <= r;) {
                        var o = v(t.huffmanTableAC),
                            l = 15 & o,
                            c = o >> 4;
                        if (0 !== l) n[e[i += c]] = y(l) * (1 << d), i++;
                        else {
                            if (c < 15) {
                                b = w(c) + (1 << c) - 1;
                                break
                            }
                            i += 16
                        }
                    }
            } : function(t, n) {
                for (var i = s, r = a, o = 0; i <= r;) {
                    var l = e[i],
                        c = n[l] < 0 ? -1 : 1;
                    switch (k) {
                        case 0:
                            var u = v(t.huffmanTableAC),
                                h = 15 & u;
                            if (o = u >> 4, 0 === h) o < 15 ? (b = w(o) + (1 << o), k = 4) : (o = 16, k = 1);
                            else {
                                if (1 !== h) throw new Error("invalid ACn encoding");
                                x = y(h), k = o ? 2 : 3
                            }
                            continue;
                        case 1:
                        case 2:
                            n[l] ? n[l] += (m() << d) * c : 0 == --o && (k = 2 == k ? 3 : 0);
                            break;
                        case 3:
                            n[l] ? n[l] += (m() << d) * c : (n[l] = x << d, k = 0);
                            break;
                        case 4:
                            n[l] && (n[l] += (m() << d) * c)
                    }
                    i++
                }
                4 === k && 0 == --b && (k = 0)
            } : function(t, n) {
                var i = v(t.huffmanTableDC),
                    r = 0 === i ? 0 : y(i);
                n[0] = t.pred += r;
                for (var o = 1; o < 64;) {
                    var s = v(t.huffmanTableAC),
                        a = 15 & s,
                        l = s >> 4;
                    if (0 !== a) n[e[o += l]] = y(a), o++;
                    else {
                        if (l < 15) break;
                        o += 16
                    }
                }
            };
            var z, M, B, R, O = 0;
            for (M = 1 == L ? r[0].blocksPerLine * r[0].blocksPerColumn : u * i.mcusPerColumn, o || (o = M); O < M;) {
                for (S = 0; S < L; S++) r[S].pred = 0;
                if (b = 0, 1 == L)
                    for (E = r[0], A = 0; A < o; A++) C(E, I, O), O++;
                else
                    for (A = 0; A < o; A++) {
                        for (S = 0; S < L; S++)
                            for (B = (E = r[S]).h, R = E.v, T = 0; T < R; T++)
                                for (P = 0; P < B; P++) _(E, I, O, T, P);
                        if (++O === M) break
                    }
                if (O === M)
                    do {
                        if (255 === t[n] && 0 !== t[n + 1]) break;
                        n += 1
                    } while (n < t.length - 2);
                if (g = 0, (z = t[n] << 8 | t[n + 1]) < 65280) throw new Error("marker was not found");
                if (!(z >= 65488 && z <= 65495)) break;
                n += 2
            }
            return n - p
        }

        function h(e, d) {
            var c, u, h = [],
                p = d.blocksPerLine,
                f = d.blocksPerColumn,
                g = p << 3,
                v = new Int32Array(64),
                w = new Uint8Array(64);

            function y(e, c, u) {
                var h, p, f, g, m, v, w, y, b, x, k = d.quantizationTable,
                    _ = u;
                for (x = 0; x < 64; x++) _[x] = e[x] * k[x];
                for (x = 0; x < 8; ++x) {
                    var C = 8 * x;
                    0 != _[1 + C] || 0 != _[2 + C] || 0 != _[3 + C] || 0 != _[4 + C] || 0 != _[5 + C] || 0 != _[6 + C] || 0 != _[7 + C] ? (h = a * _[0 + C] + 128 >> 8, p = a * _[4 + C] + 128 >> 8, f = _[2 + C], g = _[6 + C], m = l * (_[1 + C] - _[7 + C]) + 128 >> 8, y = l * (_[1 + C] + _[7 + C]) + 128 >> 8, v = _[3 + C] << 4, w = _[5 + C] << 4, b = h - p + 1 >> 1, h = h + p + 1 >> 1, p = b, b = f * s + g * o + 128 >> 8, f = f * o - g * s + 128 >> 8, g = b, b = m - w + 1 >> 1, m = m + w + 1 >> 1, w = b, b = y + v + 1 >> 1, v = y - v + 1 >> 1, y = b, b = h - g + 1 >> 1, h = h + g + 1 >> 1, g = b, b = p - f + 1 >> 1, p = p + f + 1 >> 1, f = b, b = m * r + y * i + 2048 >> 12, m = m * i - y * r + 2048 >> 12, y = b, b = v * n + w * t + 2048 >> 12, v = v * t - w * n + 2048 >> 12, w = b, _[0 + C] = h + y, _[7 + C] = h - y, _[1 + C] = p + w, _[6 + C] = p - w, _[2 + C] = f + v, _[5 + C] = f - v, _[3 + C] = g + m, _[4 + C] = g - m) : (b = a * _[0 + C] + 512 >> 10, _[0 + C] = b, _[1 + C] = b, _[2 + C] = b, _[3 + C] = b, _[4 + C] = b, _[5 + C] = b, _[6 + C] = b, _[7 + C] = b)
                }
                for (x = 0; x < 8; ++x) {
                    var E = x;
                    0 != _[8 + E] || 0 != _[16 + E] || 0 != _[24 + E] || 0 != _[32 + E] || 0 != _[40 + E] || 0 != _[48 + E] || 0 != _[56 + E] ? (h = a * _[0 + E] + 2048 >> 12, p = a * _[32 + E] + 2048 >> 12, f = _[16 + E], g = _[48 + E], m = l * (_[8 + E] - _[56 + E]) + 2048 >> 12, y = l * (_[8 + E] + _[56 + E]) + 2048 >> 12, v = _[24 + E], w = _[40 + E], b = h - p + 1 >> 1, h = h + p + 1 >> 1, p = b, b = f * s + g * o + 2048 >> 12, f = f * o - g * s + 2048 >> 12, g = b, b = m - w + 1 >> 1, m = m + w + 1 >> 1, w = b, b = y + v + 1 >> 1, v = y - v + 1 >> 1, y = b, b = h - g + 1 >> 1, h = h + g + 1 >> 1, g = b, b = p - f + 1 >> 1, p = p + f + 1 >> 1, f = b, b = m * r + y * i + 2048 >> 12, m = m * i - y * r + 2048 >> 12, y = b, b = v * n + w * t + 2048 >> 12, v = v * t - w * n + 2048 >> 12, w = b, _[0 + E] = h + y, _[56 + E] = h - y, _[8 + E] = p + w, _[48 + E] = p - w, _[16 + E] = f + v, _[40 + E] = f - v, _[24 + E] = g + m, _[32 + E] = g - m) : (b = a * u[x + 0] + 8192 >> 14, _[0 + E] = b, _[8 + E] = b, _[16 + E] = b, _[24 + E] = b, _[32 + E] = b, _[40 + E] = b, _[48 + E] = b, _[56 + E] = b)
                }
                for (x = 0; x < 64; ++x) {
                    var S = 128 + (_[x] + 8 >> 4);
                    c[x] = S < 0 ? 0 : S > 255 ? 255 : S
                }
            }
            m(g * f * 8);
            for (var b = 0; b < f; b++) {
                var x = b << 3;
                for (c = 0; c < 8; c++) h.push(new Uint8Array(g));
                for (var k = 0; k < p; k++) {
                    y(d.blocks[b][k], w, v);
                    var _ = 0,
                        C = k << 3;
                    for (u = 0; u < 8; u++) {
                        var E = h[x + u];
                        for (c = 0; c < 8; c++) E[C + c] = w[_++]
                    }
                }
            }
            return h
        }

        function p(e) {
            return e < 0 ? 0 : e > 255 ? 255 : e
        }
        d.prototype = {
            load: function(e) {
                var t = new XMLHttpRequest;
                t.open("GET", e, !0), t.responseType = "arraybuffer", t.onload = function() {
                    var e = new Uint8Array(t.response || t.mozResponseArrayBuffer);
                    this.parse(e), this.onload && this.onload()
                }.bind(this), t.send(null)
            },
            parse: function(t) {
                var n = 1e3 * this.opts.maxResolutionInMP * 1e3,
                    i = 0;

                function r() {
                    var e = t[i] << 8 | t[i + 1];
                    return i += 2, e
                }

                function o(e) {
                    var t, n, i = 1,
                        r = 1;
                    for (n in e.components) e.components.hasOwnProperty(n) && (i < (t = e.components[n]).h && (i = t.h), r < t.v && (r = t.v));
                    var o = Math.ceil(e.samplesPerLine / 8 / i),
                        s = Math.ceil(e.scanLines / 8 / r);
                    for (n in e.components)
                        if (e.components.hasOwnProperty(n)) {
                            t = e.components[n];
                            var a = Math.ceil(Math.ceil(e.samplesPerLine / 8) * t.h / i),
                                l = Math.ceil(Math.ceil(e.scanLines / 8) * t.v / r),
                                d = o * t.h,
                                c = s * t.v,
                                u = [];
                            m(256 * (c * d));
                            for (var h = 0; h < c; h++) {
                                for (var p = [], f = 0; f < d; f++) p.push(new Int32Array(64));
                                u.push(p)
                            }
                            t.blocksPerLine = a, t.blocksPerColumn = l, t.blocks = u
                        } e.maxH = i, e.maxV = r, e.mcusPerLine = o, e.mcusPerColumn = s
                }
                t.length;
                var s, a, l, d, p = null,
                    f = null,
                    g = [],
                    v = [],
                    w = [],
                    y = [],
                    b = r(),
                    x = -1;
                if (this.comments = [], 65496 != b) throw new Error("SOI not found");
                for (b = r(); 65497 != b;) {
                    switch (b) {
                        case 65280:
                            break;
                        case 65504:
                        case 65505:
                        case 65506:
                        case 65507:
                        case 65508:
                        case 65509:
                        case 65510:
                        case 65511:
                        case 65512:
                        case 65513:
                        case 65514:
                        case 65515:
                        case 65516:
                        case 65517:
                        case 65518:
                        case 65519:
                        case 65534:
                            var k = (l = void 0, d = void 0, l = r(), d = t.subarray(i, i + l - 2), i += d.length, d);
                            if (65534 === b) {
                                var _ = String.fromCharCode.apply(null, k);
                                this.comments.push(_)
                            }
                            65504 === b && 74 === k[0] && 70 === k[1] && 73 === k[2] && 70 === k[3] && 0 === k[4] && (p = {
                                version: {
                                    major: k[5],
                                    minor: k[6]
                                },
                                densityUnits: k[7],
                                xDensity: k[8] << 8 | k[9],
                                yDensity: k[10] << 8 | k[11],
                                thumbWidth: k[12],
                                thumbHeight: k[13],
                                thumbData: k.subarray(14, 14 + 3 * k[12] * k[13])
                            }), 65505 === b && 69 === k[0] && 120 === k[1] && 105 === k[2] && 102 === k[3] && 0 === k[4] && (this.exifBuffer = k.subarray(5, k.length)), 65518 === b && 65 === k[0] && 100 === k[1] && 111 === k[2] && 98 === k[3] && 101 === k[4] && 0 === k[5] && (f = {
                                version: k[6],
                                flags0: k[7] << 8 | k[8],
                                flags1: k[9] << 8 | k[10],
                                transformCode: k[11]
                            });
                            break;
                        case 65499:
                            for (var C = r() + i - 2; i < C;) {
                                var E = t[i++];
                                m(256);
                                var S = new Int32Array(64);
                                if (E >> 4 == 0)
                                    for (Y = 0; Y < 64; Y++) {
                                        S[e[Y]] = t[i++]
                                    } else {
                                        if (E >> 4 != 1) throw new Error("DQT: invalid table spec");
                                        for (Y = 0; Y < 64; Y++) {
                                            S[e[Y]] = r()
                                        }
                                    }
                                g[15 & E] = S
                            }
                            break;
                        case 65472:
                        case 65473:
                        case 65474:
                            r(), (s = {}).extended = 65473 === b, s.progressive = 65474 === b, s.precision = t[i++], s.scanLines = r(), s.samplesPerLine = r(), s.components = {}, s.componentsOrder = [];
                            var T = s.scanLines * s.samplesPerLine;
                            if (T > n) {
                                var P = Math.ceil((T - n) / 1e6);
                                throw new Error(`maxResolutionInMP limit exceeded by ${P}MP`)
                            }
                            var A, I = t[i++];
                            for (q = 0; q < I; q++) {
                                A = t[i];
                                var L = t[i + 1] >> 4,
                                    z = 15 & t[i + 1],
                                    M = t[i + 2];
                                if (L <= 0 || z <= 0) throw new Error("Invalid sampling factor, expected values above 0");
                                s.componentsOrder.push(A), s.components[A] = {
                                    h: L,
                                    v: z,
                                    quantizationIdx: M
                                }, i += 3
                            }
                            o(s), v.push(s);
                            break;
                        case 65476:
                            var B = r();
                            for (q = 2; q < B;) {
                                var R = t[i++],
                                    O = new Uint8Array(16),
                                    N = 0;
                                for (Y = 0; Y < 16; Y++, i++) N += O[Y] = t[i];
                                m(16 + N);
                                var U = new Uint8Array(N);
                                for (Y = 0; Y < N; Y++, i++) U[Y] = t[i];
                                q += 17 + N, (R >> 4 == 0 ? y : w)[15 & R] = c(O, U)
                            }
                            break;
                        case 65501:
                            r(), a = r();
                            break;
                        case 65500:
                            r(), r();
                            break;
                        case 65498:
                            r();
                            var D = t[i++],
                                V = [];
                            for (q = 0; q < D; q++) {
                                K = s.components[t[i++]];
                                var W = t[i++];
                                K.huffmanTableDC = y[W >> 4], K.huffmanTableAC = w[15 & W], V.push(K)
                            }
                            var $ = t[i++],
                                F = t[i++],
                                j = t[i++],
                                H = u(t, i, s, V, a, $, F, j >> 4, 15 & j, this.opts);
                            i += H;
                            break;
                        case 65535:
                            255 !== t[i] && i--;
                            break;
                        default:
                            if (255 == t[i - 3] && t[i - 2] >= 192 && t[i - 2] <= 254) {
                                i -= 3;
                                break
                            }
                            if (224 === b || 225 == b) {
                                if (-1 !== x) throw new Error(`first unknown JPEG marker at offset ${x.toString(16)}, second unknown JPEG marker ${b.toString(16)} at offset ${(i-1).toString(16)}`);
                                x = i - 1;
                                const e = r();
                                if (255 === t[i + e - 2]) {
                                    i += e - 2;
                                    break
                                }
                            }
                            throw new Error("unknown JPEG marker " + b.toString(16))
                    }
                    b = r()
                }
                if (1 != v.length) throw new Error("only single frame JPEGs supported");
                for (var q = 0; q < v.length; q++) {
                    var X = v[q].components;
                    for (var Y in X) X[Y].quantizationTable = g[X[Y].quantizationIdx], delete X[Y].quantizationIdx
                }
                this.width = s.samplesPerLine, this.height = s.scanLines, this.jfif = p, this.adobe = f, this.components = [];
                for (q = 0; q < s.componentsOrder.length; q++) {
                    var K = s.components[s.componentsOrder[q]];
                    this.components.push({
                        lines: h(0, K),
                        scaleX: K.h / s.maxH,
                        scaleY: K.v / s.maxV
                    })
                }
            },
            getData: function(e, t) {
                var n, i, r, o, s, a, l, d, c, u, h, f, g, v, w, y, b, x, k, _, C, E = this.width / e,
                    S = this.height / t,
                    T = 0,
                    P = e * t * this.components.length;
                m(P);
                var A = new Uint8Array(P);
                switch (this.components.length) {
                    case 1:
                        for (n = this.components[0], u = 0; u < t; u++)
                            for (s = n.lines[0 | u * n.scaleY * S], c = 0; c < e; c++) h = s[0 | c * n.scaleX * E], A[T++] = h;
                        break;
                    case 2:
                        for (n = this.components[0], i = this.components[1], u = 0; u < t; u++)
                            for (s = n.lines[0 | u * n.scaleY * S], a = i.lines[0 | u * i.scaleY * S], c = 0; c < e; c++) h = s[0 | c * n.scaleX * E], A[T++] = h, h = a[0 | c * i.scaleX * E], A[T++] = h;
                        break;
                    case 3:
                        for (C = !0, this.adobe && this.adobe.transformCode ? C = !0 : void 0 !== this.opts.colorTransform && (C = !!this.opts.colorTransform), n = this.components[0], i = this.components[1], r = this.components[2], u = 0; u < t; u++)
                            for (s = n.lines[0 | u * n.scaleY * S], a = i.lines[0 | u * i.scaleY * S], l = r.lines[0 | u * r.scaleY * S], c = 0; c < e; c++) C ? (h = s[0 | c * n.scaleX * E], f = a[0 | c * i.scaleX * E], x = p(h + 1.402 * ((g = l[0 | c * r.scaleX * E]) - 128)), k = p(h - .3441363 * (f - 128) - .71413636 * (g - 128)), _ = p(h + 1.772 * (f - 128))) : (x = s[0 | c * n.scaleX * E], k = a[0 | c * i.scaleX * E], _ = l[0 | c * r.scaleX * E]), A[T++] = x, A[T++] = k, A[T++] = _;
                        break;
                    case 4:
                        if (!this.adobe) throw new Error("Unsupported color mode (4 components)");
                        for (C = !1, this.adobe && this.adobe.transformCode ? C = !0 : void 0 !== this.opts.colorTransform && (C = !!this.opts.colorTransform), n = this.components[0], i = this.components[1], r = this.components[2], o = this.components[3], u = 0; u < t; u++)
                            for (s = n.lines[0 | u * n.scaleY * S], a = i.lines[0 | u * i.scaleY * S], l = r.lines[0 | u * r.scaleY * S], d = o.lines[0 | u * o.scaleY * S], c = 0; c < e; c++) C ? (h = s[0 | c * n.scaleX * E], f = a[0 | c * i.scaleX * E], g = l[0 | c * r.scaleX * E], v = d[0 | c * o.scaleX * E], w = 255 - p(h + 1.402 * (g - 128)), y = 255 - p(h - .3441363 * (f - 128) - .71413636 * (g - 128)), b = 255 - p(h + 1.772 * (f - 128))) : (w = s[0 | c * n.scaleX * E], y = a[0 | c * i.scaleX * E], b = l[0 | c * r.scaleX * E], v = d[0 | c * o.scaleX * E]), A[T++] = 255 - w, A[T++] = 255 - y, A[T++] = 255 - b, A[T++] = 255 - v;
                        break;
                    default:
                        throw new Error("Unsupported color mode")
                }
                return A
            },
            copyToImageData: function(e, t) {
                var n, i, r, o, s, a, l, d, c, u = e.width,
                    h = e.height,
                    f = e.data,
                    g = this.getData(u, h),
                    m = 0,
                    v = 0;
                switch (this.components.length) {
                    case 1:
                        for (i = 0; i < h; i++)
                            for (n = 0; n < u; n++) r = g[m++], f[v++] = r, f[v++] = r, f[v++] = r, t && (f[v++] = 255);
                        break;
                    case 3:
                        for (i = 0; i < h; i++)
                            for (n = 0; n < u; n++) l = g[m++], d = g[m++], c = g[m++], f[v++] = l, f[v++] = d, f[v++] = c, t && (f[v++] = 255);
                        break;
                    case 4:
                        for (i = 0; i < h; i++)
                            for (n = 0; n < u; n++) s = g[m++], a = g[m++], r = g[m++], l = 255 - p(s * (1 - (o = g[m++]) / 255) + o), d = 255 - p(a * (1 - o / 255) + o), c = 255 - p(r * (1 - o / 255) + o), f[v++] = l, f[v++] = d, f[v++] = c, t && (f[v++] = 255);
                        break;
                    default:
                        throw new Error("Unsupported color mode")
                }
            }
        };
        var f = 0,
            g = 0;

        function m(e = 0) {
            var t = f + e;
            if (t > g) {
                var n = Math.ceil((t - g) / 1024 / 1024);
                throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${n}MB`)
            }
            f = t
        }
        return d.resetMaxMemoryUsage = function(e) {
            f = 0, g = e
        }, d.getBytesAllocated = function() {
            return f
        }, d.requestMemoryAllocation = m, d
    }();
    e.exports = function(e, n = {}) {
        var i = {
                colorTransform: void 0,
                useTArray: !1,
                formatAsRGBA: !0,
                tolerantDecoding: !0,
                maxResolutionInMP: 100,
                maxMemoryUsageInMB: 512,
                ...n
            },
            r = new Uint8Array(e),
            o = new t;
        o.opts = i, t.resetMaxMemoryUsage(1024 * i.maxMemoryUsageInMB * 1024), o.parse(r);
        var s = i.formatAsRGBA ? 4 : 3,
            a = o.width * o.height * s;
        try {
            t.requestMemoryAllocation(a);
            var l = {
                width: o.width,
                height: o.height,
                exifBuffer: o.exifBuffer,
                data: i.useTArray ? new Uint8Array(a) : Buffer.alloc(a)
            };
            o.comments.length > 0 && (l.comments = o.comments)
        } catch (e) {
            if (e instanceof RangeError) throw new Error("Could not allocate enough memory for the image. Required: " + a);
            if (e instanceof ReferenceError && "Buffer is not defined" === e.message) throw new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true");
            throw e
        }
        return o.copyToImageData(l, i.formatAsRGBA), l
    }
}(ar);
var lr, dr, cr, ur, hr, pr, fr, gr, mr, vr, wr, yr, br, xr, kr, _r, Cr = {
    encode: sr.exports,
    decode: ar.exports
};
dr = function(e) {
    var t;
    return t = window.atob(e.slice(e.indexOf(",") + 1)), new Uint8Array(new ArrayBuffer(t.length)).map((function(e, n) {
        return t.charCodeAt(n)
    }))
}, lr = function(e, t) {
    var n, i, r, o;
    for (i = r = 0, o = e.length; r < o; i = ++r)
        if (n = e[i], t[i] !== n) return !1;
    return !0
}, ur = [137, 80, 78, 71, 13, 10, 26, 10], cr = [255, 216, 255], hr = function(e) {
    var t, n, i, r;
    n = dr(e);
    try {
        if (lr(ur, n)) {
            if (i = or.decode(n), (t = new Uint8ClampedArray(or.toRGBA8(i)[0])).length === i.height * i.width * 4) return {
                array: t,
                height: i.height,
                width: i.width,
                didSucceed: !0
            };
            throw new Error(`Converted PNG bytes have length ${t.length}, but valid PNG bytes would have length ${i.height*i.width*4}.`)
        }
        if (lr(cr, n)) {
            if (r = window.Buffer, window.Buffer = ni.Buffer, i = Cr.decode(n), window.Buffer = r, (t = new Uint8ClampedArray(i.data)).length === i.height * i.width * 4) return {
                array: t,
                height: i.height,
                width: i.width,
                didSucceed: !0
            };
            throw new Error(`Converted JPEG bytes have length ${t.length}, but valid JPEG bytes would have length ${i.height*i.width*4}.`)
        }
        throw new Error("Undecodable file type")
    } catch (e) {
        return {
            didSucceed: !1
        }
    }
}, pr = function(e) {
    var t, n, i;
    return i = or.encode([e.data.buffer], e.width, e.height, 0), t = new Uint8Array(i), n = Array.prototype.map.call(t, (function(e) {
        return String.fromCharCode(e)
    })).join(""), `data:image/png;base64,${btoa(n)}`
}, _r = function(e, t) {
    return function(n) {
        var i, r;
        r = function(t) {
            var o, s;
            return (s = new FileReader).onload = function(e) {
                return n(e.target.result)
            }, t.target.files.length > 0 && (o = t.target.files[0], "image" === e || "any" === e && o.type.startsWith("image/") ? s.readAsDataURL(o) : s.readAsText(o)), i.removeEventListener("change", r)
        }, (i = t.find("#general-file-input")).addEventListener("change", r), i.click(), i.value = ""
    }
}, fr = function(e, t) {
    var n, i;
    return n = function() {
        t.mouseDown = !1
    }, i = function(t, ...n) {
        return e.findComponent("asyncDialog").fire(t, ...n)
    }, {
        getChoice: function(e, t) {
            return function(r) {
                n(), i("show-chooser", e, t, r)
            }
        },
        getText: function(e) {
            return function(t) {
                n(), i("show-text-input", e, t)
            }
        },
        getYesOrNo: function(e) {
            return function(t) {
                n(), i("show-yes-or-no", e, t)
            }
        },
        showMessage: function(e) {
            return function(t) {
                n(), i("show-message", e, t)
            }
        }
    }
}, mr = function(e, t) {
    var n;
    return n = function() {
        e.mouseDown = !1
    }, {
        confirm: function(e) {
            return n(), window.confirm(e)
        },
        input: function(e) {
            return n(), window.prompt(e, "")
        },
        notify: function(e) {
            return n(), t(e)
        },
        yesOrNo: function(e) {
            return n(), window.confirm(e)
        }
    }
}, wr = function(e, t, n) {
    return {
        exportFile: function(e) {
            return function(t) {
                window.saveAs(new Blob([e], {
                    type: "text/plain:charset=utf-8"
                }), t)
            }
        },
        exportBlob: function(e) {
            return function(t) {
                return window.saveAs(e, t)
            }
        },
        getNlogo: function() {
            var t, i, r, o;
            if (({
                    result: i,
                    success: r
                } = n.exportNlogo({
                    info: P(e.get("info")),
                    code: e.get("code"),
                    widgets: function() {
                        var n, i;
                        for (t in i = [], n = e.get("widgetObj")) o = n[t], i.push(o);
                        return i
                    }(),
                    turtleShapes: turtleShapes,
                    linkShapes: linkShapes
                })), r) return i;
            throw new Error("The current model could not be converted to 'nlogo' format")
        },
        getOutput: function() {
            var t, n;
            return null != (t = null != (n = e.findComponent("outputWidget")) ? n.get("text") : void 0) ? t : e.findComponent("console").get("output")
        },
        getViewBase64: function() {
            return t.view.visibleCanvas.toDataURL("image/png")
        },
        getViewBlob: function(e) {
            return t.view.visibleCanvas.toBlob(e, "image/png")
        },
        importFile: function(t) {
            return function(t) {
                _r("any", e)(t)
            }
        },
        importModel: function(e, t) {
            window.postMessage({
                nlogo: e,
                path: t,
                type: "nlw-load-model"
            }, "*")
        }
    }
}, yr = function() {
    return {
        inspect: function(e) {
            return window.alert("Agent inspection is not yet implemented")
        },
        stopInspecting: function(e) {},
        clearDead: function() {}
    }
}, vr = function(e) {
    return {
        importFile: function(e) {
            return function(e) {
                console.warn("Unsupported operation: `importFile`")
            }
        },
        slurpFileDialogAsync: function(t) {
            _r("any", e)(t)
        },
        slurpURL: function(e) {
            var t, n, i, r, o;
            return (i = new XMLHttpRequest).open("GET", e, !1), i.overrideMimeType("text/plain; charset=x-user-defined"), i.send(), r = i.response, (n = i.getResponseHeader("content-type")).startsWith("image/") ? (t = function(e, t) {
                return e + String.fromCharCode(255 & r.charCodeAt(t))
            }, o = function() {
                for (var e = [], t = 0, n = r.length; 0 <= n ? t < n : t > n; 0 <= n ? t++ : t--) e.push(t);
                return e
            }.apply(this).reduce(t, ""), `data:${n};base64,${btoa(o)}`) : r
        },
        slurpURLAsync: function(e) {
            return function(t, n) {
                var i;
                i = function(e) {
                    return n(["Extension exception: Could not fetch resource from the given URL. Make sure the URL is correct, that there are no network issues, and that CORS access is permitted. The exact error message is below.", "", e.message])
                }, fetch(e).then((function(e) {
                    var r;
                    return e.ok ? e.headers.get("content-type").startsWith("image/") ? e.blob().then((function(e) {
                        var n;
                        return (n = new FileReader).onload = function(e) {
                            return t(e.target.result)
                        }, n.readAsDataURL(e)
                    })).catch(i) : e.text().then(t).catch(i) : ("Extension exception: Server gave a failure response when trying to fetch URL.", r = `${e.status}: ${e.statusText}`, n(["Extension exception: Server gave a failure response when trying to fetch URL.", "", r]))
                })).catch(i)
            }
        }
    }
}, br = function(e) {
    return {
        peekIsDown: function() {
            return e.mouseDown
        },
        peekIsInside: function() {
            return e.mouseInside
        },
        peekX: e.mouseXcor,
        peekY: e.mouseYcor
    }
}, xr = function(e, t) {
    return {
        clear: function() {
            var t;
            if (null != (t = e.findComponent("outputWidget"))) return t.setText("")
        },
        write: function(n) {
            var i;
            return null != (i = e.findComponent("outputWidget")) ? i.appendText(n) : t(n)
        }
    }
}, kr = function(e) {
    return {
        resizeWorld: function() {
            Object.values(e.get("widgetObj")).filter((function({
                type: e,
                forever: t,
                running: n
            }) {
                return "button" === e && t && n
            })).forEach((function(e) {
                return e.running = !1
            }))
        }
    }
}, gr = function(e, t, n, i) {
    var r, o, s, a, l;
    return a = function(t) {
        return e.fire("notify-user", t)
    }, l = function(t) {
        return e.fire("extension-error", t)
    }, r = function(t) {
        return e.set("consoleOutput", e.get("consoleOutput") + t)
    }, o = function(e) {
        var t, n, i;
        return ({
            array: t,
            height: n,
            width: i
        } = hr(e)), new ImageData(t, i, n)
    }, s = function(e, n, i) {
        return t.drawingLayer.importImage(e, n, i)
    }, {
        asyncDialog: fr(e, t),
        base64ToImageData: o,
        imageDataToBase64: pr,
        dialog: mr(t, a),
        importExport: wr(e, t, i),
        importImage: s,
        inspection: yr(),
        io: vr(e),
        mouse: br(t),
        output: xr(e, r),
        print: {
            write: r
        },
        plotOps: {},
        reportErrors: l,
        world: kr(e)
    }
};
var Er = gr;
const Sr = {
    default: {
        rotate: !0,
        elements: [{
            xcors: [150, 40, 150, 260],
            ycors: [5, 250, 205, 250],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    airplane: {
        rotate: !0,
        elements: [{
            xcors: [150, 135, 120, 120, 15, 15, 120, 135, 105, 120, 150, 180, 210, 165, 180, 285, 285, 180, 180, 165],
            ycors: [0, 15, 60, 105, 165, 195, 180, 240, 270, 285, 270, 285, 270, 240, 180, 195, 165, 105, 60, 15],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    arrow: {
        rotate: !0,
        elements: [{
            xcors: [150, 0, 105, 105, 195, 195, 300],
            ycors: [0, 150, 150, 293, 293, 150, 150],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    box: {
        rotate: !1,
        elements: [{
            xcors: [150, 285, 285, 150],
            ycors: [285, 225, 75, 135],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [150, 15, 150, 285],
            ycors: [135, 75, 15, 75],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [15, 15, 150, 150],
            ycors: [75, 225, 285, 135],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x1: 150,
            y1: 285,
            x2: 150,
            y2: 135,
            type: "line",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }, {
            x1: 150,
            y1: 135,
            x2: 15,
            y2: 75,
            type: "line",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }, {
            x1: 150,
            y1: 135,
            x2: 285,
            y2: 75,
            type: "line",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }]
    },
    bug: {
        rotate: !0,
        elements: [{
            x: 96,
            y: 182,
            diam: 108,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 110,
            y: 127,
            diam: 80,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 110,
            y: 75,
            diam: 80,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x1: 150,
            y1: 100,
            x2: 80,
            y2: 30,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 150,
            y1: 100,
            x2: 220,
            y2: 30,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }]
    },
    butterfly: {
        rotate: !0,
        elements: [{
            xcors: [150, 209, 225, 225, 195, 165, 150],
            ycors: [165, 199, 225, 255, 270, 255, 240],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [150, 89, 75, 75, 105, 135, 150],
            ycors: [165, 198, 225, 255, 270, 255, 240],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [139, 100, 55, 25, 10, 10, 25, 40, 85, 139],
            ycors: [148, 105, 90, 90, 105, 135, 180, 195, 194, 163],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [162, 200, 245, 275, 290, 290, 275, 260, 215, 162],
            ycors: [150, 105, 90, 90, 105, 135, 180, 195, 195, 165],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [150, 135, 120, 135, 150, 165, 180, 165],
            ycors: [255, 225, 150, 120, 105, 120, 150, 225],
            type: "polygon",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 135,
            y: 90,
            diam: 30,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x1: 150,
            y1: 105,
            x2: 195,
            y2: 60,
            type: "line",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }, {
            x1: 150,
            y1: 105,
            x2: 105,
            y2: 60,
            type: "line",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }]
    },
    car: {
        rotate: !1,
        elements: [{
            xcors: [300, 279, 261, 240, 226, 213, 203, 185, 159, 135, 75, 0, 0, 0, 300, 300],
            ycors: [180, 164, 144, 135, 132, 106, 84, 63, 50, 50, 60, 150, 165, 225, 225, 180],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 180,
            y: 180,
            diam: 90,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 30,
            y: 180,
            diam: 90,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [162, 132, 134, 209, 194, 189, 180],
            ycors: [80, 78, 135, 135, 105, 96, 89],
            type: "polygon",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 47,
            y: 195,
            diam: 58,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 195,
            y: 195,
            diam: 58,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    circle: {
        rotate: !1,
        elements: [{
            x: 0,
            y: 0,
            diam: 300,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    "circle 2": {
        rotate: !1,
        elements: [{
            x: 0,
            y: 0,
            diam: 300,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 30,
            y: 30,
            diam: 240,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    cloud: {
        rotate: !1,
        elements: [{
            x: 13,
            y: 118,
            diam: 94,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 86,
            y: 101,
            diam: 127,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 51,
            y: 51,
            diam: 108,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 118,
            y: 43,
            diam: 95,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 158,
            y: 68,
            diam: 134,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    "co2-molecule": {
        rotate: !0,
        elements: [{
            x: 183,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 183,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }, {
            x: 75,
            y: 75,
            diam: 150,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 75,
            y: 75,
            diam: 150,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }, {
            x: 33,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 33,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }]
    },
    cow: {
        rotate: !1,
        elements: [{
            xcors: [200, 197, 179, 177, 166, 140, 93, 78, 72, 49, 48, 37, 25, 25, 45, 103, 179, 198, 252, 272, 293, 285, 255, 242, 224],
            ycors: [193, 249, 249, 196, 187, 189, 191, 179, 211, 209, 181, 149, 120, 89, 72, 84, 75, 76, 64, 81, 103, 121, 121, 118, 167],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [73, 86, 62, 48],
            ycors: [210, 251, 249, 208],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [25, 16, 9, 23, 25, 39],
            ycors: [114, 195, 204, 213, 200, 123],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    cylinder: {
        rotate: !1,
        elements: [{
            x: 0,
            y: 0,
            diam: 300,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    dot: {
        rotate: !1,
        elements: [{
            x: 90,
            y: 90,
            diam: 120,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    "face happy": {
        rotate: !1,
        elements: [{
            x: 8,
            y: 8,
            diam: 285,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 60,
            y: 75,
            diam: 60,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 180,
            y: 75,
            diam: 60,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [150, 90, 62, 47, 67, 90, 109, 150, 192, 210, 227, 251, 236, 212],
            ycors: [255, 239, 213, 191, 179, 203, 218, 225, 218, 203, 181, 194, 217, 240],
            type: "polygon",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    "face neutral": {
        rotate: !1,
        elements: [{
            x: 8,
            y: 7,
            diam: 285,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 60,
            y: 75,
            diam: 60,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 180,
            y: 75,
            diam: 60,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xmin: 60,
            ymin: 195,
            xmax: 240,
            ymax: 225,
            type: "rectangle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    "face sad": {
        rotate: !1,
        elements: [{
            x: 8,
            y: 8,
            diam: 285,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 60,
            y: 75,
            diam: 60,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 180,
            y: 75,
            diam: 60,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [150, 90, 62, 47, 67, 90, 109, 150, 192, 210, 227, 251, 236, 212],
            ycors: [168, 184, 210, 232, 244, 220, 205, 198, 205, 220, 242, 229, 206, 183],
            type: "polygon",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    fish: {
        rotate: !1,
        elements: [{
            xcors: [44, 21, 15, 0, 15, 0, 13, 20, 45],
            ycors: [131, 87, 86, 120, 150, 180, 214, 212, 166],
            type: "polygon",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [135, 119, 95, 76, 46, 60],
            ycors: [195, 235, 218, 210, 204, 165],
            type: "polygon",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [75, 83, 71, 86, 166, 135],
            ycors: [45, 77, 103, 114, 78, 60],
            type: "polygon",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [30, 151, 226, 280, 292, 292, 287, 270, 195, 151, 30],
            ycors: [136, 77, 81, 119, 146, 160, 170, 195, 210, 212, 166],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 215,
            y: 106,
            diam: 30,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    flag: {
        rotate: !1,
        elements: [{
            xmin: 60,
            ymin: 15,
            xmax: 75,
            ymax: 300,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [90, 270, 90],
            ycors: [150, 90, 30],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x1: 75,
            y1: 135,
            x2: 90,
            y2: 135,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 75,
            y1: 45,
            x2: 90,
            y2: 45,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }]
    },
    flower: {
        rotate: !1,
        elements: [{
            xcors: [135, 165, 180, 180, 150, 165, 195, 195, 165],
            ycors: [120, 165, 210, 240, 300, 300, 240, 195, 135],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 85,
            y: 132,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 130,
            y: 147,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 192,
            y: 85,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 85,
            y: 40,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 177,
            y: 40,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 177,
            y: 132,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 70,
            y: 85,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 130,
            y: 25,
            diam: 38,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 96,
            y: 51,
            diam: 108,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 113,
            y: 68,
            diam: 74,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [189, 219, 249, 279, 234],
            ycors: [233, 188, 173, 188, 218],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [180, 150, 105, 75, 135],
            ycors: [255, 210, 210, 240, 240],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    house: {
        rotate: !1,
        elements: [{
            xmin: 45,
            ymin: 120,
            xmax: 255,
            ymax: 285,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xmin: 120,
            ymin: 210,
            xmax: 180,
            ymax: 285,
            type: "rectangle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [15, 150, 285],
            ycors: [120, 15, 120],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x1: 30,
            y1: 120,
            x2: 270,
            y2: 120,
            type: "line",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }]
    },
    leaf: {
        rotate: !1,
        elements: [{
            xcors: [150, 135, 120, 60, 30, 60, 60, 15, 30, 15, 40, 45, 60, 90, 105, 120, 105, 120, 135, 150, 165, 180, 195, 180, 195, 210, 240, 255, 263, 285, 270, 285, 240, 240, 270, 240, 180, 165],
            ycors: [210, 195, 210, 210, 195, 180, 165, 135, 120, 105, 104, 90, 90, 105, 120, 120, 60, 60, 30, 15, 30, 60, 60, 120, 120, 105, 90, 90, 104, 105, 120, 135, 165, 180, 195, 210, 210, 195],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [135, 135, 120, 105, 105, 135, 165, 165],
            ycors: [195, 240, 255, 255, 285, 285, 240, 195],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    line: {
        rotate: !0,
        elements: [{
            x1: 150,
            y1: 0,
            x2: 150,
            y2: 300,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }]
    },
    "line half": {
        rotate: !0,
        elements: [{
            x1: 150,
            y1: 0,
            x2: 150,
            y2: 150,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }]
    },
    "molecule water": {
        rotate: !0,
        elements: [{
            x: 183,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 183,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }, {
            x: 75,
            y: 75,
            diam: 150,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 75,
            y: 75,
            diam: 150,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }, {
            x: 33,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 33,
            y: 63,
            diam: 84,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !1,
            marked: !1
        }]
    },
    pentagon: {
        rotate: !1,
        elements: [{
            xcors: [150, 15, 60, 240, 285],
            ycors: [15, 120, 285, 285, 120],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    person: {
        rotate: !1,
        elements: [{
            x: 110,
            y: 5,
            diam: 80,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [105, 120, 90, 105, 135, 150, 165, 195, 210, 180, 195],
            ycors: [90, 195, 285, 300, 300, 225, 300, 300, 285, 195, 90],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xmin: 127,
            ymin: 79,
            xmax: 172,
            ymax: 94,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [195, 240, 225, 165],
            ycors: [90, 150, 180, 105],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [105, 60, 75, 135],
            ycors: [90, 150, 180, 105],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    plant: {
        rotate: !1,
        elements: [{
            xmin: 135,
            ymin: 90,
            xmax: 165,
            ymax: 300,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [135, 90, 45, 75, 135],
            ycors: [255, 210, 195, 255, 285],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [165, 210, 255, 225, 165],
            ycors: [255, 210, 195, 255, 285],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [135, 90, 45, 75, 135],
            ycors: [180, 135, 120, 180, 210],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [165, 165, 225, 255, 210],
            ycors: [180, 210, 180, 120, 135],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [135, 90, 45, 75, 135],
            ycors: [105, 60, 45, 105, 135],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [165, 165, 225, 255, 210],
            ycors: [105, 135, 105, 45, 60],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [135, 120, 150, 180, 165],
            ycors: [90, 45, 15, 45, 90],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    ray: {
        rotate: !0,
        elements: [{
            x1: 150,
            y1: 0,
            x2: 150,
            y2: 315,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 120,
            y1: 255,
            x2: 150,
            y2: 225,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 150,
            y1: 225,
            x2: 180,
            y2: 255,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 120,
            y1: 165,
            x2: 150,
            y2: 135,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 120,
            y1: 75,
            x2: 150,
            y2: 45,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 150,
            y1: 135,
            x2: 180,
            y2: 165,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 150,
            y1: 45,
            x2: 180,
            y2: 75,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }]
    },
    sheep: {
        rotate: !1,
        elements: [{
            x: 203,
            y: 65,
            diam: 88,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 70,
            y: 65,
            diam: 162,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 150,
            y: 105,
            diam: 120,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [218, 240, 255, 278],
            ycors: [120, 165, 165, 120],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 214,
            y: 72,
            diam: 67,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xmin: 164,
            ymin: 223,
            xmax: 179,
            ymax: 298,
            type: "rectangle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [45, 30, 30, 15, 45],
            ycors: [285, 285, 240, 195, 210],
            type: "polygon",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 3,
            y: 83,
            diam: 150,
            type: "circle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xmin: 65,
            ymin: 221,
            xmax: 80,
            ymax: 296,
            type: "rectangle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [195, 210, 210, 240, 195],
            ycors: [285, 285, 240, 210, 210],
            type: "polygon",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [276, 285, 302, 294],
            ycors: [85, 105, 99, 83],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [219, 210, 193, 201],
            ycors: [85, 105, 99, 83],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    square: {
        rotate: !1,
        elements: [{
            xmin: 30,
            ymin: 30,
            xmax: 270,
            ymax: 270,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    "square 2": {
        rotate: !1,
        elements: [{
            xmin: 30,
            ymin: 30,
            xmax: 270,
            ymax: 270,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xmin: 60,
            ymin: 60,
            xmax: 240,
            ymax: 240,
            type: "rectangle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    star: {
        rotate: !1,
        elements: [{
            xcors: [151, 185, 298, 207, 242, 151, 59, 94, 3, 116],
            ycors: [1, 108, 108, 175, 282, 216, 282, 175, 108, 108],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    target: {
        rotate: !1,
        elements: [{
            x: 0,
            y: 0,
            diam: 300,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 30,
            y: 30,
            diam: 240,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 60,
            y: 60,
            diam: 180,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 90,
            y: 90,
            diam: 120,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 120,
            y: 120,
            diam: 60,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    tree: {
        rotate: !1,
        elements: [{
            x: 118,
            y: 3,
            diam: 94,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xmin: 120,
            ymin: 195,
            xmax: 180,
            ymax: 300,
            type: "rectangle",
            color: "rgba(157, 110, 72, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 65,
            y: 21,
            diam: 108,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 116,
            y: 41,
            diam: 127,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 45,
            y: 90,
            diam: 120,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 104,
            y: 74,
            diam: 152,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    triangle: {
        rotate: !1,
        elements: [{
            xcors: [150, 15, 285],
            ycors: [30, 255, 255],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    "triangle 2": {
        rotate: !1,
        elements: [{
            xcors: [150, 15, 285],
            ycors: [30, 255, 255],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [151, 225, 75],
            ycors: [99, 223, 224],
            type: "polygon",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }]
    },
    truck: {
        rotate: !1,
        elements: [{
            xmin: 4,
            ymin: 45,
            xmax: 195,
            ymax: 187,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [296, 296, 259, 244, 208, 207],
            ycors: [193, 150, 134, 104, 104, 194],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xmin: 195,
            ymin: 60,
            xmax: 195,
            ymax: 105,
            type: "rectangle",
            color: "rgba(255, 255, 255, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [238, 252, 219, 218],
            ycors: [112, 141, 141, 112],
            type: "polygon",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 234,
            y: 174,
            diam: 42,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xmin: 181,
            ymin: 185,
            xmax: 214,
            ymax: 194,
            type: "rectangle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 144,
            y: 174,
            diam: 42,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 24,
            y: 174,
            diam: 42,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x: 24,
            y: 174,
            diam: 42,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x: 144,
            y: 174,
            diam: 42,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x: 234,
            y: 174,
            diam: 42,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }]
    },
    turtle: {
        rotate: !0,
        elements: [{
            xcors: [215, 240, 246, 228, 215, 193],
            ycors: [204, 233, 254, 266, 252, 210],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [195, 225, 245, 260, 269, 261, 240, 225, 210],
            ycors: [90, 75, 75, 89, 108, 124, 105, 105, 105],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [105, 75, 55, 40, 31, 39, 60, 75, 90],
            ycors: [90, 75, 75, 89, 108, 124, 105, 105, 105],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [132, 134, 107, 108, 150, 192, 192, 169, 172],
            ycors: [85, 64, 51, 17, 2, 18, 52, 65, 87],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [85, 60, 54, 72, 85, 107],
            ycors: [204, 233, 254, 266, 252, 210],
            type: "polygon",
            color: "rgba(89, 176, 60, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [119, 179, 209, 224, 220, 175, 128, 81, 74, 88],
            ycors: [75, 75, 101, 135, 225, 261, 261, 224, 135, 99],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    wheel: {
        rotate: !1,
        elements: [{
            x: 3,
            y: 3,
            diam: 294,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x: 30,
            y: 30,
            diam: 240,
            type: "circle",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            x1: 150,
            y1: 285,
            x2: 150,
            y2: 15,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 15,
            y1: 150,
            x2: 285,
            y2: 150,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x: 120,
            y: 120,
            diam: 60,
            type: "circle",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            x1: 216,
            y1: 40,
            x2: 79,
            y2: 269,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 40,
            y1: 84,
            x2: 269,
            y2: 221,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 40,
            y1: 216,
            x2: 269,
            y2: 79,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }, {
            x1: 84,
            y1: 40,
            x2: 221,
            y2: 269,
            type: "line",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !1,
            marked: !0
        }]
    },
    wolf: {
        rotate: !1,
        elements: [{
            xcors: [253, 245, 245],
            ycors: [133, 131, 133],
            type: "polygon",
            color: "rgba(0, 0, 0, 1.0)",
            filled: !0,
            marked: !1
        }, {
            xcors: [2, 13, 30, 38, 38, 20, 20, 27, 38, 40, 31, 31, 60, 68, 75, 66, 65, 82, 84, 100, 103, 77, 79, 100, 98, 119, 143, 160, 166, 172, 173, 167, 160, 154, 169, 178, 186, 198, 200, 217, 219, 207, 195, 192, 210, 227, 242, 259, 284, 277, 293, 299, 297, 273, 270],
            ycors: [194, 197, 191, 193, 205, 226, 257, 265, 266, 260, 253, 230, 206, 198, 209, 228, 243, 261, 268, 267, 261, 239, 231, 207, 196, 201, 202, 195, 210, 213, 238, 251, 248, 265, 264, 247, 240, 260, 271, 271, 262, 258, 230, 198, 184, 164, 144, 145, 151, 141, 140, 134, 127, 119, 105],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [-1, 14, 36, 40, 53, 82, 134, 159, 188, 227, 236, 238, 268, 269, 281, 269, 269],
            ycors: [195, 180, 166, 153, 140, 131, 133, 126, 115, 108, 102, 98, 86, 92, 87, 103, 113],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    },
    x: {
        rotate: !1,
        elements: [{
            xcors: [270, 225, 30, 75],
            ycors: [75, 30, 225, 270],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }, {
            xcors: [30, 75, 270, 225],
            ycors: [75, 30, 225, 270],
            type: "polygon",
            color: "rgba(141, 141, 141, 1.0)",
            filled: !0,
            marked: !0
        }]
    }
};
var Tr, Pr, Ar, Ir, Lr, zr, Mr;
Tr = class {
    constructor(e, t) {
        this.shapes = e, this.onePixel = t
    }
    setTransparency(e, t) {
        return e.globalAlpha = t.length > 3 ? t[3] / 255 : 1
    }
    drawShape(e, t, n, i = 1) {
        e.translate(.5, -.5), e.scale(-1 / 300, 1 / 300), this.setTransparency(e, t), e.save(), e.beginPath(), e.rect(0, 0, 300, 300), e.clip(), this.drawRawShape(e, t, n, i), e.restore()
    }
    drawRawShape(e, t, n, i = 1) {
        var r, o, s, a;
        for (e.lineWidth = 300 * this.onePixel * i, o = 0, s = (a = (this.shapes[n] || Pr).elements).length; o < s; o++) r = a[o], Ar[r.type](e, t, r)
    }
}, Lr = function(e, t, n) {
    t = Bt(t), n.filled ? n.marked ? e.fillStyle = t : e.fillStyle = n.color : n.marked ? e.strokeStyle = t : e.strokeStyle = n.color
}, Ir = function(e, t, n) {
    Lr(e, t, n), n.filled ? e.fill() : e.stroke()
}, Ar = {
    circle: function(e, t, n) {
        var i;
        i = n.diam / 2, e.beginPath(), e.arc(n.x + i, n.y + i, i, 0, 2 * Math.PI, !1), e.closePath(), Ir(e, t, n)
    },
    polygon: function(e, t, n) {
        var i, r, o, s, a, l, d, c;
        for (l = n.xcors, c = n.ycors, e.beginPath(), e.moveTo(l[0], c[0]), i = r = 0, o = (s = l.slice(1)).length; r < o; i = ++r) a = s[i], d = c[i + 1], e.lineTo(a, d);
        e.closePath(), Ir(e, t, n)
    },
    rectangle: function(e, t, n) {
        var i, r, o, s;
        o = n.xmin, s = n.ymin, r = n.xmax - o, i = n.ymax - s, Lr(e, t, n), n.filled ? e.fillRect(o, s, r, i) : e.strokeRect(o, s, r, i)
    },
    line: function(e, t, n) {
        n.x1, n.y1, n.x2, n.x1, n.y2, n.y1, Lr(e, t, n), e.beginPath(), e.moveTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.stroke()
    }
}, Pr = {
    rotate: !0,
    elements: [{
        type: "polygon",
        color: "grey",
        filled: "true",
        marked: "true",
        xcors: [150, 40, 150, 260],
        ycors: [5, 250, 205, 250]
    }]
}, zr = class {
    constructor(e, t, n, i) {
        this.x1 = e, this.y1 = t, this.x2 = n, this.y2 = i
    }
    midpoint() {
        return [(this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2]
    }
}, Mr = class {
    constructor(e, t) {
        var n, i, r, o;
        for (i in this.traceCurvedLine = this.traceCurvedLine.bind(this), this._drawLinkLine = this._drawLinkLine.bind(this), this.view = e, this.shapes = t, n = {}, r = this.shapes) o = r[i], n[i] = o["direction-indicator"];
        this.linkShapeDrawer = new Tr(n, this.view.onePixel)
    }
    traceCurvedLine(e, t, n, i, r, o, s) {
        return s.moveTo(e, t), s.quadraticCurveTo(r, o, n, i)
    }
    shouldWrapInDim(e, t, n, i) {
        var r;
        return r = Math.abs(n - i), e && r > t / 2
    }
    calculateShortestLineAngle(e, t, n, i) {
        var r, o;
        return r = Math.min(e - n, n - e), o = Math.min(t - i, i - t), Math.atan2(o, r)
    }
    calculateComps(e, t, n, i, r) {
        return [(i - t) / r, (e - n) / r]
    }
    calculateSublineOffset(e, t, n, i) {
        var r;
        return [e * (r = t / this.view.onePixel) * n, e * r * i]
    }
    getOffsetSubline(e, t, n, i, r, o) {
        return new zr(e + r, t + o, n + r, i + o)
    }
    calculateControlPoint(e, t, n, i, r) {
        return [e - n * i, t - n * r]
    }
    drawSubline({
        x1: e,
        y1: t,
        x2: n,
        y2: i
    }, r, o, s, a, l, d, c) {
        return c.save(), c.beginPath(), c.setLineDash(r.map((e => e * this.view.onePixel))), c.strokeStyle = zt(s), c.lineWidth = o, c.lineCap = a ? "round" : "square", this.traceCurvedLine(e, t, n, i, l, d, c), c.stroke(), c.setLineDash([1, 0]), c.restore()
    }
    drawShape(e, t, n, i, r, o, s, a, l, d) {
        var c, u, h, p, f, g, m, v, w, y;
        return d.save(), w = this.calculateShortestLineAngle(e, t, n, i), f = e - n > 0 ? -1 : 1, g = t - i > 0 ? -1 : 1, m = e + (p = 20 * this.view.onePixel) * Math.abs(Math.cos(w)) * f, v = t + p * Math.abs(Math.sin(w)) * g, h = Math.atan2(v - t, m - e) - Math.PI / 2, d.translate(m, v), a["direction-indicator"].rotate ? d.rotate(h) : d.rotate(Math.PI), y = s / this.view.onePixel, s <= 1 ? (u = 1 / this.view.onePixel / 5, c = 10 * s) : (u = y / 2, c = .5), d.scale(u, u), this.linkShapeDrawer.drawShape(d, o, l, c), d.restore()
    }
    drawLabel(e, t, n, i) {
        return this.view.drawLabel(e - 3 * this.view.onePixel, t + 3 * this.view.onePixel, n, i)
    }
    draw(e, t, n, i, r, o = this.view.ctx, s = !1) {
        var a, l, d, c, u, h, p, f, g;
        if (!e["hidden?"]) return ({
            color: l,
            thickness: d
        } = e), ({
            xcor: h,
            ycor: f
        } = t), ({
            xcor: p,
            ycor: g
        } = n), this.calculateShortestLineAngle(h, f, p, g), a = d > this.view.onePixel ? d : this.view.onePixel, c = this.shouldWrapInDim(i, this.view.worldWidth, h, p), u = this.shouldWrapInDim(r, this.view.worldHeight, f, g), this.getWrappedLines(h, f, p, g, c, u).forEach(this._drawLinkLine(e, a, o, s))
    }
    _drawLinkLine({
        color: e,
        size: t,
        heading: n,
        "directed?": i,
        shape: r,
        label: o,
        "label-color": s
    }, a, l, d) {
        return ({
            x1: c,
            y1: u,
            x2: h,
            y2: p
        }) => {
            var f, g, m;
            return m = this.shapes[r], ({
                curviness: f,
                lines: g
            } = m), g.forEach((v => {
                var w, y, b, x, k, _, C, E, S, T, P, A, I, L;
                if (({
                        "x-offset": w,
                        "dash-pattern": x,
                        "is-visible": T
                    } = v), _ = v === g[1], (T || _) && ([A, L] = this.calculateComps(c, u, h, p, t), [P, I] = this.calculateSublineOffset(w, a, A, L), S = this.getOffsetSubline(c, u, h, p, P, I), [C, E] = S.midpoint(), [y, b] = this.calculateControlPoint(C, E, f, A, L), T && (k = f > 0, this.drawSubline(S, x, a, e, k, y, b, l)), _ && (i && t > .25 * this.view.onePixel && this.drawShape(h, p, y, b, n, e, a, m, r, l), null != o && !d))) return this.drawLabel(y, b, o, s)
            }))
        }
    }
    getWrappedLines(e, t, n, i, r, o) {
        var s, a;
        return a = this.view.worldWidth, s = this.view.worldHeight, r && o ? e < n ? t < i ? [new zr(e, t, n - a, i - s), new zr(e + a, t, n, i - s), new zr(e + a, t + s, n, i), new zr(e, t + s, n - a, i)] : [new zr(e, t, n - a, i + s), new zr(e + a, t, n, i + s), new zr(e + a, t - s, n, i), new zr(e, t - s, n - a, i)] : t < i ? [new zr(e, t, n + a, i - s), new zr(e - a, t, n, i - s), new zr(e - a, t + s, n, i), new zr(e, t + s, n + a, i)] : [new zr(e, t, n + a, i + s), new zr(e - a, t, n, i + s), new zr(e - a, t - s, n, i), new zr(e, t - s, n + a, i)] : r ? e < n ? [new zr(e, t, n - a, i), new zr(e + a, t, n, i)] : [new zr(e, t, n + a, i), new zr(e - a, t, n, i)] : o ? t < i ? [new zr(e, t, n, i - s), new zr(e, t + s, n, i)] : [new zr(e, t - s, n, i), new zr(e, t, n, i + s)] : [new zr(e, t, n, i)]
    }
};
var Br, Rr, Or, Nr, Ur, Dr, Vr, Wr, $r = function(e, t) {
    if (!(e instanceof t)) throw new Error("Bound instance method accessed before binding")
};
Br = tortoise_require("agentmodel"), Wr = class {
    constructor(e, t) {
        this.mouseXcor = this.mouseXcor.bind(this), this.mouseYcor = this.mouseYcor.bind(this), this.container = e, this.view = new Vr(t), this.turtleDrawer = new Dr(this.view), this.drawingLayer = new Or(this.view, this.turtleDrawer, (() => this.repaint())), this.patchDrawer = new Nr(this.view), this.spotlightDrawer = new Ur(this.view), this.container.appendChild(this.view.visibleCanvas), this.mouseDown = !1, this.mouseInside = !1, this.mouseX = 0, this.mouseY = 0, this.initMouseTracking(), this.initTouchTracking(), this.resetModel(), this.repaint()
    }
    mouseXcor() {
        return this.view.xPixToPcor(this.mouseX)
    }
    mouseYcor() {
        return this.view.yPixToPcor(this.mouseY)
    }
    initMouseTracking() {
        return this.view.visibleCanvas.addEventListener("mousedown", (e => this.mouseDown = !0)), document.addEventListener("mouseup", (e => this.mouseDown = !1)), this.view.visibleCanvas.addEventListener("mouseenter", (e => this.mouseInside = !0)), this.view.visibleCanvas.addEventListener("mouseleave", (e => this.mouseInside = !1)), this.view.visibleCanvas.addEventListener("mousemove", (e => {
            var t;
            return t = this.view.visibleCanvas.getBoundingClientRect(), this.mouseX = e.clientX - t.left, this.mouseY = e.clientY - t.top
        }))
    }
    initTouchTracking() {
        var e, t;
        e = e => {
            this.mouseDown = !1, this.mouseInside = !1
        }, t = ({
            clientX: e,
            clientY: t
        }) => {
            var n, i, r, o;
            ({
                bottom: n,
                left: i,
                top: o,
                right: r
            } = this.view.visibleCanvas.getBoundingClientRect()), i <= e && e <= r && o <= t && t <= n ? (this.mouseInside = !0, this.mouseX = e - i, this.mouseY = t - o) : this.mouseInside = !1
        }, document.addEventListener("touchend", e), document.addEventListener("touchcancel", e), this.view.visibleCanvas.addEventListener("touchmove", (e => {
            e.preventDefault(), t(e.changedTouches[0])
        })), this.view.visibleCanvas.addEventListener("touchstart", (e => {
            this.mouseDown = !0, t(e.touches[0])
        }))
    }
    resetModel() {
        return this.model = new Br, this.model.world.turtleshapelist = Sr
    }
    repaint() {
        return this.view.transformToWorld(this.model.world), this.patchDrawer.repaint(this.model), this.drawingLayer.repaint(this.model), this.turtleDrawer.repaint(this.model), this.spotlightDrawer.repaint(this.model), this.view.repaint(this.model)
    }
    applyUpdate(e) {
        var t, n, i, r;
        for (t = 0, n = (r = Array.isArray(e) ? e : [e]).length; t < n; t++) i = r[t], this.model.update(i)
    }
    update(e) {
        this.applyUpdate(e), this.repaint()
    }
}, Vr = function() {
    class e {
        constructor(e) {
            this.usePatchCoordinates = this.usePatchCoordinates.bind(this), this.fontSize = e, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.visibleCanvas = document.createElement("canvas"), this.visibleCanvas.classList.add("netlogo-canvas", "unselectable"), this.visibleCanvas.width = 500, this.visibleCanvas.height = 500, this.visibleCanvas.style.width = "100%", this.visibleCtx = this.visibleCanvas.getContext("2d"), this._zoomLevel = null
        }
        transformToWorld(e) {
            return this.transformCanvasToWorld(e, this.canvas, this.ctx)
        }
        transformCanvasToWorld(e, t, n) {
            var i;
            return this.quality = Math.max(null != (i = window.devicePixelRatio) ? i : 2, 2), this.maxpxcor = null != e.maxpxcor ? e.maxpxcor : 25, this.minpxcor = null != e.minpxcor ? e.minpxcor : -25, this.maxpycor = null != e.maxpycor ? e.maxpycor : 25, this.minpycor = null != e.minpycor ? e.minpycor : -25, this.patchsize = null != e.patchsize ? e.patchsize : 9, this.wrapX = e.wrappingallowedinx, this.wrapY = e.wrappingallowediny, this.onePixel = 1 / this.patchsize, this.worldWidth = this.maxpxcor - this.minpxcor + 1, this.worldHeight = this.maxpycor - this.minpycor + 1, this.worldCenterX = (this.maxpxcor + this.minpxcor) / 2, this.worldCenterY = (this.maxpycor + this.minpycor) / 2, this.centerX = this.worldWidth / 2, this.centerY = this.worldHeight / 2, t.width = this.worldWidth * this.patchsize * this.quality, t.height = this.worldHeight * this.patchsize * this.quality, t.style.width = this.worldWidth * this.patchsize + "px", t.style.height = this.worldHeight * this.patchsize + "px", n.font = this.fontSize + 'px "Lucida Grande", sans-serif', n.imageSmoothingEnabled = !1, n.webkitImageSmoothingEnabled = !1, n.mozImageSmoothingEnabled = !1, n.oImageSmoothingEnabled = !1, n.msImageSmoothingEnabled = !1
        }
        usePatchCoordinates(e = this.ctx) {
            return t => {
                var n, i;
                return e.save(), i = this.canvas.width, n = this.canvas.height, e.setTransform(i / this.worldWidth, 0, 0, -n / this.worldHeight, -(this.minpxcor - .5) * i / this.worldWidth, (this.maxpycor + .5) * n / this.worldHeight), t(), e.restore()
            }
        }
        withCompositing(e, t = this.ctx) {
            return function(n) {
                var i;
                return i = t.globalCompositeOperation, t.globalCompositeOperation = e, n(), t.globalCompositeOperation = i
            }
        }
        offsetX() {
            return this.worldCenterX - this.centerX
        }
        offsetY() {
            return this.worldCenterY - this.centerY
        }
        xPixToPcor(e) {
            return (this.worldWidth * e / this.visibleCanvas.clientWidth + this.worldWidth - this.offsetX()) % this.worldWidth + this.minpxcor - .5
        }
        yPixToPcor(e) {
            return (-this.worldHeight * e / this.visibleCanvas.clientHeight + 2 * this.worldHeight - this.offsetY()) % this.worldHeight + this.minpycor - .5
        }
        xPcorToCanvas(e) {
            return (e - this.minpxcor + .5) / this.worldWidth * this.visibleCanvas.width
        }
        yPcorToCanvas(e) {
            return (this.maxpycor + .5 - e) / this.worldHeight * this.visibleCanvas.height
        }
        drawLabel(e, t, n, i, r) {
            if (null == r && (r = this.ctx), (n = null != n ? n.toString() : "").length > 0) return this.drawWrapped(e, t, n.length * this.fontSize / this.onePixel, ((e, t) => {
                var o, s, a, l, d;
                return r.save(), r.translate(e, t), r.scale(this.onePixel, -this.onePixel), r.textAlign = "left", r.fillStyle = zt(i), o = 1.2 * r.measureText("M").width, s = (a = n.split("\n")).map((function(e) {
                    return r.measureText(e).width
                })), l = Math.max(...s), d = -1 * (l + 1) / 1.5, a.forEach((function(e, t) {
                    var n;
                    return n = t * o, r.fillText(e, d, n)
                })), r.restore()
            }))
        }
        drawWrapped(e, t, n, i) {
            var r, o, s, a, l, d, c, u;
            for (d = this.wrapX ? [e - this.worldWidth, e, e + this.worldWidth] : [e], u = this.wrapY ? [t - this.worldHeight, t, t + this.worldHeight] : [t], r = 0, s = d.length; r < s; r++)
                if ((l = d[r]) + n / 2 > this.minpxcor - .5 && l - n / 2 < this.maxpxcor + .5)
                    for (o = 0, a = u.length; o < a; o++)(c = u[o]) + n / 2 > this.minpycor - .5 && c - n / 2 < this.maxpycor + .5 && i(l, c)
        }
        watch(e) {
            var t, n, i, r, o, s;
            if (({
                    observer: i,
                    turtles: o,
                    links: n,
                    patches: r
                } = e), !(0 !== e.observer.perspective && i.targetagent && i.targetagent[1] >= 0)) return null;
            switch ([s, t] = i.targetagent, s) {
                case this.turtleType:
                    return e.turtles[t];
                case this.patchType:
                    return e.patches[t];
                case this.linkType:
                    return e.links[t]
            }
        }
        follow(e) {
            var t;
            return 2 === (t = e.observer.perspective) || 1 === t ? this.watch(e) : null
        }
        setZoom(e) {
            this._zoomLevel = Number.isInteger(e) ? Math.min(Math.max(0, e), Math.floor(this.worldWidth / 2), Math.floor(this.worldHeight / 2)) : null
        }
        repaint(e) {
            var t, n, i, r, o, s, a, l, d, c, u, h, p;
            if (l = this.follow(e), this.visibleCanvas.width = this.canvas.width, this.visibleCanvas.height = this.canvas.height, this.visibleCanvas.style.width = this.canvas.style.width, this.visibleCanvas.style.height = this.canvas.style.height, null != l)
                for (d = this.visibleCanvas.width, i = this.visibleCanvas.height, this.centerX = l.xcor, this.centerY = l.ycor, c = -this.xPcorToCanvas(this.centerX) + d / 2, h = -this.yPcorToCanvas(this.centerY) + i / 2, u = this.wrapX ? [c - d, c, c + d] : [c], p = this.wrapY ? [h - i, h, h + i] : [h], r = 0, s = u.length; r < s; r++)
                    for (t = u[r], o = 0, a = p.length; o < a; o++) n = p[o], this.visibleCtx.drawImage(this.canvas, t, n);
            else this.centerX = this.worldCenterX, this.centerY = this.worldCenterY, this.visibleCtx.drawImage(this.canvas, 0, 0);
            this._handleZoom()
        }
        _handleZoom() {
            var e, t, n, i;
            null !== this._zoomLevel && (t = (2 * this._zoomLevel + 1) * (2 * this.patchsize), e = this.visibleCanvas.width / 2 - t / 2, i = this.visibleCanvas.height / 2 - t / 2, (n = document.createElement("canvas")).width = this.visibleCanvas.width, n.height = this.visibleCanvas.height, n.getContext("2d").drawImage(this.visibleCanvas, 0, 0), this.visibleCtx.save(), this.visibleCtx.setTransform(1, 0, 0, 1, 0, 0), this.visibleCtx.clearRect(0, 0, this.visibleCanvas.width, this.visibleCanvas.height), this.visibleCtx.drawImage(n, e, i, t, t, 0, 0, this.visibleCanvas.width, this.visibleCanvas.height), this.visibleCtx.restore())
        }
    }
    return e.prototype.turtleType = 1, e.prototype.patchType = 2, e.prototype.linkType = 3, e
}.call(this), Rr = class {
    constructor(e) {
        this.view = e
    }
}, Or = class e extends Rr {
    constructor(e, t, n) {
        super(), this.importImage = this.importImage.bind(this), this.drawLine = this.drawLine.bind(this), this.view = e, this.turtleDrawer = t, this.repaintView = n, this.canvas = document.createElement("canvas"), this.canvas.id = "dlayer", this.ctx = this.canvas.getContext("2d")
    }
    resizeCanvas() {
        return this.canvas.width = this.view.canvas.width, this.canvas.height = this.view.canvas.height
    }
    clearDrawing() {
        return this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    importImage(t, n, i) {
        var r, o;
        $r(this, e), o = this.view.quality, (r = new Image).onload = () => {
            var e;
            e = this.ctx.imageSmoothingEnabled, this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(r, n * o, i * o, r.width * o, r.height * o), this.ctx.imageSmoothingEnabled = e, this.repaintView()
        }, r.src = t
    }
    importDrawing(e) {
        var t;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), (t = new Image).onload = () => {
            var e, n, i, r;
            e = this.canvas.width / this.canvas.height, i = t.width / t.height, r = this.canvas.width, n = this.canvas.height, e >= i ? r = i / e * this.canvas.width : n = e / i * this.canvas.height, this.ctx.drawImage(t, (this.canvas.width - r) / 2, (this.canvas.height - n) / 2, r, n), this.repaintView()
        }, t.src = e
    }
    _rgbToCss([e, t, n]) {
        return `rgb(${e}, ${t}, ${n})`
    }
    makeMockTurtleObject({
        x: e,
        y: t,
        shapeName: n,
        size: i,
        heading: r,
        color: o
    }) {
        return {
            xcor: e,
            ycor: t,
            shape: n,
            size: i,
            heading: r,
            color: o
        }
    }
    makeMockLinkObject({
        x1: e,
        y1: t,
        x2: n,
        y2: i,
        shapeName: r,
        color: o,
        heading: s,
        size: a,
        "directed?": l,
        "hidden?": d,
        midpointX: c,
        midpointY: u,
        thickness: h
    }) {
        return [{
            shape: r,
            color: o,
            heading: s,
            size: a,
            "directed?": l,
            "hidden?": d,
            midpointX: c,
            midpointY: u,
            thickness: h
        }, {
            xcor: e,
            ycor: t
        }, {
            xcor: n,
            ycor: i
        }]
    }
    stampTurtle(e) {
        var t;
        return t = this.makeMockTurtleObject(e), this.view.usePatchCoordinates(this.ctx)((() => this.view.withCompositing(this.compositingOperation(e.stampMode), this.ctx)((() => this.turtleDrawer.drawTurtle(t, this.ctx, !0)))))
    }
    stampLink(e) {
        var t;
        return t = this.makeMockLinkObject(e), this.view.usePatchCoordinates(this.ctx)((() => this.view.withCompositing(this.compositingOperation(e.stampMode), this.ctx)((() => this.turtleDrawer.linkDrawer.draw(...t, this.wrapX, this.wrapY, this.ctx, !0)))))
    }
    compositingOperation(e) {
        return "erase" === e ? "destination-out" : "source-over"
    }
    drawStamp({
        agentType: e,
        stamp: t
    }) {
        return "turtle" === e ? this.stampTurtle(t) : "link" === e ? this.stampLink(t) : void 0
    }
    drawLine({
        rgb: t,
        size: n,
        penMode: i,
        fromX: r,
        fromY: o,
        toX: s,
        toY: a
    }) {
        var l;
        if ($r(this, e), "up" !== i) return l = t, this.view.usePatchCoordinates(this.ctx)((() => (this.ctx.save(), this.ctx.strokeStyle = this._rgbToCss(l), this.ctx.lineWidth = n * this.view.onePixel, this.ctx.lineCap = "round", this.ctx.beginPath(), this.ctx.moveTo(r, o), this.ctx.lineTo(s, a), this.view.withCompositing(this.compositingOperation(i), this.ctx)((() => this.ctx.stroke())), this.ctx.restore())))
    }
    draw() {
        return this.events.forEach((e => {
            switch (e.type) {
                case "clear-drawing":
                    return this.clearDrawing();
                case "line":
                    return this.drawLine(e);
                case "stamp-image":
                    return this.drawStamp(e);
                case "import-drawing":
                    return this.importDrawing(e.imageBase64)
            }
        }))
    }
    repaint(e) {
        var t;
        return t = e.world, this.wrapX = t.wrappingallowedinx, this.wrapY = t.wrappingallowediny, this.events = e.drawingEvents, e.drawingEvents = [], this.canvas.width === this.view.canvas.width && this.canvas.height === this.view.canvas.height || this.resizeCanvas(), this.draw(), this.view.ctx.drawImage(this.canvas, 0, 0)
    }
}, Ur = function() {
    class e extends Rr {
        constructor(e) {
            super(), this.view = e
        }
        outer() {
            return 10 / this.view.patchsize
        }
        middle() {
            return 8 / this.view.patchsize
        }
        inner() {
            return 4 / this.view.patchsize
        }
        drawCircle(e, t, n, i, r) {
            var o;
            return (o = this.view.ctx).fillStyle = r, o.beginPath(), o.arc(e, t, i / 2, 0, 2 * Math.PI), o.arc(e, t, n / 2, 0, 2 * Math.PI, !0), o.fill()
        }
        drawSpotlight(e, t, n, i) {
            var r;
            return (r = this.view.ctx).lineWidth = this.view.onePixel, r.beginPath(), i && (this.view.drawWrapped(e, t, n + this.outer(), ((e, t) => (r.moveTo(e, t), r.arc(e, t, (n + this.outer()) / 2, 0, 2 * Math.PI, !0)))), r.rect(this.view.minpxcor - .5, this.view.minpycor - .5, this.view.worldWidth, this.view.worldHeight), r.fillStyle = this.dimmed, r.fill()), this.view.drawWrapped(e, t, n + this.outer(), ((e, t) => (this.drawCircle(e, t, n, n + this.outer(), this.dimmed), this.drawCircle(e, t, n, n + this.middle(), this.spotlightOuterBorder), this.drawCircle(e, t, n, n + this.inner(), this.spotlightInnerBorder))))
        }
        adjustSize(e) {
            return Math.max(e, this.view.worldWidth / 16, this.view.worldHeight / 16)
        }
        dimensions(e) {
            return null != e.xcor ? [e.xcor, e.ycor, 2 * e.size] : null != e.pxcor ? [e.pxcor, e.pycor, 2] : [e.midpointx, e.midpointy, e.size]
        }
        repaint(e) {
            return this.view.usePatchCoordinates()((() => {
                var t, n, i, r;
                if (null != (n = this.view.watch(e))) return [i, r, t] = this.dimensions(n), this.drawSpotlight(i, r, this.adjustSize(t), 3 === e.observer.perspective)
            }))
        }
    }
    return e.prototype.dimmed = `rgba(0, 0, 50, ${100/255})`, e.prototype.spotlightInnerBorder = `rgba(200, 255, 255, ${100/255})`, e.prototype.spotlightOuterBorder = `rgba(200, 255, 255, ${50/255})`, e.prototype.clear = "white", e
}.call(this), Dr = class extends Rr {
    constructor(e) {
        super(), this.view = e, this.turtleShapeDrawer = new Tr({}, this.view.onePixel), this.linkDrawer = new Mr(this.view, {})
    }
    drawTurtle(e, t = this.view.ctx, n = !1) {
        var i, r, o;
        if (!e["hidden?"] && (r = e.xcor, o = e.ycor, i = e.size, this.view.drawWrapped(r, o, i, ((n, i) => this.drawTurtleAt(e, n, i, t))), !n)) return this.view.drawLabel(r + e.size / 2, o - e.size / 2, e.label, e["label-color"], t)
    }
    drawTurtleAt(e, t, n, i) {
        var r, o, s, a, l;
        return o = e.heading, s = e.size, r = (180 - o) / 360 * 2 * Math.PI, l = e.shape, a = this.turtleShapeDrawer.shapes[l] || Pr, i.save(), i.translate(t, n), a.rotate ? i.rotate(r) : i.rotate(Math.PI), i.scale(s, s), this.turtleShapeDrawer.drawShape(i, e.color, l, 1 / s), i.restore()
    }
    drawLink(e, t, n, i, r) {
        return this.linkDrawer.draw(e, t, n, i, r)
    }
    repaint(e) {
        var t, n, i, r, o, s;
        return s = e.world, o = e.turtles, t = e.links, r = null != s.turtleshapelist && s.turtleshapelist !== this.turtleShapeDrawer.shapes, n = this.turtleShapeDrawer.onePixel !== this.view.onePixel, (r || n) && (this.turtleShapeDrawer = new Tr(null != (i = s.turtleshapelist) ? i : this.turtleShapeDrawer.shapes, this.view.onePixel)), s.linkshapelist !== this.linkDrawer.shapes && null != s.linkshapelist && (this.linkDrawer = new Mr(this.view, s.linkshapelist)), this.view.usePatchCoordinates()((() => {
            this.drawAgents(t, null != s.linkbreeds ? s.linkbreeds : ["LINKS"], (e => this.drawLink(e, o[e.end1], o[e.end2], s.wrappingallowedinx, s.wrappingallowediny))), this.view.ctx.lineWidth = this.onePixel, this.drawAgents(o, null != s.turtlebreeds ? s.turtlebreeds : ["TURTLES"], (e => this.drawTurtle(e)))
        }))
    }
    drawAgents(e, t, n) {
        var i, r, o, s, a, l, d, c;
        for (i in s = {}, e) r = e[i], d = [], null == s[o = r.breed.toUpperCase()] ? s[o] = d : d = s[o], d.push(r);
        for (c = [], a = 0, l = t.length; a < l; a++) null != s[o = t[a]] ? (d = s[o], c.push(function() {
            var e, t, i;
            for (i = [], e = 0, t = d.length; e < t; e++) r = d[e], i.push(n(r));
            return i
        }())) : c.push(void 0);
        return c
    }
}, Nr = class {
    constructor(e) {
        this.view = e, this.scratchCanvas = document.createElement("canvas"), this.scratchCtx = this.scratchCanvas.getContext("2d")
    }
    colorPatches(e) {
        var t, n, i, r, o, s, a, l, d, c, u, h, p, f, g;
        for (g = this.view.worldWidth, i = this.view.worldHeight, c = this.view.minpxcor, l = this.view.maxpxcor, u = this.view.minpycor, d = this.view.maxpycor, this.scratchCanvas.width = g, this.scratchCanvas.height = i, o = this.scratchCtx.createImageData(g, i), r = a = 0, f = 4 * ((d - u) * g + (l - c)); 0 <= f ? a < f : a > f; r = 0 <= f ? ++a : --a) null != (h = e[r]) && (s = 4 * r, [p, n, t] = Rt(h.pcolor), o.data[s + 0] = p, o.data[s + 1] = n, o.data[s + 2] = t, o.data[s + 3] = 255);
        return this.scratchCtx.putImageData(o, 0, 0), this.view.ctx.drawImage(this.scratchCanvas, 0, 0, this.view.canvas.width, this.view.canvas.height)
    }
    labelPatches(e) {
        return this.view.usePatchCoordinates()((() => {
            var t, n, i;
            for (t in i = [], e) n = e[t], i.push(this.view.drawLabel(n.pxcor + .5, n.pycor - .5, n.plabel, n["plabel-color"]));
            return i
        }))
    }
    clearPatches() {
        return this.view.ctx.fillStyle = "black", this.view.ctx.fillRect(0, 0, this.view.canvas.width, this.view.canvas.height)
    }
    repaint(e) {
        var t, n;
        if (n = e.world, t = e.patches, n.patchesallblack ? this.clearPatches() : this.colorPatches(t), n.patcheswithlabels) return this.labelPatches(t)
    }
};
var Fr, jr, Hr, qr = Wr;
Hr = function(e, t, n, i, r, o, s, a) {
    var l, d, c, u, h, p, f, g;
    return d = "string" == typeof e ? document.querySelector(e) : e, c = null, p = function() {
        return c.redraw(), c.updateWidgets()
    }, h = function(e, t, n, ...i) {
        return c.reportError(e, t, n, ...i)
    }, u = Gn(d, t, n, i, r, o, s, (function(e) {
        return a.isReporter(e)
    })), d.querySelector(".netlogo-model").focus({
        preventScroll: !0
    }), g = t.find((function({
        type: e
    }) {
        return "view" === e
    })), u.set("primaryView", g), f = new qr(d.querySelector(".netlogo-view-container"), g.fontSize), jr(g, f.model.world), Fr([
        [g, "fontSize"],
        [f.view, "fontSize"]
    ], g.fontSize), l = Er(u, f, d, a), c = new Vt(u, f, l), Ke(h, t, p, c.plotSetupHelper()), ti(c), Zn(u), Qn(u), c
}, Fr = function(e, t) {
    var n, i, r, o, s;
    for (n = t, i = 0, o = e.length; i < o; i++)[s, r] = e[i], Object.defineProperty(s, r, {
        get: function() {
            return n
        },
        set: function(e) {
            return n = e
        }
    })
}, jr = function(e, t) {
    var n, i, r;
    for (r in i = {
            maxPxcor: "maxpxcor",
            maxPycor: "maxpycor",
            minPxcor: "minpxcor",
            minPycor: "minpycor",
            patchSize: "patchsize",
            wrappingAllowedInX: "wrappingallowedinx",
            wrappingAllowedInY: "wrappingallowediny"
        }) n = i[r], Fr([
        [e.dimensions, r],
        [t, n]
    ], e.dimensions[r])
};
var Xr, Yr, Kr, Gr, Zr = Hr,
    Jr = [].splice;
Kr = null != (Gr = "undefined" != typeof performance && null !== performance ? performance.now.bind(performance) : void 0) ? Gr : Date.now.bind(Date), Yr = eval, Xr = function() {
    class n {
        constructor(n, i, o, s, a, l, d, c, u, h, p, f, g, m) {
            var v, w;
            this.eventLoop = this.eventLoop.bind(this), this.promptFilename = this.promptFilename.bind(this), this.tortoise = n, this.compiler = o, this.rewriters = s, this.locale = h, this.nlogoSource = f, this._eventLoopTimeout = -1, this._lastRedraw = 0, this._lastUpdate = 0, this.drawEveryFrame = !1, this.widgetController = Zr(i, l, d, c, u, this.nlogoSource, p, this.compiler), (v = this.widgetController.ractive).on("*.recompile", ((e, t) => this.recompile(t))), v.on("*.recompile-sync", ((e, t) => this.recompileSync(t, "", "", {}))), v.on("*.recompile-for-plot", ((e, t, n, i, r) => this.recompile(t, n, i, r))), v.on("export-nlogo", ((e, t) => this.exportNlogo(t))), v.on("export-html", ((e, t) => this.exportHtml(t))), v.on("open-new-file", (e => this.openNewFile())), v.on("*.revert-wip", (e => this.revertWorkInProgress())), v.on("*.undo-revert", (e => this.undoRevert())), v.on("*.run", ((e, t, n) => this.run(t, n))), v.on("*.set-global", ((e, t, n) => this.setGlobal(t, n))), r.forEach((function(n) {
                return a.forEach((function(i) {
                    null != i[n.name] && v.on(`*.${n.name}`, (function(r, ...o) {
                        var s, a;
                        s = e(), a = t(n.args, o), i[n.name](s, a)
                    }))
                }))
            })), v.on("*.recompile-procedures", ((e, t, n, i) => this.recompileProcedures(t, n, i))), v.set("lastCompileFailed", m), window.modelConfig = Object.assign(null != (w = window.modelConfig) ? w : {}, this.widgetController.configs), window.modelConfig.version = "2.10.7", Yr(g), workspace.i18nBundle.supports(this.locale) ? workspace.i18nBundle.switch(this.locale) : (console.warn(`Unsupported locale '${this.locale}', reverting to 'en_us'.`), this.locale = "en_us")
        }
        modelTitle() {
            return this.widgetController.ractive.get("modelTitle")
        }
        startLoop() {
            ProcedurePrims.hasCommand("startup") && (Ve("startup", this.widgetController.reportError, (function() {
                return ProcedurePrims.callCommand("startup")
            })), this.widgetController.ractive.fire("startup-procedure-run")), this.widgetController.redraw(), this.widgetController.updateWidgets(), requestAnimationFrame(this.eventLoop), this.widgetController.ractive.set("isSessionLoopRunning", !0), this.widgetController.ractive.fire("session-loop-started")
        }
        updateDelay() {
            var e, t, n, i;
            return i = this.widgetController.widgets().filter((function({
                type: e
            }) {
                return "view" === e
            }))[0], t = this.widgetController.speed(), e = 1e3 / i.frameRate, t > 0 ? e * (1 - (n = Math.pow(Math.abs(t), .5))) : 1e3 * (n = Math.pow(Math.abs(t), 4)) + e * (1 - n)
        }
        redrawDelay() {
            var e;
            return this.widgetController.speed() > 0 ? 1e3 * (e = Math.pow(Math.abs(this.widgetController.speed()), 2)) + 33.333333333333336 * (1 - e) : 33.333333333333336
        }
        eventLoop(e) {
            var t, n, i, r, o;
            if (this._eventLoopTimeout = requestAnimationFrame(this.eventLoop), o = Math.min(this._lastRedraw + this.redrawDelay(), Kr() + 100), i = this.drawEveryFrame ? 1 : (Kr() - this._lastUpdate) / this.updateDelay(), !this.widgetController.ractive.get("isEditing"))
                for (t = n = 1, r = i; n <= r && (this._lastUpdate = Kr(), this.widgetController.runForevers(), !(Kr() >= o)); t = n += 1);
            return Updater.hasUpdates() && (t > i || Kr() - this._lastRedraw > this.redrawDelay() || this.drawEveryFrame) && (this._lastRedraw = Kr(), this.widgetController.redraw()), this.widgetController.updateWidgets()
        }
        teardown() {
            return this.widgetController.teardown(), cancelAnimationFrame(this._eventLoopTimeout)
        }
        rewriteCode(e) {
            var t;
            return t = function(e, t) {
                return null != t.injectCode ? t.injectCode(e) : e
            }, this.rewriters.reduce(t, e)
        }
        rewriteExport(e) {
            var t;
            return t = function(e, t) {
                return null != t.exportCode ? t.exportCode(e) : e
            }, this.rewriters.reduce(t, e)
        }
        rewriterCommands() {
            var e;
            return e = function(e, t) {
                return null != t.getExtraCommands ? e.concat(t.getExtraCommands()) : e
            }, this.rewriters.reduce(e, [])
        }
        rewriteErrors(e, t, n) {
            var i;
            return n = n.map((e => (e.lineNumber = t.slice(0, e.start).split("\n").length, e))), i = function(n, i) {
                return null != i.updateErrors ? i.updateErrors(e, t, n) : n
            }, this.rewriters.reduce(i, n)
        }
        recompileSync(e, t, n, i) {
            var r, o, s, a, l, d, u, h, p, f, g, m;
            o = this.widgetController.code(), u = this.widgetController.widgets(), g = this.rewriteCode(o), d = this.rewriterCommands(), s = {
                code: g,
                widgets: u.map(c),
                commands: d,
                reporters: [],
                turtleShapes: "undefined" != typeof turtleShapes && null !== turtleShapes ? turtleShapes : [],
                linkShapes: "undefined" != typeof linkShapes && null !== linkShapes ? linkShapes : []
            }, this.widgetController.ractive.fire("recompile-start", e, g, o);
            try {
                return (f = this.compiler.fromModel(s)).model.success ? (m = world.exportState(), r = Object.values(world.breedManager.breeds()).map((function(e) {
                    return [e.name, e.getShape()]
                })), this.widgetController.redraw(), t !== n && ((p = this.widgetController.configs.plotOps)[t].dispose(), delete p[t]), this.widgetController.ractive.set("isStale", !1), this.widgetController.ractive.set("lastCompiledCode", o), this.widgetController.ractive.set("lastCompileFailed", !1), this.widgetController.viewController.resetModel(), this.widgetController.redraw(), this.widgetController.freshenUpWidgets(u, Yr(f.widgets)), Yr(f.model.result), workspace.i18nBundle.switch(this.locale), r.forEach((function([e, t]) {
                    return world.breedManager.get(e).setShape(t)
                })), h = plotManager.getPlots(), m.plotManager = Re(m.plotManager, h, i, t, n), world.importState(m), f.commands.forEach((function(e) {
                    if (e.success) return new Function(e.result)()
                })), this.rewriters.forEach((function(e) {
                    return "function" == typeof e.compileComplete ? e.compileComplete() : void 0
                })), this.widgetController.ractive.fire("recompile-complete", e, g, o)) : (this.widgetController.ractive.set("lastCompileFailed", !0), a = this.rewriteErrors(o, g, f.model.result), this.widgetController.reportError("compiler", "recompile", a))
            } catch (e) {
                return l = e, this.widgetController.reportError("compiler", "recompile", [l.toString()])
            }
        }
        recompile(e, t = "", n = "", i = {}) {
            this.tortoise.startLoading((() => {
                this.recompileSync(e, t, n, i), this.tortoise.finishLoading()
            }))
        }
        recompileProcedures(e, t, n) {
            var i, r;
            try {
                (r = this.compiler.compileProceduresIncremental(e, t)).success ? (Yr(r.result), n()) : this.widgetController.reportError("compiler", "recompile-procedures", r.result)
            } catch (e) {
                i = e, this.widgetController.reportError("compiler", "recompile-procedures", [i.toString()])
            } finally {
                this.tortoise.finishLoading()
            }
        }
        getCode() {
            return this.widgetController.code()
        }
        getInfo() {
            return P(this.widgetController.ractive.get("info"))
        }
        getNlogo() {
            var e, t, n;
            return t = this.getInfo(), e = this.rewriteExport(this.widgetController.code()), n = this.widgetController.widgets().map(c), this.compiler.exportNlogo({
                info: t,
                code: e,
                widgets: n,
                turtleShapes: turtleShapes,
                linkShapes: linkShapes
            })
        }
        exportNlogo() {
            var e, t, n;
            if (null != (t = this.promptFilename(".nlogo"))) return (n = this.getNlogo()).success ? (e = new Blob([n.result], {
                type: "text/plain:charset=utf-8"
            }), saveAs(e, t), this.widgetController.ractive.fire("nlogo-exported", t, n.result)) : this.widgetController.reportError("compiler", "export-nlogo", n.result)
        }
        promptFilename(e) {
            var t;
            return t = this.modelTitle() + e, window.prompt("Filename:", t)
        }
        exportHtml() {
            var e, t;
            if (null != (e = this.promptFilename(".html"))) return (t = new XMLHttpRequest).open("GET", window.standaloneURL), t.onreadystatechange = () => {
                var n, i, r, o, s;
                if (t.readyState === t.DONE) return 200 === t.status ? (r = this.getNlogo()).success ? ((o = (n = (new DOMParser).parseFromString(t.responseText, "text/html")).querySelector("#nlogo-code")).textContent = r.result, o.dataset.filename = e.replace(/\.html$/, ".nlogo"), (s = document.createElement("div")).appendChild(n.documentElement), i = new Blob([s.innerHTML], {
                    type: "text/html:charset=utf-8"
                }), saveAs(i, e), this.widgetController.ractive.fire("html-exported", e, r.result)) : this.widgetController.reportError("compiler", "export-html", r.result) : alert("Couldn't get standalone page")
            }, t.send("")
        }
        openNewFile() {
            window.confirm("Are you sure you want to open a new model?\n\nYour work in progress will be saved to your browser's cache to be reloaded the next time you load this model, but exporting your work is the best way to make sure you have a copy.") && (parent !== window ? parent.postMessage({
                hash: "NewModel",
                type: "nlw-set-hash"
            }, "*") : window.postMessage({
                type: "nlw-open-new"
            }, "*"))
        }
        revertWorkInProgress() {
            window.postMessage({
                type: "nlw-revert-wip"
            }, "*")
        }
        undoRevert() {
            window.postMessage({
                type: "nlw-undo-revert"
            }, "*")
        }
        asyncRunBabyBehaviorSpace(e, t) {
            return this.tortoise.startLoading((() => (t(this.runBabyBehaviorSpace(e)), this.tortoise.finishLoading())))
        }
        runBabyBehaviorSpace({
            experimentName: e,
            parameterSet: t,
            repetitionsPerCombo: n,
            metrics: i,
            setupCode: r,
            goCode: o,
            stopConditionCode: s,
            iterationLimit: a
        }) {
            var l, d, u, h, p, f, g, m, v, w, y, b, x, k, _, C, E, S;
            return ({
                last: u,
                map: h,
                toObject: C,
                zip: S
            } = tortoise_require("brazier/array")), ({
                pipeline: v
            } = tortoise_require("brazier/function")), b = this.rewriteCode(this.widgetController.code()), m = this.widgetController.widgets().map(c), y = this.compiler.fromModel({
                code: b,
                widgets: m,
                commands: [r, o],
                reporters: i.map((function(e) {
                    return e.reporter
                })).concat([s]),
                turtleShapes: [],
                linkShapes: []
            }), E = function(e, t) {
                return function({
                    result: n,
                    success: i
                }) {
                    return new Function(`${e}${i?n:t}`)
                }
            }, [k, d] = y.commands.map(E("", "")), w = y.reporters.map(E("return ", "-1")), [...f] = w, Jr.call(f, -1), _ = E("return ", "false")(u(y.reporters)), l = function([{
                reporter: e,
                interval: t
            }, n]) {
                return [e, {
                    reporter: n,
                    interval: t
                }]
            }, p = {
                experimentName: e,
                parameterSet: t,
                repetitionsPerCombo: n,
                metrics: v(S(i), h(l), C)(f),
                setup: k,
                go: d,
                stopCondition: _,
                iterationLimit: a
            }, x = world.observer.setGlobal.bind(world.observer), Ie(p, x, g = function(e) {
                var t;
                return Array.isArray(e) ? e.map(g) : "boolean" == (t = typeof e) || "number" === t || "string" === t ? e : workspace.dump(e)
            })
        }
        setGlobal(e, t) {
            world.observer.setGlobal(e, t)
        }
        run(e, t) {
            var n, i, r, o;
            i = this.compiler.compileCommand(t), ({
                result: r,
                success: o
            } = i), o ? (n = new Function(r), Ve(e, this.widgetController.reportError, n, t)) : this.widgetController.reportError("compiler", e, r)
        }
        runReporter(e) {
            var t, n, i, r;
            if (n = this.compiler.compileReporter(e), ({
                    result: i,
                    success: r
                } = n), !r) return {
                success: !1,
                error: `Reporter compile error: ${i}`
            };
            t = new Function(`return ( ${i} );`);
            try {
                return {
                    success: !0,
                    value: t()
                }
            } catch (e) {
                return {
                    success: !1,
                    error: `Runtime error: ${e.toString()}`
                }
            }
        }
    }
    return n.prototype.widgetController = void 0, n
}.call(this);
var Qr, eo, to, no, io, ro, oo, so, ao, lo = Xr;
so = function(e, t, n, i, r, o, s, a, l, d) {
    var c, u, h, p, f;
    return ({
        code: c,
        info: u,
        model: {
            result: h
        },
        widgets: f
    } = r), p = oo(f), u = A(u), new lo(Qr, e, t, n, i, p, c, u, o, s, a, l, h, d)
}, to = function(e, t, n, i, r, o, s = [], a = []) {
    ao((function() {
        return no(e, t, n, i, r, o, s, a), eo()
    }))
}, ro = function(e, t, n, i, r, o = [], s = []) {
    ao((function() {
        var a;
        (a = new XMLHttpRequest).open("GET", e), a.onreadystatechange = function() {
            var l, d;
            a.readyState === a.DONE && (0 === a.status || a.status >= 400 ? r({
                type: "failure",
                source: "load-from-url",
                errors: [e]
            }) : (l = a.responseText, d = new B(e, l), no(d, t, n, !1, i, r, o, s)), eo())
        }, a.send("")
    }))
}, no = function(e, t, i, o, s, a, l, d) {
    var c, u, h, p, f, g, m, v, w, y;
    c = new BrowserCompiler, p = n(r, d), w = e.nlogo, y = "disabled", null !== s && (w = s(e), y = o || w === e.nlogo ? "enabled-and-empty" : "enabled-with-wip"), g = function(e, t) {
        return null != t.injectNlogo ? t.injectNlogo(e) : e
    }, m = l.reduce(g, w), h = function(e, t) {
        return null != t.getExtraCommands ? e.concat(t.getExtraCommands()) : e
    }, u = l.reduce(h, []), p("compile-start", m, w), (f = c.fromNlogo(m, u)).model.success ? (f.code = w === m ? f.code : E(w)[0].slice(0, -1), p("compile-complete", m, w, "success"), a({
        type: "success",
        session: so(t, c, l, d, f, !1, i, y, e, !1)
    }), f.commands.forEach((function(e) {
        if (e.success) return new Function(e.result)()
    })), l.forEach((function(e) {
        return "function" == typeof e.compileComplete ? e.compileComplete() : void 0
    }))) : null != (v = io(w, c)) ? (p("compile-complete", m, w, "failure", "compile-recoverable"), a({
        type: "failure",
        source: "compile-recoverable",
        session: so(t, c, l, d, v, !1, i, y, e, !0),
        errors: f.model.result
    }), f.commands.forEach((function(e) {
        if (e.success) return new Function(e.result)()
    })), l.forEach((function(e) {
        return "function" == typeof e.compileComplete ? e.compileComplete() : void 0
    }))) : (p("compile-complete", m, w, "failure", "compile-fatal"), a({
        type: "failure",
        source: "compile-fatal",
        errors: f.model.result
    }))
}, io = function(e, t) {
    var n, i, r, o;
    return 12 !== (o = E(e)).length ? null : (i = o[0].slice(0, -1), o[0] = "", n = T(o), (r = t.fromNlogo(n, [])).model.success ? (r.code = i, r) : null)
}, Qr = {
    createSource: function(e, t, n) {
        switch (e) {
            case "disk":
                return new I(t, n);
            case "new":
                return new L(n);
            case "script-element":
                return new M(t, n);
            case "url":
                return new B(t, n)
        }
    },
    startLoading: ao = function(e) {
        document.querySelector("#loading-overlay").style.display = "", null != e && setTimeout(e, 20)
    },
    finishLoading: eo = function() {
        document.querySelector("#loading-overlay").style.display = "none"
    },
    fromNlogo: to,
    fromNlogoSync: no,
    fromURL: ro
}, oo = eval;
var co = Qr,
    uo = document.getElementById("loading-overlay"),
    ho = uo,
    po = document.querySelector("#netlogo-model-container"),
    fo = document.querySelector("#nlogo-code");
const go = new URLSearchParams(window.location.search),
    mo = Array.from(go.keys());
if (1 === mo.length) {
    const e = mo[0];
    e.startsWith("http") && "" === go.get(e) && (go.delete(e), go.set("url", e), window.location.search = go.toString())
}
var vo;
try {
    vo = window.localStorage
} catch (e) {
    vo = _()
}
const wo = be(vo),
    yo = new Ee;
yo.applyStorage(wo), yo.applyQueryParams(go);
const bo = [],
    [xo, ko] = (() => {
        if (yo.workInProgress.enabled) {
            const e = new k("netLogoWebWip", vo),
                t = new N(e, yo.workInProgress.storageTag),
                n = e => {
                    t.setNlogoSource(e);
                    const n = t.getWip();
                    return null !== n ? (e.setModelTitle(n.title), n.nlogo) : e.nlogo
                };
            return bo.push(t), [t, n]
        }
        return [null, null]
    })();
var _o = function(e) {
    return null != e && "" != e ? "NetLogo Web: " + e : "NetLogo Web"
};
globalThis.session = null;
var Co = function(e) {
    globalThis.session = e, yo.workInProgress.enabled && xo.setSession(globalThis.session), globalThis.session.widgetController.ractive.set("speed", yo.speed), globalThis.session.widgetController.ractive.set("isVertical", yo.useVerticalLayout), document.title = _o(globalThis.session.modelTitle()), ho = po, globalThis.session.startLoop(), To.setWidgetController(globalThis.session.widgetController)
};
const Eo = fo.textContent.length > 0,
    So = parent !== window,
    To = new ye(document.getElementById("alert-container"), Eo),
    Po = document.getElementById("alert-dialog");

function Ao(e) {
    "success" === e.type ? Co(e.session) : ("compile-recoverable" === e.source ? Co(e.session) : (ho = Po, uo.style.display = "none"), Io("compiler-error", e.source, e.errors))
}
if (bo.push(To), yo.events.enableDebug) {
    const e = s(r);
    bo.push(e)
}
if (So && yo.events.enableIframeRelay) {
    const e = a(r, yo.events.iframeRelayEvents, yo.events.iframeRelayEventsTag);
    bo.push(e)
}
const Io = n(r, bo);
if (So) {
    y((() => globalThis.session))
}
var Lo = function(e, t, n, i) {
    To.hide(), globalThis.session && globalThis.session.teardown(), ho = uo;
    const r = co.createSource(t, n, e);
    co.fromNlogo(r, po, yo.locale, i, ko, Ao, [], bo)
};
if (fo.textContent.length > 0) {
    const e = fo.textContent,
        t = fo.dataset.filename;
    Io("model-load", "script-element");
    const n = co.createSource("script-element", t, e);
    co.fromNlogo(n, po, yo.locale, !1, ko, Ao, [], bo)
} else if (go.has("url")) {
    const e = go.get("url").trim();
    e.startsWith("http") && ! function(e) {
        const t = new URL(e);
        if ("https:" === t.protocol || "http:" === window.location.protocol) return !0;
        const n = window.location,
            i = t.hostname === n.hostname,
            r = "ccl.northwestern.edu" === t.hostname,
            o = i && window.debugMode ? "9443" : "443",
            s = `https://${t.hostname}:${o}${t.pathname}`;
        if (!i && !r && So) return To.reportProtocolError(t, s), ho = Po, uo.style.display = "none", !1;
        var a = "";
        go.has("url") ? (go.set("url", s), a = go.toString()) : a = s;
        const l = `https://${n.host}${n.pathname}?${a}`;
        return i || r ? (window.location.href = l, !1) : (To.reportProtocolError(t, s, l), ho = Po, uo.style.display = "none", !1)
    }(e) || (Io("model-load", "url", e), co.fromURL(e, po, yo.locale, ko, Ao, [], bo))
} else Io("model-load", "new-model"), Lo(X, "new", "NewModel", !1);
if (window.addEventListener("message", (function(e) {
        switch (e.data.type) {
            case "nlw-load-model":
                Io("model-load", "file", e.data.path), Lo(e.data.nlogo, "disk", e.data.path, !1);
                break;
            case "nlw-open-new":
                Io("model-load", "new-model"), go.delete("url"), window.location.search = go.toString(), Lo(X, "new", "NewModel", !1);
                break;
            case "nlw-revert-wip": {
                Io("revert-work-in-progress"), xo.revertWip();
                const e = xo.getNlogoSource();
                Lo(e.nlogo, e.type, "url" === e.type ? encodeURI(e.url) : e.fileName, !1);
                break
            }
            case "nlw-undo-revert": {
                Io("undo-revert"), xo.undoRevert();
                const e = xo.getNlogoSource();
                Lo(e.nlogo, e.type, "url" === e.type ? encodeURI(e.url) : e.fileName, !0);
                break
            }
            case "nlw-update-model-state":
                globalThis.session.widgetController.setCode(e.data.codeTabContents);
                break;
            case "run-baby-behaviorspace":
                globalThis.session.asyncRunBabyBehaviorSpace(e.data.config, (function(t) {
                    e.source.postMessage({
                        type: "baby-behaviorspace-results",
                        id: e.data.id,
                        data: t
                    }, "*")
                }));
                break;
            case "nlw-export-model":
                var t = session.getNlogo();
                e.source.postMessage({
                    type: "nlw-export-model-results",
                    id: e.data.id,
                    export: t
                }, "*")
        }
    })), So) {
    var zo = "",
        Mo = "";
    window.setInterval((function() {
        !globalThis.session || ho.offsetWidth === zo && ho.offsetHeight === Mo && document.title == _o(globalThis.session.modelTitle()) || (document.title = _o(globalThis.session.modelTitle()), zo = ho.offsetWidth, Mo = ho.offsetHeight, parent.postMessage({
            width: ho.offsetWidth,
            height: ho.offsetHeight,
            title: document.title,
            type: "nlw-resize"
        }, "*"))
    }), 200)
}