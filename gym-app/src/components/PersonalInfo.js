import React, {Component} from 'react'

// the default value for progress bar
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

        // Change the correspondant value when page id change
        let totalConsumed = 0,
            breakfast = 0,
            lunch = 0,
            dinner = 0,
            snack = 0,
            percentage = 0;
        let currentPageId = this.props.currentPageId;

        // Page today
        if (currentPageId === 0) {
            totalConsumed = 0;
            breakfast = 0;
            lunch = 0;
            dinner = 0;
            snack = 0;

            // userFoodList is all the data user added in our state
            let userFoodList = this.props.userFoodList;
            //console.log(userFoodList)

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
            // list is our mock data, get from local mockData.js file
            let list = this.props.mockData.data_points[currentPageId].intake_list;

            if (list) {
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
        }
        // Calculate percentage to update progress bar
        let ratio = Math.round((totalConsumed/1500)*100);
        percentage = (ratio > 100) ? 100 : parseInt(ratio);

        const textMargin = {
            marginLeft: percentage < 20 ? (percentage + 5) + '%' : (percentage - 10) + '%'
        }

        const barWidth = {
            width: percentage + '%'
        };

        return (
            <div className="user-panel">
                <div className="container">
                    <div className="cover" style={isDisplay}></div>
                    <div className="row justify-content-md-center user-info-row">
                        <div className="col-12">
                            <div className="user-info">
                                <div className="d-md-none d-block firstname">Jane</div>
                                <div className="weight grey-circle">
                                    <h6>{this.props.mockData.weight_kg}</h6>
                                    <span>kg</span>
                                </div>
                                <div className="image-circle">
                                    <img src="portrait.jpg" className="img-circle" alt="portrait" />
                                </div>
                                <div className="height grey-circle">
                                    <h6>{this.props.mockData.height_cm}</h6>
                                    <span>cm</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block user-name">
                            <span className="firstname">{this.props.mockData.first_name}</span>
                            <span className="lastname">{this.props.mockData.last_name}</span>
                        </div>
                    </div>
                    <div className="row justify-content-between user-data">
                        <div className="consumed">
                            <h4>{Math.round(totalConsumed)} cal</h4>
                            <span>consumed</span>
                        </div>
                        <div className="goal">
                            <h4>{this.props.mockData.daily_goal} cal</h4>
                            <span>daily goal</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pl-md-0 pr-md-0">
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
                    <div className="row justify-content-center user-meal">
                        <div className="col-11 col-md-10 text-center meal">
                            <div className="breakfast">
                                <h6>{ Math.round(breakfast) }</h6>
                                <span>Breakfast</span>
                            </div>
                            <div className="lunch">
                                <h6>{ Math.round(lunch) }</h6>
                                <span>Lunch</span>
                            </div>
                            <div className="dinner">
                                <h6>{ Math.round(dinner) }</h6>
                                <span>Dinner</span>
                            </div>
                            <div className="snack">
                                <h6>{ Math.round(snack) }</h6>
                                <span>Snack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;
