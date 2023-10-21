/* eslint-disable no-unused-vars */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
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
              1. What is meant by CRUD operations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              CRUD is the acronym for CREATE, READ, UPDATE and DELETE. These
              terms describe the four essential operations for creating and
              managing persistent data elements, mainly in relational and NoSQL
              databases
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
              2.What are the CRUD operations in MongoDB using Express?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Build Crud API with Node. js, Express, and MongoDB 1.Create (POST)
              - Make something.
              <br />
              2.Read (GET)- Get something.
              <br />
              3. Update (PUT) - Change something.
              <br />
              4. Delete (DELETE)- Remove something.
              <br />
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
              3.What is a collection in MongoDB? ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A collection is a grouping of MongoDB documents. Documents within
              a collection can have different fields. A collection is the
              equivalent of a table in a relational database system. A
              collection exists within a single database.
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
              4.How many collections can MongoDB have?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In general, we recommend limiting collections to 10,000 per
              replica set. When users begin exceeding 10,000 collections, they
              typically see decreases in performance. To avoid this
              anti-pattern, examine your database and remove unnecessary
              collections.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
