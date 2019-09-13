import React, {Component} from 'react'

const barHeight = {
    height: '5px',
    margin: '10px'
};

const barWidth = {
    width: '25%'
};

class PersonalInfo extends Component {

    render() {
        return (
            <div className="personalInfo">
                <div className="row user-info">
                    <div className="col-sm-4">
                        <div className="circle-block weight">
                            <h6 className="c-font">57</h6>
                            <p className="c-unit">kg</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <img src="alberto.png" width="92" height="92" className="circle-img" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <div className="circle-block height">
                            <h6 className="c-font">163</h6>
                            <p className="c-unit">cm</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">Jane Appleseed</div>
                </div>
                <hr />
                <div className="row justify-content-between">
                    <div className="col-sm-5">
                        <div className="consumed">
                            <h4>1289 cal</h4>
                            <h6>consumed</h6>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="goal">
                            <h4>1550 cal</h4>
                            <h6>daily goal</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="progress" style={barHeight}>
                            <div className="progress-bar bg-purple" role="progressbar" style={barWidth} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="percentage">25%</div>
                    </div>
                </div>
                <div className="row justify-content-center meals">
                    <div className="col-sm-3">
                        <h5>95</h5>
                        <p>Breakfast</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>0</h5>
                        <p>Lunch</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>0</h5>
                        <p>Dinner</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>0</h5>
                        <p>Snack</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;
