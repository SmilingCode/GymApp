import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: null
        }

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })

        const searchInfo = {
            "appId": "9fafc24e",
            "appKey": "b251a4845a90a6c1a47f2b9bc8e0f2b4",
            "query": this.state.query,
            "fields": [
                "item_name",
                "brand_name",
                "nf_calories",
                "nf_sodium",
                "item_type"
            ],
            "sort": {
                "field": "nf_calories",
                "order": "desc"
            },
            "filters": {
                "item_type":2
            }
        }

        return fetch('https://api.nutritionix.com/v1_1/search', {
            method: 'POST',
            body: JSON.stringify(searchInfo),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(searchList => console.log(searchList))
        .catch(err => console.log(err.message));
    }

    searchListShow(searchList) {
        if (searchList) {
            return (

            );
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <form>
                            <i className="fa fa-search icon"></i>
                            <input type="text"
                                id="searchBox"
                                name="query"
                                className="form-control"
                                placeholder="Search foods..."
                                onChange={this.onSearch} />
                        </form>
                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <div className="time-control">
                            <a href="">&lt;</a>
                            <span className="date">Today</span>
                            <a href="">&gt;</a>
                        </div>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        );
    }
}

export default Header;
