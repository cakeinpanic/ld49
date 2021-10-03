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
      'score': -2
    },
    {
      'text': 'You look sad, Greg, wanna talk?',
      'score': 3
    },
    {
      'text': 'Wow, talking lamp, lol',
      'score': -1
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
        'score': 2
      },
      {
        'text': 'Ignore',
        'score': -2
      },
      {
        'text': 'Everyone\'s lonely...',
        'score': -1
      },
      {
        'text': 'I\'m lonely too',
        'score': 1
      }
    ]
  }
]
