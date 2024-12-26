```ts
this.tourService
    .initialize$
    .subscribe(
        (steps: IStepOption[]) => {
            console.log('tour configured with these steps:', steps);
        }
    );
```
