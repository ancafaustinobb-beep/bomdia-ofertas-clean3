import Link from 'next/link'

const produtos = [
  {
    nome: "Apple iPhone 13 (128 GB) - Luz das estrelas",
    link: "https://amzn.to/46n1EUG",
    img: "/images/iphone13.jpg"
  },
  {
    nome: "Notebook Lenovo LOQ-e 15IAX9E Intel Core i5-12450HX 16GB 512GB SSD",
    link: "https://amzn.to/46n1EXA",
    img: "/images/lenovo.jpg"
  },
  {
    nome: "Samsung Galaxy S21 FE",
    link: "https://amzn.to/46n1ABC",
    img: "/images/galaxy.jpg"
  }
]

export default function Home() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
      {produtos.map((p, idx) => (
        <Link href={p.link} key={idx} target="_blank">
          <div style={{ border: '1px solid #ddd', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', padding: '10px', textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}
               onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src={p.img} alt={p.nome} style={{ width: '100%', borderRadius: '8px' }}/>
            <p>{p.nome}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}