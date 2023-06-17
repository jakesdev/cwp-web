import { Injectable } from '@angular/core';
import { ApiService, NavigationService } from '../services';
//


class AppInfo {

}
@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  constructor(
    private apiService: ApiService,
    private navigationService: NavigationService,
  ) {
  }

  async initApp(): Promise<void> {

    const appInfo = this.apiService.get<any>('app-info');

    // check app health
    appInfo.subscribe(info => {
      switch (info.data[0].appStatus) {
        case 'INACTIVE': console.log('redirect inactive page'); break; //TODO
        case 'MAINTENANCE': this.navigationService.maintenancePage(); break;
        default: break;
      }

    });

    //get app configs lookup
    // const appConfigs = this.apiService.get<any>('app-config');
    // appConfigs.subscribe(configs => {
    //   console.log('configs', configs)
    // })
  }


}
