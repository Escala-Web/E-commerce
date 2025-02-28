
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

const token = localStorage.getItem('userLogin');

export const authorizationHeader = {
    headers: {
        Authorization: `Bearer ${JSON.parse(token[0].token)}`,
    }
}