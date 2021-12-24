const elementSize = (props) =>
  props.options.padding === "default" ? "medium" : "small";
const baseIconSize = (props) => (elementSize(props) === "medium" ? 48 : 32);
const rowActions = (props) =>
  props.actions.filter((a) => a.position === "row" || typeof a === "function");
const actionsColumnWidth = (props) =>
  rowActions(props).length * baseIconSize(props);
const selectionMaxWidth = (props, maxTreeLevel) =>
  baseIconSize(props) + 9 * maxTreeLevel;

const reducePercentsInCalc = (calc, fullValue) => {
  const captureGroups = calc.match(/(\d*)%/);
  if (captureGroups && captureGroups.length > 1) {
    const percentage = captureGroups[1];
    return calc.replace(/\d*%/, `${fullValue * (percentage / 100)}px`);
  }
  return calc.replace(/\d*%/, `${fullValue}px`);
};

const CommonValues = {
  elementSize,
  baseIconSize,
  rowActions,
  actionsColumnWidth,
  selectionMaxWidth,
  reducePercentsInCalc,
};
