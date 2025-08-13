import { Component } from '@angular/core';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TicketsComponent, TrafficComponent, HeaderComponent, ServerStatusComponent, DashboardItemComponent, DashboardItemComponent]
})
export class AppComponent {


}
