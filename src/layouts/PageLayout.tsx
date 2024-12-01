import { Container, Paper, styled } from "@mui/material";
import SearchAppBar from "@/components/AppBar";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <AppWrapper>
      <SearchAppBar />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </AppWrapper>
  );
}

const AppWrapper = styled(Paper)({
  minHeight: "100dvh",
});

const AppContainer = styled(Container)();
