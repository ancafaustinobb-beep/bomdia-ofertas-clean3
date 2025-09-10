import Link from 'next/link'

const produtos = Array.from({ length: 21 }, (_, i) => ({
  nome: `Produto ${i + 1} - Oferta do Dia`,
  img: `/images/produto${i + 1}.jpg`,
  link: "#"
}));

export default function Home() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {produtos.map((p, idx) => (
        <Link href={p.link} key={idx} target="_blank">
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            padding: '10px',
            textAlign: 'center',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={p.img} alt={p.nome} style={{ width: '100%', borderRadius: '8px' }} />
            <p>{p.nome}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
