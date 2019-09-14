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
        // search list display <=> cover display
        let isDisplay = {
            display: 'none'
        };

        if (this.props.isShowList) {
            isDisplay = {
                display: 'block'
            };
        } else {
            isDisplay = {
                display: 'none'
            };
        }

        // change the correspondant value when page id change
        let totalConsumed = 0,
            breakfast = 0,
            lunch = 0,
            dinner = 0,
            snack = 0;
        let currentPageId = this.props.currentPageId;

        if (currentPageId === 0) {
            totalConsumed = 0;
            breakfast = 0;
            lunch = 0;
            dinner = 0;
            snack = 0;
        } else {
            let list = this.props.mockData.data_points[currentPageId].intake_list;

            list.map((li, index) => {
                let sum = li.nf_calories * li.serving_size * li.serving_qty;

                if (li.meal_type === 'breakfast') {
                    breakfast = sum;
                } else if (li.meal_type === 'lunch') {
                    lunch += sum;
                } else if (li.meal_type === 'dinner') {
                    dinner += sum;
                } else if (li.meal_type === 'snack') {
                    snack += sum;
                }

                totalConsumed += sum;
            });
        }

        return (
            <div className="personalInfo">
                <div className="cover" style={isDisplay}></div>
                <div className="row user-info">
                    <div className="col-sm-4">
                        <div className="circle-block weight">
                            <h6 className="c-font">{this.props.mockData.weight_kg}</h6>
                            <p className="c-unit">kg</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <img src="alberto.png" width="92" height="92" className="circle-img" alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <div className="circle-block height">
                            <h6 className="c-font">{this.props.mockData.height_cm}</h6>
                            <p className="c-unit">cm</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">{this.props.mockData.first_name} {this.props.mockData.last_name}</div>
                </div>
                <hr />
                <div className="row justify-content-between">
                    <div className="col-sm-5">
                        <div className="consumed">
                            <h4>{Math.round(totalConsumed)} cal</h4>
                            <h6>consumed</h6>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="goal">
                            <h4>{this.props.mockData.daily_goal} cal</h4>
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
                        <h5>{ Math.round(breakfast) }</h5>
                        <p>Breakfast</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>{ Math.round(lunch) }</h5>
                        <p>Lunch</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>{ Math.round(dinner) }</h5>
                        <p>Dinner</p>
                    </div>
                    <div className="col-sm-2">
                        <h5>{ Math.round(snack) }</h5>
                        <p>Snack</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;