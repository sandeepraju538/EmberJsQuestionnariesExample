import Route from '@ember/routing/route';
export default class QuestionnairesListRoute extends Route {
  model() {
    return fetch('/api/questionnaries.json').then(async (res) => {
      const response = await res.clone().json();
      console.log(response);
      return response;
    });
  }
  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
