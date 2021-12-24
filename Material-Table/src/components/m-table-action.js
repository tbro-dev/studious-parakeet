const {
  AppBar,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  TextField,
  Tooltip,
  makeStyles,
  Container,
  Link,
  Icon,
  createMuiTheme,
  ThemeProvider,
  IconButton,
} = MaterialUI;

class MTableAction extends React.Component {
  render() {
    let action = this.props.action;

    if (typeof action === "function") {
      action = action(this.props.data);
      if (!action) {
        return null;
      }
    }

    if (action.action) {
      action = action.action(this.props.data);
      if (!action) {
        return null;
      }
    }

    if (action.hidden) {
      return null;
    }

    const disabled = action.disabled || this.props.disabled;

    const handleOnClick = (event) => {
      if (action.onClick) {
        action.onClick(event, this.props.data);
        event.stopPropagation();
      }
    };

    const icon =
      typeof action.icon === "string" ? (
        <Icon {...action.iconProps}>{action.icon}</Icon>
      ) : typeof action.icon === "function" ? (
        action.icon({ ...action.iconProps, disabled: disabled })
      ) : (
        <action.icon />
      );

    const button = (
      <IconButton
        size={this.props.size}
        color="inherit"
        disabled={disabled}
        onClick={handleOnClick}
      >
        {icon}
      </IconButton>
    );

    if (action.tooltip) {
      // fix for issue #1049
      // https://github.com/mbrn/material-table/issues/1049
      return disabled ? (
        <Tooltip title={action.tooltip}>
          <span>{button}</span>
        </Tooltip>
      ) : (
        <Tooltip title={action.tooltip}>{button}</Tooltip>
      );
    } else {
      return button;
    }
  }
}

MTableAction.defaultProps = {
  action: {},
  data: {},
};

MTableAction.propTypes = {
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.string,
};
