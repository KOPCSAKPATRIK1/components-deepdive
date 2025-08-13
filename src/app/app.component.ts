import { Component } from '@angular/core';
import { TicketsComponent } from './tickets/tickets.component';
import { TrafficComponent } from './traffic/traffic.component';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './server-status/server-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TicketsComponent, TrafficComponent, HeaderComponent, ServerStatusComponent]
})
export class AppComponent {


}
