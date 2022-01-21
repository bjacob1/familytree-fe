import { useState } from 'react';
import axios from 'axios';

const useResource = () => {
  const [resources, setResources] = useState();

  const getAll = async () => {
    setResources((await axios.get('/api/people/')).data);
  };

  const getFamilyById = async (id) => {
    const person = (await axios.get(`/api/people/${id}`)).data;
    const father =
      person.father_id === 0
        ? null
        : (await axios.get(`/api/people/number/${person.father_id}`)).data;
    const mother =
      person.mother_id === 0
        ? null
        : (await axios.get(`/api/people/number/${person.mother_id}`)).data;
    const spouse =
      person.spouse_id === 0
        ? null
        : (await axios.get(`/api/people/number/${person.spouse_id}`)).data;
    setResources({ person, father, mother, spouse });
  };

  const filterByName = async (term) => {
    const allPeople = (await axios.get('/api/people')).data;
    setResources(
      allPeople.filter((person) => {
        const formattedTerm = term
          .toLowerCase()
          .replace(/\s+/g, '')
          .replace('.', '');
        const fullNameWithMiddle =
          `${person.prefix} ${person.first_name} ${person.middle_name} ${person.last_name}`
            .replace(/\s+/g, '')
            .toLowerCase()
            .replace('.', '');
        const fullName =
          `${person.prefix} ${person.first_name} ${person.last_name}`
            .replace(/\s+/g, '')
            .toLowerCase()
            .replace('.', '');
        const nicknameFull =
          `${person.prefix} ${person.nickname} ${person.last_name}`
            .replace(/\s+/g, '')
            .toLowerCase()
            .replace('.', '');
        const secondaryNicknameFull =
          `${person.prefix} ${person.secondary_nickname} ${person.last_name}`
            .replace(/\s+/g, '')
            .toLowerCase()
            .replace('.', '');
        return (
          (fullName.includes(formattedTerm) ||
            fullNameWithMiddle.includes(formattedTerm) ||
            nicknameFull.includes(formattedTerm) ||
            secondaryNicknameFull.includes(formattedTerm)) &&
          person.family.includes('K')
        );
      })
    );
  };
  const service = { getAll, filterByName, getFamilyById };
  return [resources, service];
};

export default useResource;
