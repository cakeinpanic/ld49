export interface IState {
  question: string,
  used: boolean,
  answers: IAnswer[]
}
export interface IAnswer { text: string, score: number }
export const FIRST_PHRASE: IState = {
  'question': 'Hey...I\'m Greg the Lamp',
  used: false,
  'answers': [
    {
      'text': 'Hi, Greg',
      'score': 0
    },
    {
      'text': 'Just give me that light already',
      'score': -1.5
    },
    {
      'text': 'You look sad, Greg, wanna talk?',
      'score': .5
    },
    {
      'text': 'Wow, talking lamp, lol',
      'score': -.5
    }
  ]
}
export const WIN_PHRASE: IState = {
  'question': 'Thank you, really, thank you! I was so unstable, I thought I\'m gonna die from loneliness. But now I believe in my future',
  used: false,
  'answers': [
    {
      'text': 'Bye, Greg! It was so nice meeting you. I\'m glad I helped! Let\'s chat again, I enjoyed it',
      'score': 0
    },

  ]
}

export const LOOSE_PHRASE: IState = {
  'question': 'I was unstable in the beginning, but now I am just dead, just dead, I can not move, I can not light. I will stay here on the floor forever',
  used: false,
  'answers': [
    {
      'text': 'Oh no, did I really make you so desperate by only few words I said?\nAre words SO powerful?\nI want to try again',
      'score': 0
    },

  ]
}
export const BORING_PHRASE: IState = {
  'question': 'I was so unstable in the beginning, and hoped that you could help me, but looks like I\'m just a useless lamp and there is no chance for me to feel needed',
  used: false,
  'answers': [
    {
      'text': 'Greg, you are mistaken, you are needed and loved, I want to chat with you more to prove it',
      'score': 0
    },

  ]
}


export const REST_PHRASES: IState[] = [
  {
    'question': 'I feel lonely',
    used: false,
    'answers': [
      {
        text: 'Hug',
        'score': 1
      },
      {
        'text': 'Ignore',
        'score': -1
      },
      {
        'text': 'Everyone\'s lonely...',
        'score': -.5
      },
      {
        'text': 'I\'m lonely too',
        'score': .5
      }
    ]
  },
  {
    'question': 'I feel abused, everyone uses me to get what they want!',
    used: false,
    'answers': [
      {
        text: 'Hug',
        'score': 1
      },
      {
        'text': 'Turn him off',
        'score': -1
      },
      {
        'text': '...',
        'score': -.5
      },
      {
        'text': 'Your are helping people to see things at night or just to feel cozy, you are a good lamp',
        'score': 1
      }
    ]
  },
  {
    'question': 'I don\'t have any friends. Why do other lamps avoid me?',
    used: false,
    'answers': [
      {
        text: 'I\'m not a lamp, but we can be friends',
        'score': 1
      },
      {
        'text': 'Nobody wanna be a friend with you, you are just an old lamp',
        'score': -2
      },
      {
        'text': 'Start looking for another lamp',
        'score': -1
      },
      {
        'text': 'Tell me more about other lamps. Why do you think so?',
        'score': .5
      }
    ]
  },
  {
    'question': 'Sometimes I think about changing my job. Is it real for lamp like me to become a game dev?',
    used: false,
    'answers': [
      {
        text: 'Nah, you should be good at math',
        'score': -2
      },
      {
        'text': 'Hug',
        'score': 0.5
      },
      {
        'text': 'I heard that they have a nice salary',
        'score': .5
      },
      {
        'text': 'You should give it a try. I believe in you.',
        'score': 1
      }
    ]
  },
  {
    'question': 'They keep forgetting to turn me off, I can burn out!',
    used: false,
    'answers': [
      {
        text: 'I don\'t know. You should ask your them, not me',
        'score': -2
      },
      {
        'text': 'I thought you like your work',
        'score': -.5
      },
      {
        'text': '...',
        'score': 0
      },
      {
        'text': 'You should not wait for their attention. Remind of yourself',
        'score': 1
      }
    ]
  },
  {
    'question': 'I think I\'m burning out',
    used: false,
    'answers': [
      {
        text: 'Oh lamps, did not know you also can burn out',
        'score': 0
      },
      {
        'text': 'You are just being lazy',
        'score': -2
      },
      {
        'text': '"Burning out" it\'s a myth',
        'score': -1
      },
      {
        'text': 'It must be tense. How long have you been feeling this?',
        'score': 2
      }
    ]
  },
  {
    'question': 'Smart lamps?! Why do they buy them? Do you think I\'am stupid?',
    used: false,
    'answers': [
      {
        text: 'You could ask google if you had wifi',
        'score': -2
      },
      {
        'text': 'People appreciate your warm light, have you notice that?',
        'score': 2
      },
      {
        'text': 'You are just too old to get it',
        'score': -1
      },
      {
        'text': 'You are just different, there are not better than you',
        'score': 1
      }
    ]
  },
  {
    'question': 'I have been feeling irritated lately',
    used: false,
    'answers': [
      {
        text: '... Oh sorry, What? I was checking Facebook.',
        'score': -2
      },
      {
        'text': 'You should find a girlfriend. She will chill you',
        'score': -.5
      },
      {
        'text': 'Tell me what irritates you the most',
        'score': 1
      },
      {
        'text': 'It\'s all about weather',
        'score': -1
      }
    ]
  },
  {
    'question': 'I feel like I don\'t do enough',
    used: false,
    'answers': [
      {
        text: 'I think that we all do the best we can',
        'score': -1
      },
      {
        'text': 'What blocks you?',
        'score': 1
      },
      {
        'text': 'Just work harder',
        'score': -2
      },
      {
        'text': '...',
        'score': 0
      }
    ]
  },
]
