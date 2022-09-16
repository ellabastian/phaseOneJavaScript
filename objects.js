const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

  console.log(person['address']['city'])
  console.log(person.hobbies[1])

  const cohort = {
    name: 'May2022',
    id: 1234,
    names: ["Ella", "Sunitha", "Phil", "Boris"]
  };

  function cohort_info(cohort) {
    console.log(cohort.id + " " + cohort.name + ". There are " + cohort.names.length + " students in this cohort");
  }

  cohort_info(cohort)