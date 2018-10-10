const BASE_API = 'https://api-radon.tfl.gov.uk/'

export default {
  trainJounrney: (from, to) => `${BASE_API}Journey/JourneyResults/${from}/to/${to}?AccessibilityPreference=norequirements&CyclePreference=none&JourneyPreference=leastinterchange&MaxWalkingMinutes=40&numberOfTrips=3&Mode=bus%2Ctube%2Ctflrail%2Ctram%2Coverground%2Cdlr%2Ccable-car%2Criver-bus%2Cnational-rail%2Ccoach%2Creplacement-bus&NationalSearch=False&TimeIs=Departing&WalkingOnly=False&IsExternalWidget=False&WalkingSpeed=average&alternativecycle=true&alternativewalking=true&WalkingOptimization=False&app_id=8268063a&app_key=14f7f5ff5d64df2e88701cef2049c804`,
  liveBusUpdate : (stop) => `https://transportapi.com/v3/uk/bus/stop/${stop}/live.json?app_key=b0ff1186e7e90369d423c1be16b1ae88&app_id=d476e439&group=route&nextbuses=yes`
}
