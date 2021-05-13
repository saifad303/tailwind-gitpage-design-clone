import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));
