//https://www.howtographql.com/react-apollo/3-mutations-creating-links/
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import MUTATION_ADDUSER from '../graphql/testUserMutation.graphql';

const AddUser = () => {
    //form data held in local state by way of React's useState hook
    const [formState, setFormState] = useState({
        name: '',
        address: ''
    });

    const [addUser] = useMutation(MUTATION_ADDUSER, {
        variables: {
            name: formState.name,
            address: formState.address
        }
    });

    return (
        <div>
            <form onSubmit={(e) => { 
                e.preventDefault();
                addUser();
            }}>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={formState.name}
                        onChange={ (e) => 
                            setFormState({
                                ...formState,
                                name: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Enter your name"
                    />
                    <input
                        className='=mb2'
                        value={formState.address}
                        onChange= {(e) =>
                            setFormState({
                                ...formState,
                                address: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Enter a valid email address"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUser;