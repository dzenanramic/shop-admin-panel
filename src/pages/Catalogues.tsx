import { Card, CardMedia, Grid, Typography } from "@mui/material"
import data from "../data.json"

const bikes = data.yamahaBikes;

function Catalogues() {
  return (
      <Grid container spacing={2}>
        {bikes?.map((bike, index) => {
            return (
              <Grid
                xs={12}
                sm={6}
                md={4}
                key={`${bike.model}` + index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <Card
                    sx={{
                      padding: "4px",
                    }}
                  >
                    <Typography textAlign="center" variant="h6">
                      {bike.model}
                    </Typography>

                    <CardMedia
                      sx={{
                        mt: 2,
                        display: "flex",
                        width: "100%",
                        height: "350px",
                      }}
                    >
                      <img
                        src={bike.image}
                        width="1024"
                        height="1024"
                        style={{
                          width: "1024px",
                          height: "auto",
                          borderRadius: "12px",
                          objectFit: "cover",
                        }}
                        alt="a"
                      />
                    </CardMedia>
                  </Card>
              </Grid>
            );
          })}
      </Grid>
  );
}

export default Catalogues