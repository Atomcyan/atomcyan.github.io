  campsites = [{
siteName:'Pines Hills Campground',
location: 'Mauk, GA',
address: '348 Averett Rd, Mauk, GA 31058',

 },
 {
siteName: 'Bluewater Horse Ranch',
location: 'Sparks, GA',
address: '2921 Lovett Cir, Sparks, GA 31647'
 },
{
siteName:'Mulberry Gap',
location: 'Elliejay, GA',
address: '400 Mulberry Gap Rd, Ellijay, GA 30540',
},
{
siteName: 'Herzun Platz',
location: 'Sautee Nacoochee, GA',
address: '607 Weiss St, Frankenmuth, MI 48734',
},
{
siteName: 'Castleberry Bridge',
location: 'Dahlonega, GA',
address: '89 Nature Trail Rd, Dawsonville, GA 30534',
},
{siteName: 'Beechwoods Farms',
    location: 'Watkinsville, GA',
    address: '204 Bates Bridge Rd, Marietta, SC 29661',

}
,
{
siteName: 'Little Bluffs',
location: 'Wildwoods, GA',
address: 'Little Bluffs Ldg, Morganton, GA 30560',
},
{
siteName: 'Bliss Hills Farms',
location: 'Claxton, GA',
address: ' 2299 Allen Sikes Road, Claxton, Evans County, Georgia, United States 30417',
}
,
{
siteName: 'Creekside Bliss',
location: 'Morganton, GA',
address: '694 Loving Rd, Morganton, GA 30560',
}
,
{
siteName:'Peacan Orchard',
location: 'Glennville, GA',
address: '1794 Ebenezer Church Rd, Glennville, GA 30427',

}];



const siteSearch = document.getElementById('siteSearch');
const siteList = document.getElementById("siteList");
var siteInput;
var shouldstop = false;
function getData(event)  {
if(event.type == 'keypress' || event.type =='keyup'){
const onSearch = siteSearch.value.toLowerCase();
console.log(onSearch);

const filteredSites = campsites?.filter(sites => {
return (sites.siteName.toString().toLowerCase().startsWith(onSearch));
});
console.log(filteredSites);
siteCard(filteredSites);
}else if(siteSearch.value === "" || siteSearch.value === null ) {
return;
}
}
siteSearch.addEventListener('keypress', getData)
siteSearch.addEventListener('keyup', getData)


function siteCard  (siteArray){

const cardModel = siteArray?.map(card =>{
  
return `
<ul class="siteCard">
<h3>${card.siteName}</h3>

<li>Location: ${card.location}</li>
<li> Address: ${card.address}</li>
</ul>
`

}).join('');
siteList.innerHTML = cardModel;
} 







siteSearch.addEventListener('keyup', e => {

const key = e.key;

if(key === "Delete" || key === "Backspace" ){
 siteInput = e.target.value.toLowerCase();

 const prevSite = campsites?.filter( prev =>{
 
return prev.siteName.toLowerCase().toString().startsWith(siteInput);

}
);

siteCard(prevSite);

}
});

