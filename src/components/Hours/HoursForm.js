import React from 'react';
import './HoursForm.css';
import config from '../../config';
import { NavLink } from 'react-router-dom';
import CachowContext from '../../CachowContext';
import TokenService from '../../services/token-service';
import PropTypes from 'prop-types';

class HoursForm extends React.Component {
    static contextType = CachowContext;

    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    handleSubmit = event => {
        event.preventDefault();
        let uname = localStorage.getItem('name');

        const newHours = {
            sun_open: event.target['SundayOpen'].value,
            sun_close: event.target['SundayClose'].value,
            mon_open: event.target['MondayOpen'].value,
            mon_close: event.target['MondayClose'].value,
            tues_open: event.target['TuesdayOpen'].value,
            tues_close: event.target['TuesdayClose'].value,
            wed_open: event.target['WednesdayOpen'].value,
            wed_close: event.target['WednesdayClose'].value,
            thu_open: event.target['ThursdayOpen'].value,
            thu_close: event.target['ThursdayClose'].value,
            fri_open: event.target['FridayOpen'].value,
            fri_close: event.target['FridayClose'].value,
            sat_open: event.target['SaturdayOpen'].value,
            sat_close: event.target['SaturdayClose'].value,
            hours_owner: uname,
        }

        fetch(`${config.APIENDPOINT}/hours`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newHours),
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response.json()
            })
            .then(h => {
                this.context.addHours(h);
                alert('Hours successfully added!');
                window.location.href = `${this.props.nextLocation}`;
            })
            .catch(error => {
                alert('Error! ' + error);
            })
    }

    render() {
        return (
            <form className="addHourForm" onSubmit={this.handleSubmit}>
                <fieldset className="hoursFieldset">
                    <div className="hoursDisplay">
                        <div className="hoursGroup">
                            <h3>Sunday</h3>
                            <div className="hoursSection">
                                <div>
                                    <label htmlFor="SundayOpen" className="inputLabel">Time Open: </label>
                                    <input
                                        type="text"
                                        id="SundayOpen"
                                        name="SundayOpen"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="SundayClose" className="inputLabel">Time Close: </label>
                                    <input
                                        type="text"
                                        id="SundayClose"
                                        name="SundayClose"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hoursGroup">
                            <h3>Monday</h3>
                            <div className="hoursSection">
                                <div>
                                    <label htmlFor="MondayOpen" className="inputLabel">Time Open: </label>
                                    <input
                                        type="text"
                                        id="MondayOpen"
                                        name="MondayOpen"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="MondayClose" className="inputLabel">Time Close: </label>
                                    <input
                                        type="text"
                                        id="MondayClose"
                                        name="MondayClose"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hoursGroup">
                            <h3>Tuesday</h3>
                            <div className="hoursSection">
                                <div>
                                    <label htmlFor="TuesdayOpen" className="inputLabel">Time Open: </label>
                                    <input
                                        type="text"
                                        id="TuesdayOpen"
                                        name="TuesdayOpen"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="TuesdayClose" className="inputLabel">Time Close: </label>
                                    <input
                                        type="text"
                                        id="TuesdayClose"
                                        name="TuesdayClose"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hoursGroup">
                            <h3>Wednesday</h3>
                            <div className="hoursSection">
                                <div>
                                    <label htmlFor="WednesdayOpen" className="inputLabel">Time Open: </label>
                                    <input
                                        type="text"
                                        id="WednesdayOpen"
                                        name="WednesdayOpen"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="WednesdayClose" className="inputLabel">Time Close: </label>
                                    <input
                                        type="text"
                                        id="WednesdayClose"
                                        name="WednesdayClose"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hoursGroup">
                            <h3>Thursday</h3>
                            <div className="hoursSection">
                                <div>
                                    <label htmlFor="ThursdayOpen" className="inputLabel">Time Open: </label>
                                    <input
                                        type="text"
                                        id="ThursdayOpen"
                                        name="ThursdayOpen"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ThursdayClose" className="inputLabel">Time Close: </label>
                                    <input
                                        type="text"
                                        id="ThursdayClose"
                                        name="ThursdayClose"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hoursGroup">
                            <h3>Friday</h3>
                            <div className="hoursSection">
                                <div>
                                    <label htmlFor="FridayOpen" className="inputLabel">Time Open: </label>
                                    <input
                                        type="text"
                                        id="FridayOpen"
                                        name="FridayOpen"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="FridayClose" className="inputLabel">Time Close: </label>
                                    <input
                                        type="text"
                                        id="FridayClose"
                                        name="FridayClose"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hoursGroup">
                            <h3>Saturday</h3>
                            <div className="hoursSection">
                                <div>
                                    <label htmlFor="SaturdayOpen" className="inputLabel">Time Open: </label>
                                    <input
                                        type="text"
                                        id="SaturdayOpen"
                                        name="SaturdayOpen"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="SaturdayClose" className="inputLabel">Time Close: </label>
                                    <input
                                        type="text"
                                        id="SaturdayClose"
                                        name="SaturdayClose"
                                        className="textField"
                                        placeholder="ex. 12:00AM"
                                        onChange={this.handleUpdate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonBox">
                        <button type='submit' className="generalButton submit">
                            Next
                        </button>
                        <NavLink className="generalButton cancel" to={`/account`}>
                            Cancel
                        </NavLink>
                    </div>
                </fieldset>
            </form>
        );
    };
}

HoursForm.propTypes = {
    nextLocation: PropTypes.string,
}

export default HoursForm;