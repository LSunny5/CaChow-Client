import React, { Component } from 'react';
import './DeleteUser.css';
import config from '../../config';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import PropTypes from 'prop-types';

export default class DeleteUserPage extends Component {
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
                alert('User has been successfully deleted!');
                TokenService.clearAuthToken()
                TokenService.clearCallbackBeforeExpiry()
                IdleService.unRegisterIdleResets()
                this.props.history.push('/login');
            })
            .catch(error => {
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
                <div className="deleteBox">
                    <p className="deleteMessage">
                        Are you sure you want to <span className="redandbold">delete</span> this account?
                    </p>
                    <div className="deleteButtonBox">
                        <button className="deleteButton redshade redandbold" onClick={this.handleDelete}>Delete</button>
                        <button className="deleteButton yellowshade" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </section >
        )
    };
};

DeleteUserPage.propTypes = {
    history: PropTypes.object,
};