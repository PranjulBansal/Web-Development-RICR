async function getJokes()
{
    const response = await fetch("http://localhost:4500/pranjul");
    const data= await response.json();
    console.log(data)

    // document.getElementById("setup").innerText=data.category
    // document.getElementById("punchline").innerText=data.delivery
}