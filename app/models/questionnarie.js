import Model, { attr } from '@ember-data/model';

export default class QuestionnarieModel extends Model {
  @attr identifier;
  @attr name;
  @attr questions;
  @attr description;
  @attr category_name_hyphenated;
}
