import { Application } from '../domain/Application';

export interface AppState {
    applications: Application[];
    errors: any[];
}