export interface Recipe {
    id: string;
    recipeName: string;
    imageUrlsBySize: string;
    ingredients: string[];
}

/*
export class Recipe {
    public id: string;
    public recipeName: string;
    public imageUrlsBySize: string;
    public ingredients: string[];

    constructor(
        id: string,
        recipeName: string,
        imageUrlsBySize: string,
        ingredients: string[],
    ) {
        this.id = id;
        this.recipeName = recipeName;
        this.imageUrlsBySize = imageUrlsBySize;
        this.ingredients = ingredients;
    }
}
*/
