"use strict";

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}

var _indexLocale = _interopRequireDefault(formatDistance);

var _indexLocale2 = _interopRequireDefault(formatLong);

var _indexLocale3 = _interopRequireDefault(formatRelative);

var _indexLocale4 = _interopRequireDefault(localize);

var _indexLocale5 = _interopRequireDefault(match);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: "en-US",
  formatDistance: _indexLocale.default,
  formatLong: _indexLocale2.default,
  formatRelative: _indexLocale3.default,
  localize: _indexLocale4.default,
  match: _indexLocale5.default,
  options: {
    weekStartsOn: 0,
    /* Sunday */
    firstWeekContainsDate: 1,
  },
};
