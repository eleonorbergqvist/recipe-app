export class Search {

    constructor(
        public query: string,
        public appetizer: boolean,
        public dessert: boolean,
        public main: boolean,
        public nutfree: boolean,
        public glutenfree: boolean,
        public time: number,
    ) { }
}
