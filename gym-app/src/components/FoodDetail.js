import React from 'react';

class FoodDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serving: 1,
            grams: 0,
            calories: 0
        }
        this.updateUserInfo = this.updateUserInfo.bind(this);
    }

    componentDidMount() {
        this.setState({
            grams: this.props.currentFoodDetail.grams,
            calories: this.props.currentFoodDetail.calories
        })
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

    updateUserInfo() {

    }

    render() {
        return (
            <div className="modal fade" aria-hidden="true" role="dialog" id="foodDetail">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-img">
                                <img src="uthappizza.png" width="64" height="64" alt="uthappizza"/><br />
                                <h5 className="modal-title">{this.props.currentFoodDetail.foodName}</h5>
                            </div>
                            <button className="close" data-dismiss="modal">
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
                                            <i className="fa fa-chevron-up" onClick={() => this.increaseServing()}></i>
                                            <i className="fa fa-chevron-down" onClick={() => this.decreaseServing()}></i>
                                        </div>
                                    </div>
                                    <span>{this.props.currentFoodDetail.unit}</span>
                                </div>
                                <div className="grams">
                                    <h5>{ this.state.grams }</h5>
                                    <p>grams</p>
                                </div>
                                <div className="calories">
                                    <h5>{ this.state.calories }</h5>
                                    <p>calories</p>
                                </div>
                            </div>
                            <hr />
                            <div className="itemCategory">
                                <h5>ADD TO TODAY</h5>
                                <span className="custom-dropdown">
                                    <select>
                                        <option>Breakfast</option>
                                        <option>Lunch</option>
                                        <option>Dinner</option>
                                        <option>Snack</option>
                                    </select>
                                </span>
                            </div>

                            <button onClick={this.updateUserInfo} className="addButton">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodDetail;
