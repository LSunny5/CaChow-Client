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
                console.error({ error })
                alert('Error! ' + error);
            })
    }

    render() {


        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return (
            <form className="addHourForm" onSubmit={this.handleSubmit}>
                <fieldset>
                    <label htmlFor="SundayOpen" className="inputLabel">Time Open on Sunday: </label>
                    <input
                        type="text"
                        id="SundayOpen"
                        name="SundayOpen"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="SundayClose" className="inputLabel">Time Close on Sunday: </label>
                    <input
                        type="text"
                        id="SundayClose"
                        name="SundayClose"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="MondayOpen" className="inputLabel">Time Open on Monday: </label>
                    <input
                        type="text"
                        id="MondayOpen"
                        name="MondayOpen"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="MondayClose" className="inputLabel">Time Close on Monday: </label>
                    <input
                        type="text"
                        id="MondayClose"
                        name="MondayClose"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="TuesdayOpen" className="inputLabel">Time Open on Tuesday: </label>
                    <input
                        type="text"
                        id="TuesdayOpen"
                        name="TuesdayOpen"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="TuesdayClose" className="inputLabel">Time Close on Tuesday: </label>
                    <input
                        type="text"
                        id="TuesdayClose"
                        name="TuesdayClose"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="WednesdayOpen" className="inputLabel">Time Open on Wednesday: </label>
                    <input
                        type="text"
                        id="WednesdayOpen"
                        name="WednesdayOpen"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="WednesdayClose" className="inputLabel">Time Close on Wednesday: </label>
                    <input
                        type="text"
                        id="WednesdayClose"
                        name="WednesdayClose"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="ThursdayOpen" className="inputLabel">Time Open on Thursday: </label>
                    <input
                        type="text"
                        id="ThursdayOpen"
                        name="ThursdayOpen"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="ThursdayClose" className="inputLabel">Time Close on Thursday: </label>
                    <input
                        type="text"
                        id="ThursdayClose"
                        name="ThursdayClose"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="FridayOpen" className="inputLabel">Time Open on Friday: </label>
                    <input
                        type="text"
                        id="FridayOpen"
                        name="FridayOpen"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="FridayClose" className="inputLabel">Time Close on Friday: </label>
                    <input
                        type="text"
                        id="FridayClose"
                        name="FridayClose"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="SaturdayOpen" className="inputLabel">Time Open on Saturday: </label>
                    <input
                        type="text"
                        id="SaturdayOpen"
                        name="SaturdayOpen"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <label htmlFor="SaturdayClose" className="inputLabel">Time Close on Saturday: </label>
                    <input
                        type="text"
                        id="SaturdayClose"
                        name="SaturdayClose"
                        className="textField"
                        placeholder="ex. 12:00AM"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <div className="buttonBox">
                        <button type='submit' className="button">
                            Next
                        </button>
                        <NavLink className="button" to={`/account`}>
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