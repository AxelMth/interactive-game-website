export default function Occasions() {
  const occasions = [
    {
      title: "Mariages",
      description: "Jeux de couple, quiz sur les mariés, classements photos",
      icon: "💍",
      image: "https://media.istockphoto.com/id/1327459161/fr/photo/trois-fans-de-football-assis-sur-un-canap%C3%A9-regardent-un-match-%C3%A0-la-t%C3%A9l%C3%A9vision-utilisent.jpg?s=2048x2048&w=is&k=20&c=-IZHMwKxoNefi5TUWhcHdCXC-6j4jT9r6HxxWsSEgCs=",
    },
    {
      title: "Anniversaires",
      description: "Quiz générationnel, défis par équipes, souvenirs partagés",
      icon: "🎂",
      image: "https://media.istockphoto.com/id/1327459161/fr/photo/trois-fans-de-football-assis-sur-un-canap%C3%A9-regardent-un-match-%C3%A0-la-t%C3%A9l%C3%A9vision-utilisent.jpg?s=2048x2048&w=is&k=20&c=-IZHMwKxoNefi5TUWhcHdCXC-6j4jT9r6HxxWsSEgCs=",
    },
    {
      title: "Événements familiaux",
      description: "Jeux intergénérationnels, quiz culture, moments de complicité",
      icon: "👨‍👩‍👧‍👦",
      image: "https://media.istockphoto.com/id/1327459161/fr/photo/trois-fans-de-football-assis-sur-un-canap%C3%A9-regardent-un-match-%C3%A0-la-t%C3%A9l%C3%A9vision-utilisent.jpg?s=2048x2048&w=is&k=20&c=-IZHMwKxoNefi5TUWhcHdCXC-6j4jT9r6HxxWsSEgCs=",
    },
    {
      title: "Soirées entre amis",
      description: "Jeux de culture générale, défis fun, ambiance décontractée",
      icon: "🎉",
      image: "https://media.istockphoto.com/id/1327459161/fr/photo/trois-fans-de-football-assis-sur-un-canap%C3%A9-regardent-un-match-%C3%A0-la-t%C3%A9l%C3%A9vision-utilisent.jpg?s=2048x2048&w=is&k=20&c=-IZHMwKxoNefi5TUWhcHdCXC-6j4jT9r6HxxWsSEgCs=",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Pour quelles occasions ?
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          Adapté à tous vos événements privés
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {occasions.map((occasion) => (
            <div
              key={occasion.title}
              className="rounded-lg border bg-gradient-to-br from-white to-gray-50 overflow-hidden shadow-sm"
            >
              <img 
                src={occasion.image as string} 
                alt={occasion.title} 
                width={1000} 
                height={1000} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{occasion.title}</h3>
                <p className="text-gray-600">{occasion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
