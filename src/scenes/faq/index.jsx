import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            What is this?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is a ReactJS application that uses Material UI and MUI Data
            Grid to create a dashboard with a calendar, invoices, and a FAQ. It
            also allows you to view data through various charts such as a bar
            chart, a line chart, a pie chart, and a geography chart.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.grey[200]} variant="h5">
            What is a CRM system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A CRM system, short for Customer Relationship Management system, is
            a software tool used by businesses to manage interactions and
            relationships with their customers. It helps in organizing customer
            data, tracking communication history, and improving customer
            service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.blueAccent[200]} variant="h5">
            Why do businesses use CRM systems?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            •Streamline customer information management. <br />
            •Improve customer service and support. <br />
            •Automate sales and marketing processes. <br />
            •Enhance lead and opportunity management. <br />
            •Increase sales and revenue. <br />
            •Gain insights into customer behavior and preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.redAccent[200]} variant="h5">
            Is CRM software only for large businesses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, CRM software is not only for large businesses. Small and medium
            businesses can also benefit from using a CRM system. In fact, CRM
            software is a must-have for businesses of all sizes that want to
            improve their customer relationships and grow their business.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[200]} variant="h5">
            How can a CRM system benefit sales teams?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            •Providing a centralized database of leads and contacts. <br />
            •Automating lead and opportunity tracking. <br />
            •Streamlining sales processes. <br />
            •Offering sales forecasting and reporting. <br />
            •Improving communication within the team. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[400]} variant="h5">
            What is the role of analytics in CRM?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Analytics in CRM helps businesses analyze customer data, track
            performance metrics, and make data-driven decisions. It provides
            insights into customer behavior, sales trends, and marketing
            effectiveness.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
