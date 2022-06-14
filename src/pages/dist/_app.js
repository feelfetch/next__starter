"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var router_1 = require("next/router");
var react_1 = require("react");
var react_locomotive_scroll_1 = require("react-locomotive-scroll");
var framer_motion_1 = require("framer-motion");
require("/public/styles.css");
require("../styles/globals.css");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps, router = _a.router;
    var asPath = router_1.useRouter().asPath;
    var containerRef = react_1.useRef(null);
    return (React.createElement(react_locomotive_scroll_1.LocomotiveScrollProvider, { options: {
            smooth: true,
            smoothMobile: true,
            offset: ['3%', 100],
            lerp: 0.09,
            smartphone: {
                smooth: true
            }
        }, watch: [
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ], location: asPath, onLocationChange: function (scroll) { return scroll.scrollTo(0, { duration: 0, disableLerp: true }); }, containerRef: containerRef },
        React.createElement("div", { "data-scroll-container": true, ref: containerRef },
            React.createElement(framer_motion_1.motion.div, { key: router.route, initial: "initial", transition: { duration: 2, delay: 0.3 }, animate: "animate", variants: {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    }
                } },
                React.createElement(Component, __assign({}, pageProps))))));
}
exports["default"] = MyApp;
