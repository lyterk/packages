var CodeMirror = {
  "scrollbarModel": {},
  "Pos": function () {},
  "cmpPos": function () {},
  "colorize": function () {},
  "inputStyles": {},
  "wheelEventPixels": function () {},
  "changeEnd": function () {},
  "defaults": {},
  "optionHandlers": {},
  "Init": {},
  "modes": {},
  "mimeModes": {},
  "defineMode": function () {},
  "defineMIME": function () {},
  "resolveMode": function () {},
  "getMode": function () {},
  "modeExtensions": {},
  "extendMode": function () {},
  "defineExtension": function () {},
  "defineDocExtension": function () {},
  "defineOption": function () {},
  "defineInitHook": function () {},
  "helpers": {},
  "registerHelper": function () {},
  "registerGlobalHelper": function () {},
  "copyState": function () {},
  "showHint": function () {},
  "startState": function () {},
  "innerMode": function () {},
  "commands": {},
  "keyMap": {},
  "normalizeKeyMap": function () {},
  "lookupKey": function () {},
  "isModifierKey": function () {},
  "keyName": function () {},
  "fromTextArea": function () {},
  "StringStream": function () {},
  "TextMarker": function () {},
  "SharedTextMarker": function () {},
  "LineWidget": function () {},
  "Line": function () {},
  "Doc": function () {},
  "e_preventDefault": function () {},
  "e_stopPropagation": function () {},
  "e_stop": function () {},
  "on": function () {},
  "off": function () {},
  "signal": function () {},
  "Pass": {},
  "countColumn": function () {},
  "findColumn": function () {},
  "isWordChar": function () {},
  "contains": function () {},
  "rmClass": function () {},
  "addClass": function () {},
  "splitLines": function () {},
  "keyNames": {},
  "version": {}
};
CodeMirror.prototype = {
  "constructor": function () {},
  "focus": function () {},
  "setOption": function () {},
  "getOption": function () {},
  "getDoc": function () {},
  "addKeyMap": function () {},
  "removeKeyMap": function () {},
  "addOverlay": function () {},
  "removeOverlay": function () {},
  "indentLine": function () {},
  "indentSelection": function () {},
  "getTokenAt": function () {},
  "getLineTokens": function () {},
  "getTokenTypeAt": function () {},
  "getModeAt": function () {},
  "getHelper": function () {},
  "getHelpers": function () {},
  "getStateAfter": function () {},
  "cursorCoords": function () {},
  "charCoords": function () {},
  "coordsChar": function () {},
  "lineAtHeight": function () {},
  "heightAtLine": function () {},
  "defaultTextHeight": function () {},
  "defaultCharWidth": function () {},
  "setGutterMarker": function () {},
  "clearGutter": function () {},
  "lineInfo": function () {},
  "getViewport": function () {},
  "addWidget": function () {},
  "triggerOnKeyDown": function () {},
  "triggerOnKeyPress": function () {},
  "triggerOnKeyUp": function () {},
  "execCommand": function () {},
  "triggerElectric": function () {},
  "findPosH": function () {},
  "moveH": function () {},
  "deleteH": function () {},
  "findPosV": function () {},
  "moveV": function () {},
  "findWordAt": function () {},
  "toggleOverwrite": function () {},
  "hasFocus": function () {},
  "isReadOnly": function () {},
  "scrollTo": function () {},
  "getScrollInfo": function () {},
  "scrollIntoView": function () {},
  "setSize": function () {},
  "operation": function () {},
  "refresh": function () {},
  "swapDoc": function () {},
  "getInputField": function () {},
  "getWrapperElement": function () {},
  "getScrollerElement": function () {},
  "getGutterElement": function () {},
  "on": function () {},
  "off": function () {},
  "getValue": function () {},
  "setValue": function () {},
  "replaceRange": function () {},
  "getRange": function () {},
  "getLine": function () {},
  "getLineHandle": function () {},
  "getLineNumber": function () {},
  "getLineHandleVisualStart": function () {},
  "lineCount": function () {},
  "firstLine": function () {},
  "lastLine": function () {},
  "clipPos": function () {},
  "getCursor": function () {},
  "listSelections": function () {},
  "somethingSelected": function () {},
  "setCursor": function () {},
  "setSelection": function () {},
  "extendSelection": function () {},
  "extendSelections": function () {},
  "extendSelectionsBy": function () {},
  "setSelections": function () {},
  "addSelection": function () {},
  "getSelection": function () {},
  "getSelections": function () {},
  "replaceSelection": function () {},
  "replaceSelections": function () {},
  "undo": function () {},
  "redo": function () {},
  "undoSelection": function () {},
  "redoSelection": function () {},
  "setExtending": function () {},
  "getExtending": function () {},
  "historySize": function () {},
  "clearHistory": function () {},
  "markClean": function () {},
  "changeGeneration": function () {},
  "isClean": function () {},
  "getHistory": function () {},
  "setHistory": function () {},
  "addLineClass": function () {},
  "removeLineClass": function () {},
  "addLineWidget": function () {},
  "removeLineWidget": function () {},
  "markText": function () {},
  "setBookmark": function () {},
  "findMarksAt": function () {},
  "findMarks": function () {},
  "getAllMarks": function () {},
  "posFromIndex": function () {},
  "indexFromPos": function () {},
  "linkedDoc": function () {},
  "unlinkDoc": function () {},
  "iterLinkedDocs": function () {},
  "getMode": function () {},
  "splitLines": function () {},
  "lineSeparator": function () {},
  "eachLine": function () {}
};
CodeMirror.StringStream.prototype = {
  "eol": function () {},
  "sol": function () {},
  "peek": function () {},
  "next": function () {},
  "eat": function () {},
  "eatWhile": function () {},
  "eatSpace": function () {},
  "skipToEnd": function () {},
  "skipTo": function () {},
  "backUp": function () {},
  "column": function () {},
  "indentation": function () {},
  "match": function () {},
  "current": function () {},
  "hideFirstChars": function () {}
};
CodeMirror.TextMarker.prototype = {
  "on": function () {},
  "off": function () {},
  "clear": function () {},
  "find": function () {},
  "changed": function () {},
  "attachLine": function () {},
  "detachLine": function () {}
};
CodeMirror.SharedTextMarker.prototype = {
  "on": function () {},
  "off": function () {},
  "clear": function () {},
  "find": function () {}
};
CodeMirror.LineWidget.prototype = {
  "on": function () {},
  "off": function () {},
  "clear": function () {},
  "changed": function () {}
};
CodeMirror.Line.prototype = {
  "on": function () {},
  "off": function () {},
  "lineNo": function () {}
};
CodeMirror.Doc.prototype = {
  "constructor": function () {},
  "iter": function () {},
  "insert": function () {},
  "remove": function () {},
  "getValue": function () {},
  "setValue": function () {},
  "replaceRange": function () {},
  "getRange": function () {},
  "getLine": function () {},
  "getLineHandle": function () {},
  "getLineNumber": function () {},
  "getLineHandleVisualStart": function () {},
  "lineCount": function () {},
  "firstLine": function () {},
  "lastLine": function () {},
  "clipPos": function () {},
  "getCursor": function () {},
  "listSelections": function () {},
  "somethingSelected": function () {},
  "setCursor": function () {},
  "setSelection": function () {},
  "extendSelection": function () {},
  "extendSelections": function () {},
  "extendSelectionsBy": function () {},
  "setSelections": function () {},
  "addSelection": function () {},
  "getSelection": function () {},
  "getSelections": function () {},
  "replaceSelection": function () {},
  "replaceSelections": function () {},
  "undo": function () {},
  "redo": function () {},
  "undoSelection": function () {},
  "redoSelection": function () {},
  "setExtending": function () {},
  "getExtending": function () {},
  "historySize": function () {},
  "clearHistory": function () {},
  "markClean": function () {},
  "changeGeneration": function () {},
  "isClean": function () {},
  "getHistory": function () {},
  "setHistory": function () {},
  "addLineClass": function () {},
  "removeLineClass": function () {},
  "addLineWidget": function () {},
  "removeLineWidget": function () {},
  "markText": function () {},
  "setBookmark": function () {},
  "findMarksAt": function () {},
  "findMarks": function () {},
  "getAllMarks": function () {},
  "posFromIndex": function () {},
  "indexFromPos": function () {},
  "copy": function () {},
  "linkedDoc": function () {},
  "unlinkDoc": function () {},
  "iterLinkedDocs": function () {},
  "getMode": function () {},
  "getEditor": function () {},
  "splitLines": function () {},
  "lineSeparator": function () {},
  "eachLine": function () {},
  "on": function () {},
  "off": function () {},
  "chunkSize": function () {},
  "removeInner": function () {},
  "collapse": function () {},
  "insertInner": function () {},
  "maybeSpill": function () {},
  "iterN": function () {}
};
var FromToObj = {
    "from": {},
    "to": {}
};
var PosObj = {
    "line": {},
    "ch": {}
};
