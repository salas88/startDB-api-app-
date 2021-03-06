export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this.transformlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starships = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starships);
  }
  
  _extractId(item) {
    const idReqExp = /\/([0-9]*)\/$/;
    return item.url.match(idReqExp)[1];
  }

  transformlanet(planet) {
    
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotationPeriod,
        diameter: planet.diameter
      }
  }

  _transformStarship(starships) {
    return {
      id: this._extractId(starships),
      name: starships.name,
      model: starships.model,
      manufactirer: starships.manufactirer,
      costInCredits: starships.costInCredits,
      length: starships.length,
      crew: starships.crew,
      passengers: starships.passengers,
      cargoCapacity: starships.cargoCapacity
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  } 
}