import Route from '@ember/routing/route';

export default class DetailsRoute extends Route {
  async model(params) {
    let response = await fetch('/api/mock.json');
    let { results } = await response.json()
    let newResults = results.map((result, index) => {
      return {...result, id: index}
    })
    return newResults
  }
}