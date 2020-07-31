import React, { Component } from 'react';
import '../../components/MenuItemForm/MenuItemForm.css';
import MenuItemForm from '../../components/MenuItemForm/MenuItemForm';
import PropTypes from 'prop-types';

export default class AddItemPage extends Component {
    render() {
        const { r_id } = this.props.match.params;
        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Add Menu Items</h2>
                <MenuItemForm restId={r_id} />
            </section >
        )
    };
};

AddItemPage.propTypes = {
    r_id: PropTypes.string,
}