import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
    catBreedsEl: document.querySelector('.breed-select'),
    catInfoWrapper: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader-text'),
    error: document.querySelector('.error'),
    catSlimSelectWrapper: document.querySelector('.ss-main.breed-select'),
}


function getCatBreed(cat) {
    return `<option value="${cat.id}">${cat.name}</option>`;
}

function renderCatsBreedsList(cats) {
    let catsList;
    for (let i = 0; i < cats.length; i++) {
       catsList += getCatBreed(cats[i]);        
    }
    return catsList;
}