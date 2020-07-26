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
            <section className='RFormContent'>
                <h2 className="formTitle">Edit Hours for Restaurant</h2>
                <form className="addHourForm" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label htmlFor="SundayOpen" className="inputLabel">Time Open on Sunday: </label>
                        <input
                            type="text"
                            id="SundayOpen"
                            name="SundayOpen"
                            className="textField"
                            defaultValue={foundHours.sun_open}
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
                            defaultValue={foundHours.sun_close}
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
                            defaultValue={foundHours.mon_open}
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
                            defaultValue={foundHours.mon_close}
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
                            defaultValue={foundHours.tues_open}
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
                            defaultValue={foundHours.tues_close}
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
                            defaultValue={foundHours.wed_open}
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
                            defaultValue={foundHours.wed_close}
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
                            defaultValue={foundHours.thu_open}
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
                            defaultValue={foundHours.thu_close}
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
                            defaultValue={foundHours.fri_open}
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
                            defaultValue={foundHours.fri_close}
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
                            defaultValue={foundHours.sat_open}
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
                            defaultValue={foundHours.sat_close}
                            placeholder="ex. 12:00AM"
                            onChange={this.handleUpdate}
                        />
                        <br />
                        <div className="buttonBox">
                            <button type='submit' className="button">
                                Update
                        </button>
                            <NavLink className="button" to={`/account`}>
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
    r_id: PropTypes.number.isRequired,
}

export default EditHoursPage;


/*

import PropTypes from 'prop-types';


LoginPage.propTypes = {
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
categories: PropTypes.arrayOf(
    PropTypes.shape({
        cat_id: PropTypes.number.isRequired,
        cat_name: PropTypes.string.isRequired,
    })
),

menu: PropTypes.arrayOf(
  PropTypes.shape({



    id: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
    tipname: PropTypes.string.isRequired,
    tipdescription: PropTypes.string.isRequired,
    directions: PropTypes.string.isRequired,
    sourcetitle: PropTypes.string,
    sourceurl: PropTypes.string,
    rating: PropTypes.number.isRequired,
    numraters: PropTypes.number.isRequired,




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
)
name: PropTypes.string,
   })
),

Account.propTypes = {
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
}

import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Account';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`Account component`, () => {
    const props = {
        r_id: 1,
        r_owner: 'OwnerS',
        r_image: 'NoneS',
        r_type: 'Fast',
        r_name: 'Restaurant Two',
        r_address: 'Address2',
        r_city: 'City2',
        r_state: 'State2',
        r_zip: 'Zip2',
        r_phone: 'Phone2',
        r_hours: 1
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Account {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Account form', () => {
        const wrapper = shallow(<Account {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});




*/