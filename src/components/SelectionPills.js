import React from 'react';

function SelectionPills({milestonesData, area}) {

    return(
        <div className={"selection-pills"}>
            <div className={"selection-pills__container"}>
                {milestonesData.map((areaItem) => {
                    return (
                        <div key={areaItem.id} className={`selection-pills__item selection-pills__item--${areaItem.id} ${areaItem.id === area? 'active' : ''}`}>
                            <span>{areaItem.title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SelectionPills;