export const Countries = [
    { label: 'Turkey', value: 'Turkey' },
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'UK' },
    { label: 'Canada', value: 'Canada' },
  ];


export const Universities = [
    { label: 'MIT', value: 'MIT' },
    { label: 'Stanford', value: 'Stanford' },
    { label: 'Oxford', value: 'Oxford' },
    { label: 'Cambridge', value: 'Cambridge' },
]

export const Languages = [
    { label: 'English', value: 'English' },
    { label: 'Turkish', value: 'Turkish' },
    { label: 'French', value: 'French' },
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

export const DummyData = ()=>{
    const data = [];
    for (let i = 1; i <= 50; i++) {
        data.push({
          id: i,
          name: `Program ${i}`,
          university: Universities[Math.floor(Math.random() * Universities.length)],
          country: Countries[Math.floor(Math.random() * Countries.length)],
          duration: Durations[Math.floor(Math.random() * Durations.length)], 
          cost: Math.floor(Math.random() * 10000) + 5000, // Random cost between 5000-15000
          deadline: new Date(
            2024,
            Math.floor(Math.random() * 12),
            Math.floor(Math.random() * 28)
          )
            .toISOString()
            .split("T")[0], // Random date in 2024
          language: Languages[Math.floor(Math.random() * Languages.length)],
        });
      }
      return data;

}