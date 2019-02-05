import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		AllProductsComponent,
		HomeComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
