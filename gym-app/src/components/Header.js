import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: null,
            queryState: this.props.isShowList,
            date: 0
        }

        this.onSearch = this.onSearch.bind(this);
        this.searchListShow = this.searchListShow.bind(this);
    }

    onSearch(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })

        const appId = "9fafc24e";
        const appKey = "b251a4845a90a6c1a47f2b9bc8e0f2b4";
        const queryVal = this.state.query;

        return fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + queryVal, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "x-app-id": appId,
                "x-app-key": appKey
            }
        })
        .then(res => res.json())
        .then(searchList => this.searchListShow(searchList))
        .catch(err => console.log(err.message));
    }

    searchListShow(searchList) {
        // query response 0 item
        if (searchList.total === 0) {
            this.props.getQueryState(false);
        // input box is empty
        } else if(!this.state.query) {
            this.props.getQueryState(false);
            // this.setState({
            //     queryState: false
            // })
        } else {
            this.props.getQueryState(true);
            // this.setState({
            //     queryState: true
            // })
        }
        this.props.getQueryRes(searchList)
    }

    moveLeft() {
        //const crtIndex = $('div.active').index();
        if (this.props.currentPageId < 2) {
            this.props.pageMoveLeft();
        }
    }

    moveRight() {
        //const crtIndex = $('div.active').index();
        if (this.props.currentPageId > 0) {
            this.props.pageMoveRight();
        }
    }

    render() {
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

        let date = new Date();
        let beforeYesterday_mill = date.getTime() - 2000*60*60*24;

        let beforeYesterday = new Date();
        beforeYesterday.setTime(beforeYesterday_mill);

        return (
            <div className="container">
                <div className="header">
                    <div className="cover" style={isDisplay}></div>
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm searchBox">
                            <form className="form">
                                <i className="fa fa-search icon"></i>
                                <input type="text"
                                    id="searchBox"
                                    name="query"
                                    className="form-control"
                                    placeholder="Search foods..."
                                    autoComplete="off"
                                    onChange={this.onSearch} />
                            </form>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                    <div className="row date">
                        <div className="col-sm"></div>
                        <div className="col-sm">


                            <div id="mycarousel" className="carousel slide" data-ride="carousel">
                              <div className="carousel-inner">
                                <div className="carousel-item">
                                    <div className="time-control">
                                        {new Intl.DateTimeFormat('en-US', {month: 'short', day: '2-digit'}).format(beforeYesterday)}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="time-control">
                                        Yesterday
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div className="time-control">
                                        Today
                                    </div>
                                </div>
                              </div>


                            </div>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
                <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next" onClick={() => this.moveRight()}>
                    <span>&gt;</span>
                </a>
                <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev" onClick={() => this.moveLeft()}>
                    <span aria-hidden="true">&lt;</span>
                </a>
            </div>
        );
    }
}

export default Header;
