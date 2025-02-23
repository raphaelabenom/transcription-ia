# Descrição do Projeto
O projeto consiste em uma solução que utiliza Inteligência Artificial (IA) para processar e gerar insights a partir de áudios voltados para a área comercial.
A aplicação combina tecnologias modernas, como a API da OpenAI e o modelo Whisper , para criar um sistema eficiente de Q&A (Perguntas e Respostas) baseado em áudios. O objetivo principal é transformar conteúdo de áudio (como reuniões, entrevistas ou feedbacks) em informações valiosas que podem ser utilizadas para tomadas de decisão estratégicas no ambiente comercial.

# Funcionalidades Principais
- Conversão de Áudio para Texto com Whisper :
Utiliza o modelo Whisper para transcrever arquivos de áudio (formato MP3) em texto. Este recurso permite capturar o conteúdo falado de forma precisa e estruturada.
Ideal para processar gravações de reuniões, chamadas de vendas, feedbacks de clientes e outros conteúdos relevantes para o setor comercial.
- Geração de Insights com IA (API OpenAI) :
Após a transcrição do áudio, a aplicação utiliza a API da OpenAI para analisar o texto gerado e extrair insights úteis.
Exemplos de insights incluem identificação de tendências, resumos automáticos, sugestões de melhorias, análise de sentimentos e recomendações estratégicas.
- Interface Amigável com SHADCN e Lucide :
A interface do usuário é construída utilizando componentes modernos do SHADCN , garantindo uma experiência visualmente agradável e responsiva.
Ícones do Lucide são integrados para melhorar a usabilidade e facilitar a navegação.
- Gerenciamento de Dados com Prisma ORM :
O Prisma é utilizado como ORM (Object-Relational Mapping) para gerenciar o banco de dados da aplicação. Ele simplifica a interação com o banco de dados, permitindo operações CRUD eficientes e seguras.
Armazena informações como transcrições, insights gerados e metadados dos áudios.
- Cliente HTTP com HTTPie :
O HTTPie é usado como cliente HTTP para realizar requisições à API da OpenAI e outras integrações externas. Sua simplicidade e eficiência tornam o processo de comunicação entre serviços mais robusto.
- Gerenciador de Pacotes com PNPM :
O PNPM é o gerenciador de pacotes escolhido para o projeto, garantindo uma instalação rápida e eficiente das dependências, além de otimizar o uso de espaço em disco.

# Tecnologias Utilizadas
- Backend : Node.js (ou similar), Prisma ORM
- Frontend : SHADCN (componentes), Lucide (ícones)
- IA : Whisper (transcrição de áudio), API da OpenAI (geração de insights)
- Ferramentas : HTTPie (cliente HTTP), PNPM (gerenciador de pacotes)
- Banco de Dados : PostgreSQL, SQLITE (ou outro suportado pelo Prisma)
