/// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div id="principal">
      <div className="card">
        <Image src="/perfil.jpg" alt="Foto de perfil" width={100} height={100} />
        <div className="info">
          <h1>João Marcos</h1>
          <h2>Desenvolvedor Web em Formação</h2>
          <p>Email: joao.marcos@email.com</p>
          <p>LinkedIn: linkedin.com/in/joaomarcos</p>
          <div id="detalhes">
            <p>Clique no botão abaixo para ver mais sobre minhas habilidades!</p>
            <Link href="/detalhes">
              <button className="button">Clique Aqui</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
