import { Component, OnInit } from "@angular/core";
import { ItemsService, Champion, Item, SaveBuild } from "./items.service";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
})

export class ItemsComponent implements OnInit {
    searchText: string = '';
    situation: string = 'Standard';
    selectedChampion: Champion | null = null;
    filteredChampions: Champion[] = [];
    items: Item[] = [];
    savedBuilds: SaveBuild[] = [];

    constructor(private itemsService: ItemsService) {}

    ngOnInit(): void {
        this.filteredChampions = [];
        this.loadSaveBuilds();
    }

    filterChampions() {
        if (this.searchText.trim() === '') {
            this.filteredChampions = [];
            return;
        }

        this.filteredChampions = this.itemsService.getChampions().filter(champion =>
            champion.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }

    selectChampion(champ: Champion) {
        // console.log('Selected champion:', champ);
        this.selectedChampion = champ;
        this.searchText = champ.name;
        this.filteredChampions = [];
        this.updateItems();
    }

    handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && this.filteredChampions.length > 0) {
            this.selectChampion(this.filteredChampions[0]);
        }
    }

    updateItems() {
        if (this.selectedChampion) {
            this.items = this.itemsService.getItems(this.selectedChampion, this.situation);
            // console.log('Items:', this.items);
        }
    }

    saveBuild() {
        if (this.selectedChampion && this.items.length > 0) {
            this.itemsService.saveBuild({
                champion: this.selectedChampion.name,
                situation: this.situation,
                items: this.items.map(item => item.name),
            });
            this.loadSaveBuilds();
        }
    }

    deleteBuild(build: SaveBuild) {
        this.itemsService.deleteBuild(build);
        this.loadSaveBuilds();
    }

    loadSaveBuilds() {
        this.savedBuilds = this.itemsService.getSavedBuilds();
    }   
}