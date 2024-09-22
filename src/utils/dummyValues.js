export const Countries = [
    { label: 'Turkey', value: 'Turkey' },
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'UK' },
    { label: 'Canada', value: 'Canada' },
  ];


export const Universities = [
    { label: 'MIT', value: 'MIT' },
    { label: 'Imperial', value: 'Imperial' },
    { label: 'Oxford', value: 'Oxford' },
    { label: 'Cambridge', value: 'Cambridge' },
]

export const Languages = [
    { label: 'English', value: 'English' },
    { label: 'Turkish', value: 'Turkish' },
    { label: 'French', value: 'French' },
]


export const Sortby = [
  {label:'Low Price',value:'lowPrice'},
  {label:'High Price',value:'highPrice'},
  {label:'Deadline',value:'deadline'},
]

export const ItemsPage = [
  {label:10,value:10},
  {label:20,value:20},
  {label:30,value:30},
  {label:40,value:40},
  {label:50,value:50},
]

export const Durations = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4},
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
]

export const Columns = [
  {label:'Name',name:'name'},
  {label:'Country',name:'country'},
  {label:'University',name:'university'},
  {label:'Duration',name:'duration'},
  {label:'Cost',name:'cost'},
  {label:'Language',name:'language'},
  {label:'Deadline',name:'deadline'},
]

export const DummyData = ()=>{
    const data = [];
    for (let i = 1; i <= 50; i++) {
        data.push({
          id: i,
          country: Countries[Math.floor(Math.random() * Countries.length)]?.value,
          name: `Program ${i}`,
          university: Universities[Math.floor(Math.random() * Universities.length)]?.value,
          cost: Math.floor(Math.random() * 10000) + 5000,
          duration: Durations[Math.floor(Math.random() * Durations.length)]?.value, 
          language: Languages[Math.floor(Math.random() * Languages.length)]?.value,
          deadline: new Date(
            2024,
            Math.floor(Math.random() * 12),
            Math.floor(Math.random() * 28)
          )
            .toISOString()
            .split("T")[0],
        });
      }
      return data;

}