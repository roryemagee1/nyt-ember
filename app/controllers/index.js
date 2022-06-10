import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @service index;

  @action
  searchTitles(event) {
    let text = event.target.value
    this.index.text = text;
    console.log(this.index.text);
  }
}
