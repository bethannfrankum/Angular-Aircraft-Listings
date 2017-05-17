import{Log} from './log';
export interface Product {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
    imageUrl: string;
    price: string;
    location: string;
    phone: string;
    model: string;
    condition: string;
    serial: string;
    logs: Log[];
}
