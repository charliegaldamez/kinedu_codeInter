import React from 'react';
import MilestoneItem from './MilestoneItem';

function MilestoneList({itemList, setItemList}) {

    let updateList = (updatedItem) => {
        let temp = itemList;
        const index = itemList.findIndex((element) => {
            return element.id === updatedItem.id;
        });
        temp[index] = updatedItem;
        setItemList(temp);
    }

    return(
        <div className="milestonelist">
            <div className="container">
                {itemList.map((item) => {
                    return(
                        <MilestoneItem
                            key={item.id}
                            item={item}
                            updateList={updateList}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MilestoneList;