```ts
import {MyTourService} from '@app-utils/my-tour.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        private readonly myTourService: MyTourService
    ) {
        this.myTourService.start([{
            anchorId: 'start-tour',
            title: 'Welcome',
            content: 'Welcome to the Ngx-UI-Tour tour!'
        }]);
    }

}
```
