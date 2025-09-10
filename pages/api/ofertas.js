export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    produtos: [
      { nome: "Apple iPhone 13", preco: "R$ 4.299", link: "https://amzn.to/46n1EUG" },
      { nome: "Notebook Lenovo", preco: "R$ 3.299", link: "https://amzn.to/46n1EXA" }
    ]
  })
}