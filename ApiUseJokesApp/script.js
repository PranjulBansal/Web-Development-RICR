async function getJokes()
{
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data= await response.json();
    console.log(data)

    document.getElementById("setup").innerText=data.category
    document.getElementById("punchline").innerText=data.delivery
}