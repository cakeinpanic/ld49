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
      'text': 'I\'m not interested',
      'score': -1
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
        'text': 'Your are helping people to see things at night or just to feel cozy, you are good lamp',
        'score': 1
      }
    ]
  },
  {
    'question': 'I don\'t have any friends, why do other lamps avoid me?',
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
        'text': 'Tell me more about other lamps. Why do think so?',
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
        'score': -0.5
      },
      {
        'text': 'I heard that they have a nice salary',
        'score': -1
      },
      {
        'text': 'You should give it a try. I belive in you.',
        'score': 1
      }
    ]
  },
  {
    'question': 'They keep forgeting to turn me off, I can burn out!',
    used: false,
    'answers': [
      {
        text: 'I don\'t know. You should ask your them, not me',
        'score': -1
      },
      {
        'text': 'I thought you like your work',
        'score': -2
      },
      {
        'text': '...',
        'score': 0
      },
      {
        'text': 'You should not wait for their attention. You are just a lamp',
        'score': -2
      }
    ]
  },
]
