import React from 'react';
import './projects.css'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
   paddingTop:10,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));


export default function ProjectsComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <div className="container">
                <h2 className="sub-heading">Projects <span className="title">Summary</span> <Divider variant="middle" /> </h2>
            
        </div>
    

      <Grid container spacing={3}>
            <Grid item xs={12}>

         <Card> 
           <CardContent>
              <h2>Online Exchange Web Application</h2>
                 
                <Typography>Developed a dynamic e-commerce platform that facilitates product listing, bidding, and secure transactions between buyers and sellers. Designed and implemented RESTful APIs using Node.js and Express to manage the product catalog, user accounts, and transaction workflows. Integrated MongoDB for real-time data storage and updates, ensuring seamless interaction between users and the system. Developed a robust bidding feature that allows users to place bids on items, while also incorporating a bidding history feature that displays a chronological log of bids with precise timestamps, offering transparency and ease of tracking. The platform enables a smooth user experience with responsive design and real-time notifications, ensuring that users can participate in auctions and track their bids effortlessly.</Typography>
                
            </CardContent>
          </Card>
       </Grid>
        
      </Grid>

      <Grid container spacing={3}>
            <Grid item xs={12}>

         <Card> 
           <CardContent>
              <h2>GenAI Chatbot Migration for Customer Support</h2>
                
                <Typography>Led the migration of NLP-based chatbots to GenAI-powered conversational assistants using LLMs and GPT models.
Designed dialog management frameworks with empathetic, human-like interactions to enhance customer satisfaction.
Implemented microservices with gRPC and Kafka for seamless distributed system communication.</Typography>
                   
            </CardContent>
          </Card>
       </Grid>
        
      </Grid>

      <Grid container spacing={3}>
            <Grid item xs={12}>

         <Card> 
           <CardContent>
              <h2>Fake SMS Detection System</h2>
               
                 <Typography>Developed an intelligent chatbot leveraging Large Language Models (LLMs) to detect and flag fraudulent SMS messages. The system uses advanced natural language processing (NLP) techniques to analyze the content, structure, and context of incoming messages, identifying suspicious patterns such as phishing attempts, fraudulent links, and scams. Integrated real-time processing capabilities to ensure quick, reliable detection of threats, significantly reducing the risk of malicious activity. Enhanced the system’s accuracy through continuous training with labeled datasets, improving its ability to discern between legitimate and fraudulent content. The chatbot operates with high efficiency, providing real-time feedback to users while ensuring data privacy and security.

</Typography>
                    
            </CardContent>
          </Card>
       </Grid>
        
      </Grid>

      
      
    </div>
  );
}