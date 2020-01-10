import {
  elmsteadWoods,
  elmsteadWoodsStop,
  homeStop,
  londonBridge,
  mottingham,
  mottinghamStop
} from '../constants/destinations'
import axios from 'axios'
import endpoints from '../constants/endpoints'

const getJourneys = ():Promise<any> => {
  return axios.all([
    axios.get(endpoints.trainJounrney(elmsteadWoods, londonBridge)),
    axios.get(endpoints.trainJounrney(mottingham, londonBridge)),
    axios.get(endpoints.trainJounrney(londonBridge, mottingham)),
    axios.get(endpoints.trainJounrney(londonBridge, elmsteadWoods)),
    axios.get(endpoints.liveBusUpdate(homeStop)),
    axios.get(endpoints.liveBusUpdate(elmsteadWoodsStop)),
    axios.get(endpoints.liveBusUpdate(mottinghamStop))
  ])
    .then(axios.spread((fromElmstead, fromMottingham, toElmstead, toMottingham, homeBusStop, elmsteadBusStop, mottinghamBusStop) =>
      ({fromElmstead, fromMottingham, toElmstead, toMottingham, homeBusStop, elmsteadBusStop, mottinghamBusStop})))
    .catch(error => console.error('Error:', error))
}

export default {
  getJourneys
}
