import { Injectable } from "@angular/core";
 
export interface Champion {
    name: string;
    role: string;
    type: string;
}

export interface Rune {
    name: string;
    description: string;
    suitableFor: string[];
}

@Injectable({
    providedIn: 'root'
})

export class RuneService {
    private champions: Champion[] = [
        { name: 'Aatrox', role: 'Top', type: 'Fighter' },
        { name: 'Ahri', role: 'Mid', type: 'Mage' },
        { name: 'Akali', role: 'Mid', type: 'Assassin' },
        { name: 'Alistar', role: 'Support', type: 'Tank' },
        { name: 'Amumu', role: 'Jungle', type: 'Tank' },
        { name: 'Jinx', role: 'ADC', type: 'Marksman' },
        { name: 'renekton', role: 'Top', type: 'Fighter' },
        { name: 'Jhin', role: 'ADC', type: 'Marksman' },
        { name: 'Thresh', role: 'Support', type: 'Tank' },
        { name: 'Leesin', role: 'Jungle', type: 'Fighter' },
    ];

    private runes: Rune[] = [
        { name: 'Conqueror', description: 'Tăng sát thương lâu dài', suitableFor: ['Fighter', 'Tank']},
        { name: 'Electrocute', description: 'Sát thương đột biến', suitableFor: ['Assassin', 'Mage']},
        { name: 'Fleet Footwork', description: 'Hồi phục và tốc độ di chuyển', suitableFor: ['Marksman', 'Fighter']},
        { name: 'Guardian', description: 'Bảo vệ đồng minh', suitableFor: ['Support', 'Tank']},
        { name: 'Lethal Tempo', description: 'Tăng tốc độ tấn công', suitableFor: ['Marksman', 'Fighter']},
        { name: 'Aftershock', description: 'Tăng sức chống chịu', suitableFor: ['Tank', 'Support']},
        { name: 'Phase Rush', description: 'Tăng tốc độ di chuyển', suitableFor: ['Mage', 'Assassin']},
        { name: 'Dark Harvest', description: 'Tăng sát thương theo thời gian', suitableFor: ['Mage', 'Assassin']},
        { name: 'Grasp of the Undying', description: 'Hồi phục và tăng sức mạnh', suitableFor: ['Tank', 'Fighter']},
        { name: 'Predator', description: 'Tăng tốc độ di chuyển và sát thương', suitableFor: ['Jungle', 'Assassin']},
        { name: 'Arcane Comet', description: 'Sát thương từ xa', suitableFor: ['Mage', 'Support']},
        { name: 'Summon Aery', description: 'Tăng sát thương và hồi phục', suitableFor: ['Support', 'Mage']},
        { name: 'Unflinching', description: 'Tăng sức chống chịu khi di chuyển', suitableFor: ['Tank', 'Fighter']},
        { name: 'Nimbus Cloak', description: 'Tăng tốc độ di chuyển sau khi sử dụng phép bổ trợ', suitableFor: ['Mage', 'Assassin']},
        { name: 'Transcendence', description: 'Tăng hồi chiêu và sức mạnh phép thuật', suitableFor: ['Mage', 'Support']},
    ];

    getChampions(): Champion[] {
        return this.champions;
    }

    getTopRunes(champion: Champion): Rune[] {
        let suitableRunes = this.runes.filter(rune => rune.suitableFor.includes(champion.type));

        if (suitableRunes.length === 0) {
            return [];
        }

        suitableRunes.sort((a, b) => {
            const aMatchesRole = a.suitableFor.includes(champion.role) ? 1 : 0;
            const bMatchesRole = b.suitableFor.includes(champion.role) ? 1 : 0;
            return bMatchesRole - aMatchesRole;
        });

        return suitableRunes.slice(0, 3);
    }
}