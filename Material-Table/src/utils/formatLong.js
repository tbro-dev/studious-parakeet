"use strict";

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var _indexFormatLong = _interopRequireDefault(buildFormatLongFn);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

var formatLong = {
  date: (0, _indexFormatLong.default)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0, _indexFormatLong.default)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0, _indexFormatLong.default)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};
