import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from 'angular2/http';

import {DateTimeService} from './date-time/date-time.service';
import {HelperService} from './helper/helper.service';

import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_PROVIDERS, DateTimeService, HelperService]);