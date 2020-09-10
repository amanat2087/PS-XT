import React from 'react';
import {Card, Button, Row, Col } from 'react-bootstrap';
import './Dashboard.css';

const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,2016,2017,2018,2019,2020];

const SideNavbar = (props) => {
    return (
        <Card className="navCard">
            <b>Filters</b>
            <br></br>
            <p className="filter-type">Launch Year</p>
            <hr />
            <div className="btn">
                <Row>
                {years.map((year, index) => {
                    return (
                        <Col xs={6} md={6} lg={6}>
                        <Button className="btn-items" variant="success" onClick={(e)=>props.filter("year", e)} key={year}>{year}</Button>
                     </Col>                       
                      )
                })}
              </Row>
            </div>
            <p className="filter-type">Successful Launch</p>
            <hr />
            <div className="btn">
                <Button className="btn-items" variant="success" onClick={(e)=>props.filter("launch", e)}>true</Button>
                <Button className="btn-items" variant="success" onClick={(e)=>props.filter("launch", e)}>false</Button>
            </div>
            <p className="filter-type">Successful Landing</p>
            <hr />
            <div className="btn">
                <Button className="btn-items" variant="success" onClick={(e)=>props.filter("land", e)}>true</Button>
                <Button className="btn-items" variant="success" onClick={(e)=>props.filter("land", e)}>false</Button>
            </div>
        </Card>
    )
}

export default SideNavbar;