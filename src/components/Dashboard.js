import React, { Component } from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import SideNavbar from './SideNavbar';
import Content from './Content';
import { getprograms } from '../Redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            launch_year: null,
            launch_success: null,
            land_success: null
        }
    }
    
    componentDidMount = () => {
        this.props.getprograms();
    }

    filter = (type, e) => {
        if (type === "year") {
            let year = e.target.textContent;
            this.setState({ launch_year: year }, ()=>this.fetchData());
        }
        if (type === "launch") {
            let launchStatus = e.target.textContent;
            this.setState({ launch_success: launchStatus }, ()=>this.fetchData());
        }
        if (type === "land") {
            let landStatus = e.target.textContent;
            this.setState({ land_success: landStatus }, ()=>this.fetchData());
        }
        
    }
    fetchData=()=>{
        let params = {};
        if(this.state.launch_year!== null){
            params["launch_year"] = this.state.launch_year;
        }
        if(this.state.launch_success!== null){
            params["launch_success"] = this.state.launch_success;
        }
        if(this.state.land_success!== null){
            params["land_success"] = this.state.land_success;
        }
       this.props.getprograms(params);
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} lg={2}>
                        <SideNavbar filter={this.filter}/>
                    </Col>
                    <Col xs={12} md={6} lg={10}>
                        <Content programs={this.props.programs} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        programs: state.programs
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getprograms
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);