import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
    const {
        image_url,
        title, 
        publisher,
        source_url,
        recipe_id
    } = this.props.recipe;

    const { handleDetailsId } = this.props;

    return(<React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
                <img src={image_url}
                className = "img-card-top"
                style={{height:"14rem"}}
                alt="recipe" />
                <div className="card-body text-capitalze">
                    <h6>{title}</h6>
                    <h6 className="text-warning text-slanted">
                        provided by {publisher}
                    </h6>
                </div>
                <div className="card-footer">
                    <button 
                    type="button" 
                    className="btn btn-primary text-capitalize" 
                    onClick={handleDetailsId}>
                        details
                    </button>
                    <a href={source_url} className="btn btn-success mx-2 text-capitalize" target="_blank" rel="noreferrer noopener">
                        recipe address
                    </a>
                </div>
            </div>
        </div>
    </React.Fragment>)
    }
}
