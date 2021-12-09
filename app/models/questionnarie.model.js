import DS from 'ember-data';
import App from '../app';

App.questionnarie = DS.Model.extend({
  id: string,
  identifier: string,
  name: string,
  questions: Questions < Array > [],
  description: string,
  category_name_hyphenated: string,
});

App.Questions = DS.Model.extend({
  question_type: 'multiple-choice',
  identifier: 'list_12110962',
  headline: 'Wen möchtest Du versichern?',
  description: null,
  required: false,
  multiple: 'false',
  choices: Choices < Array > [],
  jumps: [],
});

App.Choices = DS.Model.extend({
  label: string,
  value: string,
  selected: false,
});
