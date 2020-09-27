export class Credit {
    constructor(private montantAchat?: Float64Array,
        private apport?: Float64Array,
        private montantaFinancier?: Float64Array,
        private produit?: String,
        private dureeRembourssement?: number,
        private mensualitePaye?: Float64Array) {
    }
}
