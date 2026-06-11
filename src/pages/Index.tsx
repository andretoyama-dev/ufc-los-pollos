import Header from "@/components/Header";
import SponsorBanner from "@/components/SponsorBanner";
import WeightClassSection from "@/components/WeightClassSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import fighterDeus from "@/assets/André_PESO-DEUS.png";
import fighterNeguinho from "@/assets/Sononcio_PESO-NEGUINHO.jpg";
import fighterGordim from "@/assets/Lima_PESO-GORDIM.png";
import fighterPauNoCu from "@/assets/Nexty_e_Nyped_PESO-PAUNOCU.jpg";
import fighterGeladeira from "@/assets/Geraldeli_PESO-GELADEIRA.png";

const rankingsData = [
  {
    weightClass: "PESO-DEUS",
    championName: "ANDRÉ",
    championImage: fighterDeus,
    isTopRank: true,
    athletes: [
      { rank: 1, name: "Tom Aspinall", isInterim: true },
      { rank: 2, name: "Ciryl Gane" },
      { rank: 3, name: "Alexander Volkov" },
      { rank: 4, name: "Sergei Pavlovich" },
      { rank: 5, name: "Curtis Blaydes" },
      { rank: 6, name: "Jailton Almeida" },
      { rank: 7, name: "Serghei Spivac" },
      { rank: 8, name: "Stipe Miocic" },
      { rank: 9, name: "Tai Tuivasa" },
      { rank: 10, name: "Marcin Tybura" },
      { rank: 11, name: "Derrick Lewis" },
      { rank: 12, name: "Jairzinho Rozenstruik" },
      { rank: 13, name: "Alexandr Romanov" },
      { rank: 14, name: "Marcos Rogerio de Lima" },
      { rank: 15, name: "Rodrigo Nascimento" },
    ],
  },
  {
    weightClass: "PESO-NEGUINHO",
    championName: "SONONCIO",
    championImage: fighterNeguinho,
    athletes: [
      { rank: 1, name: "Magomed Ankalaev" },
      { rank: 2, name: "Jiří Procházka" },
      { rank: 3, name: "Jamahal Hill" },
      { rank: 4, name: "Jan Błachowicz" },
      { rank: 5, name: "Aleksandar Rakić" },
      { rank: 6, name: "Nikita Krylov" },
      { rank: 7, name: "Johnny Walker" },
      { rank: 8, name: "Khalil Rountree Jr." },
      { rank: 9, name: "Volkan Oezdemir" },
      { rank: 10, name: "Anthony Smith" },
      { rank: 11, name: "Ryan Spann" },
      { rank: 12, name: "Azamat Murzakanov" },
      { rank: 13, name: "Dominick Reyes" },
      { rank: 14, name: "Alonzo Menifield" },
      { rank: 15, name: "Dustin Jacoby" },
    ],
  },
  {
    weightClass: "PESO-GORDIM",
    championName: "LIMA",
    championImage: fighterGordim,
    athletes: [
      { rank: 1, name: "Chris Barnett" },
      { rank: 2, name: "Parker Porter" },
      { rank: 3, name: "Josh Parisian" },
      { rank: 4, name: "Don'Tale Mayes" },
      { rank: 5, name: "Chase Sherman" },
      { rank: 6, name: "Hamdy Abdelwahab" },
      { rank: 7, name: "Waldo Cortes-Acosta" },
      { rank: 8, name: "Martin Buday" },
      { rank: 9, name: "Mick Parkin" },
      { rank: 10, name: "Caio Machado" },
      { rank: 11, name: "Thomas Petersen" },
      { rank: 12, name: "Robelis Despaigne" },
      { rank: 13, name: "Mohammed Usman" },
      { rank: 14, name: "Karl Williams" },
      { rank: 15, name: "Jhonata Diniz" },
    ],
  },
];

const rankingsData2 = [
  {
    weightClass: "PESO-PAU-NO-CU",
    championName: "NEXTY E NYPED",
    championImage: fighterPauNoCu,
    athletes: [
      { rank: 1, name: "Ian Machado Garry" },
      { rank: 2, name: "Merab Dvalishvili" },
      { rank: 3, name: "Belal Muhammad" },
      { rank: 4, name: "Sean Strickland" },
      { rank: 5, name: "Manel Kape" },
      { rank: 6, name: "Conor McGregor" },
      { rank: 7, name: "Julianna Peña" },
      { rank: 8, name: "Paulo Costa" },
      { rank: 9, name: "Khamzat Chimaev" },
      { rank: 10, name: "Michel Pereira" },
      { rank: 11, name: "Renato Moicano" },
      { rank: 12, name: "Paddy Pimblett" },
      { rank: 13, name: "Tony Ferguson" },
      { rank: 14, name: "Dan Hooker" },
      { rank: 15, name: "Arman Tsarukyan" },
    ],
  },
  {
    weightClass: "PESO-GELADEIRA",
    championName: "GERALDELI",
    championImage: fighterGeladeira,
    athletes: [
      { rank: 1, name: "Jailton Almeida" },
      { rank: 2, name: "Curtis Blaydes" },
      { rank: 3, name: "Alexander Volkov" },
      { rank: 4, name: "Serghei Spivac" },
      { rank: 5, name: "Tai Tuivasa" },
      { rank: 6, name: "Marcin Tybura" },
      { rank: 7, name: "Jairzinho Rozenstruik" },
      { rank: 8, name: "Alexandr Romanov" },
      { rank: 9, name: "Marcos Rogerio de Lima" },
      { rank: 10, name: "Rodrigo Nascimento" },
      { rank: 11, name: "Waldo Cortes-Acosta" },
      { rank: 12, name: "Martin Buday" },
      { rank: 13, name: "Mick Parkin" },
      { rank: 14, name: "Karl Williams" },
      { rank: 15, name: "Jhonata Diniz" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-center uppercase tracking-tight">
            Ranking dos Atletas
          </h1>
          <SponsorBanner />
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rankingsData.map((category, index) => (
              <WeightClassSection
                key={index}
                weightClass={category.weightClass}
                championName={category.championName}
                championImage={category.championImage}
                athletes={category.athletes}
                isTopRank={category.isTopRank}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {rankingsData2.map((category, index) => (
              <WeightClassSection
                key={index}
                weightClass={category.weightClass}
                championName={category.championName}
                championImage={category.championImage}
                athletes={category.athletes}
              />
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
