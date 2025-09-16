import { type } from "arktype";

export const PlanetSchema = type({
    id: type("number.integer > 0"),
    name: type("string"),
    description: type("string").optional()
});


