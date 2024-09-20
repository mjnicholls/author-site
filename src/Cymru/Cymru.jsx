import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PinModal from "./pinModal";
import { Box, Grid } from "@mui/material";
import { MainHeader, MainTextCymru } from "./Styles.jsx";
import PartOne from "./PartOne";
import PartThree from "./PartThree";
import Intro from "./Intro";
import { pins } from "./pins";
import red from "../../src/Cymru/red_icon.png";
import blue from "../../src/Cymru/blue_icon.png";
import { useNavigate } from 'react-router-dom';
import { BoxCentred } from "../globalStyles.jsx";
export const c1 = "#265479";
export const c2 = "#6F8990";

delete L.Icon.Default.prototype._getIconUrl;

const blueIconUrl = blue;
const redIconUrl = red;

const Cymru = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [sectionWhat, setSectionWhat] = useState(0);

  const history = useNavigate();
  
  const handleNavigation = (link) => {
    history(link);
  };

  const [clickedPins, setClickedPins] = useState([]);

  useEffect(() => {
    // Load clicked pins from local storage
    const storedPins = JSON.parse(localStorage.getItem("clickedPins")) || [];
    setClickedPins(storedPins);
  }, []);

  const handleMarkerClick = (pin) => {
    setModalContent({ title: pin.title, content: pin.content });
    setModalOpen(true);

    const newClickedPins = clickedPins.includes(pin.title)
      ? clickedPins.filter((title) => title !== pin.title) // Remove if already clicked
      : [...clickedPins, pin.title]; // Add if not clicked

    setClickedPins(newClickedPins);
    localStorage.setItem("clickedPins", JSON.stringify(newClickedPins));
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const position = [52.5307, -3.7837];

  const getMarkerIcon = (pin) => {
    const isClicked = clickedPins.includes(pin.title);
    return L.icon({
      iconUrl: isClicked ? redIconUrl : blueIconUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12} // Full width on mobile screens
          sm={4}  // 4 columns wide on small and larger screens
          pl={2}
          pr={2}
          pt={4}
          sx={{ borderLeft: "2px black solid" }}
        >
          <BoxCentred>
            <MainHeader>Condemned to Cymru</MainHeader>
          </BoxCentred>
          <BoxCentred pt={1}>
            <MainHeader>by M.J. Nicholls</MainHeader>
          </BoxCentred>
          <BoxCentred pt={2} pb={2}>
            <MainTextCymru>
              An abecedarian achronological picaresque
            </MainTextCymru>
          </BoxCentred>

          <BoxCentred>
          ⇝
          </BoxCentred>

          <BoxCentred
            pt={2}
            sx={{ cursor: "pointer" }}
            onClick={() => setSectionWhat(0)}
          >
            <MainTextCymru sx={{ "&:hover": { color: "#265479" } }}>Author's Introduction</MainTextCymru>
          </BoxCentred>
          <BoxCentred
            sx={{ cursor: "pointer" }}
            onClick={() => setSectionWhat(1)}
          >
            <MainTextCymru sx={{ "&:hover": { color: "#265479" }, }}>
              Part One: In Which the Blemished are Banished
            </MainTextCymru>
          </BoxCentred>
          <BoxCentred
            sx={{ cursor: "pointer" }}
            onClick={() => setSectionWhat(2)}
          >
              <MainTextCymru sx={{ "&:hover": { color: "#265479" }, }}>
            Part Two: Condemned to Cymru
            </MainTextCymru>
          </BoxCentred>
          <BoxCentred
            sx={{ cursor: "pointer" }}
            onClick={() => setSectionWhat(3)}
          >
              <MainTextCymru sx={{ "&:hover": { color: "#265479" }, }}>
            Part Three: Helga Horsedóttir
            </MainTextCymru>
          </BoxCentred>

          <BoxCentred>
          ⇝
          </BoxCentred>

          <BoxCentred pt={2}  sx={{ cursor: "pointer" }} onClick={() => handleNavigation("/Books")} >
          <MainTextCymru sx={{ "&:hover": { color: "#265479" }, }}>
            Get the print novel
            </MainTextCymru>
          </BoxCentred>

        </Grid>
        <Grid
          item
          xs={12}
          sm={8}  
          sx={{
            borderRight: "2px black solid",
            borderLeft: "1px black solid",
          }}
        >
          {sectionWhat === 0 ? (
            <Intro />
          ) : sectionWhat === 1 ? (
            <PartOne />
          ) : sectionWhat === 2 ? (
            <>
              {/* <Box pl={4} pt={4} pr={4} sx={{ fontSize: "25px" }}>
                  Part Two: Condemned to Cymru
                  <hr />
                </Box> */}

              <MapContainer
                center={position}
                zoom={7}
                //zoomSnap={7.6}
                style={{ height: "97vh", width: "100%" }}
                zoomControl={true}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {pins.map((pin, idx) => (
                  <Marker
                    key={idx}
                    position={pin.position}
                    eventHandlers={{ click: () => handleMarkerClick(pin) }}
                    icon={getMarkerIcon(pin)}
                  >
                    <Tooltip>{pin.title}</Tooltip>
                  </Marker>
                ))}
              </MapContainer>
            </>
          ) : sectionWhat === 3 ? (
            <PartThree />
          ) : null}
        </Grid>
      </Grid>
      <PinModal
        open={modalOpen}
        handleClose={handleClose}
        title={modalContent.title}
        content={modalContent.content}
      />
    </Box>
  );
};

export default Cymru;
