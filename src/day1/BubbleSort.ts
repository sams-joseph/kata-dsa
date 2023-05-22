export default function bubble_sort(arr: number[]): void {    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            const item = arr[j];
            const next = arr[j + 1];

            if(item > next) {
                arr[j] = next;
                arr[j + 1] = item;
            }
        }
    }
}