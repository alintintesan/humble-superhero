import { IsInt, IsString, Min, Max } from "class-validator";

export class SuperheroDto {
    @IsString()
    name: string;

    @IsString()
    superpower: string;

    @IsInt()
    @Min(1)
    @Max(10)
    humilityScore: number;
}