import React, {Component} from 'react'

const barHeight = {
    height: '5px',
    margin: '10px'
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
            snack = 0,
            percentage = 0;
        let currentPageId = this.props.currentPageId;

        if (currentPageId === 0) {
            totalConsumed = 0;
            breakfast = 0;
            lunch = 0;
            dinner = 0;
            snack = 0;

            let userFoodList = this.props.userFoodList;
            console.log(userFoodList)

            if (userFoodList) {
                userFoodList.map((li, index) => {
                    if (li.meal_type === 'Breakfast') {
                        breakfast += li.totalCalories;
                    } else if (li.meal_type === 'Lunch') {
                        lunch += li.totalCalories;
                    } else if (li.meal_type === 'Dinner') {
                        dinner += li.totalCalories;
                    } else if (li.meal_type === 'Snack') {
                        snack += li.totalCalories;
                    }

                    totalConsumed += li.totalCalories;
                })
            }
        } else {
            let list = this.props.mockData.data_points[currentPageId].intake_list;

            list.map((li, index) => {
                let sum = li.nf_calories * li.serving_size * li.serving_qty;

                if (li.meal_type === 'breakfast') {
                    breakfast += sum;
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

        let ratio = Math.round((totalConsumed/1500)*100);
        percentage = (ratio > 100) ? 100 : parseInt(ratio);

        const textMargin = {
            marginLeft: percentage < 10 ? (percentage + 5) + '%' : (percentage - 10) + '%'
        }

        const barWidth = {
            width: percentage + '%'
        };

        return (
            <div className="personalInfo">
                <div className="cover" style={isDisplay}></div>
                <div className="row user-info">
                    <div className="col-2 col-sm-4 min-weight">
                        <div className="circle-block weight">
                            <h6 className="c-font">{this.props.mockData.weight_kg}</h6>
                            <p className="c-unit">kg</p>
                        </div>
                    </div>
                    <div className="col-2 col-sm-4 img">
                        <img src="portrait.jpg" width="92" height="92" className="circle-img" alt=""/>
                    </div>
                    <div className="col-2 col-sm-4">
                        <div className="circle-block height">
                            <h6 className="c-font">{this.props.mockData.height_cm}</h6>
                            <p className="c-unit">cm</p>
                        </div>
                    </div>

                    <div className="col-4 col-sm-12 text-center name">
                        <span className="first_name">{this.props.mockData.first_name}</span> <span className="d-none d-sm-block last_name">{this.props.mockData.last_name}</span>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-between daily-panel">
                    <div className="col-5 col-sm-5">
                        <div className="consumed">
                            <h4>{Math.round(totalConsumed)} cal</h4>
                            <h6>consumed</h6>
                        </div>
                    </div>
                    <div className="col-7 col-sm-5">
                        <div className="goal">
                            <h4>{this.props.mockData.daily_goal} cal</h4>
                            <h6>daily goal</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 col-sm-12">
                        <div className="progress" style={barHeight}>
                            <div className="progress-bar bg-purple"
                                role="progressbar"
                                style={barWidth}
                                aria-valuenow={percentage}
                                aria-valuemin="0"
                                aria-valuemax="100">
                            </div>
                        </div>
                        <div className="percentage" style={textMargin}>{percentage + '%'}</div>
                    </div>
                </div>
                <div className="row meals">
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
