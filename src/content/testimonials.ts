export type Testimonial = {
  name: string;
  quote: string;
};

export const testimonialsByLocale = {
  "pt-BR": {
    label: "Depoimentos",
    title: "Confiança construída no atendimento.",
    intro:
      "Percepções de clientes sobre a forma de atuação, o cuidado no acompanhamento e a solidez técnica do escritório.",
    items: [
      {
        name: "Adriana Faria",
        quote:
          "Dr. Bruno e sua equipe são extremamente profissionais, humanos e muito dedicados. A dedicação ao caso do cliente é o que faz toda a diferença nessas situações. Gratidão é a palavra certa para tal comprometimento.",
      },
      {
        name: "Cristiane Barezi",
        quote:
          "Além de ser um lugar onde me senti à vontade para falar a minha história, o carinho e a dedicação ao meu caso foram incomparáveis. É até difícil colocar em palavras minha gratidão. Total confiança.",
      },
      {
        name: "Antonio Cesca Filho",
        quote:
          "Profissional muito atencioso e competente. Atendimento rápido e resolutivo. Parabéns e sucesso sempre.",
      },
      {
        name: "Ju Bortolassi",
        quote:
          "Serviços jurídicos de alta qualidade, com seriedade e comprometimento. Profissionais qualificados e experientes para resolver os problemas dos clientes. Recomendo.",
      },
      {
        name: "Antonio Gontijo",
        quote:
          "O Dr. Bruno Goldner, com quem tenho um relacionamento profissional há anos, é uma referência pela excelência tanto no trato humano quanto no profissional. Nota 10.",
      },
      {
        name: "Mariana Barros",
        quote:
          "Profissionais comprometidos que dominam o assunto. O atendimento foi muito empático e genuíno.",
      },
      {
        name: "Plinio Paiva",
        quote:
          "Confiança, credibilidade e compromisso com a verdade. Tudo isso aliado a um profissionalismo incomparável. Em resumo, um lugar seguro.",
      },
      {
        name: "Carlos Ari Brasil Barros",
        quote: "Profissionais éticos e competentes. Muito bom atendimento.",
      },
      {
        name: "Alex Bilu",
        quote:
          "Dr. Bruno oferece um atendimento diferenciado e extremamente competente.",
      },
      {
        name: "Pablo Ganimi Goldner",
        quote:
          "Escritório sério e comprometido em defender os interesses do cliente, sempre buscando um caminho coerente e ético.",
      },
      {
        name: "Anderson Campos",
        quote:
          "Excelência no atendimento e uma equipe de profissionais comprometida.",
      },
      {
        name: "Nuno Alves Martins Neto",
        quote: "Excelente atendimento. Profissionais altamente qualificados.",
      },
      {
        name: "Guilherme Trindade",
        quote:
          "Prestam um ótimo atendimento. Os advogados são acolhedores e competentes. Parabéns.",
      },
      {
        name: "Mariana Rezende Frizeiro",
        quote: "Profissionais competentes e dedicados. Sempre disponíveis.",
      },
      {
        name: "Jose Carlos Ribeiro",
        quote: "Seriedade e profissionalismo são as marcas deste escritório.",
      },
      {
        name: "Juliana Costa",
        quote: "Atendimento e trabalho excelentes. Recomendo muito.",
      },
      {
        name: "Leonardo Oliveira",
        quote: "Profissionais competentes e soluções rápidas.",
      },
      {
        name: "Hellen Chamarelli",
        quote: "Bons advogados, competentes e com ótimo atendimento. Recomendo.",
      },
      {
        name: "Rodrigo",
        quote: "Ótimos profissionais. Recomendo.",
      },
      {
        name: "Vander Tasca",
        quote:
          "Advogados de altíssima qualidade, experiência e solução rápida.",
      },
      {
        name: "Jordana Dias Paes",
        quote: "Ótimo atendimento. Recomendo.",
      },
      {
        name: "Jerry Mendes",
        quote: "Profissionais gabaritados e atenciosos.",
      },
      {
        name: "Jackson Cristiano Anunciação",
        quote: "Excelente escritório e advogados.",
      },
      {
        name: "Abel Souza",
        quote: "Sensacional.",
      },
    ] satisfies Testimonial[],
  },
  en: {
    label: "Testimonials",
    title: "Trust earned through service.",
    intro:
      "Client impressions on the firm’s responsiveness, care, and technical quality. Testimonials remain in their original language.",
    items: [] as Testimonial[],
  },
} as const;
