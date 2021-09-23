import React from 'react';

import whitecheck from "../assets/svgs/white_check.svg";
import greencheck from "../assets/svgs/green_check.svg";
import greycheck from "../assets/svgs/grey_check.svg";
import DataNormalization from '../utils/DataNormalization';

function MobileStateStatus({onClick, status}) {

    let classStatus = (prefix) => {
        switch (status) {
          case null: {
            return `${prefix}--disabled`;
          }
          case false: {
            return `${prefix}--uncompleted`;
          }
          default: {
            return "";
          }
        }
      };

    return(
        <div onClick={() => {
            onClick();
        }} className="mobilestatus">
            <div className="mobilestatus__container">
                <div className={`mobilestatus__check ${classStatus('mobilestatus__check')}`}>
                    {status === null && <img src={greycheck} alt={"Status"} />}
                    {status === true && <img src={whitecheck} alt={"Status"} />}
                    {status === false && <img src={greencheck} alt={"Status"} />}
                </div>
                <div className={`mobilestatus__text ${classStatus('mobilestatus__text')}`}>
                    {DataNormalization.buttonTextState(status)}
                </div>
            </div>
        </div>
    );
}

export default MobileStateStatus;