import {
  Alert,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import SkeletonComponent from "./skeleton";

const CustomCard = ({ title, link, id }: ICustomCardProps) => {
  return (
    <Card key={id}>
      <CardContent>
        <Typography component={"h5"}>{title}</Typography>
      </CardContent>
      <CardMedia
        component="img"
        src={link}
        alt="Descrição da imagem"
        title="Título da imagem"
        sx={{ width: "100%", height: 250 }}
      />

      <CardContent>Teste Content</CardContent>
    </Card>
  );
};

type IUserProps = {
  user: IDataProps[];
  loading: boolean;
  error: string | null | undefined;
};

export default function CardsComponent({ user, error, loading }: IUserProps) {
  console.log(user);

  return (
    <Box maxWidth={"1500px"} m={"0 auto"} p={2}>
      <Grid container spacing={2}>
        {!error && loading && (
          <Box width={"100%"} py={8}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={4}
              flexWrap={"wrap"}
            >
              <SkeletonComponent />
              <SkeletonComponent />
              <SkeletonComponent />
              <SkeletonComponent />
            </Box>
          </Box>
        )}
        {error ? (
          <Box width={"100%"} py={8}>
            <Box display={"flex"} justifyContent={"center"}>
              <Alert severity="error">{error}</Alert>
            </Box>
          </Box>
        ) : (
          user &&
          user.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={Math.random()}>
              <CustomCard id={item.id} title={item.name} link={item.url} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
