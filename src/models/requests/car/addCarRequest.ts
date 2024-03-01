export interface AddCarRequest{
    kilometer: number;
	year: number;
	plate: string;
	dailyPrice: number;
	file: File | null;
	minFindeksRate: number;
    trunkVolume: number,
    capacity: number,
    caseType: string,
    fuelType: string,
    gearType: string,
	modelId: number;
	colorId: number;
	taxRateId:number;
	carStatus:string;
}