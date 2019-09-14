import React, {Component} from 'react'

const appId = "9fafc24e";
const appKey = "b251a4845a90a6c1a47f2b9bc8e0f2b4";

class SearchList extends Component {

    getCommonDetails(index) {
        const common_food_name = this.props.queryRes.common[index].food_name;
        let queryData = {
            "query": common_food_name
        }

        return fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
            method: 'POST',
            body: JSON.stringify(queryData),
            headers: {
                "Content-Type": "application/json",
                "x-app-id": appId,
                "x-app-key": appKey
            }
        })
        .then(res => res.json())
        .then(commonData => this.postDetails(commonData))
        .catch(err => console.log(err.message));
    }

    postDetails(foodData) {
        //console.log(foodData)
        const currentFoodInfo = {
            foodName: foodData.foods[0].food_name,
            grams: Math.round(foodData.foods[0].serving_weight_grams),
            calories: Math.round(foodData.foods[0].nf_calories),
            unit: foodData.foods[0].serving_unit,
            image: foodData.foods[0].photo.thumb
        }

        this.props.currentFoodInfo(currentFoodInfo);
    }

    getBrandDetails(index) {
        const nix_item_id = this.props.queryRes.branded[index].nix_item_id;

        return fetch('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=' + nix_item_id,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "x-app-id": appId,
                "x-app-key": appKey
            }
        })
        .then(res => res.json())
        .then(brandData => this.postDetails(brandData))
        .catch(err => console.log(err.message));
    }

    render() {
        let commonList;
        if (this.props.queryRes.common) {
            commonList = this.props.queryRes.common.map((list, index) => {
                if (index < 5) {
                    return (
                        <a key={index}
                            data-toggle="modal"
                            data-target="#foodDetail"
                            onClick={() => this.getCommonDetails(index)}
                        >
                            <div className="searchItem">
                                <div className="search-image">
                                    <img src={list.photo.thumb} width="40" height="40" alt=""/>
                                </div>
                                <div className="search-name">
                                    <h6>{list.food_name}</h6>
                                </div>
                            </div>
                        </a>
                    );
                }
            });
        }
        let brandedList;
        if (this.props.queryRes.branded) {
            brandedList = this.props.queryRes.branded.map((list, index) => {
                if (index < 5) {
                    return (
                        <a key={index}
                            data-toggle="modal"
                            data-target="#foodDetail"
                            onClick={() => this.getBrandDetails(index)}
                        >
                            <div className="searchItem">
                                <div className="search-image">
                                    <img src={list.photo.thumb} width="40" height="40" alt=""/>
                                </div>
                                <div className="search-name">
                                    <h6>{list.brand_name_item_name}</h6>
                                    <span>{list.brand_name}</span>
                                </div>
                            </div>
                        </a>
                    );
                }
            })
        }
        return (
            <div className="container">
                <div className="searchList">
                    <div className="common">
                        <h5>COMMON</h5>
                        { commonList }
                    </div>
                    <div className="branded">
                        <h5>BRANDED</h5>
                        { brandedList }
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchList;
