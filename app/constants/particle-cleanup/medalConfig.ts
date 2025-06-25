export const MEDAL_CONFIG = {
  gold: {
    cutoff: 15,
    text: 'Gold Medal',
    color: '#8A7400',
    bgClass: 'before:bg-[#8a7400]',
    srText: 'Gold, Less Than 15 seconds.',
    time: '15s',
    icon: 'hugeicons:less-than',
  },
  silver: {
    cutoff: 21,
    text: 'Silver Medal',
    color: '#737373',
    bgClass: 'before:bg-[#737373]',
    srText: 'Silver, 15 to 20 seconds.',
    time: '15s-20s',
  },
  bronze: {
    cutoff: 26,
    text: 'Bronze Medal',
    color: '#A2652A',
    bgClass: 'before:bg-[#a2652a]',
    srText: 'Bronze, 21 to 25 seconds.',
    time: '21s-25s',
  },
}
