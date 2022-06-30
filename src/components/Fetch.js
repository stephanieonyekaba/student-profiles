export async function Fetch() {
    const response = await fetch("https://api.hatchways.io/assessment/students");
  
    return (await response.json()).students;
  }