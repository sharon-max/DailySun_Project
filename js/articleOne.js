const tdCanada = document.querySelector('.Canada');
const tdCanadaD = document.querySelector('.CanadaD');
const tdUnitedS = document.querySelector('.UnitedS');
const tdUnitedD = document.querySelector('.UnitedD');
const tdHong = document.querySelector('.Hong');
const tdHongD = document.querySelector('.HongD');
const tdSwedish = document.querySelector('.Swedish');
const tdSwedishD = document.querySelector('.SwedensD');
const tdSwiss = document.querySelector('.Swiss');
const tdSwissD = document.querySelector('.SwissD');



const base= 'https://api.exchangeratesapi.io/latest';

const get = async()=>{

     const response = await fetch(base)
     const data = await response.json();
    return data;

    
};

get()
.then(data=>{
   Canada = data;
    //  console.log( Canada);

    tdCanada.innerHTML=`<tr><td class="Canada rates">${data.rates.CAD}</td></tr>`,
    tdCanadaD.innerHTML=`<tr><td class="CanadaD date">${data.date}</td></tr>`,

    tdUnitedS.innerHTML=`<tr><td class="Uniteds rates">${data.rates.USD}</td</tr> `,
    tdUnitedD.innerHTML=`<tr><td class="UnitedD rates">${data.date}</td</tr> `,

    tdHong.innerHTML=`<tr><td class="Hong rates">${data.rates.HKD}</td></tr> `,
    tdHongD.innerHTML=`<tr><td class="HongD rates">${data.date}</td></tr> `,

    tdSwedish.innerHTML=`<tr><td class="Swedish rates">${data.rates.SEK}</td></tr>`,
    tdSwedishD .innerHTML=`<tr><td class="SwedensD rates">${data.date}</td></tr>`,

    tdSwiss.innerHTML=`<tr><td class="SWiss rates">${data.rates.CHF}</td></tr>`,  
    tdSwissD.innerHTML=`<tr><td class="SwissD rates">${data.date}</td></tr>`;
    
})

.catch(err=>console.log(err));

    