export async function getList() {
  const data = await fetch(
    "https://mockend.com/InformDGM/MockendDB/users"
    //"https://dummy.restapiexample.com/api/v1/employees"
  );
  return await data.json();
}
