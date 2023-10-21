/* eslint-disable no-unused-vars */
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Blog.css";

const Blog = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="p-5 max-w-screen-xl mx-auto blog">
      <h2 className="text-3xl py-5 text-center">
        <u>
          <b>Blog F&Q :</b>
        </u>
      </h2>

      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is react ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              React is an open-source JavaScript library for building user
              interfaces (UIs) or user interfaces for web applications.
              Developed and maintained by Facebook (now Meta), React has gained
              significant popularity among web developers for its efficiency and
              flexibility in creating interactive and dynamic web applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              what is firebase ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Firebase provides a NoSQL cloud-based database that allows
              developers to store and sync data in real time. This is
              particularly useful for applications that require real-time
              updates, such as chat apps or collaborative tools. Firebase
              includes robust user authentication services that enable
              developers to easily integrate secure user registration and
              authentication into their applications using various methods like
              email/password, social logins (Google, Facebook, Twitter), and
              more.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How do I use Auth in Firebase?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1.Add and initialize the Authentication SDK. 2.(Optional)
              Prototype and test with Firebase Local Emulator Suite. 3.Sign up
              new users. 4.Sign in existing users. 5.Set an authentication state
              observer and get user data. 6.Next steps.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Is Firebase authentication free?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Firebase Authentication with Identity Platform and Identity
              Platform are paid services. Firebase Authentication with Identity
              Platform is available without a billing instrument up to daily
              limits.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
