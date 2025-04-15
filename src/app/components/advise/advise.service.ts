import { Injectable } from "@angular/core";
import { Champion } from "./champion.model";

@Injectable ({
    providedIn: 'root'
})

export class AdviseService {
    private champions: Champion[] = [
        { name: 'Aatrox', role: 'Top', type: 'Fighter', difficulty: 4, description: 'Aatrox is a melee champion who excels in dueling and sustaining in fights.' },
        { name: 'Ahri', role: 'Mid', type: 'Mage', difficulty: 3, description: 'Ahri is a mobile mage who can charm enemies and deal burst damage.' },
        { name: 'Ashe', role: 'ADC', type: 'Marksman', difficulty: 2, description: 'Ashe is a ranged champion who excels at kiting and providing utility to her team.' },
        { name: 'Leona', role: 'Support', type: 'Tank', difficulty: 3, description: 'Leona is a tanky support who can engage and protect her allies.' },
        { name: 'Zed', role: 'Mid', type: 'Assassin', difficulty: 4, description: 'Zed is a high-damage assassin who can quickly eliminate squishy targets.' },
        { name: 'Jinx', role: 'ADC', type: 'Marksman', difficulty: 3, description: 'Jinx is a hyper-carry who excels at dealing damage in team fights.' },
        { name: 'Thresh', role: 'Support', type: 'Tank', difficulty: 4, description: 'Thresh is a versatile support who can hook enemies and save allies.' },
        { name: 'Lux', role: 'Mid', type: 'Mage', difficulty: 2, description: 'Lux is a poke mage who can deal damage from a distance and provide vision.' },
        { name: 'Garen', role: 'Top', type: 'Fighter', difficulty: 1, description: 'Garen is a tanky champion who can deal damage and silence enemies.' },
        { name: 'Soraka', role: 'Support', type: 'Healer', difficulty: 2, description: 'Soraka is a healer who can sustain her allies and provide utility.' },
        { name: 'leesin', role: 'Jungle', type: 'Fighter', difficulty: 4, description: 'Lee Sin is a mobile jungler who can engage and disengage quickly.' },
        { name: 'Kha\'Zix', role: 'Jungle', type: 'Assassin', difficulty: 4, description: 'Kha\'Zix is a stealthy assassin who can pick off isolated targets.' },
    ];

    getChampions(): Champion[] {
        return this.champions;
    }

    suggestChampion(team: Champion[]): Champion[] {
        const roles = team.map(champ => champ.role);
        const types = team.map(champ => champ.type);

        const requiredRoles = ['Top', 'Jungle','Mid', 'ADC', 'Support'];

        if (team.length === 0) {
            return this.champions.filter(champ => champ.difficulty <= 2); 
        } else if (team.length >= 5) {
            return [];
        }
        
        const missingRoles = requiredRoles.filter(role => !roles.includes(role));
        if (missingRoles.length > 0) {
            return this.champions.filter(champ => champ.role === missingRoles[0] && !roles.includes(champ.role));
        }
        
        if (!types.includes('Tank')) {
            return this.champions.filter(champ => champ.type === 'Tank'); 
        } else if (!types.includes('Fighter')) {
            return this.champions.filter(champ => champ.type === 'Fighter'); 
        } else if (!types.includes('Marksman')) {
            return this.champions.filter(champ => champ.type === 'Marksman'); 
        } else if (!types.includes('Mage')) {
            return this.champions.filter(champ => champ.type === 'Mage'); 
        } else if (!types.includes('Assassin')) {
            return this.champions.filter(champ => champ.type === 'Assassin'); 
        } else if (!types.includes('Healer')) {
            return this.champions.filter(champ => champ.type === 'Healer'); 
        } else {
            return this.champions.filter(champ => !roles.includes(champ.role) && champ.difficulty <= 2);
        }
    }

}