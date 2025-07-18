import { jsx, jsxs } from 'react/jsx-runtime';
import React from 'react';

var WebButton = function (_a) {
    var title = _a.title, onPress = _a.onPress, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, testID = _a.testID;
    var getVariantStyles = function () {
        var styles = {
            primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
            secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
            danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500'
        };
        return styles[variant];
    };
    var getSizeStyles = function () {
        var styles = {
            small: 'px-3 py-1 text-sm',
            medium: 'px-4 py-2 text-base',
            large: 'px-6 py-3 text-lg'
        };
        return styles[size];
    };
    var baseStyles = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    var disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';
    var className = [
        baseStyles,
        getVariantStyles(),
        getSizeStyles(),
        disabledStyles
    ].filter(Boolean).join(' ');
    return (jsx("button", { onClick: onPress, disabled: disabled || loading, className: className, "data-testid": testID, children: loading ? (jsxs("span", { className: "flex items-center", children: [jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", fill: "none", viewBox: "0 0 24 24", children: [jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."] })) : (title) }));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var NativeButton = function (_a) {
    var title = _a.title, onPress = _a.onPress, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, testID = _a.testID;
    var getVariantStyles = function () {
        var styles = {
            primary: { backgroundColor: '#3B82F6', borderColor: '#3B82F6' },
            secondary: { backgroundColor: '#E5E7EB', borderColor: '#E5E7EB' },
            danger: { backgroundColor: '#EF4444', borderColor: '#EF4444' }
        };
        return styles[variant];
    };
    var getTextColor = function () {
        return variant === 'secondary' ? '#1F2937' : '#FFFFFF';
    };
    var getSizeStyles = function () {
        var styles = {
            small: { paddingHorizontal: 12, paddingVertical: 6, fontSize: 14 },
            medium: { paddingHorizontal: 16, paddingVertical: 8, fontSize: 16 },
            large: { paddingHorizontal: 24, paddingVertical: 12, fontSize: 18 }
        };
        return styles[size];
    };
    var buttonStyles = __assign(__assign(__assign({}, getVariantStyles()), getSizeStyles()), { borderRadius: 6, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', opacity: disabled || loading ? 0.5 : 1 });
    var textStyles = {
        color: getTextColor(),
        fontSize: getSizeStyles().fontSize,
        fontWeight: '500',
    };
    // Для React Native (в реальном проекте нужно импортировать из react-native)
    return React.createElement('TouchableOpacity', {
        onPress: disabled || loading ? undefined : onPress,
        style: buttonStyles,
        disabled: disabled || loading,
        testID: testID,
    }, [
        loading && React.createElement('ActivityIndicator', {
            key: 'spinner',
            size: 'small',
            color: getTextColor(),
            style: { marginRight: 8 }
        }),
        React.createElement('Text', {
            key: 'text',
            style: textStyles
        }, loading ? 'Загрузка...' : title)
    ]);
};

var withPlatform = function (WebComponent, NativeComponent, config) {
    if (config === void 0) { config = {}; }
    return function (props) {
        var _a = config.isNative, isNative = _a === void 0 ? false : _a;
        if (isNative) {
            return React.createElement(NativeComponent, props);
        }
        return React.createElement(WebComponent, props);
    };
};

var detectPlatform = function () {
    // Проверяем наличие React Native окружения
    return typeof window === 'undefined' && typeof navigator === 'undefined';
};

// Автоматическое определение платформы
var isNative = detectPlatform();
var Button = withPlatform(WebButton, NativeButton, { isNative: isNative });

export { Button, NativeButton, WebButton, withPlatform };
//# sourceMappingURL=index.esm.js.map
