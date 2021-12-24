class MTableActions extends React.Component {
  render() {
    if (this.props.actions) {
      return this.props.actions.map((action, index) => (
        <this.props.components.Action
          action={action}
          key={"action-" + index}
          data={this.props.data}
          size={this.props.size}
          disabled={this.props.disabled}
        />
      ));
    }

    return null;
  }
}

MTableActions.defaultProps = {
  actions: [],
  data: {},
};

MTableActions.propTypes = {
  components: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.string,
};
