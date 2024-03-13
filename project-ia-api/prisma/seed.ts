import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Título do áudio',
      template: `Seu papel é gerar insights para melhoramento do fechamento de vendas.

Abaixo você receberá uma transcrição desse áudio, use essa transcrição para gerar os insights para melhorar o pitch de vendas para gerar um impacto imediato.
Abaixo você também receberá uma lista de palavras chaves, use essa lista como referência para os para gerar melhorias no pitch.

As melhorias devem ter no máximo 60 caracteres.
As melhorias devem ser instrutivos e voltados para o comercial.

Retorne APENAS os três pontos de melhorias em formato de lista como no exemplo abaixo:
'''
- melhorias 1
- melhorias 2
- melhorias 3
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Descrição Áudio',
      template: `Seu papel é gerar uma descrição sucinta para para um pitch de vendas.
  
Abaixo você receberá uma transcrição desse áudio, use essa transcrição para gerar a descrição e apontar pontos de melhoria.

A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do áudio.

Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 pontos de melhoria em letra minúscula contendo palavras-chave do áudio.

O retorno deve seguir o seguinte formato:
'''
Descrição.

- melhorias 1
- melhorias 2
- melhorias 3
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })