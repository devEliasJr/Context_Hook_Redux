import { Box } from "@mui/material";
import CardsComponents from "../../components/cards";
import useUserApi from "../../hooks/useUserApi";

export default function HomePage() {
  const { users, error, loading } = useUserApi();
  return (
    <Box>
      <CardsComponents user={users} error={error} loading={loading} />
    </Box>
  );
}
