import React from 'react';
import '../../components/Hours/HoursForm.css';
import config from '../../config';
import { NavLink } from 'react-router-dom';
import CachowContext from '../../CachowContext';
import TokenService from '../../services/token-service';
import { findRest, findRestaurantHours } from '../../CachowHelpers';
import PropTypes from 'prop-types';

class EditHoursPage extends React.Component {
    static contextType = CachowContext;

    handleUpdate = event => {
        const { title, value } = event.target;
        this.setState({ [title]: value.trim() });
    }

    handleSubmit = event => {
        event.preventDefault();
        let uname = localStorage.getItem('name');
        const { restaurants, hours } = this.context;
        const { r_id } = this.props.match.params;
        let rest = findRest(restaurants, r_id);
        let foundHours = findRestaurantHours(hours, rest.r_hours);

        const editedHours = {
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

        fetch(`${config.APIENDPOINT}/hours/${foundHours.hours_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(editedHours),
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response
            })
            .then(h => {
                this.context.updateHours(h);
                alert('Hours successfully updated!');
                window.location.href = `/restaurants/${r_id}`;
            })
            .catch(error => {
                console.error({ error })
                alert('Error! ' + error);
            })
    }

    render() {
        const { restaurants, hours } = this.context;
        const { r_id } = this.props.match.params;
        let rest = findRest(restaurants, r_id) || {};
        let foundHours = findRestaurantHours(hours, rest.r_hours) || {};

        return (
            <section className='HFormContent'>
                <h2 className="formTitle">Edit Hours for Restaurant</h2>
                <form className="addHourForm" onSubmit={this.handleSubmit}>
                    <fieldset className="hoursFieldset">
                        <div className="hoursDisplay">
                            <div className="hoursGroup">
                                <h3>Sunday</h3>
                                <div className="hoursSection">
                                    <div>
                                        <label htmlFor="SundayOpen" className="inputLabel timeDesc">Time Open: </label>
                                        <input
                                            type="text"
                                            id="SundayOpen"
                                            name="SundayOpen"
                                            className="textField"
                                            defaultValue={foundHours.sun_open}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="SundayClose" className="inputLabel timeDesc">Time Close: </label>
                                        <input
                                            type="text"
                                            id="SundayClose"
                                            name="SundayClose"
                                            className="textField"
                                            defaultValue={foundHours.sun_close}
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
                                        <label htmlFor="MondayOpen" className="inputLabel timeDesc">Time Open: </label>
                                        <input
                                            type="text"
                                            id="MondayOpen"
                                            name="MondayOpen"
                                            className="textField"
                                            defaultValue={foundHours.mon_open}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="MondayClose" className="inputLabel timeDesc">Time Close: </label>
                                        <input
                                            type="text"
                                            id="MondayClose"
                                            name="MondayClose"
                                            className="textField"
                                            defaultValue={foundHours.mon_close}
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
                                        <label htmlFor="TuesdayOpen" className="inputLabel timeDesc">Time Open: </label>
                                        <input
                                            type="text"
                                            id="TuesdayOpen"
                                            name="TuesdayOpen"
                                            className="textField"
                                            defaultValue={foundHours.tues_open}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="TuesdayClose" className="inputLabel timeDesc">Time Close: </label>
                                        <input
                                            type="text"
                                            id="TuesdayClose"
                                            name="TuesdayClose"
                                            className="textField"
                                            defaultValue={foundHours.tues_close}
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
                                        <label htmlFor="WednesdayOpen" className="inputLabel timeDesc">Time Open: </label>
                                        <input
                                            type="text"
                                            id="WednesdayOpen"
                                            name="WednesdayOpen"
                                            className="textField"
                                            defaultValue={foundHours.wed_open}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="WednesdayClose" className="inputLabel timeDesc">Time Close: </label>
                                        <input
                                            type="text"
                                            id="WednesdayClose"
                                            name="WednesdayClose"
                                            className="textField"
                                            defaultValue={foundHours.wed_close}
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
                                        <label htmlFor="ThursdayOpen" className="inputLabel timeDesc">Time Open: </label>
                                        <input
                                            type="text"
                                            id="ThursdayOpen"
                                            name="ThursdayOpen"
                                            className="textField"
                                            defaultValue={foundHours.thu_open}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="ThursdayClose" className="inputLabel timeDesc">Time Close: </label>
                                        <input
                                            type="text"
                                            id="ThursdayClose"
                                            name="ThursdayClose"
                                            className="textField"
                                            defaultValue={foundHours.thu_close}
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
                                        <label htmlFor="FridayOpen" className="inputLabel timeDesc">Time Open: </label>
                                        <input
                                            type="text"
                                            id="FridayOpen"
                                            name="FridayOpen"
                                            className="textField"
                                            defaultValue={foundHours.fri_open}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="FridayClose" className="inputLabel timeDesc">Time Close: </label>
                                        <input
                                            type="text"
                                            id="FridayClose"
                                            name="FridayClose"
                                            className="textField"
                                            defaultValue={foundHours.fri_close}
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
                                        <label htmlFor="SaturdayOpen" className="inputLabel timeDesc">Time Open: </label>
                                        <input
                                            type="text"
                                            id="SaturdayOpen"
                                            name="SaturdayOpen"
                                            className="textField"
                                            defaultValue={foundHours.sat_open}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="SaturdayClose" className="inputLabel timeDesc">Time Close: </label>
                                        <input
                                            type="text"
                                            id="SaturdayClose"
                                            name="SaturdayClose"
                                            className="textField"
                                            defaultValue={foundHours.sat_close}
                                            placeholder="ex. 12:00AM"
                                            onChange={this.handleUpdate}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttonBox">
                            <button type='submit' className="generalButton submit">
                                Update
                            </button>
                            <NavLink className="generalButton cancel" to={`/account`}>
                                Cancel
                            </NavLink>
                        </div>
                    </fieldset>
                </form>
            </section >
        );
    };
}

EditHoursPage.propTypes = {
    restaurants: PropTypes.arrayOf(
        PropTypes.shape({
            r_id: PropTypes.number.isRequired,
            r_owner: PropTypes.string.isRequired,
            r_image: PropTypes.string,
            r_type: PropTypes.string,
            r_name: PropTypes.string,
            r_address: PropTypes.string,
            r_city: PropTypes.string,
            r_state: PropTypes.string,
            r_zip: PropTypes.string,
            r_phone: PropTypes.string,
            r_hours: PropTypes.number.isRequired
        })
    ),
    hours: PropTypes.arrayOf(
        PropTypes.shape({
            sun_open: PropTypes.string,
            sun_close: PropTypes.string,
            mon_open: PropTypes.string,
            mon_close: PropTypes.string,
            tues_open: PropTypes.string,
            tues_close: PropTypes.string,
            wed_open: PropTypes.string,
            wed_close: PropTypes.string,
            thu_open: PropTypes.string,
            thu_close: PropTypes.string,
            fri_open: PropTypes.string,
            fri_close: PropTypes.string,
            sat_open: PropTypes.string,
            sat_close: PropTypes.string,
            hours_owner: PropTypes.string.isRequired,
        })
    ),
    r_id: PropTypes.number,
}

export default EditHoursPage;