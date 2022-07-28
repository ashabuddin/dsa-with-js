function towerOfHanoi(n, fromRoad, toRoad, usingRoad) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRoad} to ${toRoad}`);
        return
    }
    towerOfHanoi(n - 1, fromRoad, usingRoad, toRoad)
    console.log(`Move disk ${n} from ${fromRoad} to ${toRoad}`);
    towerOfHanoi(n - 1, usingRoad, toRoad, fromRoad)
}

towerOfHanoi(3, "A", "B", "C")
// Move disk 1 from A to B
// Move disk 2 from A to C
// Move disk 1 from B to C
// Move disk 3 from A to B
// Move disk 1 from C to A
// Move disk 2 from C to B
// Move disk 1 from A to B


//Big-O = O(2^n)