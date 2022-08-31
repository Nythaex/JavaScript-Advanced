function solve() {
    return {
        mage(name) {
            return  {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    console.log(`${this.name} cast ${spell}`);
                    this.mana--;
                }
            }

        }, fighter(name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    console.log(`${this.name} slashes at the foe!`);
                    this.stamina--;
                }
            }

        }

    }
}