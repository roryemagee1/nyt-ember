import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/mock.json');
    // let data = await response.json();
    // let output = await data.results;
    // console.log(output);
    // return output
    let { results } = await response.json()
    console.log(results);
    return results
  }
}