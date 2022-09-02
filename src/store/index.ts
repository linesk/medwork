import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
	state: () => ({
		beds: {
      '4A': {free: 1, dc:0, admit: []},
      '4A IMC': {free:2, dc: 1, admit: ['sompong']},
      '4C': {free: 0, dc:0, admit: []},
    },
    reserve: {
      'AA2220': {
        name: 'Perm',
        gender: 'M',
        wards: ['4A', 'SW9'],
        note: '',
      },
      'JQ1234': {
        name: 'Jui',
        gender: 'M',
        wards: ['4A'],
        note: '',
      },
      'KQ1033': {
        name: 'Alfred Roman',
        gender: 'F',
        wards: ['4C'],
        note: 'admit for EGD',
      },
    }
	}),
});
