import { Injectable } from "@angular/core";

export interface Champion {
    name: string;
    role: string;
    type: string;
}

export interface Item {
    name: string;
    description: string;
    suitableFor: string[];
    situation: string[];
}

export interface SaveBuild {
    champion: string;
    situation: string;
    items: string[];
}

@Injectable({
    providedIn: 'root',
})

export class ItemsService {
    private champions: Champion[] = [
        { name: 'Aatrox', role: 'Top', type: 'Fighter' },
        { name: 'Ahri', role: 'Mid', type: 'Mage' },
        { name: 'Akali', role: 'Mid', type: 'Assassin' },
        { name: 'Alistar', role: 'Support', type: 'Tank' },
        { name: 'Amumu', role: 'Jungle', type: 'Tank' },
        { name: 'Anivia', role: 'Mid', type: 'Mage' },
        { name: 'Annie', role: 'Mid', type: 'Mage' },
        { name: 'Ashe', role: 'ADC', type: 'Marksman' },
        { name: 'Aurelion Sol', role: 'Mid', type: 'Mage' },
        { name: 'Azir', role: 'Mid', type: 'Mage' },
        { name: 'Bard', role: 'Support', type: 'Support' },
        { name: 'Blitzcrank', role: 'Support', type: 'Tank' },
        { name: 'Brand', role: 'Mid', type: 'Mage' },
        { name: 'Braum', role: 'Support', type: 'Tank' },
        { name: 'Caitlyn', role: 'ADC', type: 'Marksman' },
        { name: 'Camille', role: 'Top', type: 'Fighter' },
        { name: 'Cassiopeia', role: 'Mid', type: 'Mage' },
        { name: 'Cho\'Gath', role: 'Top', type: 'Tank' },
        { name: 'Corki', role: 'ADC', type: 'Marksman' },
        { name: 'Darius', role: 'Top', type: 'Fighter' },
        { name: 'Diana', role: 'Jungle', type: 'Fighter' },
        { name: 'Dr. Mundo', role: 'Top', type: 'Tank' },
        { name: 'Draven', role: 'ADC', type: 'Marksman' },
        { name: 'Ekko', role: 'Mid', type: 'Assassin' },
        { name: 'Elise', role: 'Jungle', type: 'Mage' },
        { name: 'Evelynn', role: 'Jungle', type: 'Assassin' },
        { name: 'Ezreal', role: 'ADC', type: 'Marksman' },
        { name: 'Fiora', role: 'Top', type: 'Fighter' },
        { name: 'Fizz', role: 'Mid', type: 'Assassin' },
        { name: 'Galio', role: 'Mid', type: 'Tank' },
        { name: 'Gangplank', role: 'Top', type: 'Fighter' },
        { name: 'Garen', role: 'Top', type: 'Tank' },
        { name: 'Gnar', role: 'Top', type: 'Tank' },
        { name: 'Gragas', role: 'Jungle', type: 'Tank' },
        { name: 'Graves', role: 'Jungle', type: 'Marksman' },
        { name: 'Gwen', role: 'Top', type: 'Fighter' },
        { name: 'Hecarim', role: 'Jungle', type: 'Fighter' },
        { name: 'Heimerdinger', role: 'Mid', type: '' },
        { name: 'Illaoi', role: 'Top', type: 'Fighter' },
        { name: 'Irelia', role: 'Top', type: 'Fighter' },
        { name: 'Ivern', role: 'Jungle', type: 'Support' },
        { name: 'Janna', role: 'Support', type: 'Support' },
        { name: 'Jarvan IV', role: 'Jungle', type: 'Tank' },
        { name: 'Jax', role: 'Top', type: 'Fighter' },
        { name: 'Jayce', role: 'Top', type: 'Fighter' },
        { name: 'Jhin', role: 'ADC', type: 'Marksman' },
        { name: 'Jinx', role: 'ADC', type: 'Marksman' },
        { name: 'Kai\'Sa', role: 'ADC', type: 'Marksman' },
        { name: 'Renekton', role: 'Top', type: 'Fighter' },
    ];

    private items: Item[] = [
        // Trang bị cho Marksman
        { name: 'Infinity Edge', description: 'Tăng sát thương chí mạng', suitableFor: ['Marksman'], situation: ['Standard', 'Split-Push', 'Late'] },
        { name: 'Bloodthirster', description: 'Tăng sát thương và hút máu', suitableFor: ['Marksman'], situation: ['Standard', 'Mid', 'Late'] },
        { name: 'Guardian Angel', description: 'Hồi sinh sau khi chết', suitableFor: ['Marksman'], situation: ['Mid', 'Late'] },
        { name: 'Galeforce', description: 'Tăng sát thương và khả năng di chuyển', suitableFor: ['Marksman'], situation: ['Standard', 'Early', 'Mid'] },
        { name: 'Kraken Slayer', description: 'Tăng sát thương và khả năng xuyên giáp', suitableFor: ['Marksman'], situation: ['Anti-Tank', 'Early', 'Mid'] },
    
        // Trang bị cho Mage
        { name: 'Riftmaker', description: 'Tăng sát thương phép thuật và hồi phục', suitableFor: ['Mage'], situation: ['Standard', 'Early', 'Mid'] },
        { name: 'Lich Bane', description: 'Tăng tốc độ di chuyển và sát thương phép thuật', suitableFor: ['Mage'], situation: ['Standard', 'Early', 'Mid'] },
        { name: 'Zhonya\'s Hourglass', description: 'Tăng sức mạnh phép thuật và khả năng bất tử', suitableFor: ['Mage', 'Assassin'], situation: ['Standard', 'Mid', 'Late'] }, // Sửa Anti-AP thành Standard
        { name: 'Rylai\'s Crystal Scepter', description: 'Tăng sức mạnh phép thuật và làm chậm', suitableFor: ['Mage'], situation: ['Standard', 'Mid', 'Late'] }, // Sửa Anti-AP thành Standard
        { name: 'Rod of Ages', description: 'Tăng sức mạnh phép thuật và hồi máu', suitableFor: ['Mage'], situation: ['Standard', 'Early', 'Mid'] },
    
        // Trang bị cho Assassin
        { name: 'Duskblade of Draktharr', description: 'Tăng sát thương và khả năng tàng hình', suitableFor: ['Assassin'], situation: ['Standard', 'Early', 'Mid'] },
        { name: 'Prowler\'s Claw', description: 'Tăng sát thương và khả năng áp sát', suitableFor: ['Assassin'], situation: ['Standard', 'Early', 'Mid'] },
    
        // Trang bị cho Fighter
        { name: 'Divine Sunderer', description: 'Tăng sát thương và khả năng hồi phục', suitableFor: ['Fighter'], situation: ['Anti-Tank', 'Early', 'Mid'] },
        { name: 'Trinity Force', description: 'Tăng sát thương và khả năng di chuyển', suitableFor: ['Fighter'], situation: ['Standard', 'Split-Push', 'Early', 'Mid'] },
        { name: 'Black Cleaver', description: 'Tăng sát thương và khả năng xuyên giáp', suitableFor: ['Fighter'], situation: ['Anti-Tank', 'Early', 'Mid'] },
        { name: 'Sterak\'s Gage', description: 'Tăng sức mạnh và khả năng chống chịu', suitableFor: ['Fighter'], situation: ['Standard', 'Mid', 'Late'] },
        { name: 'Maw of Malmortius', description: 'Tăng kháng phép và sát thương vật lý', suitableFor: ['Fighter'], situation: ['Anti-AP', 'Mid', 'Late'] }, // Thêm trang bị Anti-AP
    
        // Trang bị cho Tank
        { name: 'Thornmail', description: 'Phản sát thương vật lý và giảm hồi máu', suitableFor: ['Tank'], situation: ['Anti-Tank', 'Mid', 'Late'] },
        { name: 'Randuin\'s Omen', description: 'Giảm tốc độ đánh và sát thương chí mạng của kẻ địch', suitableFor: ['Tank'], situation: ['Anti-Tank', 'Mid', 'Late'] },
        { name: 'Spirit Visage', description: 'Tăng kháng phép và hồi phục', suitableFor: ['Tank', 'Fighter'], situation: ['Anti-AP', 'Mid', 'Late'] },
        { name: 'Zeke\'s Convergence', description: 'Tăng khả năng hỗ trợ đồng đội', suitableFor: ['Tank'], situation: ['Standard', 'Mid', 'Late'] },
        { name: 'Knight\'s Vow', description: 'Bảo vệ đồng đội và tăng chống chịu', suitableFor: ['Tank'], situation: ['Standard', 'Mid', 'Late'] },
        { name: 'Abyssal Mask', description: 'Tăng kháng phép và sát thương phép cho đồng đội', suitableFor: ['Tank'], situation: ['Anti-AP', 'Mid', 'Late'] },
        { name: 'Frozen Heart', description: 'Giảm tốc độ đánh của kẻ địch', suitableFor: ['Tank'], situation: ['Anti-Tank', 'Mid', 'Late'] },
        { name: 'Warmog\'s Armor', description: 'Tăng hồi phục ngoài giao tranh', suitableFor: ['Tank'], situation: ['Standard', 'Late'] },
        { name: 'Sunfire Aegis', description: 'Gây sát thương diện rộng', suitableFor: ['Tank'], situation: ['Standard', 'Mid', 'Late'] },
        { name: 'Turbo Chemtank', description: 'Tăng tốc độ di chuyển và gây sát thương', suitableFor: ['Tank'], situation: ['Split-Push', 'Mid', 'Late'] }
    ];

    getChampions(): Champion[] {
        return this.champions;
    }

    getItems(champion: Champion, situation: string): Item[] {
        let suitableItems = this.items.filter(item => 
            item.suitableFor.includes(champion.type) && item.situation.includes(situation)
        );

        if (suitableItems.length === 0) {
            suitableItems = this.items.filter(item => item.suitableFor.includes(champion.type));
        }

        return suitableItems.slice(0, 5);
    }

    saveBuild(build: SaveBuild) {
        const builds = this.getSavedBuilds();
        builds.push(build);
        localStorage.setItem('savedBuilds', JSON.stringify(builds));
    }

    getSavedBuilds(): SaveBuild[] {
        const builds = localStorage.getItem('savedBuilds');
        return builds ? JSON.parse(builds) : [];
    }

    deleteBuild(build: SaveBuild) {
        let builds = this.getSavedBuilds();
        builds = builds.filter(b => 
            !(b.champion === build.champion && 
                b.situation === build.situation && 
                b.items.join(', ') === build.items.join(',')
            )
        );
        localStorage.setItem('savedBuilds', JSON.stringify(builds));
    }
}