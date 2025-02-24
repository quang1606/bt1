// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(arr) {
    let mang = [];
    let max = 0
    arr.forEach(element => {

       if(element.length > max ){
        max = element.length
        mang.pop()
        mang.push(element)
       }else if(element.length === max){
        mang.push(element)
       }
    });
    return mang;

}

 console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));

//  Bài 2. Cho mảng users như sau:
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

function getCountElement(user){
    let user1 = []
    user.forEach(element => {
        if(element.age >25 && element.isStatus === true){
            user1.push(element)
        }
    });
    return user1
}

function sortAge(user){
    user.sort((a, b) => a.age - b.age);
    return user
}

console.log(getCountElement(users))
console.log(sortAge(users))

// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement(arr) {
    const tanSuatMap = new Map();
    arr.forEach(chuoi => {
      tanSuatMap.set(chuoi, (tanSuatMap.get(chuoi) || 0) + 1);
    });
  
    return tanSuatMap;
  }
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))
