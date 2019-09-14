import React from 'react';

class FoodDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serving: 1,
            grams: 0,
            calories: 0,
            meal_type: 'Breakfast'
        }
        this.storeUserInfo = this.storeUserInfo.bind(this);
        this.handleMealChange = this.handleMealChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    increaseServing() {
        this.setState({
            serving: this.state.serving + 1,
            grams: this.props.currentFoodDetail.grams * (this.state.serving + 1),
            calories: this.props.currentFoodDetail.calories * (this.state.serving + 1)
        })
    }

    decreaseServing() {
        if (this.state.serving > 1) {
            this.setState({
                serving: this.state.serving - 1,
                grams: this.props.currentFoodDetail.grams * (this.state.serving - 1),
                calories: this.props.currentFoodDetail.calories * (this.state.serving - 1)
            })
        }
    }

    handleMealChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    storeUserInfo() {
        const foodDetails = {
            food_name: this.props.currentFoodDetail.foodName,
            serving_unit: this.props.currentFoodDetail.unit,
            totalGrams: this.state.grams,
            totalCalories: this.state.calories,
            thumb: this.props.currentFoodDetail.image,
            meal_type: this.state.meal_type,
            serving_size: this.state.serving
        }

        this.props.userFoodDetail(foodDetails)
        this.handleReset();
        this.props.setQueryState(false);
    }

    handleReset() {
        setTimeout(() => {
            this.setState({
                serving: 1,
                grams: 0,
                calories: 0,
                meal_type: 'Breakfast'
            });
        }, 1000);
    }

    render() {

        return (
            <div className="modal fade" aria-hidden="true" role="dialog" id="foodDetail">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-img">
                                <img
                                    src={ this.props.currentFoodDetail.image }
                                    width="64"
                                    height="64"
                                    alt="uthappizza"
                                /><br />
                                <h5 className="modal-title">
                                    { this.props.currentFoodDetail.foodName }
                                </h5>
                            </div>
                            <button className="close" data-dismiss="modal" onClick={this.handleReset}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <hr />
                            <div className="itemVals">
                                <div className="savings">
                                    <div className="selection">
                                        <div className="savingVal">
                                            <h6>Servings</h6>
                                            <p>{ this.state.serving }.0</p>
                                        </div>
                                        <div className="icons">
                                            <i className="fa fa-chevron-up"
                                                onClick={() => this.increaseServing()}></i>
                                            <i className="fa fa-chevron-down"
                                                onClick={() => this.decreaseServing()}></i>
                                        </div>
                                    </div>
                                    <span>{this.props.currentFoodDetail.unit}</span>
                                </div>
                                <div className="grams">
                                    <h5>{ this.state.grams ? this.state.grams : this.props.currentFoodDetail.grams }</h5>
                                    <p>grams</p>
                                </div>
                                <div className="calories">
                                    <h5>{ this.state.calories ? this.state.calories : this.props.currentFoodDetail.calories }</h5>
                                    <p>calories</p>
                                </div>
                            </div>
                            <hr />
                            <div className="itemCategory">
                                <h5>ADD TO TODAY</h5>
                                <span className="custom-dropdown">
                                    <select
                                        name="meal_type"
                                        value={this.state.meal_type}
                                        onChange={this.handleMealChange}>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>
                                        <option value="Snack">Snack</option>
                                    </select>
                                </span>
                            </div>
                            <button data-dismiss="modal" onClick={this.storeUserInfo} className="addButton">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodDetail;
