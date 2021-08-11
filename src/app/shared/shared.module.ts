import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlightDetailListComponent } from './flight-detail-list/flight-detail-list.component'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { NavigationComponent } from './navigation/navigation.component'
import { HttpClientModule } from '@angular/common/http'
import { InMemoryApiService } from './in-memory-api/in-memory-api.service'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'


@NgModule({
  declarations: [FlightDetailListComponent, NavigationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryApiService)
  ],
  exports: [
    FlightDetailListComponent,
    NavigationComponent,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class SharedModule {}
