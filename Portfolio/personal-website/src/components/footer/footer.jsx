import React, { Component } from 'react';
import './footer.css';
import { Button } from '@mui/material';  // Replaced FlatButton with Button
import Typography from '@mui/material/Typography';  // Correct import for Typography
import Card from '@mui/material/Card';  // Correct import for Card
import CardContent from '@mui/material/CardContent';  // Correct import for CardContent
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <Card className="padding">
            <CardContent>
              <Typography>I OFTEN WRITE...</Typography>
              <Typography className="footer-text">
                <a target="_blank" href="https://medium.com/@sagardakhore555/how-to-create-your-portfolio-website-using-react-js-material-ui-33668eae5818" rel="noopener noreferrer">
                  VIEW BLOG
                </a>
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography>LOOK AT MY CODE, MY CODE IS AMAZING</Typography>
              <Typography className="footer-text">This Website is made with React and Material UI. Check out the code on Github.</Typography>
              <Typography className="footer-text">
                <a target="_blank" href="https://github.com/Balanjani/Portfolio" rel="noopener noreferrer">
                  VIEW ON GITHUB
                </a>
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Replaced FlatButton with Button from MUI */}
        <Button variant="contained" onClick={this.onScrollToTop}>Back to top</Button>
      </div>
    );
  }
}

export default FooterComponent;
