import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_kTsQxmYswvuMzk0C8MlLyJX0PmqkIFyi7b4g1w5vtnqKPQVJsXTTwWEYtJ5SrDia";

const baseUrl = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
    const url = baseUrl;

    return axios.get(url).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
    const baseUrl = baseUrl;
    const PARAMS = new URLSearchParams({ breed_ids: breedId });
    const url = `${baseUrl}?${PARAMS}`;

    return axios.get(url).then(response => response.data);
}