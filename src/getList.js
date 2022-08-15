export async function getList() {
  const data = await fetch(
    "https://dummy.restapiexample.com/api/v1/employees"
  );
  return await data.json();
}
