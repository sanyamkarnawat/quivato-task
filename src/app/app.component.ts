import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    // Apply initial theme styles on component initialization
    const currentTheme = this.themeService.getTheme();
    this.applyThemeStyles(currentTheme);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    const currentTheme = this.themeService.getTheme();
    this.applyThemeStyles(currentTheme);
  }

  private applyThemeStyles(theme: string): void {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }
}
