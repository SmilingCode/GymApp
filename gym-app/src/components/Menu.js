import React, {Component} from 'react'

class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <div className="row food-item">
                    <div className="food-image">
                        <img src="uthappizza.png" width="40" height="40" alt=""/>
                    </div>
                    <div className="food-info">
                        <div className="food-name">
                            <span>Apple</span>
                            <p>1 medium (3" dia) 18</p>
                        </div>
                        <div className="food-energy">
                            <span>113 cal</span>
                            <p>Snack</p>
                        </div>
                    </div>
                </div>
                <div className="row food-item">
                    <div className="food-image">
                        <img src="uthappizza.png" width="40" height="40" alt=""/>
                    </div>
                    <div className="food-info">
                        <div className="food-name">
                            <span>Apple</span>
                            <p>1 medium (3" dia) 18</p>
                        </div>
                        <div className="food-energy">
                            <span>113 cal</span>
                            <p>Snack</p>
                        </div>
                    </div>
                </div>
                <div className="row food-item">
                    <div className="food-image">
                        <img src="uthappizza.png" width="40" height="40" alt=""/>
                    </div>
                    <div className="food-info">
                        <div className="food-name">
                            <span>Apple</span>
                            <p>1 medium (3" dia) 18</p>
                        </div>
                        <div className="food-energy">
                            <span>113 cal</span>
                            <p>Snack</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
