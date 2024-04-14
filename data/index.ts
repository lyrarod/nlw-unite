export type Lesson = {
  title: string;
  video: string;
  slug?: string;
};

export type Trail = {
  id: string;
  title: string;
  description: string;
  content: string;
  avatar: string;
  lessons: Lesson[];
  slug?: string;
};

export const data: Trail[] = [
  {
    id: "0c0583fa-af68-4161-b589-46f37aa47ed3",
    title: "Java",
    description: "Trilha Java",
    content:
      "Pra você que conhece os fundamentos da programação e deseja desenvolver aplicações back-end utilizando uma das linguagens mais sólidas e robustas do mercado.",
    avatar: "java.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=7TyRYEjr44k",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=RAEOpV58VAA",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=ceVfB1q2RSc",
      },
    ],
  },
  {
    id: "89f6f88f-da9d-4ed3-9aa1-41daa730055e",
    title: "Python",
    description: "Trilha Python",
    content:
      "Pra você que conhece os fundamentos da programação e deseja focar no back-end utilizando uma linguagem dinâmica e conhecida pela sua simplicidade e legibilidade.",
    avatar: "python.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=tRX3G8Greec",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=fP8RdgJRXjY",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=2aaRMeRvopI",
      },
    ],
  },
  {
    id: "a69c925a-0aa8-4bbc-9278-0926811c0053",
    title: "React",
    description: "Trilha React.js",
    content:
      "Pra você que deseja focar no front-end porque curte criar interfaces web interativas incríveis e iniciar sua especialização nessa tecnologia.",
    avatar: "react.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=oafag91cHIY",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=p7arZZ8PQ_U",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=V8F6sOlLLZY",
      },
    ],
  },
  {
    id: "c69ebc2a-a0c4-448c-985f-7590154e5d30",
    title: "Node",
    description: "Trilha Node.js",
    content:
      "Pra você que conhece os fundamentos da programação e deseja focar no desenvolvimento de aplicações back-end escaláveis e robustas utilizando o Javascript, uma das linguagens de programação mais populares do mercado.",
    avatar: "nodejs.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=USWLuq3_g1U",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=o9GW7CYzPK0",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=b2fV5iFpx0E",
      },
    ],
  },
  {
    id: "0550cb67-702b-4136-92f1-606caacd5928",
    title: "React Native",
    description: "Trilha React Native",
    content:
      "Pra você que tem interesse em desenvolver aplicações mobile e atuar criando apps ios e android e se especializar nessa tecnologia.",
    avatar: "react-native.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=Stg5MbW9D4I",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=LhQsFYtNKEA",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=N3AUnVtr1Dc",
      },
    ],
  },
  {
    id: "42b22e9c-e5d4-46e7-a6f8-058ba4b45624",
    title: "C#",
    description: "Trilha CSharp",
    content:
      "Pra você que conhece os fundamentos da programação, curte o universo .NET e quer aprender a criar aplicações back-end com .NET Core.",
    avatar: "csharp.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=nmH6gjaWHcw",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=anj4JFzAo0M",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=4EkEoWlCUys",
      },
    ],
  },
  {
    id: "fdbc9816-3f77-432a-aa5c-b3b5d3fd1477",
    title: "HTML+CSS+JS",
    description: "Trilha HTML+CSS+JS",
    content:
      "Pra você que está no início da jornada em programação, quer dominar os fundamentos web e desenvolver seu primeiro projeto na prática.",
    avatar: "html-css-js.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=OoqxwdLkYPA",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=OdHwVxDJBbM",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=BPJllrum4II",
      },
    ],
  },
  {
    id: "22b42b7c-3f74-4ee0-8a78-28e6fa6e4bd1",
    title: "DevOps",
    description: "Trilha DevOps",
    content:
      "Pra você que quer saber mais sobre a cultura de DevOps e aprender, do zero ao deploy, as técnicas que o mercado usa para fazer entregas contínuas e seguras.",
    avatar: "devops.png",
    lessons: [
      {
        title: "Aula 01",
        video: "https://www.youtube.com/watch?v=MHw2dHE7rjM",
      },
      {
        title: "Aula 02",
        video: "https://www.youtube.com/watch?v=PduD9QLoG4c",
      },
      {
        title: "Aula 03",
        video: "https://www.youtube.com/watch?v=-bmmxtjos1w",
      },
      {
        title: "Aula 04",
        video: "https://www.youtube.com/watch?v=FanH6AuDbnE",
      },
    ],
  },
];
