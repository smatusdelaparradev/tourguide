import { OnboardingQuestion } from '../../../types/entities/OnboardingQuestion';

const onboardingQuestions: OnboardingQuestion[] = [
  {
    question: "¿Qué tipo de destino prefieres?",
    options: [
      { icon: "sunny-outline", text: "Playa" },
      { icon: "image-outline", text: "Montaña" },
      { icon: "business-outline", text: "Ciudad" }
    ],
    multiple: false
  },
  {
    question: "¿Qué tipo de actividades te interesan?",
    options: [
      { icon: "color-palette-outline", text: "Arte / Museos" },
      { icon: "bicycle-outline", text: "Deportes" },
      { icon: "restaurant-outline", text: "Gastronomía" }
    ],
    multiple: false
  },
  {
    question: "¿Prefieres viajes en grupo o individuales?",
    options: [
      { icon: "people-outline", text: "Grupo" },
      { icon: "person-outline", text: "Individual" }
    ],
    multiple: false
  }
];

export default onboardingQuestions;