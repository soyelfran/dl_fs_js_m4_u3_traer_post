const btnpost = document.querySelector("#btnpost");
const posta = document.querySelector("#posta");

btnpost.addEventListener("click", () => {
  const posts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      data.forEach((item) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        posta.appendChild(li);
        // posta.appendChild(p);
        li.textContent = ` ${item.title}`;
        p.textContent = ` ${item.body}`;
        li.style.fontWeight = "bold";
      });
    } catch (err) {
      console.log(err);
    }
  };

  posts();
});
