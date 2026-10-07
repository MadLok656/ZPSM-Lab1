// src/sum.ts

export function sum(...values: unknown[]): number {
    const cleanedUpValues: number[] = values.filter((val, id) => {
        if (typeof(val) === 'number')
        {
            if (!Number.isFinite(val) || Number.isNaN(val)) {
                console.log(`Argument ${id+1} is not a number: ${val}`);

                return false;
            }

            return true;
        }
        else {
            console.log(`Argument ${id+1} is not a number: ${JSON.stringify(val)}`);
            
            return false;
        }
    }) as number[];

    const initVal: number = 0;
    return cleanedUpValues.reduce((acc, curVal) => acc + curVal, initVal);
}