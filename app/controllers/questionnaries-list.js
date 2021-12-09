import Controller from '@ember/controller';

export default class QuestionnairesListController extends Controller {
  get getQuestionaries() {
    console.log('model', this.model);
    return this.model.questionnaries;
  }

  checkboxClicked(value) {
    console.log(value);
  }
}
