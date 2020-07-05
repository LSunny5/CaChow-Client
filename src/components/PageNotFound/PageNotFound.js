import React from 'react';
import './PageNotFound.css';

class PageNotFound extends React.Component {
    render() {
        return (
            <section className="noPageContent">
                <h1 className="noPageHeading">Page Not Found!</h1>
                <br />
                <div className="noPageDescription">
                    Sorry the page you are looking for cannot be found! Please check the url and try again!
                </div>
            </section>
        );
    }
}

export default PageNotFound;