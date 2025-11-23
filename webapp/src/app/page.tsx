const surfaceDistribution = [
  {
    title: "T3 (x2)",
    surface: "≈ 2 × 68 m²",
    details:
      "Séjour/cuisine 28 m², 2 chambres 12 m², salle d&apos;eau, buanderie, rangements",
  },
  {
    title: "T2 (x3)",
    surface: "≈ 3 × 42 m²",
    details: "Séjour/cuisine 20 m², chambre 11 m², salle d&apos;eau, placards",
  },
  {
    title: "Local commercial",
    surface: "≈ 40 m²",
    details:
      "Espace de vente, réserve fermée, sanitaire PMR, branchements spécifiques",
  },
  {
    title: "Circulations & communs",
    surface: "≈ 20 m²",
    details: "Hall d&apos;entrée, sas coupe-feu, cage d&apos;escalier, local technique",
  },
];

const professionalGroups = [
  {
    title: "Études & conception",
    description:
      "Valider la faisabilité, optimiser l&apos;aménagement et préparer les dossiers réglementaires.",
    items: [
      {
        role: "Architecte DPLG/DE",
        missions:
          "Relevé de l&apos;existant, esquisses, dossier de permis ou déclaration préalable, suivi architectural du chantier.",
      },
      {
        role: "Bureau d&apos;études structure",
        missions:
          "Diagnostic porteur, dimensionnement des ouvertures, renforcement planchers/murs, notes de calcul.",
      },
      {
        role: "BET fluides CVC + plomberie",
        missions:
          "Conception réseaux eau, évacuations, ventilation, chauffage/refroidissement, dimensionnement PAC/chaudière.",
      },
      {
        role: "BET électricité & domotique",
        missions:
          "Schémas électriques, calcul des puissances, conformité NFC 15-100, solutions connectées.",
      },
      {
        role: "Économiste de la construction",
        missions:
          "Estimation budgétaire lot par lot, cahier des clauses techniques particulières (CCTP), planning prévisionnel.",
      },
      {
        role: "Bureau de contrôle / coordinateur SSI",
        missions:
          "Vérification conformité ERP/PMR, sécurité incendie, coordination système sécurité incendie si requis.",
      },
      {
        role: "Géomètre-expert",
        missions:
          "Plans exacts, découpe en lots, mise à jour cadastrale, état descriptif de division si création de copropriété.",
      },
    ],
  },
  {
    title: "Phase réglementaire",
    description:
      "Obtenir toutes les autorisations avant travaux et sécuriser le montage juridique.",
    items: [
      {
        role: "Juriste urbanisme / notaire",
        missions:
          "Vérification PLU, servitudes, rédaction baux commerciaux ou règlements de copropriété.",
      },
      {
        role: "Coordinateur SPS",
        missions:
          "Plan général de sécurité et de protection de la santé (PGSPS) pour chantiers multi-entreprises.",
      },
      {
        role: "Contrôleur technique ERP",
        missions:
          "Constitution dossier accessibilité & incendie pour la commission de sécurité du local commercial.",
      },
    ],
  },
  {
    title: "Exécution du chantier",
    description:
      "Entreprises spécialisées pour réaliser chaque lot avec une coordination générale.",
    items: [
      {
        role: "Maître d&apos;œuvre d&apos;exécution / OPC",
        missions:
          "Consultation des entreprises, suivi planning, réunions de chantier, contrôle qualité.",
      },
      {
        role: "Entreprise gros œuvre",
        missions:
          "Ouvertures, renforts structurels, dalles, reprises en sous-œuvre, maçonneries, chapes.",
      },
      {
        role: "Entreprise second œuvre",
        missions:
          "Cloisons, doublages, isolations thermiques & acoustiques, faux plafonds, menuiseries intérieures.",
      },
      {
        role: "Électricien IRVE/tertiaire",
        missions:
          "Tableaux divisionnaires, appareillage, câblages data, éclairages LED, fibre, IRVE éventuelle.",
      },
      {
        role: "Plombier-chauffagiste",
        missions:
          "Distribution eau chaude/froide, évacuations, VMC double flux ou simple flux hygro, chaufferie.",
      },
      {
        role: "Entreprise CVC/ventilation",
        missions:
          "Ventilation local commercial, climatisation réversible, gestion des débits réglementaires.",
      },
      {
        role: "Menuisier / agenceur",
        missions:
          "Cuisines équipées T2/T3, placards, présentoirs local commercial, habillages sur-mesure.",
      },
      {
        role: "Solier, peintre, carreleur",
        missions:
          "Revêtements sols stratifiés, carrelage pièces humides, peintures lessivables, finitions décoratives.",
      },
      {
        role: "Serrurier, vitrier, façadier",
        missions:
          "Façade commerciale vitrée, rideau métallique, portes palières coupe-feu, garde-corps.",
      },
      {
        role: "Paysagiste / signalétique",
        missions:
          "Traitement abords, planters éventuels, signalétique commerciale, boîtes aux lettres.",
      },
    ],
  },
];

const materialCategories = [
  {
    title: "Gros œuvre & structure",
    items: [
      "Profilés acier ou poutres lamellé-collé pour renforts d&apos;ouvertures (≈ 250 kg)",
      "Béton prêt à l&apos;emploi pour reprises et chapes (≈ 15 m³)",
      "Blocs béton cellulaire ou cloison briquette pour séparatifs coupe-feu",
      "Mortiers de scellement, ancrages chimiques, longrines métalliques",
    ],
  },
  {
    title: "Isolation & cloisonnement",
    items: [
      "Ossature métallique type 48/70 mm + plaques Fermacell ou BA13 phonique",
      "Complexes isolants laine de verre 120 mm + pare-vapeur pour murs périphériques",
      "Panneaux acoustiques 45 dB pour cloisons inter-logements",
      "Isolant sous-chape (polyuréthane projeté ou TMS 50 mm)",
      "Faux plafonds suspendus + isolants laine de roche 100 mm",
    ],
  },
  {
    title: "Menuiseries & fermetures",
    items: [
      "Menuiseries extérieures aluminium/PVC double vitrage Ug 1.1, classement AEV adapté",
      "Portes palières blindées EI30 et portes intérieures âme pleine",
      "Façade vitrée local commercial + rideau métallique motorisé",
      "Garde-corps, mains courantes, boîtes aux lettres et SAS coupe-feu",
    ],
  },
  {
    title: "Plomberie, chauffage, ventilation",
    items: [
      "Chaudière gaz condensation ou PAC air/eau collective + planchers chauffants ou radiateurs basse température",
      "Ballons thermodynamiques ou préparateurs ECS (capacité totale ≈ 500 L)",
      "Réseaux PER multicouche, nourrices, siphons de sol, colonnes PVC NF",
      "VMC hygroréglable type B pour logements, CTA double flux pour local commercial",
      "Équipements sanitaires complets (bacs à douche extra-plats, WC suspendus, vasques)",
    ],
  },
  {
    title: "Électricité & courants faibles",
    items: [
      "Tableau général + 5 tableaux secondaires, disjoncteurs différentiel 30 mA type A/AC",
      "Gaines ICTA, câbles R2V & U1000R2V, coffrets de communication grade 3 TV",
      "Éclairage LED basse consommation, spots étanches salles d&apos;eau, bandes lumineuses commerce",
      "Détecteurs incendie, BAES, alarme intrusion, pré-équipement IRVE si stationnement associé",
      "Réseau RJ45 cat6a, baie de brassage pour commerce, Wi-Fi mesh",
    ],
  },
  {
    title: "Finitions & équipements",
    items: [
      "Revêtements de sols: carrelage grès cérame 45×45, stratifié AC5, sols vinyles commerce",
      "Peintures acryliques lessivables, enduits de lissage, papiers peints techniques",
      "Kits cuisines équipées (meubles, plans de travail, électroménager classé A+)",
      "Placards aménagés, dressings modulaires, banquettes d&apos;accueil commerce",
      "Éléments déco & éclairage d&apos;ambiance, bardage intérieur bois pour zones d&apos;attente",
    ],
  },
  {
    title: "Sécurité & conformité",
    items: [
      "Portes coupe-feu EI30/EI60 selon zones, ferme-portes, joints intumescents",
      "Extincteurs, RIA éventuels, signalétique évacuation, éclairage sécurité",
      "Revêtements antidérapants R11 pour circulations communes",
      "Accessoires PMR: barres d&apos;appui, rampes 6 %, platelage antidérapant",
    ],
  },
];

const milestones = [
  {
    title: "1. Diagnostic & études (6 à 8 semaines)",
    points: [
      "Relevé 3D complet et sondages structurels",
      "Avant-projet sommaire avec scénarios de surface",
      "Chiffrage initial et calendrier prévisionnel",
    ],
  },
  {
    title: "2. Autorisations & appels d&apos;offres (8 à 12 semaines)",
    points: [
      "Dossier autorisation d&apos;urbanisme + accessibilité/ERP",
      "Consultation entreprises et analyse offres",
      "Bouclage budget, planning, contrats MOE/MOD",
    ],
  },
  {
    title: "3. Travaux (6 à 8 mois)",
    points: [
      "Phase gros œuvre & structure (M1-M2)",
      "Second œuvre et techniques (M2-M5)",
      "Finitions, essais, levée des réserves (M5-M8)",
    ],
  },
  {
    title: "4. Mise en service & exploitation (4 semaines)",
    points: [
      "Réception administrative, passage commissions",
      "Dossier d&apos;ouvrages exécutés (DOE) complet",
      "Mise en location/vente des logements et ouverture commerce",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-500">
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-sm uppercase tracking-[0.25em] text-white/80">
              Transformation d&apos;un local de 200 m²
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Plan opérationnel pour créer{" "}
              <span className="font-bold text-white">
                deux T3, trois T2 et un local commercial
              </span>
            </h1>
            <p className="text-lg text-white/90 sm:text-xl">
              Synthèse des professionnels à mobiliser, des matériaux essentiels
              et des étapes clefs pour sécuriser la conception, l&apos;exécution et
              la mise en exploitation du projet.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {surfaceDistribution.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-wide text-white/70">
                  {item.surface}
                </p>
                <p className="mt-3 text-sm text-white/80">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
            <h2 className="text-3xl font-semibold text-white">
              Vision synthétique du programme
            </h2>
            <p className="mt-4 text-base text-slate-200/90">
              Hypothèse de répartition des surfaces à ajuster selon les relevés
              précis, les contraintes structurelles et la réglementation
              incendie/ERP. Prévoir une hauteur libre ≥ 2,5 m dans les logements
              et respecter les normes d&apos;accessibilité pour le commerce.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                  Capacité cible
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  5 logements
                </p>
                <p className="mt-2 text-sm text-slate-200/80">
                  Mix T3/T2 équilibré pour optimiser rendement locatif ou vente
                  en bloc.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                  Local commercial
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">40 m²</p>
                <p className="mt-2 text-sm text-slate-200/80">
                  Conforme ERP type M 5ème catégorie, façade vitrée et accès
                  PMR.
                </p>
              </div>
            </div>
          </div>
          <aside className="flex flex-col justify-between gap-6 rounded-3xl border border-blue-200/40 bg-blue-500/10 p-8 text-blue-100 shadow-xl backdrop-blur">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Indicateurs clefs
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-400" />
                  Ratio travaux estimatif : 1 400 – 1 600 € / m² (incluant
                  commerce).
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-400" />
                  Délais globaux : 12 à 16 mois entre études, autorisations,
                  chantier et mise en service.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-emerald-400" />
                  Priorité : optimisation des réseaux verticaux, acoustique
                  inter-logements, sécurité ERP.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200/30 bg-blue-400/10 p-5 text-xs uppercase tracking-[0.3em] text-blue-100/80">
              Préparer dès l&apos;esquisse : diagnostics amiante, plomb, termites,
              état des lieux contradictoire.
            </div>
          </aside>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">
              Professionnels à mobiliser
            </h2>
            <p className="text-base text-slate-200/90">
              Constituer une équipe pluridisciplinaire garantit la conformité
              réglementaire et la maîtrise des coûts. Les missions peuvent être
              regroupées via une maîtrise d&apos;œuvre complète ou un contractant
              général.
            </p>
          </div>
          <div className="space-y-10">
            {professionalGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/4 p-8 shadow-lg backdrop-blur"
              >
                <div className="flex flex-col gap-3 border-b border-white/10 pb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="text-sm text-slate-200/80">
                    {group.description}
                  </p>
                </div>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item.role}
                      className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow"
                    >
                      <p className="text-lg font-semibold text-white">
                        {item.role}
                      </p>
                      <p className="mt-3 text-sm text-slate-200/80">
                        {item.missions}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">
              Matériaux, équipements et fournitures clés
            </h2>
            <p className="text-base text-slate-200/90">
              Quantités à affiner après plans d&apos;exécution et métrés. Les
              solutions privilégiées répondent aux exigences acoustiques, aux
              normes ERP et à la performance énergétique visée (RT existant
              globale ou BBC rénovation).
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {materialCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-white/10 bg-white/4 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-100/80">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-white">
              Étapes clefs & jalons
            </h2>
            <p className="text-base text-slate-200/90">
              Chaque phase nécessite des validations intermédiaires (comptes
              rendus de chantier, visas plans exécution, levée de réserves).
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {milestones.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/4 p-8">
            <h2 className="text-3xl font-semibold text-white">
              Préparation administrative & logistique
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-amber-300" />
                Basculer le local en usage mixte via autorisation d&apos;urbanisme et
                notifier la copropriété si applicable.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-amber-300" />
                Programmer diagnostics obligatoires (amiante, plomb, DPE,
                termites, gaz, électricité, accessibilité).
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-amber-300" />
                Prévoir assurances : dommages-ouvrage, TRC, responsabilité
                civile décennale des entreprises.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-amber-300" />
                Établir un phasage de chantier garantissant les circulations et
                évacuations conformes durant les travaux.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-amber-300" />
                Anticiper les raccordements aux réseaux (eau, gaz, électricité,
                télécoms) et puissances souscrites.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-200/30 bg-emerald-500/10 p-8 text-emerald-100">
            <h2 className="text-3xl font-semibold text-white">
              Conseils de pilotage
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-300" />
                Centraliser les échanges via une plateforme collaborative (BIM,
                GED) pour suivre plans et visas.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-300" />
                Réaliser une maquette financière avec aléas 10 % sur plusieurs
                scénarios de coûts travaux.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-300" />
                Planifier les visites de la commission de sécurité et
                d&apos;accessibilité avant ouverture du commerce.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-300" />
                Prévoir un calendrier marketing/location en parallèle des
                finitions pour limiter la vacance.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-200/70 sm:px-10 lg:px-16">
          Guide établi sur la base des normes françaises en vigueur (ERP 5ème
          catégorie, RT existant) — à confirmer selon contexte local et études
          détaillées.
        </div>
      </footer>
    </div>
  );
}
