import Route from '@ember/routing/route';

export default class DetailRoute extends Route {
  async model(params) {
    let response = await fetch('/api/mock.json');
    let { results } = await response.json()
    let newResults = results.map((result, index) => {
      return {...result, id: index}
    })
    let output = newResults.find(result => result.id == params.id);
    return [output];
  }
}