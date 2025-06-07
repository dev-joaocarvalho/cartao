'use client';
import { useEffect, useState } from 'react';
import { Habilidade } from '../../model/habilidade-model';
import { JsonHabilidadeRepositorio } from '../../repositories/json-habilidade-repositorio';

export default function Detalhes() {
  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);

  useEffect(() => {
    const repo = new JsonHabilidadeRepositorio();
    repo.findAll().then(data => setHabilidades(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Minhas Habilidades</h1>
      <ul>
        {habilidades.map(hab => (
          <li key={hab.id}>
            <h2>{hab.titulo}</h2>
            <p>{hab.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
