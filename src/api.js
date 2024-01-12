export default async function getVans() {
    let res = await fetch("/api/vans");
    let data = await res.json();
    return data.vans;
}