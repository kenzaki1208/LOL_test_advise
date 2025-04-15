import { Component } from '@angular/core';
import { RuneService, Champion, Rune } from './rune.service';

@Component({
    selector: 'app-rune',
    templateUrl: './rune.component.html',
    styleUrls: ['./rune.component.scss']
})
export class RuneComponent {
    champions: Champion[] = [];
    filteredChampions: Champion[] = [];
    searchText: string = '';
    selectedChampion: Champion | null = null;

    constructor(private runeService: RuneService) {
        this.champions = this.runeService.getChampions();
        this.filteredChampions = [];
    }

    filterChampions() {
        if (this.searchText.trim() === '') {
            this.filteredChampions = [];
            return;
        }

        this.filteredChampions = this.champions.filter( champ =>
            champ.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }

    selectChampion(champ: Champion) {
        this.selectedChampion = champ;
        this.searchText = champ.name;
        this.filteredChampions = [];
    }

    handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && this.filteredChampions.length > 0) {
            this.selectChampion(this.filteredChampions[0]);
        }
    }

    getTopRunes(champion: Champion): Rune[] {
        return this.runeService.getTopRunes(champion);
    }
}