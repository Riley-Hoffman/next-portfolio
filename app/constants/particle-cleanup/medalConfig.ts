export const MEDAL_CONFIG = {
  gold: {
    cutoff: 15,
    name: 'Gold Medal',
    color: '#8A7400',
    bgClass: 'before:bg-[#8a7400]',
    srText: 'Less than 15 seconds',
    time: 'less than 15s',
  },
  silver: {
    cutoff: 21,
    name: 'Silver Medal',
    color: '#737373',
    bgClass: 'before:bg-[#737373]',
    srText: '15 to 20 seconds',
    time: '15s-20s',
  },
  bronze: {
    cutoff: 26,
    name: 'Bronze Medal',
    color: '#A2652A',
    bgClass: 'before:bg-[#a2652a]',
    srText: '21 to 25 seconds',
    time: '21s-25s',
  },
}
