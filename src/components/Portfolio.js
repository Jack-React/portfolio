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
                <Card bg="primary" className="columns portfolio-item" text="black">
                    <a href={item.url}>
                      <Card.Img src={`${item.imgurl}`} className="item-img" alt = "head"/>
                      <a className="overlay" href={item.url}>
                        <Card.ImgOverlay>
                        <div className="portfolio-item-meta">

                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>{item.description}</Card.Text>

                        </div>
                        </Card.ImgOverlay>

                      </a>
                    </a>
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
