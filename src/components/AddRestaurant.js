import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class AddRestaurant extends Component {
    state = {
        open: false,
        name: '',
        location: {
            address: ''
        },
        user_rating: {
            aggregate_rating: ''
        },
        cuisine: '',
        average_cost_for_two: ''
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.carTotal + 1
        delete payload.open
        this.props.addRestaurant(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                location: {
                    address: ''
                },
                cuisines: '',
                average_cost_for_two: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <h1>Add Restaurant:</h1>
                    <Button
                        variant="contained"
                        className="add-car"
                        onClick={this.toggleDialog}
                    >
                        Add Restaurant
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Restaurant</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={this.state.location.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="rating" 
                                    placeholder="Personal Rating" 
                                    value={this.state.user_rating.aggregate_rating} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="cuisine" 
                                    placeholder="Type of Cuisine" 
                                    value={this.state.cuisines} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="average_cost_for_two" 
                                    placeholder="Average Cost for Two" 
                                    value={this.state.average_cost_for_two} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddRestaurant;