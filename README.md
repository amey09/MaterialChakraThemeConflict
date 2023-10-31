Issue Details

1. Even after following exactly as mentioned in MUI datepicker docs date picker doesn't work.
https://mui.com/x/react-date-pickers/getting-started/

Try following things.

1. Comment out Localization wrapper and MobileTimePicker from App.js. Chakra UI works as expected.

Possible areas to find the cause

a. Either Chakra UI and Material UI theme must be merged using deepmerge. (https://mui.com/material-ui/customization/theming/#api)

Similar github issues.

1. https://github.com/mui/material-ui/issues/25852