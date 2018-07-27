import {Track}  from './track';

export interface Album {

    name : string;
    releaseDate : string;
    coverImae : string;
    tracks : Track[];
}
