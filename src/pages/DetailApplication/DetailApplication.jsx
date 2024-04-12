import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardStages from "../../components/CardStages/CardStages";

const Stages = [
  {
    id: 1,
    title: "Entrevista 1",
    date: "20 de abril de 2024",
    description:
      "Entrevista a cargo de Mónica Masias, Psicóloga de la empresa #. Tener en cuenta que la entrevista tendrá una duración de 30 minutos.",
    documents: [],
  },
  {
    id: 2,
    title: "Prueba técnica",
    date: "25 de abril de 2024",
    description:
      "Evaluación técnica a cargo del equipo de ingeniería de la empresa #. La entrevista se centrará en evaluar tus habilidades técnicas y tu capacidad para resolver problemas relacionados con el puesto al que estás aplicando. Tendrás un tiempo asignado para completar la evaluación, y se espera que demuestres tu experiencia y conocimientos en el área.",
    documents: [],
  },
  {
    id: 3,
    title: "Entrevista 2",
    date: "30 de abril de 2024",
    description:
      "Entrevista con el gerente del departamento correspondiente en la empresa #. Durante esta entrevista, tendrás la oportunidad de discutir tu experiencia laboral, tus habilidades y tu idoneidad para el puesto. El gerente también puede hacer preguntas sobre tus objetivos profesionales y tu adaptabilidad al entorno laboral de la empresa. Esta entrevista es una oportunidad para que el gerente te conozca mejor y evalúe tu idoneidad para el equipo.",
    documents: [],
  },
  {
    id: 4,
    title: "Subir Documentos",
    date: "04 de mayo de 2024",
    description:
      "Por favor, sube todos los documentos requeridos para completar tu solicitud antes de la fecha límite indicada. Esto puede incluir tu currículum vitae actualizado, cartas de recomendación, certificados de estudios, entre otros. Asegúrate de que toda la información sea precisa y esté completa antes de enviarla. (Cartas de recomendación de empleadores anteriores o profesores.",
    documents: [
      "Carta de recomendación",
      "Certificado de estudios",
      "Carta de presentación",
      "Portafolio de proyectos",
      "Copias de identificación oficial",
    ],
  },
];

const DetailApplication = () => {
  const { idProcess, idUser } = useParams();
  return (
    <div className="content">
      <Sidebar />
      <div className="applications">
        {Stages.map((stage) => (
          <CardStages
            key={stage.id}
            title={stage.title}
            date={stage.date}
            id={stage.id}
            idProcess={idProcess}
            idUser={idUser}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailApplication;
