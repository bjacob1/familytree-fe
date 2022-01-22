import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Result from './results/Result';
import useResource from '../hooks/resource';

function Results() {
  const params = useParams();
  const [people, peopleService] = useResource();
  const navigate = useNavigate();
  useEffect(() => {
    peopleService.filterByName(params.term);
  }, [params]);
  return (
    <div className="container">
      <div className="row center">
        <div className="col-md-12" align="left">
          Click on the name to see the person&apos;s details.
          <br />
          <br />
          <table className="table table-striped">
            <tbody>
              {!people || people.length === 0 ? (
                <Result message="No results found" />
              ) : (
                people.map((person) =>
                  !person ? null : (
                    <Result
                      key={person.id}
                      image={person.image}
                      name={peopleService.getFullName(person)}
                      onClick={() => navigate(`/result/${person.id}`)}
                    />
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
