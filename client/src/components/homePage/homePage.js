import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./homePage.css";

import HomeOrders from "./HomeOrders";
function HomePage() {
  return (
    <>
      <h1 className="header_top">Current Apparel For Sale</h1>
      <div className="grid_container">
        <Card sx={{ width: 345 }}>
          <CardMedia sx={{ width: 320 }} component="img" height="140px" image="./images/greyhoodie.jpg" alt="Grey Hoodie" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Grey Hoodie
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $50.00
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardMedia sx={{ width: 320 }} className="card_media" component="img" height="200" image="./images/baseball.jpg" alt="baseball tee" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Base Ball Tee
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $50.00
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardMedia sx={{ width: 320 }} component="img" height="200" image="./images/jogger.jpg" alt="joggers" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Joggers
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $65.00
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardMedia sx={{ width: 320 }} component="img" height="140" image="./images/orangehoodie.jpg" alt="Orange Hoodie" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Orange Hoodie
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $65.00
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardMedia sx={{ width: 320 }} component="img" height="140" image="./images/tank1.jpg" alt="black tank" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Black Tank
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $35.00
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 345 }}>
          <CardMedia sx={{ width: 320 }} component="img" height="140" image="./images/yellohoodie.jpg" alt="Yellow Hoodie" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Yellow Hoodie
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              $65.00
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <HomeOrders />
      </div>
    </>
  );
}

export default HomePage;
