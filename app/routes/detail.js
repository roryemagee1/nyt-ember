import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service'

export default class DetailRoute extends Route {
  // @service index;

  async model(params) {
    // let response = await fetch('/api/mock.json');
    let response = await fetch(
      'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OGvAOaWN79RLeir943VLb8GYddZl7cSh'
    );
    let { results } = await response.json();
    let newResults = results.map((result, index) => {
      return { ...result, id: index };
    });
    let output = newResults.find((result) => result.id == params.id);
    // console.log(this.index.fetched);
    // let output = this.index.fetched.data.find(result => result.id == params.id);
    return [output];
  }
}
