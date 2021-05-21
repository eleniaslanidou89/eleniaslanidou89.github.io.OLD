import React, { Component } from "react";
import { Grid, Cell, CardText, Layout } from "react-mdl";
class UtbildningDatakunskaper extends Component {
  render() {
    return (
      <div className="utbildning">
        <Layout
          style={{
            background:
              "url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80)",
            backgroundSize: "cover",
            backgroundPosition: 'center',
          }}
        >
         
          <Grid col={10}>
            <div className="utbildning-list">
              <CardText style={{ fontSize: "20px", color: "black", fontFamily:"Segoe UI" }}>
              <h1>Education</h1>
                <div className="date">2019-2021</div> <br /> KYH - Front-end Developer <br />
                Stockholm
              </CardText>
              <CardText style={{ fontSize: "20px", color: "black", fontFamily:"Segoe UI" }}>
                {" "}
                <div className="date">27/5/2019- 28/6/2019</div> <br /> Nti skolan -
                Development 1
                <br />
                Stockholm
              </CardText>
              <CardText style={{ fontSize: "20px", color: "black", fontFamily:"Segoe UI" }}>
                {" "}
                <div className="date">20/8/2018-15/3/2019</div> <br /> C3L skola(SFX-IT) -
                Swedish for Developers
              -
                Stockholm
              </CardText>
              <CardText style={{ fontSize: "20px", color: "black", fontFamily:"Segoe UI" }}>
                {" "}
                <div className="date">2/7/2018-17/8/2018</div> <br /> Folkuniversitetet -
                Swedish (B2 + C1 )
                <br />
                Stockholm
              </CardText>
              <CardText style={{ fontSize: "20px", color: "black", fontFamily:"Segoe UI" }}>
                {" "}
                <div className="date">2008-2013</div> <br /> Technological Education Institute of Central Macedonia -
                <br /> IT Communication Engineering (Bachelor) 
                <br />
              Greece
              </CardText>
            </div>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default UtbildningDatakunskaper;
