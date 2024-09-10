// პირველი ვარიანტი
num=prompt('ჩაწერეთ რაიმე რიცხვი:  ')

if(num%2 === 0){
    console.log('რიცხვი ლუწია');
}else if(num%2 === 1){
    console.log('რიცხვი კენტია');
}else{
    console.log('შეყვანილია არასწორი ფორმატის ინფორმაცია');
}


// მეორე ვარიანტი
let num=prompt('ჩაწერეთ რაიმე რიცხვი:  ')

switch (num % 2)
{
    case 1 :
        console.log('რიცხვი კენტია');
        break;
    case 0  :
        console.log('რიცხვი ლუწია');
        break;
    default:
        console.log('შეყვანილია არასწორი ინფორმაცია');
        break;
}
