/**
 * arr    : 用来存储待排序的元素
 * n      : 代表元素数量
 * output : 输出过程中的调试信息
 * DEBUG = 1 开启调试信息
 * DEBUG = 0 关闭调试信息
 */
let arr = [221, 1, 3213, 23, 2314, 3, 763, 543, 243, 634, 154];
let n = arr.length;
let DEBUG = 0;

test();
function test() {
    console.log('排序前>>', arr);
    quick_sort(arr, 0, n);
    for (let i = 1; i <= n; i++) {
        // console.log('test>>>', arr[i]);
    }
    console.log('\n');
    console.log('排序后>>', arr);
}

/**
 * 快排：对 arr 中 l 到 r 位进行排序
 * arr：待排序数组
 * l  ：待排序区间起始坐标
 * r  ：待排序区间结束坐标
 */
function quick_sort(arr, l, r) {
    // 递归边界条件是区间中只有一个元素
    // x：记录从前向后扫描的位置
    // y：记录从后向前扫描的位置
    // z：基准值，选择待排序区间的第一个元素
    // while 循环中是 partition 过程
    // 每一轮，先从后向前扫，再从前向后扫
    if (l >= r) return;
    let x = l,
        y = r,
        z = arr[l];
    while (x < y) {
        while (x < y && arr[y] >= z) --y;
        if (x < y) arr[x++] = arr[y];
        while (x < y && arr[x] <= z) ++x;
        if (x < y) arr[y--] = arr[x];
    }

    // 将基准值 z 放入其正确位置数组的 x 位
    // 其实，此时 x == y，所以写成 arr[ y ] = z 也行
    // 再分别对左右区间，进行快速排序
    arr[x] = z;
    // output(l, x, y);
    quick_sort(arr, l, x - 1);
    quick_sort(arr, x + 1, r);
    return;
}

function output(l, x, r) {
    if (DEBUG) return;
    console.log(`\n待排序区间范围 [${l}, ${r}]`);
    console.log(`基准值：${arr[x]}\n`);

    let str = [];
    let cnt = 1;
    for (let i = 1; i < x; i++) {
        cnt += arr[i];
    }
    for (let i = 1; i < l; i++) {
        console.log(arr[i]);
    }
    console.log('[');
    for (let i = l; i <= r; i++) console.log(arr[i]);
    console.log(']');
    for (let i = r + 1; i <= n; i++) console.log(arr[i]);
    console.log('\n');
    for (let i = 0; i < cnt; i++) console.log(' ');
    console.log('^\n');
    for (let i = 0; i < cnt; i++) console.log(' ');
    console.log('|\n');
    console.log('\n');
    // todo
    // c++
    // printf("按回车继续...");
    // while (getchar() != '\n') ;
    return;
}
