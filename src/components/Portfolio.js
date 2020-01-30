import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <Card className="columns portfolio-item" text = "dark" border = "primary">
                  <div href={item.url}>
                    <a href={item.url}>
                      <Card.Img src={`${item.imgurl}`} className="item-img" alt = "head"/>
                      <a className="overlay" href={item.url}>

                        <div >

                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>

                        </div>

                      </a>
                    </a>
                  </div>
                </Card>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
