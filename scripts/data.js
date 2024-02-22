const getData = async () => {
    const response = await fetch('./data/pets.json');
    const json = await response.json();
    return json;
}

export const pets = await getData();