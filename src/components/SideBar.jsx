import Box from "@mui/material/Box";
import { Avatar, Container, autocompleteClasses } from "@mui/material";
import notify from "../assets/Group48095440.png";
import ava from "../assets/Ellipse2009.png";
import SearchInput from "./SearchInput";
import Typography from "@mui/material/Typography";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAvatars from "./AvatarGroup";
import Button from "@mui/material/Button";
function SideBar() {
  return (
    <div style={{ width: "20vw" , backgroundColor: "black", zIndex: "10" }}>
      <Container style={{ padding: "20px" }}>
        <header style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              backgroundColor: "transparent",
              marginRight: "10px",
              border: "none",
            }}
          >
            <img src={notify}></img>
          </button>
          <Avatar src={ava}></Avatar>
        </header>
        <SearchInput></SearchInput>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: '700px',
          }}
        >
          <div style={{ marginTop: "20px" }}>
            <Typography variant="body2" color="gray" align="left">
              Main
            </Typography>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <div style={{ display: "flex" }}>
                <HomeWorkIcon style={{ color: "gray" }}></HomeWorkIcon>
                <Button
                  variant="outlined"
                  style={{ border: "none", color: "gray" }}
                >
                  <Typography
                    variant="body2"
                    color="gray"
                    align="left"
                    style={{ marginLeft: "10px" }}
                  >
                    Home
                  </Typography>
                </Button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <PlayArrowIcon style={{ color: "gray" }}></PlayArrowIcon>
                <Button
                  variant="outlined"
                  style={{ border: "none", color: "gray" }}
                >
                  <Typography
                    variant="body2"
                    color="gray"
                    align="left"
                    style={{ marginLeft: "10px" }}
                  >
                    Watch
                  </Typography>
                </Button>{" "}
              </div>
              <Typography
                variant="body2"
                color="gray"
                borderRadius={"25%"}
                border={"2px solid #EF7B3C"}
                padding={"5px"}
                backgroundColor={"#EF7B3C"}
                style={{ marginLeft: "10px", marginTop: "3px" }}
              >
                2
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <PeopleAltIcon style={{ color: "gray" }}></PeopleAltIcon>
                <Button
                  variant="outlined"
                  style={{ border: "none", color: "gray" }}
                >
                  <Typography
                    variant="body2"
                    color="gray"
                    align="left"
                    style={{ marginLeft: "10px" }}
                  >
                    Community
                  </Typography>
                </Button>{" "}
              </div>
              <GroupAvatars></GroupAvatars>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", marginBottom: 40 }}>
              <PeopleAltIcon style={{ color: "gray" }}></PeopleAltIcon>
              <Button
                variant="outlined"
                style={{ border: "none", color: "gray" }}
              >
                <Typography
                  variant="body2"
                  color="gray"
                  align="left"
                  style={{ marginLeft: "10px" }}
                >
                  Help
                </Typography>
              </Button>{" "}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SideBar;
