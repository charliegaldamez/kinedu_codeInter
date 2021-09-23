import { token } from "../constants/constants";
import { apiRoute } from "../constants/routes";

class MilestonesService {
    skillId;

    constructor({skillId}) {
        this.skillId = skillId;
    }

    async getMilestones() {
        const headers = {
          Accept: "application/json",
        //   "Content-Type": "application/json",
          Authorization: `Token token=${token}`,
        //   credentials: 'include',
          "Access-Control-Allow-Origin": "*",
        };
    
        const options = {
          method: "GET",
          mode: 'cors',
          headers: headers,
        };
    
        const response = await fetch(`${apiRoute}/${this.skillId}/milestones`, options);
        if (response.ok) {
          return response.json();
        } else {
          return [];
        }
    
      }
}

export default MilestonesService;