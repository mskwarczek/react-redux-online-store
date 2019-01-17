import { number, string, shape } from 'prop-types';

export const productShape = shape({
    id: number.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    image: string.isRequired,
    price: number.isRequired
});

export const cartItemShape = shape({
    id: number.isRequired,
    quantity: number.isRequired
});

export const displayShape = shape ({
    name: string.isRequired,
    sortType: string.isRequired
});

export const shipmentDataShape = shape ({
    firstName: string.isRequired,
    lastName: string.isRequired,
    country: string.isRequired,
    postCode: string.isRequired,
    city: string.isRequired,
    address: string.isRequired,
    phoneNumber: string.isRequired
});
