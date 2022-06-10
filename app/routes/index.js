import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  // @service index;

  async model() {
    // let response = await fetch('/api/mock.json');
    let response = await fetch(
      'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=OGvAOaWN79RLeir943VLb8GYddZl7cSh'
    );
    let { results } = await response.json();
    let newResults = results.map((result, index) => {
      return { ...result, id: index };
    });
    // console.log(this.index.fetched);
    // this.index.storeData(newResults);
    // console.log(this.index.fetched);
    return newResults;
  }
}
