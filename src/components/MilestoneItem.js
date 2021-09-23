import React, { useEffect, useState } from "react";
import DataNormalization from "../utils/DataNormalization";
import Button from "./Button";
import MobileStateStatus from "./MobileStateStatus";

function MilestoneItem({ item, updateList }) {
  const [itemMilestone, setItemMilestone] = useState(item);

  let buttonClass = () => {
    switch (itemMilestone.master) {
      case null: {
        return "button--disabled";
      }
      case false: {
        return "button--uncompleted";
      }
      default: {
        return "";
      }
    }
  };
  
  let changeItemChecked = () => {
    let temp = itemMilestone;
    const status = temp.master === null ? true : !temp.master;
    temp = { ...temp, master: status };
    setItemMilestone(temp);
  }

  useEffect(() => {
    updateList(itemMilestone);
  });

  return (
    <div className="milestoneitem">
      <div className="milestoneitem__info">
        <p className="milestoneitem__info__title">{item.title}</p>
        <p className="milestoneitem__info__time">
          Usually achieved by: 2 - 4 months
        </p>
      </div>
      <div className="milestoneitem__state">
        <div className="milestoneitem__button">
          <Button
            onClick={() => {
                changeItemChecked();
            }}
            customClass={`${buttonClass()} milestoneitem__button--status`}
          >
            {DataNormalization.buttonTextState(itemMilestone.master)}
          </Button>
          <MobileStateStatus 
            onClick={() => {
              changeItemChecked();
            }}
            status={itemMilestone.master}
          />
        </div>
      </div>
    </div>
  );
}

export default MilestoneItem;
