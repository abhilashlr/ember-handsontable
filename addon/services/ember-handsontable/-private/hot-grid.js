import Service from '@ember/service';

export default class EmberHandsontablePrivateHotGridService extends Service {
  async load() {
    let Handsontable = (await import('handsontable')).default;
    
    return Handsontable;
  }
}
