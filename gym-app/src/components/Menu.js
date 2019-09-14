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

        if (currentPageId === 0) {
            let userFoodList = this.props.userFoodList;
            console.log(userFoodList)

            if (userFoodList) {
                menuList = userFoodList.map((li, index) => {
                    return (
                        <div key={index} className="row food-item">
                            <div className="food-image">
                                <img src={li.thumb} width="40" height="40" alt=""/>
                            </div>
                            <div className="food-info">
                                <div className="food-name">
                                    <span>{li.food_name}</span>
                                    <p>{li.serving_size} {li.serving_unit} ({li.totalGrams})</p>
                                </div>
                                <div className="food-energy">
                                    <span>{li.totalCalories} cal</span>
                                    <p>{li.meal_type}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        } else {
            let list = this.props.mockData.data_points[currentPageId].intake_list;

            menuList = list.map((li, index) => {
                return (
                    <div key={index} className="row food-item">
                        <div className="food-image">
                            <img src={li.thumb} width="40" height="40" alt=""/>
                        </div>
                        <div className="food-info">
                            <div className="food-name">
                                <span>{li.food_name}</span>
                                <p>{li.serving_size} {li.serving_unit} ({li.serving_weight_grams})</p>
                            </div>
                            <div className="food-energy">
                                <span>{li.serving_size * li.nf_calories} cal</span>
                                <p>{li.meal_type}</p>
                            </div>
                        </div>
                    </div>
                )
            });
        }

        return (
            <div className="menu">
                <div className="cover" style={isDisplay}></div>

                { menuList }

            </div>
        );
    }
}

export default Menu;
