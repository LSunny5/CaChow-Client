import React, { Component } from 'react';
import HoursForm from '../../components/Hours/HoursForm';
import '../../components/Hours/HoursForm.css';

export default class AddHoursPage extends Component {
    render() {
        return (
            <section className='HFormContent'>
                <h2 className="formTitle">Add Restaurant Hours</h2>
                <HoursForm nextLocation="/restaurants/add" />
            </section >
        )
    };
}