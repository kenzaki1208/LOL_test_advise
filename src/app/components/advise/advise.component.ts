import { Component } from '@angular/core';
import { AdviseService } from './advise.service';
import { Champion } from './champion.model'; 

@Component({
    selector: 'app-advise',
    templateUrl: './advise.component.html',
    styleUrls: ['./advise.component.scss']
})
export class AdviseComponent {
    Champions: Champion[] = [];
    team: Champion[] = [];
    suggestions: Champion[] = [];
    selectedChampion: Champion | null = null;

    constructor(private adviseService: AdviseService) {
        this.Champions = this.adviseService.getChampions();
        this.updateSuggestions();
    }

    addToTeam(champion: Champion | null) {
        if (!champion || this.team.length >= 5 || this.team.includes(champion)) {
            this.selectedChampion = null;
            return; 
        }

        this.team.push(champion);
        this.updateSuggestions();
        this.selectedChampion = null;

    }

    removeFromTeam(champion: Champion) {
        this.team = this.team.filter(c => c !== champion);
        this.updateSuggestions();
    }

    // onChampionSelect(event: Event): void {
    //     const selectElement = event.target as HTMLSelectElement; // Cast to HTMLSelectElement
    //     const selectedIndex = selectElement.selectedIndex - 1; // Adjust index if needed
    //     if (selectedIndex >= 0) {
    //         this.addToTeam(this.Champions[selectedIndex]);
    //     }
    // }

    updateSuggestions() {
        this.suggestions = this.adviseService.suggestChampion(this.team);
    }
}