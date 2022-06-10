import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexService extends Service {
  fetched = {};
  searched = [];
  text = '';

  storeData(data) {
    this.fetched = { data };
  }

  searchData(text) {
  }
}
