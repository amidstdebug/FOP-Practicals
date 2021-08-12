var list1 = [12, 56, 76, 32, 12, 34];
var list2 = [12, 56, 76, 32, 12, 34];
var list_length = 0
var array_identical_count = 0
if (list1.length==list2.length){
    list_length=list1.length
    for(var i = 0; i<list_length;i++){
    if(list1[i]==list2[i]){
        array_identical_count++
    }else{
        console.log("Two lists are not identical.")
    }
}
}else{
    console.log("Two lists are not identical.")
}

if (array_identical_count==i){
    console.log("Two lists are strictly identical.")
}