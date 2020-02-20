const tdCanada = document.querySelector('.Canada');
const tdUnitedS = document.querySelector('.UnitedS');
const tdHong = document.querySelector('.Hong');
const tdSwedish = document.querySelector('.Swedish');
const tdSwiss = document.querySelector('.Swiss');



const base= 'https://api.exchangeratesapi.io/latest';

const get = async()=>{

     const response = await fetch(base)
     const data = await response.json();
    return data;

    
};


get()
.then(data=>{
   Canada = data;
    console.log( Canada);

    tdCanada.innerHTML=`
  <tr>
    <td class="Canada">${data.rates.CAD}</td>
    
   
  </tr>
    `; 
    
    
})
get()
.then(data=>{
   UnitedS = data;
    console.log( UnitedS);

    tdUnitedS.innerHTML=`
  <tr>
    <td class="Uniteds rates">${data.rates.USD}</td>
    
   
  </tr>
    `; 
    
    

})
get()
.then(data=>{
   Hong = data;
    console.log( Hong);

    tdHong.innerHTML=`
  <tr>
    <td class="Hong rates">${data.rates.HKD}</td>
    
   
  </tr>
    `; 
     
})

get()
.then(data=>{
   Swedish = data;
    console.log( Swedish);

    tdSwedish.innerHTML=`
  <tr>
    <td class="Swedish rates">${data.rates.SEK}</td>
    
   
  </tr>
    `; 
    
    
})
get()
.then(data=>{
   Swiss = data;
    console.log( Swiss);

    tdSwiss.innerHTML=`
  <tr>
    <td class="UnitedS rates">${data.rates.CHF}</td>
    
   
  </tr>
    `; 
    
    
})


.catch(err=>console.log(err));

    
    