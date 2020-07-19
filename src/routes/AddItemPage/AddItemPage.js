import React, { Component } from 'react';
import '../../components/MenuItemForm/MenuItemForm.css';
import MenuItemForm from '../../components/MenuItemForm/MenuItemForm';

export default class AddItemPage extends Component {
    render() {
        return (
            <section className='RFormContent'>
                <h2 className="formTitle">Add Menu Items</h2>
               {/*  <form className="addForm" onSubmit={this.handleSubmit}> */}
                        <MenuItemForm />
                {/* <button onClick={this.addItem} className="addItemButton"> + Add item </button> */}
            
                {/* <div className="buttonBox extraMargin">
                        <button type='submit' className="button">
                            Add Item
                        </button> */}
                        {/* <NavLink
                            to={`/account`}
                            className="button"
                            onClick={this.alertCompleteUser}
                        >
                            Complete
                        </NavLink> */}
                        {/* <NavLink
                            onClick={this.alertCancelUser}
                            className="button"
                            to={`/account`}
                        >
                            Cancel
                        </NavLink>
                    </div> */}
                {/*     </form> */}
            </section >
        )
    };
}