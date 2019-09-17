import React, {Component} from 'react'

class Menu extends Component {

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
        let currentPageId = this.props.currentPageId;
        let menuList;

        // Page today
        if (currentPageId === 0) {
            // userFoodList is all the data user added in our state
            let userFoodList = this.props.userFoodList;

            if (userFoodList) {
                menuList = userFoodList.map((li, index) => {
                    return (
                        <div key={index} className="row food-ul">
                            <div className="col-12 mr-0 pr-0 food-item">
                                <div className="food-image">
                                    <img src={li.thumb} width="40" height="40" alt=""/>
                                </div>
                                <div className="food-info">
                                    <div className="food-name">
                                        <span className="bigger-font">{li.food_name}</span>
                                        <p className="sub-font">
                                            {li.serving_size} {li.serving_unit} ({ Math.round(li.totalGrams) + 'g' })
                                        </p>
                                    </div>
                                    <div className="food-energy">
                                        <span className="bigger-font">
                                            { Math.round(li.serving_size * li.totalCalories) } cal
                                        </span>
                                        <p className="sub-font">{li.meal_type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        } else {
            // currentPageId decides we take yesterday data or before yesterday data
            let list = this.props.mockData.data_points[currentPageId].intake_list;

            menuList = list.map((li, index) => {
                return (
                    <div key={index} className="row food-ul">
                        <div className="col-12 mr-0 pr-0 food-item">
                            <div className="food-image">
                                <img src={li.thumb} width="40" height="40" alt=""/>
                            </div>
                            <div className="food-info">
                                <div className="food-name">
                                    <span className="bigger-font">{li.food_name}</span>
                                    <p className="sub-font">
                                        {li.serving_size} {li.serving_unit} ({ Math.round(li.serving_weight_grams) + 'g' })
                                    </p>
                                </div>
                                <div className="food-energy">
                                    <span className="bigger-font">
                                        { Math.round(li.serving_size * li.nf_calories) } cal
                                    </span>
                                    <p className="sub-font">{li.meal_type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }

        return (
            <div className="food-list">
                <div className="container">
                    <div className="cover" style={isDisplay}></div>
                    { menuList }
                </div>
            </div>
        );
    }
}

export default Menu;
