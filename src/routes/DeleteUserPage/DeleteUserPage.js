import React, { Component } from 'react';
import './DeleteUser.css';
import CachowContext from '../../CachowContext';
import config from '../../config';
import TokenService from '../../services/token-service';

export default class DeleteUserPage extends Component {
    static contextType = CachowContext;

    handleDelete = (event) => {
        event.preventDefault();
        let uname = localStorage.getItem('name');

        fetch(`${config.APIENDPOINT}/users/${uname}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json', 
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(response => {
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e))
                return response
            })
            .then(() => {
                this.context.deleteUser(uname);
                alert('User has been successfully deleted!');
                this.props.history.push('/login');
            })
            .catch(error => {
                console.error({ error })
                alert('Error! User was not deleted:  ' + error);
            })
    }

    handleCancel = (event) => {
        event.preventDefault();
        alert('Delete canceled, returning to account screen...');
        this.props.history.push('/account');
    }

    render() {
        return (
            <section className='deleteContent'>
                <h2 className="deleteHeading">Deleting User...</h2>
                <div className="restaurantBox">
                    <p className="deleteMessage">
                        Are you sure you want to delete this account?
                    </p>
                    <div className = "buttonBox">
                        <button onClick={this.handleDelete}>Delete</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </section >
        )
    };
}