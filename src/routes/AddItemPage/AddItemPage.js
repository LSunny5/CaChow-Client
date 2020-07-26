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
                    <MenuItemForm restId={r_id}/>


                {/*//TODO:  do a submission after entire process is over*/}
               {/*  <form className="addForm" onSubmit={this.handleSubmit}> 
               <button onClick={this.addItem} className="addItemButton"> + Add item </button> 
               <div className="buttonBox extraMargin">
                        <button type='submit' className="button">
                            Add Item
                        </button> 
                         <NavLink
                            to={`/account`}
                            className="button"
                            onClick={this.alertCompleteUser}    >
                            Complete
                        </NavLink>
                        <NavLink
                            onClick={this.alertCancelUser}
                            className="button"
                            to={`/account`} >
                            Cancel
                        </NavLink>
                    </div>
                 </form> */}
            </section >
        )
    };
};

AddItemPage.propTypes = {
    r_id: PropTypes.string, 
}