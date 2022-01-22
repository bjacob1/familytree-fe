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
    const paternalGrandfather =
      !father || father.father_id === 0
        ? null
        : (await axios.get(`/api/people/number/${father.father_id}`)).data;
    const paternalGrandmother =
      !father || father.mother_id === 0
        ? null
        : (await axios.get(`/api/people/number/${father.mother_id}`)).data;
    const maternalGrandfather =
      !mother || mother.father_id === 0
        ? null
        : (await axios.get(`/api/people/number/${mother.father_id}`)).data;
    const maternalGrandmother =
      !mother || mother.mother_id === 0
        ? null
        : (await axios.get(`/api/people/number/${mother.mother_id}`)).data;
    setResources({
      person,
      father,
      mother,
      spouse,
      paternalGrandfather,
      paternalGrandmother,
      maternalGrandfather,
      maternalGrandmother,
      children: await axios.get(`/api/people/${id}/children`),
      siblings: await axios.get(`/api/people/${id}/siblings`),
    });
  };

  const getFullName = (person) => {
    const fullName =
      person.middle_name.length === 1
        ? `${person.prefix} ${person.first_name} ${person.middle_name} ${person.last_name}`.trim()
        : `${person.prefix} ${person.first_name} ${person.last_name}`.trim();
    return person.nickname.length !== 0
      ? `${fullName} (${person.nickname})`
      : fullName;
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
  const service = { getAll, getFullName, filterByName, getFamilyById };
  return [resources, service];
};

export default useResource;
