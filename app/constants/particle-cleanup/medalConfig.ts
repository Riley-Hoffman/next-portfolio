export const MEDAL_CONFIG = {
  gold: {
    cutoff: 15,
    name: 'Gold Medal',
    color: '#8A7400',
    srText: 'Less than 15 seconds',
    time: 'less than 15s',
  },
  silver: {
    cutoff: 21,
    name: 'Silver Medal',
    color: '#737373',
    srText: '15 to 20 seconds',
    time: '15s-20s',
  },
  bronze: {
    cutoff: 26,
    name: 'Bronze Medal',
    color: '#A2652A',
    srText: '21 to 25 seconds',
    time: '21s-25s',
  },
}

export const getMedalCriteriaArray = () => [
  {
    name: MEDAL_CONFIG.gold.name,
    color: MEDAL_CONFIG.gold.color,
    srText: MEDAL_CONFIG.gold.srText,
    time: MEDAL_CONFIG.gold.time,
  },
  {
    name: MEDAL_CONFIG.silver.name,
    color: MEDAL_CONFIG.silver.color,
    srText: MEDAL_CONFIG.silver.srText,
    time: MEDAL_CONFIG.silver.time,
  },
  {
    name: MEDAL_CONFIG.bronze.name,
    color: MEDAL_CONFIG.bronze.color,
    srText: MEDAL_CONFIG.bronze.srText,
    time: MEDAL_CONFIG.bronze.time,
  },
]

export const getMedalDisplayArray = () => [
  {
    cutoff: MEDAL_CONFIG.gold.cutoff,
    name: MEDAL_CONFIG.gold.name,
    color: MEDAL_CONFIG.gold.color,
  },
  {
    cutoff: MEDAL_CONFIG.silver.cutoff,
    name: MEDAL_CONFIG.silver.name,
    color: MEDAL_CONFIG.silver.color,
  },
  {
    cutoff: MEDAL_CONFIG.bronze.cutoff,
    name: MEDAL_CONFIG.bronze.name,
    color: MEDAL_CONFIG.bronze.color,
  },
]
