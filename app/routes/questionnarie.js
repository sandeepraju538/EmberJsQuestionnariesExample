import Route from '@ember/routing/route';

export default class QuestionnaireRoute extends Route {
  model(params) {
    const { questionnaire_id } = params;
    return questionnaire_id;
  }
}
