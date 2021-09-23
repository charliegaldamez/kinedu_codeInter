import React, { useEffect, useState } from 'react';
import Button from "./components/Button";
import MilestoneList from './components/MilestoneList';
import Modal from './components/Modal';
import SelectionPills from './components/SelectionPills';
import { milestoneAreas } from './constants/constants';
import MilestonesService from './services/MilestonesService';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [counter, setcounter] = useState(1);
  const [storedData, setStoredData] = useState([]);
  const [area, setarea] = useState(milestoneAreas[0]);
  const [milestonesList, setMilestonesList] = useState(area.skill.milestones);

  let buttonOnClick = () => {
    if (counter === milestoneAreas.length) {
      console.log(storedData);
      setShowModal(true);
    } else {
      setcounter(counter + 1);;
    }
  }
  
  useEffect(() => {
    setarea(milestoneAreas[counter - 1]);
  }, [counter]);

  useEffect(() => {
    //TODO: Llamada el servicio
    // const milestoneService = new MilestonesService({skillId: area.skill.id});
    // milestoneService.getMilestones().then((response) => {
    //   const {data} = response;
    //   const {skill} = data;

    // });
    setMilestonesList(area.skill.milestones);
  }, [area]);

  useEffect(() => {
  }, [milestonesList])

  return (
    <div className="milestones">
      <Modal 
        title="Congratulations!"
        description="You can see how your child has progressed"
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="milestones__container">
        <div className={`milestones__areas milestones__areas--${area.id}`}>
          <div className="container flex flex-justify-center flex-align-center">
            <h1 className="milestones__title">Areas</h1>
            <SelectionPills
              area={area.id}
              milestonesData={milestoneAreas}
            />
            <div className="divider divider--white"></div>
            <div className="milestones__info">
              <p className="milestones__info__title">Skill: {area.skill.title}</p>
              <p className="milestones__info__description">{area.skill.description}</p>
            </div>
          </div>
        </div>
        <div className="milestones__list">
          <MilestoneList 
            itemList = {milestonesList}
            setItemList = {setMilestonesList}
          />
        </div>
        <div className="milestones__button-container">
          <Button onClick={buttonOnClick}>
            {counter === milestoneAreas.length? "Finish Assesment" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
