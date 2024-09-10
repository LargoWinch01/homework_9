num=prompt('ჩაწერეთ რაიმე რიცხვი:  ')

if(num%2===0 && typeof(num)!='number'){
    console.log('რიცხვი ლუწია');
}else if(num%2!=0 && typeof(num)!='number'){
    console.log('რიცხვი კენტია');
}else{
    console.log('შეყვანილია არასწორი ფორმატის ინფორმაცია');
}