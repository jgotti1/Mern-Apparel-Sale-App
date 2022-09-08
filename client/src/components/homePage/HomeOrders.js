import "../adminPage/adminPage.css";
import "../../App.css";

import "../createOrder/createOrderForm.css";
import useStyles from "../../styles.js";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Orders from "../showOrders/showOrders";
import Create from "../createOrder/createOrderForm";

function HomeOrders() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="xlg" justifyContent="center">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className="heading" variant="h5" align="center">
            Apparel Orders
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-around" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className="create-div" position="static" color="inherit">
                  <Orders />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar className="create-div" position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default HomeOrders;
