declare namespace D3Shape {
    export function line<T>(): Line<T>;

    interface Line<T> {
        (data: T[]): string;

        x(): number | ((d: T, i: number) => number);
        x(x: number): Line<T>;
        x(x: (d: T, i: number) => number): Line<T>;

        y(): number | ((d: T, i: number) => number);
        y(x: number): Line<T>;
        y(y: (d: T, i: number) => number): Line<T>;

        defined(): (d: T, i: number) => boolean;
        defined(defined: (d: T, i: number) => boolean): Line<T>;

        // TODO
        curve();

        context(ctx): this;
        context(): any;

        radialLine(): RadialLine;
    }

    interface RadialLine {
        angle();
        radius();
        defined();
        curve();
        context();
    }
}

export = D3Shape;
