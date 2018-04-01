'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _webpack = require('react-loadable/webpack');

var _reactLoadable3 = require('../build/react-loadable.json');

var _reactLoadable4 = _interopRequireDefault(_reactLoadable3);

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _reduxObservable = require('redux-observable');

var _redux = require('redux');

var _index = require('../src/js/epics/index');

var _index2 = _interopRequireDefault(_index);

var _App = require('../src/js/components/App');

var _App2 = _interopRequireDefault(_App);

var _reactRedux = require('react-redux');

var _index3 = require('../src/js/reducer/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require("path");
var fs = require("fs");

module.exports = function (req, res) {
  var filePath = path.resolve(__dirname, "..", "build", "index.html");
  fs.readFile(filePath, "utf8", function (err, htmlData) {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }
    var modules = [],
        context = {},
        store = (0, _redux.createStore)(_index4.default, (0, _redux.applyMiddleware)((0, _reduxObservable.createEpicMiddleware)(_index2.default)));

    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactLoadable2.default.Capture,
      { report: function report(moduleName) {
          return modules.push(moduleName);
        } },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(_App2.default, null)
        )
      )
    ));

    var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);
    return res.send(htmlData.replace('<div id="root"></div>', '<div id="root">' + html + '</div>' + bundles.filter(function (each) {
      return each.file.endsWith('js');
    }).map(function (bundle) {
      return '<script type="text/javascript" src="' + bundle.file + '"></script>';
    })));
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9zZXJ2ZXJSZW5kZXIuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJmcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJyZWFkRmlsZSIsImVyciIsImh0bWxEYXRhIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwiZW5kIiwibW9kdWxlcyIsImNvbnRleHQiLCJzdG9yZSIsImh0bWwiLCJwdXNoIiwibW9kdWxlTmFtZSIsInVybCIsImJ1bmRsZXMiLCJzZW5kIiwicmVwbGFjZSIsImZpbHRlciIsImVhY2giLCJmaWxlIiwiZW5kc1dpdGgiLCJtYXAiLCJidW5kbGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFDQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLEtBQUtELFFBQVEsSUFBUixDQUFYOztBQUVBRSxPQUFPQyxPQUFQLEdBQWtCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzlCLE1BQU1DLFdBQVdQLEtBQUtRLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixJQUF4QixFQUE4QixPQUE5QixFQUF1QyxZQUF2QyxDQUFqQjtBQUNBUCxLQUFHUSxRQUFILENBQVlILFFBQVosRUFBc0IsTUFBdEIsRUFBOEIsVUFBQ0ksR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQy9DLFFBQUlELEdBQUosRUFBUztBQUNQRSxjQUFRQyxLQUFSLENBQWMsS0FBZCxFQUFxQkgsR0FBckI7QUFDQSxhQUFPTCxJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEIsRUFBUDtBQUNEO0FBQ0QsUUFBTUMsVUFBVSxFQUFoQjtBQUFBLFFBQ0VDLFVBQVUsRUFEWjtBQUFBLFFBRUVDLFFBQVEseUNBQXFCLDRCQUFnQiwyREFBaEIsQ0FBckIsQ0FGVjs7QUFJQSxRQUFNQyxPQUFPLDRCQUNYO0FBQUEsOEJBQVUsT0FBVjtBQUFBLFFBQWtCLFFBQVE7QUFBQSxpQkFBY0gsUUFBUUksSUFBUixDQUFhQyxVQUFiLENBQWQ7QUFBQSxTQUExQjtBQUNFO0FBQUE7QUFBQSxVQUFjLFVBQVVqQixJQUFJa0IsR0FBNUIsRUFBaUMsU0FBU0wsT0FBMUM7QUFDRTtBQUFBO0FBQUEsWUFBVSxPQUFPQyxLQUFqQjtBQUNFO0FBREY7QUFERjtBQURGLEtBRFcsQ0FBYjs7QUFVQSxRQUFJSyxVQUFVLGtEQUFrQlAsT0FBbEIsQ0FBZDtBQUNBLFdBQU9YLElBQUltQixJQUFKLENBQ0xiLFNBQ0djLE9BREgsQ0FDVyx1QkFEWCxzQkFDc0ROLElBRHRELGNBRUlJLFFBQ0dHLE1BREgsQ0FDVTtBQUFBLGFBQVFDLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixJQUFuQixDQUFSO0FBQUEsS0FEVixFQUVHQyxHQUZILENBRU87QUFBQSxzREFBaURDLE9BQU9ILElBQXhEO0FBQUEsS0FGUCxDQUZKLENBREssQ0FBUDtBQVFELEdBNUJEO0FBNkJELENBL0JEIiwiZmlsZSI6InNlcnZlclJlbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IHsgZ2V0QnVuZGxlcyB9IGZyb20gJ3JlYWN0LWxvYWRhYmxlL3dlYnBhY2snO1xuaW1wb3J0IHN0YXRzIGZyb20gJy4uL2J1aWxkL3JlYWN0LWxvYWRhYmxlLmpzb24nO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVFcGljTWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eC1vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGVwaWNzIGZyb20gXCIuLi9zcmMvanMvZXBpY3MvaW5kZXhcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL3NyYy9qcy9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9zcmMvanMvcmVkdWNlci9pbmRleFwiO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi5cIiwgXCJidWlsZFwiLCBcImluZGV4Lmh0bWxcIik7XG4gIGZzLnJlYWRGaWxlKGZpbGVQYXRoLCBcInV0ZjhcIiwgKGVyciwgaHRtbERhdGEpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdlcnInLCBlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5lbmQoKVxuICAgIH1cbiAgICBjb25zdCBtb2R1bGVzID0gW10sXG4gICAgICBjb250ZXh0ID0ge30sXG4gICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShjcmVhdGVFcGljTWlkZGxld2FyZShlcGljcykpKTtcbiAgICBcbiAgICBjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgICA8TG9hZGFibGUuQ2FwdHVyZSByZXBvcnQ9e21vZHVsZU5hbWUgPT4gbW9kdWxlcy5wdXNoKG1vZHVsZU5hbWUpfT5cbiAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgIDwvTG9hZGFibGUuQ2FwdHVyZT5cbiAgICApO1xuICBcbiAgICBsZXQgYnVuZGxlcyA9IGdldEJ1bmRsZXMoc3RhdHMsIG1vZHVsZXMpO1xuICAgIHJldHVybiByZXMuc2VuZChcbiAgICAgIGh0bWxEYXRhXG4gICAgICAgIC5yZXBsYWNlKCc8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PicsIGA8ZGl2IGlkPVwicm9vdFwiPiR7aHRtbH08L2Rpdj4ke1xuICAgICAgICAgIGJ1bmRsZXNcbiAgICAgICAgICAgIC5maWx0ZXIoZWFjaCA9PiBlYWNoLmZpbGUuZW5kc1dpdGgoJ2pzJykpXG4gICAgICAgICAgICAubWFwKGJ1bmRsZSA9PiBgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiJHtidW5kbGUuZmlsZX1cIj48L3NjcmlwdD5gKVxuICAgICAgICAgIH1gKVxuICAgIClcbiAgfSlcbn07Il19